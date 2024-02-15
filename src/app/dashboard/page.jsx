"use client"

import React, { useState } from 'react'
import styles from './dashboard.module.css'
export default function Page() {

    const [count, setCount] = useState(0)

    function handleIncrease() {
        setCount(prev => prev + 1)
    }

    function handleDecrease() {
        setCount(prev => prev - 1)
    }

    return (
        <div className={styles.component}>
            <section>
                <div className={styles.innerContainer}>
                    <h2>Here is a dynamic App</h2>
                    <p className={styles.count}>{count}</p>
                    <div className={styles.buttonsContainer}>
                        <button onClick={handleDecrease}>Decrease me</button>
                        <button onClick={handleIncrease}>Increase me</button>
                    </div></div>
            </section>
        </div >
    )
}
