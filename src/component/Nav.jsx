import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav(params) {
  return (
    <div className="w-[1200px] mx-auto flex items-center justify-between py-2">
      <h1>
        <Link to="/" className="no-underline text-white font-bold text-3xl">
          REACT EVENTS
        </Link>
      </h1>
      <Button>New Event</Button>
    </div>
  );
}
