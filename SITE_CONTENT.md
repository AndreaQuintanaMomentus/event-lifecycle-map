# Momentus Event Lifecycle Map — Full Content Reference

_Auto-generated from `index.html` — do not hand-edit. Regenerate with `cd tools && node extract-content.js` after changing the map._

This document is a complete, plain-text mirror of every piece of content in the Event Lifecycle Map: personas, primary objects, North Star metrics, and the full Jobs-to-Be-Done map. It exists so any coworker can ask an LLM (e.g. a Claude Project loaded with this file) detailed questions about the map's content without needing to open or screenshot the live site. For how the map is *structured* — the schema, naming conventions, and where new content belongs — see `ARCHITECTURE.md` instead.

## The Four Layers

The map has four layers, always in this order: Semantic → Human → Innovation → Strategy.

**Semantic Layer**: Built on Rosenberg's Semantic Interaction Design and Barry Smith's formal ontology. Defines the primary objects in the system — Booking, Plan, Event Work, and Event — using three attribute types: *Fixed Conditions* (permanent properties), *Dynamic States* (mutable while in use), and *Structural Status* (role and position in the system). Each object is described through the CRUD actions it supports.

**Human Layer**: Built on the Ontological Persona Definition framework. Defines three personas — the Sales Manager, the Event Planner, the Operations Director — through their relationship to domain objects, not demographics. Each persona is mapped to the same Fixed / Dynamic / Structural attribute axes as the objects they act on.

**Innovation Layer**: Built on Ulwick's Jobs to Be Done (JTBD) and Outcome-Driven Innovation (ODI) frameworks. Maps primary jobs across 8 lifecycle stages for each persona. Each cell contains 3 desired outcome statements structured as: Direction + Metric + Object + Contextual Clarifier — identifying where value is being delivered or left on the table.

**Strategy Layer**: Built on the Amplitude North Star Playbook. Defines a North Star Metric for each product area — Momentus Opportunities (MO), Momentus Plans (MP), Momentus Work (MW), Momentus Events (ME) — and maps five input metrics: *active user metric* (Adoption), *feature usage metric* (Engagement), *return rate metric* (Retention), *time to value metric* (Efficiency), and *task success metric* (Effectiveness).

## Personas (Human Layer)

### Sales Manager ("The Dream Catcher")

**Product area:** Event Sales  
**Primary object:** Event Opportunity  
**Quote:** "They decide what’s worth making."  
**Interaction grammar:** Event Opportunity · Product · Create — *Secure a booking*

#### Fixed Conditions

- Their personality is hospitality-driven and relationship-first — may lean revenue-maximizing or mission-driven depending on venue type
- They have a background in hospitality, sales, or venue management
- They are skilled in pipeline management, space pricing, and contract negotiation

#### Dynamic States

- From slow, manual lead triage → to quickly qualifying the right fit and closing the contract
- From dark calendar days → to maximized space utilization with the right event mix
- From gut-based pricing → to rate decisions that win the deal while covering costs and margin

#### Structural Status

- Calendar gatekeeper — most leads are inbound ("farmers"), not hunted; the job is triaging the right ones efficiently
- Accountable to leadership for revenue and utilization targets
- Sets space rental rates to maximize revenue without losing the deal — the venue’s primary interface with the outside market
- Responsible for their own sales performance reporting; in larger venues, a dedicated analyst may own this

#### Vertical-specific variants of Sales Manager

##### Arts & Culture: Rentals Sales Coordinator ("The Revenue Generator")

**Fixed Conditions**
- Their personality is mission-aligned and relationship-driven — they balance revenue targets with institutional values, ensuring events fit the cultural identity of the venue
- They have a background in hospitality or cultural institutions, and may be relatively new to formal events software
- They are skilled in managing venue rental sales alongside internally-produced programming within a shared, multi-stakeholder calendar

**Dynamic States**
- From informal lead intake via email and voicemail → to a centralized inquiry inbox with clear triage
- From manual calendar conflict resolution with internal teams → to a shared calendar with visibility into holds and internal events
- From cumbersome contract creation in the system → to in-system contract management with integrated e-signature

**Structural Status**
- Routes go/no-go decisions through leadership (Director, Special Events) for mission and revenue alignment
- Calendar is shared with internal programming and education teams — does not have sole authority over availability
- Responsible for managing the client relationship through contract signing, then hands off to the Event Manager

##### Convention Centers: Sales Manager ("The Revenue Generator")

**Fixed Conditions**
- Their personality is highly analytical and results-driven, with deep hospitality sales expertise and an industry leader mindset
- They have a background in convention center sales, working with city bureau partners and hotel room block management within a multi-stakeholder ecosystem
- They are skilled in PACE reporting — comparing revenue booked so far this fiscal year against the same point last year to gauge booking momentum — and pipeline management, though frustrated by the manual effort required to extract usable insights from the platform

**Dynamic States**
- From hours of manual Excel manipulation for sales reporting → to automated PACE, utilization, and pipeline dashboards
- From gut-based lead prioritization → to data-driven calendar optimization factoring budget, space, and projected revenue
- From duplicative entry across Simple View, Excel, and Momentus → to a single system of record

**Structural Status**
- Manages inbound leads via email, phone, and city bureau — bureau is a key sourcing channel, not a competitor
- Accountable for PACE reporting, economic impact, and utilization targets; exports to Excel quarterly for executive review
- Coordinates hotel room blocks and third-party hotel pricing as part of the convention sales package

##### Corporate: Bookings Manager ("The Calendar Holder")

**Fixed Conditions**
- Their personality is energetic and social, early-career, treating every booking as a space-optimization puzzle rather than a revenue target
- They have a background in corporate services or administrative coordination, primarily serving internal employees rather than external paying customers
- They are skilled in managing multiple intake channels simultaneously — OSB (Online Space Booking) self-service, intake forms, and ad hoc email coordination

**Dynamic States**
- From juggling disconnected intake channels → to a centralized, automated intake workflow
- From manual workload assessment when assigning events → to system-supported assignment based on event manager capacity
- From constant back-and-forth email to gather complete details → to smart forms that capture all required info upfront

**Structural Status**
- Gates all campus event opportunities; assigns confirmed events to event managers based on workload and event type
- Not responsible for full event execution — hands off to Event Manager after the initial booking is confirmed
- Accountable for calendar accuracy and space utilization; reports on booking volume metrics, not revenue

##### Higher Ed: Booking Coordinator ("The Calendar Maximizer")

**Fixed Conditions**
- Their personality is organized, proactive, and collaborative, with moderate industry and Momentus experience
- They have a background in campus event coordination, managing competing priorities across both internal departments and external clients
- They are skilled in coordinating event schedules around academic calendars and campus constraints, including working across systems like Banner and a SIS (Student Information System)

**Dynamic States**
- From calendar blind spots caused by missing academic scheduling integration → to a unified campus-wide calendar view
- From manual approval routing with campus safety and security → to structured, system-driven approval workflows
- From self-service gaps that push simple bookings back to the events team → to smart OSB (Online Space Booking) with dynamic questions and real-time availability

**Structural Status**
- Connective tissue between external clients, internal departments, and the broader campus community
- Must coordinate event approvals with campus safety and security for compliance — a structural step absent in other verticals
- Calendar decisions must account for the academic calendar and class scheduling, not purely event-demand driven

##### Stadiums & Arenas: Private Event Sales Manager ("The Venue Maximizer")

**Fixed Conditions**
- Their personality is deeply passionate about the venue and brand, with a sports-first mindset and high industry and Momentus experience
- They have a background in sports venue sales, managing ancillary private event revenue that fills calendar gaps between sports and concert dates
- They are skilled in navigating calendar uncertainty driven by sports season holds and optimizing private event revenue within the gaps they create

**Dynamic States**
- From calendar management disrupted by sport season uncertainty → to dynamic holds that factor in league schedules and playoff outcomes
- From siloed coordination between public events and private events teams → to a shared, unified calendar across event types
- From manual intake and data entry for private events → to automated intake that creates opportunities directly from forms

**Structural Status**
- Must coordinate with Entertainment Booking Director and Hospitality Sales Manager — private events fill gaps their decisions create
- Ancillary revenue is growing in strategic importance as venues pursue 365-day-per-year operations; accountable to that target
- Sports holds are tentative by nature — must place many holds for few confirmed dates, complicating pipeline reporting

#### Secondary / adjacent personas around Sales Manager

##### Booking Manager (Arts & Culture) · "The Booking Boss"

**Relationship to Sales Manager:** Manages artist and performer bookings for presented content — a parallel booking function that operates on mission and artistic merit, not space availability.

**Fixed Conditions**
- Their personality is passionate, mission-driven, and detail-oriented, with deep arts advocacy as a former dancer and a commitment to balancing institutional mission with revenue
- They have a background in performing arts booking and programming, evaluating shows on artistic fit as well as financial terms within a presented content model
- They are skilled in artist and promoter negotiations, season planning, and cross-functional collaboration across Programming and Operations

**Dynamic States**
- From managing artist negotiations and season planning in parallel, outside the system → to integrated booking and contract management with version tracking
- From manual contract negotiation loops with no in-system tracking of offer versions → to streamlined offer management with history
- From ad hoc coordination with Finance and Operations → to a connected season-level view that links bookings to production and settlement

**Structural Status**
- Works alongside the Rental Sales Coordinator — manages presented content bookings while that role handles rentals; separate intake streams, shared calendar
- Accountable to Executive Director for mission alignment; every booking must justify itself on both artistic and financial terms
- Triggers the post-show settlement process alongside Finance — a financial close step unique to presented arts that venue rental sales does not have

##### Entertainment Booking Director (Stadiums & Arenas) · "The Main Event Booker"

**Relationship to Sales Manager:** Manages the public event calendar (concerts, shows) whose holds directly constrain the calendar gaps that private event sales can fill.

**Fixed Conditions**
- Their personality is experienced, relationship-focused, and analytical, driven by promoter partnerships and the deal-making side of entertainment booking
- They have a background in entertainment booking for stadiums and arenas, working primarily in Ticketmaster and Excel with Momentus used as a secondary calendar tool
- They are skilled in offer management, hold negotiations, settlement with promoters, and multi-show series planning — areas where current platform support falls significantly short

**Dynamic States**
- From managing 10+ holds for 1-2 potential shows entirely in Excel → to an integrated calendar with hold management, offer tracking, and settlement
- From series holds miscounted as 10 separate events in reporting → to a hold system that understands one series = one potential event
- From no historical link to past shows → to searchable past artist records with riders, requirements, and known issues

**Structural Status**
- Manages confidential holds for concerts and negotiates offer terms (space, pricing, vendors, revenue allocation) with promoters — creating the calendar constraints that private event sales must navigate
- His decisions about which dates to hold for entertainment directly determine how many calendar gaps exist for private event revenue
- Settlement is the final step of every show — currently done entirely in Excel outside Momentus; represents a major product gap

##### Hospitality Sales Manager (Stadiums & Arenas) · "The Revenue Generator"

**Relationship to Sales Manager:** Sells premium spaces (suites, boxes, clubs) by event, season, or multi-year package — an adjacent revenue stream that runs alongside private event sales.

**Fixed Conditions**
- Their personality is communicative, charismatic, and customer-focused, with a flair for selling premium hospitality experiences rather than just event space
- They have a background in corporate partnerships, sponsorship, and premium hospitality sales, managing complex multi-tier suite and box relationships
- They are skilled in high-frequency account management — handling 100+ suite configurations that can change multiple times per day — and in building long-term premium client relationships

**Dynamic States**
- From manually tracking 100+ suite changes per day → to a customer portal with self-service suite management and automated change tracking
- From managing premium space sales across multiple channels with no consolidated reporting → to a single view of suite revenue, catering, and client history
- From spending more time on low-value suite bookings → to automation for lower-cost suites that frees time for high-value VIP relationships

**Structural Status**
- Sells alongside the Private Event Sales Manager — premium space revenue runs in parallel; both fill the calendar but serve different client types and price points
- Primary driver of catering revenue on game day — satellite catering for suites and boxes is a major revenue source that must be coordinated with Catering and Ops teams
- Accounts can span hundreds of thousands of dollars over multi-year suite contracts — requires white-glove relationship management that self-service cannot fully replace

### Event Planner ("The Promise Keeper")

**Product area:** Event Planning  
**Primary object:** Event Plan  
**Quote:** "They turn intent into instruction."  
**Interaction grammar:** Event Plan · Product · Create — *Detail and distribute a function*

#### Fixed Conditions

- Their personality is extremely detail-oriented — the "everything person" across sales, ops, and client
- They have a background in event planning or hospitality — driven by delivering a great client experience
- They are skilled in gathering event requirements, translating them into instructions, and coordinating across departments

#### Dynamic States

- From fragmented client requirements → to a complete, confirmed event plan and service orders
- From reactive, last-minute coordination → to proactive engagement across sales and ops well before execution begins
- From planner-to-ops verbal briefings → to written instructions that leave no room for surprise

#### Structural Status

- Receives the confirmed booking from sales — accountable for detailing every function and service order
- Acts as project manager: confirms resource capacity with each department and manages customer alignment
- The critical translator between client vision and operational instruction — preventing lost-in-translation failures on event day
- Responsible for their own event reporting; in larger venues, a dedicated person may handle report generation

#### Vertical-specific variants of Event Planner

##### Arts & Culture: Event Manager ("The Dedicated Detailer")

**Fixed Conditions**
- Their personality is community-relationship driven, motivated by turning today’s rental clients into future supporters and donors of the institution
- They have a background in event management focused on venue rentals, receiving post-contract handoffs from Sales and managing through execution and close
- They are skilled in managing event logistics across multiple tools — including Momentus, Word, Excel, Social Tables, and Caterease — without a single system of record

**Dynamic States**
- From event detailing split across Momentus and external planning tools → to centralized detailing in-system
- From post-event data gaps that live outside the system → to systematic outcome tracking that feeds future events
- From handoff friction from sales with missing context → to structured handoffs with complete event history attached

**Structural Status**
- Receives the confirmed rental contract from the Sales Coordinator; accountable for all logistics through execution and post-event close
- Must coordinate with Marketing, Finance, and Operations across three teams that are largely outside the system
- Manages both day-of execution AND post-event client follow-up — relationship continuity for repeat business is part of the role

##### Convention Centers: Event Coordinator ("The Dedicated Detailer")

**Fixed Conditions**
- Their personality is adaptive and detail-oriented, a rapid learner navigating a high-complexity convention environment early in their career
- They have a background in event coordination for large-scale conventions, managing the most data-intensive event environment of any vertical
- They are skilled in coordinating across multiple communication and planning channels simultaneously, despite the cross-tool burden that defines their daily workflow

**Dynamic States**
- From 90+ hours of manual data entry per large event → to automated event spec ingestion from external sources
- From reports too poorly formatted to share with clients → to polished, presentable event documents
- From manual payment collection via mailed checks → to automated self-service payment portal

**Structural Status**
- Manages exhibitor service centers for conventions — a distinct layer of complexity not present in other verticals
- Accountable for invoice creation and payment collection post-event — this role owns the financial close in this vertical
- Coordinates with partner catering company, internal AV (Audio/Visual), and security — more external vendor relationships than any other vertical

##### Corporate: Event Manager ("The Client Collaborator")

**Fixed Conditions**
- Their personality is detail-oriented and hospitality-focused, with 5 years of experience delivering white-glove service to internal corporate employees
- They have a background in corporate event management and hospitality, with a preference for real-time collaborative planning tools and client co-creation
- They are skilled in managing events under constant change — corporate requests shift frequently and require rapid, well-communicated updates at every step

**Dynamic States**
- From time-consuming data entry that steals focus from hospitality → to streamlined event detailing with automation
- From constant manual re-entry for every change request → to structured change management with an audit trail
- From report formats that must be reformatted before sharing → to polished, immediately-shareable event orders

**Structural Status**
- Receives events from Bookings Manager after initial intake — not responsible for lead intake or contracting
- Coordinates F&B (Food & Beverage), AV (Audio/Visual), and Facilities as separate departmentalized teams — more siloed than in other verticals
- Reports up to Event Management Lead who tracks team utilization and performance analytics

##### Higher Ed: Event Coordinator ("The Client Collaborator")

**Fixed Conditions**
- Their personality is communication-first — they spend more time coordinating people across teams than building event details
- They have a background in higher education event coordination, managing both internal campus events and external client events within a dual-constituency environment
- They are skilled in managing structured handoff workflows — coordinating upstream with Booking and downstream with Operations and Finance within a CES (Conference & Event Services) team structure

**Dynamic States**
- From endless email chains to gather approvals and coordinate internal teams → to automated notifications and task triggers
- From manual follow-up at every step to keep teams aligned → to workflow automation that handles routine coordination
- From outdated Momentus workflows that don’t match how the team actually works → to intuitive, role-specific task flows

**Structural Status**
- Must get approval from campus, client, AND operations — a three-way approval structure unique to the higher ed context
- Accountable for tracking and reporting on the event including financial actuals and post-event reconciliation
- Works upstream from Registration Manager for events with attendee registration — a distinct dependency not present in other verticals

##### Stadiums & Arenas: Special Events Manager ("The Client Collaborator")

**Fixed Conditions**
- Their personality is Type A — high-energy and detail-driven, with 7 years of sports and hospitality experience and the deepest Momentus fluency in the vertical
- They have a background in sports and entertainment venue event management, working in complex spaces where standard instruction sets often don’t exist for every event type
- They are skilled in end-to-end event management, from initial detailing through post-event invoicing and financial close of the private event lifecycle

**Dynamic States**
- From confusing, time-consuming detailing without instruction sets → to streamlined function and order entry with complex-event support
- From static PDF manifests that go out of date the moment a change happens → to living, mobile-accessible event plans
- From coordinating with third-party catering outside the system → to integrated partner coordination in-platform

**Structural Status**
- Must coordinate with Operations Supervisor who manually translates event details into Event Work — a translation gap not addressed in-system
- Contracts with third-party catering companies (e.g., Legends) rather than internal F&B (Food & Beverage) — a vendor layer absent in other verticals
- Bridges private events and game day operations — aspires to eventually migrate game day workflow into Momentus

#### Secondary / adjacent personas around Event Planner

##### Program Coordinator (Arts & Culture) · "The Content Curator"

**Relationship to Event Planner:** Plans and produces season content — programs, artists, and performances — rather than managing venue bookings; a content-first planning role that parallels event management.

**Fixed Conditions**
- Their personality is mission-driven and creative, a multi-hat wearer who views themselves as a content curator rather than an event planner
- They have a background in music and performing arts programming, managing artist relationships and season content alongside the full logistical production of each show
- They are skilled in season programming, artist coordination, and content production — but currently limited by siloed tool adoption across Marketing and Operations

**Dynamic States**
- From managing date holds and artist contracts across Word, Excel, and Outlook → to integrated season planning with cross-functional collaboration inside the platform
- From parallel, ad hoc coordination with Booking Manager and Operations → to a connected season view where content, bookings, and production logistics are linked
- From building program collateral (artist bios, show notes, 400+ scrolling options in Elite) manually → to a streamlined content production workflow with better search and filtering

**Structural Status**
- Partners with the Booking Manager for season planning and Venue Manager for space logistics — sits at the intersection of content and operations
- Responsible for artist contracts, program collateral, and execution of show content during the run — a content accountability layer absent in other verticals
- Manages cross-functional coordination for Marketing and Operations without being able to bring them into the system; relies on email and ad hoc meetings

##### Event Management Lead (Corporate) · "The Events Oversight"

**Relationship to Event Planner:** Manages the event management team and tracks performance — adds a team leadership and analytics layer above the individual event coordinator role.

**Fixed Conditions**
- Their personality is analytical and strategic, bringing 10+ years of hotel and corporate events experience to a team leadership role focused on performance rather than individual event delivery
- They have a background in hotel and corporate event management, now focused on team performance and the balance between maximizing space utilization and maintaining staff satisfaction
- They are skilled in analytics and event performance reporting, though currently spending up to 40 hours per reporting cycle manually consolidating data from four separate sources

**Dynamic States**
- From spending 40 hours manually collecting and merging reports from 4 sources → to automated, consolidated performance reporting out of Momentus
- From no best practice from Momentus on what or how to report for corporate → to a defined reporting standard and user-based dashboard for the corporate context
- From reactive management of team workload → to a centralized calendar view of team assignments and capacity

**Structural Status**
- Manages the event management team — her assignment decisions directly affect how events are handled and at what quality level
- Reports to the Director of Events Experience — that role is the conduit between individual event execution and strategic program reporting
- Accountable for utilization, attendee counts, event breakdowns, and budget forecasts across all events on campus

##### Registration Manager (Higher Ed) · "The Registration Rockstar"

**Relationship to Event Planner:** Manages the full conference registration lifecycle — a parallel planning workflow that runs alongside event coordination for any event with attendee sign-up.

**Fixed Conditions**
- Their personality is detail-oriented, client-focused, and process-driven, with moderate industry and Momentus experience
- They have a background in conference registration management within higher education, working in a CES (Conference & Event Services) context where clients expect real-time data access
- They are skilled in end-to-end registration workflows — managing capacity control, waitlists, payments, scholarship tracking, and attendee communication in parallel with event planning

**Dynamic States**
- From dated registration UX with product gaps that force workarounds → to a modern platform with group registration, promo codes, split payments, and real-time client access
- From manually sharing registrant data with clients via export → to a client-facing portal with live registrant visibility
- From using third-party tools (Cvent) to fill gaps → to a full-service registration platform built into the event workflow

**Structural Status**
- Works alongside the Event Coordinator for any event with registration — both must coordinate to ensure the event plan and registration setup are aligned and timed correctly
- Owns the full attendee communication stream: confirmation emails, changes, waitlist management, and post-event survey distribution
- Accountable for payment collection and scholarship tracking; financial actuals from registration feed into the Senior Manager's profit reporting

##### Catering Sales Manager (Corporate) · "The Creative Foodie"

**Relationship to Event Planner:** Manages F&B (Food & Beverage) intake and BEO distribution — a parallel planning workflow that runs alongside event coordination and must stay in sync through constant changes.

**Fixed Conditions**
- Their personality is creative, adaptable, and detail-oriented, managing both client-facing catering intake and kitchen-facing execution as two connected but distinct workflows
- They have a background in catering sales and F&B operations, working at the intersection of event managers, corporate clients, and kitchen staff
- They are skilled in translating event requirements into kitchen-ready instructions and managing high-frequency change communication — though limited by reporting tools that require heavy customization to extract useful data

**Dynamic States**
- From re-entering service orders after every OEO clarification → to an OEO that captures complete information upfront and maps responses directly to service orders
- From managing changes via email to the kitchen with high risk of missed updates → to in-system change communication that reaches kitchen staff in real time
- From staffing catering via Outlook with no Momentus integration → to integrated staffing tied to event and service order data

**Structural Status**
- Interfaces between Event Manager and kitchen staff — both sides send him changes; he is the information bottleneck between digital planning and physical food preparation
- Manages BEO distribution to kitchen staff who have no Momentus access — the last-mile gap in the data chain from event plan to food delivery
- Responsible for updating actuals and closing catering Event Work after events; this step is often delayed because it requires returning to a desk

##### Catering Sales Coordinator (Convention Centers) · "The Dot Connector"

**Relationship to Event Planner:** Builds functions and service orders from client F&B (Food & Beverage) requirements so operations can execute them — having previously worked the operations extraction side, uniquely positioned to see where the input and execution flows don’t line up.

**Fixed Conditions**
- Their personality is pragmatic and process-minded, having worked both the operations execution side and the catering sales input side of the same venue
- They have a background in convention center catering and event operations, having transferred from an operations execution role into catering sales input
- They are skilled in translating unstructured client specs — spreadsheets, whiteboards, verbal requests, PDFs in no consistent format — into structured functions and service orders

**Dynamic States**
- From maintaining a shadow Excel spreadsheet for at-a-glance status, minimum spends, and deadlines → to Momentus surfacing that same "what needs my attention" view natively
- From cutting and pasting client menus and specs that lose their formatting — bullets and dashes turning into stray characters → to structured import that preserves formatting
- From emailing distribution groups and manually re-flagging note-only changes the system’s change log doesn’t capture → to a change log that reliably surfaces every update, not just resource and function edits

**Structural Status**
- Sits between the event manager/sales side and the F&B kitchen/operations side — often the same client relationship split into a separate F&B contact and logistics contact
- Builds recurring functions early but holds off scripting full service orders until requirements are locked, since input in Momentus is flow-driven step by step — financials, bookings, and functions before service orders
- Accountable for translating vague, F&B-only contract language (a single estimate line at signing) into the fully detailed function and service-order structure operations will execute against

### Operations Director ("The Moment Maker")

**Product area:** Event Operations  
**Primary object:** Event Work  
**Quote:** "They make sure it actually happens."  
**Interaction grammar:** Event Work · Product · Create — *Execute and close a piece of Event Work*

#### Fixed Conditions

- Their personality is execution-driven, focused on timing, and responsible for making the plan actually happen
- They have a background in hospitality operations, event logistics, or facilities management
- They are skilled in Event Work management, resource deployment, real-time coordination, and incident response

#### Dynamic States

- From printed rosters and radio calls → to platform-based Event Work management
- From reactive execution → to proactive, load-balanced crew deployment across concurrent events
- From informal verbal handoffs → to documented completion with a clear audit trail back to the event plan
- From inconsistent communication channels across different operations teams during event execution → to standardized channels matched to each stage of the process, the type of information, and the operating department or team

#### Structural Status

- Receives the plan baton from planning — accountable for executing it through the team
- Sits above two types of department heads — one for front-of-house (ticketing, customer-facing staff), one for back-of-house (AV, catering, security) — though at many organizations those two types of department heads report to separate leadership rather than a single shared director.
- Front-of-house means customer- or attendee-facing roles (e.g. ticketing, guest services, box office); back-of-house means roles that support the event without direct public contact (e.g. AV, catering, security, custodial) — the lens used throughout this map to classify any operations-adjacent role
- Back-of-house departments — culinary, security, AV, custodial — carry dual scope: event-specific duties plus ongoing venue-maintenance duties independent of any single event, unlike planners/coordinators, who are event-scoped only
- The last mile between the platform’s promise and the client’s experience — where data quality determines delivery quality
- Responsible for operational actuals reporting; in larger venues, a dedicated person may aggregate across departments
- Resource and inventory accountability sometimes sits outside the operations function itself — creating a mismatch between who experiences a tracking problem day-to-day and who owns the tool meant to solve it
- Holds the platform’s buying and decision-making relationship for operations — crew and staff (modeled as secondary personas) are not buyers or independent system stakeholders; they matter to this map specifically for two things this role depends on them for: Event Work execution, and the data entry that feeds reporting and decision-making
- Responsible for tracking how planned staffing, resourcing, and timing compare to what actually happened on each event within their own operations area — building an operational memory that improves how similar future events are staffed and resourced

#### Vertical-specific variants of Operations Director

##### Arts & Culture: Operations Manager ("The Production Prodigy")

**Fixed Conditions**
- Their personality is production-focused and technically precise, with deep expertise in staging, lighting, sound, and live performance logistics
- They have a background in performing arts production management, coordinating both internal staff and external technical crews and vendors
- They are skilled in managing the full production lifecycle — from show advancement and technical riders through to post-show settlement across the full season calendar

**Dynamic States**
- From manually re-entering advancement form responses into the system → to auto-upload of advancement data directly from artists/promoters
- From managing production logistics show-by-show in isolation → to a connected season view with technical requirements across the calendar
- From narrative post-show documentation → to system-generated production actuals with financial reconciliation

**Structural Status**
- Manages show advancement — collecting technical riders, staffing production crews, and coordinating with artists and promoters
- Coordinates financial settlement post-show alongside Finance — a cross-functional accountability unique to the performing arts context
- Works closely with both the Booking Manager and Program Coordinator throughout the season — a more cross-functional ops role than in other verticals

##### Convention Centers: Operations Supervisor ("The Event Executer")

**Fixed Conditions**
- Their personality is hands-on and empathetic as a team leader, open to digital tools only when they genuinely save time rather than adding to it
- They have a background in high-volume convention operations, managing complex multi-day events with heavy changeover and staffing demands
- They are skilled in traditional operations execution — managing crews, changeover logistics, and inventory — though still developing comfort with digital workflow tools

**Dynamic States**
- From printed Event Work and radio as the primary coordination method → to iPad-based digital Event Work management
- From inaccurate system data causing wrong budget forecasts → to real-time actuals that feed accurate operational planning
- From no analytics for staffing and budget prediction → to operational dashboards with forecasting capability

**Structural Status**
- Bridges event coordinator and operations crew; accountable for daily briefings, Event Work assignment, and end-of-day actuals
- Manages inventory and staffing for multi-day conventions — scale and complexity exceeds most other verticals
- Forecasting is a key responsibility: budget and staffing predictions directly impact performance during convention week

##### Corporate: Operations Lead ("The Operations Oversight")

**Fixed Conditions**
- Their personality is structured and resilient, built to manage multiple operations sub-teams simultaneously across AV (Audio/Visual), Facilities, Event Services, Security, and Guest Services
- They have a background in multi-department hospitality or facility operations, managing the broadest stakeholder surface of any operations role in the vertical
- They are skilled in workforce coordination and cross-team operational logistics, though currently managing staffing entirely outside the platform through Outlook

**Dynamic States**
- From Outlook-based staffing with no connection to Event Work or event data → to integrated staffing against events in-platform
- From printed Event Work for all teams with no real-time update capability → to role-based digital Event Work access across departments
- From reactive inventory updates (added too infrequently to be trusted) → to proactive inventory management with availability checks

**Structural Status**
- Coordinates AV, Facilities, Event Services, Security, and Guest Services — five operational sub-teams with distinct needs
- Bears accountability for operational budget forecasting and inventory accuracy — inaccurate data ripples into wrong forecasts
- Accountable for what/where/when/how communication across all ops teams before, during, and after every event

##### Higher Ed: not yet documented

No distinct Operations persona documented yet for Higher Ed — not yet covered by validation interviews.

##### Stadiums & Arenas: Operations Supervisor ("The Moment Maker")

**Fixed Conditions**
- Their personality is hands-on and decisive under pressure, executing private rental and sponsorship events where scheduling is complicated by shifting sports-season and playoff timing
- They have a background in stadium/arena operations focused on private events — rentals, sponsorships, internal use — a distinct track from the venue's separate public game-day/concert operations
- They are skilled in physical event execution and crew coordination via printed Event Work and daily team briefings, though currently limited by the lack of an in-app editing or mobile workflow

**Dynamic States**
- From translating event needs into Event Work entirely by hand → to automated event detailing that generates functions, orders, and notes directly from the event outline
- From documenting real-time changes on printed Event Work and re-entering them into Momentus at end of day → to in-app editing with immediate change tracking
- From constant manual checking for changes and deadlines → to role-based notifications that alert ops automatically

**Structural Status**
- Owns the Private Events track (rentals, sponsorships, internal events) — hosts daily briefings, assigns Event Work, and closes out actuals at day's end
- Public/game-day operations (the game manifest, satellite catering, suites, control room) are owned by a separate Building Operations role, not the Operations Director — the two tracks run side by side but aren't the same job
- Accountable for translating client/event needs into executable Event Work — currently a fully manual step with no system support
- Views granular inventory tracking as low-value overhead — this vertical works off a fixed pool of standard equipment, unlike Convention Centers managing dozens of concurrent room configurations

#### Secondary / adjacent personas around Operations Director

##### Operations Crew (Stadiums & Arenas) · "The Hands On The Ground"

**Relationship to Operations Director:** Back-of-house: executes setup, teardown, and all in-event Event Work on the ground — the field-level worker whose experience determines whether the operations plan becomes reality.

**Fixed Conditions**
- Their personality is hands-on, responsive, and reliable — always in motion on event days, executing setup, teardown, and all in-event Event Work
- They have a background in stadium and arena floor operations, executing physical setup and teardown as part of a larger crew under the direction of the Operations Director
- They are skilled in efficient physical Event Work execution and real-time adaptation on the event floor, but require simple, role-tailored digital tools to transition away from printed manifests
- Not naturally tech-savvy or tech-oriented — comfort with digital tools is earned through repeated, reliable payoff, not assumed from the start
- Because the job is physical and constantly moving between locations, adopting new technology is difficult whenever that technology becomes an obstacle or slows the work down rather than removing friction from it
- Carries significant ritual and tacit knowledge built from experience on the floor — the kind of know-how that resists being fully captured or encoded into a digital tool

