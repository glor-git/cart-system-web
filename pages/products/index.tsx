import type { NextPage } from "next";
import { useEffect } from "react";
import { getProductItems } from "../../react-query/products";
import { useQuery } from 'react-query'
import { AxiosError } from "axios";
import Loading from "../../components/Loading";
import Error from '../../components/Error';
import ProductList from "../../components/ProductList";
import useStore from "../../store";

type itemProps = {
  item_no: number,
  item_name: string,
  detail_image_url: string,
  price: number,
  score: number,
  availableCoupon?: boolean,
}

const Products: NextPage = () => {
  const { isLoading, error, data } = useQuery<itemProps[], AxiosError>('repoData', getProductItems);
  const { setProducts, removeProducts } = useStore<any>(state => state);

  useEffect(() => {
    setProducts(data);
  }, [data, removeProducts, setProducts])

  if (isLoading) return <Loading />
  if (error) return <Error errorMessege={error.message} />
  return (
    <ProductList />
  );
};

export default Products;