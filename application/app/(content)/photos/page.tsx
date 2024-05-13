import { Photo } from "@kapok/layout";
import { photos } from "@/config";

export default function Photos() {
  return (
    <section className="flex flex-col justify-center items-center">
      {photos.map((photo) => (
        <Photo key={photo.url} {...photo} />
      ))}
    </section>
  );
}
