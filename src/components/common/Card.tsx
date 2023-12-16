import { formatDate } from "../../utils/formatDate";
import KeyWord from "./KeyWord";
import { useNavigate } from "react-router-dom";
import { randomCardPicker } from "../../utils/randomCardPicker";

export default function Card({
  memberNickname,
  profile,
  title,
  content,
  keywords,
  reviewId,
  updateTime,
  isMine,
}: CardType) {
  const nav = useNavigate();
  const date = updateTime && formatDate({ updateTime, isTime: true });

  const NavigateAndSaveData = () => {
    const info = {
      memberNickname,
      profile,
      title,
      content,
      reviewId,
      updateTime,
    };
    localStorage.setItem("info", JSON.stringify(info));
    nav(`/post/${reviewId}`);
  };

  const NaivagteMyPost = () => {
    nav("/mypost");
  };

  return (
    <div
      className="max-w-[357px] rounded-[24px] cursor-pointer max-h-[354px] w-[90%]"
      onClick={isMine ? NaivagteMyPost : NavigateAndSaveData}
    >
      <div className="relative">
        <img
          src={randomCardPicker({ isLong: false })}
          className="rounded-tl-[24px] rounded-tr-[24px]"
        />
        <div className="bg-white pb-5 pl-7 pr-7 pt-4 rounded-bl-[24px] rounded-br-[24px] mt-[-1px]">
          <p className="text-sm text-gray mb-1">{`${memberNickname} | ${date}`}</p>
          <h1 className="font-bold text-smTitle ">{title}</h1>
          <p className="text-p font-regular text-gray">
            {content.slice(0, 25)}...
          </p>
          <div className="flex flex-wrap gap-2  mt-1 ">
            {keywords && keywords.map((k) => <KeyWord text={k} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
