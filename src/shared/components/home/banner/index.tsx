import ContentBanner from "./ContentBanner";
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data;
}
const Banner = ({ data }: Props) => {
  return (
      <div className="snap-x-mandatory bottom-24 scrollbar-none relative flex overflow-hidden text-white rounded-lg">
        <div className="w-full flex justify-center items-center mx-auto">
        <ContentBanner data={data}/>
        </div>
      </div>

  );
};

export default Banner;
