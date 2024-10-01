import AddCustomerButton from "@/components/addcustomerbutton";
import SideBar from "@/components/sidebar";
import CustomerTable from "@/components/customertable";
import AvatarMenu from "@/components/avatarmenu";
import Link from "next/link";
import { db } from "@/db";


export async function fetchCustomers(offset: number) {
  const customers = await db.policyHolder.findMany({
    skip: offset,
    take: 5, 
    include: {
      policies: {
        include: {
          insurance_policy: true, 
        },
      },
    },
  });

  const totalCustomers = await db.policyHolder.count();

  return {
    customers, 
    newOffset: offset,
    totalCustomers,
  };
}

export default async function Customer({ searchParams }: any) {
  const offset = Number(searchParams?.offset ?? 0);

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
