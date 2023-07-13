import { useState } from "react";
import SearchNews from "../SearchNews";
import "./styles.scss";
import Image from "next/image";

const Introduction = ({searchQuery, setSearchQuery}:any) => {

  return (
    <div className="description">
      <h1 className="description-title">HOT NEWS</h1>
      <h2 className="description-subtitle">
        Find spicest news about anything you want
      </h2>
      <SearchNews setSearchQuery={setSearchQuery} />
      <h2 className="description-search">Your search:</h2>
      <h2 className="description-searchResult">{searchQuery.toUpperCase()}</h2>
      <div className="description-blob">
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
  );
};

export default Introduction;
