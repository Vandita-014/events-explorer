"use client";

import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import type { Event } from "../../types/event";
import eventsData from "../../data/events.json";

interface EventDetailProps {
  event: Event;
}

export default function EventDetail({ event }: EventDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title="Loading...">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout
      title={`${event.title} - Events Explorer`}
      description={event.description}
    >
      <article className="max-w-4xl mx-auto">
        <nav className="mb-6" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-orange-600 hover:text-orange-800 focus:outline-none focus:underline transition-colors duration-200"
          >
            ← Back to Events
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <span className="sr-only">Event date:</span>📅{" "}
              <time dateTime={event.date} className="ml-2">
                {formatDate(event.date)}
              </time>
            </div>
            <div className="flex items-center">
              <span className="sr-only">Event time:</span>🕐{" "}
              <span className="ml-2">{event.time}</span>
            </div>
            <div className="flex items-center">
              <span className="sr-only">Event location:</span>📍{" "}
              <address className="ml-2 not-italic">{event.location}</address>
            </div>
            <div className="flex items-center">
              <span className="sr-only">Event price:</span>💰{" "}
              <span className="ml-2">{event.price}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={`${event.title} event image`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About This Event
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{event.fullDescription}</p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Event Details
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">Organizer</dt>
                  <dd className="text-gray-600">{event.organizer}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Category</dt>
                  <dd className="text-gray-600">{event.category}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Date & Time</dt>
                  <dd className="text-gray-600">
                    <time dateTime={event.date}>{formatDate(event.date)}</time>
                    <br />
                    {event.time}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Location</dt>
                  <dd className="text-gray-600">
                    <address className="not-italic">{event.location}</address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Price</dt>
                  <dd className="text-gray-600 text-lg font-semibold">
                    {event.price}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t">
                <button
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                  aria-label={`Register for ${event.title}`}
                >
                  Register Now
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Secure registration available
                </p>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = eventsData.map((event) => ({
    params: { id: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = eventsData.find((event) => event.id === params?.id);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
};
