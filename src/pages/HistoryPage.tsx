import Header from "../components/common/Header";
import Card from "../components/common/Card";
import { getMyReview } from "../api/review";
import { data } from "../utils/data/mockData";
import NavBar from "../components/common/NavBar";
import LongCard from "../components/History/LongCard";
import { recommendData } from "../utils/data/mockData";

const HistoryPage = () => {
  // const [data, setData] = useState<CardType>();

  // const getReview = async () => {
  //   try {
  //     const res = await getMyReview();
  //     console.log(res);
  //     setData(res.data);
  //     setReviewId(res.data.reviewId); // 리뷰 아이디 저장!
  //   } catch (err) {
  //     console.log(err);
  //     alert("예기치 못한 에러가 발생했습니다.");
  //   }
  // };

  return (
    <div>
      <Header text="히스토리" />
      <div className="flex flex-col items-center">
        <h2 className="text-white font-bold text-smTitle mr-auto ml-6 mb-4">
          내가 작성한 회고
        </h2>
        {data && (
          <Card
            memberNickname={data.memberNickname}
            title={data.title}
            content={data.content}
            updateTime={data.updateTime}
            isMine={true}
          />
        )}
        <h2 className="text-white font-bold text-smTitle mr-auto ml-6 mb-4 mt-6">
          내가 코멘트 달았던 회고
        </h2>

        {recommendData.map((data) => (
          <LongCard
            memberNickname={data.memberNickname}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default HistoryPage;
