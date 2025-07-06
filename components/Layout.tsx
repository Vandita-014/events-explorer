import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Events Explorer",
  description = "Discover and explore amazing events in your area",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="events, conferences, workshops, networking, entertainment"
        />
        <meta name="author" content="Events Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-orange-600">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Events
                  </span>
                  <span className="text-gray-900">Explorer</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  Browse Events
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  Create Events
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  Find Tickets
                </Link>
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    Log In
                  </Link>
                  <Link
                    href="#"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>

              <button className="md:hidden p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Events Explorer</h3>
                <p className="text-gray-400">
                  Discover amazing events and create unforgettable experiences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Use Events Explorer</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Browse Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Create Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Plan Events</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Event Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Sell Tickets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Event Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 Events Explorer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
