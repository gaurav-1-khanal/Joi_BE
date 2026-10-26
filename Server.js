import express from 'express';
import { validateSignup } from './middleware/middleware.js'; 

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/signup', validateSignup, (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    success: true,
    message: 'User signed up successfully!',
    user: { name, email }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});