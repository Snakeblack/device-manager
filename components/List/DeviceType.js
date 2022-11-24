import Link from "next/link";

function DeviceType({ devicetype }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
      {devicetype.map(({ id, nombre }) => (
        <Link
          href={`/devicetype/${id}`}
          key={id}
          className="block rounded-lg bg-gradient-to-tl hover:from-[#16222F] hover:to-[#384C57] transition duration-300 ease-in-out hover:ease-in from-[#16222A] to-[#223945] shadow-md shadow-slate-900/20"
        >
          <div className="bg-transparent p-6 my-4 rounded-lg transition duration-300 ease-in-out hover:ease-in">
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-gray-50"
              key={id}
              id={id}
            >
              {nombre}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DeviceType;
