import React from 'react'
import styles from './styles.module.css'
export default function Card({ imageURl, title, description }) {
    return (
        <div className={styles.card}>
            <img src={imageURl} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    )
}
