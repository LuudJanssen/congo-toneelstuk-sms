import Papa from "papaparse";
import { content } from "../resources/demos.js";

export function readNumbers() {
  console.log(content);
  return Papa.parse(content);
}
