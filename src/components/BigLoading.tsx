import { ReactNode } from "react";

interface IBigLoading {
  children?: ReactNode;
}

export const BigLoading = ({ children }: IBigLoading) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col-reverse justify-center items-center bg-black bg-opacity-50">
      {children}
      <div
        className="animate-spin h-32 w-32 border-8 border-t-8 border-t-sky-500 border-gray-300 rounded-full"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
