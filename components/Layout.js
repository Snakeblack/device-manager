import { useRouter } from 'next/router';
import { ToastContainer } from "react-toastify";
import Navigator from "./Navbar";
import SideBar from "./Sidebar";

export function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {/* <Navigator /> */}

      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-row">
        {router.pathname != "/profile" ? <SideBar /> : null}
        
        <div className="h-full w-full px-5 pt-10 md:px-14 md:pt-20">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}
