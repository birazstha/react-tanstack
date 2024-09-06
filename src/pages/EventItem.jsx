import { Link } from "react-router-dom";

export default function EventItem({ evData }) {
  if (!evData) return null; // Safeguard in case 'evData' is undefined

  return (
    <div className="event-item">
      <div className="h-[300px] overflow-hidden">
        <img
          src={evData.image}
          alt={evData.title}
          className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="py-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center flex-col gap-2">
          <h1>{evData.title}</h1>
          <p>{evData.date}</p>
          <p>{evData.location}</p>
        </div>
        <Link
          to={`event/${evData.id}`}
          className="bg-green-800 p-2 rounded-[5px] no-underline text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
