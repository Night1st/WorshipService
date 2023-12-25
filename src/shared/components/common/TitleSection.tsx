interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 text-center items-center justify-center font-normal">
      <p className="text-[#44000D] text-3xl laptop:text-5xl laptop:leading-[58px] ">{data.title}</p>
      <h1 className="text-sm laptop:text-base">{data.description}</h1>
      <div className="w-[200px] h-1 bg-[#44000D]"></div>
    </div>
  );
};

export default TitleSection;
