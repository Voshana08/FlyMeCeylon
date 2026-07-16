# Flyme Ceylon

Docs and, eventually, code for Flyme Ceylon's booking platform — a scenic flight tour company based in Sri Lanka.

## Where this is at

Planning is done, and there's now a first code skeleton: a React frontend and a Python (FastAPI) backend that can talk to each other. Nothing real is built yet, this is just proof that the two sides connect, before actual features get layered on. Real feature scope still depends on locking things down with the client.

## What's here

- `Flyme_Ceylon_BRD.pdf` — the business requirements document. Covers the client's business model, what they've asked for, gaps in the original brief (there was no admin system in it, for one), open questions still needing answers, and the proposed MVP scope.
- `Flyme_Ceylon_Project_Roadmap.md` — every task from discovery through launch, broken into phases.
- `Flyme_Ceylon_Trello_Import.csv` — the same task list, formatted to drop into a Trello board.
- `frontend/` — the React app (JavaScript, built with Vite).
- `backend/` — the Python API (FastAPI).

## Running this locally

You'll need Node.js and Python 3 installed.

**Backend:**
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
This starts the API at `http://127.0.0.1:8000`. Visit that URL directly in a browser, you should see `{"status":"Flyme Ceylon API is running"}`.

**Frontend** (in a second terminal tab, backend needs to stay running):
```
cd frontend
npm install
npm run dev
```
This prints a local URL, usually `http://localhost:5173`. Open it, and the page should say "Backend says: Hello from the Python backend" — meaning the two sides successfully talked to each other.

Note: if `frontend/node_modules` already exists and `npm run dev` misbehaves, delete that folder first and re-run `npm install`. It was generated inside a sandboxed environment while building this out and may not be clean.

## The project, briefly

Flyme Ceylon runs scenic flight tours over Colombo, Sri Pada (Adam's Peak), the Galle coast, and short helicopter rides. Six months old, no booking system yet, running everything manually. They want a website, an online booking portal, a way for corporate clients to enquire about group flights, and help with social ads.

## Planned stack

Nothing's locked in yet, but the direction is React on the frontend with a REST API backend, a payment gateway that works for international tourist cards, and some form of digital ticket or wallet pass on booking confirmation. Final calls depend on the discovery conversation with the founder.

## Next up

Discovery workshop with the client, lock MVP scope, then wireframes and an interactive prototype before any development starts.
