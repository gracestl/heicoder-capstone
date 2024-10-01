import AvatarMenu from "@/components/avatarmenu";
import SideBar from "@/components/sidebar";
import CreatePolicyHolderForm from "@/components/addcustomerform";
import { db } from "@/db"; 

export default async function AddCustomer() {
  const policies = await db.insurancePolicy.findMany({
    select: {
      insurance_policy_id: true,
      insurance_policy_name: true,
    },
  });

  return (
    <div className="bg-[#E0E0E0] min-h-screen flex">
      <SideBar />
      <main className="flex-1 ml-20 mt-6 mr-4">
        <header className="flex justify-end mb-6">
          <AvatarMenu />
        </header>
        <div className="w-[565px] h-[661px] mx-auto">
          <CreatePolicyHolderForm policies={policies} />
        </div>
      </main>
    </div>
  );
}
