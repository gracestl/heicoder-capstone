
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Policy {
  insurance_policy_id: string;
  insurance_policy_name: string;
  base_price_sgd: number | string; 
  type_of_policy: string;
}

interface PolicyRowType {
  policy: Policy;
}

export function PolicyRow({ policy }: PolicyRowType) {
  return (
    <TableRow className="h-16">
      <TableCell className="font-medium">
        {policy.insurance_policy_id}
      </TableCell>
      <TableCell>{policy.insurance_policy_name}</TableCell>
      <TableCell>
        <span className="font-medium">${policy.base_price_sgd}</span>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="rounded-full">
          {policy.type_of_policy}
        </Badge>
      </TableCell>
    </TableRow>
  );
}
