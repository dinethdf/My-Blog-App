import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
      <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.travel}`}>
        Culture
      </Link>
      <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.fashion}`}>
        Travel
      </Link>
    </div>
  );
};

export default MenuCategories;
