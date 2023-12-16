import Header from "../components/common/Header";
import PostBox from "../components/Post/PostBox";
import { useState, useEffect } from "react";
import { CommentData, data } from "../utils/data/mockData";
import profile from "../assets/post/profile.png";
import { getMyReview, getComment } from "../api/review";

const MyPostPage = () => {
  // const [data, setData] = useState<CardType>();
  const [comments, setComments] = useState<CommentType[]>();
  const [reviewId, setReviewId] = useState(0);

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

  const getComments = async () => {
    try {
      const res = await getComment({ review_id: reviewId });
      console.log(res);
      setComments(comments);
    } catch (err) {
      console.log(err);
      alert("예기치 못한 에러가 발생했습니다.");
    }
  };

  useEffect(() => {
    // 내 게시글 get 요청, 리뷰 아이디 받음
    // getReview();
    // 위에서 받은 리뷰 아이디로 댓글 get 요청
    // getComments();
    // 로컬에서 내 프로필 가져와 전달하기
  }, []);

  return (
    <>
      {data && CommentData && (
        <>
          <Header text={`내가 작성한 회고`} />
          <div className="bg-black h-[100vh] flex flex-col items-center">
            <PostBox
              profile={profile}
              title={data.title}
              content={data.content}
              memberNickname={data.memberNickname}
              updateTime={data.updateTime}
              comments={CommentData}
            />
          </div>
        </>
      )}
    </>
  );
};

export default MyPostPage;
