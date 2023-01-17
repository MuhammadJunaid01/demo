/* eslint-disable react-hooks/rules-of-hooks */
import { useGetSingleProductQuery } from "@/redux/api";
import { useRouter } from "next/router";
import { Product } from "../../../components";
const index = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { data, error, isLoading } = useGetSingleProductQuery(productId);
  if (error || isLoading) {
    return <h1>loading........</h1>;
  }
  return (
    <div>
      <h1>hello daynamic page {productId}</h1>
      <h1>{data.title}</h1>
      <Product />
    </div>
  );
};

export default index;
