"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateVerification,
  setVerificationType,
} from "../libs/store/features/verification/verificationSlice";
import Dropdown from "./Dropdown";
import Image from "next/image";
import CircleIcon from "@/app/images/PlusCircle.svg";

const VerificationComponent = () => {
  const dispatch = useDispatch();
  const verification = useSelector((state) => state.verification);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateVerification({ [name]: value }));
  };

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", verification);
    alert("form submitted");
    router.push("/");
  };

  const documentType = [
    { label: "Aadhar Card", value: "aadhar card" },
    { label: "Voter Id", value: "voter id" },
    { label: "Pan Card", value: "pan card" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-[#666666] text-[16px] font-bold mb-2"
          htmlFor="about"
        >
          About the Institute
        </label>
        <textarea
          id="about"
          rows="4"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          className="block text-[#666666] text-[16px] font-bold mb-2"
          htmlFor="logo"
        >
          Upload Logo
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex items-center gap-4 p-[20px] text-blue rounded-lg tracking-wide uppercase border-dashed border-2 border-blue cursor-pointer hover:bg-blue-200">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 9.293l-7-7A1 1 0 008.293 3H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V10.707a1 1 0 00-.293-.707zM12 9a1 1 0 011-1h2.586L11 3.414V6a1 1 0 001 1h1a1 1 0 011 1v1zm-1 5a1 1 0 10-2 0 1 1 0 002 0zm2-5v2H9V7H7v6h6V9h-2z" />
            </svg> */}
            <Image
              src={CircleIcon}
              width={32}
              height={32}
              alt="circle icon"
              className="w-auto"
            />
            {/* <FontAwesomeIcon color="#0A65CC" icon={faCirclePlus} className="text-3xl" /> */}
            <div className="flex flex-col w-full">
              <span className="text-[14px] font-medium leading-normal">
                Upload Logo
              </span>
              <span className="text-[14px] text-[#5E6670] font-normal  leading-normal">
                Browse Photo or drop here. only PNG, JPG
              </span>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <Dropdown
        label="verification document"
        options={documentType}
        value={verification.verificationType}
        onChange={(value) => dispatch(setVerificationType(value))}
      />

      <div className="mb-4">
        <label
          className="block text-[#666666] text-[16px] font-bold mb-2"
          htmlFor="logo"
        >
          Upload Document
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex items-center gap-4 p-[20px] text-blue rounded-lg tracking-wide uppercase border-dashed border-2 border-blue cursor-pointer hover:bg-blue-200">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 9.293l-7-7A1 1 0 008.293 3H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V10.707a1 1 0 00-.293-.707zM12 9a1 1 0 011-1h2.586L11 3.414V6a1 1 0 001 1h1a1 1 0 011 1v1zm-1 5a1 1 0 10-2 0 1 1 0 002 0zm2-5v2H9V7H7v6h6V9h-2z" />
            </svg> */}
            <Image
              src={CircleIcon}
              width={32}
              height={32}
              alt="circle icon"
              className="w-auto"
            />
            {/* <FontAwesomeIcon color="#0A65CC" icon={faCirclePlus} className="text-3xl" /> */}
            <div className="flex flex-col w-full">
              <span className="text-[14px] font-medium leading-normal">
                Upload Logo
              </span>
              <span className="text-[14px] text-[#5E6670] font-normal  leading-normal">
                Browse files or drop here. only PDF
              </span>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          onClick={handleBack}
          type="button"
          className="capitalize text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] border border-[#0A65CC]"
        >
          back
        </button>
        <button
          type="submit"
          className="capitalize bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
        >
          finish
        </button>
      </div>
    </form>
  );
};

export default VerificationComponent;
