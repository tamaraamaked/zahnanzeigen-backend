// backend/src/routes.js

const express = require('express');
const router = express.Router();

// Dummy-Daten für Zahnärzte
const zahnaerzte = [
  { id: 1, name: "Dr. Müller", ort: "Berlin" },
  { id: 2, name: "Dr. Schmidt", ort: "Hamburg" },
  { id: 3, name: "Dr. Meier", ort: "München" }
];

// GET-Endpunkt für /api/zahnaerzte
router.get('/api/zahnaerzte', (req, res) => {
  res.json(zahnaerzte);
});

module.exports = router;

