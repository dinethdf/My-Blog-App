// blogPage.tsx (or blogPage.ts for server components)

import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";




const BlogPage = ({ searchParams }: any) => {
  const page = parseInt(searchParams?.page ?? "") || 1;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
