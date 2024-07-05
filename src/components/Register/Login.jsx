import React, { useState } from "react";
import firebase from "../../firebase";
import Logo from  "../../assets/Images/Black.svg"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();
  const handelLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("Malumotni kiriting");
    } else {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        navigate('/main')
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("user topilmadi");
        } else if (error.code === "auth/wrong-password") {
          setError("parol xato");
        } else {
          setError(error.message);
        }
      }
    }
  };

  const togglePasword = (evt) => {
    evt.stopPropagation()
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container mx-auto  mt-[140px] w-[100%]">
       <div className="flex items-center justify-center pb-4 flex-col"> 
       <img className="text-center" src={Logo} alt="logo" />
       </div>
        <div className=" flex justify-center">
          <form
            onSubmit={handelLogin}
            className="w-full max-w-[500px] flex  justify-center flex-col gap-5 border p-8 rounded-md shadow-xl"
          >
        <h1 className="text-center  mb-3 text-[32px]">Login</h1>
            <label className=" flex flex-col text-xl">
              Email:{" "}
              <input
                className=" pl-2 border rounded-md  w-full max-w-[380px] p-2 border-blue-500"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className=" flex flex-col text-xl">
              Password:{" "}
              <div className="relative w-full max-w-[380px]">
              <input
                type={showPassword ? "text" : "password"}
                className=" border rounded-md w-full max-w-[380px] p-2 border-blue-500"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div onClick={togglePasword} className={`div-left absolute top-[7px] right-[20px] bottom-0 w-[10px] h-[10px] cursor-pointer ${showPassword? "hide" : "imgcon"}`}>
              <i class="fa-regular fa-eye"></i>
              </div>
              </div>
            </label>
            <p className="text-center text-[18px] text-red-500">{error}</p>
            <button
              className="mx-auto bg-blue-700 pt-1 pb-1 w-[120px] text-center text-white rounded-xl"
              type="submit"
            >
              add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
