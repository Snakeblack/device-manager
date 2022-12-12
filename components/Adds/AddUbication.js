import Link from "next/link";
import { useRouter } from "next/router";
import { classAdd } from "./Add";

const AddUbication = () => {
  const router = useRouter();
  let buttonClassName;

  if (router.pathname === "/ubication") {
    buttonClassName =
      "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else {
    buttonClassName = classAdd;
  }

  return (
    <div className="col-span-2 sm:col-span-3 lg:col-span-2 justify-self-center mr-2">
      <Link href="/ubication/new">
        <button type="button" className={buttonClassName}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p className="ml-2 hidden sm:block">
            {router.pathname !== "/ubication" ? "Añadir Ubicación" : ""}
          </p>
        </button>
      </Link>
    </div>
  );
};

export default AddUbication;
