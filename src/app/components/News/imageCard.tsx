import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.scss";
const ImageCard = ({ imageUrl, newsUrl }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    // Set imageError state to true when the original image fails to load
    setImageError(true);
  };
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="news-card__image">
      {isLoading ? (
        <Image
          src={"/loading.gif"}
          alt={"news image"}
          width={30}
          height={30}
          layout="responsive"
          loading="eager"
          priority
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        <Image
          src={imageError ? "/server-blocked.png" : imageUrl || "/no-image.png"}
          alt={"news image"}
          width={30}
          height={30}
          layout="responsive"
          onClick={() => window.open(newsUrl, "_blank")}
          loading="eager"
          priority
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default ImageCard;
