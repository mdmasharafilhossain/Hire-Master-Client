
const InputPackage = ({text, regField, inputType,defaultValue, placeholder, register }) => {
    
  return (
    <label className="form-control my-3">
      <div className="label">
        <span className="label-text text-lg font-bold">{text}</span>
      </div>
      <input
        {...register(`${regField}`)}
        type={inputType}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        className="input input-bordered w-full"
      />
    </label>
  );
};

export default InputPackage;
