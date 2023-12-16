import homeIcon from "../../assets/common/home.png";
import recommendIcon from "../../assets/common/recommend.png";
import historyIcon from "../../assets/common/history.png";
import storeIcon from "../../assets/common/store.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav = useNavigate();

  return (
    <div
      className="flex gap-[8%] items-center bg-white w-[100%] max-w-[400px] justify-center h-[6rem] rounded-tr-[14px] rounded-tl-[14px] fixed bottom-0 pb-3"
      style={{
        boxShadow: "1.884px -4.71px 14.13px 0px rgba(85, 94, 88, 0.09)",
      }}
    >
      <div
        className="flex flex-col items-center cursor-pointer w-[3rem]"
        onClick={() => nav("/home")}
      >
        <img src={homeIcon} className="w-[22px] h-[22px]" />
        <p className="text-sm">홈</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer w-[3rem]"
        onClick={() => nav("/store")}
      >
        <img src={storeIcon} className="w-[22px] h-[22px]" />
        <p className="text-sm">상점</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer w-[3rem]"
        onClick={() => nav("/recommends")}
      >
        <img src={recommendIcon} className="w-[22px] mb-[5px] mt-[5px]" />
        <p className="text-sm">추천 회고</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer w-[3rem]"
        onClick={() => nav("/history")}
      >
        <img src={historyIcon} className="w-[22px] h-[22px]" />
        <p className="text-sm">히스토리</p>
      </div>
    </div>
  );
};

export default NavBar;
