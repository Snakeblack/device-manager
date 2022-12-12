import Link from "next/link";
import Card from "./Card";

const Ubications = ({ ubication }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
      {ubication.map((ubicacion) => (
        <Link href={`/ubicacions/${ubicacion.id}`} key={ubicacion.id}>
          <Card>
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
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Ubications;
