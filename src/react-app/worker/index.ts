import { Hono } from "hono";

type Env = {
  // Define your environment bindings here
};

const app = new Hono<{ Bindings: Env }>();

export default app;