# Events Explorer - Next.js Assessment

A responsive event listing application built with Next.js 15, TypeScript, and Tailwind CSS that allows users to explore events and view detailed information about each one.

## Features

- **Event Listing**: Display 8 mock events with title, date, location, and description
- **Client-side Filtering**: Filter events by location and search by title/description
- **Dynamic Routing**: Individual event detail pages with full information
- **Static Generation**: Uses `getStaticPaths` and `getStaticProps` for optimal performance
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Mobile Responsive**: Clean, intuitive design that works on all devices
- **Keyboard Navigation**: Full keyboard accessibility support

## Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Local JSON file with mock data
- **Deployment**: Vercel

## Project Structure

```plaintext
events-explorer/
├── pages/
│   ├── _app.tsx           # App wrapper with global styles
│   ├── _document.tsx      # Custom document structure
│   ├── index.tsx          # Homepage with event listing
│   └── events/
│       └── [id].tsx       # Dynamic event detail pages
├── components/
│   ├── Layout.tsx         # Main layout with header/footer
│   ├── EventCard.tsx      # Individual event card component
│   └── EventFilter.tsx    # Search and filter component
│   └── HeroCarousel.tsx 
├── data/
│   └── events.json        # Mock event data
├── types/
│   └── event.ts           # TypeScript interfaces
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

1. **Clone the repository**
   git clone <repo-url>

2. **Install dependencies**
   npm install

3. **Run the development server**
   npm run dev

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔮Future Improvements

Given more time, potential enhancements could include:

- **Backend Integration**: Connect to a real API or database
- **User Authentication**: Allow users to save favorite events
- **Event Registration**: Implement actual registration functionality
- **Advanced Filtering**: Filter by date range, category, price
- **Event Creation**: Allow users to create and submit events
- **Events category**: Musical events, food events, nightlife and so on

## License

This project is created for assessment purposes.
