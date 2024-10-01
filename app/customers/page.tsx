import AddCustomerButton from "@/components/addcustomerbutton";
import SideBar from "@/components/sidebar";
import CustomerTable from "@/components/customertable";
import AvatarMenu from "@/components/avatarmenu";
import Link from "next/link";
import { db } from "@/db";

// Function to fetch policies from the database
export async function fetchCustomers(offset: number) {
  // Fetching policies from the database; adding a limit or offset if necessary
  const customers = await db.policyHolder.findMany({
    skip: offset,
    take: 5, // Number of customers you want to fetch at a time
    include: {
      policies: {
        include: {
          insurance_policy: true, // Include the related InsurancePolicy
        },
      },
    },
  });

  const totalCustomers = await db.policyHolder.count();

  return {
    customers, // Return policies directly
    newOffset: offset,
    totalCustomers, // Update the offset by the number of records fetched
  };
}

export default async function Customer({ searchParams }: any) {
  // Get the offset from searchParams or default to 0
  const offset = Number(searchParams?.offset ?? 0);

  // Fetch policies based on the offset
  const { customers, newOffset, totalCustomers } = await fetchCustomers(offset);

  return (
    <div className="bg-[#E0E0E0] min-h-screen flex">
      <SideBar />
      <main className="flex-1 ml-[74px] mt-6 mr-4">
        <header className="flex items-center justify-between mb-6">
          <Link href="/customers/add">
            <AddCustomerButton />
          </Link>
          <AvatarMenu />
        </header>
        <CustomerTable
         customers ={customers}
          totalCustomers={totalCustomers}
          offset={newOffset}
        />
      </main>
    </div>
  );
}
