"use client";
import { useState } from "react";
import EmptyList from "./EmptyList";
import LoanForm from "./LoanForm";

const LoanListContainer = () => {
  const [addForm, setAddForm] = useState<boolean>(false);

  const formState = () => {
    setAddForm(true);
  };
  const closeForm = () => {
    setAddForm(false);
  };

  return (
    <div className="bg-muted h-screen rounded-xl flex justify-center items-center mx-8 ">
      {addForm ? (
        <LoanForm isFormClosed={closeForm} />
      ) : (
        <EmptyList isFormOpen={formState} />
      )}
    </div>
  );
};

export default LoanListContainer;