**Dynamic States**
- From a massive, everything-for-everyone manifest → to a filtered, role-specific list of Event Work that shows only what this role needs to do, in sequence
- From finding out about real-time changes too late → to push notifications for changes that affect his specific Event Work
- From no easy way to mark Event Work complete without navigating a full system → to simple, no-login completion from the field

**Structural Status**
- Receives assignments from the Operations Director — executes what that role plans, completing the chain from event plan to physical reality on the venue floor
- Responsible for logging Event Work status, time stamps (e.g., doors opened), and incidents — these actuals feed back into event records and post-event reporting
- The final link in the operational data chain: if field staff can't log actuals in real time, the data that feeds reporting, forecasting, and incident analysis is incomplete

##### Health, Safety & Risk Manager (Stadiums & Arenas) · "The Risk Manager"

**Relationship to Operations Director:** Spans both front-of-house and back-of-house: manages event risk assessment and safety compliance alongside operations — a cross-functional accountability that depends on operations data to identify and respond to threats.

**Fixed Conditions**
- Their personality is accountable, safety-focused, and detail-oriented, driven by public safety and regulatory compliance across 10+ years in risk management
- They have a background in health, safety, and risk management across large-scale venues and organizations, with a focus on building cultures where proactive risk identification becomes the norm
- They are skilled in incident tracking, risk assessment, and compliance reporting — and in designing simple enough workflows that non-risk teams will engage with them consistently

**Dynamic States**
- From manually training reluctant non-risk teams on risk identification → to simple, intuitive risk workflows that make flagging a risk the path of least resistance
- From difficulty making risk data usable (time-consuming reporting) → to analytics and reporting tools that surface risk insights for leadership, compliance, and strategy
- From disconnected risk, planning, operations, and incident workflows → to an integrated loop where incidents feed back into future risk assessments
- From anyone with system access being able to escalate or downgrade a risk's severity → to permissioned risk workflows where only accountable owners can change a risk's status

**Structural Status**
- Works across event management, the separate building-operations/game-day role, and the control room — risk spans all these functions and requires active participation from each
- Responsible for risk assessments, mitigation coordination, audit trails, and regulatory reporting; has one chance to get non-risk teams to engage before losing them
- Uses WeTrack (not Momentus) for incident management — the gap between incident data and the event record represents a critical integration opportunity
- The people who actually own and budget for risk and safety tooling are often a different audience than the event and booking relationship Momentus typically holds — closing this gap requires an organizational bridge, not just a technical one
- At smaller organizations, this role can also extend to injury and workers'-compensation case management — medical certificates, return-to-work plans, and claim records — which needs tighter, privacy-restricted access than general incident and risk data

##### Public Events Manager (Stadiums & Arenas) · "The Logistics Queen"

**Relationship to Operations Director:** Spans both front-of-house and back-of-house: coordinates game day and public events — a parallel operations layer managing the main event and all simultaneous mini-events (suites, satellite catering, sponsorships, parking).

**Fixed Conditions**
- Their personality is investigative, organized, and communicative, having transitioned from corporate events into a stadium environment where the scale and complexity required significant adjustment
- They have a background in corporate and public event operations, now managing game days and concerts as the main event with dozens of simultaneous satellite events running underneath
- They are skilled in information centralization and cross-departmental coordination at event scale — though currently managing the full game manifest outside of Momentus in Microsoft Suite

**Dynamic States**
- From building a game manifest in Word that goes out of date the moment a change happens → to a living, mobile-accessible manifest with real-time change tracking
- From change tracking nightmares with no audit trail → to a structured change log that all departments can access and act on in real time
- From getting the sports schedule the same day the public does → to a system that adapts the event plan dynamically as schedule confirmations arrive

**Structural Status**
- Centralizes information from all departments for game day — if an event is on the field, she must coordinate with groundskeepers; if it's in the parking lot, she must redirect fans
- Interfaces simultaneously with sales, operations, risk, and the control room — the most cross-functional coordination role in the vertical
- Lots of redundancy in game day operations: most details are the same event-to-event; only the mini-events change — a strong case for templates and copy workflows

##### AV Technician (Corporate) · "The Technical Help"

**Relationship to Operations Director:** Back-of-house: executes AV (Audio/Visual) setup, operation, and troubleshooting as a specialized member of the operations team — receives work assignments from the Operations Lead.

**Fixed Conditions**
- Their personality is technical, organized, and detail-oriented, focused on precise execution of AV setup, live operation, troubleshooting, and equipment maintenance
- They have a background in AV technology and campus event production, executing specialized technical Event Work under the direction of the Operations Lead
- They are skilled in AV operations across a range of event types and technical configurations, and open to adopting digital tools when they perform reliably in a field environment

**Dynamic States**
- From printed Event Work with no real-time change propagation → to digital, mobile Event Work that updates instantly when changes occur
- From needing to return to a desk to update progress or log changes → to field-based completion tracking directly from a mobile device
- From discovering last-minute changes via physical relay → to push notifications for changes that affect her specific AV assignments

**Structural Status**
- Works within the Operations Lead's operations team alongside Facilities and Event Services — receives assignments from the Operations Lead, executes them, and reports completion
- Responsible for post-event AV equipment retrieval and maintenance — a closure step that must be coordinated with event schedule and other teams
- One of multiple specialized operations sub-roles that collectively make up the ops function; no Momentus access by default — depends on printed orders

##### Control Room Operator (Stadiums & Arenas) · "The Incident Response"

**Relationship to Operations Director:** Back-of-house: runs the 24/7 control room during events, logging every call and coordinating immediate responses — the real-time information hub that operations teams report to during execution.

**Fixed Conditions**
- Their personality is calm under pressure, responsive, and organized, managing the control room through the full intensity of game days and major events
- They have a background in operations control room management and incident response coordination, working across digital systems, radio dispatch, and paper log backups
- They are skilled in real-time incident logging, emergency response coordination, and compliance reporting — with accuracy under high-volume conditions as their defining professional challenge

**Dynamic States**
- From no incident response time tracking → to performance measurement against response benchmarks for league compliance reporting
- From too much incoming data with no smart prioritization → to categorized incident intake that surfaces urgency and routes to the right responder immediately
- From non-technical staff reluctant to submit incidents digitally → to no-login incident intake that removes the barrier for field staff

**Structural Status**
- Coordinates between operations crew, external agencies (police, ambulance, fire), and venue management — the nerve center of real-time event response
- Uses WeTrack, not Momentus — the gap between incident logs and the event record represents the most critical data integration gap in the S&A vertical
- Operating 24/7 on event days means zero tolerance for system downtime or usability friction; reliability and speed are non-negotiable requirements
- A digital incident log serves as the system-of-record documenting what happened — even in well-adopted deployments, real-time dispatch and coordination still happens by radio or phone, not through the log itself
- When an incident also meets a venue's own separate safety threshold, logging it twice — once in the venue's own system, once in the event record — is common and accepted today, not treated as an edge case
- Incident records carry confidentiality tiers by type — medical and security details are restricted to those who need them, not visible to the entire organization by default
- Operates within a three-tier information flow — individual contributors on the ground log what's happening, this role consolidates and decides what needs escalating, and only escalation-worthy items reach director/executive-level dashboards

##### Meeting Services Crew (Convention Centers) · "The Analog Anchor"

**Relationship to Operations Director:** Back-of-house: executes setup, changeover, and breakdown work under the Meeting Services Supervisor's direction — the front-line role where, in the supervisor's own words, "technology stops."

**Fixed Conditions**
- Their personality is task-focused and constantly moving — coordinating setup, changeover, and breakdown across rooms entirely by radio
- They have a background in convention center meeting services and banquet setup, working from printed Event Work handed out at the morning briefing rather than any device of their own
- They are skilled in fast physical changeover work — reading a room diagram, executing the setup, and reporting status back verbally — with no system access of their own

**Dynamic States**
- From a legacy mobile tool a few crew members used to log progress before switching platforms → to no digital tool at all today, reporting status back to the supervisor by radio only
- From carrying printed Event Work for the day → to a simple, no-login way to view and confirm today's Event Work from the floor
- From changes relayed room to room by word of mouth → to a push notification that reaches crew directly when a change affects their space

**Structural Status**
- Receives daily assignments and printed Event Work from the Meeting Services Supervisor at the morning briefing — the last link in the chain from event plan to physical setup
- Has no direct system access — every status update, completion, and incident is relayed verbally or by radio and re-entered into the system by the supervisor at day's end
- The point where the operational data chain currently goes fully manual — closing the same last-mile gap other front-line crew roles represent elsewhere, but with even less digital access (radio only, no mobile tool)

### Finance Director ("The Financial Steward")

**Product area:** Event Finance  
**Primary object:** Event Financials  
**Quote:** "They make sure the numbers can be trusted."  
**Interaction grammar:** Event Financials · Product · Reconcile — *Reconcile and close event financials*

#### Fixed Conditions

- Their personality is detail-oriented and integrity-driven, focused on financial accuracy and translating operational activity into numbers stakeholders can trust
- They have a background in venue finance, accounting, or public-sector financial management — often navigating both hospitality operations and municipal/institutional compliance
- They are skilled in budget reconciliation, variance analysis, GL (General Ledger) management, and translating financial data into stakeholder-ready reporting

#### Dynamic States

- From stitching together PeopleSoft, Enterprise, payroll, and contractor systems by hand → to one consolidated, live view of event and venue financial performance
- From discovering budget variances at month-end, when it’s too late to act → to surfacing variances early enough to correct course
- From chasing contractor invoices for weeks or months after an event closes → to proactive, predictable invoice timing and a fast, clean close

#### Structural Status

- Receives the operational handoff from planning and operations — accountable for reconciling every dollar of an event after execution is complete
- Financial gatekeeper at a public/institutional venue: procurement, vendor approval, and budget decisions route through formal government or municipal channels
- The de facto data-integrity function for the entire venue — depends on event planners, operations, contractors, and payroll to enter their data correctly, and absorbs every gap as their own problem to resolve
- Responsible for monthly financial reporting to executive directors, department heads, and — at public venues — a city CFO (Chief Financial Officer) or government board

### Venue Director ("The Orchestrator")

**Product area:** Momentus Events  
**Primary object:** Event Intelligence  
**Quote:** "They hold the whole performance together."  
**Interaction grammar:** Event Intelligence · Product · Synthesize — *Synthesize Event Intelligence across the full event lifecycle*

#### Fixed Conditions

- Their personality is strategic, decisive, and focused on the big picture across all lifecycle stages
- They have a background in venue management, hospitality leadership, or multi-department operations
- They are skilled in cross-functional leadership, P&L (profit and loss) management, and navigating revenue-driven and mission-driven organizational priorities

#### Dynamic States

- From siloed team workflows → to cross-functional visibility across sales, planning, and operations
- From reactive firefighting and Excel exports → to proactive performance monitoring with actionable data
- From assembling reports manually → to real-time intelligence that answers "where am I vs. goal?" without an assistant

#### Structural Status

- Authority over sales, planning, and operations — the full event lifecycle
- P&L accountable — ultimately responsible for the venue’s commercial performance
- The strategic link between what the venue promises and what it delivers
- Responsible for tracking the full estimated → planned → actual chain across sales, planning, and operations — surfacing where and why delivery diverged from the original estimate, and feeding that back into how similar events are sold and planned next time

#### Vertical-specific variants of Venue Director

##### Arts & Culture: Executive Director ("The Momentus Buyer")

**Fixed Conditions**
- Their personality is mission-driven with deep institutional loyalty, measuring success by community impact as much as revenue
- They have a background in arts and cultural institution leadership, with deep sector expertise and a pragmatic reliance on familiar tools for day-to-day planning
- They are skilled in overseeing a diverse event portfolio — venue rentals, internal programming, educational programs, and presented performances — each with distinct financial models

**Dynamic States**
- From making season-level decisions without data → to data-informed season planning that balances mission and budget
- From relying on staff expertise to surface issues → to proactive performance monitoring that flags problems before they escalate
- From tracking mission objectives informally → to quantified reporting on both financial performance and community impact

**Structural Status**
- Ultimate authority over mission, season strategy, and resource allocation across all event types — rental, programming, and education
- Must balance earned revenue (rentals, tickets) with contributed revenue (donor support, grants) — a financial model unique to this vertical
- Holds final say on whether the venue pursues presented content vs. rentals-only — a strategic fork that defines the product complexity

##### Corporate: Director, Events Experience ("The Momentus Buyer")

**Fixed Conditions**
- Their personality is analytical and client-centric, bringing extensive hotel and corporate events experience and a competitive evaluation mindset to technology decisions
- They have a background in hotel and corporate event management, now leading a campus events program that serves both the corporate company and the employees who attend
- They are skilled in technology evaluation and stakeholder-led adoption — measuring platform success by the team’s experience rather than their own usage

**Dynamic States**
- From paper-based reporting and manual data collection → to real-time, centralized event data across all campus locations
- From difficult customization and high implementation overhead → to standardized processes that scale globally across campuses
- From self-service that employees route around → to a portal that actually works for people with no events background

**Structural Status**
- P&L (profit and loss) accountable for the campus events program — must demonstrate ROI (Return on Investment) of Momentus investment to corporate leadership
- Manages a multi-campus deployment goal — success at the current campus unlocks potential global rollout
- Works above the Event Management Lead for performance data; relies on the Bookings Manager for intake and calendar operations

##### Higher Ed: Sr. Manager, Event Services ("The Strategic Thinker")

**Fixed Conditions**
- Their personality is analytically rigorous and institutionally minded, comfortable at the intersection of event operations and university finance
- They have a background in higher education administration and event management, with deep experience in financial reporting across internal, external, and conference event types
- They are skilled in financial reconciliation across complex institutional systems — though currently spending 40+ hours per cycle manually bridging Momentus with Banner and PeopleSoft due to integration gaps

**Dynamic States**
- From 40+ hours of manual Excel work to calculate profit reports → to out-of-the-box financial reporting comparing costs to revenue by event and type
- From broken Banner/PeopleSoft integrations forcing manual reconciliation → to reliable, automated financial system integration
- From proving CES (Conference & Event Services) value through revenue alone → to demonstrating broader impact including branding, campus loyalty, and engagement

**Structural Status**
- Responsible for payment generation, internal charge-backs, and revenue vs. cost tracking across all CES (Conference & Event Services) events
- Strategic link between CES (Conference & Event Services) operations and university administration — must translate event data into institutional financial language
- Works above the Booking Coordinator and the Event Coordinator — oversees both intake performance and execution quality

#### Secondary / adjacent personas around Venue Director

##### Executive Director (Arts & Culture) · "The Momentus Buyer"

**Relationship to Venue Director:** Mission-driven executive leader who balances community impact with financial sustainability — a different decision-making framework than revenue-first venue management.

**Fixed Conditions**
- Their personality is caring, artistic, and community-oriented — a former performer who is deeply mission-driven but pragmatic about the bottom line
- They have a background in arts and cultural institution leadership, with deep institutional experience and a pragmatic preference for familiar tools over platform-based planning
- They are skilled in balancing a diverse programming portfolio — venue rentals, internal programming, educational programs, and presented performances — each with distinct financial models

**Dynamic States**
- From making season-level decisions based on gut feel and donor relationships → to data-informed strategy that quantifies both mission impact and financial performance
- From wanting to use metrics but not knowing how → to accessible dashboards that answer strategic questions without needing an analyst
- From relying on separate tools (Excel, Google Docs) for different planning functions → to a centralized platform that consolidates the view across all event types

**Structural Status**
- Ultimate authority over mission, season strategy, and resource allocation across all event types: rentals, programming, education, and presented content
- Must balance earned revenue (rentals, ticket sales) with contributed revenue (donor support, grants) — a financial model unique to cultural institutions
- Holds final say on whether the venue pursues presented content — this strategic choice determines the full scope of operational complexity the team must manage

##### Director, Events Experience (Corporate) · "The Momentus Buyer"

**Relationship to Venue Director:** Drives the corporate campus events technology purchase and oversees global rollout — success at one campus determines whether Momentus scales to all locations worldwide.

**Fixed Conditions**
- Their personality is outgoing, analytical, strategic, and client-centric, bringing extensive hotel and corporate events experience and a competitive evaluation mindset to platform decisions
- They have a background in hotel and corporate event management, now leading a campus events program that must serve both the corporate company and the employees who attend
- They are skilled in enterprise technology evaluation, ROI (Return on Investment)-based decision-making, and managing platform deployments with global scalability as a defining success criterion

**Dynamic States**
- From counting event performance on paper sheets → to real-time, centralized event data across all campus locations
- From excessive implementation and customization work to meet basic needs → to standardized processes that replicate cleanly across offices globally
- From self-service that employees route around → to a portal employees actually use, reducing team workload and enabling white-glove hospitality at scale

**Structural Status**
- P&L (profit and loss) accountable for the campus events program — must demonstrate ROI of Momentus to corporate leadership to justify continued investment and global expansion
- Works closely with the Event Management Lead for performance data and the Bookings Manager for calendar operations; low personal system usage
- Manages a multi-campus deployment ambition — standardization and replicability are as important as functionality at the current campus

##### Manager, Workplace Experience (Corporate) · "The Partner Buyer"

**Relationship to Venue Director:** Proposed and drives Momentus adoption on campus — manages both the corporate company relationship and the employee hospitality experience simultaneously.

**Fixed Conditions**
- Their personality is decisive, organized, approachable, proactive, and empathetic — the internal champion who proposed Momentus as the centralized platform for the campus
- They have a background in hospitality across hotels, restaurants, and corporate campus environments, now managing a program that must satisfy both the company and the employees it serves
- They are skilled in managing high-expectation corporate audiences and driving platform adoption — balancing demand for self-service efficiency with standards for white-glove hospitality

**Dynamic States**
- From building reports from scratch without Momentus best practices → to standardized reporting processes with guidance from Momentus on what and how to report for corporate
- From excessive implementation customization to meet basic needs → to out-of-box functionality that reduces setup time for each campus deployment
- From inconsistent Momentus support experience → to a reliable partnership where guidance and best practices are proactively provided

**Structural Status**
- Accountable for white-glove hospitality experience, space utilization, and staff satisfaction simultaneously — a three-way performance requirement that creates competing priorities
- Drives team adoption — his buy-in is necessary but insufficient; the team must also adopt the platform for the investment to pay off
- Reports to corporate client company on events performance and ROI (Return on Investment); must quantify and communicate the value of the events program in business terms

##### Director, Special Events (Arts & Culture) · "The Space Maximizer"

**Relationship to Venue Director:** Oversees venue rentals, internal programming, donor events, and regular tours — a mid-level director who drove the Momentus purchase decision and manages multiple event types simultaneously.

**Fixed Conditions**
- Their personality is knowledgeable, strategic, visionary, and considerate — a lifelong cultural institution advocate who drives community engagement through diverse event programming
- They have a background in cultural institution management, having championed Momentus adoption at the venue and developed strong platform fluency relative to peers in the vertical
- They are skilled in managing complex multi-event calendars across exhibitions, tours, rentals, programming, and donor events — all requiring simultaneous visibility and conflict management

**Dynamic States**
- From constant chaos managing events that impede regular programming and exhibition hours → to a calendar that gives full visibility into all event types with no conflicts
- From using Tessatura (ticketing), DocuSign, and Microsoft Suite alongside Momentus → to a more integrated workflow that reduces tool-switching
- From coaching staff through both events process and software adoption simultaneously → to a platform that uses language that matches how cultural institutions actually work

**Structural Status**
- Oversees a combination of venue rentals, recurring programming, donor and membership events — a portfolio breadth that no other single director in any other vertical manages
- Consults on mission + revenue go/no-go decisions for rental inquiries alongside the Rental Sales Coordinator — approves which events serve the institution's interests
- Platform language that defaults to rental-centric concepts (contracts, customers) creates friction for programming and exhibition use cases unique to the A&C vertical

## Primary Objects (Semantic Layer)

Each object is defined by three attribute types (Fixed Conditions, Dynamic States, Structural Status) and supports Create / Update / Delete actions.

### Event Opportunity (Sales)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Client / Account** — who the booking belongs to
- **Event Type** — conference, gala, meeting, concert…
- **Space(s) Requested** — primary and alternate holds
- **Date(s)** — event, setup, and teardown days
- **Estimated Attendance** — initial guest count range
- **Revenue Potential** — estimated total booking value
- **Source Channel** — web form, bureau, referral, walk-in…

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Status** — Inquiry → Tentative → Definite → Closed
- **Proposal Version** — current draft iteration
- **Contract Status** — Draft → Sent → Signed → Executed
- **Deposit Status** — Pending → Partially Paid → Received
- **Calendar Availability** — real-time space conflict flag
- **Pipeline Stage** — position in the sales funnel

#### Structural Status — System position. Authority, assignment, record identity.

- **Assigned Sales Rep / Owner** — accountable team member
- **Booking / Record ID** — system-generated identifier
- **Created Date** — first capture timestamp
- **Linked Account Record** — connects to CRM account object
- **Sales Team / Department** — which team owns this booking
- **Hold Priority** — Tentative 1 / 2 / 3 — calendar rank
- **Opportunity Score** — revenue + space fit, AI-ranked

#### Actions

- **Create**: Brings a new Event Opportunity into existence within the system — capturing the client, dates, requested spaces, and revenue potential that define a sales opportunity.
- **Update**: Modifies the attributes of an existing Event Opportunity — such as its status, hold priority, contract state, deposit status, or estimated attendance — as the opportunity evolves.
- **Delete**: Permanently removes an Event Opportunity from the system, erasing the record and all of its associated history.

### Event Plan (Planning)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Function Name / Type** — breakfast, session, cocktail hour…
- **Parent Booking** — the confirmed event this belongs to
- **Space / Room Assignment** — specific room for this function
- **Date, Start & End Time** — scheduled function window
- **Setup Type** — Theater, Rounds, U-Shape, Boardroom…
- **Expected Covers / Attendance** — initial planned guest count

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Status** — Draft → Detailed → Finalized → Ready → Closed
- **Detail Completion** — F&B, AV, layout, instructions — % done
- **BEO Published** — distributed to client and departments
- **Change Count** — updates logged since confirmation
- **Guaranteed Covers** — locked guest count (72h before event)
- **Client Approval Status** — Pending → Approved → Change Requested
- **Finalized Flag** — gating state between planning and ops
- **Service Orders Status** — F&B, AV, setup, labor — draft → confirmed → distributed
- **Supporting Documents** — diagrams, layout drawings, notes, and attachments
- **Distribution Status** — Not Sent → Partially Sent → Fully Distributed — whether assigned departments have received the BEO

#### Structural Status — System position. Authority, assignment, record identity.

- **Assigned Event Planner** — responsible for detailing this function
- **BEO Number / Document ID** — unique sequential identifier
- **Department Owner** — Catering, AV, Facilities, Security
- **Linked Booking ID** — parent event record reference
- **Departmental Distribution** — which departments are assigned to receive this BEO
- **Last Modified Timestamp** — change tracking anchor

#### Actions

- **Create**: Brings a new Event Plan into existence within the system — establishing the function details, room assignment, timeline, and setup requirements that will guide event delivery.
- **Update**: Modifies the attributes of an existing Event Plan — such as setup type, guaranteed covers, BEO (Banquet Event Order) publication status, or client approval state — as the event date approaches.
- **Delete**: Permanently removes an Event Plan from the system, erasing the function record and its distribution history.

### Event Work (Operations)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Event Work Type** — Setup, Breakdown, F&B, AV, Security…
- **Linked Function / Booking** — the event this Event Work belongs to
- **Space / Location** — where the Event Work must be executed
- **Required Start / Due Time** — scheduled execution window
- **Resource Requirements** — equipment, inventory, materials needed
- **Generated From** — BEO reference / Event Work source

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Status** — Pending → Assigned → In Progress → Complete → Verified
- **Completion Progress** — real-time % or checklist completion
- **Incidents Logged** — count of deviations or issues flagged
- **Support Material / Change Log** — instructions, diagrams, and real-time crew notes
- **Actuals vs Expected** — execution deviation from plan

#### Structural Status — System position. Authority, assignment, record identity.

- **Assigned Crew / Staff** — who is executing the Event Work
- **Supervising Supervisor** — accountable operations role
- **Department Owner** — Facilities, F&B, AV, Security
- **Event Work ID** — system-generated identifier
- **BEO Reference** — traceability back to Event Plan
- **Verification Authority** — who can mark Verified / sign off
- **Priority** — Urgent / High / Normal / Low
- **Department Naming** — varies by venue — e.g. the same function may be called "Catering" at one venue and "Concessions" at another; no canonical taxonomy across customers

#### Actions

- **Create**: Brings a new Event Work into existence within the system — defining the work to be completed, the crew responsible, and the execution window.
- **Update**: Modifies the attributes of an existing Event Work — such as its status, priority, assigned crew, completion progress, or incident notes — as execution unfolds.
- **Delete**: Permanently removes an Event Work from the system, erasing it and its associated records.

### Event Financials (Financial)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Event / Booking Reference** — the event this financial record belongs to
- **Budget Line / GL Code** — the ledger account revenue and costs post to
- **Price List Applied** — the rate schedule governing billable items
- **Contracted Revenue** — the agreed booking value from the signed contract
- **Cost Center / Department Allocation** — which department(s) share in this event's P&L
- **Fiscal Period** — the reporting period this event's activity falls into

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Status** — Budgeted → In Progress → Pending Invoices → Reconciled → Closed
- **Actual vs. Budgeted Revenue** — real-time variance as actuals post
- **Actual vs. Budgeted Costs** — labor, contractor, F&B, overhead
- **Outstanding Contractor Invoices** — count / amount not yet received
- **Variance Flags** — line items exceeding threshold, requiring explanation
- **Invoice Approval Stage** — drafted → event manager review → exec director approval → sent to customer

#### Structural Status — System position. Authority, assignment, record identity.

- **Assigned Finance Owner** — who is reconciling this event
- **Approval Authority** — event manager, exec director, or city CFO sign-off
- **Financial Record ID** — system-generated identifier
- **Linked SO/WO References** — traceability back to Event Plan and Event Work
- **Audit Trail** — procurement / compliance record for public-entity requirements
- **Reporting Rollup** — which monthly / department P&L this feeds

#### Actions

- **Create**: Brings a new Event Financials record into existence — establishing the budget, GL (General Ledger) code, and price list an event will operate within, before the event executes.
- **Update**: Modifies the attributes of an existing Event Financials record — recording actuals, flagging variances, advancing invoice approval stage — as the event moves from budget through closeout.
- **Delete**: Permanently removes an Event Financials record from the system, erasing the budget, actuals, and reconciliation history for that event.

### Event Intelligence (Leadership)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Event Reference** — the Event this intelligence view is synthesized for
- **Data Sources** — Sales, Planning, Operations, and Finance — the four functions it draws from
- **Aggregation Scope** — single event, account, or multi-venue portfolio
- **Metrics Framework** — the North Star and input metrics each function's story rolls up through
- **Reporting Cadence** — real-time vs. rolling-window view
- **Created Date** — first synthesis run timestamp

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Story Coherence** — Fragmented → Partially Connected → Fully Synthesized
- **Coverage Completeness** — % of the event's data actually captured across all four functions
- **Cross-Functional Alignment** — Diverging → Aligning → Aligned
- **Leading Signal Status** — On Track / At Risk / Escalated — rolled up from Sales, Planning, Operations, and Finance signals
- **Insight Freshness** — Stale / Current / Real-Time
- **Last Synthesized** — timestamp of most recent recompute

#### Structural Status — System position. Authority, assignment, record identity.

- **Linked Event Opportunity(s)** — source Sales signal
- **Linked Event Plan(s)** — source Planning signal
- **Linked Event Work(s)** — source Operations signal
- **Linked Event Financials** — source Finance signal
- **Primary Consumer** — Venue Director / Leadership team
- **Intelligence Record ID** — top-level identifier

#### Actions

- **Create**: Synthesizes a new Event Intelligence view — pulling live signals from Sales, Planning, Operations, and Finance into a single cross-functional story for Leadership.
- **Update**: Refreshes Event Intelligence as new signals arrive from any of the four functions — keeping the leadership view current without manual reassembly.
- **Delete**: Removes an Event Intelligence view, without affecting the underlying Event Opportunity, Plan, Work, or Financials records it was synthesized from.

### Event (End-to-End)

#### Fixed Conditions — Identity descriptors. Set once, never changed.

- **Client / Account** — the organization hosting the event
- **Event Type** — conference, gala, concert, meeting…
- **Event Window** — aggregate date range across all functions
- **Venue / Location** — property or properties involved
- **Total Estimated Attendance** — combined guest count across functions
- **Total Revenue Potential** — aggregate estimated value at booking

#### Dynamic States — State descriptors. Change through the object lifecycle.

- **Overall Status** — Prospect → Booked → Planning → Confirmed → Executing → Closed
- **Coverage Completeness** — % of lifecycle managed in-platform
- **ME Progress** — Booking ✓ · Plan ✓ · Event Work ✓
- **Revenue Realization** — actuals vs. contracted value
- **Execution Health** — On Track / At Risk / Escalated
- **Client Approval State** — Pending → Approved → Change Requested

#### Structural Status — System position. Authority, assignment, record identity.

- **Event Master Record ID** — top-level system identifier
- **Linked Booking Record(s)** — all associated Event Opportunity objects
- **Linked Event Plan(s)** — all associated BEO / function plans
- **Linked Event Work(s)** — all associated Event Work
- **Primary Account Owner** — lead responsible across lifecycle
- **Created Date** — first capture timestamp

#### Actions

- **Create**: Brings a new Event into existence within the system — establishing the top-level record that unifies all bookings, plans, and Event Work under a single event lifecycle.
- **Update**: Modifies the attributes of an existing Event — such as its overall status, execution health, revenue realization, or coverage completeness — as it moves through its lifecycle.
- **Delete**: Permanently removes an Event from the system, along with all linked booking, planning, and operations records.

_Note: each object card also has a "Secondary Objects" slot in the UI (`sec-objs-*`) that is currently an empty placeholder — not yet wired to data. See ARCHITECTURE.md._

## Strategy and North Stars (Strategy Layer)

**Vision** — "Momentus keeps the data clean and current: the manual effort handled, the risks caught, recommendations surfaced when they help. With their expertise amplified by data and insights instead of guesswork, venue and event management professionals trust themselves to focus their judgment on what matters most: the deal, the plan, the crew, the close. The result is more bookings won, less time lost to administration, and every space and date working as hard as it can."

**Vision Slogan** — Clean the data. Amplify the expertise. Measure the result.

**Why We Do It** — "Because we believe event and venue management professionals already hold the expertise. They know what's worth chasing, what the plan requires, what the floor needs, and what the numbers mean. They shouldn't have to burn the day digging for it, apologizing for the gap, putting off fires, or waiting for the truth to arrive too late to shape what happens next."

**Why We Do It Slogan** — They hold the expertise, we amplify it.

Each product area is headed "Momentus <Area>" — its Primary Object/Persona/Job, then its own Mission, Vision, and Why We Do It, then the North Star metric that proves the strategy is working, then Key Input Metrics. A Golden Circle (Why/How/What) read of the product org's 3-year vision. Finance has no supporting GTM deck yet, unlike Sales/Planning/Operations/Events — its Why/Mission/Vision are grounded only in Event Lifecycle Map research, a known gap. See `MOMENTUS_GOLDEN_CIRCLE_PROJECT_BRIEF.md` for full sourcing and the style rules behind this copy.

### Momentus Events North Star

**Event and venue management professionals' expertise amplified**

Momentus Events core value is delivered to event and venue management professionals when their expertise is amplified. Built from five teams working as one — Sales, Planning, Operations, Finance, and Leadership — Momentus Events signals that the entire journey, from first opportunity through final reconciliation, completes end to end, entirely inside the platform, without falling back to outside tools at any handoff. When the key input metrics below are all moving in the right direction, it means the full event lifecycle is delivering its value inside Momentus, start to finish.

### Momentus Sales

The strategic approach Momentus has chosen for Sales. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.

**Primary object:** Event Opportunity

**Primary persona:** Sales Manager — "The Dream Catcher"

**Primary job:** Secure Event Opportunity

**Mission:** We make Sales Momentus by illuminating opportunities to help sales teams chart course through the future.

**Vision:** Momentus keeps every account's history clean and handy, the pipeline and calendar visible in real time, and revenue potential illuminated by amplified expertise and data insights. With reliable account and pipeline history, manual proposal work handled, conflicting holds caught before they reach a client, and the next best opportunity surfaced right when it's needed. So sales managers can focus their judgment on what matters most to make every event Momentus.

**Why We Do It:** Because we believe sales teams know exactly what's worth chasing and they don't have to burn their whole day digging for it.

