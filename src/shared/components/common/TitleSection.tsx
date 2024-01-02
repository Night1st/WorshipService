interface Props {
  title: string;
  description: string;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 text-center items-center justify-center font-normal">
      <p className="text-[#44000D] text-[24px] leading-[29px] tablet:text-[34px] tablet:leading-[41px] laptop:text-5xl laptop:leading-[58px] font-normal">{data.title}</p>
      <h1 className="text-sm laptop:text-base">{data.description}</h1>
      <div className="w-[200px] h-1 bg-[#44000D]"></div>
    </div>
  );
};

export default TitleSection;
