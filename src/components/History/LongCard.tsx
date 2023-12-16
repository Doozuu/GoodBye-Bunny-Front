import { randomCardPicker } from "../../utils/randomCardPicker";

const LongCard = ({ memberNickname, title, content }: CardType) => {
  return (
    <div className="bg-white flex w-[90%] rounded-[14px] p-[10px] mb-4">
      <img
        src={randomCardPicker({ isLong: true })}
        className="w-[60px] mr-[14px]"
      />
      <div>
        <p className="text-sm text-deepGray">{memberNickname}</p>
        <h2 className="font-bold text-md">{title}</h2>
        <p className="text-xs font-regular">{content.slice(0, 33)}...</p>
      </div>
    </div>
  );
};

export default LongCard;
