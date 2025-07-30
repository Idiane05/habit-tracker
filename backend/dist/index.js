"use strict";
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(cors());
// app.use(express.json());
// // Simple test route
// app.get('/api/ping', (req, res) => {
//   res.json({ message: 'Habit Tracker backend is running!' });
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({ message: 'Habit Tracker backend is running!' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
