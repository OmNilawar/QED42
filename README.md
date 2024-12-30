# E-commerce Cart Application

## Overview

This is a simple E-commerce Cart application built using React, Tailwind CSS, and Context API. The application allows users to view products, add them to the cart, and see the total price of the cart with delivery charges.

## Features

- Display products fetched from an API.
- Add/remove items from the cart.
- Show total cart amount and delivery fees.
- Red dot on the Cart icon when items are added.

## Technologies Used

- **React**: For building UI components and managing state.
- **Tailwind CSS**: For styling the application.
- **React Context API**: For global state management (cart).
- **Axios**: For fetching data from an external API.

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


