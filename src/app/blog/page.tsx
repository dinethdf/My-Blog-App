import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

interface BlogPageProps {
  searchParams: {
    page?: string;
    cat?: string;
    [key: string]: any;
  };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  // const page = parseInt(searchParams?.page ?? "1");
  // const cat = searchParams.cat && "a";

  const page = 1;
  const cat = "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
