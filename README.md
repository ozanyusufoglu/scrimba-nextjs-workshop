# NEXT.js Workshop

### Prerequisites

- js and react fundamentals
- css fundamentals
- general web concepts
- a little bit cmd line tools

---

## Theory

- Presentation
- https://docs.google.com/presentation/d/1Tpmt9tuBOgac2mw4o3FaV93r069lqiiOKImoebjOcbY/edit?usp=sharing
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

- it acts like a template, both structure-wise and style-vise

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

  - create a components folder first
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

    **LETS SAY WE’LL NEED ALSO A FOOTER FOR EVERY PAGE ON OUR LANDING PAGE**

  - create the file `/components/footer/Footer.jsx`
  - also create the styling file `/components/footer/footer.module.jsx`
    OK, FROM NOW ON ALL PAGES ON OUR ROOT WILL SHARE THE SAME LAYOUT.

  ***

  LET’S CREATE SOME BLOG PAGES,

  ```jsx
  <section className={styles.blog}>
    <div className={styles.card}>
      <h2>Javascript</h2>
      <ul>
        <li>Programming language</li>
        <li>Makes your UI programmable</li>
        <li>Lets you to fetch data</li>
      </ul>
      <button>Read more</button>
    </div>
    <div className={styles.card}>
      <h2>React.js</h2>
      <ul>
        <li>Frontend library</li>
        <li>Reusable UI components</li>
        <li>Dynamically working on client side</li>
        <li>code downloads to browser</li>
      </ul>
      <button>
        <Link>Read more</Link>Read more
      </button>
    </div>
    <div className={styles.card}>
      <h2>Nextjs</h2>
      <ul>
        <li>Full-stack App Framework</li>
        <li>All-in-one backend services</li>
        <li>Working on both client and server side</li>
        <li>Easy integration with Vercel</li>
      </ul>
      <button>Read more</button>
    </div>
  </section>
  ```

  WHAT IF WE ABOUT DYNAMIC ROUTES?
  **LETS CREATE OUR DASHBOARD APP**

  - LETS SAY THAT WE WANT TO HAVE A MORE DYNAMIC PAGE WITH REACT FEATURES, LIKE A DASHBOARD

  ### BUT WHAT IF WE WANT DIFFERENT LAYOUTS FOR DIFFERENT PAGES

  -
  - AND WE WANT TO USE A DIFFERENT LAYOUT
