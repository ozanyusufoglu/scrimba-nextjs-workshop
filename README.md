# NEXT.js Workshop

### Prerequisites

- js and react fundamentals
- css fundamentals
- general web concepts
- a little bit cmd line tools

---

## Theory

- Presentation
  - What’s NEXTjs Frameworks
  - Frameworks vs UI libraries
  - Frameworks can be opinionated, like UI libraries
  - What’s the advantage of using NEXT.js instead of only React
  - Nextjs and Vercel

---

## Application

Install latest NEXT.js

```jsx
npx create-next-app@latest
```

- Nextjs setup steps
  - scrimba workshop
  - no typescript
  - no tailwind
  - with app router
  - with or without SRC file

### APP ROUTER AND ROUTING BETWEEN PAGES

- each folder is a route
- each folder needs a page.jsx
- **LETS CHANGE THE HOME PAGE**
- `/app/page.jsx`

```
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Scrimba Bootcamp!</h1>
    </main>
  );
}
```

- **LET’S CREATE ANOTHER PAGE : ABOUT**
- `/app/about/page.jsx`

```jsx
import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.component}>
      <h1>About this workshop</h1>
      <p>This is a workshop over NEXT.js</p>
    </div>
  );
}
```

- each page can have it’s own individual css and use global.css
  - **LETS CHANGE THE `global.css` → DELETE PRE-POPULATED VALUES**
  - body → background → white

### A LAYOUT CAN BE USED TO WRAP ALL PAGES UNDER THE APP ROUTER

- It acts like a template, both structure-wise and style-vise

  - LET’S DEFINE THE FONT WE WANT TO USE IN OUR APP
  - `/app/layout.js`

  ```jsx
  import { Karla } from "next/font/google";
  const karla = Karla({ subsets: ["latin-ext"] });

  export const metadata = {
    title: "Nextjs workshop for Scrimba",
    description: "Author: Ozan",
  };

  <body className={karla.className}>{children}</body>;
  ```

  -

