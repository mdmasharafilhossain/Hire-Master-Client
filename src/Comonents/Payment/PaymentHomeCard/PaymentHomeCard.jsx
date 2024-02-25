import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const PaymentHomeCard = () => {

    const handleFree = e =>{
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Are Free User Now",
            showConfirmButton: false,
            timer: 1500
          });
    }


    return (
        <div className="container mx-auto mt-20">
             <h2 className='text-center text-5xl font-bold  mb-20'>Our Plans</h2>
             <div className="grid gap-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-5   md:mx-5 lg:mx-60 ">
              {/* First Card */}
               <div className="border-2 shadow-xl border-yellow-200 rounded-lg py-5 w-full">
                <h2 className="mb-10 ml-5 border rounded-md font-bold w-40 px-2 py-1 bg-yellow-200 text-black">Free For 1 Months</h2>
                <div className="flex ml-5 md:ml-5 lg:ml-5 gap-32 md:gap-24 lg:gap-40 mb-10">
                     <div className="font-bold uppercase">
                        <h2> Premium<br></br>
                         Individual</h2>
                     </div>
                     <div>
                          <h1 className="font-bold uppercase">Free</h1>
                          <p>For 1 Months</p> 
                     </div>
                </div>
                <div>
                    <div className="ml-5 font-bold">
                        <li><span>1 Premium Account</span></li>
                        <li>Cancel Anytime</li>
                        <li>15 hours/Months To Enjoy Our Service</li>
                    </div>
                    
                </div>

                <button onClick={handleFree} className="btn ml-12 md:ml-10 lg:ml-12 text-base btn-secondary border-none text-black font-bold bg-yellow-300 hover:bg-yellow-400 w-3/4 mt-32 rounded-3xl">Try Free For 1 Months</button>
                <p className="text-[12px]  text-center">Free for 1 month,then $10.99 per month after <br></br>
                <span className="underline ">Terms Apply</span>
                </p>

               </div>
            
               
              {/* Second Card */}
               <div className="border-2 shadow-lg border-orange-300 rounded-lg py-5 w-full">
                <div className="flex gap-32 md:gap-28 lg:gap-36">
                <h2 className="  ml-5 text-xl border rounded-md font-bold px-2 py-1 bg-orange-300 h-10 text-black">Premium</h2>
                <div >
                    <p className="font-bold text-xl">$16.99</p>
                    <p className="text-[12px]">per months</p>
                </div>

                </div>
                
                <div>
                    <div className="ml-5 mt-16 font-bold">
                        <li><span>6 device login</span></li>
                        <li>Cancel Anytime</li>
                        <li>24 hours/Day To Enjoy Our Service</li>
                        <li>Apply Unlimited Jobs</li>
                        <li>See details about HR Profile</li>
                    </div>
                    
                </div>

                <Link to="/MakePaymentRoute"><button className="btn  ml-12 text-base btn-secondary border-none text-black font-bold bg-orange-400 hover:bg-orange-500 w-3/4 mt-[150px] rounded-3xl">Get Premium</button></Link>
                <p className="text-[12px] ml-5 text-center">For 6 people who reside at the same address<br></br>
                <span className="underline ">Terms Apply</span>
                </p>

               </div>
              
                







            </div>
        </div>
    );
};

export default PaymentHomeCard;