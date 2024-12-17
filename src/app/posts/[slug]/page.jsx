"use client"; // Use this only if you're in the App Router

import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import DOMPurify from "dompurify"; // Correct import

const getData = async (slug) => {
  const baseURL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return <div>Error: Post not found or invalid slug.</div>;
  }

  let data;

  try {
    data = await getData(slug);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return <div>Error loading post: {error.message}</div>;
  }

  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString()
    : "Unknown date";

  // Only sanitize on the client side
  const cleanHTML =
    typeof window !== "undefined" ? DOMPurify.sanitize(data?.desc) : data?.desc;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt="User Avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt="Post Image"
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: cleanHTML,
            }}
          />
          <div className={styles.comments}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
