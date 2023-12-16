import client from "./client";

export const login = async ({ nickname, password }: userLogin) => {
  try {
    const res = await client.post("/member/login", { nickname, password });
    return res;
  } catch (err) {
    throw err;
  }
};

export const signup = async ({
  nickname,
  password,
  age,
  profile,
}: userSignUp) => {
  try {
    const res = await client.post("/member/signup", {
      nickname,
      password,
      age,
      profile,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
