import { Router } from "express";
import {
  createTicket,
  deleteTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
} from "../controllers/ticket.controller.js";

const router = Router();

router.route("/create-ticket").post(createTicket);
router.route("/").get(getAllTickets);
router.route("/:ticketId").get(getSingleTicket);
router.route("/:ticketId").patch(updateTicket);
router.route("/:ticketId").delete(deleteTicket);

export default router;
