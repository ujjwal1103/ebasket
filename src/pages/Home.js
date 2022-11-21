import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import landingImage from "../assets/vegitabless.png";
import delivery from "../assets/deliveryvan.png";
import Footer from '../components/Footer'
import logo from "../assets/elogo.png";
import Category from "../components/Category";
import bottomimage from "../assets/bottomimage.png";
const Home = () => {
  return (
    <div className="flex-1 flex flex-col   w-screen lg:w-auto relative lg:p-10 home">
      <div className=" bg-slate-600 dark:bg-slate-300     lg:rounded-3xl lg:pt-20 ">
        <div className="mt-10 lg:mt-0">
          <div className="lg:rounded-full rounded mx-auto lg:ml-16  flex items-center  lg:w-96 w-80   bg-[#f3f3f35c] dark:bg-[#2a2a2a5c] backdrop-opacity-20">
            <img src={delivery} alt="" className="pl-4 w-12" />
            <p className="tracking-widest p-2 pl-5 text-lg text-white dark:text-slate-700 ">
              {" "}
              free delivery
            </p>
          </div>
          <h2 className="tracking-wider pl-16 pt-6 lg:py-6 leading-normal  d text-7xl drop-shadow-xl text-white dark:text-slate-700 font-homefont  whitespace-normal">
            Make healthy life With <span className="text-green-500">fresh</span>{" "}
          </h2>
          <h2 className="tracking-wider pl-16 lg:py-6  text-7xl drop-shadow-xl text-white dark:text-slate-700 font-homefont ">
            grocery
          </h2>

          <p className="pl-16 py-6  text-xl tracking-wide mr-16 lg:mr-0 text-white dark:text-slate-700 font-base">
            get the best quality and most delicious grocery and food{" "}
          </p>
        </div>

        <div className="bg-sklate-400  relative ">
          <img
            src={landingImage}
            alt=""
            className="w-[100%] rounded-3xl blur-sm"
          />
          <img
            src={logo}
            alt=""
            className="hidden lg:block w-96 ml-16 p-4 rounded-lg bg-slate-100 absolute top-10 "
          />
          <Link
            to="/product"
            className="absolute bg-blue-600  text-white text-3xl rounded-xl py-5 px-7 bottom-1/4 w-[50%] text-center left-28  lg:w-auto lg:left-16 hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div>
        <Category />
      </div>

      <div className="flex z-50 shadow-md bg-slate-100 gap-16 items-center justify-evenly lg:mt-24  lg:mx-24 rounded-3xl p-10 overflow-hidden">
        <div className=" bg-sate-500  h-auto relative hidden lg:block -bottom-20">
          
          <img src={bottomimage} alt="" className="w-80 z-10 " />
        
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

      <Footer/>
    </div>
  );
};

export default Home;
