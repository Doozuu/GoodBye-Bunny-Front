import Header from "../components/common/Header";
import PostBox from "../components/Post/PostBox";
import { useState, useEffect } from "react";
import { CommentData } from "../utils/data/mockData";
import { getComment } from "../api/review";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const [data, setData] = useState<CardType>();
  const [comments, setComments] = useState<CommentType[]>();
  const { reviewId } = useParams<{ reviewId?: string }>();
  const nav = useNavigate();

  const getComments = async () => {
    try {
      const review_id = Number(reviewId);
      const res = await getComment({ review_id });
      console.log(res);
      setComments(comments);
    } catch (err) {
      console.log(err);
      alert("예기치 못한 에러가 발생했습니다.");
      nav(-1);
    }
  };

  useEffect(() => {
    // 회고 조회
    const info = localStorage.getItem("info");
    info && setData(JSON.parse(info));
    // 댓글 조회
    // getComments();
  }, []);

  return (
    <>
      {data && CommentData && (
        <>
          <Header text={`${data?.memberNickname}님이 작성한 회고`} />
          <div className="bg-black h-[100vh] w-[100%] flex flex-col items-center ">
            <PostBox
              profile={data.profile}
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

export default PostPage;
