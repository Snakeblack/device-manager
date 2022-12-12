import Link from "next/link";
import { classAdd } from "./Add";

const AddDeviceType = () => {
  return (
    <div className="col-span-2 justify-self-center">
      <Link href="/devicetype/new">
        <button type="button" className={classAdd}>
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
          <p className="ml-2">Añadir Tipo de Dispositivo</p>
        </button>
      </Link>
    </div>
  );
};

export default AddDeviceType;