#### Product Area North Star Metric — Momentus Opportunities (MO) (core value)

**Sales Manager's expertise amplified**

Momentus Sales core value is delivered to the Sales Manager when their expertise is amplified. Momentus Opportunities signals that we are delivering on that promise — that the right opportunity is being surfaced and closed in real time, not chased down manually. When the key input metrics below are all moving in the right direction, it means sales managers are spending their judgment on deciding what to chase, not digging to find it.

_Full metric definition:_ The number of event opportunities that are created, contracted, and signed entirely inside Momentus during a rolling 30-day window — without the process falling back to a separate CRM (Customer Relationship Management) tool, email thread, or paper contract — combined with the velocity of that conversion: the elapsed time from qualified inquiry to signed contract. An opportunity counts only when the entire intake-to-contract workflow completes inside the platform, and faster inquiry-to-signature time is tracked as a core signal of sales health alongside volume. MO is the proof point for Sales's strategic bet: that illuminating the right opportunity — not just recording that one existed — is what lets sales managers chart a course through the future instead of digging for it every day.

`Feeds ME intake stage`  `Closes the CRM fallback gap`  `First link in the ME chain`

#### Key Input Metrics

**Adoption · Active user — Active sales users creating opportunities in-platform**  
Number of sales reps or managers who created at least one opportunity record inside Momentus — not a CRM or spreadsheet — in the past 30 days.

**Engagement · Feature usage — Avg. opportunity workflow steps completed in-platform**  
Average number of opportunity workflow stages (lead capture, availability check, proposal, hold, contract, signature) completed inside Momentus per opportunity. Measures how deeply the platform owns the sales process.

**Retention · Return rate — Month-over-month active sales user return rate**  
Percentage of active sales users in a given month who were also active the prior month for opportunity creation. Consistent return signals Momentus has replaced external CRMs and email as the primary opportunity tool.

**Efficiency · Time to value — Avg. time from lead entry to confirmed opportunity**  
Median hours from first lead record creation to an opportunity status of "Definite" inside Momentus. A decreasing cycle time signals friction reduction in the qualification-to-close workflow.

**Effectiveness · Task success — % opportunities with signed contract in-platform**  
Percentage of confirmed opportunities where the contract was generated, sent, and signed entirely inside Momentus — without fallback to Word, DocuSign, or email attachment. The direct measure of whether Momentus Opportunities counts.

#### Rationale

**The core failure Momentus Opportunities addresses**  
The vertical research found that many venues use Momentus to track opportunities but complete the actual contracting in email, Word, or a separate Customer Relationship Management (CRM) tool. Momentus Opportunities only counts when the full intake-to-contract workflow completes inside the platform — it cannot be gamed by logging an opportunity that was really done elsewhere.

**Why not total opportunities created?**  
Total opportunities is gameable: a sales rep can log an opportunity after the fact, or log it inside Momentus while doing the real work in Salesforce. Momentus Opportunities requires the process — lead qualification, availability check, proposal, contract — to happen inside Momentus. That's the signal that the platform replaced the external tool.

**How Momentus Opportunities starts the Momentus Events chain**  
Momentus Opportunities is the handoff trigger. When the Sales Manager closes an opportunity in-platform, the Event Planner has something to pick up inside Momentus. If the opportunity is logged after the fact — after closing it in a CRM or email — the handoff is broken and Momentus Events cannot start cleanly. Momentus Opportunities measures whether sales gave planning a clean baton.

### Momentus Planning

The strategic approach Momentus has chosen for Planning. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.

**Primary object:** Event Plan

**Primary persona:** Event Planner — "The Promise Keeper"

**Primary job:** Detail Event Plan

**Mission:** We make Planning Momentus by grounding details to help planning teams navigate complexity with insight.

**Vision:** Momentus keeps every event's plan clean and handy, function and detail status visible in real time, and downstream impact illuminated by amplified expertise and data insights. With reliable handoffs from sales, manual BEO assembly handled, missing details caught before they reach operations, and the next required action surfaced right when it's needed. So event planners can focus their judgment on what matters most to make every event Momentus.

**Why We Do It:** Because we believe planning teams' experience is rich in insights they don't want to miss and have to be the ones apologizing for a gap between the plan and the floor.

#### Product Area North Star Metric — Momentus Plans (MP) (core value)

**Event Planner's expertise amplified**

Momentus Planning core value is delivered to the Event Planner when their expertise is amplified. Momentus Plans signals that we are delivering on that promise — that every detail is grounded and visible before it reaches operations, not discovered missing on the floor. When the key input metrics below are all moving in the right direction, it means planners are navigating complexity with insight instead of apologizing for the gap between the plan and what actually happens.

_Full metric definition:_ The number of events with complete, approved function detail — the full what, when, where, and how — authored, approved, and distributed to operations inside Momentus in a rolling 30-day window. An event counts only when the full BEO (Banquet Event Order) / event order is created and shared without leaving the platform. MP measures whether Momentus is actually grounding that detail for planners, rather than leaving them to navigate the complexity — and the floor — on their own.

`Feeds ME planning stage`  `Closes the Word/Excel leakage gap`  `Enables downstream ops execution`

#### Key Input Metrics

**Adoption · Active user — Active planners creating event details**  
Number of event planners who created at least one event plan or detail record inside Momentus — not Word or Excel — in the past 30 days.

**Engagement · Feature usage — Avg. function details completed per event**  
Average number of function-level detail fields (space, F&B (Food & Beverage), AV (Audio/Visual), setup, timing) completed per event. Measures the depth of event documentation inside the platform vs. externally.

**Retention · Return rate — Month-over-month planner return rate**  
Percentage of active planners in a given month who were also active the prior month for detailing tasks. Consistent return signals Momentus has replaced Word and Excel as the detailing tool.

**Efficiency · Time to value — Avg. time from handoff to BEO distribution**  
Median hours from event opportunity handoff from sales to complete function detail distribution to operations, measured entirely inside the platform. Shrinking time signals friction reduction in the detailing workflow.

**Effectiveness · Task success — % events with approved detail before event date**  
Percentage of events where function detail is marked complete and approved inside Momentus before the event execution date. Direct measure of whether the product enables the Event Planner to keep their promise to ops.

#### Rationale

**The core failure Momentus Plans addresses**  
The vertical research explicitly states: "Elite customers tend to detail and share event needs in Word/Excel. Downstream this makes ops more manual." Momentus Plans only counts when the Event Planner documents and distributes the full plan inside Momentus — triggering a clean handoff to the Operations Director.

**Why not events created or functions added?**  
Creating a function record doesn't mean the plan is complete or shared. Momentus Plans requires both completion (all detail fields populated) and distribution (shared to ops inside the platform). A half-finished event order sent via email is a failure state for Momentus Events.

**How Momentus Plans connects to Momentus Events**  
Momentus Plans is the middle link. If the Event Planner's detail lives in Word, operations has nothing to execute from inside Momentus, and Momentus Events cannot complete. Every event counted toward Momentus Plans is one operations can pick up in-platform — the bridge between sales and execution.

### Momentus Operations

The strategic approach Momentus has chosen for Operations. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.

**Primary object:** Event Work

**Primary persona:** Operations Director — "The Moment Maker"

**Primary job:** Orchestrate Event Work

**Mission:** We make Operations Momentus by surfacing work to help operations teams make the vision unfold.

**Vision:** Momentus keeps every event's work clean and handy, crew status and incident activity visible in real time, and staffing and resource needs illuminated by amplified expertise and data insights. With reliable handoffs from planning, manual dispatch and reporting handled, risks and escalation-worthy incidents caught before they become client-visible failures, and the next required action surfaced right when it's needed. So operations directors can focus their judgment on what matters most to make every event Momentus.

**Why We Do It:** Because we believe operations teams want to see the whole shift coming and they don't want to be stuck reacting to whatever fire hits first.

#### Product Area North Star Metric — Momentus Work (MW) (core value)

**Operations Director's expertise amplified**

Momentus Operations core value is delivered to the Operations Director when their expertise is amplified. Momentus Work signals that we are delivering on that promise — that the crew is working from real-time truth, not paper and radio reconstructed after the fact. When the key input metrics below are all moving in the right direction, it means operations directors are seeing the whole shift coming instead of reacting to whatever fire hits first.

_Full metric definition:_ The number of events where all assigned Event Work — setup, execution, teardown, incident response — is received, tracked, and closed inside Momentus during the event execution window (pre-event, day-of, post-event) in a rolling 30-day window. An event counts only when execution does not fall back to paper, radio, or email. MW is where that promise gets tested hardest: it only counts when the crew is working from real-time truth instead of reconstructing what happened after the fact — the difference between seeing the whole shift coming and reacting to whatever fire hits first.

`Completes the ME chain`  `Closes the paper/radio execution gap`  `Direct measure of operational value realization`

#### Key Input Metrics

**Adoption · Active user — Active Operations Directors/department heads managing Event Work**  
Number of Operations Directors or department heads who received and updated at least one piece of Event Work inside Momentus — not on paper or printed sheets — in the past 30 days. Event Work is generated automatically from the service order; the signal here is whether operations manages it inside the platform, not whether it exists.

**Engagement · Feature usage — Events with actively managed Event Work, by operations department**  
Number of events where operations actively engages with (views, updates, or completes) the received Event Work inside Momentus, broken out by operations department (e.g. Facilities, F&B, AV, Security) — a breadth measure of how widely departments manage their work through the platform rather than defaulting to printed sheets or room diagrams alone, and rather than a per-event average that can look healthy while whole departments never engage at all.

**Retention · Return rate — Month-over-month return rate, Director/department-head tier**  
Percentage of active Operations Directors and department heads in a given month who were also active the prior month — scoped to the management tier specifically, since crew and staff are frequently no-login users and wouldn't be a meaningful retention signal. Consistent return signals the platform has embedded into how the Director orchestrates, not just initial setup.

**Efficiency · Time to value — Time for a Director's team to reach full orchestration inside Momentus**  
Time from when an Operations Director begins directing work through Momentus for a given capability to the point their team is running that orchestration fully inside the platform — without configuration blockers or falling back to outside tools. A shrinking time-to-value signals the platform delivers on its promise quickly, not just eventually.

**Effectiveness · Task success — % of events fully orchestrated end-to-end inside Momentus**  
Percentage of events where the Operations Director successfully orchestrated all Event Work end-to-end inside Momentus — every department's Event Work received, tracked, and closed — without an unresolved incident or a manual reconciliation step required afterward. Measures whether the whole event's operations were successfully directed, not whether any single piece of Event Work got checked off.

#### Rationale

**The core failure Momentus Work addresses**  
The vertical research is explicit: "AMER customers use more paper-based manual process for job assignment and communication." Execution on the ground currently happens on printed sheets, radio, and email follow-up, leaving the Operations Director to coordinate and reconstruct status manually. Momentus Work rises only when that execution moves inside the platform — it cannot be gamed by a piece of Event Work sitting in the system and never being acted on.

**Why Momentus Work is the hardest and most valuable metric**  
The value realization gap is largest in operations. Enterprise customers range "from using customized reports to MWO (Mobile Work Orders) to no ops in Momentus due to usability, cost, and learning curve." Momentus Work directly measures whether that gap is closing — and it's the gap the convention center research identified as most underserved.

**How Momentus Work completes Momentus Events**  
Momentus Work is the final link. Momentus Opportunities hands off a contracted booking. Momentus Plans hands off a detailed plan. Momentus Work completes the loop by executing that plan inside the platform. An event that passes through Momentus Opportunities, Momentus Plans, and Momentus Work counts toward Momentus Events. The Operations Director is the last mile.

**What Momentus Work unlocks beyond single-event execution**  
Momentus Work's value compounds when venues run multiple concurrent events. Operations teams that execute inside Momentus gain the ability to think holistically — balancing load in and load out across events, deploying crew efficiently, and avoiding redundant labor. A venue running on paper can only optimize one event at a time. Momentus Work measures whether operations has the platform foundation to think bigger.

**Why the Planning-to-Ops handoff is the highest-stakes moment**  
Planning to Operations is the critical line of value delivery — it's where the client finally experiences what the venue promised. Every detail that stays in an email, a Word doc, or a verbal briefing instead of the platform is a risk that lands on the Operations Director's team without a safety net. Momentus Work rises when that handoff is clean, written, and inside Momentus.

**What does the gap look like at its most extreme?**  
One convention center supervisor described it plainly: "technology stops at the supervisor." Front-line crew work from a printed assignment and a radio — no device, no login — so every completion, delay, and incident is relayed verbally and then reconstructed from memory into a manual end-of-day report emailed to other departments. Momentus Work only reflects reality once that hand-translation step disappears, not just once a piece of Event Work exists somewhere in the platform.

### Momentus Financial

The strategic approach Momentus has chosen for Financial. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.

**Primary object:** Event Financials

**Primary persona:** Finance Director — "The Financial Steward"

**Primary job:** Reconcile Event Financials

**Mission:** We make Finance Momentus by consolidating records to help financial teams set truth as north star.

**Vision:** Momentus keeps every event's financial record clean and handy, budget-to-actual variance visible in real time, and month-end position illuminated by amplified expertise and data insights. With reliable data entered at the source, manual reconciliation handled, variances and disputes caught before they reach the close, and corrective action surfaced right when it's needed. So finance directors can focus their judgment on what matters most to make every event Momentus.

**Why We Do It:** Because we believe financial teams hold the truth every other team depends on and they don't want that truth to arrive too late to shape what happens next.

#### Product Area North Star Metric — Momentus Financials (MF) (core value)

**Finance Director's expertise amplified**

Momentus Financial core value is delivered to the Finance Director when their expertise is amplified. Momentus Financials signals that we are delivering on that promise — that the numbers every other team depends on are trustworthy in real time, not accurate three weeks after close. When the key input metrics below are all moving in the right direction, it means finance directors are shaping what happens next instead of only explaining what already happened.

_Full metric definition:_ The number of events whose full financial closeout — budget reconciliation, GL (General Ledger) matching, invoice generation and approval — is completed entirely inside Momentus during a rolling 30-day window, without falling back to a separate ERP (Enterprise Resource Planning) system (e.g. PeopleSoft), spreadsheet, or manual cross-system reconciliation. MF measures whether that truth is available in real time, not just accurate three weeks after close — the difference between a financial record that shapes decisions and one that only explains them afterward.

`Peer metric alongside MO / MP / MW`  `Closes the multi-system reconciliation gap`  `Direct measure of financial value realization`

#### Key Input Metrics

**Adoption · Active user — Active Finance users reconciling events in Momentus**  
Number of Finance/Controller users who created or updated at least one event financial record inside Momentus — not PeopleSoft or a spreadsheet — in the past 30 days.

**Engagement · Feature usage — Avg. GL/invoice actions completed per closeout inside Momentus**  
Average number of reconciliation, GL, and invoice actions completed per event inside the platform vs. handled in an outside ERP.

**Retention · Return rate — Month-over-month Finance user return rate**  
Percentage of active Finance users in a given month who were also active the prior month — matches Finance's monthly close cadence.

**Efficiency · Time to value — Avg. days from event end to fully reconciled close**  
Median calendar days from event close to a fully reconciled, invoiced, and approved financial record. Directly named as a KPI (Key Performance Indicator) in the research: "Days to event close."

**Effectiveness · Task success — % of events reaching full reconciliation without manual cross-system correction**  
Percentage of events that close without Finance needing to pull data from PeopleSoft, payroll, or another outside system to complete it.

#### Rationale

**The core failure Momentus Financials addresses**  
Finance today assembles a financial picture by hand from PeopleSoft, Enterprise, payroll, ticketing, and contractor invoices — "it takes three different reports from PeopleSoft and an Enterprise report, then I combine the data." Momentus Financials rises only when that full picture is built inside Momentus — it cannot be gamed by creating a budget and never reconciling actuals against it.

**Why Momentus Financials is hard to achieve**  
The financial lifecycle of an event routinely outlives the event itself: contractor invoices arrive weeks or months late — one venue reported "an unexpected $20K invoice... four months after the event closed" — and end-of-month close is unpredictable depending on when they post. Momentus Financials measures whether that tail is shrinking.

**How Momentus Financials relates to Momentus Opportunities, Momentus Plans, and Momentus Work**  
Momentus Financials doesn't replace or complete the Momentus Events chain — it's a parallel confirmation that what Sales, Planning, and Operations produced actually reconciles to real dollars. An event can be a full success across Momentus Opportunities, Momentus Plans, and Momentus Work and still be a financial mess if it isn't reconciled cleanly.

**Why public/institutional venues make this harder**  
City-owned and public assembly venues route vendor and budget decisions through formal procurement and government approval channels, adding friction that private venues don't face. Features supporting Momentus Financials need to respect that constraint, not assume fast, flexible vendor relationships.

**What Momentus Financials unlocks beyond a single event's close**  
Clean, timely reconciliation is what makes self-serve department profit-and-loss (P&L) reporting, trend/what-if budget modeling, and stakeholder-ready economic impact reporting possible. Finance can't build any of that on data that's still being manually stitched together.

### Momentus Leadership

The strategic approach Momentus has chosen for Leadership. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.

**Primary object:** Event Intelligence

**Primary job:** Synthesize Event Intelligence

**Mission:** We make Events Momentus by synthesizing events to help leadership teams steer with a clear vision.

**Vision:** Momentus keeps every event's full record clean and handy, performance across sales, planning, and operations visible in real time, and next-event decisions illuminated by amplified expertise and data insights. With reliable visibility across every team, manual cross-department reporting handled, gaps between estimate and delivery caught before they repeat, and the next opportunity to improve surfaced right when it's needed. So venue directors can focus their judgment on what matters most to make every event Momentus.

**Why We Do It:** Because we believe leadership teams have the drive to succeed but need help managing the complexity of organizations this size, not another patchwork of reports pieced together after the fact.

#### Product Area North Star Metric — Momentus Intelligence (MI) (core value)

**Venue Director's expertise amplified**

Momentus Leadership core value is delivered to the Venue Director when their expertise is amplified. Momentus Intelligence signals that we are delivering on that promise — that every team is performing as one connected story, not a patchwork of reports pieced together after the fact. When the key input metrics below are all moving in the right direction, it means venue directors are steering with a clear vision instead of assembling one from five different departments.

_Full metric definition:_ The number of events where the signals from Sales, Planning, Operations, and Finance are fully synthesized into a single connected story — visible to leadership entirely inside Momentus, in real time, during a rolling 30-day window — without being manually assembled from four separate departments. MI is the proof point for Leadership's strategic bet: that steering a venue requires seeing the whole picture as one story, not reconstructing it from five disconnected reports after the fact.

`Not a vanity metric`  `Expresses customer value`  `Leading indicator of revenue`

#### Key Input Metrics

**Adoption · Active user — Active venue directors viewing Event Intelligence**  
Number of venue directors or other leadership users who opened an Event Intelligence view inside Momentus in the past 30 days. Measures how many leaders get their cross-functional picture from Momentus instead of assembling it themselves.

**Engagement · Feature usage — Avg. functions represented per Event Intelligence view**  
Average number of the four functions — Sales, Planning, Operations, Finance — with live data represented in a given Event Intelligence view. Measures how complete the connected story is, not just whether a view exists.

**Retention · Return rate — Week-over-week Event Intelligence return rate**  
Percentage of leadership users who returned to an Event Intelligence view in a given week who also did the week before. A leader who stops returning is falling back to manually assembled reporting.

**Efficiency · Time to value — Avg. time from signal change to leadership visibility**  
Median time between a change in an underlying Sales, Planning, Operations, or Finance signal and that change appearing in Event Intelligence. Shrinking time means the story stays current instead of going stale.

**Effectiveness · Task success — % of events with a fully synthesized story**  
Percentage of events where all four functions' signals are represented and current in Event Intelligence, with no gaps. The North Star itself, as a rate.

#### Rationale

**Why not just give leadership a dashboard?**  
A dashboard still requires someone to build and maintain the connections between Sales, Planning, Operations, and Finance data. Momentus Intelligence measures whether that connection already exists inside the platform — automatically — not whether a report happened to be built well.

**What does Momentus Intelligence tell us that Momentus Events doesn't?**  
Momentus Events measures whether the full lifecycle completed inside Momentus. Momentus Intelligence measures whether leadership can actually see that lifecycle as one story while it's happening. Completion and visibility are different problems — a venue can have one without the other.

**How does Momentus Intelligence align Product Management, Engineering, and Design?**  
Any feature that fragments the leadership view — a report that only covers one function, a metric that requires manual reconciliation — is a product failure. Momentus Intelligence gives every team a shared definition of what "visible" means for a venue's leadership.

## Momentus Offering (Strategy Layer)

A capability matrix showing which Momentus products serve each stage of the event lifecycle — "stage" here means Sales/Planning/Operations/Financial/Leadership, not the 8 JTBD stages used elsewhere on this site. Rows are generic capability names, ordered from broadest (found across the most products) to narrowest (product-specific). Each area section below shows only capabilities tagged to that area, plus universal (cross-area) ones; the Leadership section shows every capability. "Inferred" flags a piece-to-capability assignment that is this map's own judgment call rather than a literal statement in the source. A "Third-Party" line lists non-Momentus tools customers use for that capability where known.

### Momentus for Sales (Sales)

#### Core Event Record (3/4 products)

_How the Sales Manager uses this: Creates this record the moment a lead becomes worth tracking — everything else attaches to it._

- **Enterprise — Events** — The central event record holding potential/current/future event data; supports seasons/series, event statistics, meeting attendees, cancel/restore, and five configurable calendar views. _(inferred)_ _(source: Enterprise Events – Momentus Support Center)_
- **Elite — Events** — Core event record supporting tags, notes, document management (Create Event Summaries/Hold Confirmations), and full event duplication. _(inferred)_ _(source: Elite Events – Momentus Support Center)_
- **WeTrack — Events** — Ties together Risk Profiles/Assessments, Jobs, Incidents, and Logs for a specific event via zones/areas; on event day, status changes to Live and the Control module filters by the selected event. _(inferred)_ _(source: WeTrack About Events in WeTrack – WeTrack)_

#### Accounts & Contacts Management (2/4 products)

_How the Sales Manager uses this: Looks up an account's full relationship history before a call so they're not starting cold._

- **Enterprise — Accounts & Contacts** — Manages Account (company/organization) and Contact (person) records with affiliations, designations/statuses, relationships (incl. bill-to), duplicate checking, and CSV/XLSX/XML import. _(inferred)_ _(source: Enterprise Accounts & Contacts – Momentus Support Center)_
- **Elite — Accounts & Contacts** — Manages Account/Contact records, tags, hierarchies, groups, and duplicate merging, plus each contact’s Booking Portal account. _(inferred)_ _(source: Elite Accounts & Contacts – Momentus Support Center)_

#### Contract Generation & Approval (2/4 products)

_How the Sales Manager uses this: Generates the space rental agreement directly from the confirmed opportunity, without retyping terms into Word._

- **Enterprise — Contracts** — Generates the space rental agreement for an event, bundling bookings/service/housing orders, contract addendums, clauses, and revision history tracking. _(inferred)_ _(source: Enterprise Contracts – Momentus Support Center)_
- **Elite — Sales (Contracts)** — Proposal/contract creation and revisions plus the contract approval workflow — part of Elite’s combined Sales module. _(source: Elite Sales – Momentus Support Center)_

#### Event Booking / Facility Reservation (2/4 products)

_How the Sales Manager uses this: Checks the Booking Calendar against a client's requested dates before committing to anything verbally._

- **Enterprise — Facility Booking** — Reserves and sells space via Bookings, with a Booking Calendar/Agenda, Availability Report, recurring bookings search, and booking-order auto-generation for space rental charges. _(inferred)_ _(source: Enterprise Facility Booking – Momentus Support Center)_
- **Elite — Booking Events** — Books events or holds with statuses (prospect/tentative/definite), conflict checking, blackouts/internal events, and Manage Holds by Day. _(inferred)_ _(source: Elite Booking Events – Momentus Support Center)_

#### Exhibition & Exhibitor Management (2/4 products)

_How the Sales Manager uses this: Manages the exhibitor sales pipeline and booth proposals as its own mini sales cycle inside the larger event._

- **Enterprise — Exhibition Management** — Manages Exhibitors as CRM extensions, exhibitor sales pipelines, booth proposals, co-exhibitors, automatic booth-space charging, and exhibitor invoicing. _(inferred)_ _(source: Enterprise Exhibition Management – Momentus Support Center)_
- **Elite — Exhibitor Ordering** — Configures events for exhibitor orders, runs an online Exhibitor Store (with instructions/item images), creates/refunds exhibitor invoices, and downloads exhibitor service orders. _(inferred)_ _(source: Elite Exhibitor Ordering – Momentus Support Center)_

#### Integrations & Connectors (2/4 products)

- **Elite — Integrations** — Elite’s standard integrations: DocuSign (e-signature for proposals/contracts/invoices), Tessitura (push performances, pull ticketing/attendance data), the EventDraw Connector (API-credentialed floor-plan linking), and access to the Momentus Connect marketplace/API. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_
- **WeTrack — Integrations** — Automatic event sync between Momentus Elite and WeTrack, plus data-visualization integrations with Google Looker Studio (via Google Sheets) and Microsoft Power BI. _(inferred)_ _(source: WeTrack Integrations – WeTrack)_

#### Opportunity / Inquiry Qualification (2/4 products)

_How the Sales Manager uses this: Logs a new inquiry here first, before spending time on a proposal, to catch deal-breakers early._

- **Enterprise — Event Opportunities** — Tracks a specific possibility of business with an account, usually used at the beginning of a sale, including Room Flow hotel forecasting, economic impact figures, and Group Profiles for recurring events. _(source: Enterprise Event Opportunities – Momentus Support Center)_
- **Elite — Sales (Inquiries)** — Manages Inquiries with rental rates, economic impact, estimated revenue, and probability-of-closing updates — part of Elite’s combined Sales module. _(source: Elite Sales – Momentus Support Center)_

#### AI Assistant (1/4 products)

- **Platform — Ask Mo** — Momentus’s AI assistant: Ask Mo Support gives natural-language how-to answers from the knowledge base (free on all packages), and Ask Mo Data gives natural-language answers to Enterprise data questions (requires Pro/Premier packaging and a specific role). Not available for Azure-hosted or Singapore accounts. _(source: About Ask Mo and Ask Mo Support – Momentus Connect)_

#### APIs & Webhooks (1/4 products)

- **Platform — APIs & Webhooks** — The Momentus Connect API is a unified gateway for accessing the APIs of Momentus’s core products, with Swagger-format interactive reference docs, credential/trusted-IP-range management, and a built-in webhook management interface. _(inferred)_ _(source: General – Momentus Connect)_

#### Booking Cancellation & Lost-Business Tracking (1/4 products)

_How the Sales Manager uses this: Marks a hold Lost vs. Cancel deliberately, since the two carry different reporting and re-booking implications._

- **Elite — Postponed, Canceled, and Lost Holds and Events** — Best-practice workflows for canceling or marking events/holds as Lost vs. Cancel, restoring them, and tracking lost business. _(inferred)_ _(source: Elite Postponed, Canceled, and Lost Holds and Events – Momentus Support Center)_

#### Campaign / Mass Outreach (1/4 products)

_How the Sales Manager uses this: Runs targeted email or phone campaigns against a filtered account list rather than one-by-one outreach._

- **Enterprise — Campaigns** — Gathers accounts/contacts meeting defined criteria for mass communication efforts; campaigns can be copied, edited, and worked via email or phone outreach steps. _(inferred)_ _(source: Enterprise Campaigns – Momentus Support Center)_

#### Cross-Product Analytics (1/4 products)

_How the Sales Manager uses this: Gets the first release of this — standard CRM dashboards — before Operations/Financials analytics ship._

- **Platform — Momentus Analytics** — Analytics platform with three parts: Observe (standard Sales/CRM dashboards), Empower (drag-and-drop or AI-assisted custom dashboards), and Benchmarking (peer comparison via an AI classifier mapped to IAVM standards, US convention centers only). Data replicates into a separate analytics data lake every 24 hours; first release is Sales-focused, with Operations/Financials planned incrementally. _(source: About Momentus Analytics – Momentus Connect)_

#### Email Communication (1/4 products)

_How the Sales Manager uses this: Sends proposal and follow-up email with merge fields straight from the account/contact record._

- **Elite — Email** — Sends ad hoc and templated email with merge fields to multiple recipients, tracks bounces, and manages signatures/templates. _(inferred)_ _(source: Elite Email – Momentus Support Center)_

#### Follow-Up & Checklist Tasks (1/4 products)

_How the Sales Manager uses this: Tracks lead follow-ups and contract/insurance due dates so nothing slips between touchpoints._

- **Elite — Tasks & Task Templates** — Tracks lead follow-ups, contract/insurance due dates, and event checklists via Tasks; Task Templates can be applied/duplicated and drive Tessitura and other cross-department workflows. _(inferred)_ _(source: Elite Tasks & Task Templates – Momentus Support Center)_

#### Live Entertainment Booking (1/4 products)

_How the Sales Manager uses this: Manages artist and performance Avails and house holds — a distinct booking workflow from standard space rental._

- **Elite — Live Entertainment** — Booking workflow for artists/performances with Avails views, house holds, announce/on-sale/pre-sale date management, and post-show settlement/ticket-scaling reports. _(inferred)_ _(source: Elite Live Entertainment – Momentus Support Center)_

#### Membership Management (1/4 products)

_How the Sales Manager uses this: Administers member renewals and additions as a revenue stream that runs in parallel to event bookings._

- **Enterprise — Membership** — Creates, renews, and administers members via membership types/statuses; supports prospective members and individual or group membership additions. Legacy Membership (pre-v30.97) is retained for continuity after this was rewritten. _(inferred)_ _(source: Enterprise Membership – Momentus Support Center)_

#### Multi-Venue Shared Calendar (1/4 products)

- **Platform — OneView** — A shared calendar platform for corporate campuses, universities, and venue-management groups to view events/availability across all their venues on Momentus platforms, including view-only access for third-party contractors/stakeholders. _(source: OneView – Momentus Connect)_

#### No-Code Workflow Automation (1/4 products)

- **Platform — Momentus Workflow Builder** — A low-code, drag-and-drop automation platform connecting Momentus to external systems (HubSpot, Salesforce, NetSuite, SAP, Microsoft 365, DocuSign, Power BI, etc.), with trigger-action workflows, a sandbox test environment, and execution-log monitoring. Requires Enterprise 25.3+. _(source: About Momentus Workflow Builder – Momentus Connect)_

#### Non-Event Sales Pipeline (CRM) (1/4 products)

_How the Sales Manager uses this: Tracks non-event business opportunities, like sponsorships, that don't have their own event record yet._

- **Enterprise — Opportunities** — Non-event sales pipeline feature, distinct from Event Opportunities which is used specifically for potential events. _(source: Enterprise Opportunities – Momentus Support Center)_

#### Partner Integration Marketplace (1/4 products)

- **Platform — Momentus Connect Marketplace & Administration** — A marketplace showcasing integrations/value-added services for all Momentus products; users get a default User role, upgradable to Customer Admin (configure apps, manage users) or Custom Roles scoped to specific apps. _(inferred)_ _(source: Momentus Connect About Momentus Connect – Momentus Connect)_

#### Reporting & Dashboards (1/4 products)

_How the Sales Manager uses this: Pulls prebuilt account/revenue reports without needing a dedicated analyst._

- **Elite — Insights (Reports & Dashboards)** — Elite’s reporting engine: a Report/Dashboard Library and Document Template Library with prebuilt examples (e.g. New Accounts by Year, Event Order/BEO templates), a custom report builder, and a Data Dictionary. _(inferred)_ _(source: Elite Insights Reports & Dashboards – Momentus Support Center)_

#### Sales Goals & Revenue Forecasting (1/4 products)

_How the Sales Manager uses this: Tracks Probable Revenue and progress against Sales Goals to know if they're on pace for the period._

- **Enterprise — Sales** — Account Leads (pre-qualification), Probable Revenue calculation (potential revenue × win probability), Sales Goals tracking, and the Group Room Calendar. _(source: Enterprise Sales – Momentus Support Center)_

#### Status Indicator System (RAG) (1/4 products)

- **WeTrack — RAG Status System** — The Red/Amber/Green traffic-light framework (plus Grey=Not Started and Blue=Complete for tasks) used consistently across Projects/Tasks/Sub-Tasks and Risks/Issues/Opportunities to communicate health at a glance. _(inferred)_ _(source: WeTrack The RAG (Red, Amber, Green) System_ Basic Principles – WeTrack)_

#### Sustainability Tracking (1/4 products)

