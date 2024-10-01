import CreateInsurancePolicyForm from "@/components/addpolicyform";
import SideBar from "@/components/sidebar";
import AvatarMenu from "@/components/avatarmenu";

export default function AddPolicy() {
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
          <CreateInsurancePolicyForm />
        </div>
      </main>
    </div>
  );
}
