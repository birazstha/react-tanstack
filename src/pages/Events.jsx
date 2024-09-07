import { events } from "../events";
import { fetchEvents } from "../util/http";
import EventItem from "./EventItem";
import { useQuery } from "@tanstack/react-query";

export default function Events(params) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  return (
    <div className="w-[1200px] mx-auto pt-5">
      <h1 className="mb-5 text-white">Recently Added Events</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {data &&
          data.map((event) => <EventItem key={event.id} evData={event} />)}
      </div>
    </div>
  );
}
