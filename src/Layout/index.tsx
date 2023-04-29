import Footer from "@/components/Footer";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  title: string;
};

export function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {children}

      <Footer />
    </>
  );
}
