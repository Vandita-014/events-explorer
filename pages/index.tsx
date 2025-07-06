"use client";

import type { GetStaticProps } from "next";
import { useState, useMemo } from "react";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import EventCard from "../components/EventCard";
import type { Event } from "../types/event";
import eventsData from "../data/events.json";

interface HomeProps {
  events: Event[];
}

export default function Home({ events }: HomeProps) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllEvents, setShowAllEvents] = useState(false);

  // Get unique locations for filter dropdown
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(events.map((event) => event.location))];
    return uniqueLocations.sort();
  }, [events]);

  // Filter events based on location and search term
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesLocation =
        !selectedLocation || event.location === selectedLocation;
      const matchesSearch =
        !searchTerm ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesLocation && matchesSearch;
    });
  }, [events, selectedLocation, searchTerm]);

  const displayedEvents = showAllEvents
    ? filteredEvents
    : filteredEvents.slice(0, 6);

  return (
    <Layout
      title="Events Explorer - Discover Amazing Events"
      description="Explore and discover amazing events in your area. Find conferences, workshops, concerts, and more."
    >
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Search Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              <div className="flex-1 max-w-md w-full">
                <label htmlFor="search" className="sr-only">
                  Search events
                </label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Search events, artists, venues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg transition-all duration-200 hover:border-gray-300"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 max-w-md w-full">
                <label htmlFor="location" className="sr-only">
                  Select location
                </label>
                <div className="relative">
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-12 pr-8 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg bg-white appearance-none transition-all duration-200 hover:border-gray-300"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
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
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Events
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From conferences to concerts, find events that match your
              interests and connect with like-minded people
            </p>
          </header>

          {filteredEvents.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Upcoming Events
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                    {filteredEvents.length} event
                    {filteredEvents.length !== 1 ? "s" : ""} found
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayedEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>

              {/* See More Button */}
              {!showAllEvents && filteredEvents.length > 6 && (
                <div className="text-center mt-12 sm:mt-16">
                  <button
                    onClick={() => setShowAllEvents(true)}
                    className="bg-gradient-to-r from-orange-500/50 to-red-500/50 text-white px-8 sm:px-12 py-2 sm:py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold text-lg sm:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 group"
                  >
                    <span className="flex items-center gap-3">
                      See More Events
                      <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                  <p className="text-gray-600 mt-4">
                    Showing {displayedEvents.length} of {filteredEvents.length}{" "}
                    events
                  </p>
                </div>
              )}

              {showAllEvents && filteredEvents.length > 6 && (
                <div className="text-center mt-12 sm:mt-16">
                  <button
                    onClick={() => setShowAllEvents(false)}
                    className="border-2 border-orange-500 text-orange-600 px-8 sm:px-12 py-2 sm:py-3 rounded-2xl hover:bg-orange-50 transition-all duration-300 font-semibold text-lg sm:text-xl"
                  >
                    Show Less Events
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 sm:py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  No Events Found
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Try adjusting your search criteria or location filter to find
                  more events
                </p>
                <button
                  onClick={() => {
                    setSelectedLocation("");
                    setSearchTerm("");
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      events: eventsData,
    },
  };
};
