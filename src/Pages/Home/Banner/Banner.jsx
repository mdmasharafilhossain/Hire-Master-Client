const Banner = () => {
  return (
    <div className=' mb-12 '>
      <div className="hero h-[650px] bg-[url('/bg-1.avif')]">
        <div className='hero-overlay bg-opacity-60'></div>

        <div className='hero-content flex-col lg:flex-row-reverse '>
          <div className='-mt-32'>
            <h1 className='lg:-ml-[500px] text-6xl text-white font-bold lg:w-[600px]'>
              Find the perfect Job that you deserved
            </h1>
            <div className='my-4 lg:w-[500px] lg:-ml-[500px] text-white'>
              <p>
                Unlock Your Career Potential with HireMaster – Where Dreams Meet
                Opportunities! Connecting Talent to Triumph.
              </p>
            </div>

            <button className='btn hover-none bg-[#FF3811] border-none text-white rounded-sm mr-4 lg:-ml-[500px] my-3'>
              Discover More
            </button>

            <button className='btn btn-outline border-white rounded-sm text-white w-36 my-3'>
              Latest Jobs
            </button>
          </div>

          <div className='border-l border-[#FF3811] h-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
