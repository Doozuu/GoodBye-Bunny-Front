const Button = ({ text, isActive, func }: ButtonType) => {
  return (
    <button
      className={`font-bold text-smTitle p-3 pr-[2.5rem] pl-[2.5rem] rounded-[30px] ${
        isActive ? "bg-black text-white" : "bg-bgGray text-deepGray"
      }`}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default Button;
