import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>coding</span>
          <h3 className={styles.postTitle}>
            Mastering React Components: A Beginner’s Guide
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>DDF</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
           Inside Culture: What It’s Like Working at Company
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>culture</span>
            <span className={styles.date}> - 10.04.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>coding</span>
          <h3 className={styles.postTitle}>
             Why Learning JavaScript is Key to Frontend Success

          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>DDF</span>
            <span className={styles.date}> - 10.05.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            coding
          </span>
          <h3 className={styles.postTitle}>
            Understanding useEffect in React
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>DDF</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
