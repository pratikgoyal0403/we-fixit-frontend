import SideNavbar from "../SideNavbar/SideNavbar";
export default function AdminLayout({children}) {
  return (
    <div className="grid grid-cols-admin-layout">
      <SideNavbar />
      <div>{children}</div>
    </div>
  );
}
