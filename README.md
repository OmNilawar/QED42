# E-commerce Cart Application

## Overview

This is a simple E-commerce Cart application built using React, Tailwind CSS, and Context API. The application allows users to view products, add them to the cart, and see the total price of the cart with delivery charges.

The application supports the following features:

- Display a list of products fetched from an API.
- Add and remove items from the shopping cart.
- Show the total amount of the cart and delivery fees.
- Display a red dot on the Cart icon if there are items in the cart.

## Features

- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Cart Management**: Users can add or remove products from the cart, and the cart state is managed globally using React's Context API.
- **Product Details**: Users can view the products fetched from an external API and their details, including price.
- **Cart Indicator**: A red dot appears on the cart icon when items are present in the cart.
- **Total Cart Amount & Delivery Fee**: The total amount of the cart is calculated dynamically, and a delivery fee is applied based on the total value of the cart.

## Technologies Used

- **React**: For building the UI components and managing state.
- **Tailwind CSS**: For styling the application with a utility-first CSS framework.
- **React Context API**: For managing the global state of the application, particularly the cart items.
- **Axios**: For making HTTP requests to fetch product data from an external API.

## Installation

To get started with the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OmNilawar/QED42.git
   cd QED42
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Usage

1. **Viewing Products**: Upon loading the application, a list of products is displayed with their name, image, and price.

2. **Adding to Cart**: Users can click an "Add to Cart" button next to each product to add it to their cart. The cart icon will update to show the number of items in the cart.

3. **Cart**: In the cart, users can view all added items and their respective quantities. Users can also remove items from the cart.

4. **Total Amount and Delivery Fee**: The total price of the items in the cart is shown, along with the applicable delivery fee (free if the total is above a certain amount).

5. **Red Dot Indicator**: When there are items in the cart, a red dot will be visible on the cart icon to indicate that the cart is filled.

---


