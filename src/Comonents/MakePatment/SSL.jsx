import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";


const SSL = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const email = user?.email;
    const amount = 1699;
    const bill = {
        email,
        name:user?.displayName,
        amount,
        date: new Date(),
      }
    const handlePay = async() => {
        const result = await axiosSecure.post('/buy-premium',bill);
        console.log(result.data.url);
        window.location.replace(result.data.url);
        // window.open(result.data.url, '_blank');
    }
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-center text-5xl font-bold  mb-20'>Payment with SSL ECOMMERZE</h2>

        <button onClick={handlePay} className="btn btn-warning"> pay</button>
        </div>
    );
};

export default SSL;