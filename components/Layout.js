import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}
