import RecordItem from "@/components/record-item";
import recordData from "./record-items";

export default function Home() {
  return (
    <main className="text-zinc-700">
      <div className="text-2xl font-bold">最近更新</div>
      <div className="pt-5 flex flex-col gap-5">
        {recordData.map((record) => (
          <RecordItem key={record.link} record={record} />
        ))}
      </div>
    </main>
  );
}
