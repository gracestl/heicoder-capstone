import SideBar from "@/components/sidebar";
import AvatarMenu from "@/components/avatarmenu";

export default function Home() {

  return (
    <>
      <SideBar />
      <div className="flex-1 ml-[76px] mt-[24px] mr-[16px]">
        <div className="flex flex-row justify-end mb-[24px]">
          <AvatarMenu />
        </div>
      </div>
    </>
  );
}