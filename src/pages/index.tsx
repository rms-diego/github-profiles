import Head from "next/head";
import { FormEvent, useEffect } from "react";

import styles from "@/styles/pages/home/styles.module.scss";
import Input from "@/components/Input";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  const [githubUserName, setGithubUserName] = useState<string>("");

  const handleInputChange = (payload: string) => {
    setGithubUserName(payload);
  };

  const handleSearchUser = (event: FormEvent) => {
    event.preventDefault();

    if (!githubUserName) {
      return alert("Is missing github username");
    }

    setGithubUserName((prevState) => prevState.trim());
    push(`/profile/${githubUserName}`);
  };

  return (
    <>
      <Head>
        <title>Github profiles</title>
      </Head>

      <main className={styles.mainContainer}>
        <h1>Github Profiles</h1>

        <form onSubmit={handleSearchUser} className={styles.formContainer}>
          <Input
            label="Username github"
            placeholder="john-doe"
            handleInputChange={handleInputChange}
          />

          <button type="submit">Search</button>
        </form>
      </main>

      <Footer />
    </>
  );
}
