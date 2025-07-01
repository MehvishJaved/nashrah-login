import { FunctionComponent } from "react";
import TabRole from "./TabRole";
import InputEmail from "./InputEmail";

export type LoginContainerType = {
  className?: string;
};

const LoginContainer: FunctionComponent<LoginContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[412px] shadow-[0px_4px_32px_rgba(0,_0,_0,_0.2)] bg-[#232b35] border-[#161515] border-solid border-[1px] box-border overflow-y-auto flex flex-col items-center justify-start p-8 gap-6 text-center text-sm text-[#fff] font-[Inter] mq683:pt-[21px] mq683:pb-[21px] mq683:box-border ${className}`}
    >
      <img
        className="w-[98px] relative max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className="w-[272px] h-[109px] shrink-0 flex flex-row items-center justify-center">
        <div className="relative">
          <p className="m-0 text-2xl">Nashrah UniVerse</p>
          <p className="m-0">Welcome Back!</p>
          <p className="m-0">Please log in to continue.</p>
        </div>
      </div>
      <div className="w-[232.2px] h-[91px] shrink-0 flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start">
          <div className="h-[91px] overflow-hidden flex flex-row items-start justify-start">
            <div className="h-[67px] w-[232.2px] flex flex-row items-start justify-start gap-[30.7px]">
              <div className="flex flex-col items-end justify-start gap-[17px]">
                <TabRole state="active" systemAdmin="System Admin" />
                <div className="flex flex-row items-start justify-end py-0 pl-0 pr-px">
                  <TabRole state="inactive" systemAdmin="Teacher" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[17px]">
                <TabRole state="inactive" systemAdmin="Admin" />
                <TabRole state="inactive" systemAdmin="Parent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputEmail
        email="Email"
        enterYourEmailAddress="Enter your email address"
      />
      <InputEmail
        email="Password"
        emailtextholderPadding="11px 56px 12px"
        enterYourEmailAddress="Enter your password"
        enterYourEmailWidth="137px"
      />
      <button className="cursor-pointer [border:none] p-2.5 bg-[#663aa4] rounded-xl overflow-hidden shrink-0 flex flex-row items-start justify-start hover:bg-[#8c61c9]">
        <b className="relative text-base font-[Inter] text-[#fff] text-center">
          Login
        </b>
      </button>
    </div>
  );
};

export default LoginContainer;
