const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nextjs-mysql-crud-three.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
