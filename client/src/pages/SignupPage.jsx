
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useForm } from "react-hook-form";
// import logo from "../assets/favicon.ico";
// import { Link, Navigate } from "react-router-dom";
// import { createUserAsync, selectLogginUser } from "../features/auth/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const dispatch = useDispatch();
//   const user = useSelector(selectLogginUser);
//   return (
//     <>
//       {user && <Navigate to="/"></Navigate>}
//       <Navbar></Navbar>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img className="mx-auto   w-16" src={logo} alt="Your Company" />
//           <h2 className="mt-2 text-center text-2xl leading-9 tracking-tighter  text-gray-900 uppercase font-Oswald">
//             Become a nike member
//           </h2>
//           <p className="text-sm tracking-wider text-center opacity-75 my-4 leading-4">
//             Create your Nike Member profile and get first access to the very
//             best of Nike products, inspiration and community.
//           </p>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             className="space-y-6"
//             noValidate
//             onSubmit={handleSubmit((data) => {
//               dispatch(createUserAsync(data));
//             })}
//           >
//             <div>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   {...register("email", {
//                     required: "Email required",
//                     pattern: {
//                       value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
//                       message: "Email is not valid",
//                     },
//                   })}
//                   autoComplete="email"
//                   placeholder="Email address"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500">{errors.email.message}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between"></div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   {...register("password", {
//                     required: "Password required",
//                     pattern: {
//                       value:
//                         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
//                       message: `- at least 8 characters
//                       - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
//                       - Can contain special characters`,
//                     },
//                   })}
//                   placeholder="Password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.password && (
//                   <p className="text-red-500">{errors.password.message}</p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-between"></div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   {...register("confirmPassword", {
//                     required: "Confirm password is required",
//                     validate: (value, formsValues) =>
//                       value === formsValues.password || "password not matching",
//                   })}
//                   autoComplete="current-password"
//                   placeholder="Confirm Password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500">
//                     {errors.confirmPassword.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div className="mt-2">
//                 <input
//                   name="First name"
//                   type="text"
//                   autoComplete="email"
//                   {...register("firstName", {
//                     required: "First name is required",
//                   })}
//                   placeholder="First Name"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-500">{errors.firstName.message}</p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="text"
//                   {...register("lastName", {
//                     required: "Last name is required",
//                   })}
//                   autoComplete="email"
//                   placeholder="Last Name"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-500">{errors.lastName.message}</p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div className="mt-2">
//                 <input
//                   type="date"
//                   autoComplete="email"
//                   placeholder="Date Of Birth"
//                   {...register("dateOfBirth", {
//                     required: "Date of birth is required",
//                   })}
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
//                 />
//                 {errors.dateOfBirth && (
//                   <p className="text-red-500">{errors.dateOfBirth.message}</p>
//                 )}
//               </div>
//             </div>
//             <p className="text-xs tracking-wider text-center opacity-75">
//               By creating an account, you agree to Nike's{" "}
//               <span className="underline">Privacy Policy</span> and
//               <span className="underline">Terms of Use</span>.
//             </p>
//             <div>
//               <button
//                 type="submit"
//                 className="flex uppercase font-Oswald tracking-tighter w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Join us
//               </button>
//             </div>
//           </form>

//           <p className="mt-4 text-center text-sm text-gray-500">
//             Already a member?
//             <Link
//               to="/login"
//               href="#"
//               className="font-semibold leading-6 text-blackunderline underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Signup;

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/favicon.ico"; // Adjust the path to your logo file

const Signup = () => {
  const { user, createUserAsync } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  if (user) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    createUserAsync(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-16" src={logo} alt="Your Company" />
          <h2 className="mt-2 text-center text-2xl leading-9 tracking-tighter text-gray-900 uppercase font-Oswald">
            Become a Nike Member
          </h2>
          <p className="text-sm tracking-wider text-center opacity-75 my-4 leading-4">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email Input */}
            <div>
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
                placeholder="Email address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  required: "Password required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: `Password must include at least:
                      - 8 characters
                      - 1 uppercase letter
                      - 1 lowercase letter
                      - 1 number`,
                  },
                })}
                placeholder="Password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* First Name Input */}
            <div>
              <input
                name="firstName"
                type="text"
                {...register("firstName", {
                  required: "First name required",
                })}
                placeholder="First Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name Input */}
            <div>
              <input
                name="lastName"
                type="text"
                {...register("lastName", {
                  required: "Last name required",
                })}
                placeholder="Last Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>

            {/* Date of Birth Input */}
            <div>
              <input
                type="date"
                {...register("dateOfBirth", {
                  required: "Date of birth required",
                })}
                placeholder="Date Of Birth"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500">{errors.dateOfBirth.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex uppercase font-Oswald tracking-tighter w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join us
            </button>
          </form>

          {/* Already a Member */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link to="/login" className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
