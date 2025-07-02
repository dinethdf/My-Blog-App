// blogPage.tsx (or blogPage.ts for server components)

import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";




const BlogPage = ({ searchParams }: any) => {
  const page = parseInt(searchParams?.page ?? "1") || 1;
  const cat = searchParams?.cat ?? "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat ? `${cat} Blog` : "Blog"}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
