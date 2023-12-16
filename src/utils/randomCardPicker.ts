import card1 from "../assets/common/card1.png";
import card2 from "../assets/common/card2.png";
import card3 from "../assets/common/card3.png";
import profile1 from "../assets/history/profile1.png";
import profile2 from "../assets/history/profile2.png";
import profile3 from "../assets/history/profile3.png";
import p1 from "../assets/post/Group 10.png";
import p2 from "../assets/post/Group 16.png";
import p3 from "../assets/post/Group 17.png";
import p4 from "../assets/post/Group 28.png";
import p5 from "../assets/post/Group 29.png";
import p6 from "../assets/post/Group 26.png";
import p7 from "../assets/post/Group 27.png";

export const randomCardPicker = ({ isLong }: RandomCardType) => {
  const cardList = [card1, card2, card3];
  const profileList = [profile1, profile2, profile3];

  const randomNum = Math.floor(Math.random() * 3);

  return isLong ? profileList[randomNum] : cardList[randomNum];
};

export const randomProfilePicker = () => {
  const profileList = [p1, p2, p3, p4, p5, p6, p7];

  const randomNum = Math.floor(Math.random() * profileList.length);

  return profileList[randomNum];
};
