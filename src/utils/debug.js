export const debugLog = (page, message, data = null) => {
  console.log(
    `%c[ACCIO DEBUG] ${page}: ${message}`,
    "color: #2563eb; font-weight: bold;",
    data || ""
  );
};
