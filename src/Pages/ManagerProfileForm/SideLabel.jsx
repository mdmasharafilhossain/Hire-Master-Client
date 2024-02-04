const SideLabel = ({XL, SM}) => {
  return (
    <div className="text-center md:text-left">
      <p className="text-2xl font-bold ">{XL}</p>
      <p className="text-sm">{SM}</p>
    </div>
  );
};

export default SideLabel;
