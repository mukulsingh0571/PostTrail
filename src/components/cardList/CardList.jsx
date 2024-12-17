"use client"; // Ensures the component runs only on the client side

import React, { useEffect, useState } from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

// Set up the base URL dynamically
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || // Custom base URL
  process.env.NEXT_PUBLIC_VERCEL_URL || // Vercel deployment URL
  "http://localhost:3000"; // Fallback for local development

const CardList = ({ page = 1, cat = "" }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const POST_PER_PAGE = 4;

  // Fetch posts data
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${baseURL}/api/posts?page=${page}&cat=${cat || ""}`,
          {
            cache: "no-store", // Prevent caching for fresh data
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch posts. Status: ${res.status}`);
        }

        const result = await res.json();
        setPosts(result.posts || []);
        setCount(result.count || 0);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page, cat]);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts.map((item) => <Card item={item} key={item._id} />)
        ) : (
          <p className={styles.noPosts}>No posts available.</p>
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
