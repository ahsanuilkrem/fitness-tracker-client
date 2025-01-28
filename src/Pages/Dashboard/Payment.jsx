
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);


const Payment = () => {

    return (
        <div className='pt-20'>
         <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
         </Elements>
        </div>
    );
};

export default Payment;