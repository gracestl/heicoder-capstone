"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectPolicyName({ policies }: { policies: any[] }) {
  return (
    <Select name="policies" required>
      <SelectTrigger>
        <SelectValue placeholder="Select a policy" />
      </SelectTrigger>
      <SelectContent>
        {policies.map((policy) => (
          <SelectItem
            key={policy.insurance_policy_id}
            value={policy.insurance_policy_id}
          >
            {policy.insurance_policy_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
