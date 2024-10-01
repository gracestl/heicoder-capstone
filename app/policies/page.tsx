import AddPolicyButton from "@/components/addpolicybutton";
import SideBar from "@/components/sidebar";
import PolicyTable from "@/components/policytable";
import AvatarMenu from "@/components/avatarmenu";
import Link from "next/link";
import { db } from "@/db";

// Function to fetch policies from the database
export async function fetchPolicies(offset: number) {
  // Fetching policies from the database; adding a limit or offset if necessary
  const policies = await db.insurancePolicy.findMany({
    skip: offset,
    take: 5, // or the number of policies you want to fetch at a time
  });


  const totalPolicies = await db.insurancePolicy.count();


  return {
    policies,       // Return policies directly
    totalPolicies// Update the offset by the number of records fetched
  };
}

export default async function Policy({ searchParams }: any) {
  // Get the offset from searchParams or default to 0
  const offset = Number(searchParams?.offset ?? 0);

  // Fetch policies based on the offset
  const { policies, totalPolicies } = await fetchPolicies(offset);

  return (
    <div className="bg-[#E0E0E0] min-h-screen flex">
      <SideBar />
      <main className="flex-1 ml-[74px] mt-6 mr-4">
        <header className="flex items-center justify-between mb-6">
          <Link href="/policies/add">
            <AddPolicyButton />
          </Link>
          <AvatarMenu />
        </header>
        <PolicyTable
          policies={policies}
          totalPolicies={totalPolicies}
          offset={offset}
        />
      </main>
    </div>
  );
}
