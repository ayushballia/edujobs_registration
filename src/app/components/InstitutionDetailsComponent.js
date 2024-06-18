"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Label from "./Label";
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInstitutionDetails,
  setSelectedInstitutionType,
  setSelectedSchoolName,
  setSchoolBoard,
} from "@/app/libs/store/features/institutionDetails/institutionDetailsSlice";
import Image from "next/image";
import RightIcon from "@/app/images/arrow-right.svg";
import Dropdown from "./Dropdown";

const InstitutionDetailsComponent = () => {
  const dispatch = useDispatch();
  const institutionDetails = useSelector((state) => state.institutionDetails);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInstitutionDetails({ [name]: value }));
  };

  const handleSubmit = () => {
    console.log("form data: ", institutionDetails);
  };

  const institutionTypeOptions = [
    { label: "School", value: "school" },
    { label: "Coaching", value: "coaching" },
    { label: "Collage", value: "collage" },
    { label: "University", value: "university" },
  ];
  const schoolNameOptions = [
    { label: "Delhi public school", value: "dps" },
    { label: "St. xavier's school", value: "sxs" },
  ];

  const boardOptions = [
    { label: "UP Board", value: "up board" },
    { label: "CBSE Board", value: "cbse board" },
    { label: "ICSE Board", value: "icse board" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <CustomSelect
        label={"institution type"}
        placeholder={"select institution type"}
        options={institutionTypeOptions}
        selectedInstitutionType={institutionDetails.selectedInstitutionType}
        value={institutionDetails.selectedInstitutionType}
        onChange={(types) => dispatch(setSelectedInstitutionType(types))}
      />
      <CustomSelect
        label={"school name"}
        placeholder={"select institution type"}
        options={schoolNameOptions}
        selectedInstitutionType={institutionDetails.selectedSchoolName}
        value={institutionDetails.selectedSchoolName}
        onChange={(types) => dispatch(setSelectedSchoolName(types))}
      />

      <Dropdown
        label="school board"
        options={boardOptions}
        value={institutionDetails.schoolBoard}
        onChange={(value) => dispatch(setSchoolBoard(value))}
      />

      <Label title="your designation">
        <input
          type="text"
          name="designation"
          className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border`}
          value={institutionDetails.designation}
          onChange={handleChange}
          placeholder="Enter your designation"
        />
      </Label>

      <Label title="school website">
        <input
          type="text"
          name="website"
          className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border`}
          value={institutionDetails.website}
          onChange={handleChange}
          placeholder="Enter your school website"
        />
      </Label>

      <Label title="school address">
        <input
          type="text"
          name="address"
          className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border`}
          value={institutionDetails.address}
          onChange={handleChange}
          placeholder="Address line 1"
        />
      </Label>

      <input
          type="text"
          name="address1"
          className={`text-[14px] p-[16px] text-[14px] font-normal w-full rounded-[15px] border`}
          value={institutionDetails.address1}
          onChange={handleChange}
          placeholder="Address line 2"
        />

        <div className="flex items-center gap-4">
            
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

export default InstitutionDetailsComponent;
