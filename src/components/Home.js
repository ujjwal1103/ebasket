import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import landingImage from "../assets/vegitabless.png";
import delivery from "../assets/deliveryvan.png";
import logo from "../assets/elogo.png";
import Category from "./Category";
import bottomimage from "../assets/bottomimage.png";
import "./sidebar.css";
const Home = () => {
  return (
    <div className="flex-1 flex flex-col  relative p-10 home">
      <div className=" bg-slate-600  w-full   rounded-3xl pt-20 ">
        <div className=" bg-slakte-500">
          <div className="rounded-full ml-16 flex items-center  w-96 bg-[#f3f3f35c] backdrop-opacity-20">
            <img src={delivery} alt="" className="pl-4 w-12" />
            <p className="tracking-widest p-2 pl-5 text-lg text-white">
              {" "}
              free delivery
            </p>
          </div>
          <h2 className="tracking-wider pl-16 py-6 d text-7xl drop-shadow-xl text-white font-homefont  whitespace-normal">
            Make healthy life With <span className="text-green-500">fresh</span>{" "}
          </h2>
          <h2 className="tracking-wider pl-16 py-6  text-7xl drop-shadow-xl text-white font-homefont ">
            grocery
          </h2>

          <p className="pl-16 py-6  text-xl  text-white font-base">
            get the best quality and most delicious grocery and food{" "}
          </p>
        </div>

        <div className="bg-sklate-400 relative ">
          <img
            src={landingImage}
            alt=""
            className="w-[100%] rounded-3xl blur-sm"
          />
          <img
            src={logo}
            alt=""
            className="w-96 ml-16 p-4 rounded-lg bg-slate-100 absolute top-10 "
          />
          <Link
            to="/product"
            className="absolute bg-blue-600 text-white text-3xl rounded-xl py-5 px-7 bottom-1/4 left-16 hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div>
        <Category />
      </div>

      <div className="flex relative shadow-md bg-slate-100 gap-16 items-center justify-evenly mt-24  mx-24 rounded-3xl p-10 overflow-hidden">
        <div className="z-10 bg-sate-500 h-auto relative -bottom-20">
          <img src={bottomimage} alt="" className="w-80" />
        </div>
        <div className="absolute left-1/2 top-[80%] -translate-x-[420px] -translate-y-1/2 bg-slate-300 w-96 h-80 rounded-full overflow-hidden">

        </div>
        <div className="">
          <h2 className="text-4xl  py-2 pb-4 font-homefont">
            Best quality grocery <span className="block pt-2">
              </span> just for you
          </h2>
          <span className="py-4">
            <span className="block">
              We prioritize quality in each of our grocery,
            </span>
  
            <span>Below are the advantage of our products.</span>
          </span>

          <ul className="mt-4">
            <li className="text-slate-900 flex gap-3 items-center">
              <BsFillCheckCircleFill /> Best Service
            </li>
            <li className="text-slate-900 flex gap-3 items-center">
              <BsFillCheckCircleFill />
              User friendly app
            </li>
            <li className="text-slate-900 flex gap-3 items-center">
              <BsFillCheckCircleFill />
              Free and Fast delivery
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
