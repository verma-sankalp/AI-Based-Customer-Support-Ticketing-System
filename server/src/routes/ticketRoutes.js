const router = require("express").Router();
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket
} = require("../controllers/ticketController");

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:id", getTicketById);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
