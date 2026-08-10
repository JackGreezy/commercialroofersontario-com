import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(project, "public");
const address = "3281 E Guasti Rd, Suite 700, Ontario, CA 91761";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const homepage = `<main aria-atomic="true" aria-live="polite" id="main" class="ontario-home">
<section class="ontario-hero">
  <div class="ontario-hero-copy">
    <span class="ontario-kicker">Commercial roofing for the Inland Empire</span>
    <h1>Commercial Roof Help for Ontario Facilities</h1>
    <p>Active leak, aging flat roof, or a replacement decision coming up? Start with the problem in front of you. Get clear inspection findings and a practical next step for the building.</p>
    <div class="ontario-actions">
      <a class="ontario-button" href="/contact?request=emergency">Report a Roof Problem</a>
      <a class="ontario-button ghost" href="/contact?request=inspection">Schedule a Flat Roof Inspection</a>
    </div>
  </div>
  <div class="ontario-hero-panel" role="img" aria-label="Commercial distribution facility roof in Ontario, California">
    <div class="ontario-hero-panel-inner">
      <strong>Keep the building moving.</strong>
      <p>Roof work should protect inventory, tenant operations, loading schedules, equipment, and the people below. Tell us what cannot be interrupted.</p>
    </div>
  </div>
</section>

<nav class="ontario-needs" aria-label="Common commercial roofing needs">
  <a href="/contact?request=emergency"><strong>Active Leak</strong><span>Get the issue documented and start the repair conversation.</span></a>
  <a href="/contact?request=inspection"><strong>Inspection &amp; Report</strong><span>See membrane, flashing, drainage, moisture, and system condition.</span></a>
  <a href="/contact?request=service"><strong>Service Agreement</strong><span>Put inspections, maintenance, and roof records on a schedule.</span></a>
  <a href="/contact?request=coating"><strong>Coating Review</strong><span>Find out whether restoration is technically realistic.</span></a>
  <a href="/contact?request=replacement"><strong>Roof Replacement</strong><span>Plan system, scope, phasing, budget, and building protection.</span></a>
</nav>

<section class="ontario-story">
  <div class="ontario-story-image"><img src="/ours/services/commercial-roof-leak-repair-commercial-roofers-ontario-ca.webp" alt="Commercial flat roof leak inspection in Ontario" loading="lazy"></div>
  <div class="ontario-story-copy">
    <span class="ontario-kicker">When water is getting in</span>
    <h2>First, stop the problem.</h2>
    <p>A leak request should not disappear into a general estimate queue. Share the building, leak area, interior impact, roof access, and timing. That gives the field team a better starting point.</p>
    <p class="ontario-proof">Emergency repair can solve today’s opening. The follow-up inspection shows whether the leak is isolated or part of a larger roof condition.</p>
    <div class="ontario-inline-actions"><a class="ontario-button" href="/contact?request=emergency">Request Roof Help</a><a class="ontario-button dark" href="/services/commercial-roof-leak-repair">Commercial Roof Repair</a></div>
  </div>
</section>

<section class="ontario-story reverse">
  <div class="ontario-story-image"><img src="/ours/services/commercial-roof-inspection-commercial-roofers-ontario-ca.webp" alt="Commercial flat roof replacement inspection in Ontario" loading="lazy"></div>
  <div class="ontario-story-copy">
    <span class="ontario-kicker">Before a large roof decision</span>
    <h2>Know what failed before you replace it.</h2>
    <p>A commercial flat roof replacement inspection should answer more than whether the roof is old. It should document where water can enter, how the roof drains, what condition the membrane and details are in, and where moisture or deck concerns may change the scope.</p>
    <p>Use the findings to compare targeted repair, restoration, recover, phased replacement, and tear-off without treating every roof problem like the same project.</p>
    <div class="ontario-inline-actions"><a class="ontario-button" href="/contact?request=inspection">Request an Inspection &amp; Report</a><a class="ontario-button dark" href="/services/commercial-roof-inspection">What the Inspection Covers</a></div>
  </div>
</section>

<section class="ontario-story">
  <div class="ontario-story-image"><img src="/ours/services/preventive-maintenance-programs-commercial-roofers-ontario-ca.webp" alt="Commercial roof service agreement inspection in Ontario" loading="lazy"></div>
  <div class="ontario-story-copy">
    <span class="ontario-kicker">For roofs you plan to keep</span>
    <h2>Get the roof off the emergency list.</h2>
    <p>A service agreement gives the property team a repeatable way to inspect trouble spots, document changes, address maintenance items, and keep roof records together.</p>
    <p>It is especially useful for portfolios, warehouses, tenant-heavy properties, and facilities where an unplanned leak can disrupt production or damage stored goods.</p>
    <div class="ontario-inline-actions"><a class="ontario-button" href="/contact?request=service">Ask About a Service Agreement</a><a class="ontario-button dark" href="/services/preventive-maintenance-programs">Preventive Maintenance</a></div>
  </div>
</section>

<section class="ontario-decision">
  <div class="ontario-section-head">
    <span class="ontario-kicker">Choose the scope the roof earns</span>
    <h2>Repair it, restore it, or replace it?</h2>
    <p>The right answer depends on moisture, deck condition, drainage, attachment, existing layers, roof details, remaining service life, budget, and how long the property will be held.</p>
  </div>
  <div class="ontario-decision-grid">
    <article class="ontario-decision-card"><h3>Repair</h3><p>Best when the roof is generally serviceable and the failure can be isolated to seams, penetrations, flashings, drains, edges, or storm damage.</p><a href="/services/commercial-roof-leak-repair">Explore commercial roof repair</a></article>
    <article class="ontario-decision-card"><h3>Coat or Recover</h3><p>Worth reviewing when the roof is dry enough, stable enough, and compatible with the proposed restoration or recover system.</p><a href="/services/silicone-roof-coatings">Explore roof coatings</a></article>
    <article class="ontario-decision-card"><h3>Replace</h3><p>Often the stronger path when trapped moisture, failed insulation, deck concerns, repeated repairs, or existing layers limit shorter-term options.</p><a href="/services/commercial-roof-tear-off-replacement">Explore roof replacement</a></article>
  </div>
</section>

<section class="ontario-market">
  <div class="ontario-section-head">
    <span class="ontario-kicker">Ontario and Inland Empire properties</span>
    <h2>Roof planning built around operations.</h2>
    <p>The roof scope has to fit what happens inside and around the building. Access, deliveries, inventory, temperature control, tenant traffic, and equipment all matter.</p>
  </div>
  <div class="ontario-market-grid">
    <article class="ontario-market-card"><h3>Warehouses &amp; Distribution</h3><p>Protect racking, goods, docks, traffic lanes, and receiving schedules while roof work moves across large footprints.</p></article>
    <article class="ontario-market-card"><h3>Manufacturing</h3><p>Plan around production, exhaust, penetrations, process equipment, shutdown windows, and interior protection.</p></article>
    <article class="ontario-market-card"><h3>Cold Storage &amp; Food</h3><p>Review vapor, insulation, temperature, hygiene, drainage, and operational risk before the assembly is disturbed.</p></article>
    <article class="ontario-market-card"><h3>Commercial Portfolios</h3><p>Use consistent inspection records and priorities across multiple buildings without forcing every property into the same scope.</p></article>
  </div>
</section>

<section class="ontario-process">
  <div class="ontario-section-head">
    <span class="ontario-kicker">From roof issue to capital plan</span>
    <h2>A clearer next step for the building.</h2>
  </div>
  <div class="ontario-process-grid">
    <article class="ontario-process-step"><h3>Tell us what is happening</h3><p>Share the leak, roof concern, property type, access, interior impact, and timing.</p></article>
    <article class="ontario-process-step"><h3>Inspect the roof</h3><p>Review visible system condition, details, drainage, moisture indicators, and failure points.</p></article>
    <article class="ontario-process-step"><h3>Compare realistic paths</h3><p>Place repair, maintenance, coating, recover, and replacement against the same roof facts.</p></article>
    <article class="ontario-process-step"><h3>Plan the work</h3><p>Align scope, building protection, phasing, access, schedule, and decision documentation.</p></article>
  </div>
  <div class="ontario-actions" style="justify-content:center;margin-top:42px"><a class="ontario-button" href="/contact?request=help">Talk Through the Roof</a></div>
</section>

<section class="ontario-faq">
  <div class="ontario-section-head"><span class="ontario-kicker">Commercial roofing questions</span><h2>Start with the question holding up the decision.</h2></div>
  <div class="ontario-faq-list">
    <details><summary>Can a commercial roof leak be repaired without replacing the roof?</summary><p>Often, yes. A field review should determine whether the opening is isolated and whether the surrounding membrane, insulation, details, and deck remain serviceable. Repeated leaks or wet insulation may point to a larger scope.</p></details>
    <details><summary>What should a flat roof replacement inspection include?</summary><p>It should document the existing roof system, visible membrane condition, flashings, penetrations, edges, drainage, patch history, moisture indicators, access, and conditions that could affect repair, recover, coating, or tear-off.</p></details>
    <details><summary>Is a roof coating always cheaper than replacement?</summary><p>A coating can be a strong restoration option only when the existing roof is a suitable candidate. Adhesion, moisture, substrate condition, drainage, preparation, details, and manufacturer requirements all affect the decision.</p></details>
    <details><summary>What does a commercial roof service agreement cover?</summary><p>Coverage varies, but a useful program can include scheduled inspections, documentation, maintenance items, leak-response procedures, photo records, and planning notes for future repair or capital work.</p></details>
    <details><summary>Can roof replacement be phased around operations?</summary><p>Many projects can be sequenced by roof area, budget cycle, tenant, production zone, or operational window. The phasing plan still has to account for drainage, tie-ins, interior protection, access, and warranty requirements.</p></details>
  </div>
</section>

<section class="ontario-lead" id="roof-help">
  <div class="ontario-form-copy">
    <span class="ontario-kicker">Bring us the roof problem</span>
    <h2>Request commercial roof help.</h2>
    <p>Use the short form for an active leak, inspection and report, service agreement, coating review, or replacement plan. Include the property and timing so the request can be routed correctly.</p>
    <p>Email follow-up is also available at <a href="mailto:repairs@commercialroofersontario.com">repairs@commercialroofersontario.com</a>.</p>
  </div>
  <div class="ontario-contact-card">
    <form action="/api/submit" method="post" data-contact-form>
      <input type="hidden" name="page" value="/">
      <input type="text" name="_company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden">
      <label>First name<input name="firstName" type="text" autocomplete="given-name" required></label>
      <label>Last name<input name="lastName" type="text" autocomplete="family-name" required></label>
      <label>Email<input name="emailAddress" type="email" autocomplete="email" required></label>
      <label>Phone<input name="phoneNumber" type="tel" autocomplete="tel" required></label>
      <label>What do you need?<select name="serviceType" required><option value="">Choose one</option><option>Emergency roof leak or storm damage</option><option>Commercial flat roof inspection and report</option><option>Commercial roof repair</option><option>Preventive maintenance service agreement</option><option>Roof coating or restoration review</option><option>Commercial roof replacement planning</option><option>Not sure yet</option></select></label>
      <label>Timing<select name="timeline" required><option value="">Choose one</option><option>Emergency - active leak</option><option>Within 30 days</option><option>1-3 months</option><option>3-6 months</option><option>Planning or budgeting</option></select></label>
      <label class="full">Property address or service area<input name="propertyAddress" type="text" autocomplete="street-address"></label>
      <label class="full">What is happening on the roof?<textarea name="projectDetails" required></textarea></label>
      <button type="submit">Request Commercial Roof Help</button>
    </form>
  </div>
</section>
</main>`;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : entry.name.endsWith(".html") ? [full] : [];
  });
}

