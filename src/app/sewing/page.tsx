import React from "react";
import Loader from "../components/Loader/index";
import Navbar from "../components/Navbar";
import styles from "./Sewing.module.scss";
// images
import Image from "next/image";
import andy from "@/assets/images/andy.png";
import harry from "@/assets/images/andy.png";

export default function Sewing() {
  return (
    <div className={styles.container}>
      <Loader />
      <Navbar />
      <h1>Sewing</h1>
      <h3>Andy Barclay</h3>
      <Image src="/andy.png" width={500} height={500} alt="" />
      <h3>Harry Potter</h3>
      <Image src="/harry.png" width={500} height={500} alt="" />
    </div>
  );
}
