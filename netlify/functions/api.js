import serverless from "serverless-http";
import app from "../../app.js";

const normalizedApp = typeof app === "function" ? app : app?.default;

if (typeof normalizedApp !== "function") {
	throw new Error("Express app export is invalid for Netlify function.");
}

export const handler = serverless(normalizedApp);
