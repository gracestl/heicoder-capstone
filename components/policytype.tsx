import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectPolicyType() {
  return (
    <Select name="type_of_policy" required>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a policy type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Business">Business Insurance</SelectItem>
          <SelectItem value="Car">Car Insurance</SelectItem>
          <SelectItem value="Critical Illness">Critical Illness</SelectItem>
          <SelectItem value="Health">Health Insurance</SelectItem>
          <SelectItem value="Home">Home Insurance</SelectItem>
          <SelectItem value="Life">Life Insurance</SelectItem>
          <SelectItem value="Personal Accident">Personal Accident</SelectItem>
          <SelectItem value="Travel">Travel Insurance</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
