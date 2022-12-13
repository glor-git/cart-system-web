import { NextPage } from "next";
import styled from '@emotion/styled'
import { itemProps } from "./productType";
import { numberWithCommas } from "../../util/comma";

type props = {
  productData : itemProps
}

const ProductItem: NextPage<props> = ({ productData }) => {

  return (
    <ProductItemWrapper>
      <ItemImageWrapper>
        <ItemImage src={productData.detail_image_url} />
      </ItemImageWrapper>
      <ItemBox>
        <ItemName>{productData.item_name}</ItemName>
        <Price>{numberWithCommas(productData.price)}</Price>
        <CartIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 12">
            <path d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z" stroke={'black'} fill={'none'}/>
          </svg>
        </CartIcon>
      </ItemBox>
    </ProductItemWrapper>
  )
}

export default ProductItem

const ProductItemWrapper = styled.div `
  width: calc(100% / 3 - 10px);
  height: max-content;
  //height: 100%;
  padding: 10px;

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(225, 225, 225, 0.68);
  }
`;

const ItemImageWrapper = styled.div `
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const ItemImage = styled.img `
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemBox = styled.ul `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  height: 100%;
  min-height: 120px;
  padding: 20px 0;
`;

const ItemName = styled.li `
  width: 80%;
  font-size: 15px;
`;

const Price = styled.li `
  font-size: 20px;
  font-weight: bold;
`;

const CartIcon = styled.li `
  position: absolute;
  right: 0;
  cursor: pointer;
`;