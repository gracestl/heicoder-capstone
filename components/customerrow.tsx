import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface PolicyAssignment {
  insurance_policy: {
    insurance_policy_name: string;
  };
}

interface Customer {
  policy_holder_id: string;
  policy_holder_email: string;
  policy_holder_first_name: string;
  policy_holder_last_name: string;
  policies: PolicyAssignment[];
}

interface CustomerRowType {
  customer: Customer;
}

export function CustomerRow({ customer }: CustomerRowType) {
  return (
    <TableRow className="h-16">
      <TableCell className="font-medium">{customer.policy_holder_id}</TableCell>
      <TableCell>{customer.policy_holder_email}</TableCell>
      <TableCell>{customer.policy_holder_first_name}</TableCell>
      <TableCell>{customer.policy_holder_last_name}</TableCell>
      <TableCell>
        {customer.policies.map((policy, index) => (
          <Badge key={index} variant="outline" className="rounded-full">
            {policy.insurance_policy.insurance_policy_name}
          </Badge>
        ))}
      </TableCell>
    </TableRow>
  );
}
