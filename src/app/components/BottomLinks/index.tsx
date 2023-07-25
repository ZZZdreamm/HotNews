import { links } from "./links";
import "./styles.scss";
import Image from "next/image";

const BottomLinks = () => {

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href=""
          className="card"
          onClick={(e) => {
            e.preventDefault();
            window.open(link.url, "_blank");
          }}
        >
          <span>
            <h3>{link.name} </h3>
            <h3>&rarr;</h3>
          </span>
          <Image
            src={link.image}
            alt="Twitter image"
            height={500}
            width={500}
          />
        </a>
      ))}
    </>
  );
};

export default BottomLinks;
