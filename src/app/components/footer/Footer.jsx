import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    const date = new Date()

    return (
        <div className={styles.component}>
            <p>Built by Ozan with 🐵🧠</p>
            <br />
            <h4>2024</h4>
            <br />

        </div>
    )
}
