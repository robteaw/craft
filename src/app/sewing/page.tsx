import React from "react";
import Loader from "../components/Loader/index";
import Navbar from "../components/Navbar";
import styles from "./Sewing.module.scss";
import Card from "../components/Card";
// images
import andy from "./../assets/images/andy.png";
import harry from "./../assets/images/harry.png";

export default function Sewing({ plushy }) {
  const plushies = [
    {
      id: 1,
      name: "Andy Barclay",
      image: andy,
    },
    {
      id: 2,
      name: "Harry Potter",
      image: harry,
    },
  ];
  return (
    <div className={styles.container}>
      <Loader />
      <Navbar />
      <h1>Sewing</h1>
      {plushies?.map((plushy) => (
        <Card key={plushy.id} plushy={plushy} />
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
