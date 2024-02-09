
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const MakePayment = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-center text-5xl font-bold  mb-20'>Make Payment</h2>
            <div className='container mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MakePayment;