- **WeTrack — Sustainability** — Tracks environmental/social/governance indicators (energy use, waste, community program growth, labor practices) against targets, with achievements when targets are hit, viewable via lists, dashboards, and reports. _(inferred)_ _(source: WeTrack Introduction to Sustainability – WeTrack)_

#### System Admin & Account-Wide Settings (1/4 products)

- **Elite — System Admin Info & Account-Wide Settings** — Account-wide configuration: Open API credential creation, business classifications, contact roles, email/phone/address types, booking-portal branding, and status/reference-data customization. _(inferred)_ _(source: Elite System Admin Info & Account-Wide Settings – Momentus Support Center)_

#### User Role Permissions (1/4 products)

- **Elite — User Role Permissions** — Documents System Admin and Insights Admin system roles plus granular feature/data permissions used to build custom user roles; not all permissions are available in every tier. _(inferred)_ _(source: Elite User Role Permissions – Momentus Support Center)_

### Momentus for Planning (Planning)

#### Core Event Record (3/4 products)

_How the Event Planner uses this: Inherits it at handoff and fills in the full function/detail picture before operations can act._

- **Enterprise — Events** — The central event record holding potential/current/future event data; supports seasons/series, event statistics, meeting attendees, cancel/restore, and five configurable calendar views. _(inferred)_ _(source: Enterprise Events – Momentus Support Center)_
- **Elite — Events** — Core event record supporting tags, notes, document management (Create Event Summaries/Hold Confirmations), and full event duplication. _(inferred)_ _(source: Elite Events – Momentus Support Center)_
- **WeTrack — Events** — Ties together Risk Profiles/Assessments, Jobs, Incidents, and Logs for a specific event via zones/areas; on event day, status changes to Live and the Control module filters by the selected event. _(inferred)_ _(source: WeTrack About Events in WeTrack – WeTrack)_

#### Event Detailing (Functions, Items, Instructions) (2/4 products)

_How the Event Planner uses this: Builds out every function's items, instructions, and packages — the bulk of a planner's daily work._

- **Enterprise — Functions** — Sub-activities of an event with their own date/time/space; supports Function Requirements, presenters, Topics & Tracks for conferences, Function Scripting, and Smart Import. _(inferred)_ _(source: Enterprise Functions – Momentus Support Center)_
- **Elite — Detailing Events** — Adds items, instruction sets, packages, price schedules, discounts, and rental rates to event functions; supports mass edit/add and Event Order creation. _(inferred)_ _(source: Elite Detailing Events – Momentus Support Center)_

#### Integrations & Connectors (2/4 products)

_How the Event Planner uses this: Relies on the EventDraw connector to keep room diagrams linked to the live event record._

- **Elite — Integrations** — Elite’s standard integrations: DocuSign (e-signature for proposals/contracts/invoices), Tessitura (push performances, pull ticketing/attendance data), the EventDraw Connector (API-credentialed floor-plan linking), and access to the Momentus Connect marketplace/API. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_
- **WeTrack — Integrations** — Automatic event sync between Momentus Elite and WeTrack, plus data-visualization integrations with Google Looker Studio (via Google Sheets) and Microsoft Power BI. _(inferred)_ _(source: WeTrack Integrations – WeTrack)_

#### Room / Floor Plan Diagramming (2/4 products)

_How the Event Planner uses this: Draws the room layout that operations will later execute from — errors here become setup errors on-site._

- **Enterprise — Room Diagrams / EventDraw** — Space-specific room layout diagramming with layer management, a shape library, hotkeys, and direct service-order creation from a diagram; the 2026.2 EventDraw connector adds SSO-integrated diagramming alongside it. _(inferred)_ _(source: Enterprise Room Diagrams – Momentus Support Center)_
- **Elite — EventDraw Connector** — API-credentialed floor-plan linking via the EventDraw Connector, part of Elite Integrations. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_

#### AI Assistant (1/4 products)

- **Platform — Ask Mo** — Momentus’s AI assistant: Ask Mo Support gives natural-language how-to answers from the knowledge base (free on all packages), and Ask Mo Data gives natural-language answers to Enterprise data questions (requires Pro/Premier packaging and a specific role). Not available for Azure-hosted or Singapore accounts. _(source: About Ask Mo and Ask Mo Support – Momentus Connect)_

#### APIs & Webhooks (1/4 products)

- **Platform — APIs & Webhooks** — The Momentus Connect API is a unified gateway for accessing the APIs of Momentus’s core products, with Swagger-format interactive reference docs, credential/trusted-IP-range management, and a built-in webhook management interface. _(inferred)_ _(source: General – Momentus Connect)_

#### Back-Office Registration Management (1/4 products)

_How the Event Planner uses this: Manages waitlists and registrant types after the public registration form is live._

- **Enterprise — General Registration** — Back-office registration order management: promo codes, waitlists, registrant types, seating chart auto-fill, session swapping, and Continuing Education Credit tracking. _(inferred)_ _(source: Enterprise General Registration – Momentus Support Center)_

#### Calendar & Schedule Views (1/4 products)

_How the Event Planner uses this: Checks the Function Calendar to spot scheduling conflicts across a multi-function event._

- **Elite — Calendar** — Event and Function Calendar views (color-coded, filterable, exportable to PDF), custom Avails headers, and publishing to Apple/Google/Outlook calendars. _(inferred)_ _(source: Elite Calendar – Momentus Support Center)_

#### Cross-Product Analytics (1/4 products)

- **Platform — Momentus Analytics** — Analytics platform with three parts: Observe (standard Sales/CRM dashboards), Empower (drag-and-drop or AI-assisted custom dashboards), and Benchmarking (peer comparison via an AI classifier mapped to IAVM standards, US convention centers only). Data replicates into a separate analytics data lake every 24 hours; first release is Sales-focused, with Operations/Financials planned incrementally. _(source: About Momentus Analytics – Momentus Connect)_

#### Email Communication (1/4 products)

_How the Event Planner uses this: Uses templated email to distribute finalized event details to clients and vendors without leaving the platform._

- **Elite — Email** — Sends ad hoc and templated email with merge fields to multiple recipients, tracks bounces, and manages signatures/templates. _(inferred)_ _(source: Elite Email – Momentus Support Center)_

#### Event / Session Series & Recurrence (1/4 products)

_How the Event Planner uses this: Bulk-edits a whole recurring series instead of touching each instance individually._

- **Elite — Series** — Groups related recurring events into a Series for bulk editing, adding existing events, and shared series-level notes/documents. _(inferred)_ _(source: Elite Series – Momentus Support Center)_

#### Follow-Up & Checklist Tasks (1/4 products)

_How the Event Planner uses this: Uses event checklists to confirm every pre-event requirement before handoff._

- **Elite — Tasks & Task Templates** — Tracks lead follow-ups, contract/insurance due dates, and event checklists via Tasks; Task Templates can be applied/duplicated and drive Tessitura and other cross-department workflows. _(inferred)_ _(source: Elite Tasks & Task Templates – Momentus Support Center)_

#### Inventory & Pricing Setup (1/4 products)

_How the Event Planner uses this: Sets package pricing once so it applies consistently across every booking of that package._

- **Elite — Inventory & Prices** — Manages inventory items/categories/departments, price schedules, packages, and Instruction Sets, with bulk cost/price/GL-code adjustment and multi-language translation. _(inferred)_ _(source: Elite Inventory & Prices – Momentus Support Center)_

#### Multi-Venue Shared Calendar (1/4 products)

- **Platform — OneView** — A shared calendar platform for corporate campuses, universities, and venue-management groups to view events/availability across all their venues on Momentus platforms, including view-only access for third-party contractors/stakeholders. _(source: OneView – Momentus Connect)_

#### Native BEO Builder (upcoming) (1/4 products)

_How the Event Planner uses this: Would replace today's workaround of generating BEO-style output from Service Orders with a purpose-built editor._

- **Enterprise — Banquet Event Order (BEO), native builder** — An in-system Banquet Event Order builder — proof-of-concept targeted for release 25.3, first built for Disney. Service Orders already produce BEO-style Event Order reports today; this would be a dedicated native builder. _(source: PMO-Enterprise Convention Centers - Product Strategy.pdf / PMO-Enterprise for Hotels, Casinos and Resorts - 3 Year Strategy.pdf)_

#### No-Code Workflow Automation (1/4 products)

- **Platform — Momentus Workflow Builder** — A low-code, drag-and-drop automation platform connecting Momentus to external systems (HubSpot, Salesforce, NetSuite, SAP, Microsoft 365, DocuSign, Power BI, etc.), with trigger-action workflows, a sandbox test environment, and execution-log monitoring. Requires Enterprise 25.3+. _(source: About Momentus Workflow Builder – Momentus Connect)_

#### Partner Integration Marketplace (1/4 products)

- **Platform — Momentus Connect Marketplace & Administration** — A marketplace showcasing integrations/value-added services for all Momentus products; users get a default User role, upgradable to Customer Admin (configure apps, manage users) or Custom Roles scoped to specific apps. _(inferred)_ _(source: Momentus Connect About Momentus Connect – Momentus Connect)_

#### Project & Task Planning (Gantt, Kanban) (1/4 products)

_How the Event Planner uses this: Used less by the classic Event Planner and more by cross-functional teams coordinating a large-scale event's moving parts._

- **WeTrack — Projects, Tasks & The Gantt Chart** — Projects are organizational containers (Owner, Lead Department, tags) with RAG status and percent-complete auto-calculated from constituent Tasks/Milestones; the Planning Dashboard adds Kanban boards and widgets (Momentum, Department Task RAG Breakdown, on-time-milestone Leaderboard), and the Gantt Chart gives a visual timeline with dependency arrows. _(inferred)_ _(source: WeTrack Introduction to Planning – WeTrack)_

#### Public Registration Configuration (1/4 products)

_How the Event Planner uses this: Configures the public-facing registration form once per event type rather than rebuilding it manually._

- **Enterprise — Registration** — Public-facing online registration configuration: registrant profile fields, multi-language/multi-page registration, guest and group registration, dictionaries, and PayPal Express Checkout. Registration powered by InvitePeople offers a white-label alternative via SSO, syncing config and orders/payments back to Enterprise. _(inferred)_ _(source: Enterprise Registration – Momentus Support Center)_

#### Reporting & Dashboards (1/4 products)

- **Elite — Insights (Reports & Dashboards)** — Elite’s reporting engine: a Report/Dashboard Library and Document Template Library with prebuilt examples (e.g. New Accounts by Year, Event Order/BEO templates), a custom report builder, and a Data Dictionary. _(inferred)_ _(source: Elite Insights Reports & Dashboards – Momentus Support Center)_

#### Risk, Issue & Opportunity Planning (1/4 products)

- **WeTrack — Risk, Issue & Opportunity Management** — An optional module tracking Risks (might happen), Issues (currently happening), and Opportunities using five-point impact/probability scales and seven strategies (Avoid, Exploit, Mitigate, Insure, Share, Contingency, Accept). _(inferred)_ _(source: WeTrack Introduction to Risks, Issues and Opportunities – WeTrack)_

#### Speaker / Session Proposal Management (1/4 products)

_How the Event Planner uses this: Runs the call-for-proposals and evaluator scoring for conference content._

- **Enterprise — Session Proposals** — Collects, evaluates, and manages speaker/abstract proposals for conferences, with evaluator scoring criteria, submission forms, and Topics for conference tracks. Not available in Elite. _(source: Enterprise Session Proposals – Momentus Support Center)_

#### Status Indicator System (RAG) (1/4 products)

- **WeTrack — RAG Status System** — The Red/Amber/Green traffic-light framework (plus Grey=Not Started and Blue=Complete for tasks) used consistently across Projects/Tasks/Sub-Tasks and Risks/Issues/Opportunities to communicate health at a glance. _(inferred)_ _(source: WeTrack The RAG (Red, Amber, Green) System_ Basic Principles – WeTrack)_

#### Sustainability Tracking (1/4 products)

- **WeTrack — Sustainability** — Tracks environmental/social/governance indicators (energy use, waste, community program growth, labor practices) against targets, with achievements when targets are hit, viewable via lists, dashboards, and reports. _(inferred)_ _(source: WeTrack Introduction to Sustainability – WeTrack)_

#### System Admin & Account-Wide Settings (1/4 products)

- **Elite — System Admin Info & Account-Wide Settings** — Account-wide configuration: Open API credential creation, business classifications, contact roles, email/phone/address types, booking-portal branding, and status/reference-data customization. _(inferred)_ _(source: Elite System Admin Info & Account-Wide Settings – Momentus Support Center)_

#### User Role Permissions (1/4 products)

- **Elite — User Role Permissions** — Documents System Admin and Insights Admin system roles plus granular feature/data permissions used to build custom user roles; not all permissions are available in every tier. _(inferred)_ _(source: Elite User Role Permissions – Momentus Support Center)_

#### Venue / Room Configuration (1/4 products)

_How the Event Planner uses this: Sets up combo-room splits once, so every future booking against that space just works._

- **Elite — Venues & Rooms** — Configures venues, rooms, and Combo Rooms (e.g. a ballroom splittable into Ballroom A+B, B+C, etc.) for booking; combos of combos aren’t supported. _(inferred)_ _(source: Elite Venues & Rooms – Momentus Support Center)_

### Momentus for Operations (Operations)

#### Core Event Record (3/4 products)

_How the Operations Director uses this: Reads it to know what's confirmed and when execution starts — receives it, doesn't create it._

- **Enterprise — Events** — The central event record holding potential/current/future event data; supports seasons/series, event statistics, meeting attendees, cancel/restore, and five configurable calendar views. _(inferred)_ _(source: Enterprise Events – Momentus Support Center)_
- **Elite — Events** — Core event record supporting tags, notes, document management (Create Event Summaries/Hold Confirmations), and full event duplication. _(inferred)_ _(source: Elite Events – Momentus Support Center)_
- **WeTrack — Events** — Ties together Risk Profiles/Assessments, Jobs, Incidents, and Logs for a specific event via zones/areas; on event day, status changes to Live and the Control module filters by the selected event. _(inferred)_ _(source: WeTrack About Events in WeTrack – WeTrack)_

#### Work Order / Task Management (3/4 products)

_How the Operations Director uses this: Doesn't create these — they're generated automatically from service orders — but assigns, tracks, and closes them through the team._

- **Enterprise — Work Orders** — Department-level delivery instructions generated from service orders; tracks item completion/covers (catering headcounts), Rush processing, and work order actuals. _(inferred)_ _(source: Enterprise Work Orders – Momentus Support Center)_
- **Elite — Jobs (Operations Hub)** — Jobs Management creates/assigns checklists; Jobs Fulfillment lets teams claim/complete jobs on mobile — part of the Operations Hub add-on for Elite Premier users, alongside an Event List/Dashboard with a Gantt chart and block-based Event Outlines (Elite’s BEO equivalent). _(source: Elite Operations Hub Overview – Momentus Support Center)_
- **WeTrack — Jobs (Control)** — Located within the Control module, tracks maintenance issues (e.g. a broken chair in a specific row) and venue/stadium checks across live events — distinct from WeTrack’s Planning-side Tasks. _(source: WeTrack Introduction to Jobs – WeTrack)_

#### Change Tracking (2/4 products)

_How the Operations Director uses this: Checks this to catch a late change before dispatching crew against an outdated plan._

- **Enterprise — Operations Change Log** — Operational reporting on changes made to an event after confirmation — targeted for release 25.2 per internal PMO strategy docs. Not yet documented in the live Support Center, so likely still unreleased or newly released. _(source: PMO-Enterprise Convention Centers - Product Strategy.pdf)_
- **Elite — Track Changes to Event Details** — Once a function status is set to Ready, tracks changes to functions/items/instructions so operations staff can see late edits on the Daily View and function change log; must be enabled by System Admin. _(inferred)_ _(source: Elite Track Changes to Event Details – Momentus Support Center)_

#### Integrations & Connectors (2/4 products)

_How the Operations Director uses this: Depends on WeTrack/Enterprise event sync so operational and risk data don't live in two disconnected systems._

- **Elite — Integrations** — Elite’s standard integrations: DocuSign (e-signature for proposals/contracts/invoices), Tessitura (push performances, pull ticketing/attendance data), the EventDraw Connector (API-credentialed floor-plan linking), and access to the Momentus Connect marketplace/API. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_
- **WeTrack — Integrations** — Automatic event sync between Momentus Elite and WeTrack, plus data-visualization integrations with Google Looker Studio (via Google Sheets) and Microsoft Power BI. _(inferred)_ _(source: WeTrack Integrations – WeTrack)_

#### Mobile Field Access (2/4 products)

_How the Operations Director uses this: Depends on this for crew to work from a device on the floor instead of carrying printed sheets._

- **Enterprise — Mobile Work Orders / Mobile Inventory** — Mobile apps within the Enterprise Operations Suite: Mobile Work Orders lets users view current work order information and complete item deliveries from a mobile device; Mobile Inventory lets staff search items and create inventory transactions from the floor. _(inferred)_ _(source: Enterprise Mobile Work Orders – Momentus Support Center)_
- **Elite — Mobile** — Mobile access to Elite via home-screen icon, Mobile Avails, Mobile Calendar, and Google Calendar sync on Android. _(inferred)_ _(source: Elite Mobile – Momentus Support Center)_

#### AI Assistant (1/4 products)

- **Platform — Ask Mo** — Momentus’s AI assistant: Ask Mo Support gives natural-language how-to answers from the knowledge base (free on all packages), and Ask Mo Data gives natural-language answers to Enterprise data questions (requires Pro/Premier packaging and a specific role). Not available for Azure-hosted or Singapore accounts. _(source: About Ask Mo and Ask Mo Support – Momentus Connect)_

#### APIs & Webhooks (1/4 products)

- **Platform — APIs & Webhooks** — The Momentus Connect API is a unified gateway for accessing the APIs of Momentus’s core products, with Swagger-format interactive reference docs, credential/trusted-IP-range management, and a built-in webhook management interface. _(inferred)_ _(source: General – Momentus Connect)_

#### Cross-Product Analytics (1/4 products)

- **Platform — Momentus Analytics** — Analytics platform with three parts: Observe (standard Sales/CRM dashboards), Empower (drag-and-drop or AI-assisted custom dashboards), and Benchmarking (peer comparison via an AI classifier mapped to IAVM standards, US convention centers only). Data replicates into a separate analytics data lake every 24 hours; first release is Sales-focused, with Operations/Financials planned incrementally. _(source: About Momentus Analytics – Momentus Connect)_

#### Email Communication (1/4 products)

- **Elite — Email** — Sends ad hoc and templated email with merge fields to multiple recipients, tracks bounces, and manages signatures/templates. _(inferred)_ _(source: Elite Email – Momentus Support Center)_

#### External-Facing Task Portal (1/4 products)

_How the Operations Director uses this: Lets external stakeholders complete their own tasks, like contract review or approvals, without operations chasing them down._

- **Enterprise — Event Portal** — A licensed public-facing portal where external users complete Event Portal Tasks (reviewing contracts, approving items) while internal staff manage Operations Tasks and portal messages/documents. _(inferred)_ _(source: Enterprise Event Portal – Momentus Support Center)_

#### Facility & Asset Maintenance (1/4 products)

_How the Operations Director uses this: Schedules non-event facility upkeep, like HVAC or equipment, separately from event-day work orders._

- **Enterprise — Job Management (Facility Maintenance)** — Schedules facility maintenance and other facility work, reserving space and creating service orders; supports Job Profiles as templates and linking jobs to fixed assets. Internal SME interviews describe this as not a full CMMS — no usage-based maintenance triggers, no parts/assembly hierarchy, and the old mobile FMS app was sunset. _(inferred)_ _(source: Enterprise Job Management – Momentus Support Center)_
- **Third-Party — MaintainX** — A dedicated facility-maintenance/CMMS tool some customers use instead of or alongside Enterprise’s Job Management module, per internal SME interviews — chosen for capabilities like usage-based maintenance triggers and mobile issue-reporting that Job Management doesn’t fully cover.

#### Follow-Up & Checklist Tasks (1/4 products)

- **Elite — Tasks & Task Templates** — Tracks lead follow-ups, contract/insurance due dates, and event checklists via Tasks; Task Templates can be applied/duplicated and drive Tessitura and other cross-department workflows. _(inferred)_ _(source: Elite Tasks & Task Templates – Momentus Support Center)_

#### Incident & Risk Management (1/4 products)

_How the Operations Director uses this: Used by the risk/safety side of operations, not the Operations Director's own work-order workflow directly._

- **WeTrack — Incident Management** — The Incident/Issue tracking system operations teams switch to at or just before event time, with geolocation to a precise site location, 1–5 severity grading, action-owner assignment, and Confidential incident visibility. _(source: WeTrack Introduction to Incidents – WeTrack)_
- **Third-Party — 24Now** — A competing incident/risk platform mentioned in internal SME interviews as using ML-driven camera monitoring to proactively flag risks — an approach Momentus doesn’t currently offer.

#### Inventory Management (1/4 products)

_How the Operations Director uses this: Checks on-hand equipment and consumable quantities before committing crew to a setup plan._

- **Enterprise — Inventory** — Maintains available quantities for equipment/consumables tied to resources, with cost synchronization, physical count batches, inventory valuation, and Excel-based import. _(inferred)_ _(source: Enterprise Inventory – Momentus Support Center)_

#### Multi-Venue Shared Calendar (1/4 products)

- **Platform — OneView** — A shared calendar platform for corporate campuses, universities, and venue-management groups to view events/availability across all their venues on Momentus platforms, including view-only access for third-party contractors/stakeholders. _(source: OneView – Momentus Connect)_

#### No-Code Workflow Automation (1/4 products)

- **Platform — Momentus Workflow Builder** — A low-code, drag-and-drop automation platform connecting Momentus to external systems (HubSpot, Salesforce, NetSuite, SAP, Microsoft 365, DocuSign, Power BI, etc.), with trigger-action workflows, a sandbox test environment, and execution-log monitoring. Requires Enterprise 25.3+. _(source: About Momentus Workflow Builder – Momentus Connect)_

#### On-Site Registration Check-In (1/4 products)

_How the Operations Director uses this: Used by front-of-house crew checking attendees in, not the Operations Director's own core workflow._

- **Enterprise — Registration Check-In (RCI) & Badges** — Checks registrants in/out via mobile (iOS app), self-service kiosk, or back office; includes badge templates, barcode/QR scanning, and Function Check-In. _(source: Enterprise Registration Check-In (RCI) & Badges – Momentus Support Center)_

#### Partner Integration Marketplace (1/4 products)

- **Platform — Momentus Connect Marketplace & Administration** — A marketplace showcasing integrations/value-added services for all Momentus products; users get a default User role, upgradable to Customer Admin (configure apps, manage users) or Custom Roles scoped to specific apps. _(inferred)_ _(source: Momentus Connect About Momentus Connect – Momentus Connect)_

#### Reporting & Dashboards (1/4 products)

- **Elite — Insights (Reports & Dashboards)** — Elite’s reporting engine: a Report/Dashboard Library and Document Template Library with prebuilt examples (e.g. New Accounts by Year, Event Order/BEO templates), a custom report builder, and a Data Dictionary. _(inferred)_ _(source: Elite Insights Reports & Dashboards – Momentus Support Center)_

#### Status Indicator System (RAG) (1/4 products)

_How the Operations Director uses this: Reads RAG color to triage which tasks or risks need attention first without opening every record._

- **WeTrack — RAG Status System** — The Red/Amber/Green traffic-light framework (plus Grey=Not Started and Blue=Complete for tasks) used consistently across Projects/Tasks/Sub-Tasks and Risks/Issues/Opportunities to communicate health at a glance. _(inferred)_ _(source: WeTrack The RAG (Red, Amber, Green) System_ Basic Principles – WeTrack)_

#### Sustainability Tracking (1/4 products)

_How the Operations Director uses this: Tracks ESG indicators (energy, waste, labor practices) for the operations they run, separate from event-day execution._

- **WeTrack — Sustainability** — Tracks environmental/social/governance indicators (energy use, waste, community program growth, labor practices) against targets, with achievements when targets are hit, viewable via lists, dashboards, and reports. _(inferred)_ _(source: WeTrack Introduction to Sustainability – WeTrack)_

#### System Admin & Account-Wide Settings (1/4 products)

- **Elite — System Admin Info & Account-Wide Settings** — Account-wide configuration: Open API credential creation, business classifications, contact roles, email/phone/address types, booking-portal branding, and status/reference-data customization. _(inferred)_ _(source: Elite System Admin Info & Account-Wide Settings – Momentus Support Center)_

#### User Role Permissions (1/4 products)

- **Elite — User Role Permissions** — Documents System Admin and Insights Admin system roles plus granular feature/data permissions used to build custom user roles; not all permissions are available in every tier. _(inferred)_ _(source: Elite User Role Permissions – Momentus Support Center)_

### Momentus for Financial (Financial)

#### Core Event Record (3/4 products)

_How the Finance Director uses this: Anchors reconciliation to it — every dollar traced back has to tie to this one record._

- **Enterprise — Events** — The central event record holding potential/current/future event data; supports seasons/series, event statistics, meeting attendees, cancel/restore, and five configurable calendar views. _(inferred)_ _(source: Enterprise Events – Momentus Support Center)_
- **Elite — Events** — Core event record supporting tags, notes, document management (Create Event Summaries/Hold Confirmations), and full event duplication. _(inferred)_ _(source: Elite Events – Momentus Support Center)_
- **WeTrack — Events** — Ties together Risk Profiles/Assessments, Jobs, Incidents, and Logs for a specific event via zones/areas; on event day, status changes to Live and the Control module filters by the selected event. _(inferred)_ _(source: WeTrack About Events in WeTrack – WeTrack)_

#### Payments Processing (3/4 products)

_How the Finance Director uses this: Applies incoming payments and resolves NSF or refund cases against the right invoice._

- **Enterprise — Payments** — Applies payments to orders/invoices/accounts, including Charge Now for saved credit cards, NSF check handling, refunds, and payment transfers/moves. _(source: Enterprise Payments – Momentus Support Center)_
- **Elite — Event Financials (Payments)** — Payment/credit allocation and ad hoc deposits and credits — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_
- **Platform — Momentus Payments Platform** — Merchant payment processing with Batches, Billing, Disputes, Transactions, and a Unified Checkout experience; supports Enterprise Automated Reconciliation (auto-creates Cash Book deposit transactions) and third-party gateway credentials. _(source: Momentus Payments Platform – Momentus Connect)_

#### E-Invoicing (PEPPOL) (2/4 products)

_How the Finance Director uses this: Used only for the specific EU countries requiring PEPPOL e-invoicing compliance._

- **Enterprise — E-Invoicing (Enterprise)** — Sends/receives e-invoices (incl. credit notes and payment-plan/quick invoices) via the PEPPOL network for Austria, Belgium, Germany, Netherlands, and Sweden; requires the A/R module to send and A/P module to receive. _(source: About E-Invoicing in Enterprise – Momentus Connect)_
- **Elite — E-Invoicing (Elite)** — Sends e-invoices and credit notes from Elite via the PEPPOL network for Austria, Belgium, Germany, Netherlands, and Sweden, requiring tax/account configuration prerequisites in Elite. _(source: About E-Invoicing in Elite – Momentus Connect)_

#### Integrations & Connectors (2/4 products)

- **Elite — Integrations** — Elite’s standard integrations: DocuSign (e-signature for proposals/contracts/invoices), Tessitura (push performances, pull ticketing/attendance data), the EventDraw Connector (API-credentialed floor-plan linking), and access to the Momentus Connect marketplace/API. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_
- **WeTrack — Integrations** — Automatic event sync between Momentus Elite and WeTrack, plus data-visualization integrations with Google Looker Studio (via Google Sheets) and Microsoft Power BI. _(inferred)_ _(source: WeTrack Integrations – WeTrack)_

#### Invoicing (2/4 products)

_How the Finance Director uses this: Generates the final invoice from closed service orders once operations confirms actuals._

- **Enterprise — Invoicing** — Generates Proforma/Preliminary/final invoices from service or registration orders, with invoice document headings/subheadings, multi-event invoice consolidation, and void/credit workflows. _(source: Enterprise Invoicing – Momentus Support Center)_
- **Elite — Event Financials (Invoicing)** — Handles invoices/invoice schedules and event-level discounts/adjustments — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_

#### Payment Plans & Installments (2/4 products)

_How the Finance Director uses this: Sets up installment schedules for clients who can't pay the full balance upfront._

- **Enterprise — Payment Plans** — Configures installment schedules across multiple orders, with memo payment plan calculations and final-invoice/step crediting. _(source: Enterprise Payment Plans – Momentus Support Center)_
- **Elite — Event Financials (Invoice Schedules)** — Invoice schedules for spreading payments across a timeline — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_

#### Accounts Payable & Vendor Payments (1/4 products)

_How the Finance Director uses this: Processes vendor vouchers and 1099 statements for contracted labor and services._

- **Enterprise — Accounts Payable** — Handles supplier/vendor vouchers (invoices), 1099-MISC/NEC statements, EFT/check exports, remittance advices, AP Automation invoice scanning, and prepayment tracking. _(source: Enterprise Accounts Payable – Momentus Support Center)_

#### Accounts Receivable & Credit Management (1/4 products)

_How the Finance Director uses this: Reviews dunning and credit-hold status to decide whether to extend further credit to a client._

- **Enterprise — Accounts Receivable** — Covers AR Demographics, credit ratings/limits, dunning and customer statements, tax exemption, account hold/warn status, and the Receivable Ledger for payment/invoice history. _(source: Enterprise Accounts Receivable – Momentus Support Center)_

#### Ad Hoc Settlement Reporting (1/4 products)

_How the Finance Director uses this: Builds a one-off settlement report for costs and revenues that don't fit standard order structures, like performing-arts settlements._

- **Enterprise — Ungerboeck Spreadsheet** — Excel-based reporting tool for exporting retrievals and building settlement reports for costs/revenues (e.g. for Performing Arts Centers) not captured as standard booking/order charges. _(inferred)_ _(source: Enterprise Ungerboeck Spreadsheet – Momentus Support Center)_

#### AI Assistant (1/4 products)

- **Platform — Ask Mo** — Momentus’s AI assistant: Ask Mo Support gives natural-language how-to answers from the knowledge base (free on all packages), and Ask Mo Data gives natural-language answers to Enterprise data questions (requires Pro/Premier packaging and a specific role). Not available for Azure-hosted or Singapore accounts. _(source: About Ask Mo and Ask Mo Support – Momentus Connect)_

#### APIs & Webhooks (1/4 products)

- **Platform — APIs & Webhooks** — The Momentus Connect API is a unified gateway for accessing the APIs of Momentus’s core products, with Swagger-format interactive reference docs, credential/trusted-IP-range management, and a built-in webhook management interface. _(inferred)_ _(source: General – Momentus Connect)_

#### Bank Reconciliation & Cash Forecasting (1/4 products)

_How the Finance Director uses this: Forecasts cash position based on open AR and payment plans, not just what's already collected._

- **Enterprise — Cash Book** — Manages bank reconciliation, bank statement imports, cash forecasts based on open AR invoices and payment plans, and foreign currency translation for bank accounts. _(source: Enterprise Cash Book – Momentus Support Center)_

#### Cross-Product Analytics (1/4 products)

- **Platform — Momentus Analytics** — Analytics platform with three parts: Observe (standard Sales/CRM dashboards), Empower (drag-and-drop or AI-assisted custom dashboards), and Benchmarking (peer comparison via an AI classifier mapped to IAVM standards, US convention centers only). Data replicates into a separate analytics data lake every 24 hours; first release is Sales-focused, with Operations/Financials planned incrementally. _(source: About Momentus Analytics – Momentus Connect)_

#### Email Communication (1/4 products)

- **Elite — Email** — Sends ad hoc and templated email with merge fields to multiple recipients, tracks bounces, and manages signatures/templates. _(inferred)_ _(source: Elite Email – Momentus Support Center)_

#### External Accounting Sync (1/4 products)

_How the Finance Director uses this: Used specifically by Elite customers without a native GL, syncing invoices to Xero instead._

- **Elite — Xero + Elite Integration** — Syncs invoices created in Elite (line items, taxes, GL-code mapping, credits/deposits) with Xero accounting software; payments allocated in either system sync to the other. No dedicated Elite support article describes a native GL/accounting module the way Enterprise has one. _(inferred)_ _(source: Use the Xero+Elite Integration – Momentus Connect)_

#### Fixed Asset Tracking & Depreciation (1/4 products)

_How the Finance Director uses this: Tracks depreciation on venue equipment purchased through operations._

