import React, {useState} from 'react';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import {
    ProductsRow,
    ProductsCol,
    ButtonWrapper,
    LoaderWrapper,
    LoaderItem,
    ProductCardWrapper,
} from './product-list.style';
import {CURRENCY} from 'utils/constant';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import {FormattedMessage} from 'react-intl';
import {Button} from 'components/button/button';
import useProducts from 'data/use-products';
import {ProductCard} from "../../product-card/product-card-seven";

const ErrorMessage = dynamic(() =>
    import('components/error-message/error-message')
);
const GeneralCard = dynamic(
    import('components/product-card/product-card-one/product-card-one')
);

type ProductsProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    fetchLimit?: number;
    loadMore?: boolean;
    type?: string;
};
export const Products: React.FC<ProductsProps> = (
    {
        deviceType,
        fetchLimit = 8,
        loadMore = true,
        type,
    }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {data, error, hasMore, fetchMore} = useProducts({
        text: router.query.text,
        category: router.query.category,
        offset: 0,
        limit: fetchLimit,
        feature: 'PRICE',
        sort: 'DESC'
    });

    // if (error) return <ErrorMessage message="Network Error"/>;
    if (!data) {
        return (
            <LoaderWrapper>
                <LoaderItem>
                    <Placeholder uniqueKey="1"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="2"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="3"/>
                </LoaderItem>
            </LoaderWrapper>
        );
    }

    if (data.length === 0) {
        return <NoResultFound/>;
    }
    // const handleLoadMore = async () => {
    //     setLoading(true);
    //     await fetchMore(Number(data.length), fetchLimit);
    //     setLoading(false);
    // };

    const renderCard = (productType, props) => {
        return (
            <GeneralCard
                key={props.slug}
                title={props.title}
                description={props.description}
                image={props.thumbnail?.thumbnail || props.assets[0]?.thumbnail || props.assets[0]?.url || ''}
                weight={props.shippingBox.weight}
                currency={props.price.currency}
                price={props.oldPrice?.formatted || 0}
                salePrice={props.price.formatted}
                discountInPercent={0}
                data={props}
                deviceType={deviceType}
            />
        );
    };
    return (
        <>
            <ProductsRow>
                {data.map((item: any, index: number) => (
                    <ProductsCol
                        key={index}
                        style={type === 'book' ? {paddingLeft: 0, paddingRight: 1} : {}}
                    >
                        <ProductCardWrapper>
                            <Fade
                                duration={800}
                                delay={index * 10}
                                style={{height: '100%'}}
                            >
                                <ProductCard data={item} key={item.id} />
                            </Fade>
                        </ProductCardWrapper>
                    </ProductsCol>
                ))}
            </ProductsRow>
            {/*{loadMore && hasMore && (*/}
            {/*    <ButtonWrapper>*/}
            {/*        <Button*/}
            {/*            onClick={handleLoadMore}*/}
            {/*            loading={loading}*/}
            {/*            variant="secondary"*/}
            {/*            style={{*/}
            {/*                fontSize: 14,*/}
            {/*            }}*/}
            {/*            border="1px solid #f1f1f1"*/}
            {/*        >*/}
            {/*            <FormattedMessage id="loadMoreButton" defaultMessage="Load More"/>*/}
            {/*        </Button>*/}
            {/*    </ButtonWrapper>*/}
            {/*)}*/}
        </>
    );
};
export default Products;
