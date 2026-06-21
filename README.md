# KDrama Website

Welcome to the KDrama project! This website is dedicated to showcasing various Korean dramas, providing users with information about shows, including their titles, genres, and release dates.

## Project Structure

The project is organized as follows:

```
kdrama
├── src
│   ├── server.ts               # Entry point of the website, sets up the server and routes
│   ├── controllers
│   │   └── showController.ts   # Handles requests related to shows
│   ├── routes
│   │   └── shows.ts            # Defines routes for shows
│   ├── models
│   │   └── show.ts             # Defines the structure of a show object
│   ├── services
│   │   └── mediaService.ts     # Fetches and processes media data
│   └── utils
│       └── index.ts            # Utility functions for the application
├── public
│   ├── css
│   │   └── styles.css          # CSS styles for the website
│   └── js
│       └── main.js             # Client-side JavaScript functionality
├── views
│   ├── index.ejs               # Main template for the homepage
│   └── show.ejs                # Template for displaying individual show details
├── package.json                 # npm configuration file
├── tsconfig.json               # TypeScript configuration file
├── .env.example                 # Example of environment variables
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd kdrama
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Copy the `.env.example` file to `.env` and update the values as needed.

4. **Run the application:**
   ```
   npm start
   ```

5. **Access the website:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration).

## Usage Guidelines

- Navigate to the homepage to see a list of available shows.
- Click on a show to view its details, including description and media links.
- Use the search functionality to find specific shows.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.