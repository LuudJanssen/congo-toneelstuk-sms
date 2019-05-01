import { messagebirdApiKey } from "../config/messagebird-live.js";
import messagebird from "messagebird";

export const messagebirdInstance = messagebird(messagebirdApiKey);
