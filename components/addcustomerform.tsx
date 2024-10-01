import { db } from "@/db/index";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SelectPolicyName } from "./policyname"; // Importing the policy selection dropdown component

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function CreatePolicyHolderForm({ policies }:any) {
  async function createPolicyHolderItem(formData: FormData) {
    "use server";

    const policy_holder_id = formData.get("policy_holder_id") as string;
    const policy_holder_email = formData.get("policy_holder_email") as string;
    const policy_holder_first_name = formData.get(
      "policy_holder_first_name"
    ) as string;
    const policy_holder_last_name = formData.get(
      "policy_holder_last_name"
    ) as string;
    const selectedPolicies = formData.getAll("policies") as string[];

  
    await db.policyHolder.create({
      data: {
        policy_holder_id,
        policy_holder_email,
        policy_holder_first_name,
        policy_holder_last_name,
        policies: {
          create: selectedPolicies.map((policyId) => ({
            insurance_policy: {
              connect: { insurance_policy_id: policyId }, 
            },
          })),
        },
      },
    });

    redirect("/");
  }

  return (
    <form action={createPolicyHolderItem}>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Add Policy Holder</CardTitle>
          <CardDescription>Add a new policy holder</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-5 mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="policy_holder_id"
              className="w-[200px] text-left text-lg"
            >
              NRIC
            </Label>
            <Input
              type="text"
              id="policy_holder_id"
              name="policy_holder_id"
              placeholder="S1234567A"
              required
              className="w-[320px]"
            />
          </div>
          <div className="mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="policy_holder_email"
              className="w-[200px] text-left text-lg"
            >
              Email
            </Label>
            <Input
              type="text"
              id="policy_holder_email"
              name="policy_holder_email"
              placeholder="xxx@example.com"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="policy_holder_first_name"
              className="w-[200px] text-left text-lg"
            >
              First Name
            </Label>
            <Input
              type="text"
              id="policy_holder_first_name"
              name="policy_holder_first_name"
              placeholder="Tom"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-10 mr-[32px] flex items-center">
            <Label
              htmlFor="policy_holder_last_name"
              className="w-[200px] text-left text-lg"
            >
              Last Name
            </Label>
            <Input
              type="text"
              id="policy_holder_last_name"
              name="policy_holder_last_name"
              placeholder="Smith"
              required
              className="w-[320px]"
            />
          </div>

          <div className="mb-20 mr-[32px] flex items-center">
            <Label htmlFor="policies" className="w-[310px] text-left text-lg">
              Policies
            </Label>
            <SelectPolicyName policies={policies} />
          </div>

          <div className="flex justify-end mr-[32px] mb-6">
            <Button type="submit">Submit</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
