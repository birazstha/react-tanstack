import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

export default function RootPage(params) {
  return (
    <>
      <div className="min-h-screen bg-gray-700">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}
