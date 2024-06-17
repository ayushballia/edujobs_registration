"use client";
import { usePathname } from "next/navigation";
import LawyerIcon from "@/app/images/Lawyer.svg";
import ProfileIcon from "@/app/images/Profiles.svg";
import Image from "next/image";
import Link from "next/link";
import RegistrationBenefits from "./RegistrationBenifits";

const Layout = ({ children }) => {
  const path = usePathname();

  const steps = [
    {
      name: "Contact Info",
      path: "/",
      sidebarIcon: LawyerIcon,
    },
    {
      name: "Institution Details",
      path: "/institution-details",
      sidebarIcon: ProfileIcon,
    },
    {
      name: "verification",
      path: "/verification",
      sidebarIcon: ProfileIcon,
    },
  ];

  const getStepIndex = (path) => steps.findIndex((step) => step.path === path);

  const currentStepIndex = getStepIndex(path);

  return (
    <div className="flex gap-6 justify-evenly">
      {/* Sidebar */}
      <div className="w-1/4 flex flex-col gap-y-6">
        <nav className=" p-[30px] bg-white border rounded-[20px] h-max max-w-[285px]">
          <p className="text-[20px] font-bold text-[#232323] mb-5">
            Registration Process
          </p>
          <ul className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <li key={step.path}>
                <Link
                  href={index <= currentStepIndex ? step.path : path}
                  className={`flex gap-4 ${
                    index <= currentStepIndex ? "font-bold" : ""
                  }`}
                >
                  <div className="flex items-center justify-center p-1 rounded-[50%] bg-[#0043CE]">
                    <Image
                      src={step.sidebarIcon}
                      width={20}
                      height={20}
                      className="w-auto"
                      alt="detail icon"
                    />
                  </div>
                  <span className="text-[18px]">{step.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <RegistrationBenefits />
      </div>

      {/* Main Content */}
      <main className="w-3/4 px-[29px] py-[35px] bg-white rounded-[20px] max-w-[843px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
