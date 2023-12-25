import Link from "next/link";
import router from "next/router";

interface Props {
  title: string;
  link: string
}

const InforFooter = ({ title, link }: Props) => {
  return (
    <ul className="flex flex-col cursor-pointer justify-end items-start ">
      <h1 className="text-base" onClick={() => router.push(link)}>{title}</h1>
    </ul>
  );
};

export default InforFooter;
