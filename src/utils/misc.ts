import { environment } from "../config";

export const isProd = () => environment === "production";
