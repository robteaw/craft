import React from "react";
import styles from "./Card.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  image: StaticImageData;
};

const plushy = {
  name: "",
  image: "",
};

export default function Card() {
  return (
    <div className={styles.container}>
      <h3>{plushy.name}</h3>
      <Image src={plushy.image} />
    </div>
  );
}
