import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// toast and icons
import { BiPencil, BiSolidTrashAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <main className="flex justify-center items-center flex-col gap-5 mt-5">
        <section className="h-auto py-3 px-3 rounded-xl shadow-lg bg-slate-50">
          <div className="text-center">
            <h2 className="font-bold text-2xl p-3 text-red-600">
              STUDENT REGISTRATION FORM
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className=" p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Last Name:
              </label>
              <input
                type="text"
                id="firstName"
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
                type="date"
                name=""
                id=""
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Date of Birth:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Email Address:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Password:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Confirm Password:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Phone Number:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Address:
              </label>
              <textarea
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                State:
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex justify-between gap-5">
              <label htmlFor="firstName" className="font-semibold w-[10rem]">
                Pin Code:
              </label>
              <input
                type="text"
                id="firstName"
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
                id="firstName"
                className="p-2 shadow rounded-md font-semibold w-[300px]"
              />
            </div>
            <div className="flex items-start gap-2">
              <div>
                <input type="checkbox" name="" id="" />
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
            <button className=" w-full mt-4 py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold">
              Register
            </button>
            <button className=" w-full mt-4 py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold">
              Reset
            </button>
          </div>
        </section>
        {/* {items.length > 0 ? (
          items.map((item) => {
            return (
              <section className="w-1/2 lg:w-1/3 h-auto py-3 rounded-xl shadow-md bg-slate-50">
                <div className="flex justify-between items-center px-5">
                  <div className="flex gap-1 items-start flex-col">
                    <span className="font-semibold mx-3">{item.firstName}</span>
                    <span className="font-normal text-sm mx-3 text-gray-500">
                      {item.lastName}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold"
                      onClick={() => updateItem(item.id)}
                    >
                      <BiPencil />
                    </button>
                    <button
                      className="py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold"
                      onClick={() => deleteItem(item.id)}
                    >
                      <BiSolidTrashAlt />
                    </button>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <section className="w-1/2 lg:w-1/3 h-auto py-3 rounded-lg shadow-md bg-slate-50">
            <div className="flex justify-center items-center px-5 font-semibold">
              No Records Found!
            </div>
          </section>
        )} */}
      </main>
    </div>
  );
};

export default App;
