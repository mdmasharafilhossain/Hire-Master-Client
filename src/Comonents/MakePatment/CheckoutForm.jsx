import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('Payment Successful', paymentMethod);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')

          }
        
          
    }

    return (
         <form className="container mx-auto border-2 rounded-lg border-orange-600 w-3/4 py-20 px-20" onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '25px',
              color: '#FB8C00',
              '::placeholder': {
                color: '#FB8C00',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="border rounded-lg px-5 py-1 hover: bg-orange-500 hover:bg-orange-600 text-white" type="submit" disabled={!stripe}>
        Pay
      </button>

        </form>
    );
};

export default CheckoutForm;

