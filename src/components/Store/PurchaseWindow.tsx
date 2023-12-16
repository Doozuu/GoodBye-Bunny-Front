import clothes1 from "../../assets/store/clothes1.png";
import clothes2 from "../../assets/store/clothes2.png";
import clothes3 from "../../assets/store/clothes3.png";
import clothes4 from "../../assets/store/clothes4.png";
import clothes5 from "../../assets/store/clothes5.png";
import clothes6 from "../../assets/store/clothes6.png";
import clothes7 from "../../assets/store/clothes7.png";
import closeIcon from "../../assets/store/x.png";
import StoreButton from "./StoreButton";
import bg1select from "../../assets/store/back1.png";
import bg2select from "../../assets/store/back2.png";
import bg3select from "../../assets/store/back3.png";
import bg1 from "../../assets/store/back4.png";
import bg2 from "../../assets/store/back5.png";
import bg3 from "../../assets/store/back6.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PurchaseWindow = ({
  setSelect,
  select,
  setSelectBg,
  selectBg,
}: WindowType) => {
  const clothesList = [
    clothes1,
    clothes2,
    clothes3,
    clothes4,
    clothes5,
    clothes6,
    clothes7,
  ];
  const bgList = [bg1, bg2, bg3];
  const [category, setCategory] = useState(0);
  const selectBgList = [bg1select, bg2select, bg3select];
  const nav = useNavigate();

  return (
    <div
      className=" bg-white mt-[1rem] rounded-tr-[14px] rounded-tl-[14px] pb-[20%] pr-3 pl-3"
      style={{
        boxShadow: "0px -11.304px 34.855px 0px rgba(23, 30, 41, 0.5)",
      }}
    >
      <div className="flex mt-4 mb-4">
        <StoreButton
          text="크리스마스 옷"
          isActive={!category}
          func={() => {
            setCategory(0);
          }}
        />
        <StoreButton
          text="배경"
          isActive={!!category}
          func={() => {
            setCategory(1);
          }}
        />
        <img
          src={closeIcon}
          className="w-8 ml-auto "
          onClick={() => nav("/home")}
        />
      </div>
      <div className="grid grid-cols-3  gap-4 ">
        {category ? (
          <>
            {bgList.map((item, idx) => (
              <img
                src={selectBg === idx ? selectBgList[idx] : item}
                className={`w-[7rem] ml-auto mr-auto cursor-pointer
             pb-2`}
                onClick={() => setSelectBg(idx)}
              />
            ))}
          </>
        ) : (
          <>
            {clothesList.map((item, idx) => (
              <img
                src={item}
                className={`w-[7rem] ml-auto mr-auto cursor-pointer
            ${
              select === idx && "border-pointGreen border-[3px] rounded-[20px]"
            }  pb-2`}
                onClick={() => setSelect(idx)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PurchaseWindow;
