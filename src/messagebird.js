import { messagebirdApiKey } from "../config/messagebird-test.js";
import messagebird from "messagebird";

export const messagebirdInstance = messagebird(messagebirdApiKey);
