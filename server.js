const express = require('express');
const app = express();

const statusMessages = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: The request has succeeded and a new resource has been created as a result.",
  204: "No Content: The server successfully processed the request, but is not returning any content.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: The request requires user authentication.",
  403: "Forbidden: The server understood the request, but refuses to authorize it.",
  404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
  405: "Method Not Allowed: The request method is known by the server but has been disabled and cannot be used.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time ('rate limiting').",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is currently unable to handle the request due to a temporary overload or scheduled maintenance.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};


app.get('/status-code', (req, res) => {
  const code = parseInt(req.query.code); 

  if (statusMessages[code]) {
    return res.json({
      status: code,
      message: statusMessages[code]
    });
  } else {
    return res.status(400).json({
      error: "Invalid or unsupported status code."
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
