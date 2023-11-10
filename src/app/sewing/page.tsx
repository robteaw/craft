import React from "react";
import Loader from "../components/Loader/index";
import Navbar from "../components/Navbar";
import styles from "./Sewing.module.scss";
import Card from "../components/Card";

export default function Sewing({ plushies }) {
  return (
    <div className={styles.container}>
      <Loader />
      <Navbar />
      <h1>Sewing</h1>
      {plushies?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {/* <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <h3>Andy Barclay</h3>
          <Image
            className={styles.image}
            src={andy}
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className={styles.imageBox}>
          <h3>Harry Potter</h3>
          <Image
            className={styles.image}
            src={harry}
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}
