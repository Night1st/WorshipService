import { MetaData } from "@/shared/mock/nextGenerationSolution";
import TitleSection from "../../common/TitleSection";
import InfoCard from "./InfoCard";

const NextGenerationSolution = () => {
  return ( 
    <section className="px-32 text-center py-10">
      <TitleSection
        title="GIẢI PHÁP"
        description="Metaverse cung cấp giải pháp toàn diện trong nhiều lĩnh vực"
      />
      <div className="w-full min-h-[250px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-10 overflow-hidden">
        {MetaData.map((item, idx) => (
          <InfoCard key={idx} title={item.title} icon={item.icon} link={item.link}/>
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;
