import React from 'react';
import dynamic from 'next/dynamic';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import { useRouter } from 'next/router';
import useProduct from "../../data/use-product";
import {SEO} from "../../components/seo";
import DesktopHome from "../home/home-desktop";
import MobileHome from "../home/home-mobile";
import ProductMobileDetails from "../../components/product-details/product-mobile/product-mobile";

const ProductDetails = dynamic(() =>
  import('components/product-details/product-details-four/product-details-four')
);

// const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
//   ssr: false,
// });
interface Props {
  data: any;
  deviceType: any;
}

const ProductDetailsPage = ({ data, deviceType }: Props) => {

  const router = useRouter();
  const slug = router.query.slug;
  const {product, error} = useProduct({slug});

  if (router.isFallback) return <p>Loading...</p>;
  if(product) {
    let content = deviceType.desktop ? <ProductDetails product={product} deviceType={deviceType}/> : <ProductMobileDetails product={product} deviceType={deviceType}/>;
    return (
        <Modal>
            <SEO title="Product - JiTeng" description="JiTeng Product Detail" />
          <ProductSingleWrapper>
            <ProductSingleContainer>
              {content}
              {/*<CartPopUp deviceType={deviceType}/>*/}
            </ProductSingleContainer>
          </ProductSingleWrapper>
        </Modal>
    );
  }else{
    return (
        <Modal>
          <ProductSingleWrapper>
            <ProductSingleContainer>
              {/*<CartPopUp deviceType={deviceType}/>*/}
            </ProductSingleContainer>
          </ProductSingleWrapper>
        </Modal>
    )
  }
};
export default ProductDetailsPage;
