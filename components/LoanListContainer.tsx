import React from "react";
import EmptyList from "./EmptyList";

const LoanListContainer = () => {
  return (
    <div className="bg-muted h-screen rounded-xl flex justify-center items-center mx-8 ">
      <EmptyList />
    </div>
  );
};

export default LoanListContainer;
