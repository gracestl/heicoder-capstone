"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";
import { PolicyRow } from "@/components/policyrow";
import { useRouter } from "next/navigation"; 
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PolicyTable({
  policies,
  totalPolicies,
  offset,
}: {
  policies: any[];
  totalPolicies: number;
  offset: number;
}) {
  const router = useRouter();
  const postsPerPage = 5;

  function prevPage() {
    const newOffset = offset - postsPerPage;
    if (newOffset >= 0) {
      router.push(`/policies/?offset=${newOffset}`, { scroll: false });
    }
  }

  function nextPage() {
    const newOffset = offset + postsPerPage;
    if (newOffset < totalPolicies) {
      router.push(`/policies/?offset=${newOffset}`, { scroll: false });
    }
  }

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Insurance Policies</CardTitle>
        <CardDescription>
          Critical details of insurance policies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Base Price (SGD)</TableHead>
              <TableHead>Type of Policy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policyItem: any) => (
              <PolicyRow
                key={policyItem.insurance_policy_id}
                policy={policyItem}
              />
            ))}
          </TableBody>
          <TableCaption className="text-left">
            <div className="flex items-center justify-between">
              <div>
                Showing{" "}
                <strong>
                  {offset + 1}-{Math.min(offset + postsPerPage, totalPolicies)}
                </strong>{" "}
                of <strong>{totalPolicies}</strong> policies
              </div>

              <div className="flex">
                <Button
                  onClick={prevPage}
                  variant="ghost"
                  size="sm"
                  disabled={offset === 0} // Disable when on the first page
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Prev
                </Button>

                <Button
                  onClick={nextPage}
                  variant="ghost"
                  size="sm"
                  disabled={offset + postsPerPage >= totalPolicies} // Disable when no more posts
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TableCaption>
        </Table>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
