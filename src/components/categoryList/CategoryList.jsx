import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || // Custom base URL (set by you)
  process.env.NEXT_PUBLIC_VERCEL_URL || // Vercel auto-generated URL
  "http://localhost:3000"; // Fallback for local development

const getData = async () => {
  const res = await fetch(`${baseURL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
          href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img &&( 
              <Image
                src={item.img}
               alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
