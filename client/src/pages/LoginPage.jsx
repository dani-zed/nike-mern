import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Assuming you have a context for authentication
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/favicon.ico'; // Adjust the path to your logo file

const Login = () => {
  const { user, loginUserAsync } = useAuth(); // Assuming loginUserAsync is your action for logging in a user
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');

  // Redirect user if logged in
  if (user) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (data) => {
    try {
      await loginUserAsync(data);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-16" src={logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-xl leading-1 tracking-tighter font-bolder text-gray-900 uppercase font-Oswald">
            Your Account for <br /> everything Nike
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email Input */}
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi,
                      message: "Email is not valid",
                    },
                  })}
                  autoComplete="email"
                  placeholder="Email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: "Password required",
                  })}
                  autoComplete="current-password"
                  placeholder="Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Login error message */}
              {loginError && <p className="text-red-500">{loginError}</p>}

              {/* Forgot Password link */}
              <div className="w-full text-right">
                <div className="text-sm">
                  <Link
                    to="/forgotPassword"
                    className="font-semibold opacity-50"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            {/* Privacy and Terms text */}
            <p className="text-xs tracking-wider text-center opacity-75">
              By logging in, you agree to Nikes{" "}
              <span className="underline">Privacy Policy</span> and
              <span className="underline"> Terms of Use</span>.
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex uppercase font-Oswald tracking-tighter w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign-up Link */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/signup"
              className="font-semibold leading-6 text-blackunderline underline"
            >
              Join us
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
