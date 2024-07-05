import { useState } from "react";
import firebase from "../../firebase";
import Logo from "../../assets/Images/Black.svg";
import { Link,useNavigate} from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrim, setConfrim] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handekSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password && !confrim) {
      setError("Iltimos barchasini to'ldiring!!");
      return;
    }else if (password !== confrim) {
      setError("confrimni xato kiritdingiz");
      return;
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      navigate('/login')
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="container mx-auto  mt-[100px]">
      <div className="flex items-center justify-center pb-4 flex-col "> 
       <img className="text-center" src={Logo} alt="logo" />
       </div>
        <div className=" flex justify-center">
          <form
            onSubmit={handekSubmit}
            className="w-full max-w-[500px] flex  justify-center flex-col gap-5 border p-8 rounded-md shadow-xl"
          >
        <h1 className="text-center text-[32px]">Register</h1>
            <label className="flex flex-col text-xl">
              Email:{" "}
              <input
                className=" pl-2 border rounded-md  w-full max-w-[400px] p-2 border-blue-500"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col  text-xl">
              Password:{" "}
              <input
                className=" border rounded-md w-full max-w-[400px] p-2 border-blue-500"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col  text-xl">
              Confrim:{" "}
              <input
                className=" pl-2 border rounded-md  w-full max-w-[400px] p-2 border-blue-500"
                type="password"
                placeholder="Confrim pasword"
                value={confrim}
                onChange={(e) => {
                  setConfrim(e.target.value);
                }}
              />
            </label>
            <p className="text-center text-[18px] text-red-500">{error}</p>
            <button 
              className="mx-auto bg-blue-700 pt-1 pb-1 w-[120px] text-center text-white rounded-xl"
              type="submit"
            >
              add
            </button>
            <Link className="text-center text-blue-700" to='/login'>Akkountingiz bormi? bosing</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
