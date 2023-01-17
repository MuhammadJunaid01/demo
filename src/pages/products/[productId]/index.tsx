/* eslint-disable react-hooks/rules-of-hooks */
import MainLayoute from "@/components/layoutes";
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
      <MainLayoute>
        <Product product={data} />
      </MainLayoute>
    </div>
  );
};

export default index;
