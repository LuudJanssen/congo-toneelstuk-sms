import { messagebirdInstance } from "./messagebird.js";
import util from "util";

console.log("test");

const originator = "KittyFit";
const body =
  "Hey KittyFit gebruiker! We zien dat je vrienden hard aan het sporten zijn. Wil je de prestaties van je vrienden gisteravond bekijken? google.com";
const recipients = ["31642456734", "31658950976", "31639779632"];

messagebirdInstance.messages.create(
  {
    originator,
    body,
    recipients
  },
  (error, data) => {
    if (error) {
      throw error;
    }

    console.log(data);
  }
);
