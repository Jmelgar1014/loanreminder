import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AutoPaySelect = () => {
  const booleanValues = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const itemValues = [
    { label: "Make a Selection", value: null },
    ...booleanValues,
  ];
  return (
    <Select items={itemValues}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Autopay" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {booleanValues.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AutoPaySelect;
