interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 text-center items-center justify-center">
      <p className="text-[#44000D] text-6xl ">{data.title}</p>
      <h1 className="text-2xl">{data.description}</h1>
      <div className="w-80 h-1 bg-[#44000D]"></div>
    </div>
  );
};

export default TitleSection;
