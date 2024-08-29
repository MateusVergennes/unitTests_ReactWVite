import { useEffect, useState } from "react";
import styles from "./styles.module.scss";


export default function Dashboard() {


  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-pokemons"]}>
        
      </ul>
    </div>
  );
}