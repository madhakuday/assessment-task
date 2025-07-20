# Real Estate Finder (Next.js 15)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
The project uses the **App Router** and follows the latest **Next.js 15** standards.

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.  
You can start editing the app from the `app/` directory.

To build for production:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 📦 API Details

This project includes a custom API route at:

```
/app/api/property
```

### `GET /api/property`

| Query Param   | Type   | Description                        |
| ------------- | ------ | ---------------------------------- |
| `search`      | String | Location keyword (e.g., city name) |
| `listingType` | String | `Buy` or `Rent`                    |
| `type`        | String | Property type (e.g., Wohnung)      |
| `minPrice`    | Number | Minimum price                      |
| `maxPrice`    | Number | Maximum price                      |
| `minSize`     | Number | Minimum area (m²)                  |
| `maxSize`     | Number | Maximum area (m²)                  |
| `minRooms`    | Number | Minimum number of rooms            |
| `maxRooms`    | Number | Maximum number of rooms            |
| `page`        | Number | Page number for pagination         |
| `limit`       | Number | Results per page                   |

---

### 🔍 Example Request

```
/api/property?search=Vienna&listingType=Buy&type=Wohnung&minPrice=300000&maxPrice=800000&minSize=80&maxSize=150&minRooms=2&maxRooms=4&page=1&limit=1
```

### 📄 Example Response

```json
{
  "properties": [
    {
      "location": {
        "city": "Pune",
        "postalCode": "411001",
        "country": "India",
        "area": "Koregaon Park"
      },
      "details": {
        "rooms": 3,
        "bathrooms": 2,
        "size_m2": 120,
        "listingType": "Buy",
        "price_eur": 135000,
        "currency": "EUR"
      },
      "_id": "687ca78c07c4dae25e49e464",
      "title": "Modern House Pune 3BHK 120m²",
      "type": "House",
      "imageUrl": "/images/house-img-5.png",
      "createdAt": "2025-07-20T08:23:40.829Z",
      "updatedAt": "2025-07-20T08:23:40.829Z",
      "__v": 0
    }
  ],
  "pagination": {
    "total": 6,
    "totalPages": 6,
    "currentPage": 1,
    "limit": 1
  }
}
```

---

## 🚀 Deployment

This project is deployed at:

👉 **Live URL:** [https://no-broker-eight.vercel.app/](https://no-broker-eight.vercel.app/)
