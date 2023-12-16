import rabbit from "../assets/store/rabbit.png";
import pointBar from "../assets/store/pointBar.png";
import bg1 from "../assets/store/bg1.png";
import bg2 from "../assets/store/bg2.png";
import bg3 from "../assets/store/bg3.png";
import rabbit1 from "../assets/store/1.png";
import rabbit2 from "../assets/store/2.png";
import rabbit3 from "../assets/store/3.png";
import rabbit4 from "../assets/store/4.png";
import rabbit5 from "../assets/store/5.png";
import rabbit6 from "../assets/store/6.png";
import rabbit7 from "../assets/store/7.png";

import bg from "../assets/home/basic.png";
import PurchaseWindow from "../components/Store/PurchaseWindow";
import leftArrow from "../assets/store/leftarrow.png";
import rightArrow from "../assets/store/rightarrow.png";
import { useState } from "react";
import Modal from "../components/Store/Modal";

const StorePage = () => {
  const [select, setSelect] = useState(0);
  const [selectBg, setSelectBg] = useState(-1);
  const rabbitList = [
    rabbit,
    rabbit1,
    rabbit2,
    rabbit3,
    rabbit4,
    rabbit5,
    rabbit6,
    rabbit7,
  ];
  const bgList = [bg1, bg2, bg3];
  const [isPurchase, setIsPurchase] = useState(false);

  return (
    <div className="relative flex flex-col">
      <div className="">
        <div className="relative mt-[2rem] ml-4">
          <p className="absolute ml-[4rem] mt-4 font-bold text-md">50</p>
          <img src={pointBar} className="w-[7rem] " />
        </div>

        <img
          src={rabbitList[select + 1]}
          className="w-[45%] ml-auto mr-auto mt-[1rem] h-[20rem]"
        />

        {!isPurchase && (
          <div className="flex mr-5 ml-5 mt-7">
            <img src={leftArrow} className="w-9 mr-2" />
            <img src={rightArrow} className="w-9" />
            <button
              className="bg-black text-white font-bold w-[4.5rem] pt-2 pr-2 pb-1  pl-2 rounded-[30px] text-md ml-auto"
              onClick={() => {
                setIsPurchase(true);
                localStorage.setItem("isPurchase", "t");
              }}
            >
              구매
            </button>
          </div>
        )}
      </div>
      {!isPurchase ? (
        <PurchaseWindow
          setSelect={setSelect}
          select={select}
          setSelectBg={setSelectBg}
          selectBg={selectBg}
        />
      ) : (
        <Modal setIsPurchase={setIsPurchase} />
      )}
      <img
        src={bgList[selectBg] || bg}
        className="absolute top-[-15rem] z-[-10] w-[100%] h-screen"
      />
    </div>
  );
};

export default StorePage;
