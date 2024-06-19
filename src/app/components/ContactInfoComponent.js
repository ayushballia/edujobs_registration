"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Label from "./Label";
import OptionButtons from "./OptionButtons";
import OptionButtonsWithIcon from "./OptionButtonsWithIcon";
import MaleIcon from "@/app/images/MaleIcon.svg";
import FemaleIcon from "@/app/images/FemaleIcon.svg";
import RightIcon from "@/app/images/arrow-right.svg";
import {
  updateContactInfo,
  setSelectedType,
  setSelectedGender,
  setTerms,
  setUpdates,
} from "@/app/libs/store/features/contactInfo/contactInfoSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const genderOptions = [
  { label: "Male", icon: MaleIcon },
  { label: "Female", icon: FemaleIcon },
  { label: "Any", icon: "" },
];

const type = ["institution", "Consultant"];

const CustomInput = ({ name, type = "text", value, onChange, error }) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      value={value}
      onChange={onChange}
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

const ContactInfoComponent = () => {
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.contactInfo);

  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleTypeSelect = (option) => {
    dispatch(setSelectedType(option));
  };
  const handleGenderSelect = (option) => {
    dispatch(setSelectedGender(option));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactInfo({ [name]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    let errorMessages = "";

    if (!contactInfo.fname) {
      newErrors.fname = "First name is required";
      errorMessages += "First name is required.\n";
    }
    if (!contactInfo.lname) {
      newErrors.lname = "Last name is required";
      errorMessages += "Last name is required.\n";
    }
    if (!contactInfo.email) {
      newErrors.email = "Email is required";
      errorMessages += "Email is required.\n";
    }
    if (!contactInfo.password) {
      newErrors.password = "Password is required";
      errorMessages += "Password is required.\n";
    }
    if (contactInfo.password !== contactInfo.cpassword) {
      newErrors.cpassword = "Passwords do not match";
      errorMessages += "Passwords do not match.\n";
    }
    if (!contactInfo.mobile) {
      newErrors.mobile = "Mobile number is required";
      errorMessages += "Mobile number is required.\n";
    }
    if (!contactInfo.selectedType) {
      newErrors.selectedType = "Type is required";
      errorMessages += "Type is required.\n";
    }
    if (!contactInfo.selectedGender) {
      newErrors.selectedGender = "Gender is required";
      errorMessages += "Gender is required.\n";
    }

    return { newErrors, errorMessages };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newErrors, errorMessages } = validateInputs();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert(errorMessages);
    } else {
      setErrors({});
      console.log("Redux Form Data:", contactInfo);
      router.push("/institution-details");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pl-[46px]">
      <div className="my-5">
        <h1 className="capitalize text-[26px] text-[#232323] font-bold">
          Create your <span className="text-[#0A65CC]"> Education Jobs </span>{" "}
          profile To Post Jobs
        </h1>
        <p className="text-[22px] text-normal">
          Post Jobs & get the best candidate out there.
        </p>
      </div>
      <div className="flex items-center gap-x-6 -my-5">
        <Label title={"first name"}>
          <CustomInput
            name="fname"
            value={contactInfo.fname}
            onChange={handleChange}
            error={errors.fname}
          />
        </Label>
        <Label title={"Last name"}>
          <CustomInput
            name="lname"
            value={contactInfo.lname}
            onChange={handleChange}
            error={errors.lname}
          />
        </Label>
      </div>

      <Label title={"email address"}>
      <CustomInput
            name="email"
            type="email"
            value={contactInfo.email}
            onChange={handleChange}
            error={errors.email}
          />
      </Label>

      <Label title={"you are"}>
        <OptionButtons
          options={type}
          onSelect={handleTypeSelect}
          selectedOption={contactInfo.selectedType}
        />
      </Label>

      <Label title={"password"}>
      <CustomInput
            name="password"
            type="password"
            value={contactInfo.password}
            onChange={handleChange}
            error={errors.password}
          />
      </Label>

      <Label title={"confirm password"}>
      <CustomInput
            name="cpassword"
            type="password"
            value={contactInfo.cpassword}
            onChange={handleChange}
            error={errors.cpassword}
          />
      </Label>

      <Label title={"mobile number"}>
      <CustomInput
            name="mobile"
            type="tel"
            value={contactInfo.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
      </Label>

      <Label title={"gender"}>
        <OptionButtonsWithIcon
          options={genderOptions}
          onSelect={handleGenderSelect}
        />
      </Label>

      <div className="flex gap-x-4 items-center my-5">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className={`rounded ${
            errors.terms ? "border-red-500" : "border-gray-300"
          }`}
          checked={contactInfo.terms}
          onChange={(e) => dispatch(setTerms(e.target.checked))}
        />
        <p
          className={`text-[14px] text-[#767F8C] font-normal  ${
            errors.terms ? "text-[#0A65CC]" : "text-red-500"
          }`}
        >
          I&apos;ve read and agree with your{" "}
          <sapn className={`text-[#0A65CC]`}>
            {" "}
            Terms of Services & Privacy Policies of EducationJobs
          </sapn>
        </p>
      </div>

      <div className="flex gap-x-4 items-center my-5">
        <input
          type="checkbox"
          name="updates"
          id="updates"
          className={`rounded ${errors.updates ? "" : "border-red-500"}`}
          checked={contactInfo.updates}
          onChange={(e) => dispatch(setUpdates(e.target.checked))}
        />
        <p
          className={`text-[14px] font-normal ${
            errors.updates ? "text-[#767F8C] " : "text-red-500"
          }`}
        >
          Send me important updates & promotions via SMS, email, and WhatsApp
        </p>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
      >
        Create Account{" "}
        <Image src={RightIcon} width={24} height={24} alt="right icon" />
      </button>
    </form>
  );
};

export default ContactInfoComponent;
