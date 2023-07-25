"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import News from "./components/News";
import styles from "./page.module.scss";

import BottomLinks from "./components/BottomLinks";
import Introduction from "./components/Introduction";

export default function Home() {
  const queryClient = new QueryClient();
  const [searchQuery, setSearchQuery] = useState("elon musk");

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Introduction
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className={styles.center}>
          <News searchQuery={searchQuery} />
        </div>

        <div className={styles.grid}>
          <BottomLinks />
        </div>
      </main>
    </QueryClientProvider>
  );
}
