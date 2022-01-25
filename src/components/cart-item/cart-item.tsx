import React from 'react';
import { Counter } from 'components/counter/counter';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { CURRENCY } from 'utils/constant';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './cart-item.style';

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { id, title, thumbnail, assets, price, oldPrice, shippingBox, quantity } = data;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ""} />
      <Information>
        <Name>{title}</Name>
        <Price>
          {price.formatted}
        </Price>
        <Weight>
          {quantity} X {shippingBox.weight} {shippingBox.unitWeight}
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * price.amountISO).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
