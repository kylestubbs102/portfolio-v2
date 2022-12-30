import sendgrid from "@sendgrid/mail";
import { Request, Response } from "express";
import { EmailData } from "../../types/Email";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./sendgrid.env" });
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function sendEmail(req: Request, res: Response) {
  try {
    if (req.method === "POST") {
      let body = req.body as EmailData;
      await sendgrid
        .send({
          to: "kylestubbs102@gmail.com",
          from: "kylestubbs102@gmail.com",
          subject: `Portfolio Contact email from ${body.name}`,
          html: `<div>Name: ${body.name}</div>
            <div>Email: ${body.email}</div>
            <div>Message: ${body.message}</div>`,
        })
        .then(() => console.log("Email sent successfully"))
        .catch((e) => console.log(e));

      res.status(200);
      res.end();
    } else {
      res.status(405);
      res.end();
    }
  } catch (err) {
    res.status(500).json("Error occurred while sending email.");
    res.end();
  }
}
