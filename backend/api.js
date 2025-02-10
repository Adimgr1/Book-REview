const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for frontend access
app.use(cors());

// Sample user data (in a real scenario, you would fetch this from a database)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { id: 6, name: 'David Lee', email: 'david.lee@example.com' },
  { id: 7, name: 'Eva Wang', email: 'eva.wang@example.com' },
  { id: 8, name: 'Frank Miller', email: 'frank.miller@example.com' },
  { id: 9, name: 'Grace Lee', email: 'grace.lee@example.com' },
  { id: 10, name: 'Hannah White', email: 'hannah.white@example.com' },
  // Add more data as needed
];

// Pagination API Endpoint
app.get('/api/users', (req, res) => {
  const { limit = 5, page = 1 } = req.query;

  // Convert limit and page to integers
  const pageNumber = parseInt(page, 10) || 1;
  const pageLimit = parseInt(limit, 10) || 5;

  // Calculate the starting index for the data slice
  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  // Paginate the users data
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Prepare response object
  const response = {
    data: paginatedUsers,
    currentPage: pageNumber,
    totalPages: Math.ceil(users.length / pageLimit),
    totalUsers: users.length,
  };

  // Send response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
