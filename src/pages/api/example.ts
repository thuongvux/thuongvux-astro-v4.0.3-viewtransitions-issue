// src/api/example.ts
export const prerender = false;
import type { APIContext, APIRoute } from "astro";

export const GET: APIRoute = async (context: APIContext) => {
  return new Response(
    JSON.stringify({
      message: "this is a GET",
    }),
  );
};

export const POST: APIRoute = async (context: APIContext) => {
  return new Response(
    JSON.stringify({
      message: "this is a POST",
    }),
  );
};
