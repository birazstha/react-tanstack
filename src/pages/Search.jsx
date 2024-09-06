import EventItem from "./EventItem";
export default function Search(params) {
  return (
    <div className=" flex flex-col gap-5">
      <h1 className="text-white">Find your next event.</h1>
      <form action="">
        <input
          type="text"
          placeholder=""
          className="p-1 border-gray-50 font-black"
        />
        <button className="p-[4.1px] bg-gray-500 text-white">Search</button>
      </form>

      <div className="grid grid-cols-3">
        <EventItem />
      </div>
    </div>
  );
}
