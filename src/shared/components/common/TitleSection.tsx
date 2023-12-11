interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 text-center items-center justify-center">
      <p className="text-[#1B3864] text-4xl ">{data.title}</p>
      <div className="w-28 h-1 bg-[#1B3864]"></div>
      <h1 className="text-2xl">{data.description}</h1>
    </div>
  );
};

export default TitleSection;
