// import React from "react";
// import { Link, navigate, useNavigate } from "react-router-dom";
// import logo from "../assets/logo-no-background.png";
// const Header = ({ user, handleLogout }) => {
//   const userId = user?.uid;
//   const displayName = user?.displayName;
//   const firstName = displayName ? displayName.split(" ")[0] : "";

//   console.log("userId", userId);
//   console.log("name", user?.displayName);
//   return (
//     <>
//       <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <img src={logo} alt="img" className="w-40 h-10" />
//           </a>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//             <Link to="/" className="mr-5 hover:text-gray-900">
//               Home
//             </Link>
//             <Link to="/about" className="mr-5 hover:text-gray-900">
//               About
//             </Link>
//             <Link to="/create" className="mr-5 hover:text-gray-900">
//               Create
//             </Link>
//             <Link to="/contact" className="mr-5 hover:text-gray-900">
//               contact
//             </Link>
//           </nav>
//           {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </button> */}
//           {userId ? (
//             <>
//               Welcome, {firstName}
//               <button className="ml-2" onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//             <Link to="/auth">Login</Link>
//             </>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo-no-background.png";
import { toast } from "react-toastify";

const Header = ({ user, handleLogout }) => {
  const userId = user?.uid;
  const displayName = user?.displayName;
  const firstName = displayName ? displayName.split(" ")[0] : "";
  const navigate = useNavigate();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="img" className="w-40 h-10" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link
        to={user ? "/create" : "/auth"}
        className="mr-5 hover:text-gray-900"
        onClick={(event) => {
          if (!user) {
            event.preventDefault();
            toast.error("Please log in to access this page.", {
              position: "top-center",
              onClose: () => {
                navigate("/auth");
              },
            });
          }
        }}
      >
        Create
      </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
        {userId ? (
          <div className=" flex items-center">
            <p className="text-gray-900 mr-2">Welcome, {firstName}</p>
            <button
              className="mr-5 hover:text-gray-900"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth" className="mr-5 hover:text-gray-900">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
