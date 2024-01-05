import { motion } from "framer-motion";
import { PreImage } from "./PreImage";
import { useGetComingSoonEvent } from "@/queries/event.queries";
import { IEvent } from "@/schemas/event.type";
import router from "next/router";

interface Props {
    event: IEvent
}

const LargeEventCard = ({event}: Props) => {
    const date = new Date(event.start_date)
    return(
        <motion.div
            className="relative flex flex-col items-center cursor-pointer rounded-full w-full h-[600px]"
            onClick={() => router.push(`/newsAndEvent/event/${event.slug}`)}
        >
            <PreImage
                src={event.image}
                alt="large-event"
                className="w-full max-h-[500px] object-cover"
                />
            <div className="flex gap-5 p-5 bg-white laptop:w-full">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center items-center text-center min-w-[80px]">
                    <p className="text-[34px] leading-[41px] text-[var(--primary-color-900)]">{date.getDate()}</p>
                    <p className="text-base">{"Tháng " + (date.getMonth() + 1) + " " + date.getFullYear()}</p>
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-5 justify-center items-center ">
                    <h1 className="text-base laptop:text-[24px] laptop:leading-[29px] font-bold text-black line-clamp-2">{event.title}</h1>
                    <p className="text-xs tablet:text-base line-clamp-2">{event.summary}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default LargeEventCard