import { Layout } from "@/Layout";
import { GetServerSideProps } from "next";
import { responseApiSchema, DataType } from "@/@types";

import axios from "axios";
import Error from "next/error";

import styles from "@/styles/pages/profile/styles.module.scss";
import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Profile({ githubInfo, notFound }: DataType) {
  if (notFound) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title="Github Profiles | profile">
      <main className={styles.profileContainer}>
        <span>
          <Link href="/">
            <FaArrowLeft /> Home Page
          </Link>
        </span>

        <div className={styles.profileContent}>
          <header className={styles.headerContainer}>
            <Image
              src={githubInfo.avatar_url as string}
              alt="Profile Image"
              width={210}
              height={210}
            />
          </header>

          <div>
            <p>Name: {githubInfo.name}</p>
            <p>following: {githubInfo.following}</p>
            <p>followers: {githubInfo.followers}</p>
            {githubInfo.email && <p>Name: {githubInfo.email}</p>}
            {githubInfo.email && <p>Name: {githubInfo.company}</p>}
            <p>Repositories quantity: {githubInfo.public_repos}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { usernameGithub } = context.params!;
  console.log(usernameGithub);

  try {
    const response = await axios.get(
      `https://api.github.com/users/${usernameGithub}`
    );

    const formateData = responseApiSchema.parse(response.data);

    return {
      props: {
        githubInfo: formateData,
      },
    };
  } catch {
    return {
      props: {
        notFound: true,
      },
    };
  }
};
