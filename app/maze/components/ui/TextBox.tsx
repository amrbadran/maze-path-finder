"use client";
const TextBox = ({
  label,
  defaultValue,
  onChangeHandler,
}: {
  label: string;
  defaultValue: number;
  onChangeHandler: (value: number) => void;
}) => {
  return (
    <>
      <h1 className="font-semibold text-md">{label}</h1>
      <input
        autoComplete="off"
        type="text"
        className="outline-0 border-2 border-[#d6b58b] 
            rounded-lg shadow-md w-64 h-12 focus:border-white text-center transition duration-200 ease-in 
           "
        defaultValue={defaultValue}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            onChangeHandler(value);
          } else {
            onChangeHandler(0);
          }
        }}
      />
    </>
  );
};

export default TextBox;
