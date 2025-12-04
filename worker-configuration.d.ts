// worker-configuration.d.ts
declare module "*.worker" {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}

// Add Cloudflare Worker types
interface Env {
  // Add your environment variables here
  // Example: MY_VAR: string;
}

declare global {
  interface CloudflareResponseInit extends ResponseInit {
    webSocket?: WebSocket;
  }
}

export {};