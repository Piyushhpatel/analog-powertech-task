import { Ticket } from "../models/ticket.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const createTicket = asyncHandler(async (req, res) => {
  const {title, description} = req.body;
  
  if(!title || !description) {
    throw new ApiError(401, "All Fields are required");
  }

  const ticket = await Ticket.create({
    title,
    description
  })

  if(!ticket) {
    throw new ApiError(500, "Unable to create the ticket")
  }

  return res.status(201).json(
    new ApiResponse(200, ticket, "Ticket Created Successfully")
  )
});

const getAllTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find();

  if(!tickets) {
    throw new ApiError(404, "No tickets found");
  }

  return res.status(200).json(
    new ApiResponse(200, tickets, "All tickets fetched successfully")
  )
});

const getSingleTicket = asyncHandler(async (req, res) => {
  const {ticketId} = req.params;

  const ticket = await Ticket.findById(ticketId);

  if(!ticket) {
    throw new ApiError(404, "Not ticket with given Id exist");
  }

  return res.status(200).json(
    new ApiResponse(200, ticket, "Ticket Fetched Exist")
  )
});

const updateTicket = asyncHandler(async (req, res) => {
  const {ticketId} = req.params;
  const {title, description, status} = req.body;

  const ticket  = await Ticket.findById(ticketId);
  
  if(!ticket) {
    throw new ApiError(404, "No ticket with id found");
  }

  ticket.title = title || ticket.title;
  ticket.description = description || ticket.description;
  ticket.status = status || ticket.status;

  await ticket.save({validateBeforeSave: false});

  return res.status(200).json(
    new ApiResponse(200, ticket, "Ticket Update Successfully")
  )
});

const deleteTicket = asyncHandler(async (req, res) => {
  const {ticketId} = req.params;

  const ticketDeleted = await Ticket.findByIdAndDelete(ticketId);

  if(!ticketDeleted){
    throw new ApiError(500, "Unable to delete ticket");
  }

  return res.status(200).json(
    new ApiResponse(200, "Ticket deleted successfully")
  )

});

export {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  deleteTicket,
};
