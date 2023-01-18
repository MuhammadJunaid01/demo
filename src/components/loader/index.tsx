import Image from "next/image";
import LoaderImage from "../../../public/loader.gif";
const Loader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image width={200} height={200} src={LoaderImage} alt="loader-image" />
    </div>
  );
};

export default Loader;
