import card1 from "../assets/common/card1.png";
import card2 from "../assets/common/card2.png";
import card3 from "../assets/common/card3.png";
import profile1 from "../assets/history/profile1.png";
import profile2 from "../assets/history/profile2.png";
import profile3 from "../assets/history/profile3.png";

export const randomCardPicker = ({ isLong }: RandomCardType) => {
  const cardList = [card1, card2, card3];
  const profileList = [profile1, profile2, profile3];

  const randomNum = Math.floor(Math.random() * 3);

  return isLong ? profileList[randomNum] : cardList[randomNum];
};

export const randomProfilePicker = () => {
  const profileList = [
    "profile1",
    "profile2",
    "profile3",
    "profile4",
    "profile5",
    "profile6",
    "profile7",
  ];

  const randomNum = Math.floor(Math.random() * profileList.length);

  return profileList[randomNum];
};
