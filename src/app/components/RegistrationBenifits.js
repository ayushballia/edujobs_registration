import React from 'react';
import Image from 'next/image';
import checkIcon from '@/app/images/check.png';
import RegisterIcon from '@/app/images/register icon.svg';

const RegistrationBenefit = ({ text }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center justify-center bg-[#47B749] rounded-[50%] w-[20px] h-[20px] px-[3px]">
      <Image src={checkIcon} width={11} height={7} alt="tick icon" />
    </div>
    <p className="text-[12px] text-[#232323D9] font-normal">{text}</p>
  </div>
);

const RegistrationBenefits = () => (
  <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 h-max  max-w-[285px]">
    <div className="flex items-center justify-center">
      <Image
        src={RegisterIcon}
        width={153}
        height={140}
        alt="Education jobs register icon"
        className="text-center"
      />
    </div>
    <h2 className="text-[16px] font-bold text-[#232323] text-center">
      On registering, You can
    </h2>
    <RegistrationBenefit text="Built your profile and apply to teaching & Non-Teaching Jobs" />
    <RegistrationBenefit text="Get direct calls from HR of Top Institution" />
    <RegistrationBenefit text="Verified Employers and Jobs" />
    <RegistrationBenefit text="Get latest jobs update on your email and WhatsApp" />
  </div>
);

export default RegistrationBenefits;