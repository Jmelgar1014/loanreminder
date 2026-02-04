import React from "react";
import { ArrowUpRightIcon, FolderArchiveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

interface loanFormData {
  isFormOpen: () => void;
}

const EmptyList = ({ isFormOpen }: loanFormData) => {
  return (
    <>
      <div className="bg-card w-full m-4 sm:w-96 sm:h-80 rounded-lg ">
        <Empty className="">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderArchiveIcon />
            </EmptyMedia>
            <EmptyTitle>No Current Loan Payments</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t added any loans yet. Get started by adding your
              first loan.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button className="hover:cursor-pointer" onClick={isFormOpen}>
                Add Loan
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
};

export default EmptyList;
