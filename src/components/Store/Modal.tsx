import coints from "../../assets/store/coins.png";
import Button from "./Button";

const Modal = ({ setIsPurchase }: ModalType) => {
  const close = () => {
    setIsPurchase(false);
  };

  const purchase = () => {
    setIsPurchase(false);
    alert("구매 완료 되었습니다!");
  };

  return (
    <div
      className=" bg-white mt-12 rounded-tr-[14px] rounded-tl-[14px] pb-[20%] pr-3 pl-3 h-[50vh] flex flex-col items-center"
      style={{
        boxShadow: "0px -11.304px 34.855px 0px rgba(23, 30, 41, 0.5)",
      }}
    >
      <h2 className="font-bold text-smTitle mt-12">배경을 구매하시겠습니까?</h2>
      <img src={coints} className="w-[7rem] mt-9" />
      <div className="flex gap-4 mt-11">
        <Button text="둘러보기" isActive={false} func={close} />
        <Button text="구매하기" isActive={true} func={purchase} />
      </div>
    </div>
  );
};

export default Modal;
