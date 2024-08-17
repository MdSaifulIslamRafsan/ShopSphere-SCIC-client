import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import auth from "../Firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { handleRegister, handleGoogleLogin } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { username, photoUrl, email, password } = data;
    handleRegister(email, password)
      .then(() => {
        navigate(location?.state ? location?.state : '/' )
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoUrl,
        });
        Swal.fire({
          title: "Good job!",
          text: "You've successfully registered!",
          icon: "success",
        });
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Oops...",
          text: errorMessage,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full mx max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register page</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoUrl" className="block text-gray-600">
              Photo URL
            </label>
            <input
              {...register("photoUrl", { required: true })}
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 btn-primary btn">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={()=>handleGoogleLogin(navigate , location)}
            aria-label="Log in with Google"
            className="p-3 rounded-sm btn text-base w-full flex items-center btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Google
          </button>
        </div>
        <p className="text-center sm:px-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            rel="noopener noreferrer"
            to={"/login"}
            className="underline text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
