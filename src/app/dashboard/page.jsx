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
                    <p>{count}</p>
                    <div className={styles.buttonsContainer}>
                        <button onClick={handleIncrease}>Increase me</button>
                        <button onClick={handleDecrease}>Decrease me</button>
                    </div></div>
            </section>
        </div >
    )
}
