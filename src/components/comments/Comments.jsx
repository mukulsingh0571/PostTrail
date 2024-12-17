"use client";

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

// Base URL setup dynamically for Vercel and local development
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000");

// Custom fetcher function for SWR
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Failed to fetch comments");
    throw error;
  }

  return res.json();
};

const Comments = ({ postSlug }) => {
  const { status } = useSession(); // Check user session status
  const [desc, setDesc] = useState(""); // State for new comment
  const [error, setError] = useState(null); // Error state
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  // SWR to fetch comments dynamically
  const { data, mutate, isLoading } = useSWR(
    `${baseURL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  // Handle comment submission
  const handleSubmit = async () => {
    if (!desc.trim()) return; // Prevent empty submissions
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`${baseURL}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc, postSlug }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      setDesc(""); // Reset input field
      mutate(); // Revalidate comments
    } catch (err) {
      console.error("Error submitting comment:", err.message);
      setError("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {/* Comment input area for authenticated users */}
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      ) : (
        <Link href="/login" className={styles.loginLink}>
          Login to write a comment
        </Link>
      )}

      {/* Display comments */}
      <div className={styles.comments}>
        {isLoading ? (
          <p className={styles.loading}>Loading comments...</p>
        ) : data?.length > 0 ? (
          data.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt="User Image"
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        ) : (
          <p className={styles.noComments}>No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
