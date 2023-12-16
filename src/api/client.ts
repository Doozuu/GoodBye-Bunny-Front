import axios from "axios";

const client = axios.create();
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
client.defaults.withCredentials = true;

const token = localStorage.getItem("authtoken");

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;

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
