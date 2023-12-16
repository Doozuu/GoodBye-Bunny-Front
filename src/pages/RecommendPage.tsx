import NavBar from "../components/common/NavBar";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import { recommendData } from "../utils/data/mockData";
import { useEffect, useState } from "react";
import { getRecommends } from "../api/review";

const RecommendPage = () => {
  const [data, setData] = useState<CardType[]>();

  // mockData 대체하기

  const getRecommendData = async () => {
    try {
      const res = await getRecommends();
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
      alert("예기치 못한 에러가 발생했습니다.");
    }
  };

  // useEffect(() => {
  //   getRecommendData();
  // }, []);

  return (
    <>
      <Header text="추천 회고" />
      <div className="flex flex-col items-center justify-center bg-black gap-5 pb-[7rem]">
        {recommendData &&
          recommendData.map((d, i) => (
            <Card
              key={i}
              memberNickname={d.memberNickname}
              profile={d.profile}
              title={d.title}
              content={d.content}
              keywords={d.keywords}
              reviewId={d.reviewId}
              updateTime={d.updateTime}
            />
          ))}
        <NavBar />
      </div>
    </>
  );
};

export default RecommendPage;
