import Link from "next/link";

interface IRecordItemProps {
  record: {
    link: string;
    title: string;
    date: string;
    desc?: string;
  };
}

export default function RecordItem(props: IRecordItemProps) {
  const { record } = props;

  return (
    <article className="flex flex-col gap-y-1.5">
      <Link href={`/posts/${record.link}`}>
        <h2 className="text-lg font-bold">{record.title}</h2>
      </Link>
      <span>{record.date}</span>
      <div>{record.desc}</div>
    </article>
  );
}
