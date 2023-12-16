import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState<String | null>(null);

  useEffect(() => {
    // For now, we'll just set some dummy data
    setUser(localStorage.getItem("jwt"));
  }, []); // Empty dependency array ensures this runs only on mount

  const isLoggedIn = user !== null;

  return { isLoggedIn, user };
};

export default useUser;
