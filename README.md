# Leads Tracker Mobile

A simple web application to track and manage leads using Firebase Realtime Database. This project allows users to save, display, and delete URLs.

## Features

- Save URLs
- Display saved URLs
- Delete all saved URLs

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/leads_tracker_mobile.git
    ```
2. Navigate to the project directory:
    ```sh
    cd leads_tracker_mobile
    ```
3. Open `index.html` in your preferred web browser.

## Configuration

1. Create a Firebase project and obtain your Firebase Realtime Database URL.
2. Replace `process.env.DATABASE_URL` in `index.js` with your Firebase Realtime Database URL:
    ```javascript
    const firebaseConfig = {
        databaseURL: "YOUR_FIREBASE_DATABASE_URL"
    }
    ```

## Usage

1. Enter a URL in the input field and click "SAVE INPUT" to save the URL.
2. The saved URLs will be displayed in a list.
3. Double-click the "DELETE ALL" button to remove all saved URLs.

## License

This project is licensed under the MIT License.