import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center p-4">
                <form className="bg-white p-6 sm:p-8 md:p-10 rounded-md shadow-md w-full sm:w-[80%] md:w-[30%] lg:w-[30%]">
                <div className="w-full justify-center flex mb-4">
                        <Link to={"/"} className="text-red-600 text-5xl font-bold cursor-pointer">
                            NB<span className="text-blue-800">tech</span>
                        </Link>
                    </div>
                    <h1 className="text-2xl sm:text-2xl font-bold mb-4 text-blue-800 text-center">S'inscrire</h1>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nom d'utilisateur"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Adresse e-mail
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Adresse e-mail"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="*********"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer mt-7"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            S'inscrire
                        </button>

                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 w-full text-center mt-4"
                            to="/login"
                        >
                            Déjà inscrit ? Connectez-vous
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}