import { motion } from "framer-motion";
import { PreImage } from "./PreImage";
import { useGetComingSoonEvent } from "@/queries/event.queries";
import { IEvent } from "@/schemas/event.type";

interface Props {
    event: IEvent
}

const LargeEventCard = ({event}: Props) => {
    const date = new Date(event.start_date)
    return(
        <motion.div
            className="relative flex flex-col items-center cursor-pointer border-collapse "
            style={{ border: "1px solid #555" }}
        >
            <PreImage
                src={event.image}
                alt={""}
                className="w-full h-auto"
                />
            <div className="flex gap-3 px-3 py-5 ">
                <div className="flex flex-col gap-3 bg-[var(--secondary-color-500)] justify-center text-center min-w-[80px]">
                    <p className="text-2xl text-black ">{date.getDate()}</p>
                    <p className="text-base">{"Tháng " + (date.getMonth() + 1) + " " + date.getFullYear()}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <h1 className="text-base font-bold text-black ">{event.title}</h1>
                    <p className="text-base line-clamp-2">{event.summary}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default LargeEventCard