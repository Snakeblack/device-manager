import Link from "next/link";
import Card from "./Card";

export function Devices({ device }) {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-6">
      {device.map((device) => (
        <Link href={`/device/${device.id}`} key={device.id}>
          <Card>
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-gray-50"
              key={device.id}
              id={device.id}
            >
              {device.nombre}
            </h1>
            <div className="flex items-center justify-between mt-4">
              <div className="">
                <p>{device.tipo_dispositivo}</p>
                <p>{device.marca}</p>
                <p>{device.modelo}</p>
                <p>{device.cpu}</p>
                <p>
                  {device.ram} {device.ram ? "GB de RAM" : ""}
                </p>
                <p>
                  {device.disco_duro}{" "}
                  {device.disco_duro ? "GB de Almacenamiento" : ""}
                </p>
              </div>
              <div className="self-start">
                <div
                  className="flex flex-col items-center justify-between"
                  id={device.id}
                >
                  <div className="flex items-center">
                    {device.congelado == 1 ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : device.congelado == 0 ? (
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
                          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-right">
                    {device.congelado == 1
                      ? "Congelado"
                      : device.congelado == 0
                      ? "No congelado"
                      : ""}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-end">
                  {device.centro}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-end">
                  {device.ubicacion}
                </p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
