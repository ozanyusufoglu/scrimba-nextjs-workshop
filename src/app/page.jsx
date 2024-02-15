import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Posts from "./posts/page";

const blogContentData = [
  {
    slug: "javascript",
    title: "Javascript",
    id: 0,
    previewItems: ["Programming language", "Makes your UI programmable",
      "Lets you to fetch data"],
    content: "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
  },
  {
    slug: "react.js",
    title: "React.js",
    id: 1,
    previewItems: ["Frontend library",
      "Reusable UI components",
      "Dynamically working on client side",
      "code downloads to browser"],
    content: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js"
  },
  {
    slug: "nextjs",
    title: "Nextjs",
    id: 2,
    previewItems: ["Full-stack App Framework",
      "All-in-one backend services",
      " Working on both client and server side",
      "Easy integration with Vercel"],
    content: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation."
  }
]

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTitle}>
            <h1 className={styles.title}>Welcome to Scrimba Nextjs workshop!</h1>
            <p>We will be talking about Nextjs and fundamentals</p></div>
          <div className={styles.heroImage}>
            <Image
              className={styles.reactLogo}
              src="/react.svg"
              width={150}
              height={150}
              alt="Picture of the author">
            </Image>

            <Image
              src="/next.svg"
              width={200}
              height={200}
              alt="Picture of the author">
            </Image>

          </div>
        </div>

      </section>

      <section className={styles.blog}>
        <Posts />
      </section>

      {/* <section>
        Features
      </section> */}
    </main>
  );
}
