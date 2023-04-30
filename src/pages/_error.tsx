import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/pages/404/styles.module.scss";

import { FaArrowLeft } from "react-icons/fa";

export default function Error() {
  return (
    <>
      <Head>
        <title>404 - User not found</title>
      </Head>

      <h1 className={styles.title}>404 - User not found</h1>

      <Link className={styles.anchor} href="/">
        <FaArrowLeft />
        Go back to home
      </Link>
    </>
  );
}