- **Enterprise — Fixed Assets** — Tracks the Asset Register, depreciation forecasts/allocations (periodic vs. daily), CIP cost accounts for assets in progress, and linking purchase order items to assets. _(source: Enterprise Fixed Assets – Momentus Support Center)_

#### Follow-Up & Checklist Tasks (1/4 products)

- **Elite — Tasks & Task Templates** — Tracks lead follow-ups, contract/insurance due dates, and event checklists via Tasks; Task Templates can be applied/duplicated and drive Tessitura and other cross-department workflows. _(inferred)_ _(source: Elite Tasks & Task Templates – Momentus Support Center)_

#### General Ledger & Journal Entries (1/4 products)

_How the Finance Director uses this: Posts journal entries and reviews GL inquiry when reconciling an event's full financial picture._

- **Enterprise — General Ledger** — Core GL accounting: journal entries (incl. recurring and tax-aware), GL/entity budgeting, Sales Tax (VAT/GST) report templates, and GL/Transaction Inquiry screens. _(source: Enterprise General Ledger – Momentus Support Center)_

#### Multi-Venue Shared Calendar (1/4 products)

- **Platform — OneView** — A shared calendar platform for corporate campuses, universities, and venue-management groups to view events/availability across all their venues on Momentus platforms, including view-only access for third-party contractors/stakeholders. _(source: OneView – Momentus Connect)_

#### No-Code Workflow Automation (1/4 products)

- **Platform — Momentus Workflow Builder** — A low-code, drag-and-drop automation platform connecting Momentus to external systems (HubSpot, Salesforce, NetSuite, SAP, Microsoft 365, DocuSign, Power BI, etc.), with trigger-action workflows, a sandbox test environment, and execution-log monitoring. Requires Enterprise 25.3+. _(source: About Momentus Workflow Builder – Momentus Connect)_

#### Partner Integration Marketplace (1/4 products)

- **Platform — Momentus Connect Marketplace & Administration** — A marketplace showcasing integrations/value-added services for all Momentus products; users get a default User role, upgradable to Customer Admin (configure apps, manage users) or Custom Roles scoped to specific apps. _(inferred)_ _(source: Momentus Connect About Momentus Connect – Momentus Connect)_

#### Purchasing & Purchase Orders (1/4 products)

_How the Finance Director uses this: Routes a purchase requisition through approval before a vendor commitment is made._

- **Enterprise — Purchasing** — Manages Purchase Orders and Requisitions, PO contracts, approval routing/email notifications, AP Automation invoice scanning, and Fill From Stock. _(inferred)_ _(source: Enterprise Purchasing – Momentus Support Center)_

#### Reporting & Dashboards (1/4 products)

- **Elite — Insights (Reports & Dashboards)** — Elite’s reporting engine: a Report/Dashboard Library and Document Template Library with prebuilt examples (e.g. New Accounts by Year, Event Order/BEO templates), a custom report builder, and a Data Dictionary. _(inferred)_ _(source: Elite Insights Reports & Dashboards – Momentus Support Center)_

#### Status Indicator System (RAG) (1/4 products)

- **WeTrack — RAG Status System** — The Red/Amber/Green traffic-light framework (plus Grey=Not Started and Blue=Complete for tasks) used consistently across Projects/Tasks/Sub-Tasks and Risks/Issues/Opportunities to communicate health at a glance. _(inferred)_ _(source: WeTrack The RAG (Red, Amber, Green) System_ Basic Principles – WeTrack)_

#### Sustainability Tracking (1/4 products)

- **WeTrack — Sustainability** — Tracks environmental/social/governance indicators (energy use, waste, community program growth, labor practices) against targets, with achievements when targets are hit, viewable via lists, dashboards, and reports. _(inferred)_ _(source: WeTrack Introduction to Sustainability – WeTrack)_

#### System Admin & Account-Wide Settings (1/4 products)

- **Elite — System Admin Info & Account-Wide Settings** — Account-wide configuration: Open API credential creation, business classifications, contact roles, email/phone/address types, booking-portal branding, and status/reference-data customization. _(inferred)_ _(source: Elite System Admin Info & Account-Wide Settings – Momentus Support Center)_

#### User Role Permissions (1/4 products)

- **Elite — User Role Permissions** — Documents System Admin and Insights Admin system roles plus granular feature/data permissions used to build custom user roles; not all permissions are available in every tier. _(inferred)_ _(source: Elite User Role Permissions – Momentus Support Center)_

### Momentus for Leadership (Leadership)

#### Core Event Record (3/4 products)

_How the Venue Director uses this: Uses it as the single source of truth for where any event sits in its lifecycle._

- **Enterprise — Events** — The central event record holding potential/current/future event data; supports seasons/series, event statistics, meeting attendees, cancel/restore, and five configurable calendar views. _(inferred)_ _(source: Enterprise Events – Momentus Support Center)_
- **Elite — Events** — Core event record supporting tags, notes, document management (Create Event Summaries/Hold Confirmations), and full event duplication. _(inferred)_ _(source: Elite Events – Momentus Support Center)_
- **WeTrack — Events** — Ties together Risk Profiles/Assessments, Jobs, Incidents, and Logs for a specific event via zones/areas; on event day, status changes to Live and the Control module filters by the selected event. _(inferred)_ _(source: WeTrack About Events in WeTrack – WeTrack)_

#### Payments Processing (3/4 products)

- **Enterprise — Payments** — Applies payments to orders/invoices/accounts, including Charge Now for saved credit cards, NSF check handling, refunds, and payment transfers/moves. _(source: Enterprise Payments – Momentus Support Center)_
- **Elite — Event Financials (Payments)** — Payment/credit allocation and ad hoc deposits and credits — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_
- **Platform — Momentus Payments Platform** — Merchant payment processing with Batches, Billing, Disputes, Transactions, and a Unified Checkout experience; supports Enterprise Automated Reconciliation (auto-creates Cash Book deposit transactions) and third-party gateway credentials. _(source: Momentus Payments Platform – Momentus Connect)_

#### Work Order / Task Management (3/4 products)

- **Enterprise — Work Orders** — Department-level delivery instructions generated from service orders; tracks item completion/covers (catering headcounts), Rush processing, and work order actuals. _(inferred)_ _(source: Enterprise Work Orders – Momentus Support Center)_
- **Elite — Jobs (Operations Hub)** — Jobs Management creates/assigns checklists; Jobs Fulfillment lets teams claim/complete jobs on mobile — part of the Operations Hub add-on for Elite Premier users, alongside an Event List/Dashboard with a Gantt chart and block-based Event Outlines (Elite’s BEO equivalent). _(source: Elite Operations Hub Overview – Momentus Support Center)_
- **WeTrack — Jobs (Control)** — Located within the Control module, tracks maintenance issues (e.g. a broken chair in a specific row) and venue/stadium checks across live events — distinct from WeTrack’s Planning-side Tasks. _(source: WeTrack Introduction to Jobs – WeTrack)_

#### Accounts & Contacts Management (2/4 products)

_How the Venue Director uses this: Confirms there's one clean account record, not duplicate entries fragmenting a client's history._

- **Enterprise — Accounts & Contacts** — Manages Account (company/organization) and Contact (person) records with affiliations, designations/statuses, relationships (incl. bill-to), duplicate checking, and CSV/XLSX/XML import. _(inferred)_ _(source: Enterprise Accounts & Contacts – Momentus Support Center)_
- **Elite — Accounts & Contacts** — Manages Account/Contact records, tags, hierarchies, groups, and duplicate merging, plus each contact’s Booking Portal account. _(inferred)_ _(source: Elite Accounts & Contacts – Momentus Support Center)_

#### Change Tracking (2/4 products)

- **Enterprise — Operations Change Log** — Operational reporting on changes made to an event after confirmation — targeted for release 25.2 per internal PMO strategy docs. Not yet documented in the live Support Center, so likely still unreleased or newly released. _(source: PMO-Enterprise Convention Centers - Product Strategy.pdf)_
- **Elite — Track Changes to Event Details** — Once a function status is set to Ready, tracks changes to functions/items/instructions so operations staff can see late edits on the Daily View and function change log; must be enabled by System Admin. _(inferred)_ _(source: Elite Track Changes to Event Details – Momentus Support Center)_

#### Contract Generation & Approval (2/4 products)

_How the Venue Director uses this: Checks that a contract went through proper approval before treating a booking as confirmed._

- **Enterprise — Contracts** — Generates the space rental agreement for an event, bundling bookings/service/housing orders, contract addendums, clauses, and revision history tracking. _(inferred)_ _(source: Enterprise Contracts – Momentus Support Center)_
- **Elite — Sales (Contracts)** — Proposal/contract creation and revisions plus the contract approval workflow — part of Elite’s combined Sales module. _(source: Elite Sales – Momentus Support Center)_

#### E-Invoicing (PEPPOL) (2/4 products)

- **Enterprise — E-Invoicing (Enterprise)** — Sends/receives e-invoices (incl. credit notes and payment-plan/quick invoices) via the PEPPOL network for Austria, Belgium, Germany, Netherlands, and Sweden; requires the A/R module to send and A/P module to receive. _(source: About E-Invoicing in Enterprise – Momentus Connect)_
- **Elite — E-Invoicing (Elite)** — Sends e-invoices and credit notes from Elite via the PEPPOL network for Austria, Belgium, Germany, Netherlands, and Sweden, requiring tax/account configuration prerequisites in Elite. _(source: About E-Invoicing in Elite – Momentus Connect)_

#### Event Booking / Facility Reservation (2/4 products)

_How the Venue Director uses this: Confirms no double-booking risk exists across the full venue calendar._

- **Enterprise — Facility Booking** — Reserves and sells space via Bookings, with a Booking Calendar/Agenda, Availability Report, recurring bookings search, and booking-order auto-generation for space rental charges. _(inferred)_ _(source: Enterprise Facility Booking – Momentus Support Center)_
- **Elite — Booking Events** — Books events or holds with statuses (prospect/tentative/definite), conflict checking, blackouts/internal events, and Manage Holds by Day. _(inferred)_ _(source: Elite Booking Events – Momentus Support Center)_

#### Event Detailing (Functions, Items, Instructions) (2/4 products)

- **Enterprise — Functions** — Sub-activities of an event with their own date/time/space; supports Function Requirements, presenters, Topics & Tracks for conferences, Function Scripting, and Smart Import. _(inferred)_ _(source: Enterprise Functions – Momentus Support Center)_
- **Elite — Detailing Events** — Adds items, instruction sets, packages, price schedules, discounts, and rental rates to event functions; supports mass edit/add and Event Order creation. _(inferred)_ _(source: Elite Detailing Events – Momentus Support Center)_

#### Exhibition & Exhibitor Management (2/4 products)

- **Enterprise — Exhibition Management** — Manages Exhibitors as CRM extensions, exhibitor sales pipelines, booth proposals, co-exhibitors, automatic booth-space charging, and exhibitor invoicing. _(inferred)_ _(source: Enterprise Exhibition Management – Momentus Support Center)_
- **Elite — Exhibitor Ordering** — Configures events for exhibitor orders, runs an online Exhibitor Store (with instructions/item images), creates/refunds exhibitor invoices, and downloads exhibitor service orders. _(inferred)_ _(source: Elite Exhibitor Ordering – Momentus Support Center)_

#### Integrations & Connectors (2/4 products)

_How the Venue Director uses this: Treats every unintegrated system as a risk — each gap is a place the single-source-of-truth story breaks._

- **Elite — Integrations** — Elite’s standard integrations: DocuSign (e-signature for proposals/contracts/invoices), Tessitura (push performances, pull ticketing/attendance data), the EventDraw Connector (API-credentialed floor-plan linking), and access to the Momentus Connect marketplace/API. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_
- **WeTrack — Integrations** — Automatic event sync between Momentus Elite and WeTrack, plus data-visualization integrations with Google Looker Studio (via Google Sheets) and Microsoft Power BI. _(inferred)_ _(source: WeTrack Integrations – WeTrack)_

#### Invoicing (2/4 products)

- **Enterprise — Invoicing** — Generates Proforma/Preliminary/final invoices from service or registration orders, with invoice document headings/subheadings, multi-event invoice consolidation, and void/credit workflows. _(source: Enterprise Invoicing – Momentus Support Center)_
- **Elite — Event Financials (Invoicing)** — Handles invoices/invoice schedules and event-level discounts/adjustments — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_

#### Mobile Field Access (2/4 products)

- **Enterprise — Mobile Work Orders / Mobile Inventory** — Mobile apps within the Enterprise Operations Suite: Mobile Work Orders lets users view current work order information and complete item deliveries from a mobile device; Mobile Inventory lets staff search items and create inventory transactions from the floor. _(inferred)_ _(source: Enterprise Mobile Work Orders – Momentus Support Center)_
- **Elite — Mobile** — Mobile access to Elite via home-screen icon, Mobile Avails, Mobile Calendar, and Google Calendar sync on Android. _(inferred)_ _(source: Elite Mobile – Momentus Support Center)_

#### Opportunity / Inquiry Qualification (2/4 products)

_How the Venue Director uses this: Reviews qualified pipeline volume as a leading indicator of future bookings._

- **Enterprise — Event Opportunities** — Tracks a specific possibility of business with an account, usually used at the beginning of a sale, including Room Flow hotel forecasting, economic impact figures, and Group Profiles for recurring events. _(source: Enterprise Event Opportunities – Momentus Support Center)_
- **Elite — Sales (Inquiries)** — Manages Inquiries with rental rates, economic impact, estimated revenue, and probability-of-closing updates — part of Elite’s combined Sales module. _(source: Elite Sales – Momentus Support Center)_

#### Payment Plans & Installments (2/4 products)

- **Enterprise — Payment Plans** — Configures installment schedules across multiple orders, with memo payment plan calculations and final-invoice/step crediting. _(source: Enterprise Payment Plans – Momentus Support Center)_
- **Elite — Event Financials (Invoice Schedules)** — Invoice schedules for spreading payments across a timeline — part of Elite’s combined Event Financials module. _(source: Elite Event Financials – Momentus Support Center)_

#### Room / Floor Plan Diagramming (2/4 products)

- **Enterprise — Room Diagrams / EventDraw** — Space-specific room layout diagramming with layer management, a shape library, hotkeys, and direct service-order creation from a diagram; the 2026.2 EventDraw connector adds SSO-integrated diagramming alongside it. _(inferred)_ _(source: Enterprise Room Diagrams – Momentus Support Center)_
- **Elite — EventDraw Connector** — API-credentialed floor-plan linking via the EventDraw Connector, part of Elite Integrations. _(inferred)_ _(source: Elite Integrations – Momentus Support Center)_

#### Accounts Payable & Vendor Payments (1/4 products)

- **Enterprise — Accounts Payable** — Handles supplier/vendor vouchers (invoices), 1099-MISC/NEC statements, EFT/check exports, remittance advices, AP Automation invoice scanning, and prepayment tracking. _(source: Enterprise Accounts Payable – Momentus Support Center)_

#### Accounts Receivable & Credit Management (1/4 products)

- **Enterprise — Accounts Receivable** — Covers AR Demographics, credit ratings/limits, dunning and customer statements, tax exemption, account hold/warn status, and the Receivable Ledger for payment/invoice history. _(source: Enterprise Accounts Receivable – Momentus Support Center)_

#### Ad Hoc Settlement Reporting (1/4 products)

- **Enterprise — Ungerboeck Spreadsheet** — Excel-based reporting tool for exporting retrievals and building settlement reports for costs/revenues (e.g. for Performing Arts Centers) not captured as standard booking/order charges. _(inferred)_ _(source: Enterprise Ungerboeck Spreadsheet – Momentus Support Center)_

#### AI Assistant (1/4 products)

_How the Venue Director uses this: Uses Ask Mo for natural-language answers instead of digging through documentation or reports._

- **Platform — Ask Mo** — Momentus’s AI assistant: Ask Mo Support gives natural-language how-to answers from the knowledge base (free on all packages), and Ask Mo Data gives natural-language answers to Enterprise data questions (requires Pro/Premier packaging and a specific role). Not available for Azure-hosted or Singapore accounts. _(source: About Ask Mo and Ask Mo Support – Momentus Connect)_

#### APIs & Webhooks (1/4 products)

_How the Venue Director uses this: Relies on this only when IT or an implementation partner is building a custom integration — not a direct end-user tool._

- **Platform — APIs & Webhooks** — The Momentus Connect API is a unified gateway for accessing the APIs of Momentus’s core products, with Swagger-format interactive reference docs, credential/trusted-IP-range management, and a built-in webhook management interface. _(inferred)_ _(source: General – Momentus Connect)_

#### Back-Office Registration Management (1/4 products)

- **Enterprise — General Registration** — Back-office registration order management: promo codes, waitlists, registrant types, seating chart auto-fill, session swapping, and Continuing Education Credit tracking. _(inferred)_ _(source: Enterprise General Registration – Momentus Support Center)_

#### Bank Reconciliation & Cash Forecasting (1/4 products)

- **Enterprise — Cash Book** — Manages bank reconciliation, bank statement imports, cash forecasts based on open AR invoices and payment plans, and foreign currency translation for bank accounts. _(source: Enterprise Cash Book – Momentus Support Center)_

#### Booking Cancellation & Lost-Business Tracking (1/4 products)

_How the Venue Director uses this: Reviews lost-business patterns to spot systemic reasons deals fall through._

- **Elite — Postponed, Canceled, and Lost Holds and Events** — Best-practice workflows for canceling or marking events/holds as Lost vs. Cancel, restoring them, and tracking lost business. _(inferred)_ _(source: Elite Postponed, Canceled, and Lost Holds and Events – Momentus Support Center)_

#### Calendar & Schedule Views (1/4 products)

- **Elite — Calendar** — Event and Function Calendar views (color-coded, filterable, exportable to PDF), custom Avails headers, and publishing to Apple/Google/Outlook calendars. _(inferred)_ _(source: Elite Calendar – Momentus Support Center)_

#### Campaign / Mass Outreach (1/4 products)

- **Enterprise — Campaigns** — Gathers accounts/contacts meeting defined criteria for mass communication efforts; campaigns can be copied, edited, and worked via email or phone outreach steps. _(inferred)_ _(source: Enterprise Campaigns – Momentus Support Center)_

#### Cross-Product Analytics (1/4 products)

_How the Venue Director uses this: Uses cross-product benchmarking to see how the venue compares to peer venues._

- **Platform — Momentus Analytics** — Analytics platform with three parts: Observe (standard Sales/CRM dashboards), Empower (drag-and-drop or AI-assisted custom dashboards), and Benchmarking (peer comparison via an AI classifier mapped to IAVM standards, US convention centers only). Data replicates into a separate analytics data lake every 24 hours; first release is Sales-focused, with Operations/Financials planned incrementally. _(source: About Momentus Analytics – Momentus Connect)_

#### Email Communication (1/4 products)

- **Elite — Email** — Sends ad hoc and templated email with merge fields to multiple recipients, tracks bounces, and manages signatures/templates. _(inferred)_ _(source: Elite Email – Momentus Support Center)_

#### Event / Session Series & Recurrence (1/4 products)

- **Elite — Series** — Groups related recurring events into a Series for bulk editing, adding existing events, and shared series-level notes/documents. _(inferred)_ _(source: Elite Series – Momentus Support Center)_

#### External Accounting Sync (1/4 products)

- **Elite — Xero + Elite Integration** — Syncs invoices created in Elite (line items, taxes, GL-code mapping, credits/deposits) with Xero accounting software; payments allocated in either system sync to the other. No dedicated Elite support article describes a native GL/accounting module the way Enterprise has one. _(inferred)_ _(source: Use the Xero+Elite Integration – Momentus Connect)_

#### External-Facing Task Portal (1/4 products)

- **Enterprise — Event Portal** — A licensed public-facing portal where external users complete Event Portal Tasks (reviewing contracts, approving items) while internal staff manage Operations Tasks and portal messages/documents. _(inferred)_ _(source: Enterprise Event Portal – Momentus Support Center)_

#### Facility & Asset Maintenance (1/4 products)

- **Enterprise — Job Management (Facility Maintenance)** — Schedules facility maintenance and other facility work, reserving space and creating service orders; supports Job Profiles as templates and linking jobs to fixed assets. Internal SME interviews describe this as not a full CMMS — no usage-based maintenance triggers, no parts/assembly hierarchy, and the old mobile FMS app was sunset. _(inferred)_ _(source: Enterprise Job Management – Momentus Support Center)_
- **Third-Party — MaintainX** — A dedicated facility-maintenance/CMMS tool some customers use instead of or alongside Enterprise’s Job Management module, per internal SME interviews — chosen for capabilities like usage-based maintenance triggers and mobile issue-reporting that Job Management doesn’t fully cover.

#### Fixed Asset Tracking & Depreciation (1/4 products)

- **Enterprise — Fixed Assets** — Tracks the Asset Register, depreciation forecasts/allocations (periodic vs. daily), CIP cost accounts for assets in progress, and linking purchase order items to assets. _(source: Enterprise Fixed Assets – Momentus Support Center)_

#### Follow-Up & Checklist Tasks (1/4 products)

- **Elite — Tasks & Task Templates** — Tracks lead follow-ups, contract/insurance due dates, and event checklists via Tasks; Task Templates can be applied/duplicated and drive Tessitura and other cross-department workflows. _(inferred)_ _(source: Elite Tasks & Task Templates – Momentus Support Center)_

#### General Ledger & Journal Entries (1/4 products)

- **Enterprise — General Ledger** — Core GL accounting: journal entries (incl. recurring and tax-aware), GL/entity budgeting, Sales Tax (VAT/GST) report templates, and GL/Transaction Inquiry screens. _(source: Enterprise General Ledger – Momentus Support Center)_

#### Incident & Risk Management (1/4 products)

- **WeTrack — Incident Management** — The Incident/Issue tracking system operations teams switch to at or just before event time, with geolocation to a precise site location, 1–5 severity grading, action-owner assignment, and Confidential incident visibility. _(source: WeTrack Introduction to Incidents – WeTrack)_
- **Third-Party — 24Now** — A competing incident/risk platform mentioned in internal SME interviews as using ML-driven camera monitoring to proactively flag risks — an approach Momentus doesn’t currently offer.

#### Inventory & Pricing Setup (1/4 products)

- **Elite — Inventory & Prices** — Manages inventory items/categories/departments, price schedules, packages, and Instruction Sets, with bulk cost/price/GL-code adjustment and multi-language translation. _(inferred)_ _(source: Elite Inventory & Prices – Momentus Support Center)_

#### Inventory Management (1/4 products)

- **Enterprise — Inventory** — Maintains available quantities for equipment/consumables tied to resources, with cost synchronization, physical count batches, inventory valuation, and Excel-based import. _(inferred)_ _(source: Enterprise Inventory – Momentus Support Center)_

#### Live Entertainment Booking (1/4 products)

- **Elite — Live Entertainment** — Booking workflow for artists/performances with Avails views, house holds, announce/on-sale/pre-sale date management, and post-show settlement/ticket-scaling reports. _(inferred)_ _(source: Elite Live Entertainment – Momentus Support Center)_

#### Membership Management (1/4 products)

- **Enterprise — Membership** — Creates, renews, and administers members via membership types/statuses; supports prospective members and individual or group membership additions. Legacy Membership (pre-v30.97) is retained for continuity after this was rewritten. _(inferred)_ _(source: Enterprise Membership – Momentus Support Center)_

#### Multi-Venue Shared Calendar (1/4 products)

_How the Venue Director uses this: Uses OneView specifically when overseeing multiple venues, to see availability across all of them at once._

- **Platform — OneView** — A shared calendar platform for corporate campuses, universities, and venue-management groups to view events/availability across all their venues on Momentus platforms, including view-only access for third-party contractors/stakeholders. _(source: OneView – Momentus Connect)_

#### Native BEO Builder (upcoming) (1/4 products)

- **Enterprise — Banquet Event Order (BEO), native builder** — An in-system Banquet Event Order builder — proof-of-concept targeted for release 25.3, first built for Disney. Service Orders already produce BEO-style Event Order reports today; this would be a dedicated native builder. _(source: PMO-Enterprise Convention Centers - Product Strategy.pdf / PMO-Enterprise for Hotels, Casinos and Resorts - 3 Year Strategy.pdf)_

#### No-Code Workflow Automation (1/4 products)

_How the Venue Director uses this: Automates a cross-department trigger-action (e.g. CRM sync) without waiting on engineering._

- **Platform — Momentus Workflow Builder** — A low-code, drag-and-drop automation platform connecting Momentus to external systems (HubSpot, Salesforce, NetSuite, SAP, Microsoft 365, DocuSign, Power BI, etc.), with trigger-action workflows, a sandbox test environment, and execution-log monitoring. Requires Enterprise 25.3+. _(source: About Momentus Workflow Builder – Momentus Connect)_

#### Non-Event Sales Pipeline (CRM) (1/4 products)

- **Enterprise — Opportunities** — Non-event sales pipeline feature, distinct from Event Opportunities which is used specifically for potential events. _(source: Enterprise Opportunities – Momentus Support Center)_

#### On-Site Registration Check-In (1/4 products)

- **Enterprise — Registration Check-In (RCI) & Badges** — Checks registrants in/out via mobile (iOS app), self-service kiosk, or back office; includes badge templates, barcode/QR scanning, and Function Check-In. _(source: Enterprise Registration Check-In (RCI) & Badges – Momentus Support Center)_

#### Partner Integration Marketplace (1/4 products)

_How the Venue Director uses this: Evaluates and installs third-party add-ons here rather than requesting custom development._

- **Platform — Momentus Connect Marketplace & Administration** — A marketplace showcasing integrations/value-added services for all Momentus products; users get a default User role, upgradable to Customer Admin (configure apps, manage users) or Custom Roles scoped to specific apps. _(inferred)_ _(source: Momentus Connect About Momentus Connect – Momentus Connect)_

#### Project & Task Planning (Gantt, Kanban) (1/4 products)

- **WeTrack — Projects, Tasks & The Gantt Chart** — Projects are organizational containers (Owner, Lead Department, tags) with RAG status and percent-complete auto-calculated from constituent Tasks/Milestones; the Planning Dashboard adds Kanban boards and widgets (Momentum, Department Task RAG Breakdown, on-time-milestone Leaderboard), and the Gantt Chart gives a visual timeline with dependency arrows. _(inferred)_ _(source: WeTrack Introduction to Planning – WeTrack)_

#### Public Registration Configuration (1/4 products)

- **Enterprise — Registration** — Public-facing online registration configuration: registrant profile fields, multi-language/multi-page registration, guest and group registration, dictionaries, and PayPal Express Checkout. Registration powered by InvitePeople offers a white-label alternative via SSO, syncing config and orders/payments back to Enterprise. _(inferred)_ _(source: Enterprise Registration – Momentus Support Center)_

#### Purchasing & Purchase Orders (1/4 products)

- **Enterprise — Purchasing** — Manages Purchase Orders and Requisitions, PO contracts, approval routing/email notifications, AP Automation invoice scanning, and Fill From Stock. _(inferred)_ _(source: Enterprise Purchasing – Momentus Support Center)_

#### Reporting & Dashboards (1/4 products)

_How the Venue Director uses this: Uses the custom report builder for cross-department performance reviews._

- **Elite — Insights (Reports & Dashboards)** — Elite’s reporting engine: a Report/Dashboard Library and Document Template Library with prebuilt examples (e.g. New Accounts by Year, Event Order/BEO templates), a custom report builder, and a Data Dictionary. _(inferred)_ _(source: Elite Insights Reports & Dashboards – Momentus Support Center)_

#### Risk, Issue & Opportunity Planning (1/4 products)

- **WeTrack — Risk, Issue & Opportunity Management** — An optional module tracking Risks (might happen), Issues (currently happening), and Opportunities using five-point impact/probability scales and seven strategies (Avoid, Exploit, Mitigate, Insure, Share, Contingency, Accept). _(inferred)_ _(source: WeTrack Introduction to Risks, Issues and Opportunities – WeTrack)_

#### Sales Goals & Revenue Forecasting (1/4 products)

- **Enterprise — Sales** — Account Leads (pre-qualification), Probable Revenue calculation (potential revenue × win probability), Sales Goals tracking, and the Group Room Calendar. _(source: Enterprise Sales – Momentus Support Center)_

#### Speaker / Session Proposal Management (1/4 products)

- **Enterprise — Session Proposals** — Collects, evaluates, and manages speaker/abstract proposals for conferences, with evaluator scoring criteria, submission forms, and Topics for conference tracks. Not available in Elite. _(source: Enterprise Session Proposals – Momentus Support Center)_

#### Status Indicator System (RAG) (1/4 products)

- **WeTrack — RAG Status System** — The Red/Amber/Green traffic-light framework (plus Grey=Not Started and Blue=Complete for tasks) used consistently across Projects/Tasks/Sub-Tasks and Risks/Issues/Opportunities to communicate health at a glance. _(inferred)_ _(source: WeTrack The RAG (Red, Amber, Green) System_ Basic Principles – WeTrack)_

#### Sustainability Tracking (1/4 products)

_How the Venue Director uses this: Reports sustainability performance at the venue level for board/executive visibility._

- **WeTrack — Sustainability** — Tracks environmental/social/governance indicators (energy use, waste, community program growth, labor practices) against targets, with achievements when targets are hit, viewable via lists, dashboards, and reports. _(inferred)_ _(source: WeTrack Introduction to Sustainability – WeTrack)_

#### System Admin & Account-Wide Settings (1/4 products)

_How the Venue Director uses this: Configures account-wide branding, roles, and reference data once, rather than per department._

- **Elite — System Admin Info & Account-Wide Settings** — Account-wide configuration: Open API credential creation, business classifications, contact roles, email/phone/address types, booking-portal branding, and status/reference-data customization. _(inferred)_ _(source: Elite System Admin Info & Account-Wide Settings – Momentus Support Center)_

#### User Role Permissions (1/4 products)

_How the Venue Director uses this: Defines which roles can see or edit what, balancing access against the platform's buyer/decision-maker structure._

- **Elite — User Role Permissions** — Documents System Admin and Insights Admin system roles plus granular feature/data permissions used to build custom user roles; not all permissions are available in every tier. _(inferred)_ _(source: Elite User Role Permissions – Momentus Support Center)_

#### Venue / Room Configuration (1/4 products)

- **Elite — Venues & Rooms** — Configures venues, rooms, and Combo Rooms (e.g. a ballroom splittable into Ballroom A+B, B+C, etc.) for booking; combos of combos aren’t supported. _(inferred)_ _(source: Elite Venues & Rooms – Momentus Support Center)_

## Jobs to Be Done Map (Innovation Layer)

Built on Ulwick's Jobs to Be Done (JTBD) and Outcome-Driven Innovation (ODI) frameworks. Maps primary jobs across 8 lifecycle stages for each persona. Each cell contains 3 desired outcome statements structured as: Direction + Metric + Object + Contextual Clarifier — identifying where value is being delivered or left on the table.

### The 8 lifecycle stages (apply to every persona)

- **01 · Define** (Plan · Select · Determine)
- **02 · Locate** (Gather · Access · Retrieve)
- **03 · Prepare** (Set Up · Organize · Examine)
- **04 · Confirm** (Validate · Prioritize · Decide)
- **05 · Execute** (Perform · Transact · Administer)
- **06 · Monitor** (Verify · Track · Check)
- **07 · Modify** (Update · Adjust · Maintain)
- **08 · Conclude** (Store · Finish · Close)

### Secure Event Opportunity — Sales Manager ("The Dream Catcher")

**Product area:** Event Sales · **Primary object:** Event Opportunity  
**Functional job:** Book high-value events that maximize revenue and calendar utilization for the venue

**JTBD statement** — When a new inquiry or lead enters my pipeline, I want to evaluate, propose, and contract the booking entirely inside Momentus, so I can maximize revenue and calendar utilization without losing deals to slower, fragmented workflows.

#### 01 · Define — Qualify event fit & feasibility

*Verbs: Plan · Select · Determine*

Determine which incoming leads and calendar opportunities are worth pursuing as Event Opportunities — An in-system lead qualification workflow with engagement intelligence could surface the highest-value opportunities automatically and eliminate manual triage done outside the platform. Automated account and contact hygiene would keep relationship intelligence current without requiring sales managers to maintain it separately.

**Research opportunity:** A native lead intake form that creates Momentus records automatically — eliminating manual re-keying from Simple View, web forms, and bureau submissions. System-side lead classification by event type, size, and revenue tier would replace the ad-hoc qualification judgment that varies across the sales team. Automated duplicate detection at intake would prevent contact fragmentation before it compounds into pipeline reporting errors.

