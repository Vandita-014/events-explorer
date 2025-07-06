import Image from "next/image";
import Link from "next/link";
import type { Event } from "../types/event";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.split(" - ")[0]; // Get start time only
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={`${event.title} event image`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white rounded-lg px-3 py-1 shadow-sm">
            <div className="text-orange-600 font-bold text-sm">
              {formatDate(event.date).split(",")[0]}
            </div>
            <div className="text-xs text-gray-600">
              {formatTime(event.time)}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 hover:bg-white rounded-full p-2 shadow-sm transition-colors duration-200">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {event.category}
          </span>
          <span className="text-green-600 font-semibold text-sm">
            {event.price}
          </span>
        </div>

        <header className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
            {event.title}
          </h2>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <address className="not-italic">{event.location}</address>
          </div>
        </header>

        <p className="text-gray-700 mb-6 line-clamp-2 text-sm leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">by {event.organizer}</div>
          <Link
            href={`/events/${event.id}`}
            className="bg-orange-600 text-white px-6 py-2 rounded-2xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 text-sm font-semibold"
            aria-label={`View details for ${event.title}`}
          >
            View Event
          </Link>
        </div>
      </div>
    </article>
  );
}
