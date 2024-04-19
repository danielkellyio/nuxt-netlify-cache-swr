import { setHeaders, getQuery } from "h3";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  setHeaders(event, {
    "Cache-Control": "public, max-age=0, must-revalidate", // Tell browsers to always revalidate
    "Netlify-CDN-Cache-Control":
      "public, max-age=0, stale-while-revalidate=31536000", // Tell Edge to cache asset for up to a year
  });
  return {
    time: new Date(),
    query,
  };
});
