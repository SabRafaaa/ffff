import { Hono } from "hono";

// Define the Env interface or type according to your environment bindings
interface Env {
  // Add your environment bindings here, for example:
  // MY_VARIABLE: string;
}

const app = new Hono<{ Bindings: Env }>();

export default app;
