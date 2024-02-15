import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    const date = new Date()

    return (
        <div className={styles.component}>
            <p>This is the footer content</p>
            <h4>{date.toDateString()}</h4>
        </div>
    )
}
