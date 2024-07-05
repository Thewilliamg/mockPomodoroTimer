interface DropdownProps { //for the dropdown list
    list: React.ReactNode[];
    label: string;
}
import React from "react";

export default function Navbar() {
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-white text-xl">Opciones</h3>
            <ul className="bg-white">
                <li><Dropdown
                    label="Pregrado presencial"
                    list={[
                        <li className="hover:bg-blue-300">Ha</li>,
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Encuesta PRASI</li>,
                        <li className="hover:bg-blue-300">Grados</li>,
                        <li className="hover:bg-blue-300">Pagos electronicos</li>,
                        <li className="hover:bg-blue-300">Realizar solicitud de grado</li>,
                        <li className="hover:bg-blue-300">Encuesta graduando</li>
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Barranca"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Sede Barranca</li>,
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Socorro"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Sede Socorro</li>,
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Malaga"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Sede Socorro</li>,
                        <li className="hover:bg-blue-300">Realizar solicitud de grado</li>,
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Barbosa"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Sede Socorro</li>,
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Pregrado Distancia"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Liquidaciones Distancia</li>,
                        <li className="hover:bg-blue-300">Pagos electronicos</li>,
                        <li className="hover:bg-blue-300">Grados</li>,
                        <li className="hover:bg-blue-300">Realizar solicitud de grado</li>,
                    ]}
                />
                </li>
                <li><Dropdown
                    label="Posgrado"
                    list={[
                        <li className="hover:bg-blue-300">Calendarios Academicos</li>,
                        <li className="hover:bg-blue-300">Informacion general</li>,
                        <li className="hover:bg-blue-300">Grados</li>,
                        <li className="hover:bg-blue-300">Pagos electronicos</li>,
                        <li className="hover:bg-blue-300">Realizar solicitud de grado</li>,
                    ]}
                />
                </li>
            </ul>
        </div>

    )
}

const Dropdown = ({ label, ...props }: DropdownProps) => {
    return (
        <div className="flex group relative bg-gray-200 hover:bg-red-900 cursor-pointer flex-row" >
            <span className="w-48">{label}</span>
            <ul className="absolute hidden group-hover:block left-48 top-0 shadow-md bg-gray-300 w-56">
                {props.list}
            </ul>
        </div>
    );
};
