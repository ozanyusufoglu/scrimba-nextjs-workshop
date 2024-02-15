import PostPreview from "@/app/components/postPreview/PostPreview";
import Link from "next/link";
import { postData } from "./postData";

export default function Posts() {
  const postPreviews = postData.map((post, index) => {
    return <PostPreview key={index} {...post} />;
  });

  return <section className="posts">{postPreviews}</section>;
}
