import { formatDate } from "../../utils/formatDate";
import CommentBox from "./CommentBox";
import editIcon from "../../assets/post/edit.png";
import { useState, ChangeEvent, useEffect, useRef } from "react";
import { patchReview } from "../../api/review";
import PointModal from "../PointModal/pointModal";
import { randomProfilePicker } from "../../utils/randomCardPicker";

const PostBox = ({
  profile,
  title,
  content,
  memberNickname,
  updateTime,
  comments,
}: CardType) => {
  const [newContent, setNewContent] = useState(content);
  const [newTitle, setNewTitle] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const [minHeight, setMinHeight] = useState("auto");
  const date = updateTime && formatDate({ updateTime });
  const path = window.location.pathname;
  const isMine = path === "/mypost";
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isPost, setIsPost] = useState(false);
  const [profleImg, setProfleImg] = useState("");

  useEffect(() => {
    setProfleImg(randomProfilePicker());
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      setMinHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [isEdit]);

  const editPost = () => {
    setIsEdit(!isEdit);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleTextareaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setNewContent(e.target.value);
  };

  const patchPost = async () => {
    try {
      const res = await patchReview({
        title: newTitle,
        content: newContent,
      });
      console.log(res);
      alert("수정 완료되었습니다.");
      setIsEdit(false);
      // 변경 바로 반영되는지 확인
    } catch (err) {
      console.log(err);
      alert("예기치 못한 에러가 발생했습니다.");
    }
  };

  // 내가 작성한 회고는 로컬에서 프로필 가져오기
  return (
    <>
      {isPost && (
        <div className="relative w-[100%] pl-4 pr-4">
          <PointModal />
          <div className="fixed z-10 bg-black w-[100%] h-[100vh] opacity-25 top-0 left-0"></div>
        </div>
      )}
      <div className="flex flex-col w-[100%] rounded-[24px] pl-4 pr-4 pb-4">
        <div className="flex bg-whiteGray items-center rounded-tl-[24px] rounded-tr-[24px] pl-[16px] pr-[16px] pb-[16px] pt-[16px]">
          <img
            src={profleImg}
            className="w-[40px] h-[40px] rounded-[100%] mr-3"
          />
          <div>
            <p>{memberNickname}님의 회고</p>
            <p className="text-deepGray text-sm">{date}</p>
          </div>
          {isMine && (
            <img
              src={editIcon}
              className="w-[24px] ml-auto mr-1 cursor-pointer"
              onClick={editPost}
            />
          )}
        </div>
        <div className="flex flex-col bg-white pl-4 pr-4 pb-9 pt-4">
          {isEdit ? (
            <>
              <input
                className="font-bold text-mdTitle mb-[14px]"
                value={newTitle}
                onChange={handleInput}
              />
              <textarea
                autoFocus
                ref={textareaRef}
                value={newContent}
                className="font-regular text-fontGray"
                onChange={handleTextareaInput}
                style={{ height: "auto", resize: "none", minHeight: minHeight }}
              />
              <button
                className="bg-black w-[5rem] rounded-[10px] text-white font-regular pt-1 pb-1 ml-auto mt-3"
                onClick={patchPost}
              >
                수정 완료
              </button>
            </>
          ) : (
            <>
              <h1 className="font-bold text-mdTitle mb-[14px]">{title}</h1>
              <p className="font-regular text-fontGray">{content}</p>
            </>
          )}
        </div>
        <div className="w-[100%] h-[1px] bg-lightGray"></div>
        {comments && <CommentBox comments={comments} setIsPost={setIsPost} />}
      </div>
    </>
  );
};

export default PostBox;
