import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

interface Children {
  children: React.ReactNode;
}

export default function Layout({ children }: Children) {
  return (
    <>
      <Head>
        <title>Kyle Stubbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
