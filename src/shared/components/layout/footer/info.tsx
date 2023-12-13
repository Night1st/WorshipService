import Link from "next/link";

interface Props {
  title: string;
}

const InforFooter = ({ title }: Props) => {
  return (
    <ul className="flex flex-col justify-end items-start ">
      <h1 className="text-2xl">{title}</h1>
    </ul>
  );
};

export default InforFooter;
