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
import { CustomerRow } from "@/components/customerrow";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerTable({
  customers,
  totalCustomers,
  offset,
}: {
  customers: any[];
  totalCustomers: number;
  offset: number;
}) {
  const router = useRouter();
  const postsPerPage = 5;

  function prevPage() {
    const newOffset = offset - postsPerPage;
    if (newOffset >= 0) {
      router.push(`/customers/?offset=${newOffset}`, { scroll: false });
    }
  }

  function nextPage() {
    const newOffset = offset + postsPerPage;
    if (newOffset < totalCustomers) {
      router.push(`/customers/?offset=${newOffset}`, { scroll: false });
    }
  }

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Policy Holders</CardTitle>
        <CardDescription>
          Personal details of all policy holders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">NRIC</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Policies Held</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customerListing: any) => (
              <CustomerRow
                key={customerListing.policy_holder_id}
                customer={customerListing}
              />
            ))}
          </TableBody>
          <TableCaption className="text-left">
            <div className="flex items-center justify-between">
              <div>
                Showing{" "}
                <strong>
                  {Math.min(offset + 1, totalCustomers)}-
                  {Math.min(offset + postsPerPage, totalCustomers)}
                </strong>{" "}
                of <strong>{totalCustomers}</strong> policy holders
              </div>

              <div className="flex">
                <Button
                  onClick={prevPage}
                  variant="ghost"
                  size="sm"
                  disabled={offset === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Prev
                </Button>

                <Button
                  onClick={nextPage}
                  variant="ghost"
                  size="sm"
                  disabled={offset + postsPerPage >= totalCustomers}
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
