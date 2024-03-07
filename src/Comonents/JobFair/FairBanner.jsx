import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFairRegister from "../Hooks/FairRegister/useFairRegister";

const FairBanner = () => {
  const { fairUser } = useFairRegister();

 
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className="w-full h-[120px] bg-[url('https://i.ibb.co/R6dcL1M/5ed85c3ae7a78c4a08e4fe310abb0104.webp')] bg-cover bg-center">
        <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50'></div>
      </div>
      <div className="w-full h-[200px] bg-[url('https://i.ibb.co/qB6FF2P/16683661-5786039.jpg')] bg-cover bg-center">
        <div className='w-full h-full flex flex-col   justify-center items-center backdrop-brightness-75'>
          <h2 className='text-center font-bold '>
            <span className='text-2xl text-white '>
              Events specially curated for you.
            </span>{" "}
            <br /> Never miss out an event that matches your interest!
          </h2>

          {!fairUser?.userType && (
            <Link to='/job-fair/registration'>
              <Button
                marginTop={2}
                size='sm'
                colorScheme='teal'
                variant='solid'
              >
                Get Started <ArrowForwardIcon />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FairBanner;
//
