"use client";

import type React from "react";

import { useState } from "react";

interface EventFilterProps {
  locations: string[];
  onLocationChange: (location: string) => void;
  onSearchChange: (search: string) => void;
}

export default function EventFilter({
  locations,
  onLocationChange,
  onSearchChange,
}: EventFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLocationChange(e.target.value);
  };

  return (
    <section className="mb-8" aria-label="Event filters">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Events
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            aria-describedby="search-help"
          />
          <p id="search-help" className="sr-only">
            Search for events by title or description
          </p>
        </div>
        <div className="sm:w-64">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Location
          </label>
          <select
            id="location"
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
            aria-describedby="location-help"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <p id="location-help" className="sr-only">
            Filter events by location
          </p>
        </div>
      </div>
    </section>
  );
}