- LETS SAY YOU’LL USE HEADER ELEMENT FOR **NAVIGATION** ON EVERY PAGE ON YOUR LANDING PAGE

  - Create a folder called `components` and add `Header.jsx` file inside. We’ll use this `components` to store our component files inside and keep our app structured and tidy.
  - under `/components/header/Header.jsx`

    ```
    import React from "react";
    import styles from "./header.module.css"

    export default function Header() {

        return <div className={styles.component}>
            <h3 className={styles.headerItem}>logo</h3>
            <h3 className={styles.headerItem}>navigation</h3>
            <h3 className={styles.headerItem}>menu</h3>
        </div>
    }
    ```

  - **Then the css file to style this page, I use css modules**
  - create the file `/components/header/header.module.jsx`

    ```
    .component {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 2rem;
        background-color: lavender;
    }

    .headerItem {
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }

    .headerItem:hover {
        transform: scale(1.2);
        color: blueviolet
    }
    ```

    **LETS SAY WE’LL ALSO NEED A FOOTER FOR EVERY PAGE ON OUR LANDING PAGE**

  - create the file `/components/footer/Footer.jsx`
  - also create the styling file `/components/footer/footer.module.jsx`
    OK, FROM NOW ON ALL PAGES ON OUR ROOT WILL SHARE THE SAME LAYOUT.

  ***

  ### DYNAMIC ROUTES

  **LET’S CREATE SOME POST PAGES AND ACCESS THEM THROUGH DYNAMIC ROUTES**
  Let’s say that our posts data is as below, and we already stored it in a file inside the app.

  ```jsx
  export const postData = [
    {
      slug: "javascript",
      title: "Javascript",
      id: 0,
      previewItems: [
        "Programming language",
        "Makes your UI programmable",
        "Lets you to fetch data",
      ],
      content:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    },
    {
      slug: "react",
      title: "React.js",
      id: 1,
      previewItems: [
        "Frontend library",
        "Reusable UI components",
        "Dynamically working on client side",
        "code downloads to browser",
      ],
      content:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
    },
    {
      slug: "next",
      title: "Nextjs",
      id: 2,
      previewItems: [
        "Full-stack App Framework",
        "All-in-one backend services",
        " Working on both client and server side",
        "Easy integration with Vercel",
      ],
      content:
        "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    },
  ];
  ```

  ***

  To create dynamic routes to the pages we created based on data, we’ll use the same routing convention but with square brackets `[]`
  `/app/posts/[key]/page.js`
  This means when you go to URL : [`localhost](http://localhost):3000/posts/keyword`in your browser, the page you open will be able to access “**keyword”** dynamically within your code.
You can think`[slug]` in the URL as an object key and it captures the value typed in the URL after [`localhost](http://localhost):3000/posts/`like`**keyword**`in this example. If you type`blabla`in the URL, it will capture`“blabla”` inside the code.
You can replace **`[slug]`** with anything else you’d wish as `[id]`or`[title]`, it is up to you. The important thing that you will access it again with same key value inside code like,
if the route named with [id], you’ll access the value with `const { id } = params;`Inside the`page.jsx`this`key:value`pair, is passed through`{ params }` object into the component as the code below:

  ```jsx
  import React from "react";
  import styles from "./page.module.css";
  import { postData } from "../postData";

  export default function Post({ params }) {
    const { slug } = params;

    const post = postData.find((item) => item.slug === slug);

    return (
      <div className={styles.article}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  ```

  Now we’re able to find the Post data we’re interested, and render it inside the jsx of our Post component.
  NOW , LET’S CREATE THE POSTS PAGE
  Our posts page will show the post previews, under the `/app/posts/page.js`
  Create the `page.js` file under the root of `/app/posts` folder→

  ```
  import PostPreview from "@/app/components/postPreview/PostPreview";
  import Link from "next/link";
  import { postData } from "./postData";

  export default function Posts() {
    const postPreviews = postData.map((post, index) => {
      return <PostPreview key={index} {...post} />;
    });

    return <section className="posts">{postPreviews}</section>;
  }
  ```

  And create `PostPreview.jsx` component under `/app/components` folder →

  ```jsx
  import Link from "next/link";

  export default function PostPreview({ slug, id, title, previewItems }) {
    return (
      <div className="postPreview" key={id}>
        <h2>{title}</h2>
        <ul>
          {" "}
          {previewItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button>
          <Link href={`/posts/${slug}`}>Read more</Link>
        </button>
      </div>
    );
  }
  ```

  `<Link/>` is a Next.js specific component you use for routing to pages and URLs, it’s the equivalent of `<a>` tag, optimized for Next.js with prefetching..
  Btw, you can use regular classnames and add them into `global.css` file at the root of App folder.
  Your components will see them since they are global in your whole app.
  `/app/global.css` →

  ```css
  .postPreview {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.25rem;
    padding: 3rem;
    border-radius: 5px;
    border: 2px solid black;
    min-width: 20vw;
    box-shadow: -4px 4px 0 black;
  }
  ```

  And finally let’s create our dynamic Post page under the `/app/posts/[slug]` folder with the
  **LETS CREATE OUR DASHBOARD APP**

  - LETS SAY THAT WE WANT SERVE A MORE DYNAMIC PAGE, A COUNTER APP WITH REACT HOOKS AND STATES FOR EXAMPLE
    Let’s create a Dashboard page, under `/app/dashboard/` .

  ```jsx
  "use client";

  import React, { useState } from "react";
  import styles from "./dashboard.module.css";
  export default function Page() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
      setCount((prev) => prev + 1);
    }

    function handleDecrease() {
      setCount((prev) => prev - 1);
    }

    return (
      <div className={styles.component}>
        <section>
          <div className={styles.innerContainer}>
            <h2>Here is a dynamic App</h2>
            <p>{count}</p>
            <div className={styles.buttonsContainer}>
              <button onClick={handleIncrease}>Increase me</button>
              <button onClick={handleDecrease}>Decrease me</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  ```

  As we see the code above, compared the other pages we declare “use client” statement at the top of our code. Is that mean that the previous pages we coded didn’t use client
  So what did they use? :)
  They were all rendered in the server side. Yes, your browser still painted them but the computation of UI elements was made in the server. That’s one of the new options that Next.js introduced recently.
  **Server Side Rendering** is actually not a new option, it’s the default way how web works where user request pages from a server, server computes the UI based on request parameters and sends it back as only HTML and CSS to the user.
  React challenged to this paradigm by computing UI on the client side instead of server, and enabled modern single page applications like Facebook. This concept is called **client side rendering.**
  We are seeing that SSR is coming back because it has some advantages over CSR like security, SEO and optimization. Decision of where to render the content is actually a tradeoff. That’s why, now it’s an option with Next.js to choose SSR or CSR depending on your needs.
  Read more to understand:
  [https://nextjs.org/docs/app/building-your-application/rendering](https://nextjs.org/docs/app/building-your-application/rendering)
