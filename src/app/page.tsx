
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";

 import CardList  from "@/components/cardList/CardList";
import Menu  from "@/components/menu/Menu";


export default async function  Home ({ searchParams }: { searchParams?: any }) {

  const params = await searchParams;

  const page = parseInt(params?.page ?? "1") || 1;
  
  return (
      <div className={styles.container}>
        <Featured/>
        {/* <CategoryList/> */}
        <div className={styles.content}>
          <CardList page={page} cat={undefined}/>
          <Menu/>
        </div> 
      </div>
      )
}
