import React from "react";
import styles from "./page.module.css";
import { postData } from "../postData";

export default function Post({ params }) {
  const { slug } = params;

  console.log(postData);
  const post = postData.find((item) => item.slug === slug);

  console.log(post);
  return (
    <div className={styles.article}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
