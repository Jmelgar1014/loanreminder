"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { z } from "zod";
import { LoanFormSchema } from "@/zodSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
const LoanForm = () => {
  const form = useForm<z.infer<typeof LoanFormSchema>>({
    resolver: zodResolver(LoanFormSchema),
    defaultValues: {
      Vendor: "",
      Amount: 0.0,
    },
  });

  return <div>LoanForm</div>;
};

export default LoanForm;
