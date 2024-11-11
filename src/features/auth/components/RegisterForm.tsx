import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import logo from "../../../assets/logotipo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterForm as IRegisterForm } from "../interfaces/forms";
import { RegisterSchema } from "../schema/user.schema";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({
        resolver: zodResolver(RegisterSchema)
    })
    const { register: registerUser } = useAuth()

    const onSubmit = (data: IRegisterForm) => {
        registerUser(data)
    }

    return (
        <div className=" w-full flex flex-col justify-center items-center p-8 max-w-lg">
            <div className="mb-4 flex justify-center">
                <img src={logo} alt="logo" className="w-2/3 mb-4 h-full object-cover" />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="w-full  bg-white space-y-4"
            >
                <div>
                    <h3 className="text-heading font-bold text-text-primary">
                        Bienvenido
                    </h3>
                    <p className="text-body text-text-secondary">Crea tu Cuenta</p>
                </div>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faUser}
                        className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200`}
                    />
                    <input
                        type="text"
                        placeholder="Nombre"
                        className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
                        focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="text-red-400 text-sm">{errors.name.message}</span>
                    )}
                </div>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200`}
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
                        focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm">{errors.email.message}</span>
                    )}
                </div>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faLock}
                        className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200`}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
                        focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
                        {...register("password")}
                    />
                    {errors.password && (
                        <span className="text-red-400 text-sm">{errors.password.message}</span>
                    )}
                </div>
                <div className="w-full flex gap-4 justify-between">
                    <button
                        type="submit"
                        className="w-button-large bg-primary text-white py-buttonPadding rounded-3xl hover:bg-primary-dark transition duration-300"
                    >
                        Registrarse
                    </button>
                    <Link
                        to="/login"
                        className="w-button-small flex justify-center items-center text-center border border-primary text-primary mx-2 py-buttonPadding rounded-3xl hover:bg-primary-dark hover:text-white hover:border-primary-dark transition duration-300"
                    >
                        Iniciar Sesión
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <p className="text-body text-text-secondary">
                        ¿Ya tienes cuenta? <Link to="/login" className="text-primary hover:underline">Inicia Sesión</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm