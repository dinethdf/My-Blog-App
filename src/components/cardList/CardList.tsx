import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
// import Image from "next/image";
import Card from "../card/Card";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

interface CardListProps {
  page: number;
  cat?: string;
}

const CardList = async ({ page, cat }: CardListProps) => {
  // const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < 10; // add count hear
  console.log(cat)
  interface CardProps {
  item: {
    img?: string;
    createdAt: string;
    catSlug: string;
    slug: string;
    title: string;
    desc: string;
  };
  key: number;
}

const items: CardProps[] = [
  {
    key: 1,
    item: {
      img: "/coding.png",
      createdAt: "2025-07-01T08:00:00.000Z",
      catSlug: "tech",
      slug: "post-one",
      title: "Post One",
      desc: "This is a description for Post One by Author A.",
    },
  },
  {
    key: 2,
    item: {
      img: "/coding.png",
      createdAt: "2025-07-01T08:00:00.000Z",
      catSlug: "tech",
      slug: "post-two",
      title: "Post Two",
      desc: "This is a description for Post Two by Author B.",
    },
  },
  {
    key: 3,
    item: {
      img: "/coding.png",
      createdAt: "2025-07-01T08:00:00.000Z",
      catSlug: "tech",
      slug: "post-three",
      title: "Post Three",
      desc: "This is a description for Post Three by Author C.",
    },
  },
];


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>

        {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}

    
          {items.map(({ item, key }) => (
          <Card item={item} key={key} />
        ))}

        


      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
