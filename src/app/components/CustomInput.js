import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const CustomInput = ({ name, type = "text", value, onChange, placeholder="", error }) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      className={`capitalize text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && (
      <FontAwesomeIcon
        color="red"
        icon={faExclamationCircle}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      />
    )}
  </div>
);

export default CustomInput;
