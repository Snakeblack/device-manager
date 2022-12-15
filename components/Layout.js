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
        
        <div className="h-full w-full px-5 pt-10 md:pt-20 sm:ml-44 sm:px-10 md:ml-40 md:px-20 lg:ml-52 lg:px-36">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}
