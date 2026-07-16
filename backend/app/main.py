"""
Flyme Ceylon API — the Python backend.

This is the very first version of the API. Right now it does one thing:
answers a "hello" request so we can prove the React frontend and this
Python backend can actually talk to each other. Real endpoints (tours,
availability, bookings) get added on top of this once the skeleton works.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# This is the actual application object. Every route we add below gets
# attached to this `app` variable. Uvicorn (the server that runs this file)
# looks for a variable named `app` by default, which is why the name matters.
app = FastAPI(title="Flyme Ceylon API")

# --- CORS setup ---
# CORS stands for Cross-Origin Resource Sharing. Browsers block a webpage
# running on one address (e.g. http://localhost:5173, where React runs)
# from making requests to a different address (e.g. http://localhost:8000,
# where this API runs) unless the API explicitly says "this origin is
# allowed." Without this block, the React app's fetch() calls to this API
# would fail silently with a CORS error in the browser console.
origins = [
    "http://localhost:5173",  # Vite's default dev server address
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Routes ---
# The @app.get(...) line above the function is a "decorator." It tells
# FastAPI: "when someone sends a GET request to this URL, run the function
# below and send back whatever it returns." FastAPI turns the returned
# Python dictionary into JSON automatically.

@app.get("/")
def read_root():
    return {"status": "Flyme Ceylon API is running"}


@app.get("/api/hello")
def say_hello():
    return {"message": "Hello from the Python backend"}
