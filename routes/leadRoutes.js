
const express = require('express');

const {
    createLead,
    getLeads,
    updateLead,
    deleteLead,
    getLeadStats,
    getRecentLeads,
    addNoteToLead
} = require('../controllers/leadController');

const router = express.Router();

router.post("/", createLead);

router.get("/", getLeads);

router.get("/stats", getLeadStats);

router.get("/recent", getRecentLeads);
router.post("/:id/notes", addNoteToLead);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

module.exports = router;