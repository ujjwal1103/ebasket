import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import {
  MdEmail,
  MdSmartphone,
  MdLocationOn,
  MdDeleteForever,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
const Profile = () => {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState();
  const [profile, SetProfile] = useState(JSON.parse(localStorage.getItem("profile")));

  const [name, setName] = useState("Ujjwal Arvind Lade");
  const [mobile, setMobile] = useState("8805036783");
  const [address, setAddress] = useState("Nashik");
  const [curr, setCurr] = useState();

  const currentUser = AuthService.getCurrentUser();
  useEffect(() => {
    const getCurrent = () => {
      return JSON.parse(localStorage.getItem("currUser"));
    };
    setCurr(getCurrent());
    console.log(curr);
  }, []);

  useEffect(() => {
    const getCurrentImg = () => {
      return JSON.parse(localStorage.getItem("profile"));
    };
    setImg(getCurrentImg());
  }, []);

  const save = async (e) => {
    e.preventDefault();
    if (currentUser) {
      let user = {
        name: name,
        email: currentUser.email,
        mobileNo: mobile,
        address: address,
      };
      console.log(user);
      localStorage.setItem("currUser", JSON.stringify(user));
    }
  };

  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (oFREvent) {
      localStorage.setItem("profile", JSON.stringify(oFREvent.target.result));
      SetProfile(oFREvent.target.result)
      setImg(oFREvent.target.result);
    };
  }
  return (
    <div className="relative">
      <div className=" flex items-center w-screen justify-center height  ">
        <div className="shadow-2xl  bg-zinc-100 w-[300px]  h-auto flex flex-col  ">
          <div className="h-full flex justify-center items-center p-4 relative  flex-col">
            <div className="bg-blue-500 w-full h-28 absolute top-0 "></div>
            <div className="rounded-full w-40 h-40 bg-zinc-400   flex items-center justify-center z-10">
             
              {!img && (
                <>
                  <label htmlFor="file" className="text-6xl">
                    <FaUserAlt />
                  </label>
                </>
              )}
              {img && (
                <img
                  src={img} alt="profile"
                  className="rounded-full w-40 h-40 object-cover"
                />
              )}
            </div>
            <h1 className="text-2xl font-sans pt-5 text-center flex  pl-6">
              {curr?.name}{" "}
              <span
                className="text-4xl px-3 cursor-pointer"
                onClick={() => setModal(!modal)}
              >
                <BiEdit />
              </span>
            </h1>
          </div>

          <div className="flex-1 p-4 r">
            <h1 className="flex text-xl items-center gap-4 font-sans py-2">
              <FaUserAlt /> {currentUser.username}
            </h1>
            <h1 className="flex text-xl items-center gap-4 font-sans py-2">
              <MdEmail /> {curr?.mobileNo}
            </h1>
            <h1 className=" flex text-xl items-center  gap-4 font-sans py-2">
              <MdSmartphone /> {currentUser.email}
            </h1>
            <h1 className="flex text-xl items-center  gap-4 font-sans py-2">
              <MdLocationOn /> {curr?.address}
            </h1>
          </div>
        </div>
      </div>
      {modal && (
        <div className=" flex items-center w-screen justify-center height bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="shadow-2xl  bg-zinc-100 w-[400px] relative h-auto flex flex-col ">
            <div className="h-full flex justify-center items-center p-4  flex-col">
              <div className="bg-blue-500 w-full h-28 absolute top-0 "></div>

              <div className="rounded-full  w-40 h-40 bg-zinc-400 relative  flex items-center justify-center z-10 ">
                {!profile && (
                  <>
                    <label htmlFor="file" className="text-6xl">
                      <FaUserAlt />
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      id="file"
                      onChange={(e) => PreviewImage(e)}
                    />
                  </>
                )}

                {profile && (
                  <>
                    <img
                      src={profile} alt="profile"
                      className="rounded-full w-40 h-40 object-cover"
                    />{" "}
                    <span
                      onClick={() => {localStorage.removeItem("profile")
                      SetProfile(null)
                    }}
                      className="absolute top-0 right-0 text-2xl hover:text-red-600 bg-white p-2 rounded-full"
                    >
                      <MdDeleteForever />
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex-1 p-4 r">
              <div className="flex text-xl items-center gap-4 font-sans py-2 border px-2 rounded my-2">
                <FaUserAlt />{" "}
                <input
                  type="text"
                  className="w-full py-2 px-3 outline-none bg-transparent "
                  placeholder="Ujjwal Arvind Lade"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className=" flex text-xl items-center gap-4 font-sans py-2 border px-2 rounded my-2">
                <MdSmartphone />
                <input
                  type="number"
                  className="w-full py-2 px-3 outline-none bg-transparent "
                  placeholder="8805036783"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              <div className="flex text-xl items-center gap-4 font-sans py-2 border px-2 rounded my-2">
                <MdLocationOn />
                <input
                  type="text"
                  className="w-full py-2 px-3 outline-none bg-transparent  "
                  placeholder="Nashik"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="flex  justify-between items-center text-white gap-4 font-sans ">
                {" "}
                <button
                  onClick={() => setModal(false)}
                  className=" flex-1 text-xl  gap-4 font-sans py-2 my-2 bg-red-600 text-center hover:bg-red-700"
                >
                  Close
                </button>
                <button
                  className=" text-xl flex-1 gap-4 font-sans py-2 my-2 bg-blue-600 text-center hover:bg-blue-700"
                  onClick={(e) => save(e)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
