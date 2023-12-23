import { motion } from "framer-motion";
import { PreImage } from "../../common/PreImage";
import { IEvent } from "@/schemas/event.type";
import router from "next/router";

interface Props {
    event: IEvent
}

const EventCard = ({event}: Props) => {
    const date = new Date(event.public_date)
    return(
        <motion.div
            className="flex flex-col items-center cursor-pointer border-collapse "
            style={{ border: "1px solid #555" }}
            onClick={() => router.push(`/newsAndEvent/event/${event.slug}`)}
        >
            <PreImage
                src={event.image}
                alt={""}
                className="w-full h-full"
                />
            <div className="flex gap-3 px-3 py-5 bg-white">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center text-center min-w-[80px]">
                    <p className="text-2xl text-black ">{date.getDate()}</p>
                    <p className="text-base">{"Tháng " + (date.getMonth() + 1) + " " + date.getFullYear()}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-black ">{event.title}</h1>
                    <p className="text-base line-clamp-2">{event.summary}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard