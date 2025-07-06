# Events Explorer - Next.js Assessment

A responsive event listing application built with Next.js 15, TypeScript, and Tailwind CSS that allows users to explore events and view detailed information about each one.

## 🚀 Features

- **Event Listing**: Display 8 mock events with title, date, location, and description
- **Client-side Filtering**: Filter events by location and search by title/description
- **Dynamic Routing**: Individual event detail pages with full information
- **Static Generation**: Uses `getStaticPaths` and `getStaticProps` for optimal performance
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Mobile Responsive**: Clean, intuitive design that works on all devices
- **Keyboard Navigation**: Full keyboard accessibility support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Local JSON file with mock data
- **Deployment**: Vercel-ready

## 📁 Project Structure

\`\`\`
events-explorer/
├── pages/
│ ├── \_app.tsx # App wrapper with global styles
│ ├── \_document.tsx # Custom document structure
│ ├── index.tsx # Homepage with event listing
│ └── events/
│ └── [id].tsx # Dynamic event detail pages
├── components/
│ ├── Layout.tsx # Main layout with header/footer
│ ├── EventCard.tsx # Individual event card component
│ └── EventFilter.tsx # Search and filter component
├── data/
│ └── events.json # Mock event data
├── types/
│ └── event.ts # TypeScript interfaces
├── styles/
│ └── globals.css # Global styles and Tailwind imports
├── public/ # Static assets
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd events-explorer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Key Features Implementation

### 1. Homepage (Event List)

- Displays 8 mock events in a responsive grid layout
- Each event card shows title, date, location, and brief description
- Clean, intuitive design with hover effects and proper spacing

### 2. Filter Functionality

- **Search Bar**: Filter events by title or description (case-insensitive)
- **Location Dropdown**: Filter events by specific locations
- **Client-side Only**: All filtering happens in the browser for fast interaction
- **Clear Filters**: Easy way to reset all filters

### 3. Dynamic Routing

- Uses Next.js dynamic routing with `[id].tsx`
- Implements `getStaticPaths` to pre-generate all event pages
- Uses `getStaticProps` to fetch event data at build time
- Includes proper error handling for non-existent events

### 4. SEO & Accessibility

- **Meta Tags**: Dynamic titles and descriptions for each page
- **Semantic HTML**: Proper use of `<main>`, `<section>`, `<article>`, `<header>`, etc.
- **ARIA Labels**: Screen reader support with descriptive labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators and proper tab order

## 🎨 Design Decisions

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Mobile-first approach with breakpoints
- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clean, readable fonts with proper hierarchy

### Performance Optimizations

- **Static Generation**: Pre-built pages for faster loading
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging for smaller bundle size

### User Experience

- **Loading States**: Proper loading indicators
- **Error Handling**: Graceful error messages and fallbacks
- **Intuitive Navigation**: Clear breadcrumbs and navigation
- **Visual Feedback**: Hover states and transitions

## 🔧 Configuration Files

### Next.js Configuration (`next.config.ts`)

- Image optimization settings
- Performance optimizations
- Security headers

### Tailwind Configuration (`tailwind.config.js`)

- Custom color palette
- Extended animations
- Responsive breakpoints

### TypeScript Configuration (`tsconfig.json`)

- Strict type checking
- Path aliases for cleaner imports
- Modern ES features support

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

The app uses static generation, making it perfect for CDN deployment.

## 🔮 Future Improvements

Given more time, potential enhancements could include:

- **Backend Integration**: Connect to a real API or database
- **User Authentication**: Allow users to save favorite events
- **Event Registration**: Implement actual registration functionality
- **Calendar Integration**: Add events to user's calendar
- **Social Sharing**: Share events on social media
- **Advanced Filtering**: Filter by date range, category, price
- **Event Creation**: Allow users to create and submit events
- **Real-time Updates**: WebSocket integration for live updates
- **Progressive Web App**: Add PWA features for mobile experience
- **Analytics**: Track user interactions and popular events

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

This is an assessment project, but feedback and suggestions are welcome!

## 📄 License

This project is created for assessment purposes.