function injectBefore(html, needle, content) {
  return html.includes(content.trim()) ? html : html.replace(needle, `${content}${needle}`);
}

let changed = 0;
const changedFiles = [];
for (const file of walk(publicDir)) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;

  html = html
    .replace(/<a[^>]+href=["']tel:5555556133["'][^>]*>[^<]*<\/a>/gi, '<a href="/contact?request=help">Request Roof Help</a>')
    .replace(/,\s*"telephone":\s*"555-555-6133"/g, "")
    .replace(/555-555-6133/g, "")
    .replace(/&mdash;|&#8212;|—/g, ",")
    .replace(/&ndash;|&#8211;|–/g, " to ");

  html = injectBefore(html, "</head>", '<link rel="stylesheet" href="/ontario-leads.css">\n');
  html = injectBefore(html, "</body>", '<script src="/ontario-leads.js" defer></script>\n');

  if (!html.includes("ontario-header-help")) {
    html = html.replace("</header>", '<a class="ontario-header-help" href="/contact?request=emergency">Roof Help</a></header>');
  }
  if (!html.includes("ontario-sticky-help")) {
    html = html.replace("</body>", '<a class="ontario-sticky-help" href="/contact?request=emergency">Roof Help</a></body>');
  }

  html = html.replace(/<div class="rr-footer-map" data-rr-footer-map=""><\/div>/g, `<div class="rr-footer-map" data-rr-footer-map=""><iframe src="${mapSrc}" title="Commercial Roofers of Ontario map at ${address}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`);

  if (path.basename(file) === "home.html" || path.basename(file) === "index.html") {
    html = html.replace(/<main\b[\s\S]*?<\/main>/, homepage);
    html = html
      .replace(/<title>[\s\S]*?<\/title>/, "<title>Commercial Roofing Ontario, CA | Repair, Inspection &amp; Replacement</title>")
      .replace(/<meta[^>]+name=["']description["'][^>]*>/i, '<meta name="description" content="Need commercial roof help in Ontario, CA? Request emergency repair, a flat roof inspection and report, a service agreement, coating review, or roof replacement plan.">');
  }

  if (path.basename(file) === "contact.html") {
    html = html
      .replace(/Request a Roof Assessment/g, "Request Commercial Roof Help")
      .replace("Tell us about the roof, issue, and schedule", "Tell us what is happening on the roof and when help is needed")
      .replace(/<textarea name="projectDetails"([^>]*)>/, (_, attrs) => `<textarea name="projectDetails"${attrs.replace(/\srequired(?:="")?/g, "")} required>`)
      .replace(/Commercial Roofers of Ontario\s*, Contact/g, "Commercial Roofers of Ontario, Contact");
  }

  if (html.includes("555-555-6133") || html.includes("tel:5555556133")) throw new Error(`Fake phone remains in ${file}`);
  if (html !== before) {
    fs.writeFileSync(file, html);
    changed += 1;
    changedFiles.push(path.relative(publicDir, file));
  }
}

console.log(`Ontario conversion funnel rebuilt across ${changed} pages${changed ? `: ${changedFiles.join(", ")}` : "."}`);
