import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div className="mx-auto text-center items-center">
      Your Payment has been completed.
      <hr />
      Transaction ID: {tranId}
      <hr />
      <div className="flex mx-auto">
        <Link
          to="/"
          className="flex mx-auto mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
