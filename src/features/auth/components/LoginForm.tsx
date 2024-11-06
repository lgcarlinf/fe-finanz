import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import logo from "../../../assets/logotipo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from "../schema/user.schema";
import { LoginForm as ILoginForm } from "../interfaces/forms";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: zodResolver(LoginSchema)
    })
    const { login } = useAuth()

    const onSubmit = (data: ILoginForm) => {
        login(data)
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
                    <p className="text-body text-text-secondary">Accede a tu Cuenta</p>
                </div>
                <label htmlFor="email"></label>
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
                        icon={faEnvelope}
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
                <div>
                    <a className="text-body text-text-link" href="#">
                        ¿Has olvidado tu contraseña?
                    </a>
                </div>

                <div className="w-full flex gap-4 justify-between">
                    <button
                        type="submit"
                        className="w-button-large bg-primary text-white py-buttonPadding rounded-3xl hover:bg-primary-dark transition duration-300"
                    >
                        Ingresar
                    </button>
                    <Link
                        to="/register"
                        className="w-button-small flex justify-center items-center text-center border border-primary text-primary mx-2 py-buttonPadding rounded-3xl hover:bg-primary-dark hover:text-white hover:border-primary-dark transition duration-300"
                    >
                        Regístrate
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm