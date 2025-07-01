import { FunctionComponent } from "react";

export type TabRoleType = {
  className?: string;
  systemAdmin?: string;

  /** Variant props */
  state?: string;
};

const TabRole: FunctionComponent<TabRoleType> = ({
  className = "",
  state = "active",
  systemAdmin,
}) => {
  return (
    <div
      className={`w-[100px] h-[25px] rounded-xl bg-[#6734af] flex flex-row items-center justify-center py-2.5 px-4 box-border z-[2] text-center text-sm text-[#fff] font-[Inter] data-[state='inactive']:bg-[#fff] data-[state='inactive']:z-[unset] data-[state='inactive']:[border:none] data-[state='inactive']:[&_.system-admin]:text-[#663aa4] data-[state='inactive']:[&_.system-admin]:[text-shadow:1px_0_0_rgba(102,_58,_164,_0.2),_0_1px_0_rgba(102,_58,_164,_0.2),_-1px_0_0_rgba(102,_58,_164,_0.2),_0_-1px_0_rgba(102,_58,_164,_0.2)] ${className}`}
      data-state={state}
    >
      <div className="system-admin relative">{systemAdmin}</div>
    </div>
  );
};

export default TabRole;
