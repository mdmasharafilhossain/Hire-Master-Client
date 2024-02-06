import InputPackage from "./InputPackage";
import SideLabel from "./SideLabel";

const Demo = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        {/* Text div */}
        <SideLabel XL={"About"} SM={"Tell us about yourself"} />
        {/* form div */}
        <div className="w-1/2">
          {/* Name */}
          <InputPackage
            text={"Your name"}
            regField={"name"}
            inputType={"text"}
            placeholder={"Your name"}
          />

          {/* Image */}
          <InputPackage
            text={"Upload Your photo"}
            regField={"image"}
            inputType={"file"}
            placeholder={"upload image"}
          />

          {/*  Location info */}
          <InputPackage
            text={"Your Location"}
            regField={"location"}
            inputType={"text"}
            placeholder={"Location link"}
          />

          {/* Contact no */}
          <InputPackage
            text={"Contact no"}
            regField={"phone"}
            inputType={"text"}
            placeholder={"Phone"}
          />
        </div>
      </div>
      <hr className="text-bold mt-20" />
    </div>
  );
};

export default Demo;

<InputPackage text={"Your name"} regField={"name"} />;
