import React from "react";
import Loader from "../components/Loader/index";
import Navbar from "../components/Navbar";
import styles from "./Sewing.module.scss";

export default function Sewing() {
  return (
    <div className={styles.container}>
      <Loader />
      <Navbar />
      <h1>Sewing</h1>
      <h3>Andy Barclay</h3>
      <h3>Harry Potter</h3>
    </div>
  );
}
