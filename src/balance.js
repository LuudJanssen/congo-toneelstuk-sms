import { messagebirdInstance } from "./messagebird.js";

messagebirdInstance.balance.read((error, data) => {
  if (error) {
    throw error;
  }

  console.log(data);
});
