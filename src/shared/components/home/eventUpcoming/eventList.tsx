import EventCard from "./eventCard";
import { useGetComingSoonEvent } from "@/queries/event.queries";

const EventList = () => {
  const {data: event} = useGetComingSoonEvent()
    return ( 
        <section className="px-40 py-10">
          <div className="w-full min-h-[350px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden">
            {event?.map((item, idx) => (
              idx === 0 ? ("")
              : (
                <EventCard key={idx} event={item} />
              )
            ))}
          </div>
        </section>
      );
}

export default EventList