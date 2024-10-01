import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function AddCustomerButton() {
  return (
    <Button className="flex items-center justify-center  h-8 space-x-2 bg-black text-white shadow-md">
      <CirclePlus className="w-4 h-4 stroke-[2.5]" />
      <span>Add Policy Holder</span>
    </Button>
  );
}
