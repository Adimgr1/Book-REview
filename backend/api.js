const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS for frontend access
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

// Sample student data (20 students)
const users = [
  { id: 1, firstName: "John", lastName: "Doe", username: "johndoe" },
  { id: 2, firstName: "Jane", lastName: "Smith", username: "janesmith" },
  { id: 3, firstName: "Alice", lastName: "Johnson", username: "alicej" },
  { id: 4, firstName: "Bob", lastName: "Brown", username: "bobb" },
  { id: 5, firstName: "Charlie", lastName: "Davis", username: "charlied" },
  { id: 6, firstName: "David", lastName: "Lee", username: "davidl" },
  { id: 7, firstName: "Eva", lastName: "Wang", username: "evaw" },
  { id: 8, firstName: "Frank", lastName: "Miller", username: "frankm" },
  { id: 9, firstName: "Grace", lastName: "Lee", username: "gracel" },
  { id: 10, firstName: "Hannah", lastName: "White", username: "hannahw" },
  { id: 11, firstName: "Isaac", lastName: "Hall", username: "isaach" },
  { id: 12, firstName: "Jack", lastName: "King", username: "jackk" },
  { id: 13, firstName: "Katherine", lastName: "Moore", username: "katm" },
  { id: 14, firstName: "Liam", lastName: "Walker", username: "liamw" },
  { id: 15, firstName: "Mia", lastName: "Lopez", username: "mial" },
  { id: 16, firstName: "Nathan", lastName: "Scott", username: "nathans" },
  { id: 17, firstName: "Olivia", lastName: "Adams", username: "oliviaa" },
  { id: 18, firstName: "Paul", lastName: "Evans", username: "paule" },
  { id: 19, firstName: "Quinn", lastName: "Wilson", username: "quinnw" },
  { id: 20, firstName: "Ryan", lastName: "Thomas", username: "ryant" },
];

// Home Route - JSON Response
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Student API!",
    endpoints: {
      users: "/api/users",
    },
  });
});

// API Endpoint - Get Paginated User Data
app.get("/api/users", (req, res) => {
  const { limit = 5, page = 1 } = req.query;

  // Convert limit and page to integers
  const pageNumber = parseInt(page, 10) || 1;
  const pageLimit = parseInt(limit, 10) || 5;

  // Calculate pagination start and end index
  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  // Paginate the user data
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Prepare response
  const response = {
    data: paginatedUsers,
    currentPage: pageNumber,
    totalPages: Math.ceil(users.length / pageLimit),
    totalUsers: users.length,
  };

  res.json(response);
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
