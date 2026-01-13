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

const EmptyList = () => {
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
              <Button className="hover:cursor-pointer">Add Loan</Button>
              {/* <Button variant="outline">Import Project</Button> */}
            </div>
          </EmptyContent>
          {/* <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <a href="#">
              Learn More <ArrowUpRightIcon />
            </a>
          </Button> */}
        </Empty>
      </div>
    </>
  );
};

export default EmptyList;
