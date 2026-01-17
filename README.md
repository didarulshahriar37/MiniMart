Task Overview
Build a simple application using Next.js 15/16 (App Router). The application will include public pages and optionally protected pages with a basic authentication mechanism. 

Core Features to Build
2. Authentication
Protect routes for unauthenticated users
Optional (Highly Recommended): Use NextAuth.js for social (Google) or credential login
3. Item List Page
Publicly accessible
Fetch and show a list of items from an Express Server API/JSON.
Each item card should will include item’s properties such as the name, description, price, and an image or others
4. Item Details Page
Show full details of a single product
Publicly accessible
5. Optional Requirement: Protected Page: Add Item
Only accessible when logged in
A form to add a new item and store the item data in database
Store item data via the Express.js server
Redirect unauthenticated users appropriately
Additional Enhancements
Toast notification on successful product creation (If added this feature)
README.md including:
Short project description
Setup & installation instructions
Route summary
List of implemented features
Brief explanation of features
Technologies to Use
Next.js 15/16 (App Router)
Express.js API / JSON for fetching and managing product data
Any styling solution (Tailwind, CSS Modules, etc.)