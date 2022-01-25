import React, {useContext, useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
// import { useMutation } from '@apollo/client';
import {closeModal} from '@redq/reuse-modal';
// import { GET_PAYMENT } from 'graphql/mutation/order';
import StripeFormWrapper, {Heading, FieldWrapper, ErrorWrapper} from './stripe-form.style';
import {ProfileContext} from 'contexts/profile/profile.context';
import {FormattedMessage} from "react-intl";
import {useLocale} from "../../contexts/location/location.provider";
import {Button} from "../button/button";

const StripeForm = ({stripeSecretClient, nextStep}) => {
    // Get a reference to Stripe or Elements using hooks.
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async () => {
        setLoading(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Use elements.getElement to get a reference to the mounted Element.
        const cardElement = elements.getElement(CardElement);
        try {
            const {
                error,
                paymentIntent
            } = await stripe.confirmCardPayment(stripeSecretClient, {
                payment_method: {
                    card: cardElement
                }
            });
            setLoading(false);
            if(error){
                setErrorMessage(error.message);
            }else{
                if(paymentIntent.status == 'succeeded'){
                    nextStep(3);
                }else{
                    nextStep(4);
                }
            }
            console.log(paymentIntent, error);
            // if(status == "succeeded"){
            //     console.log(error, status);
            // }
        }catch(err) {
            setLoading(false);
            console.log(err);
            nextStep(4);
        }
    };
    return (
        <StripeFormWrapper>
            <Heading><FormattedMessage id="checkout.cart.heading"/></Heading>
            <FieldWrapper>
                <CardElement/>
            </FieldWrapper>
            <ErrorWrapper>{errorMessage}</ErrorWrapper>
            <Button type="button" onClick={handleSubmit} loading={loading}>
                <FormattedMessage id="checkout.paynow"/>
            </Button>
        </StripeFormWrapper>
    );
};
type StripeSetting = {
    stripeSecretClient: string;
    stripePubKey: string;
    nextStep: any;
};
const StripePaymentForm = ({stripeSecretClient, stripePubKey, nextStep}: StripeSetting) => {
    const {locale} = useLocale();
    const [stripe, setStripe] = useState(() => loadStripe(stripePubKey, {locale: locale}));

    return (
        <Elements stripe={stripe}>
            <StripeForm
                stripeSecretClient={stripeSecretClient}
                nextStep={nextStep}
            />
        </Elements>
    );
};

export default StripePaymentForm;
