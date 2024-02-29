import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="container mx-auto text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600 mb-4">OOPS!! Error found in payment.</h1>
      <hr className="mb-4" />
      <p className="text-xl mb-4">Payment Unsuccessful</p>
      <div className="flex justify-center">
        <Link
          to="/MakePaymentRoute"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block transition duration-300 ease-in-out"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default PaymentFail;
