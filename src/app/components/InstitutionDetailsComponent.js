"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Label from "./Label";
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInstitutionDetails,
  setSelectedInstitutionType,
  setSelectedSchoolName,
  setSchoolBoard,
  setEmployeesNumber,
} from "@/app/libs/store/features/institutionDetails/institutionDetailsSlice";
import Image from "next/image";
import RightIcon from "@/app/images/arrow-right.svg";
import Dropdown from "./Dropdown";
import CustomInput from "./CustomInput";

const InstitutionDetailsComponent = () => {
  const dispatch = useDispatch();
  const institutionDetails = useSelector((state) => state.institutionDetails);

  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInstitutionDetails({ [name]: value }));
  };

  const handleBack = () => router.back();

  const validateInputs = () => {
    const newErrors = {};
    let errorMessages = "";

    if (!institutionDetails.selectedInstitutionType) {
      newErrors.selectedInstitutionType = "Institution type is required";
      errorMessages += "Institution type is required.\n";
    }
    if (!institutionDetails.selectedSchoolName) {
      newErrors.selectedSchoolName = "School name is required";
      errorMessages += "School name is required.\n";
    }
    if (!institutionDetails.schoolBoard) {
      newErrors.schoolBoard = "School board is required";
      errorMessages += "School board is required.\n";
    }
    if (!institutionDetails.designation) {
      newErrors.designation = "Designation is required";
      errorMessages += "Designation is required.\n";
    }
    if (!institutionDetails.website) {
      newErrors.website = "School website is required";
      errorMessages += "School website is required.\n";
    }
    if (!institutionDetails.address) {
      newErrors.address = "Address is required";
      errorMessages += "Address is required.\n";
    }
    if (!institutionDetails.city) {
      newErrors.city = "City is required";
      errorMessages += "City is required.\n";
    }
    if (!institutionDetails.state) {
      newErrors.state = "State is required";
      errorMessages += "State is required.\n";
    }
    if (!institutionDetails.pincode) {
      newErrors.pincode = "Pincode is required";
      errorMessages += "Pincode is required.\n";
    }
    if (!institutionDetails.employeesNumber) {
      newErrors.employeesNumber = "Number of employees is required";
      errorMessages += "Number of employees is required.\n";
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
      console.log("Form Data:", institutionDetails);
      router.push("/verification");
    }
  };

  const institutionTypeOptions = [
    { label: "School", value: "school" },
    { label: "Coaching", value: "coaching" },
    { label: "College", value: "college" },
    { label: "University", value: "university" },
  ];

  const schoolNameOptions = [
    { label: "Delhi Public School", value: "dps" },
    { label: "St. Xavier's School", value: "sxs" },
  ];

  const boardOptions = [
    { label: "UP Board", value: "up board" },
    { label: "CBSE Board", value: "cbse board" },
    { label: "ICSE Board", value: "icse board" },
  ];

  const employeesNumber = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <CustomSelect
        label={"Institution Type"}
        placeholder={"Select institution type"}
        options={institutionTypeOptions}
        selectedInstitutionType={institutionDetails.selectedInstitutionType}
        value={institutionDetails.selectedInstitutionType}
        onChange={(types) => dispatch(setSelectedInstitutionType(types))}
        error={errors.selectedInstitutionType}
      />
      <CustomSelect
        label={"School Name"}
        placeholder={"Select school name"}
        options={schoolNameOptions}
        selectedInstitutionType={institutionDetails.selectedSchoolName}
        value={institutionDetails.selectedSchoolName}
        onChange={(types) => dispatch(setSelectedSchoolName(types))}
        error={errors.selectedSchoolName}
      />

      <Dropdown
        label="School Board"
        options={boardOptions}
        value={institutionDetails.schoolBoard}
        onChange={(value) => dispatch(setSchoolBoard(value))}
        error={errors.schoolBoard}
      />

      <Label title="Your Designation" error={errors.designation}>
        <CustomInput
          name="designation"
          value={institutionDetails.designation}
          onChange={handleChange}
          error={errors.designation}
        />
      </Label>

      <Label title="School Website" error={errors.website}>
        <CustomInput
          name="website"
          value={institutionDetails.website}
          onChange={handleChange}
          error={errors.website}
        />
      </Label>

      <Label title="School Address" error={errors.address}>
        <CustomInput
          name="address"
          value={institutionDetails.address}
          onChange={handleChange}
          error={errors.address}
        />
      </Label>

      <Label title="Additional Address Line">
        <input
          type="text"
          name="address1"
          className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border`}
          value={institutionDetails.address1}
          onChange={handleChange}
          placeholder="Address line 2"
        />
      </Label>

      <div className="flex items-center gap-4 my-4">
        <Label title="City" error={errors.city}>
          <CustomInput
            name="city"
            value={institutionDetails.city}
            onChange={handleChange}
            error={errors.city}
          />
        </Label>
        <Label title="State" error={errors.state}>
          <CustomInput
            name="state"
            value={institutionDetails.state}
            onChange={handleChange}
            error={errors.state}
          />
        </Label>
        <Label title="Pincode" error={errors.pincode}>
          <CustomInput
            name="pincode"
            value={institutionDetails.pincode}
            onChange={handleChange}
            error={errors.pincode}
          />
        </Label>
      </div>

      <Dropdown
        label="No. of Employees"
        options={employeesNumber}
        value={institutionDetails.employeesNumber}
        onChange={(value) => dispatch(setEmployeesNumber(value))}
        error={errors.employeesNumber}
      />

      <div className="flex gap-6 my-6">
        <button
          type="button"
          onClick={handleBack}
          className="capitalize text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] border border-[#0A65CC]"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex items-center justify-center gap-3 bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
        >
          Create Account{" "}
          <Image src={RightIcon} width={24} height={24} alt="right icon" />
        </button>
      </div>
    </form>
  );
};

export default InstitutionDetailsComponent;
