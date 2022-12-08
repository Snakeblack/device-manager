import { ToastContainer } from "react-toastify";
import Navigator from "./Navbar";
import SideBar from './Sidebar';

export function Layout({ children }) {
  return (
    <>
      <Navigator />
      
      <div
        className="bg-white dark:bg-gray-900 dark:text-white min-h-screen p-10 flex flex-row"
      >
        <SideBar />
        <div className="container mx-9 h-full ">{children}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
