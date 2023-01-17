import { useGetProductQuery } from "@/redux/api";
import { Products } from "../index";
const HomePage = () => {
  const { data, error, isLoading } = useGetProductQuery("productApi");
  return <Products products={data} />;
};

export default HomePage;