**Desired outcomes:**

1. Minimize the time to determine if requested event dates align with venue availability — when responding to an inbound inquiry before the prospect loses interest or moves to a competing venue
2. Minimize the time to identify deal-breakers early — budget misalignment, incompatible event types, technical impossibilities — when evaluating a new lead to avoid investing proposal time in an opportunity that cannot close
3. Increase accuracy in assessing whether event size matches the venue's capacity constraints — when qualifying a lead whose stated attendance or configuration requirements are close to the venue's operational limits
4. Minimize the time it takes to evaluate an inbound lead's revenue potential and space fit — when prioritizing which opportunities to pursue across simultaneous inquiries from bureau, web form, phone, and email
5. Minimize the likelihood of overlooking a high-value lead — when screening multiple concurrent inquiries arriving through different intake channels
6. Maximize the accuracy of initial revenue estimates for a potential Event Opportunity — when forecasting its contribution to the annual PACE target at the qualification stage
7. Maximize the speed of communicating lead qualification decisions to the originating channel — when bureau, agency, or referral partners are waiting for a response on a submitted inquiry
8. Minimize the risk of pursuing a lead that conflicts with strategic displacement rules or exclusion periods — when evaluating an incoming inquiry against existing high-value holds or contracted exclusivity windows
9. Maximize the accuracy of account history and prior revenue captured before making a qualification decision — when evaluating a returning client from a competitor property with limited history in the current system
10. Minimize the effort required to route a disqualified lead to an alternative contact or venue partner — when an inbound inquiry does not meet minimum revenue or fit requirements for the property
11. Minimize the likelihood of a qualified lead going stale without an initial response — when the sales team receives a high volume of inbound inquiries during peak season and response capacity is limited
12. Minimize the effort required to track a preliminary inquiry that lacks enough detail to justify a formal calendar hold — when a cold call or vague inquiry doesn't yet warrant creating and then immediately cancelling a hold
13. Minimize the effort required to log a lost-business reason at the point a lead is disqualified — when time pressure discourages recording why an opportunity did not convert

#### 02 · Locate — Optimize space selection & revenue

*Verbs: Gather · Access · Retrieve*

Gather available spaces, dates, and client history to assess whether a booking can be made

**Research opportunity:** A global calendar view with booking gap visibility — surfacing under-utilized dates alongside confirmed holds — would let sales managers proactively identify and fill revenue gaps without exporting to Excel. Accurate hold layering across public events, private events, and entertainment tentatives would eliminate the silo where a sales manager discovers a date conflict only after presenting it to a client.

**Desired outcomes:**

1. Minimize the time to create event proposals that include venue space, hotel room blocks, and event requirements — when responding to a prospective client who expects a comprehensive offer within 24–48 hours of inquiry
2. Increase the accuracy of space allocation to avoid conflicts between concurrent events — when selecting rooms for a lead during a high-demand period with multiple active holds on the same dates
3. Increase total revenue by identifying opportunities for additional space upsell — when reviewing space configurations for a lead whose stated requirements leave underutilized adjacent inventory available
4. Minimize the time it takes to identify space and date combinations that meet a lead's requirements — when checking availability against existing holds and confirmed bookings on the calendar
5. Minimize the likelihood of double-booking or creating conflicting holds — when retrieving calendar availability for a prospective Event Opportunity
6. Minimize the effort required to access a repeat client's prior booking history and preferences — when evaluating a returning customer as a new event lead
7. Maximize the speed of presenting a set of alternative space and date options to a prospect — when the first-choice configuration is unavailable and the client needs a revised offer to maintain momentum
8. Minimize the likelihood of presenting availability to a client that is superseded by a hold placed by another sales manager — when multiple team members are working simultaneous leads with overlapping space requirements
9. Maximize the accuracy of availability information presented to a prospect — when a specific space has pending holds, maintenance windows, or setup constraints not yet reflected in the system
10. Minimize the effort required to identify alternative configurations that meet the client's stated requirements — when the preferred space is unavailable and a non-standard room combination would satisfy the event's functional needs
11. Minimize the likelihood of committing to availability contingent on a pending cancellation not yet confirmed — when a desirable date has an existing hold in a late follow-up stage
12. Minimize the effort required to identify which specific event is causing a double-booking conflict — when the system flags an overlap but does not surface which other booking it conflicts with

#### 03 · Prepare — Price & build proposals

*Verbs: Set Up · Organize · Examine*

Assemble the proposal, pricing structure, and hold configuration needed to present an offer — Standardized proposal templates with guided pricing would reduce preparation time and remove reliance on individual intuition. Bringing negotiation in-system with tracked revision history would reduce email cycles and create an auditable offer record. Native pre-event P&L (profit and loss) calculation would give sales teams profitability visibility before committing, enabling faster and more confident go/no-go decisions.

**Research opportunity:** Client-ready proposal output with modern formatting — eliminating the need to re-create Momentus proposals in external tools before sending. An in-system offer management workflow for entertainment bookings would replace the spreadsheet-based deal process, capturing offer terms, counteroffers, and settlement estimates within the same event record.

**Desired outcomes:**

1. Minimize the risk of underpricing due to overlooked requirements or hidden costs — when building a price estimate for an event with non-standard service dependencies not captured in the initial inquiry
2. Increase confidence that pricing covers all direct operational costs — labor, utilities, services — when setting a final price for an event where labor, utilities, and third-party services contribute significantly to delivery cost
3. Increase accuracy in forecasting ancillary revenue — F&B (Food & Beverage), A/V (Audio/Visual), parking, labor, exhibitor services — when projecting total event value for a booking that includes F&B minimums, A/V packages, and exhibitor services alongside space rental
4. Minimize the time to generate a complete, professional proposal from initial inquiry — when competing for a piece of business where the client has requested proposals from multiple venues simultaneously
5. Minimize errors in dates, pricing, space specifications, and technical requirements — when preparing a proposal under time pressure for a client with complex multi-day requirements
6. Increase the amount of relevant, customized content addressing the prospect's specific needs — when tailoring an offer for a client whose event type or organizational profile differs from the venue's standard proposal template
7. Minimize the time it takes to generate a complete and accurate proposal — when assembling space pricing, F&B estimates, and AV rates for an Event Opportunity offer
8. Minimize the likelihood of pricing errors in the proposal — when applying variable rate structures, discounts, and commissions to an Event Opportunity estimate
9. Minimize the number of exchanges required to collect all qualifying information from the client — when preparing an Event Opportunity for formal proposal submission
10. Maximize the quality of the visual presentation and completeness of a proposal sent to a prospective client — when competing with external venues for the same piece of business
11. Minimize the number of manual inputs required to populate a new proposal from an existing template or prior event record — when preparing a renewal offer for a returning client with consistent annual requirements
12. Maximize the accuracy of catering minimums and contracted service inclusions shown in a proposal — when presenting a price estimate that will form the basis of a formal offer and displacement decision
13. Minimize the effort required to customize proposal content to match the client's stated priorities and event type — when preparing a proposal for a corporate event that requires a branded template different from the venue default
14. Minimize the time it takes to get pricing approval from revenue management before sending a proposal — when the booking requires a below-standard rate that must be authorized before the offer is extended
15. Minimize the time it takes to obtain multi-party sign-off on a discretionary incentive or opportunity-fund allocation — when a booking requires approval spanning sales leadership, finance, and executive leadership before an incentive can be extended

#### 04 · Confirm — Manage space holds strategically

*Verbs: Validate · Prioritize · Decide*

Decide which lead to convert, prioritizing against competing holds and pipeline health — Actionable pipeline intelligence and system-generated close recommendations could reduce reliance on individual judgment and help managers consistently prioritize the highest-probability opportunities.

**Desired outcomes:**

1. Minimize revenue lost from holds that expire without converting to contracts — when managing a large pipeline of active holds at different follow-up stages across the sales team
2. Increase real-time visibility into hold status across the entire sales team — when reviewing the pipeline to determine which holds require immediate follow-up to prevent expiration or displacement
3. Minimize opportunity cost by avoiding holds that block higher-revenue potential bookings — when deciding whether to extend a hold for a lower-value lead while a higher-revenue inquiry is pending for the same space
4. Minimize the time it takes to prioritize between competing leads requesting the same space and date — when deciding which hold to advance to a confirmed Event Opportunity
5. Minimize the likelihood of accepting a lower-value booking that displaces a higher-revenue opportunity — when converting a hold to confirmed under pipeline pressure
6. Maximize the confidence in the decision to advance a specific Event Opportunity — when evaluating displacement risk against the annual revenue strategy and PACE targets
7. Maximize the speed of communicating a prioritization decision to a lead whose hold is about to expire — when a competing inquiry for the same space requires an immediate response to protect the higher-value opportunity
8. Minimize the likelihood of losing a confirmed booking because the hold expired before the client was contacted — when managing a large pipeline of active holds at different stages of follow-up
9. Maximize the speed of moving a tentative hold to a definite booking status once verbal agreement is reached — when the client has committed verbally but contract paperwork has not yet been signed
10. Minimize the effort required to document the rationale behind a displacement decision for internal audit — when choosing to advance a lower-revenue booking over a higher-value hold that was still in negotiation
11. Minimize the likelihood of a hold conversion triggering a notification gap to a competing client whose hold was displaced — when the venue policy requires courtesy notification when a hold is superseded by a confirmed booking
12. Minimize the time it takes to align an internal hold-prioritization decision with external bureau or hotel partners — when the choice of which lead to advance requires consensus beyond the sales team itself
13. Minimize the risk of losing negotiation context and rationale on a long-lead-time licensing agreement — when a contract signed years in advance outlives the tenure of the salesperson who negotiated it

#### 05 · Execute — Close deals & secure commitments

*Verbs: Perform · Transact · Administer*

Create the confirmed Event Opportunity and initiate the contract within Momentus

**Research opportunity:** A direct pipeline from lead qualification to confirmed booking record — eliminating the duplicative data entry that currently spans Simple View, web forms, and the platform. System-generated confirmation and cancellation emails at booking creation would remove the manual step of communicating status changes to clients.

**Desired outcomes:**

1. Minimize the time from proposal acceptance to fully executed contract — when converting a verbal agreement to a signed contract before the client's decision window closes
2. Increase the percentage of verbal commitments that result in signed, deposited contracts — when following up on accepted proposals where the client has agreed in principle but not yet returned a signed document
3. Increase the conversion rate of held space to signed, deposited contracts — when advancing holds across the pipeline toward confirmed bookings to protect period revenue targets
4. Minimize the time it takes to convert an accepted lead into a confirmed Event Opportunity record — when the client has agreed to terms and space has been verified as available
5. Minimize the likelihood of errors or missing terms in the generated contract — when creating booking documents from event details already captured in the system
6. Minimize the number of system switches required to complete an Event Opportunity creation — when moving from lead intake through proposal to contract generation within Momentus
7. Maximize the speed of sending the executed contract to the client for signature — when the client has verbally agreed to terms and expects to receive documents the same day
8. Minimize the likelihood of creating a booking record with incomplete or misconfigured data fields — when converting a proposal to a confirmed Event Opportunity under time pressure at period end
9. Maximize the completeness of the initial Event Opportunity record at the time of creation — when entering a booking whose full requirements were negotiated verbally and not fully captured in the lead record
10. Minimize the effort required to generate and format contract attachments for signature — when the booking requires non-standard addenda or custom clauses that were negotiated during the proposal stage
11. Minimize the likelihood of a booking creation error propagating to downstream planning and finance systems — when creating a high-volume booking where errors in the initial record would require retroactive correction across multiple departments
12. Minimize the total time and manual entry required to fully build out a large, complex Event Opportunity record — when a single high-complexity booking can require up to 90 hours of manual data entry
13. Minimize the effort required to reassign an entire portfolio of active Event Opportunities to a new sales owner — when a manager departs and accounts must be reassigned one-by-one because bulk reassignment isn't supported

#### 06 · Monitor — Forecast revenue accurately

*Verbs: Verify · Track · Check*

Track the pipeline, PACE report, and follow-up activity across all active Event Opportunities — A real-time in-system quota view would give managers continuous visibility into their revenue position against target, eliminating the need for manual exports and external tracking tools.

**Research opportunity:** Analytics that surface pipeline health, space utilization, and revenue variance without requiring Excel exports — moving PACE reporting from a quarterly manual exercise to a live view of sales performance. Cancellation and hold-change notifications with context — reason, source, and replacement — would give sales managers the intelligence to respond to losses before they impact period targets.

**Product documentation opportunity:** Audit log status-change timestamps available as a Summary Field Subject for Event Opportunities — enabling sales managers to automatically surface time-to-status metrics (lead response time, hold duration, time-to-contract) in list views without manual data entry into custom user fields.

**Desired outcomes:**

1. Increase the accuracy of monthly and quarterly booking forecasts by event type — when preparing a pipeline report for venue leadership ahead of a revenue review
2. Minimize the variance between forecasted and actual closed revenue — when reconciling period-end pipeline projections against confirmed bookings and closed deals
3. Increase visibility into pipeline health by date range, event segment, and space requirements — when identifying at-risk revenue and prioritizing follow-up across an active sales pipeline
4. Minimize the time it takes to understand the current state of the sales pipeline — when reviewing daily booking activity and identifying calendar gaps or risk areas
5. Minimize the likelihood of missing a critical follow-up with a prospect — when managing multiple active Event Opportunities at different pipeline stages simultaneously
6. Minimize the effort required to produce an accurate PACE and revenue variance report — when presenting pipeline performance to venue leadership
7. Maximize the clarity of forward-looking revenue risk exposure in the pipeline — when conducting a weekly review to identify bookings at risk of cancellation or displacement
8. Minimize the effort required to forecast close probability across all active leads — when preparing an end-of-period revenue outlook for venue leadership
9. Maximize the clarity of individual sales manager performance against target in the shared pipeline view — when reviewing team contribution to period revenue goals in advance of a monthly performance meeting
10. Minimize the effort required to identify which active holds are at risk of expiring without a follow-up — when reviewing a large pipeline during a high-volume season where follow-up cadence has fallen behind
11. Maximize the speed of generating a period-end revenue summary from confirmed bookings — when the venue director requests an updated PACE report with less than 24 hours notice before a leadership review
12. Increase the visibility into individual sales activity volume — calls, emails, touchpoints — logged against each lead — when assessing sales productivity and diagnosing where deals stall in the pipeline
13. Increase the accuracy of win-rate and conversion calculations for opportunities carrying multiple candidate dates — when a single Event Opportunity has several possible dates and only one converts to a booking

#### 07 · Modify — Update terms

*Verbs: Update · Adjust · Maintain*

Update booking terms, holds, or contract details in response to client requests or internal changes

**Research opportunity:** Mass-update capability for high-volume space configurations — when premium spaces change dozens of times a day, individual record updates create unmanageable overhead. Batch change tools with automated client notifications would make it feasible to manage dynamic inventories like hospitality suites and exhibition halls within Momentus rather than outside it.

**Desired outcomes:**

1. Minimize the time it takes to apply a requested change to an active Event Opportunity — when the client modifies space requirements, date, or attendance after the initial hold is placed
2. Minimize the likelihood of creating a conflicting hold or availability error — when modifying space or date assignments on an Event Opportunity that has already been distributed to planning
3. Minimize the disruption caused by a booking amendment to downstream planning and operations teams — when a change is initiated by the client after the BEO process has begun
4. Maximize the speed of communicating a booking amendment to all affected internal teams — when a space or date change is confirmed by the client and operations has already begun preparation
5. Minimize the likelihood of a contract discrepancy between the original signed document and the amended Event Opportunity record — when processing a change that affects contracted rates, spaces, or minimum spend commitments
6. Minimize the likelihood of a modification to an Event Opportunity creating a revenue variance that is not tracked — when adjusting contracted minimums, space configurations, or headcount after the original contract has been signed
7. Maximize the accuracy of the amendment documentation sent to the client — when processing a change that affects pricing or contract terms and requires the client's written acknowledgment
8. Minimize the effort required to coordinate the impact of a booking modification with the operations and finance teams — when a change involves both a space reassignment and a revision to the contracted catering minimum
9. Minimize the loss of booking history and audit trail when applying a significant change to an existing Event Opportunity — when the only way to change certain details is to copy the event and cancel the original
10. Minimize the likelihood of a copied or rebooked event falsely appearing as changed to operations — when copied functions default into an editable pre-confirmed state that trips the change-management tracker even though nothing has actually changed

#### 08 · Conclude — Transition to operations

*Verbs: Store · Finish · Close*

Close the booking, transfer it to planning, and archive the sales record for reporting

**Research opportunity:** Online payment collection at contract close — replacing mailed check workflows with in-platform payment processing to remove the friction that delays final booking confirmation and creates a revenue recognition gap between verbal close and cash receipt.

**Desired outcomes:**

1. Minimize critical information lost during the sales-to-operations handoff — when transferring a confirmed booking to the planning team after all contract terms have been finalized
2. Increase the event coordinator's readiness and confidence for their first client contact — when handing off a booking where client expectations and special requirements were negotiated during the sales process
3. Minimize the time operations spends clarifying what was sold, promised, or negotiated — when closing out a booking that involved multiple revisions, verbal commitments, or special pricing arrangements during the sales cycle
4. Minimize the time it takes to formally close and hand off a confirmed Event Opportunity to the event planning team — when the contract is signed and the event is ready to enter the planning workflow
5. Minimize the likelihood of incomplete or inaccurate data in the closed booking record — when archiving the Event Opportunity for post-event revenue reporting and PACE reconciliation
6. Maximize the accuracy of revenue actuals captured at booking close — when finalizing the Event Opportunity record to support financial reporting and commission calculation
7. Maximize the completeness of the final booking record before it is archived — when ensuring all commission-eligible revenue and performance credits are captured accurately for compensation reporting
8. Minimize the time it takes to complete the post-close handoff documentation required by the planning team — when transitioning a complex multi-function Event Opportunity from sales to planning ownership
9. Maximize the confidence in the final commission calculation at booking close — when the event included multiple amendments that each modified the contracted revenue basis for commission purposes
10. Minimize the likelihood of the planning team beginning work from a booking record that has not been formally signed off — when closing and handing off an Event Opportunity before the client has returned the final counter-signed contract
11. Maximize the accuracy of displacement outcome records archived at booking close — when reconciling whether the original displacement decision resulted in the forecasted revenue outcome for performance review
12. Maximize the speed of initiating a rebooking conversation with a client — when the event has just closed successfully and goodwill is highest for securing next year's business before a competing venue does

### Detail Event Plan — Event Planner ("The Promise Keeper")

**Product area:** Event Planning · **Primary object:** Event Plan  
**Functional job:** Gather, confirm, and communicate every detail of a committed event so operations can execute it exactly as the client expects

**JTBD statement** — When a confirmed booking lands in my queue from sales, I want to detail, approve, and distribute a complete BEO inside Momentus, so I can ensure every department has exactly what they need to execute without questions — and without surprises for the client on the invoice.

#### 01 · Define — Scope requirements

*Verbs: Plan · Select · Determine*

Scope the full set of functional requirements for a committed Event Opportunity

**Research opportunity:** A structured intake template at handoff — ensuring that customer preferences, accessibility needs, and event-specific parameters captured during sales are transferred to planning without requiring a separate conversation. Documenting client attributes within the booking record would give planners immediate context rather than relying on verbal briefings or searching email history.

**Desired outcomes:**

1. Minimize the time it takes to identify all functions, spaces, and service requirements for an Event Opportunity — when receiving a new event handoff from the sales team and beginning the detailing process
2. Minimize the likelihood of missing a required function or service during the initial scoping — when reviewing a complex multi-day Event Opportunity with multiple spaces and departments involved
3. Maximize the completeness of the initial function plan — when scoping an Event Opportunity where client requirements were communicated verbally or informally during the sales process
4. Maximize the clarity of the client's priority requirements and non-negotiables — when scoping an Event Opportunity where multiple contacts have provided conflicting or incomplete instructions during sales
5. Minimize the likelihood of a scope discrepancy surfacing during the execution phase — when finalizing the function plan for an event whose requirements were established months before the event date
6. Minimize the effort required to translate verbal client expectations into a structured function scope — when the sales handoff included high-level client notes but no formal requirement documentation
7. Maximize the clarity of department-specific requirements identified during initial scoping — when beginning to plan a multi-function event that involves catering, AV (Audio/Visual), facilities, and external vendors simultaneously
8. Minimize the likelihood of misinterpreting a sales-stage commitment as a fixed requirement during scope definition — when reviewing a sales proposal where certain service inclusions were offered conditionally but are now being treated as confirmed by the client
9. Minimize the likelihood of being unable to reassign a planner to an Event Plan once the initial activity checklist has been generated — when a staffing change or workload rebalance requires reassigning ownership of an already-detailed event
10. Minimize the effort required to identify confirmed upcoming events that have not yet been assigned a planner — when leadership reviews the pipeline of bookings over the next 24 months to distribute planning workload

#### 02 · Locate — Review booking & scope functions

*Verbs: Gather · Access · Retrieve*

Access the confirmed Event Opportunity record and all prior client information needed to begin detailing

**Research opportunity:** A standardized sales-to-planning handoff workflow — triggering a readiness checklist at booking transfer and alerting the event coordinator only when the record is complete. Automated task generation based on event type at handoff would replace the manual checklist setup that currently happens from scratch for every event.

**Desired outcomes:**

1. Minimize the time it takes to access the full Event Opportunity record and associated client history — when beginning the detailing process for a newly assigned event
2. Minimize the likelihood of working from an outdated or incomplete version of the Event Opportunity — when multiple team members have accessed or modified the record since handoff from sales
3. Minimize the effort required to retrieve a returning client's prior event preferences and BEO templates — when starting the function detail process for a repeat booking
4. Maximize the speed of cross-referencing a current Event Opportunity against similar past events for template or preference reuse — when beginning the detailing process for a new booking in a familiar event category
5. Minimize the likelihood of inheriting errors or outdated information from a prior booking used as a template — when cloning a previous BEO as the starting point for a recurring client event
6. Maximize the completeness of client communication history accessible from the Event Opportunity record — when beginning detail work on a booking where the client relationship was managed by a sales manager who has since left the property
7. Minimize the effort required to identify and import applicable templates from prior similar events — when beginning the BEO detail process for a returning client whose prior event requirements are archived in the system
8. Minimize the likelihood of beginning detail work on an Event Opportunity still subject to contract changes by the sales team — when a booking was recently converted from hold to confirmed and the contract amendment process has not yet been finalized

#### 03 · Prepare — Build the event plan

*Verbs: Set Up · Organize · Examine*

Build the complete BEO (Banquet Event Order) / event order for each function, including space, F&B (Food & Beverage), AV (Audio/Visual), exhibitors, registration, setup, and timing — Standardized event resume and BEO templates would eliminate the per-event customization overhead that currently falls on every planner. Automated workflow generation based on event type and customer profile could replace manual checklist creation from scratch. A guided, templatized registration setup flow would reduce configuration from hours to minutes. An in-system recommendation engine surfacing relevant add-ons and upsells based on client history would unlock revenue opportunities that are currently invisible at the planning stage.

**Research opportunity:** Mass data entry tools — bulk function import, copy-paste with configuration preservation, and template-based function sets — would reduce the 90+ hours of manual BEO setup that planners spend on large multi-day events. Inline spell check and field-level validation within the detailing interface would catch quality issues at input rather than when documents are sent to clients. A searchable, filterable content catalog would replace the infinite-scroll browsing that makes program content selection exhausting. Preserving list formatting — bullets and line breaks — when pasting client menus and specs would eliminate the stray characters and broken structure that currently require manual cleanup after every paste. Because clients rarely send finalized specs, a staged import — negotiating details in a lightweight external format first, then bulk-loading only once requirements are locked — would match how detailing actually happens today, rather than assuming specs arrive ready to load.

**Desired outcomes:**

1. Minimize the time it takes to complete all function-level detail fields for a single Event Plan — when building the BEO for a multi-function event with concurrent F&B, AV, and setup requirements
2. Minimize the likelihood of an incomplete or internally inconsistent BEO — when coordinating multiple departments in the detailing of a complex Event Plan with interdependent requirements
3. Minimize the number of communication exchanges required to finalize all function details with the client — when preparing an Event Plan for internal review and distribution to operations
4. Maximize the accuracy of F&B quantities, AV configurations, and setup timings in the initial BEO draft — when completing the function detail for a large-scale event without a pre-event site visit with the client
5. Minimize the effort required to coordinate department-specific detail across catering, AV, and facilities in a single Event Plan record — when building a BEO that requires separate inputs from three or more internal service departments
6. Maximize the accuracy of event timelines and space transition sequences captured in the BEO — when preparing function orders for a multi-day event with back-to-back functions requiring setup and teardown coordination between sessions
7. Minimize the likelihood of a service requirement being omitted from the BEO because it was communicated verbally between the client and a department head — when building an event order where the client has a direct relationship with the F&B or AV department lead outside the formal planning channel
8. Minimize the effort required to resolve conflicting specifications between client-provided event details and the venue's operational constraints — when building the BEO for an event where the client is requesting a non-standard setup that requires coordination with engineering or facilities
9. Minimize the likelihood of inconsistent event-detail documentation style across different planners on the same team — when multiple event managers are each building BEOs independently using their own individual habits and confidence level
10. Minimize the effort required to prepare and activate exhibitor service coordination as part of the Event Plan — when an event includes exhibitors and requires handing off exhibitor service ordering to a separate department
11. Minimize the effort required to prepare diagrams, timelines, and status updates for the recurring cross-department production meeting — when facilities, catering, AV, and security need a shared weekly view of upcoming events before they occur

#### 04 · Confirm — Confirm functions & orders

*Verbs: Validate · Prioritize · Decide*

Obtain client approval and internal sign-off on the complete function detail before distribution — Smarter communication routing could reduce high-volume back-and-forth by handling simple approvals automatically and surfacing only the items that genuinely need planner attention. A self-serve resolution path for exhibitor and attendee inquiries would deflect routine questions away from venue staff entirely. Reducing data entry friction in planning fields would improve record completion rates and protect the data quality that downstream reporting depends on.

**Desired outcomes:**

1. Minimize the time it takes to obtain client approval on the finalized BEO (Banquet Event Order) — when the event date is approaching and operations needs the confirmed detail to begin preparation
2. Minimize the likelihood of distributing a BEO that requires a revision after operations has begun preparation — when finalizing function details with a client who is still making changes close to the event date
3. Maximize the confidence that all required approvals are captured before BEO distribution — when the event involves multiple client contacts or departments with separate sign-off authority
4. Maximize the speed of resolving open questions from the client that are blocking BEO finalization — when the event is approaching and multiple outstanding details remain unconfirmed by the client
5. Minimize the number of revision cycles required to reach a finalized and approved BEO — when working with a client contact who is approving an event for the first time without prior experience reviewing function orders
6. Minimize the effort required to track outstanding approval items across multiple client contacts — when the event involves a main client contact plus a separate technical or operations liaison who must each sign off on different parts of the function plan
7. Maximize the accuracy of the BEO approval audit trail — when confirming function detail for an event that may be subject to post-event dispute regarding what was agreed before distribution
8. Minimize the likelihood of a department beginning setup preparation from an unapproved draft BEO — when the final approval is delayed and a department requests a copy of the working document to begin preliminary preparation

#### 05 · Execute — Distribute event order

*Verbs: Perform · Transact · Administer*

Distribute the finalized BEO (Banquet Event Order) to all relevant operations departments inside Momentus

**Research opportunity:** Client-ready and operations-ready document output — replacing the re-formatting step that planners currently perform in Word before distributing BEOs. Automated distribution triggered by function status change would eliminate the manual step of emailing exports to operations, with configurable templates for each department’s format preferences.

**Desired outcomes:**

1. Minimize the time it takes to distribute the finalized BEO to all relevant departments — when the event is approaching and operations teams need the confirmed plan to begin their preparation
2. Minimize the likelihood of a department not receiving the BEO or receiving an outdated version — when distributing to multiple internal teams with different communication preferences or platform access levels
3. Minimize the number of manual steps required to complete BEO distribution to all departments — when the event involves catering, AV (Audio/Visual), facilities, security, and external vendors who each need specific detail
4. Maximize the confidence that all external vendors and third-party service providers have received the information they need to execute their scope — when the event includes off-property catering, external AV, or contracted entertainment that requires separate coordination
5. Minimize the likelihood of a department beginning preparation from an incorrect or non-final version of the BEO — when a finalized plan is distributed while a parallel revision is still being processed in the system
6. Minimize the effort required to confirm receipt and acknowledgment of the BEO by each receiving department — when distributing a time-sensitive function order in the days leading up to an event where preparation windows are short
7. Maximize the completeness of vendor-specific instructions included in the BEO portions sent to external service providers — when the event relies on off-property catering, contracted AV, or third-party entertainment who must also receive function detail
8. Minimize the likelihood of a department receiving an incomplete BEO because only their relevant section was extracted for distribution — when the event plan was built as a single document and requires manual extraction of department-specific sections before distribution
9. Maximize the professional, polished appearance of the BEO or event schedule distributed to the client and operations — when the system-generated document does not meet the visual standard the planner needs to present externally
10. Minimize the likelihood of operations working from an outdated event diagram — when a revised diagram is uploaded to the Event Plan after the original has already been referenced or printed by operations
11. Minimize the number of separate documents that must be compiled and distributed to operations for a single event — when Event Work and diagrams are generated as individual files rather than one consolidated package

#### 06 · Monitor — Track completion

*Verbs: Verify · Track · Check*

Track BEO (Banquet Event Order) completion, client changes, and department acknowledgment across all active events in the planner's portfolio

**Research opportunity:** Role-based notification triggers tied to planning milestones — alerting planners when approvals are pending, deadlines are approaching, or client responses are overdue, without requiring daily manual status checks. Centralizing client communication within the event record would replace the fragmented email, mail, and phone threads that currently make it impossible to audit the client relationship history for a given event.

**Product documentation opportunity:** A complete audit log for Event Plan records capturing all critical field changes — account, name, attendance, anchor venue, date, time, and category — with attribution of who changed what and when, so planners can maintain data integrity and resolve post-event disputes about what was agreed and distributed.

**Desired outcomes:**

1. Minimize the time it takes to understand the completion status of all active Event Plans in the planner's current portfolio — when managing multiple events simultaneously at different stages of the detailing process
2. Minimize the likelihood of a detail change from the client going unacknowledged by an operations department — when a modification to an Event Plan is received after the initial BEO has already been distributed
3. Minimize the effort required to maintain an accurate view of which events are ready, pending, or at risk in the planner's active portfolio — when preparing for an internal operations review with the planning team lead
4. Maximize the speed of identifying which events in the active portfolio are at risk of missing a detailing deadline — when reviewing the planning calendar to prioritize workload across multiple upcoming events
5. Minimize the effort required to confirm that all departments have acknowledged and accepted the BEO for an upcoming event — when conducting a pre-event check in the 48 hours before an event with multiple service dependencies
6. Maximize the clarity of the current state of each active event in the portfolio at a glance — when managing five or more concurrent events at different stages of the detailing and confirmation process
7. Minimize the effort required to track client-initiated changes across multiple active events simultaneously — when managing a portfolio where several clients are making concurrent modifications to their pending function orders
8. Minimize the likelihood of an approaching distribution deadline going unnoticed — when balancing detail work across upcoming events while simultaneously responding to client change requests on already-distributed plans
9. Minimize the likelihood of a payment or deposit deadline going unnoticed — when managing multiple active events with different payment plan schedules and no system-generated reminder

#### 07 · Modify — Update & notify

*Verbs: Update · Adjust · Maintain*

Update function details and notify impacted departments when client changes arrive after initial BEO (Banquet Event Order) distribution — Auto-routing change orders directly to the affected function — with intelligent triage that approves simple updates automatically and flags complex ones for review — would significantly reduce manual effort and the risk of missed or misapplied changes.

**Research opportunity:** Mass editing across functions and orders — applying a change once and propagating it to all affected records — would replace the line-by-line re-entry that makes change management so time-consuming for large multi-function events. In-flight document editing with version tracking would enable planners to update a distributed BEO without having to re-export and redistribute it manually.

**Product documentation opportunity:** Exhibitor booth number changes captured and visible in Change Tracking — ensuring planners and operations teams always have accurate stand information without relying on manual communication when booth assignments shift during active event management. Change Tracking capturing note-only edits, not just changes to resources and functions, would remove the need for catering coordinators to separately email-flag note updates that the system otherwise misses — a real gap that currently undermines confidence in the log as a complete record of what changed.

**Desired outcomes:**

