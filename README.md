# Dragon News API Reference

This project uses the following API endpoints.

## 1) Categories

- Endpoint: https://phi-lab-server2.vercel.app/api/v1/lab/news/categories
- Method: GET
- Description: Returns all available news categories.

## 2) All News

- Endpoint: https://phi-lab-server2.vercel.app/api/v1/lab/news
- Method: GET
- Description: Returns all news items.

## 3) Single News (News by ID)

- Endpoint: https://phi-lab-server2.vercel.app/api/v1/lab/news/{id}
- Method: GET
- Description: Returns a single news item by its ID.
- Example: https://phi-lab-server2.vercel.app/api/v1/lab/news/bcdefa0123456789bcdefa01

## 4) News by Category ID

- Endpoint: https://phi-lab-server2.vercel.app/api/v1/lab/news/category/{categoryId}
- Method: GET
- Description: Returns all news items for a specific category.
- Example: https://phi-lab-server2.vercel.app/api/v1/lab/news/category/5
