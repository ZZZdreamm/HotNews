import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getNews } from "../../ApiFunctions";
import Pagination from "../Pagination";
import "./styles.scss";

export default function News({ searchQuery }: { searchQuery: string }) {
  const [page, setPage] = useState(0);
  const { data, status } = useQuery(["news", searchQuery], getNews);

  useEffect(()=>{
    setPage(0);
  },[searchQuery])

  const newsPage = data?.slice(0 + 10 * page, 9 + 10 * page);

  const gridColumns =
    newsPage?.length === 0 ? { gridTemplateColumns: "1fr" } : {};
  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Pagination items={data} page={page} setPage={setPage} />
          <div className="news" style={gridColumns}>
            {newsPage && newsPage.length > 0 ? (
              newsPage.map((news: any) => (
                <div key={news.id} className="news-card">
                  <div className="news-card__image">
                    <Image
                      src={news.urlToImage || "/no-image.png"}
                      alt={"news image"}
                      width={30}
                      height={30}
                      layout="responsive"
                      onClick={() => window.open(news.url, "_blank")}
                      loading="eager"
                      priority
                    />
                  </div>
                  <div className="news-card__title">{news.title}</div>
                  <div className="news-card__description">{news.content}</div>
                  <div
                    className="news-card__readMore"
                    onClick={() => window.open(news.url, "_blank")}
                  >
                    Read more...
                  </div>
                </div>
              ))
            ) : (
              <>
                <span></span>
                <div className="news-card__empty">
                  No news found on this topic. Try searching more complex
                  description of topic.
                </div>
                <span></span>
              </>
            )}
          </div>
          <Pagination items={data} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
