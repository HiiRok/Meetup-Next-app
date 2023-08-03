# Meetup App with Next.js and MongoDB

This is a Meetup app built with Next.js and MongoDB. It leverages Next.js's server-side rendering capabilities using `getStaticProps` to fetch data from MongoDB and display it on the client-side. MongoDB is used for data storage, allowing for a scalable and flexible backend.

![App Screenshot](screenshots/app_screenshot.png)

## Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the dependencies:

    ```bash
    npm install

## Usage
To run the app, use the following command:

    ```bash
    npm run dev

The app will be accessible at http://localhost:3000.

## Key Points
1.Server-Side Rendering: Meetup data is fetched using getStaticProps from the server-side and passed as props to the components for rendering. This ensures a faster initial load time and improves SEO.

2.MongoDB Integration: MongoDB is used as the database to store meetup information. The mongoDb.js file provides utility functions for connecting to MongoDB and interacting with the database.

3.Dynamic Routes: Dynamic routing is used to create individual meetup pages based on the meetupId.

4.Component-Based Architecture: The components folder contains reusable UI components for building the app's user interface.

5.Assets Folder(inside of src): The public folder contains static assets like images.

## Screenshots
Include some screenshots of your app here to showcase its features.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
The Meetup app was inspired by various existing event management applications.

Thanks to the Next.js and MongoDB communities for their valuable tools and packages
