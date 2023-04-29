import { FormEvent } from "react";

import styles from "@/styles/pages/home/styles.module.scss";
import Input from "@/components/Input";
import { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/Layout";

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
    <Layout title="Github Profiles | home">
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
    </Layout>
  );
}
