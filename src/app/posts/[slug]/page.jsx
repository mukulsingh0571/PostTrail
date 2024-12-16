import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

// Async function to fetch data with error handling
const getData = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/posts/${slug}`,
    { cache: "no-store" }
  );

  // Handle response errors
  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  // Ensure the slug is valid, fallback or redirect if needed
  if (!slug) {
    return <div>Error: Post not found or invalid slug</div>;
  }

  // Fetch data using the getData function
  let data;
  try {
    data = await getData(slug);
  } catch (error) {
    return <div>Error loading post: {error.message}</div>;
  }

  // Get current date dynamically (if desired, or use date from data)
  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString()
    : "Unknown date";

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="Post Image" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
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
