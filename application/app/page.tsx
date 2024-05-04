import { Introduction, Navigation, Footer } from "@kapok/layout";
import { contacts, footer, routes } from "@/config";

export default function Index() {
  return (
    <main className="w-screen h-[70vh] overflow-hidden grid place-items-center">
      <section className="flex flex-col gap-3 text-stone-600">
        <Introduction username="yukkuri" contacts={contacts} />
        <Navigation routes={routes} size={36} />
        <Footer username="yukkuri" subLinks={footer} />
      </section>
    </main>
  );
}
