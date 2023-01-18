import { HeroBannerProps } from "@/interfaces";
import Image from "next/image";
import style from "../../styles/herobanner.module.css";
const HeroBanner = (props: HeroBannerProps) => {
  const { title, heading, image, button } = props;
  return (
    <div className={style.hero_container}>
      <Image
        className={style.hero_image}
        src={image}
        width={800}
        height={400}
        alt="herobanner-image"
      />
      <div className={style.content}>
        <h4>{title}</h4>
        <h1>{heading}</h1>
        <div className={style.btn}>{button}</div>
      </div>
    </div>
  );
};

export default HeroBanner;
