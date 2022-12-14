const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://devicemanager.mretamozo.com"
    : "http://localhost:3000";

export default baseUrl;


