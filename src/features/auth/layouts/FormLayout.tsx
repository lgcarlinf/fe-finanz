import { ReactNode } from "react";
import lines from "../../../assets/lines.svg";

interface FormLayoutProps {
    form: ReactNode;
}

export const FormLayout = ({ form }: FormLayoutProps) => {
    return (
        <div className="flex h-screen w-full">
            <div className="w-1/2 flex-shrink  bg-gradient-to-b from-teal-600 to-cyan-950 static">
                <div className="absolute bottom-0 left-0">
                    <img
                        src={lines}
                        alt="Registro"
                        className="w-1/2 h-full object-cover "
                    />
                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center">{form}</div>
        </div>
    );
};