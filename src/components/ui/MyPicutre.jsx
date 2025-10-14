const MyPicture = ({ height = "8" }) => {
  const heights = {
    "8": "h-8",
    "16": "h-16",
    "24": "h-24",
    "32": "h-32",
    "48": "h-48",
  };

  return (
    <img
      className={`${heights[height] || "h-8"} aspect-square rounded-full object-cover object-center overflow-hidden border-[#4595FF] border-2`}
      src="/img/tavin.jpeg"
      alt="Minha foto"
    />
  );
};

export default MyPicture;
