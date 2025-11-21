import { Contact } from "../models/contact-models.js";

export const postContactFormPage = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};
