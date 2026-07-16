// useState and useEffect are "hooks" — functions React gives you to add
// behavior to a component. useState lets a component remember a value
// between renders. useEffect lets a component run code in response to
// something (here, running once when the component first appears).
import { useState, useEffect } from "react";
import "./App.css";

// The address of our Python backend. It's a plain constant for now.
// Later, this would move into an environment variable so it can change
// between local development and a real deployed server.
const API_BASE_URL = "http://127.0.0.1:8000";

// This is a React "function component." In React, a component is just a
// JavaScript function that returns some markup (JSX — it looks like HTML,
// but it's actually JavaScript under the hood). React calls this function
// every time it needs to draw (or redraw) this piece of the page.
function App() {
  // `message` holds whatever the backend sends us. `setMessage` is the
  // only way to change it. Calling setMessage tells React "this component's
  // data changed, please redraw it" — you never edit `message` directly.
  const [message, setMessage] = useState(null);

  // `status` tracks whether we're still waiting on the backend, got a
  // reply, or hit an error. Useful for showing the person something
  // sensible instead of a blank page while we wait.
  const [status, setStatus] = useState("loading");

  // useEffect with an empty array `[]` as its second argument means:
  // "run this function once, right after the component first appears on
  // screen, and never again." That's exactly what we want for "go fetch
  // something from the server when the page loads."
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/hello`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Backend responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Could not reach the backend:", error);
        setStatus("error");
      });
  }, []);

  return (
    <div className="app">
      <h1>Flyme Ceylon</h1>
      <p className="subtitle">Frontend (React) talking to backend (Python)</p>

      <div className="status-box">
        {status === "loading" && <p>Waiting on the backend...</p>}

        {status === "success" && (
          <p>
            Backend says: <strong>{message}</strong>
          </p>
        )}

        {status === "error" && (
          <p className="error">
            Couldn't reach the backend. Is it running on port 8000?
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
