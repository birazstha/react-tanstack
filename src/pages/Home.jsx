import Search from "./Search";
import Events from "./Events";
import Hero from "./Hero";

export default function Home(params) {
  return (
    <>
      <Hero />
      <div className="bg-[#18191b] p-10 flex flex-col gap-5">
        <Events />
        <Search />
      </div>
    </>
  );
}
