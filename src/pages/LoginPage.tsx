import { FunctionComponent } from "react";
import LoginContainer from "../components/LoginContainer";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#161515] overflow-hidden flex flex-col items-center justify-start py-10 px-5 box-border gap-[19px] leading-[normal] tracking-[normal] text-center text-base text-[#fff] font-[Inter]">
      <section className="w-[412px] flex flex-col items-start justify-center">
        <LoginContainer />
      </section>
      <div className="flex flex-row items-center justify-center p-2.5">
        <b className="relative">
          © 2025 Nashrah UniVerse — All Rights Reserved
        </b>
      </div>
    </div>
  );
};

export default LoginPage;
