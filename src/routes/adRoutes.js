const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad'); // 👈 Dein Mongoose-Modell

// POST /ads - Neue Anzeige erstellen
router.post('/ads', async (req, res) => {
  try {
    const ad = new Ad(req.body); // 👈 Nimmt die Anzeige aus der Anfrage
    await ad.save();             // 👈 Speichert sie in MongoDB
    res.status(201).json(ad);    // 👈 Gibt die gespeicherte Anzeige zurück
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Fehler beim Erstellen der Anzeige' });
  }
});

// GET /ads - Alle Anzeigen abrufen
router.get('/ads', async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Anzeigen' });
  }
});

module.exports = router;

