const express = require('express');
const { authenticateToken, authorizationRole } = require('./auth.js');

const router = express.Router();

router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: "Profile data", user: req.user });
});

router.get('/admin', authenticateToken, authorizationRole('admin'), (req, res) => {
    res.json({ message: "Admin data" });
});

router.get('/editor', authenticateToken, authorizationRole('editor'), (req, res) => {
    res.json({ message: "Editor data" });
});

router.get('/viewer', authenticateToken, authorizationRole('viewer'), (req, res) => {
    res.json({ message: "Viewer data" });
});

module.exports = router;
