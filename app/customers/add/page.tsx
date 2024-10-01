import AvatarMenu from "@/components/avatarmenu";
import SideBar from "@/components/sidebar";
import CreatePolicyHolderForm from "@/components/addcustomerform";
import { db } from "@/db"; // Import Prisma instance

// This is a server component, and you can fetch the data directly here
export default async function AddCustomer() {
  // Fetch the insurance policies from the database
  const policies = await db.insurancePolicy.findMany({
    select: {
      insurance_policy_id: true,
      insurance_policy_name: true,
    },
  });

  return (
    <div className="bg-[#E0E0E0] min-h-screen flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <main className="flex-1 ml-20 mt-6 mr-4">
        {/* Header with only Avatar Menu aligned to the right */}
        <header className="flex justify-end mb-6">
          <AvatarMenu />
        </header>

        {/* Form content */}
        <div className="w-[565px] h-[661px] mx-auto">
          {/* Pass the policies to the CreatePolicyHolderForm */}
          <CreatePolicyHolderForm policies={policies} />
        </div>
      </main>
    </div>
  );
}
