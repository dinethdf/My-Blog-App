import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
         <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Hi I am Dineth Dilshan </h1>
          <p className={styles.postDesc}>
            Full-stack Developer, writer, and tech enthusiast from Sri Lanka.
            I love building creative projects with React, exploring clean UI design,
             and writing about the journey.  
            This blog is my space to share tutorials, reflections, and personal projects that might inspire or help you.
          </p>
         
        </div>

        <div className={styles.imgContainer}>
          <Image src="/start.jpg" alt="" fill className={styles.image} />
        </div>

      </div>
    </div>
  );
};

export default Featured;
