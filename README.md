# url-chop - A Simple URL Shortener

**url-chop** is a lightweight URL shortener application that allows you to convert long URLs into short, shareable links. Built with **Node.js**, **Express.js**, and **Mongoose**, this project demonstrates the fundamentals of back-end development and API creation.

---

## Features
- 🌟 **Shorten URLs**: Quickly transform long URLs into short and easy-to-share links.
- 🔗 **Redirection**: Automatically redirect users from the short link to the original URL.
- 🏪 **Database Integration**: Store and manage URLs using MongoDB.
- 📁 **Simple API**: Easy-to-use REST API for creating and retrieving short URLs.

---

## Technologies Used
- **Node.js**: Backend JavaScript runtime.
- **Express.js**: Framework for building RESTful APIs and handling routes.
- **Mongoose**: ODM for MongoDB to structure and query the database.

---

## Installation and Setup

### 1. Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (Local or Cloud instance like MongoDB Atlas)

---

### 2. Clone the Repository
```bash
git clone https://github.com/Mahi-edward/url-chop.git
cd url-chop
```

### 3. Install Dependencies
Run the following command to install the required packages:
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```bash
PORT=8080
MONGO_URL=your_mongodb_connection_string
BASE_URL=http://localhost:8080

```
Replace `your_mongodb_connection_string` with your MongoDB connection string and adjust the `BASE_URL` if hosting the app.

### 5. Start the Application
Run the server using:
```bash
npm run dev
```
Visit `http://localhost:8080` to access the application.




## API Endpoints

### 1. Create a Short URL

- **POST** `/api/v1/short-url`
- **Request Body:**
```json
{
  "originalUrl": "https://example.com/some/long/url"
}
```

### 2. Access Original URL
- **GET** `/:urlId`
- Redirects to the original URL associated with the given short code.
- Example: Visiting http://localhost:8080/abc123 redirects to https://example.com/some/long/url.



## Contact
If you have any questions or suggestions, feel free to reach out:

**GitHub**: [Mahi-edward](https://github.com/Mahi-edward)

**Email**: Maheshwaran2328@gmail.com
