# Simple CRUD API

A basic CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB. This API allows you to perform operations on a collection of items.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Create new items
- Read items
- Update item details
- Delete items

## Technologies

- Node.js
- Express.js
- MongoDB


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Firdous19/REST-API.git
   cd REST-API
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Set up your MongoDB connection:**

   - Open `index.js`
   - Replace `'mongodb://localhost:27017/your_database'` with your MongoDB connection string.

## Usage

1. **Start your MongoDB server.**

2. **Run the Node.js application:**

   ```bash
   npm start
   ```

3. **The API will be running at `http://localhost:1806`.**

## API Endpoints

- **POST /api/users:** Create a new item.

- **GET /api/users:** Read all items.

- **GET /api/users/:id:** Read an item by ID.

- **PATCH /api/users/:id:** Update an item by ID.

- **DELETE /api/users/:id:** Delete an item by ID.
