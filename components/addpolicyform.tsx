import { db } from "@/db/index";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SelectPolicyType } from "./policytype";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreateInsurancePolicyForm() {
  async function createPolicyItem(formData: FormData) {
    "use server";
    const insurance_policy_id = formData.get("insurance_policy_id") as string;
    const insurance_policy_name = formData.get(
      "insurance_policy_name"
    ) as string;
    const base_price_sgdString = formData.get("base_price_sgd") as string;
    const base_price_sgd = parseFloat(base_price_sgdString);
    const type_of_policy = formData.get("type_of_policy") as string;

    const policyItem = await db.insurancePolicy.create({
      data: {
        insurance_policy_id,
        insurance_policy_name,
        base_price_sgd,
        type_of_policy,
      },
    });

    redirect("/");
  }

  return (
    <form action={createPolicyItem}>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Add Policy</CardTitle>
          <CardDescription>Add a new policy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-5 mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="insurance_policy_id"
              className="w-[200px] text-left text-lg"
            >
              ID
            </Label>
            <Input
              type="text"
              id="insurance_policy_id"
              name="insurance_policy_id"
              placeholder="20A123"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="insurance_policy_name"
              className="w-[200px]  text-left text-lg"
            >
              Name
            </Label>
            <Input
              type="text"
              id="insurance_policy_name"
              name="insurance_policy_name"
              placeholder="Basic Health Coverage"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="base_price_sgd"
              className="w-[200px] text-left text-lg"
            >
              Price
            </Label>
            <Input
              type="text"
              id="base_price_sgd"
              name="base_price_sgd"
              placeholder="15"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-20 flex items-center">
            <Label
              htmlFor="type_of_policy"
              className="w-[184px] text-left text-lg"
            >
              Type
            </Label>
              <SelectPolicyType />
          </div>
          <div className="flex justify-end mr-[32px] mb-6">
            <Button type="submit">Submit</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
