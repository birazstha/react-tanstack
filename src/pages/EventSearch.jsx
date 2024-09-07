import { useQuery } from "@tanstack/react-query";
import EventItem from "./EventItem";
import { fetchEvents } from "../util/http";
import { useRef, useState } from "react";
import { Loader } from "rsuite";
export default function EventSearch(params) {
  const searchElement = useRef();
  const [keyword, setKeyword] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["events", { search: keyword }],
    queryFn: ({ signal }) => fetchEvents({ signal, keyword }),
    enabled: keyword !== undefined,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(searchElement.current.value);
  }

  return (
    <div className="flex flex-col gap-5 w-[1200px] mx-auto pt-5">
      <h1 className="text-white">Find your next event.</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Event"
          className="p-1 border-gray-50 font-black"
          ref={searchElement}
        />
        <button className="p-[4.1px] bg-gray-500 text-white">Search</button>
      </form>

      <div className="grid md:grid-cols-3 gap-8">
        {isLoading ? (
          <Loader content="Loading" className="text-white" size="md" />
        ) : (
          data &&
          data.map((event) => <EventItem key={event.id} evData={event} />)
        )}
      </div>
    </div>
  );
}
