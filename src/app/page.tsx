"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import News from "./components/News";
import styles from "./page.module.scss";
import { useState } from "react";
import SearchNews from "./components/SearchNews";

import Image from "next/image";

export default function Home() {
  const queryClient = new QueryClient();
  const [searchQuery, setSearchQuery] = useState("javascript");

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>HOT NEWS</h1>
          <h2 className={styles.subtitle}>
            Find spicest news about anything you want
          </h2>
          <SearchNews setSearchQuery={setSearchQuery} />
          <h2 className={styles.search}>Your search:</h2>
          <h2 className={styles.searchResult}>{searchQuery.toUpperCase()}</h2>
          <div className={styles.blob}>
            <Image
              src={"blobanimation.svg"}
              alt={"news image"}
              width={30}
              height={30}
              layout="responsive"
              loading="eager"
              priority
            />
          </div>
        </div>

        <div className={styles.center}>
          <News searchQuery={searchQuery} />
        </div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            onClick={(e) => {
              e.preventDefault();
              window.open("", "_blank");
            }}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a
            href=""
            className={styles.card}
            onClick={(e) => {
              e.preventDefault();
              window.open("", "_blank");
            }}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a
            href=""
            className={styles.card}
            onClick={(e) => {
              e.preventDefault();
              window.open("", "_blank");
            }}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a
            href=""
            className={styles.card}
            onClick={(e) => {
              e.preventDefault();
              window.open("", "_blank");
            }}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
      </main>
    </QueryClientProvider>
  );
}
