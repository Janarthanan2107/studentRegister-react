import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// toast and icons
import { BiPencil, BiSolidTrashAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);
  const [errorMessageD, setErrorMessageD] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      age &&
      date &&
      email &&
      password &&
      confirmPassword &&
      number 
    ) {
      comparing();
      setErrorMessageD(true);
    } else {
      alert("All details are compulsory. Please fill all details.");
    }
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setDate("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNumber("");
    setErrorMessageD(false);
  };

  const comparing = () => {
    if (password === confirmPassword) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  return (
    <div>
      <Toaster />
      <main className="flex justify-center items-center flex-col gap-5">
        <section className="h-auto mt-3 py-3 px-3 rounded-xl shadow-lg bg-slate-50">
          <div className="text-center">
            <h2 className="font-bold text-2xl p-3 text-red-600">
              STUDENT REGISTRATION FORM
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5 mb-2">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Gender:
                </label>
                <div className="flex justify-start items-start w-[300px] gap-5">
                  <div className="flex gap-2">
                    <input type="radio" name="" id="" />
                    <label>Male</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="" id="" />
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Age:
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Email Address:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Confirm Password:
                </label>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="p-2 shadow rounded-md font-semibold w-[300px]"
                  />
                  {errorMessageD && (
                    <div className="flex justify-content-end">
                      {errorMessage ? (
                        <p className="text-green-500">Password Matched</p>
                      ) : (
                        <p className="text-rose-500">
                          Password does not Matched
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Phone Number:
                </label>
                <div className="flex gap-2">
                  <select className="p-2 shadow rounded-md font-semibold">
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="p-2 shadow rounded-md font-semibold w-[225px]"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Address:
                </label>
                <textarea
                  type="text"
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  State:
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Pin Code:
                </label>
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex justify-between gap-5 mb-2">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Hobbies:
                </label>
                <div className="flex justify-start items-start w-[300px] gap-3">
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <label>Music</label>
                  </div>
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <label>Movie</label>
                  </div>
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <label>Sports</label>
                  </div>
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <label>Travel</label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <label htmlFor="firstName" className="font-semibold w-[10rem]">
                  Upload Photo:
                </label>
                <input
                  type="file"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="p-2 shadow rounded-md font-semibold w-[300px]"
                />
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </div>
                <div>
                  <p>
                    I hereby declare that the above information provided is true
                    and correct.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                className=" w-full mt-4 py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold"
              >
                Register
              </button>
              <button
                className=" w-full mt-4 py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
