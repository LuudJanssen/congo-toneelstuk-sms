import { messagebirdInstance } from "./messagebird.js";
import { readNumbers } from "./read-numbers.js";
import _ from "lodash";

const numbers = readNumbers().data.map(([number, name]) => ({
  number: number.replace(/[\s\+]/g, ""),
  name
}));

const numberChunks = _.chunk(numbers, 50);

numberChunks.forEach(numberSet => {
  const originator = "KittyFit";
  const body =
    "Hey KittyFit gebruiker! We zien dat je vrienden hard aan het sporten zijn. Wil je de prestaties van je vrienden gisteravond bekijken? google.com";
  const recipients = numberSet.map(({ number }) => number);

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
});
