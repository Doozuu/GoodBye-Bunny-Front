import bg from "../assets/home/basic.png";
import NavBar from "../components/common/NavBar";
import rabbit from "../assets/store/rabbit.png";
import { useNavigate } from "react-router-dom";
import useUser from "../utils/hooks/user";
import IntroPage from "./IntroPage";
import { useState, useEffect } from "react";
import clothes4 from "../assets/store/4.png";
import bg1 from "../assets/store/bg1.png";

const HomePage = () => {
  const nav = useNavigate();
  const { isLoggedIn, user } = useUser();
  const [purchase, setPurchase] = useState<string | null>(null);

  // if (!isLoggedIn) {
  //   nav("/login");
  // }

  useEffect(() => {
    setPurchase(localStorage.getItem("isPurchase"));
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center mt-[-2rem] relative">
        <div className="bg-white font-bold text-mainBlue text-lgTitle rounded-[30px] pr-[2rem] pl-[2rem] pt-1 pb-1 mb-8">
          블랙래빗님
        </div>
        <div className="text-white font-bold text-smTitle bg-subBlue rounded-[100%] w-[6rem] h-[6rem] flex flex-col items-center justify-center border-white mb-4 border-2 border-solid ">
          <p>코멘트</p>
          <p>10</p>
        </div>
        <img src={purchase ? clothes4 : rabbit} className="w-[45%]" />
        <img
          src={purchase ? bg1 : bg}
          className="absolute z-[-2] top-0 w-[100%] h-screen"
        />
        <button
          className="font-bold absolute bottom-[6rem] right-7 z-10 text-smTitle rounded-[30px] border-2 border-solid border-black p-2 pr-4 pl-4"
          onClick={() => nav("/write")}
        >
          회고 작성
        </button>
      </div>

      <NavBar />
    </>
  );
};

export default HomePage;
