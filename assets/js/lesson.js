export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS handling
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    try {
      // Handle request to /lesson2.json
      if (path === "/lesson2.json" && request.method === "GET") {
        const lessonUrl = "https://raw.githubusercontent.com/mypages090309-ops/tesdanc2/main/assets/json/lesson2.json";
        
        // Fetch lesson2.json from GitHub
        const response = await fetch(lessonUrl);
        
        if (!response.ok) {
          return json({ error: "Failed to fetch lesson2.json" }, 500);
        }

        const data = await response.json();
        return json(data);
      }

      return json({ error: "Not Found" }, 404);

    } catch (err) {
      return json({ error: err.message }, 500);
    }

    // Helper function to send JSON response
    function json(data, status = 200) {
      return new Response(JSON.stringify(data), {
        status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"  // Enable CORS
        }
      });
    }
  }
};