import { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

interface Props {
    head: string;
    title: string;
    icon: string
}

const ContactInfoCard = ({head, title, icon}: Props) => {
    return (
        <motion.div
            className="flex rounded-xl p-5 overflow-hidden border-collapse"
            style={{ border: "1px solid #555" }}
        >
            <div className="flex items-center gap-5">
                <Image height={50} width={50} src={icon} alt={''}></Image>
                <div className="flex-col text-left">
                    <h1 className="text-2xl px-3 text-black">{head}</h1>
                    <p className="text-2xl px-3">{title}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactInfoCard
  