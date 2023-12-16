import { useNavigate } from "react-router-dom";
import bg from "../assets/intro/splash.png";

const IntroPage = () => {
  const nav = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <img
        src={bg}
        className="absolute z-[-2] top-0 left-0 w-[100%] h-screen object-cover"
      />
      <div className="flex-grow"></div>
      <button
        className="tap-transparent w-full bg-pointRed active:scale-95 font-bold rounded-[19px] text-md text-white px-5 py-4 text-center transform transition-transform duration-150 h-[64px] mb-[48px]"
        onClick={() => nav("/login")}
      >
        시작하기
      </button>
    </div>
  );
};

export default IntroPage;
