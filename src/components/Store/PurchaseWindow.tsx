import clothes1 from "../../assets/store/clothes1.png";
import clothes2 from "../../assets/store/clothes2.png";
import clothes3 from "../../assets/store/clothes3.png";
import clothes4 from "../../assets/store/clothes4.png";
import clothes5 from "../../assets/store/clothes5.png";
import clothes6 from "../../assets/store/clothes6.png";
import clothes7 from "../../assets/store/clothes7.png";
import closeIcon from "../../assets/store/x.png";
import StoreButton from "./StoreButton";
// import bg1select from "../../assets/store/배경 1.png";
// import bg2select from "../../assets/store/배경 2.png";
// import bg3select from "../../assets/store/배경 3.png";
import bg1 from "../../assets/store/back4.png";
import bg2 from "../../assets/store/back5.png";
import bg3 from "../../assets/store/back6.png";
import { useState } from "react";

const PurchaseWindow = () => {
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
  const [selected, setSelected] = useState(-1);
  const [category, setCategory] = useState(0);

  return (
    <div
      className=" bg-white mt-4 rounded-tr-[14px] rounded-tl-[14px] pb-[20%] pr-3 pl-3"
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
            setSelected(-1);
          }}
        />
        <StoreButton
          text="배경"
          isActive={!!category}
          func={() => {
            setCategory(1);
            setSelected(-1);
          }}
        />
        <img src={closeIcon} className="w-8 ml-auto " />
      </div>
      <div className="grid grid-cols-3  gap-4 ">
        {category ? (
          <>
            {bgList.map((item, idx) => (
              <img
                src={item}
                className={`w-[7rem] ml-auto mr-auto cursor-pointer
            ${
              selected === idx &&
              "border-pointGreen border-[3px] rounded-[20px]"
            }  pb-2`}
                onClick={() => setSelected(idx)}
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
              selected === idx &&
              "border-pointGreen border-[3px] rounded-[20px]"
            }  pb-2`}
                onClick={() => setSelected(idx)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PurchaseWindow;
