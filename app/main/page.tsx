import EmptyList from "@/components/EmptyList";
import LoanListContainer from "@/components/LoanListContainer";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-10">
          <div className="col-span-2">Testing</div>
          <div className="col-span-8 my-16 ">
            <LoanListContainer />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
