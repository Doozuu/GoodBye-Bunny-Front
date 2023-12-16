import React, { useRef, useEffect, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";

const LoginPage = () => {
  const nav = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isFormReady, setIsFormReady] = useState(false);
  const [inputType, setInputType] = useState("닉네임을");
  const [isError, setIsError] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  const _setInputType = (v: string) => {
    setIsError(false);
    setInputType(v);
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent,
    nextRef: React.RefObject<HTMLInputElement>
  ) => {
    if (
      e.key === "Enter" &&
      nextRef.current &&
      (e.target as HTMLInputElement).value &&
      nickname &&
      password
    ) {
      e.preventDefault();
      const res = await login({ nickname, password });
      if (res.data) {
        // 성공적으로 데이터를 받았을 때 메인 페이지로 이동

        localStorage.setItem("jwt", res.data);
        nav("/");
      }
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // 항상 기본 동작을 방지

    alert("환영합니다!");
    nav("/home");

    // if (nickname && password) {
    //   const res = await login({ nickname, password });
    //   if (res.data) {
    //     // 성공적으로 데이터를 받았을 때 메인 페이지로 이동

    //     localStorage.setItem("jwt", res.data);
    //     nav("/home");
    //   }
    // }

    // Actual submit phase
    // For now, just reject immediately with error.
  };

  useEffect(() => {
    if (nickname && password) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [nickname, password]);

  return (
    <>
      <div className="px-4 bg-whiteGray min-h-screen flex flex-col justify-center items-center text-black">
        <div className="w-full mt-32 mb-8 text-left">
          <h1 id="inputType" className="text-3xl font-bold">
            {isError ? "입력하신 내용을" : inputType}
          </h1>
          <h1 className="text-3xl font-bold">
            {isError ? "다시 확인해주세요" : "입력해주세요"}
          </h1>
        </div>
        <div className="w-full max-w-md">
          <form id="login" name="login" onSubmit={handleSubmit}>
            <div className="relative mb-6 h-[96px]">
              <label
                className="absolute pl-4 pt-5 text-deepGray block mb-2 text-sm font-medium "
                htmlFor="username"
              >
                닉네임
              </label>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="focus:border-2 border-solid focus:border-blue focus:outline-none bg-white text-2xl font-bold text-black placeholder-lightGray rounded-[24px] block w-full h-full p-4 pt-9"
                id="username"
                placeholder="네이버"
                type="text"
                onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                onFocus={() => {
                  _setInputType("닉네임을");
                }}
              />
            </div>
            <div className="relative mb-6 h-[96px]">
              <label
                className="absolute pl-4 pt-5 text-deepGray block mb-2 text-sm font-medium"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`focus:border-2 border-solid focus:border-blue focus:outline-none bg-white text-2xl text-black placeholder-lightGray rounded-[24px] block w-full h-full p-4 pb-0 `}
                id="password"
                placeholder="******"
                type="password"
                onFocus={() => _setInputType("비밀번호를")}
              />
            </div>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <div
                  className="pl-4 text-md font-bold"
                  role="button"
                  onClick={() => nav("/login/register")}
                >
                  회원가입 하러가기
                </div>
              </div>
            </div>
            {isError && (
              <div className="mb-6 flex justify-between items-center">
                <div className="pl-4 text-pointRed text-s font-black">
                  <div>닉네임 또는 비밀번호를 잘못 입력했습니다.</div>
                  <div>입력하신 내용을 다시 확인해주세요.</div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="flex-grow"></div>
        <button
          className={`tap-transparent w-full active:scale-95  font-bold rounded-[19px] text-md px-5 py-4 text-center transform transition-transform duration-150 h-[64px] mb-[48px] ${
            isFormReady ? "bg-black text-white" : "bg-lightGray text-deepGray"
          }`}
          type="submit"
          form="login"
        >
          {isFormReady ? "로그인 하기" : "다음으로"}
        </button>
      </div>
    </>
  );
};

export default LoginPage;