1. Minimize the time it takes to update an Event Plan record and re-distribute the revised BEO to all impacted departments — when a client change is received after the initial BEO has been shared with operations
2. Minimize the likelihood of an operations team executing against an outdated version of the BEO — when multiple revisions are made to an Event Plan in the days leading up to the event
3. Minimize the disruption caused by a last-minute function change to the operations team — when the modification requires a re-scoping of space setup, catering quantities, or AV (Audio/Visual) configuration
4. Maximize the accuracy of the revised BEO re-issued to all affected departments — when a last-minute client change affects multiple function details that were previously confirmed and distributed
5. Minimize the likelihood of a department acting on a superseded version of the BEO — when issuing a revision to an active event plan after the original has already been acknowledged by one or more departments
6. Maximize the speed of issuing a revised BEO and confirming re-acknowledgment by all affected departments — when a client change arrives within 48 hours of the event and requires same-day redistribution to operations
7. Minimize the effort required to identify which portions of the BEO were affected by a client change and which can remain as distributed — when a single-function modification is received for an event with multiple concurrent functions already in execution preparation
8. Minimize the likelihood of a post-modification version conflict causing two departments to execute against different versions of the same function plan — when a revision is issued while one department has already printed and begun preparation from the prior approved BEO
9. Minimize the likelihood of a copied or repeat event's functions falsely registering as a change on the operations change-tracker — when a planner copies function details from a prior instance of a recurring event and must move them out of a read-only pre-confirmed state to edit them

#### 08 · Conclude — Ensure completion

*Verbs: Store · Finish · Close*

Ensure all function records are closed and complete, confirm post-event customer satisfaction, and initiate outreach for renewals and next-year bookings

**Research opportunity:** In-platform invoice and payment collection at event close — eliminating the offline payment workflow and the manual reconciliation step between Momentus and external financial systems. Automated post-event financial summary generation would replace the manual Excel work currently required to close out invoicing and reconcile actuals.

**Desired outcomes:**

1. Minimize the time it takes to capture and record post-event actuals against each Event Plan — when the event has concluded and the planner is reconciling actual attendance, consumption, and service delivery against the BEO (Banquet Event Order)
2. Minimize the likelihood of missing or inaccurate actuals in the closed Event Plan record — when closing out a multi-function event where actual vs. planned quantities vary significantly across departments
3. Maximize the accuracy of final billing data captured from closed Event Plans — when preparing the post-event invoice reconciliation with the client and finance team
4. Maximize the completeness of variance documentation between the planned and actual Event Plan — when closing an event where significant deviations from the BEO occurred due to last-minute client changes or operational issues
5. Minimize the effort required to compile and submit all post-event information required by the finance team for invoice finalization — when closing out a multi-function event with complex billing across food, beverage, AV (Audio/Visual), and external vendor services
6. Minimize the effort required to reconcile final attendance and consumption actuals against each function line in the BEO — when concluding a multi-function event where actual guest counts, F&B (Food & Beverage) consumption, and setup usage varied significantly from the plan
7. Maximize the completeness of documentation supporting any unbilled overages or service additions — when closing out an event where client-requested additions during execution were not captured in the original BEO
8. Minimize the likelihood of a discrepancy between the closed BEO and the finance invoice going undetected before billing — when finalizing event records for a complex event where multiple last-minute changes were made in the final 24 hours
9. Maximize the completion rate of post-event summary documentation across the planning team — when the department wants to analyze the closed-event portfolio to identify commonalities and improve future planning

### Orchestrate Event Work — Operations Director ("The Moment Maker")

**Product area:** Event Operations · **Primary object:** Event Work  
**Functional job:** Direct all Event Work required to set up, run, and tear down an event — deploying crew and resources efficiently across multiple simultaneous events through the department heads who report up

**JTBD statement** — When the finalized event plan and Event Work arrive from planning, I want to assign, track, and close all Event Work inside Momentus, so I can my team runs a flawless event — with every crew member knowing exactly where to be and when, without paper, radio guesswork, or last-minute scrambles.

#### 01 · Define — Scope Event Work

*Verbs: Plan · Select · Determine*

Scope the full set of Event Work required to execute an Event Plan from setup to teardown — In-system assignment notifications would bring crew communication into the platform, eliminating dependence on outside channels and reducing the risk of missed assignments and delayed acknowledgments.

**Research opportunity:** An operations-specific planning view at event intake — surfacing staffing requirements, resource needs, and scheduling constraints at the point when events are still being scoped. Moving staffing coordination into Momentus from Outlook and email would give operations managers a single place to see crew availability and event demand simultaneously. The same Event Work duration estimates needed here to size the staffing plan are also what Prepare would need to derive accurate start times, not just deadlines.

**Desired outcomes:**

1. Minimize the time it takes to identify all setup, execution, and teardown Event Work required for an Event Plan — when receiving the finalized BEO from the planning team and beginning Event Work planning
2. Minimize the likelihood of an Event Work being omitted during pre-event scoping — when scoping a complex multi-department event plan with interdependent setup sequences
3. Maximize the completeness of the initial list of Event Work for an Event Plan — when planning setup for an event with non-standard configurations, external vendors, or time-critical dependencies
4. Maximize the accuracy of the pre-event staffing plan based on the scope of Event Work — when scheduling crew for a complex event with multiple concurrent setup tracks and time-sensitive sequencing
5. Minimize the likelihood of discovering a missing Event Work dependency after setup has already begun — when reviewing the Event Work list for an event with non-standard space configurations or external vendor integrations
6. Maximize the accuracy of equipment and material quantities required to execute all Event Works — when scoping Event Work for an event with non-standard configurations that differ significantly from the venue's standard setup inventory
7. Minimize the effort required to translate auto-generated Event Work into individual crew-level assignments — when receiving a complex multi-function event plan whose Event Work has not previously been broken down to specific crew members
8. Minimize the likelihood of over-staffing or under-staffing an event — when estimating crew size from a BEO where headcount and timing information is incomplete or non-standard
9. Maximize the effectiveness of the handoff from the Event Plan to Event Work — when a finalized Event Plan must become directly actionable for the operations team without requiring manual rework to translate it into Event Work
10. Minimize the amount of missing or conflicting information carried over in the handoff from Event Plan to Event Work — when the operations team must stop and request clarification instead of proceeding, causing knowledge loss and rework
11. Maximize the likelihood that missing or conflicting information in a piece of Event Work is flagged automatically before execution begins — when that gap would otherwise only surface once crew are already on-site and underway

#### 02 · Locate — Access Event Work

*Verbs: Gather · Access · Retrieve*

Access the finalized BEO (Banquet Event Order) and all supporting documentation needed to review and assign the Event Work the system generates from it

**Research opportunity:** An operations-ready event view — filtering and presenting only the Event Work, spaces, and timing relevant to a given crew member’s scope, rather than exposing the full event record. Real-time inventory availability visible at Event Work assignment would eliminate the parallel spreadsheet tracking that operations managers currently maintain to know what resources are in use.

**Product documentation opportunity:** Room diagrams accessible directly from MWO (Mobile Work Orders) — enabling crew to reference layouts on-site without switching to a separate system, reducing setup errors caused by working from memory or outdated printed plans. Today, floor plans and dietary lists are filed at the full-event level rather than to the specific function or piece of Event Work — extending document association down to the Event Work itself, not just improving how MWO displays what already exists, would let crew find only what is relevant to their assignment instead of sorting through an entire event’s paperwork.

**Desired outcomes:**

1. Minimize the time it takes to access the finalized BEO and associated function details for a scheduled event — when beginning Event Work assignment for a function whose BEO has just been distributed by the planning team
2. Minimize the likelihood of receiving Event Work generated from an outdated or unfinalized version of the BEO — when the event planner is still making changes to the Event Plan while the operations team is beginning preparation
3. Minimize the effort required to locate all space, equipment, and resource specifications needed to act on received Event Work — when accessing function detail for an event with non-standard AV (Audio/Visual), catering, or setup configurations
4. Maximize the speed of confirming that the BEO accessed is the most current approved version — when Event Work is generated for an event where recent changes may have been submitted by the planning team
5. Minimize the effort required to access event-specific floor plans, room diagrams, and equipment specs alongside the BEO — when preparing to execute a non-standard setup's Event Work, which requires visual reference materials to assign correctly
6. Minimize the effort required to confirm the BEO is fully approved and authorized before Event Work is generated and delivered to operations — when the event planner has indicated the BEO is finalized but the formal approval record has not yet been updated in the system
7. Maximize the accuracy of all floor plan and space layout details available at the time Event Work is received — when preparing Event Work assignments for an event using a non-standard room configuration that requires custom layout reference materials
8. Minimize the likelihood of receiving Event Work generated from a BEO that the planning team is still revising — when the event planner and operations team are working on parallel timelines and the final detail has not been formally locked
9. Minimize the likelihood of a just-uploaded diagram failing to render and requiring a manual re-upload before crew can reference it on site — when preparing to execute a piece of Event Work immediately after the planning team distributes a new floor plan or diagram
10. Minimize the likelihood of a space or inventory item appearing available for another use before setup or teardown time has been accounted for — when the venue calendar reflects only the contracted event hours and not the surrounding turnover window operations needs

#### 03 · Prepare — Forecast & publish Event Work

*Verbs: Set Up · Organize · Examine*

Assign all Event Work to crew members, departments, and equipment, with timing and location details

**Research opportunity:** Field-ready Event Work output — formatted for legibility in operational settings, not back-office screens — would reduce the paper-printing workaround that crews currently rely on when digital displays are impractical. Automated staffing assignment based on event type, crew skills, and availability would replace the manual scheduling process that currently requires cross-referencing multiple systems.

**Product documentation opportunity:** Temporary and contract staff able to access and be assigned work in MWO (Mobile Work Orders) without requiring full user accounts — enabling operations teams to scale their workforce for peak periods without provisioning full platform licenses. Event Work items assignable to multiple people with specific dates, times, and contact details would support coordinated pre-event delivery scheduling. Configurable default filters, searchable dropdowns, and custom item status visibility would let operations managers tailor the MWO experience for their teams, reducing clutter and speeding up how field staff find their assignments.

**Desired outcomes:**

1. Minimize the time it takes to assign all Event Works to the appropriate crew members and departments — when coordinating a multi-function event with concurrent setup tracks across multiple venue spaces
2. Minimize the likelihood of an Event Work being unassigned or assigned to the wrong crew member — when distributing Event Work across multiple departments with different staffing levels on event day
3. Minimize the effort required to replicate a standard Event Work assignment template from a prior similar event — when preparing Event Work for a recurring event type with a consistent setup configuration
4. Maximize the accuracy of Event Work timing assignments relative to the overall event timeline — when assigning crew across Event Work where setup sequences are interdependent and crew from different departments must coordinate arrivals
5. Minimize the likelihood of a crew member receiving an Event Work assignment without sufficient detail to complete it independently — when assigning Event Work to staff who were not involved in the pre-event planning discussion
6. Maximize the clarity of Event Work priority and sequencing communicated to each crew member — when assigning interdependent setup Event Work where the completion of one piece must precede the start of another
7. Minimize the effort required to build a complete crew schedule from an Event Work template for a recurring event type — when preparing staff assignments for a standard conference or banquet that uses the same configuration the venue has executed multiple times before
8. Minimize the likelihood of a time conflict between two assignments given to the same crew member — when scheduling staff who are assigned to multiple sequential functions within the same event window
9. Minimize the effort required to generate accurate physical labels for booth-specific equipment such as power cords and utility drops — when preparing hundreds of individually labeled items for a large exhibition event
10. Minimize the effort required to produce a single, field-legible packet combining Event Work and room diagrams — when distributing daily assignments to an operations team that primarily works from print rather than devices
11. Maximize the speed at which open or available shifts generated by a staffing-need change are broadcast to eligible crew — when a BEO or resume update triggers new labor requirements across departments
12. Minimize the effort required to translate a bundled service package into individual, crew-actionable pieces of Event Work — when preparing an order that combines multiple sub-items under a single package line
13. Minimize the effort required to assign a piece of Event Work to whichever available crew member holds the right role or department, rather than a specific named person — when the assigning supervisor only cares that the right department covers it, not who specifically does it
14. Minimize the effort required to re-enter start and end dates and times for every individual item, instruction, or package — when applying a template to a recurring event where the overall schedule shifts but the relative timing between items does not
15. Maximize the clarity of a timeline view of all functions and Event Work across every department — when coordinating a multi-department event where interdependent Event Work needs to be sequenced and milestones tracked visually rather than in an external spreadsheet
16. Maximize the usability of the same Event Work and dashboard interface — when the operation scales from a small crew handling a few dozen pieces of Event Work to a large crew handling over a thousand
17. Maximize the accuracy of a piece of Event Work's assigned start time, derived from how long that type of work typically takes to complete — when crew need to know exactly when to begin, not just the deadline by which it must be finished

#### 04 · Confirm — Confirm no last-minute changes

*Verbs: Validate · Prioritize · Decide*

Validate all assignments, run a pre-event readiness check, and confirm crew is on-schedule before the event begins

**Desired outcomes:**

1. Minimize the time it takes to verify that all Event Works are assigned, acknowledged, and on-schedule — when conducting a pre-event readiness check in the final hours before setup begins
2. Minimize the likelihood of discovering unassigned or unacknowledged Event Work during the pre-event check — when supervising a multi-team setup with staff distributed across several venue spaces
3. Maximize the confidence in crew readiness and Event Work assignment completeness before the event window opens — when overseeing a high-stakes event where setup delays directly impact the client experience
4. Maximize the speed of resolving a missing assignment or resource gap identified during the pre-event readiness check — when completing final preparation for an event that begins within two hours and requires immediate corrective action
5. Minimize the likelihood of a crew member arriving at the wrong location or time due to a miscommunication in Event Work assignment — when supervising a multi-space event where crew members are assigned to rooms they have not previously worked
6. Maximize the completeness of the pre-event readiness verification across all departments — when conducting the final check before a high-profile event where any gap in preparation would be immediately visible to the client
7. Minimize the effort required to escalate a readiness issue to the appropriate department head before the event window opens — when a pre-event check reveals a missing resource or incomplete setup that requires managerial intervention to resolve
8. Minimize the likelihood of a last-minute BEO change invalidating Event Work already distributed and acknowledged by crew — when a planning team revision arrives after the crew has been dispatched and briefed on their assignments

#### 05 · Execute — Run the event

*Verbs: Perform · Transact · Administer*

Supervise live Event Work execution across all crew and spaces during the event window, from setup to teardown — In-system real-time updates could replace ad hoc radio and paper coordination, giving operations a live view of execution across every crew and space. A purpose-built mobile experience would drive field adoption and close the gap between what is planned and what is actually logged. Surfacing operations constraints such as load-in windows and labor limits to sales and planning during booking would prevent commitments that operations cannot deliver. A cross-event labor view would allow crews to optimize deployment across adjacent events and eliminate redundant setup and teardown cycles.

**Research opportunity:** Reliable mobile access to Event Work for field crews — without requiring a Momentus login — would replace the printed manifest and radio-driven workflows that make real-time status tracking impossible. A live event-day dashboard consolidating all active Event Work, crew assignments, and space statuses would give supervisors the situational awareness currently assembled from radio calls and printed sheets.

**Product documentation opportunity:** Capture client signatures and photo evidence per Event Work item on-site — confirming delivery and getting approval without paper forms. Booth names, company banners, event names, and event IDs visible on Event Work would let crew identify the right location and customer on the show floor without cross-referencing other systems. Set/strike status and pickup item tracking in MWO (Mobile Work Orders) would surface the full setup-teardown lifecycle of each piece of Event Work. Note templates with auto-save protection would prevent field crew from losing information mid-entry. Department-based completion privileges would ensure only authorized staff can close out work in their domain. Multi-language display of resource and item descriptions would enable multilingual field teams at international venues to work without translation errors.

**Desired outcomes:**

1. Minimize the time it takes to begin executing setup Event Work — when the operations crew arrives on site at the start of the event window
2. Minimize the likelihood of an Event Work being performed incorrectly — when crew members reference their assignments from a mobile device in the field during active execution
3. Minimize the disruption to the event timeline caused by a setup discrepancy during live execution — when the operations team must resolve the issue without stopping the event flow
4. Maximize the speed of communicating a real-time Event Work update or priority change to crew in the field — when a setup issue is identified during active execution and the crew member responsible is working in a different part of the venue
5. Minimize the effort required to confirm Event Work completion in real time without interrupting crew during active execution — when supervising multiple concurrent setup tracks that are progressing simultaneously across the venue
6. Minimize the likelihood of a crew member executing an Event Work against an outdated specification — when a modification was issued by the planning team after the crew was dispatched with printed assignments
7. Maximize the clarity of real-time Event Work status, from setup to teardown, visible to the operations lead — when supervising crew distributed across multiple concurrent event spaces during peak execution
8. Minimize the effort required to reallocate crew from lower-priority Event Work to address an urgent execution gap — when an issue is identified during live execution that requires pulling resources away from non-critical setup work
9. Minimize the likelihood of an inaccurate item quantity or spec going undetected during setup — when crew reference only the visual room diagram and do not cross-check the itemized Event Work quantities
10. Minimize the likelihood of losing in-progress mobile Event Work entries due to application performance failures such as crashes, logouts, or slow diagram loads — when low-tech-savvy field crew are completing setup Event Work on a mobile device in real time
11. Minimize the likelihood of an Event Work item being marked complete by someone other than the authorized supervisor or coordinator — when a maintenance or install crew member can update status but only a designated coordinator should verify and close the item
12. Minimize the likelihood of an unplanned on-site request going unfulfilled or unbilled — when a need falls outside the original scope of work and must be routed back through another team before it can be addressed

#### 06 · Monitor — Real-time track

*Verbs: Verify · Track · Check*

Track Event Work completion, crew location, and incident status in real time during the event

**Research opportunity:** A living event manifest that updates in real time as changes are made — replacing the static PDF export that becomes outdated the moment it is distributed. System-pushed notifications to crew when a piece of Event Work changes would eliminate the need for supervisors to manually relay updates over radio or messaging apps, closing the gap between what was planned and what crew knows in the field.

**Product documentation opportunity:** Venue-level filtering in Change Tracking for a consolidated view of all changes per location — enabling operations supervisors to monitor activity across multi-venue environments without manually selecting individual spaces. Granular resource filtering by group and resource type would surface relevant operational changes without sifting through unrelated data. Exhibitor booth number changes captured in Change Tracking would keep operations and logistics teams aligned without relying on manual communication when stand assignments shift. Extending the Operations Change Log to capture changes up to a full year out would give supervisors a complete longitudinal record of operational decisions for events booked far in advance.

**Desired outcomes:**

1. Minimize the time it takes to verify the completion status of all Event Works — when supervising a multi-team, multi-space event in real time
2. Minimize the likelihood of an operational incident going unaddressed — when monitoring Event Work activity across concurrent functions running simultaneously in the venue
3. Minimize the effort required to maintain visibility into crew location and Event Work progress — when supervising a complex event with staff distributed across multiple venue spaces
4. Maximize the speed of routing an operational incident to the correct crew member for immediate resolution — when an issue is reported during an active event and the closest available staff member must be identified and dispatched
5. Minimize the likelihood of an operational gap going undetected until it escalates into a client-visible failure — when monitoring Event Work status across a large-scale event with multiple functions running concurrently in different venue spaces
6. Maximize the speed of identifying a piece of Event Work that is falling behind schedule during live execution — when monitoring crew progress across multiple simultaneous event spaces during a complex multi-function event
7. Minimize the effort required to document an operational incident in real time — when managing an active event and a client-visible issue requires immediate logging without stopping the operations supervisor from coordinating the resolution
8. Maximize the accuracy of the real-time status view of all active Event Works — when a venue director or client representative is monitoring setup progress and requiring up-to-date information without interrupting the operations team
9. Minimize the cognitive effort required to parse a shared dashboard view for only the Event Work and spaces relevant to a specific supervisor — when using a shared, unfiltered view that surfaces every department's activity instead of just the supervisor's own scope
10. Maximize the traceability of an individual Event Work item's status history from installed to verified to flagged for repair — when a crew member discovers a defect during setup and needs to route it for correction without creating a separate, disconnected incident record
11. Maximize the accessibility of real-time status indicators for crew and supervisors with different visual abilities — when monitoring incident or risk status across a mixed-ability team during an active event
12. Maximize the degree to which a resolved incident informs future risk identification — when closing out an incident that reveals a previously unassessed risk
13. Minimize the effort required to confirm event floor status without physically returning to a desk or device — when supervising active work from the floor and needing an update in the moment
14. Maximize the flexibility of switching between a single-event view and a consolidated view spanning every concurrent event — when different roles on the same team need different scopes — one overseeing one event in depth, another overseeing the full portfolio running that day
15. Maximize the visibility into how actual crew time, staffing, and resource usage are diverging from what was planned for this event's operations — when the operations plan called for a certain staffing and resource level and live execution is revealing that the actual need differs
16. Minimize the effort required to decide whether an incident needs escalation to leadership or can remain part of the standard local log — when monitoring a high-volume event where most incidents are routine but a small number carry reputational or safety significance

#### 07 · Modify — Handle change orders

*Verbs: Update · Adjust · Maintain*

Reassign or update Event Work when changes are communicated from the planning team during execution

**Research opportunity:** In-event change propagation — updates made in Momentus immediately reflected in the Event Work visible to crew in the field, without requiring a manual re-export or radio broadcast. Change acknowledgment tracking would give supervisors confidence that a modification has been received and actioned by the right crew member, not just sent. Beyond notifying that something changed, surface the calculated downstream effect directly — e.g. an attendance increase of 50 translates to a specific quantity increase across specific catering line items and specific dates — so operations doesn't have to re-derive the impact by hand.

**Desired outcomes:**

1. Minimize the time it takes to reassign or update an Event Work — when a last-minute change is communicated by the event planner during live execution
2. Minimize the likelihood of a change request being missed by crew in the field — when a modification arrives while staff are actively executing Event Work across multiple venue spaces
3. Minimize the disruption to the operational sequence caused by an unexpected Event Work re-sequencing or emergency resource reallocation — when a client change requires immediate adjustment during a live event
4. Maximize the speed of communicating a change request from the event planner to the affected crew member — when a client modification arrives mid-event and requires immediate reassignment of resources already deployed in the field
5. Minimize the likelihood of an Event Work conflict arising from a mid-event reassignment — when reallocating crew or equipment from one function to another while both are actively executing in the venue
6. Maximize the speed of acknowledging a change request from the planning team and confirming the correct crew member has been notified — when a modification is received mid-event and the planner needs confirmation that the operations team has actioned the update
7. Minimize the effort required to document the reason for an Event Work reassignment and the time it was actioned — when a mid-event change is made that may need to be referenced during post-event billing or incident review
8. Minimize the likelihood of a crew member receiving conflicting instructions from both the original assignment and a verbal update — when a modification is communicated directly by the event planner to an individual crew member without updating the formal Event Work record
9. Minimize the effort required to confirm that a change reported through operations was actually applied by the planning team — when a customer relays a change to operations directly, and operations has no visibility into whether or when the planning team updated the record
10. Minimize the time it takes to receive event-manager approval or denial for a change that operations identifies on-site — when a customer requests a modification during setup and operations must wait for a yes or no before proceeding
11. Maximize the completeness of change detection during live execution — when a modification is communicated through unstructured notes rather than a structured field update
12. Maximize the accuracy of the calculated downstream impact automatically surfaced when a change occurs — when a single attribute change, such as attendee count, affects multiple line items, departments, or dates that would otherwise require manual recalculation

#### 08 · Conclude — Capture actuals & close

*Verbs: Store · Finish · Close*

Log Event Work completion, document all actuals and incidents, close the Event Work record, and hand off to the finance team for post-event invoicing and billing — A mobile-first actuals capture flow would replace paper-based and verbal recording at the venue, enabling real-time quantity logging and more accurate post-event records for billing and reporting.

**Research opportunity:** Actuals capture within Event Work at completion — allowing crew to log what was used, what changed, and what was left undone directly from mobile — would replace the post-event verbal debrief and manual entry cycle. Automated invoice generation from captured actuals would eliminate the manual reconciliation step between operations and finance at event close. Operations teams already produce manual end-of-shift/end-of-day summaries today — that existing reporting habit is a more realistic data-capture surface for a dashboard than introducing new data entry.

**Product documentation opportunity:** Unit pricing, resource codes, and equipment/labor breakdowns visible when adding actuals in MWO (Mobile Work Orders) — enabling crew to accurately document costs on-site and feeding cleaner data into post-event invoicing. The bill-to account surfaced in MWO would let crew verify billing context before marking work complete, preventing post-event billing disputes. Digital signature capture per Event Work item at completion would create a proof-of-delivery record that replaces paper forms for client sign-off. Clearly distinguishing consumption-based items — bar pours, banquet beverages — that can only be finalized after the event from as-ordered items that can close immediately would let crew complete the bulk of a piece of Event Work right away instead of holding the entire record open until final counts are in.

**Desired outcomes:**

1. Minimize the time it takes to log completion of all Event Works and document operational actuals — when the event has concluded and teardown is complete
2. Minimize the likelihood of incomplete or inaccurate incident records — when concluding the operational log for a complex multi-department event
3. Maximize the accuracy of resource, labor, and material actuals captured — when closing out all Event Works to support post-event financial reconciliation with the planning team
4. Maximize the completeness of incident and deviation records captured at event conclusion — when closing out Event Work for an event where multiple unplanned operational issues required real-time resolution during execution
5. Minimize the effort required to confirm all Event Work completions and submit the closed Event Work to the planning team — when wrapping up teardown for a late-running event while crew are still on site and pending their next assignment
6. Minimize the effort required to collect and consolidate completion confirmations from all crew members after teardown — when wrapping up a large-scale event where staff were distributed across multiple spaces and are departing at different times
7. Maximize the accuracy of equipment return and inventory counts submitted at event close — when concluding an event where non-standard equipment was sourced from an external vendor and must be reconciled against the delivery manifest
8. Minimize the likelihood of an unresolved incident remaining open after the Event Work is submitted as complete — when concluding a complex event where multiple operational issues were logged in real time but not all have been formally resolved and documented
9. Minimize the reliance on memory and manual note-taking to compile a daily summary of completed, in-progress, and added work across the building — when producing an end-of-day report for other departments without a system-generated summary of Event Work status
10. Minimize the likelihood of being blocked from closing completed Event Work because unrelated child service order items remain open — when only a subset of an event's service orders are complete at the time of the on-site check
11. Minimize the likelihood of losing entered completion or actuals data due to an application save failure — when a supervisor is logging quantities and labor actuals on a tablet immediately after teardown
12. Maximize the ability of the operations team to independently verify and close a piece of Event Work upon room check — when the event manager currently must perform the closure but wants accountability shifted to the team that did the physical inspection
13. Maximize the accuracy of distinguishing consumable resources from reusable equipment in actuals reporting — when quantities delivered on-site differ from quantities originally ordered and must be reconciled at close
14. Maximize the degree to which the gap between planned and actual staffing, resource, and timing needs on a closed event sharpens how similar future events are staffed and resourced — when a comparable event type is entering the pipeline and historical operational delivery data could improve the accuracy of the next staffing and resourcing plan

### Reconcile Event Financials — Finance Director ("The Financial Steward")

**Product area:** Event Finance · **Primary object:** Event Financials  
**Functional job:** Reconcile event and venue-level financial performance — from budget through final closeout — so every dollar is accounted for and the venue’s financial story holds up to scrutiny

**JTBD statement** — When an event has executed and needs to move from operational activity to a reconciled financial record, I want to consolidate budget, actuals, and invoices into one accurate financial close entirely inside Momentus, so I can reconcile events cleanly, catch variances before they become problems, and report the venue’s financial story confidently to executives, department heads, and government stakeholders.

#### 01 · Define — Set the budget baseline

*Verbs: Plan · Select · Determine*

Create the long-horizon budget and price list an event will be measured against, and ensure all billable items are set up in the system before the event is sold — Budget creation happens up to a year or more in advance, and procurement rules for vendor and contract selection are often set at this stage.

**Research opportunity:** AI (Artificial Intelligence) can surface spend patterns across past events and project the impact of a reallocation before committing — turning budget creation from a static, historical exercise into a forward-modeled one.

**Desired outcomes:**

1. Minimize the time it takes to build and submit a venue or event budget for approval — when creating a long-horizon annual or capital-project budget under municipal or institutional review timelines
2. Maximize the accuracy of the initial price list and billable item setup for a new fiscal year or event type — when preparing pricing ahead of peak booking season
3. Minimize the likelihood of a billable item being missing from the system at the point an event is sold — when finance has not yet synced new service or space offerings into the price list before sales begins booking them
4. Minimize the effort required to route a vendor or contract decision through required procurement and approval channels — when operating under municipal or public-entity purchasing rules that apply even to routine repairs or services
5. Maximize the confidence in the budget baseline an event will later be measured against — when submitting a multi-year or capital-project-adjacent budget for executive and government approval
6. Minimize the effort required to establish a single payment plan spanning a multi-year or multi-event contract — when a customer’s booking spans multiple linked events that finance intends to bill as one financial obligation

#### 02 · Locate — Pull event financial setup

*Verbs: Gather · Access · Retrieve*

Retrieve the budget line, price list, and contract terms relevant to a specific event — currently pulled from multiple disconnected systems (PeopleSoft for budget/payables, Enterprise for GL (General Ledger) and event cost data).

**Desired outcomes:**

1. Minimize the time it takes to locate the budget line and price list that apply to a specific event — when preparing to review or approve costs for an upcoming or in-progress event
2. Minimize the effort required to cross-reference vendor contract terms against the system of record — when verifying that a contractor’s invoiced rate matches what was originally contracted
3. Minimize the likelihood of needing to pull data from more than one system to answer a basic event-financial question — when a department head or executive asks for a quick read on an event’s financial position
4. Maximize the speed of accessing GL inquiry detail for a specific event — when investigating a reported cost or revenue discrepancy
5. Minimize the effort required to obtain a detailed cost and revenue breakdown from a third-party partner operator such as food and beverage — when that data must be manually requested and compiled rather than being visible in the system

#### 03 · Prepare — Review vendors & allocate costs

*Verbs: Set Up · Organize · Examine*

Review vendor and contractor terms, allocate costs to the correct departments and cost centers, and confirm procurement approvals are complete before the event executes.

**Desired outcomes:**

1. Minimize the effort required to allocate an event’s projected costs across the correct departments and cost centers — when multiple departments share responsibility for a single event’s budget
2. Minimize the time it takes to complete vendor and contract review through required procurement channels — when a contractor or vendor relationship must be approved before work can begin
3. Maximize the clarity of which department owns which line item in an event’s budget — when preparing for a multi-department event where cost ownership has historically been ambiguous
4. Minimize the likelihood of a contracted rate being entered incorrectly before the event begins — when setting up contractor and vendor terms that will later be checked against invoices
5. Maximize the accuracy of the pre-event cost allocation plan — when preparing budgets for events with a history of departments not tracking their own spend
6. Minimize the effort required to separate an in-house partner’s internal costs from customer-billable costs — when the partner, such as an in-house caterer, operates in the same system and costs must be manually flagged and un-flagged as internal at the event level
7. Minimize the likelihood of a percentage-based discount being miscalculated or lost when reconciled against the contracted rate — when handling non-standard discounts such as a percentage off booth or space cost
8. Minimize the likelihood of losing institutional knowledge about a licensing agreement’s terms or approvals — when contracts are signed two to five years before the event and the original signee has since left or moved on

#### 04 · Confirm — Lock budget & billables

*Verbs: Validate · Prioritize · Decide*

Confirm the budget, price list, and billable item setup are finalized and locked before the event window opens.

**Desired outcomes:**

1. Maximize the confidence in the budget and price list being finalized before an event begins — when an event with non-standard pricing or vendor terms is about to move into execution
2. Minimize the likelihood of a budget or price list change occurring after the event has already begun — when late pricing or vendor decisions are still being finalized close to the event date
3. Minimize the effort required to verify that every billable item planned for an event has been correctly entered in the system — when preparing for an event with a large or non-standard list of chargeable services
4. Maximize the speed of resolving a missing budget line before the event window opens — when a last-minute change to event scope requires a corresponding budget adjustment
5. Minimize the effort required to record a customer deposit — when payments are collected by check or in person rather than through an integrated payment portal
6. Maximize the speed of being alerted that a deposit is due, has been made, or is past due — when finance currently relies on manually pulling or checking reports for deposit status

#### 05 · Execute — Monitor spend & payroll

*Verbs: Perform · Transact · Administer*

