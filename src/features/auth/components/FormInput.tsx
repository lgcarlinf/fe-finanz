import { ChangeEvent, FocusEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface FormInputProps {
    icon: IconDefinition;
    type: string;
    placeholder: string;
    name: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent) => void;
    touched?: boolean;
    error?: string | undefined;
}
export const FormInput = ({
    icon,
    type,
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    touched,
    error,
}: FormInputProps) => {

    return (
        <div className="relative">
            <FontAwesomeIcon
                icon={icon}
                className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200 
                ${touched && value ? "text-cyan-700" : "text-gray-300"}`}
            />
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
                focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
            />
            {touched && error && (
                <span className="text-red-400 text-sm">{error}</span>
            )}
        </div>
    );
};