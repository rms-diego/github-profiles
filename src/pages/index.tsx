import Head from "next/head";

import styles from "@/styles/pages/home/styles.module.scss";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Github profiles</title>
      </Head>

      <main className={styles.mainContainer}>
        <h1>Github Profiles</h1>

        <form action="" className={styles.formContainer}>
          <Input label="Username github" placeholder="john-doe" />

          <button type="submit">Search</button>
        </form>
      </main>
    </>
  );
}
