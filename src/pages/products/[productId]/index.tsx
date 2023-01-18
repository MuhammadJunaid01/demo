/* eslint-disable react-hooks/rules-of-hooks */
import { Loader, Product } from "@/components";
import MainLayoute from "@/components/layoutes";
import { useGetSingleProductQuery } from "@/redux/api";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { data, error, isLoading } = useGetSingleProductQuery(productId);

  return (
    <div>
      <MainLayoute>
        {isLoading ? <Loader /> : <Product product={data} />}
      </MainLayoute>
    </div>
  );
};

export default index;
