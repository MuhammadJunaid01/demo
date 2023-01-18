import MainLayoute from "@/components/layoutes";
import Image from "next/image";
import pageNotFound from "public/404.gif";
const index = () => {
  return (
    <MainLayoute>
      <div style={{ textAlign: "center" }}>
        <Image
          style={{ width: "40%", height: "100%" }}
          width={400}
          height={300}
          src={pageNotFound}
          alt="pagenot found"
        />
      </div>
    </MainLayoute>
  );
};

export default index;
