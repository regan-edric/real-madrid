import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isActive?: boolean;
}

export default function ButtonNavTab({
  children,
  isActive,
  ...props
}: IButton) {
  return (
    <>
      <div className="">
        <button
          {...props}
          className={`${
            isActive ? `bg-[#3E30FA] text-white` : `bg-slate-100 text-slate-800`
          }  py-3 px-14  font-semibold rounded-full`}
        >
          {children}
        </button>
      </div>
    </>
  );
}
