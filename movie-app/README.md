# ALXFLIX - Movie Database Website

ALXFLIX is a modern and user-friendly movie database website built using **React** and **Tailwind CSS**. This platform allows users to discover and explore movies, view details such as cast, ratings, and trailers, and manage their personal watchlist.

## Features

- 🎬 **Browse Movies**: Explore a vast collection of movies with details such as title, synopsis, release date, and ratings.
- 🔍 **Search Functionality**: Quickly find movies by title, genre, or keyword.
- 📂 **Movie Details Page**: View in-depth information including trailers, cast, and reviews.
- ⭐ **Watchlist**: Add movies to your personal watchlist for future viewing.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## Tech Stack

- **Frontend**: React, JavaScript, Tailwind CSS
- **State Management**: Context API or Zustand (based on future expansion needs)
- **API**: TMDB (The Movie Database) API
- **Deployment**: Vercel

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/KojoBolt/FE-Capstone-Movie-Database
   cd Capstone-Movie-Database
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your TMDB API key:
   ```sh
   REACT_APP_TMDB_API_KEY=API-KEY
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open [http://localhost:5173/]to view it in the browser.

## Folder Structure

```
ALXFLIX/
├── public/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Main application pages (Home, Movie Details, Watchlist)
│   ├── hooks/        # Custom React hooks
│   ├── assets/       # Images, icons, and static assets
│   ├── App.js        # Main entry point
│   ├── index.js      # React DOM rendering
│   ├── styles/       # Tailwind global styles
│   └── config/       # API configurations
├── .env              # API keys and environment variables
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── README.md         # Project documentation
```

## API Integration

ALXFLIX fetches movie data from the **TMDB API**. You need an API key from [The Movie Database](https://www.themoviedb.org/) to access movie details, images, and trailers.

## Deployment

To deploy ALXFLIX to Vercel or Netlify, follow these steps:

1. Push your project to GitHub/GitLab.
2. Connect your repository to the deployment platform.
3. Set environment variables for the API key.
4. Deploy and share your website!

## Future Enhancements

- 👥 **User Authentication**: Allow users to create accounts and save their watchlist.
- 🎭 **Genres & Filters**: Advanced filtering by genres, year, and ratings.
- 📊 **Trending & Recommendations**: Personalized movie suggestions.
- 🌙 **Dark Mode**: Toggle between light and dark themes.

This project is licensed under the **MIT License**.

## Contact

For any inquiries, reach out via email kojobolt@gmail.com or open an issue on GitHub.
