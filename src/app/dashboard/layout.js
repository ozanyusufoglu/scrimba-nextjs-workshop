import SideMenu from "../components/sideMenu/SideMenu";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SideMenu />
      {children}
    </>
  );
}
