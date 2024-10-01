import CreateInsurancePolicyForm from "@/components/addpolicyform";
import SideBar from "@/components/sidebar";
import AvatarMenu from "@/components/avatarmenu";

export default function AddPolicy() {
  return (
    <div className="bg-[#E0E0E0] min-h-screen flex">
      <SideBar />
      <main className="flex-1 ml-20 mt-6 mr-4">
        <header className="flex justify-end mb-6">
          <AvatarMenu />
        </header>
        <div className="w-[565px] h-[661px] mx-auto">
          <CreateInsurancePolicyForm />
        </div>
      </main>
    </div>
  );
}
