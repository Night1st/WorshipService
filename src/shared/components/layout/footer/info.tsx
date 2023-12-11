import Link from "next/link";

interface Props {
  title: string;
  info: Info[];
}
interface Info {
  title: string;
  link: string
}

const InforFooter = ({ title, info }: Props) => {
  return (
    <ul className="flex flex-col justify-end items-start ">
      <h1 className="text-2xl">{title}</h1>
      {info.map((item, inx) => (
        <Link href={item.link} key={inx}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default InforFooter;
