import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputEmailType = {
  className?: string;
  email?: string;
  enterYourEmailAddress?: string;

  /** Style props */
  emailtextholderPadding?: CSSProperties["padding"];
  enterYourEmailWidth?: CSSProperties["width"];
};

const InputEmail: FunctionComponent<InputEmailType> = ({
  className = "",
  email,
  emailtextholderPadding,
  enterYourEmailAddress,
  enterYourEmailWidth,
}) => {
  const emailtextholderStyle: CSSProperties = useMemo(() => {
    return {
      padding: emailtextholderPadding,
    };
  }, [emailtextholderPadding]);

  const enterYourEmailStyle: CSSProperties = useMemo(() => {
    return {
      width: enterYourEmailWidth,
    };
  }, [enterYourEmailWidth]);

  return (
    <div
      className={`flex flex-col items-center justify-start gap-6 text-center text-sm text-[#fff] font-[Inter] ${className}`}
    >
      <div className="relative">{email}</div>
      <button
        className="cursor-pointer [border:none] pt-2.5 pb-[13px] pl-[43px] pr-[42px] bg-[transparent] w-[249px] h-10 flex flex-row items-start justify-start box-border relative"
        style={emailtextholderStyle}
      >
        <div className="h-10 w-[249px] absolute !!m-[0 important] top-[0px] left-[0px] bg-[rgba(217,217,217,0.3)]" />
        <div
          className="w-[164px] relative text-sm font-[Inter] text-[#fff] text-center inline-block z-[1]"
          style={enterYourEmailStyle}
        >
          {enterYourEmailAddress}
        </div>
      </button>
    </div>
  );
};

export default InputEmail;
