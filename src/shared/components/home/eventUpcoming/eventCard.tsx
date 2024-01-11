import { motion } from "framer-motion";
import { PreImage } from "../../common/PreImage";
import { IEvent } from "@/schemas/event.type";
import router from "next/router";

interface Props {
    event: IEvent
}

const EventCard = ({event}: Props) => {
    const date = new Date(event.start_date)
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer border-full max-h-[320px] rounded-xl overflow-hidden"
            onClick={() => router.push(`/newsAndEvent/event/${event.slug}`)}
        >
            <PreImage
                src={event.image}
                alt="event"
                className="w-full max-h-[200px]"
                />
            <div className="flex gap-3 p-3 bg-white rounded-md min-h-[140px] w-[100%]">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center text-center min-w-[80px]">
                    <p className="text-2xl leading-[29px] text-black text-[var(--primary-color-900)]">{date.getDate()}</p>
                    <p className="text-base">{"Tháng " + (date.getMonth() + 1) + " " + date.getFullYear()}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-black line-clamp-2">{event.title}</h1>
                    <p className="text-xs tablet:text-base line-clamp-2">{event.summary}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard
