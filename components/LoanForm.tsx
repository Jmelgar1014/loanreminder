"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { LoanFormSchema } from "@/zodSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SquareX } from "lucide-react";
import { FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import AutoPaySelect from "./AutoPaySelect";

interface closeFormData {
  isFormClosed: () => void;
}

const LoanForm = ({ isFormClosed }: closeFormData) => {
  const form = useForm<z.infer<typeof LoanFormSchema>>({
    resolver: zodResolver(LoanFormSchema),
    defaultValues: {
      Vendor: "",
      Amount: 0.0,
      Type: "",
      Description: "",
      Autopay: true,
    },
  });

  const onSubmit = (data: z.infer<typeof LoanFormSchema>) => {
    console.log("Data has been submitted");
  };

  return (
    <div className=" bg-black/50 z-50 flex justify-center items-center w-full h-screen backdrop-blur-sm">
      <Card className="w-full sm:max-w-md m-4 ">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Loan Form</CardTitle>
            <div className="hover:bg-muted hover:cursor-pointer p-1 rounded-md">
              <SquareX className="" onClick={isFormClosed} />
            </div>
          </div>
          <CardDescription>Provide details of loan</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="Vendor"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Vendor">Vendor</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Enter Vendor Name"
                      type="text"
                    />
                  </Field>
                )}
              />
              <Controller
                name="Type"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Type">Type</FieldLabel>
                    <Input {...field} placeholder="Loan Type" type="text" />
                  </Field>
                )}
              />
              <Controller
                name="Description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Description">Description</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Loan Description"
                      type="text"
                    />
                  </Field>
                )}
              />
              <Controller
                name="Amount"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Amount">Amount</FieldLabel>
                    <Input {...field} placeholder="Loan Amount" type="number" />
                  </Field>
                )}
              />
              <Controller
                name="DueDate"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Due Date">Due Date</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Loan DueDate"
                      type="number"
                    />
                  </Field>
                )}
              />
              <Controller
                name="Autopay"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="Autopay">Autopay</FieldLabel>
                    <AutoPaySelect />
                  </Field>
                )}
              />
              <Controller
                name="LoanFinished"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="LoanFinished">
                      Loan Finished
                    </FieldLabel>
                    <AutoPaySelect />
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanForm;
