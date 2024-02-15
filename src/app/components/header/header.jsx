import React from "react";
import styles from "./header.module.css"
import Link from "next/link";

export default function Header() {

    return <nav className={styles.component}>
        <Link href="/"><h3 className={styles.headerItem}>Home</h3></Link>
        <Link href={"/posts"}><h3 className={styles.headerItem}>Posts</h3></Link>
        <Link href={"/about"}><h3 className={styles.headerItem}>About</h3></Link>
        <Link href={"/dashboard"}>
            <button className={styles.headerItem}>Launch App</button></Link>

    </nav >
}