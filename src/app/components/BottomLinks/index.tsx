import "./styles.scss";
import Image from "next/image";

const BottomLinks = () => {
  const links = [
    {
      name: "Twitter",
      ur: "https://twitter.com/home?lang=pl",
      image: "/twitter.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/kacper.multan.31/",
      image: "/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kper_m/",
      image: "/insta.png",
    },
    {
      name: "Github",
      url: "https://github.com/ZZZdreamm?tab=repositories",
      image: "/github.png",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <a
          href=""
          className="card"
          onClick={(e) => {
            e.preventDefault();
            window.open(link.url, "_blank");
          }}
        >
          <h3>{link.name} &rarr;</h3>
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
