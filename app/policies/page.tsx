import AddPolicyButton from "@/components/addpolicybutton";
import SideBar from "@/components/sidebar";
import PolicyTable from "@/components/policytable";
import AvatarMenu from "@/components/avatarmenu";
import Link from "next/link";
import { db } from "@/db";


export async function fetchPolicies(offset: number) {
  const policies = await db.insurancePolicy.findMany({
    skip: offset,
    take: 5,
  });


  const totalPolicies = await db.insurancePolicy.count();


  return {
    policies,       
    totalPolicies
  };
}

export default async function Policy({ searchParams }: any) {
  const offset = Number(searchParams?.offset ?? 0);

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
