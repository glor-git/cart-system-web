import { NextPage } from "next";
import React from 'react';
import styled from '@emotion/styled'
import useStore from "../../store";
import ProductItem from "./ProductItem";
import { itemProps } from "./productType";

const ProductList: NextPage = () => {
  const { products } = useStore<any>(state => state);

  return (
    <ProductListWrapper>
      {products !== undefined && products.map((productData: itemProps) => {
        return (
          <React.Fragment key={productData.item_no}>
            <ProductItem productData={productData} />
          </React.Fragment>
        )
      })}
    </ProductListWrapper>
  )
}

export default ProductList

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;