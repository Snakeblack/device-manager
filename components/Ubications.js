import Link from "next/link";

const Ubications = ({ ubication }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
      {ubication.map((ubicacion) => (
        <Link
          href={`/ubicacions/${ubicacion.id}`}
          key={ubicacion.id}
          className="block rounded-lg bg-gradient-to-tl hover:from-[#16222F] hover:to-[#384C57] transition duration-300 ease-in-out hover:ease-in from-[#16222A] to-[#223945] shadow-md shadow-slate-900/20"
        >
          <div className="bg-transparent p-6 my-4 rounded-lg transition duration-300 ease-in-out hover:ease-in">
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-gray-50"
              key={ubicacion.id}
              id={ubicacion.id}
            >
              {ubicacion.nombre}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-end">
              {ubicacion.is_aula ? "Es aula" : "No es aula"}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-end">
              Red {ubicacion.red}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-end">
              {ubicacion.centro}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ubications;
