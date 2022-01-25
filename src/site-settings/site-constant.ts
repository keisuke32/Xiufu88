import PayPalImage from "../assets/images/paypal-1.png";
import StripeImage from "../assets/images/stripe.png";
import AlipayImage from "../assets/images/alipay.png";
import UnionPayImage from "../assets/images/unionpay.png";

export const siteConstant = {
    'chatendpoint':"ws://18.189.170.68:5000"
};

export const paymentGateways = [
    {
        group_id: 2,
        group_name: "国际银行卡",
        payments: [
            {
                payment_id: 1,
                payment_name: "PayPal",
                payment_image: PayPalImage
            },
            {
                payment_id: 2,
                payment_name: "Stripe",
                payment_image: StripeImage
            },
            {
                payment_id: 3,
                payment_name: "Alipay",
                payment_image: AlipayImage
            },
            {
                payment_id: 4,
                payment_name: "UnionPay",
                payment_image: UnionPayImage
            }
        ]
    }
]
