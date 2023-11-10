import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
// images
import andy from "../../assets/images/andy.png";
import harry from "../../assets/images/harry.png";

type Props = {
  name: string;
};

export default function Card({ name }: Props) {
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
      <h3>{plushies.name}</h3>
      <Image src={plushies.image} />
    </div>
  );
}
