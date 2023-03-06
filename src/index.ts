import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const handler = async (_request: Request): Promise<Response> => {
  const res = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/json",
    },
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);
