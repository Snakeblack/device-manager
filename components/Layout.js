import { useRouter } from 'next/router';
import { ToastContainer } from "react-toastify";
import Navigator from "./Navbar";
import SideBar from "./Sidebar";

export function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Navigator />

      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen p-10 flex flex-row">
        {router.pathname != "/profile" ? <SideBar /> : null}
        
        <div className="container ml-14 h-full ">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}