Monitor event spend and vouchers as they post, check GL (General Ledger) entries for variance throughout the event, and verify labor costs against payroll — while confirming operations and planning are entering data correctly in real time.

**Desired outcomes:**

1. Minimize the time it takes to identify a GL variance while an event is still in progress — when reviewing GL entries throughout a live, multi-day event
2. Minimize the likelihood of a labor cost discrepancy going unnoticed until after payroll runs — when verifying contracted and in-house labor actuals against event-day staffing
3. Maximize the accuracy of data entered by event planners and operations into service orders and Event Work — when an event’s post-event reconciliation depends on that data being correct at the source
4. Minimize the effort required to confirm that billable vouchers are being recorded correctly as the event unfolds — when monitoring spend across a multi-department, multi-day event
5. Maximize the speed of flagging a cost that is tracking meaningfully over budget while the event is still running — when there is still time to intervene before the event concludes
6. Minimize the likelihood of contractor costs going untracked during the event because the invoice hasn’t arrived yet — when third-party vendors are on-site but bill separately and later
7. Maximize the confidence in the real-time financial picture of an in-progress event — when an executive or department head asks how an event is tracking against budget before it has closed
8. Minimize the likelihood of a service order or piece of Event Work being closed to process an invoice payment before the associated labor has actually occurred — when the system requires orders to be closed in order to invoice a credit-card payment

#### 06 · Monitor — Catch variances early

*Verbs: Verify · Track · Check*

Track budget-vs-actual variance on an ongoing basis and forecast the likely month-end financial position — rather than discovering shortfalls only when the books close.

**Research opportunity:** ML (Machine Learning) forecasts month-end position from mid-month signals — unposted vouchers, labor actuals, open Event Work — alerting Finance weeks before a surprise hits, e.g. "Based on current trajectory, you’re likely to close 7% over budget on labor."

**Desired outcomes:**

1. Minimize the time it takes to detect that an event or department is trending over budget — when reviewing spend partway through a month with many concurrent or overlapping events
2. Maximize the visibility into a forecasted month-end financial position based on mid-month signals — when unposted vouchers, labor actuals, and open Event Work have not yet been finalized
3. Minimize the likelihood of a revenue shortfall between an event’s budget and its actual performance going unnoticed until month-end close — when individual event budgets don’t automatically roll up into an aggregate view
4. Maximize the speed of alerting the responsible department head to a developing variance — when there is still enough time in the month to take corrective action
5. Minimize the effort required to determine which events are driving an emerging budget variance — when a department’s aggregate numbers look off but the specific cause isn’t yet clear
6. Maximize the accuracy of the monthly close forecast communicated to senior leadership — when preparing department heads and executives for an upcoming financial reporting cycle
7. Minimize the manual data entry required to populate a revenue forecast report — when forecast and budget figures must be manually typed into a report tab rather than auto-populating from actuals
8. Minimize the technical expertise required to produce an ad hoc financial report requested by a city or government stakeholder — when fulfilling the request currently requires custom database querying rather than a built-in reporting tool
9. Maximize the accuracy of venue financial data manually transcribed into a corporate reporting spreadsheet — when a parent management company requires manual spreadsheet submission for consolidated reporting
10. Minimize the effort required to reconcile a partner’s commission report against invoicing and revenue data — when commission reporting is generated in a separate partner-owned system with no integration into the event management system
11. Minimize the effort required to export clean, usable general ledger data for downstream reporting or reconciliation — when exports currently require manual spreadsheet rework due to data issues

#### 07 · Modify — Resolve disputes & reallocate

*Verbs: Update · Adjust · Maintain*

Investigate and resolve contested costs, correct GL (General Ledger) coding errors, and reallocate budget between line items or departments as circumstances change.

**Product documentation opportunity:** The AI (Artificial Intelligence) learns commonly miscoded line items and auto-suggests GL corrections pre-close.

**Desired outcomes:**

1. Minimize the time it takes to resolve a contested or disputed contractor cost — when a vendor’s invoiced amount doesn’t match the originally contracted rate
2. Minimize the effort required to identify and correct a GL miscoding before period close — when a line item has been posted to the wrong cost center or account
3. Maximize the confidence in a proposed budget reallocation between line items or departments — when moving funds requires understanding the downstream impact on margin
4. Minimize the likelihood of the same GL coding error recurring across multiple events — when a department consistently miscodes the same type of expense
5. Minimize the effort required to document the reason and approval for a budget change — when a change must be traceable for audit or government reporting purposes
6. Minimize the effort required to correct or update actuals on an invoice after it has posted to the external ERP (Enterprise Resource Planning) system or GL — when integration constraints with an external general ledger system prevent updating actuals post-invoice
7. Minimize the effort required to route a discretionary-fund or special-discount allocation through a multi-executive approval chain — when the approval chain of VPs, finance, and executive leadership currently requires a printed document to be physically signed and hand-carried

#### 08 · Conclude — Reconcile & close the books

*Verbs: Store · Finish · Close*

Verify service orders and Event Work were entered correctly, reconcile the GL (General Ledger), generate and route the invoice through multi-step approval, chase any outstanding contractor invoices, and share the final balance with the customer — closing the financial record for the event. — The financial lifecycle of an event routinely extends weeks or months past the event itself while contractor invoices remain outstanding.

**Research opportunity:** Predict invoice timing and auto-match line items to Event Work via NLP (Natural Language Processing) — Finance reviews exceptions only, not every invoice.

**Product documentation opportunity:** A consolidated P&L (profit and loss) dashboard across ERP (Enterprise Resource Planning), payroll, ticketing, and contractor systems, with natural-language query on top ("Why did F&B (Food & Beverage) margin drop in March?"); AI (Artificial Intelligence)-generated plain-language variance digests pushed to department heads automatically after each event closes.

**Desired outcomes:**

1. Minimize the time it takes to verify that all service orders and Event Work were entered correctly before starting reconciliation — when beginning post-event closeout for a multi-department event
2. Minimize the likelihood of an event remaining unreconciled because a contractor invoice hasn’t arrived — when third-party vendors routinely submit invoices weeks or months after an event closes
3. Maximize the speed of generating and routing a customer invoice through its full approval chain — when an invoice must be reviewed by the event manager and approved by the executive director before it reaches the customer
4. Minimize the effort required to assemble a consolidated profit-and-loss view for a single event — when P&L data currently must be pulled from separate ERP, payroll, ticketing, and contractor systems and combined by hand
5. Maximize the accuracy of the final reconciled balance shared with the customer — when outstanding charges, credits, or contractor costs are still being confirmed at close
6. Minimize the likelihood of an unexpected cost surfacing months after an event is considered closed — when a large number of third parties were involved and their invoices arrive on inconsistent timelines
7. Minimize the time it takes to produce a department-level or venue-level monthly P&L — when department heads and executives expect regular, on-time financial reporting
8. Maximize the completeness of the economic impact and stakeholder financial report for a closed event — when reporting the venue’s value to a city CFO (Chief Financial Officer), board, or other government stakeholder
9. Minimize the duplicative effort required to re-enter or recreate financial and invoice data in a separate municipally-mandated finance system — when city or municipal IT policy prohibits direct system integration
10. Minimize the effort required to re-key invoice data into an external accounting system to generate the final, official customer invoice — when the accounting system of record for final invoicing is separate from the event management system
11. Maximize the consolidation of exhibitor-service and show-level charges into a single customer invoice — when exhibitor and show billing currently must be tracked and invoiced separately, requiring manual bulk-number reconciliation

### Synthesize Event Intelligence — Venue Director ("The Orchestrator")

**Product area:** Momentus Events · **Primary object:** Event Intelligence  
**Functional job:** Oversee the full event lifecycle — from booking through execution — to deliver consistently exceptional experiences and sustainable business outcomes

**JTBD statement** — When a new event enters the pipeline, I want to synthesize Event Intelligence — one connected story pulled from sales, planning, operations, and finance — instead of assembling it manually across four departments, so I can make faster, more confident decisions — and ensure every team is aligned, with handoffs tracked and performance visible across the full lifecycle.

#### 01 · Define — Set the strategy

*Verbs: Plan · Select · Determine*

Set the strategic criteria for which events to pursue and how the venue prioritizes its pipeline across sales, planning, and operations

**Research opportunity:** Configurable event type templates and governance rules that encode best practices into the platform — ensuring every team follows a consistent process without requiring a manual playbook. Cross-departmental calendar visibility from the strategy layer would surface conflicts and resource constraints before events are committed, rather than surfacing them at execution.

**Desired outcomes:**

1. Maximize the clarity of event-type prioritization criteria communicated to the sales team — when setting quarterly targets and defining which event categories the venue will actively pursue
2. Minimize the likelihood of the team pursuing events that conflict with the venue's revenue strategy or capacity thresholds — when establishing priorities at the start of a new period
3. Maximize the accuracy of the annual revenue forecast based on pipeline targets and historical performance — when setting goals for the upcoming period across all three departments
4. Minimize the time it takes to communicate a strategic shift in event priorities to the full team — when responding to a market change or executive directive that affects which events the venue should focus on
5. Maximize the alignment between individual team targets and the venue's overall PACE and utilization goals — when cascading strategic priorities to sales, planning, and operations leads at period start
6. Minimize the likelihood of resource overcommitment caused by failing to establish capacity thresholds during strategy setting — when planning for a high-volume season where all three departments will be running events simultaneously
7. Maximize the speed of establishing performance benchmarks for each event type and client segment — when setting expectations for the team before the pipeline opens for a new booking cycle
8. Minimize the risk of strategic drift caused by ad hoc booking decisions made without reference to defined priorities — when managing a large team where individual managers have discretion over which leads to pursue
9. Maximize the confidence that event-type prioritization and capacity decisions reflect proven industry practices — when the venue has no access to comparative benchmarking data from peer convention centers

#### 02 · Locate — Assess the pipeline

*Verbs: Gather · Access · Retrieve*

Review the current pipeline, capacity, and resource availability to understand the venue's full booking position across all departments

**Research opportunity:** A pipeline health view aggregating bookings, plans in progress, and operations status across all active events — giving venue directors a real-time read on the business without requiring manual assembly from department-level reports. Cross-vertical calendar context showing which dates are sold, in planning, or at risk would replace the fragmented picture that currently requires multiple conversations to assemble.

**Desired outcomes:**

1. Minimize the time it takes to get an accurate view of the current pipeline state across all stages and departments — when conducting a daily or weekly leadership review
2. Minimize the likelihood of discovering capacity conflicts or double-bookings after they have already propagated to planning and operations — when reviewing the calendar during a period of high concurrent demand
3. Maximize the accuracy of real-time calendar and space utilization data visible to leadership — when assessing the venue's current position against its annual revenue and utilization targets
4. Maximize the speed of identifying revenue gaps against period targets before they become unrecoverable — when reviewing mid-period pipeline performance during a monthly leadership check-in
5. Minimize the effort required to assess combined pipeline health across all three departments in a single view — when preparing for a stakeholder review that requires an integrated picture of sales, planning, and operations status
6. Maximize the clarity of which events are at risk of cancellation or displacement in the current pipeline — when reviewing pipeline health to determine whether contingency action is required before period close
7. Minimize the likelihood of resource allocation errors caused by incomplete visibility across simultaneous events — when multiple high-complexity events are running in the same period with overlapping staff and space requirements
8. Maximize the accuracy of the capacity and availability picture presented to stakeholders during business reviews — when reporting to ownership or executive leadership on the venue's forward-looking event load
9. Maximize the clarity of event and space status across every venue in a multi-venue portfolio — when leadership oversees a stadium, convention center, and performing arts venue that each maintain separate operational views

#### 03 · Prepare — Align departments

*Verbs: Set Up · Organize · Examine*

Ensure all departments are aligned, resourced, and ready before an event advances to the confirmed stage — Integrating cost data from adjacent systems into a native in-system P&L (profit and loss) would give leadership profitability visibility before and during events, eliminating manual aggregation and enabling faster, better-informed confirmation decisions.

**Research opportunity:** A pre-event alignment view consolidating pending approvals, resource conflicts, and department readiness gaps across all functions of an upcoming event — replacing the email-thread and meeting-based coordination that currently precedes complex events. Surfacing risk flags — security notes, operational constraints, unconfirmed vendor commitments — at the department alignment stage would move risk management upstream, before it becomes a day-of problem.

**Desired outcomes:**

1. Minimize the time it takes to identify cross-departmental resource gaps before an event is confirmed — when reviewing a high-value prospect that involves significant F&B (Food & Beverage), AV (Audio/Visual), and staffing commitments
2. Minimize the likelihood of a confirmed event revealing planning or operations constraints that should have been surfaced during the sales stage — when advancing a complex multi-function event through the pipeline without a pre-confirmation cross-team check
3. Maximize the completeness of pre-confirmation checks across sales, planning, and operations for high-value events — when authorizing a flagship event that requires coordinated readiness from all three departments
4. Maximize the speed of resolving cross-functional blockers that risk delaying an event's progression to confirmed status — when a high-priority booking is ready to confirm but a planning or operations dependency has not been cleared
5. Minimize the effort required to coordinate department heads when preparing for a high-complexity event — when aligning sales, planning, and operations leads around a single event that spans multiple spaces and service categories
6. Maximize the alignment between the sales proposal and the operational capacity available to deliver it — when reviewing an offer that was built without a formal check on planning and operations readiness
7. Minimize the likelihood of a budget or pricing approval delay holding up an event that is operationally ready to proceed — when awaiting finance sign-off on a non-standard rate while the client expects a decision
8. Maximize the accuracy of cost and resource estimates used as inputs to the pre-confirmation sign-off — when authorizing an event whose scope was negotiated informally and has not yet been fully validated against operational constraints

#### 04 · Confirm — Authorize the event

*Verbs: Validate · Prioritize · Decide*

Authorize events that meet strategic, financial, and operational criteria, and communicate those decisions across all teams

**Desired outcomes:**

1. Maximize the speed of escalating prioritization decisions for events that require leadership approval — when a high-value booking is ready to confirm but exceeds the sales manager's authorization threshold
2. Minimize the time it takes to communicate a confirmed event to all downstream teams simultaneously — when a booking has just been authorized and planning and operations need to begin preparation immediately
3. Maximize the confidence in displacement decisions made when confirming one event over a competing hold — when choosing between two bookings of similar value where accepting one requires releasing the other
4. Minimize the likelihood of confirming an event that creates unresolvable downstream capacity conflicts — when authorizing a booking during a period when multiple high-complexity events are already in the pipeline
5. Maximize the accuracy of the financial commitment captured at the point of confirmation — when authorizing a booking whose contracted terms include variable pricing, commissions, or performance-based adjustments
6. Minimize the effort required to obtain the required approvals for non-standard contract terms — when a booking includes a pricing exception or service inclusion that falls outside standard authorization parameters
7. Maximize the clarity of the decision rationale communicated to teams when an event is confirmed or declined — when a hold is released or a booking is declined and the affected team or client needs an explanation
8. Minimize the likelihood of a confirmation decision creating unintended revenue shortfalls elsewhere in the pipeline — when authorizing a booking that consumes space or staff capacity currently relied on by another confirmed event

#### 05 · Execute — Oversee event execution

*Verbs: Perform · Transact · Administer*

Maintain real-time visibility over all in-progress events and ensure every team has what they need to execute without escalation

**Research opportunity:** A concurrent event oversight view — surfacing the status of all events running simultaneously, with drill-down to individual Event Work progress and crew assignments — would give venue directors operational visibility without requiring radio calls or physical walkthroughs. An incident-to-event feedback loop connecting risk records to the event record would ensure that operational incidents during execution are captured against the event, not isolated in a separate system.

**Desired outcomes:**

1. Minimize the time it takes to identify operational issues that require leadership escalation during a live event — when multiple events are running simultaneously and the operations team is managing a real-time incident
2. Minimize the likelihood of a guest-facing problem going unresolved due to a communication breakdown between departments — when sales has promised a service that planning did not include in the BEO and operations has no instruction to deliver it
3. Maximize the real-time visibility of all in-progress event activity across sales, planning, and operations — when overseeing a high-profile event day that spans multiple spaces and service categories
4. Maximize the speed of escalation resolution for critical incidents that surface during event execution — when an operational failure has occurred on the event floor and requires an immediate decision from leadership
5. Minimize the effort required to verify that all departments are on-task and on-schedule during a high-profile event — when managing a complex event where sales, planning, and operations are each running concurrent workstreams
6. Maximize the clarity of the event-day status picture available to leadership without requiring manual check-ins with each team — when overseeing multiple simultaneous events where personal oversight of each is not possible
7. Minimize the likelihood of an execution failure caused by a last-minute instruction gap between planning and operations — when a late change to the BEO was approved but the update was not distributed to the operations team before the event started
8. Maximize the confidence that the client's contracted experience is being delivered as planned — when hosting a high-value or strategically important client whose satisfaction has direct implications for future revenue

#### 06 · Monitor — Track performance

*Verbs: Verify · Track · Check*

Track revenue performance, capacity utilization, and team effectiveness across all active events and the full pipeline — A single consolidated performance view would eliminate the need to pull from multiple sources and reformat for every audience. Adding diagnostic, predictive, and prescriptive analytics on top of existing data, paired with self-serve visual dashboards, would transform Momentus from a system of record into a genuine decision-support platform.

**Research opportunity:** Out-of-the-box reports for financial performance, space utilization, and team efficiency — removing the SQL skill requirement and the 40+ hours of manual Excel work that directors currently invest to close out each period. Tracking internal events alongside revenue events in the same reporting layer would give campus and corporate venue directors the complete picture of platform usage and operational load.

**Product documentation opportunity:** Venue-level filtering in Change Tracking for a consolidated cross-site view of all activity — giving venue directors oversight across multi-venue operations without manually selecting individual spaces. A complete audit log covering all critical event field changes and user configuration modifications — including auth type and UI theme changes — would enable directors to investigate access incidents, maintain governance accountability, and identify who changed what and when. Extending the Operations Change Log to a full year would support strategic oversight of early-stage planning decisions for events booked far in advance.

**Desired outcomes:**

1. Minimize the time it takes to identify negative trends in PACE performance before they become period-end problems — when conducting a mid-period review of sales pipeline, planning throughput, and operations completion rates
2. Maximize the clarity of real-time revenue variance against target across all active bookings — when preparing for a weekly leadership review that requires an up-to-date picture of period performance
3. Minimize the effort required to produce an accurate and current performance summary for ownership or executive stakeholders — when a board review or investor meeting requires a venue performance report with less than 48 hours notice
4. Maximize the speed of identifying which team or function is creating a performance bottleneck — when pipeline velocity has slowed and it is unclear whether the issue is in sales conversion, planning throughput, or operations capacity
5. Minimize the likelihood of missing a revenue risk signal because it is buried in siloed departmental reports — when each team maintains its own tracking system and there is no integrated view of combined performance
6. Maximize the accuracy of forward-looking revenue projections based on current pipeline and conversion data — when projecting end-of-period performance for a leadership review where budget decisions depend on the forecast
7. Minimize the effort required to reconcile actual utilization against budgeted capacity on a rolling basis — when tracking space and staff utilization across a high-volume season where multiple events overlap in the same period
8. Maximize the clarity of each department's contribution to venue-wide revenue and operational performance — when conducting a cross-functional performance review to inform staffing, investment, and strategy decisions
9. Maximize the accuracy of the economic impact figure reported to city and board stakeholders — when the calculation depends on manually aggregated data from sales, hotel partners, and third-party calculators that produce inconsistent results
10. Maximize the completeness of sustainability data captured across departments and vendor partners — when compiling a sustainability report for city, board, or customer stakeholders and the underlying data lives in disconnected vendor reports and manual estimates
11. Minimize the effort required to reconcile event data between the event management system and connected CRM (Customer Relationship Management) or financial systems — when sales, finance, and bureau partners each maintain a separate record of the same event and totals must match before reporting
12. Maximize the completeness of the audit trail identifying who changed which event details and when — when investigating a discrepancy in cost, space assignment, or contract terms after multiple team members have edited the same event record
13. Maximize the visibility into how far actual delivery has diverged from what sales originally estimated and planning later refined — when sales estimated one scope, planning turned it into specifics, and operations is now delivering something that differs from both

#### 07 · Modify — Direct adjustments

*Verbs: Update · Adjust · Maintain*

Authorize and direct changes to in-progress events, ensuring every affected team is updated and the impact is tracked

**Research opportunity:** A change management workflow that standardizes how modifications are directed, tracked, and acknowledged across departments — replacing the ad-hoc email and messaging chain that currently makes it unclear whether a change directive has reached every affected team. Embedded approval routing for changes that cross department boundaries would give directors control over what gets amended without requiring them to be in the communication chain for every update.

**Desired outcomes:**

1. Minimize the time it takes to authorize and communicate a material change to an in-progress event — when a client requests a modification that affects contracted terms and requires leadership sign-off before the team can proceed
2. Minimize the likelihood of a change decision causing downstream confusion or incomplete updates across departments — when a modification is approved by leadership but distributed unevenly to sales, planning, and operations
3. Maximize the speed of determining whether a requested change is viable given current capacity constraints — when a client requests a space or service addition that may conflict with another confirmed event in the same period
4. Maximize the clarity of change impact visible to all affected teams at the moment of authorization — when approving an amendment that affects contracted rates, space assignments, and operational staffing simultaneously
5. Minimize the effort required to assess the revenue impact of a modification to a contracted event — when a change to the booking's space, headcount, or service level affects both the contracted minimum and the operational cost
6. Minimize the likelihood of a contract amendment creating an untracked financial exposure — when a change is approved verbally and the formal amendment process is not initiated before the modified services are delivered
7. Maximize the accuracy of change documentation captured in the event record for audit and reporting purposes — when processing a modification that will affect commission calculations, financial reconciliation, or client billing
8. Minimize the disruption caused by a last-minute event modification to the client experience and operational execution — when a significant change is approved close to the event date and the operations team has limited time to adjust
9. Minimize the effort required to learn that a relevant event detail has changed — when departments must manually check reports or emails rather than receiving an automatic notification of status changes like deposits, confirmations, or event detail edits

#### 08 · Conclude — Review outcomes

*Verbs: Store · Finish · Close*

Close all event records, review performance outcomes, and apply learnings to improve the venue's operations going forward — Closing the feedback loop between post-event actuals and future planning cycles would allow execution data to inform smarter preparation over time, turning every completed event into a learning asset for the next.

**Research opportunity:** Automated post-event performance summaries — capturing revenue actuals, execution quality, and variance from plan — would replace the manual close-out process and enable directors to run retrospective analysis without exporting raw data. End-to-end financial integration with institutional systems would eliminate the data gap between event completion and financial reconciliation.

**Desired outcomes:**

1. Maximize the accuracy of post-event revenue actuals captured across all departments before the record is archived — when closing out a high-value event where sales commissions, planning costs, and operations actuals all feed into the final P&L (profit and loss)
2. Minimize the time it takes to produce a complete post-event performance summary for stakeholder review — when a leadership debrief is scheduled within 48 hours of the event and a full cross-departmental summary is expected
3. Maximize the completeness of client satisfaction data captured at event close — when concluding a relationship with a high-value client whose repeat business depends on how the post-event debrief is handled
4. Minimize the likelihood of an incomplete or inaccurate post-event record creating errors in commission, reporting, or forecasting — when closing out a complex event where multiple amendments were processed and the final contracted figures differ from the original booking
5. Maximize the clarity of performance patterns visible across the event portfolio at period close — when conducting an end-of-period review to identify which event types, client segments, and team workflows produced the best outcomes
6. Minimize the effort required to identify which events contributed most and least to the period's revenue target — when preparing a post-period analysis for ownership or executive leadership that requires performance ranking across all completed events
7. Maximize the speed of extracting actionable learnings from completed events to improve the team's approach going forward — when closing out a period in which several events surfaced recurring process failures or client dissatisfaction patterns
8. Minimize the likelihood of a repeat event launching without incorporating improvements identified at the previous event's close — when a recurring client event is re-entering the pipeline and the post-event record from the prior year has not been reviewed
9. Maximize the completeness of all booking, planning, operations, and risk documentation consolidated automatically into a single event record — when a liability or legal inquiry arises months after the event and every relevant document needs to be found in one place without manually searching across departments
10. Maximize the degree to which the gap between estimated, planned, and actual delivery on a closed event informs how the next similar event is estimated and sold — when a recurring or comparable event is entering the pipeline and historical delivery data could sharpen the next estimate

## Curated Opportunity Actions (reference data)

_This data (`OPPS_ACTIONS` in index.html) maps each persona/stage to short, curated opportunity statements, each linked to one of the desired outcomes above by index. As of the last regeneration, this data is defined in the code but is **not currently rendered anywhere in the live UI** (the "opportunities summary" panel that displayed it was removed — see git history for `index.html`). Kept here for reference in case the feature is revived; skip this section when answering questions about what a user currently sees on the site._

### sharon

- **define / gap:** Automate lead qualification with engagement scoring — _targets:_ Minimize the time to identify deal-breakers early — budget misalignment, incompatible event types, technical impossibilities

- **define / research:** Build native lead intake with auto-deduplication — _targets:_ Minimize the time it takes to evaluate an inbound lead's revenue potential and space fit

- **locate / research:** Add global calendar view with real-time booking gaps — _targets:_ Increase the accuracy of space allocation to avoid conflicts between concurrent events

- **prepare / gap:** Add standardized proposal templates with guided pricing — _targets:_ Minimize the risk of underpricing due to overlooked requirements or hidden costs

- **prepare / research:** Enable client-ready proposal output directly in-platform — _targets:_ Maximize the quality of the visual presentation and completeness of a proposal sent to a prospective client

- **confirm / gap:** Add AI-generated close recommendations to pipeline view — _targets:_ Minimize revenue lost from holds that expire without converting to contracts

- **execute / research:** Eliminate duplicate data entry from lead to confirmed booking — _targets:_ Minimize the time from proposal acceptance to fully executed contract

- **monitor / gap:** Add real-time revenue quota tracking in-platform — _targets:_ Minimize the variance between forecasted and actual closed revenue

- **monitor / research:** Replace Excel PACE exports with live in-platform analytics — _targets:_ Increase the accuracy of monthly and quarterly booking forecasts by event type

- **monitor / productdoc:** Expose time-to-status booking metrics in list views — _targets:_ Increase visibility into pipeline health by date range, event segment, and space requirements

- **modify / research:** Enable mass-update for high-volume space configurations — _targets:_ Minimize the time it takes to apply a requested change to an active Event Opportunity

- **conclude / research:** Enable online payment collection at contract close — _targets:_ Minimize the time it takes to formally close and hand off a confirmed Event Opportunity to the event planning team

### emilie

- **define / research:** Add structured sales-to-planning handoff intake template — _targets:_ Maximize the completeness of the initial function plan

- **locate / research:** Automate handoff readiness checklist and task generation — _targets:_ Minimize the time it takes to access the full Event Opportunity record and associated client history

- **prepare / gap:** Add standardized BEO templates with guided detailing workflow — _targets:_ Minimize the time it takes to complete all function-level detail fields for a single Event Plan

- **prepare / research:** Add bulk BEO entry tools and inline field validation — _targets:_ Minimize the likelihood of an incomplete or internally inconsistent BEO

- **confirm / gap:** Automate simple client approvals with smart routing — _targets:_ Minimize the time it takes to obtain client approval on the finalized BEO (Banquet Event Order)

- **execute / research:** Automate BEO distribution with department-specific formatting — _targets:_ Minimize the number of manual steps required to complete BEO distribution to all departments

- **monitor / research:** Add planning milestone alerts and centralize client communication — _targets:_ Minimize the likelihood of an approaching distribution deadline going unnoticed

- **monitor / productdoc:** Add audit log for all Event Plan field changes — _targets:_ Minimize the effort required to track client-initiated changes across multiple active events simultaneously

- **modify / gap:** Auto-route and triage incoming change orders by impact — _targets:_ Minimize the time it takes to update an Event Plan record and re-distribute the revised BEO to all impacted departments

- **modify / research:** Enable one-edit propagation across all affected functions — _targets:_ Minimize the likelihood of a department acting on a superseded version of the BEO

- **modify / productdoc:** Track exhibitor booth assignments in Change Tracking — _targets:_ Minimize the likelihood of a post-modification version conflict causing two departments to execute against different versions of the same function plan

- **conclude / research:** Enable in-platform invoicing and payment at event close — _targets:_ Minimize the effort required to compile and submit all post-event information required by the finance team for invoice finalization

### owen

- **define / gap:** Move crew assignment notifications in-platform — _targets:_ Maximize the accuracy of the pre-event staffing plan based on the scope of Event Work

- **define / research:** Add operations intake view with staffing and resource visibility — _targets:_ Minimize the time it takes to identify all setup, execution, and teardown Event Work required for an Event Plan

- **locate / research:** Add crew-filtered Event Work view with real-time inventory — _targets:_ Minimize the effort required to locate all space, equipment, and resource specifications needed to act on received Event Work

- **locate / productdoc:** Make room diagrams accessible directly from MWO — _targets:_ Minimize the effort required to access event-specific floor plans, room diagrams, and equipment specs alongside the BEO

- **prepare / research:** Add field-ready Event Work format for on-site use — _targets:_ Minimize the likelihood of a crew member receiving an Event Work assignment without sufficient detail to complete it independently

- **prepare / productdoc:** Allow contract staff MWO access without full platform licenses — _targets:_ Minimize the time it takes to assign all Event Works to the appropriate crew members and departments

- **execute / gap:** Replace radio and paper coordination with real-time updates — _targets:_ Maximize the speed of communicating a real-time Event Work update or priority change to crew in the field

- **execute / research:** Enable login-free mobile MWO access for field crews — _targets:_ Minimize the time it takes to begin executing setup Event Work

- **execute / productdoc:** Add on-site signature and photo capture per Event Work item — _targets:_ Minimize the effort required to confirm Event Work completion in real time without interrupting crew during active execution

- **monitor / research:** Add real-time event manifest with auto-push crew notifications — _targets:_ Minimize the time it takes to verify the completion status of all Event Works

- **monitor / productdoc:** Add venue-level Change Tracking filter for multi-space oversight — _targets:_ Minimize the effort required to maintain visibility into crew location and Event Work progress

- **modify / research:** Push change updates instantly to field crew Event Work — _targets:_ Maximize the speed of communicating a change request from the event planner to the affected crew member

- **conclude / gap:** Enable mobile-first actuals capture at Event Work completion — _targets:_ Minimize the time it takes to log completion of all Event Works and document operational actuals

- **conclude / research:** Log and invoice actuals directly from mobile MWO — _targets:_ Maximize the accuracy of resource, labor, and material actuals captured

- **conclude / productdoc:** Surface cost breakdowns and bill-to context in MWO actuals — _targets:_ Maximize the accuracy of resource, labor, and material actuals captured

### dana

### me

- **define / research:** Add configurable governance templates with cross-team calendar visibility — _targets:_ Minimize the likelihood of resource overcommitment caused by failing to establish capacity thresholds during strategy setting

- **locate / research:** Build unified pipeline health view across all departments — _targets:_ Minimize the time it takes to get an accurate view of the current pipeline state across all stages and departments

- **prepare / gap:** Add native in-system P&L with integrated cost data — _targets:_ Maximize the accuracy of cost and resource estimates used as inputs to the pre-confirmation sign-off

- **prepare / research:** Add pre-event alignment view with risk flags and readiness gaps — _targets:_ Minimize the likelihood of a confirmed event revealing planning or operations constraints that should have been surfaced during the sales stage

- **execute / research:** Add concurrent event oversight view with live crew and incident status — _targets:_ Maximize the real-time visibility of all in-progress event activity across sales, planning, and operations

- **monitor / gap:** Build consolidated performance view with predictive analytics — _targets:_ Minimize the likelihood of missing a revenue risk signal because it is buried in siloed departmental reports

- **monitor / research:** Add out-of-the-box financial and operational performance reports — _targets:_ Minimize the effort required to produce an accurate and current performance summary for ownership or executive stakeholders

- **monitor / productdoc:** Add venue-level Change Tracking filter with full audit log — _targets:_ Minimize the effort required to reconcile actual utilization against budgeted capacity on a rolling basis

- **modify / research:** Standardize cross-department change management workflow — _targets:_ Minimize the time it takes to authorize and communicate a material change to an in-progress event

- **conclude / gap:** Close post-event feedback loop to improve future planning — _targets:_ Minimize the likelihood of a repeat event launching without incorporating improvements identified at the previous event's close

- **conclude / research:** Automate post-event summaries with financial system integration — _targets:_ Minimize the time it takes to produce a complete post-event performance summary for stakeholder review
