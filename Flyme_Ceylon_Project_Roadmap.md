# Flyme Ceylon — Project Roadmap

Full breakdown of every step from initial brief to launch, organized so each section below maps to a Trello list and each line to a card. Pulled from the BRD, the resume framing, and everything discussed so far.

Status as of this doc: requirements/discovery stage, no code written yet.

---

## 1. Discovery & requirements

- Schedule discovery workshop with the founder
- Confirm how bookings are currently handled (phone, WhatsApp, in person, or other)
- Confirm fleet size, pilot count, and number of departure locations
- Confirm pricing structure (per person vs per flight, group rates) and currency requirements
- Confirm cancellation and refund policy, especially for weather-related cancellations
- Confirm whether scenic flights are shared between strangers or private charter only
- Confirm passenger data requirements (weight limits for helicopter tours, ID/passport needs)
- Confirm what "wallet pass" means — Apple/Google Wallet integration or a PDF ticket
- Confirm business enquiry workflow needs (simple form vs quoting/follow-up process)
- Confirm who manages bookings day to day and what reporting the founder wants
- Confirm whether social media/marketing is in scope for this engagement or separate
- Confirm budget range and target launch date
- Confirm existing brand assets (logo, domain, photography, video)
- Finalize and get sign-off on the BRD
- Prioritize features using MoSCoW and lock MVP scope

## 2. UX & design

- Build user personas (tourist booking a flight, corporate enquirer, admin staff)
- Map customer journeys for booking, enquiry, and admin flows
- Build sitemap and information architecture for the site and portal
- Design low-fidelity wireframes: homepage, tour listing, tour detail, checkout, admin calendar
- Internal review of wireframes
- Build a high-fidelity interactive prototype in Figma, prioritizing the booking flow
- Present prototype to the founder and gather feedback
- Revise prototype based on feedback
- Get client sign-off on final design before development starts

## 3. Technical planning

- Confirm tech stack: React frontend, backend framework, database
- Select payment gateway (e.g. Stripe, PayHere, PayPal) based on client's tourist customer base
- Decide wallet pass approach: Apple/Google Wallet API vs generated PDF ticket
- Draw up system architecture (frontend, backend, database, third-party integrations)
- Define API contract: availability, bookings, payments, enquiries, admin
- Define data model: tours, bookings, customers, availability, admin users
- Set up Git repo, branching strategy, and code review process
- Set up CI/CD pipeline
- Choose hosting/infrastructure provider

## 4. Frontend development (JavaScript / React)

- Scaffold the React project and component structure
- Build homepage and tour listing pages
- Build tour detail pages (pricing, duration, what's included)
- Build booking flow UI: tour, date/time, and passenger selection
- Build checkout and payment UI
- Build booking confirmation page
- Build responsive/mobile styling across all pages
- Build the business enquiry form UI
- Build the admin dashboard UI (availability calendar, bookings list, refunds)
- Integrate frontend with backend APIs

## 5. Backend & API development

- Set up backend project and database schema
- Build availability API (open slots per tour and date)
- Build booking creation API
- Integrate payment gateway API
- Build confirmation email service, including ticket/wallet pass generation
- Build enquiry submission and routing API
- Build admin APIs: manage availability, view bookings, process refunds
- Implement authentication and role-based access for admin users
- Set up logging and error handling

## 6. Testing & QA

- Write unit tests for core booking logic
- Test payment flow end-to-end in sandbox mode
- Cross-browser and cross-device testing of the booking flow
- Test confirmation email and wallet pass/ticket delivery
- Load-test availability and booking endpoints for peak demand
- Run user acceptance testing (UAT) with the founder and staff
- Fix bugs found during UAT
- Security review of payment handling and passenger data storage

## 7. Launch

- Set up the production environment
- Migrate or seed initial tour and availability data
- Run a final go-live checklist
- Launch the marketing website and booking portal
- Monitor system closely during the first week post-launch
- Set up analytics and conversion tracking

## 8. Phase 2 (post-MVP)

- Build the business enquiry portal / lightweight CRM
- Plan and produce social media ad creative for Facebook, Instagram, and TikTok
- Launch and manage paid social campaigns
- Set up ongoing reporting for the founder (bookings, revenue, no-shows)
- Assess whether a native mobile app is actually justified by demand
