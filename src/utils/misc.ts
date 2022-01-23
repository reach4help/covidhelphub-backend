import { environment } from "../config/environment";

export const isProd = () => environment === "production";
