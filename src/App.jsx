import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <nav>
        <div className="wrap nav-inner">
          <div className="wordmark">MADVENTUREFIN.</div>

          <div className="nav-right">
            <div className="nav-links">
              <a href="#why">Why this matters</a>
              <a href="#fufitci">Fufitci</a>
              <a href="#who">Who we serve</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="mailto:marius@madventurefin.com" className="btn btn-solid nav-cta">
              Request a briefing
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className={`drawer-overlay${menuOpen ? " drawer-overlay--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile slide-in drawer */}
      <aside className={`drawer${menuOpen ? " drawer--open" : ""}`} aria-label="Mobile navigation">
        <div className="drawer-header">
          <div className="wordmark">MADVENTUREFIN.</div>
          <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">&#x2715;</button>
        </div>

        <nav className="drawer-nav">
          <a href="#why" onClick={closeMenu}>Why this matters</a>
          <a href="#fufitci" onClick={closeMenu}>Fufitci</a>
          <a href="#who" onClick={closeMenu}>Who we serve</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="drawer-cta">
          <a href="mailto:marius@madventurefin.com" className="btn btn-solid" onClick={closeMenu}>
            Request a briefing &#x2197;
          </a>
        </div>
      </aside>

      <section className="hero">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="wrap hero-inner">
          <div className="eyebrow">
            Inclusive Growth · System Intelligence · Real Implementation
          </div>

          <h1>
            Where cities are decided, you need <em>system intelligence.</em>
          </h1>

          <div className="hero-rule"></div>

          <p className="hero-sub">
            Most institutions make high-stakes decisions about cities with{" "}
            <strong>incomplete, fragmented information.</strong> Madventurefin
            developed the diagnostic solution that reveals how cities actually
            function — and is making it available to ecosystem partners so we
            can <strong>start measuring the things that actually matter.</strong>
          </p>

          <div className="dual-cta">
            <a href="#contact" className="cta-path cta-path-donor">
              <div className="cta-label">
                For MAD Sponsors · Donors &amp; foundations
              </div>
              <div className="cta-title">
                Fund what actually delivers inclusive growth
              </div>
              <div className="cta-desc">
                Move beyond activity reporting into real, measurable
                implementation at city scale.
              </div>
              <div className="cta-arrow">Request a briefing →</div>
            </a>

            <a href="#fufitci" className="cta-path cta-path-fufitci">
              <div className="cta-label">For institutions &amp; governments</div>
              <div className="cta-title">Run a Fufitci diagnostic</div>
              <div className="cta-desc">
                Understand the structural constraints shaping your city&apos;s
                outcomes — and join the ecosystem measuring the right things.
              </div>
              <div className="cta-arrow">Explore Fufitci →</div>
            </a>
          </div>

          <div className="stats-bar">
            <div>
              <div className="stat-num">4.7M</div>
              <div className="stat-label">
                MAD Impact Innovators across 3 cities
              </div>
            </div>
            <div>
              <div className="stat-num">10%</div>
              <div className="stat-label">
                The threshold that shifts lived reality on the ground
              </div>
            </div>
            <div>
              <div className="stat-num">100</div>
              <div className="stat-label">Cities in the diagnostic vision</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section statement-section" id="why">
        <div className="wrap statement-inner">
          <div className="statement-left reveal">
            <div className="section-kicker">The honest diagnosis</div>
            <h2>
              The failure is <em>systemic.</em> So the solution must be too.
            </h2>
          </div>

          <div className="statement-right reveal">
            <p>
              Well-resourced, well-intentioned efforts to drive{" "}
              <strong>inclusive growth and reduce inequality</strong> in cities
              consistently fall short. Not because of a lack of talent, capital,
              or commitment.
            </p>
            <p>
              Because the{" "}
              <strong>
                systems that govern impact are not designed to consistently
                identify, support, and execute it at scale.
              </strong>{" "}
              And because the wrong things are being measured — so the right
              interventions remain invisible.
            </p>
            <p>
              Madventurefin built the diagnostic infrastructure to change that.
              We developed both the solution and the diagnostic tool — and we
              are making them available to ecosystem partners to build a new
              standard for what gets measured.
            </p>

            <div className="pull-quote">
              <p>&quot;For everyone MAD enough to actually change something.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fufitci-section" id="fufitci">
        <div className="wrap">
          <div className="fufitci-provocation reveal">
            <div className="section-kicker">
              Fufitci · Future-Fit City Diagnostic
            </div>

            <div className="provocation-headline">
              A city can be celebrated as a global inclusion leader
              <br />
              and still score <em>Red</em> on economic inclusion.
              <br />
              Fufitci finds what reputation conceals.
            </div>

            <p className="provocation-sub">
              Developed by Madventurefin, Fufitci is the diagnostic intelligence
              layer that reveals how cities actually function across six
              systemic dimensions.{" "}
              <strong>
                We are now making Fufitci available to ecosystem partners and
                institutions
              </strong>{" "}
              — so that the right things get measured, and inclusive growth
              becomes implementable, not just aspirational.
            </p>
          </div>

          <div className="fufitci-framework reveal">
            <div className="framework-header">
              <div className="section-kicker">The diagnostic framework</div>
              <h3>Six dimensions. Every systemic constraint. One score.</h3>
            </div>

            <div className="clusters-grid">
              <div className="cluster-card">
                <div className="cluster-letter">Cluster A</div>
                <div className="cluster-name">
                  Governance, Power &amp; Accountability
                </div>
                <div className="cluster-desc">
                  Whether institutions are trusted, power is distributed
                  equitably, and decisions are evidence-led — or captured by
                  elites.
                </div>
              </div>

              <div className="cluster-card">
                <div className="cluster-letter">Cluster B</div>
                <div className="cluster-name">
                  Economic Structure &amp; Access
                </div>
                <div className="cluster-desc">
                  Whether people can access decent work, form enterprises, and
                  reach capital — regardless of who they are or where they
                  start.
                </div>
              </div>

              <div className="cluster-card">
                <div className="cluster-letter">Cluster C</div>
                <div className="cluster-name">
                  Social Systems &amp; Human Functioning
                </div>
                <div className="cluster-desc">
                  Whether health, education, dignity and social cohesion enable
                  full participation — or quietly exclude those who most need
                  support.
                </div>
              </div>

              <div className="cluster-card">
                <div className="cluster-letter">Cluster D</div>
                <div className="cluster-name">
                  Urban Form, Basic Access &amp; Demographics
                </div>
                <div className="cluster-desc">
                  Whether housing, services, mobility and time constraints
                  enable or constrain equitable urban participation for all
                  residents.
                </div>
              </div>

              <div className="cluster-card">
                <div className="cluster-letter">Cluster E</div>
                <div className="cluster-name">
                  Future Capability, Resilience &amp; Environmental Justice
                </div>
                <div className="cluster-desc">
                  Whether cities can innovate, adapt, absorb shocks, and
                  distribute environmental risks fairly — now and into the
                  future.
                </div>
              </div>

              <div className="cluster-card">
                <div className="cluster-letter">Cluster F</div>
                <div className="cluster-name">
                  Agency, Participation &amp; Future-Making
                </div>
                <div className="cluster-desc">
                  Whether citizens — especially grassroots innovators — can
                  meaningfully shape the decisions, systems and narratives that
                  define their city.
                </div>
              </div>
            </div>
          </div>

          <div className="fufitci-evidence reveal">
            <div className="evidence-header">
              <div className="section-kicker">
                Validation diagnostics · Real cities · Real data
              </div>
              <h3>
                The diagnostic works across radically different urban contexts.
              </h3>
              <p>
                Fufitci was validated through independent diagnostics on real
                cities using verified city-level data. The results reveal
                findings that reputation alone would never surface.
              </p>
            </div>

            <div className="cities-grid">
              <div className="city-card copenhagen">
                <div className="city-tag">
                  FFC-COPENHAGEN-2026-V10 · Validation diagnostic
                </div>
                <div className="city-name">Copenhagen</div>
                <div className="city-country">Denmark · Northern Europe</div>

                <div className="ffis-display">
                  <span className="ffis-number">5.1</span>
                  <span className="ffis-denom"> / 10</span>
                  <div className="ffis-label-row">
                    <span className="ffis-badge badge-amber">
                      Moderate Inclusion Capacity
                    </span>
                  </div>
                </div>

                <div className="city-finding">
                  <div className="city-finding-label">Key diagnostic finding</div>
                  <div className="city-finding-text">
                    Despite global rankings as a liveable, progressive city,
                    Copenhagen scores{" "}
                    <strong>Red on Economic Inclusion</strong> (3.9/10) and{" "}
                    <strong>Red on Algorithmic &amp; Bureaucratic Exclusion</strong>{" "}
                    (3.7/10). Reputation conceals significant structural gaps
                    for immigrant and low-income residents.
                  </div>
                </div>
              </div>

              <div className="city-card mogadishu">
                <div className="city-tag">
                  FFC-MOGADISHU-2026-V1 · Validation diagnostic
                </div>
                <div className="city-name">Mogadishu</div>
                <div className="city-country">Somalia · East Africa</div>

                <div className="ffis-display">
                  <span className="ffis-number">2.6</span>
                  <span className="ffis-denom"> / 10</span>
                  <div className="ffis-label-row">
                    <span className="ffis-badge badge-red">
                      Constrained Inclusion Capacity
                    </span>
                  </div>
                </div>

                <div className="city-finding">
                  <div className="city-finding-label">Key diagnostic finding</div>
                  <div className="city-finding-text">
                    Systemic fragility across all six clusters — yet{" "}
                    <strong>
                      grassroots innovators and community coping mechanisms
                    </strong>{" "}
                    represent genuine leverage points that formal institutional
                    investment consistently overlooks. MAD Impact Innovators are
                    present and unsupported.
                  </div>
                </div>
              </div>
            </div>

            <p className="evidence-footnote">
              These are independently conducted validation diagnostics using
              verified city-level data and conservative proxy methodology,
              prepared by Madventurefin Global LLC as part of the development
              and calibration of the Fufitci diagnostic system. Results are
              directional assessments, not policy prescriptions.
            </p>

            <a 
              href="https://www.fufitci.com"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-btn"
            >
              Request a diagnostic for your city ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section audiences-section" id="who">
        <div className="wrap">
          <div className="audiences-header reveal">
            <div className="section-kicker">Who we serve</div>
            <h2>Two paths. One mission. Real implementation.</h2>
          </div>

          <div className="audiences-grid">
            <div className="audience-card donor reveal">
              <div className="aud-num">
                01 · MAD Sponsors · Donors &amp; foundations
              </div>
              <h3 className="aud-title">
                Move from funding intent to measurable inclusive growth
              </h3>
              <p className="aud-body">
                You already have capital, networks, and intent. What has been
                missing is the diagnostic infrastructure that reveals where your
                capital can drive genuine inclusive growth — and the
                implementation system that translates it into outcomes.
              </p>
              <ul className="aud-items">
                <li>
                  Fund initiatives with genuine systemic potential — not just
                  familiar names
                </li>
                <li>
                  Gain visibility into where structural constraints are limiting
                  the impact of your capital
                </li>
                <li>
                  Build a portfolio that compounds across cities and reduces
                  inequality at scale
                </li>
              </ul>
              <a href="mailto:marius@madventurefin.com" className="aud-cta">
                Request a donor briefing →
              </a>
            </div>

            <div className="audience-card institution reveal">
              <div className="aud-num">
                02 · Ecosystem partners · Institutions &amp; governments
              </div>
              <h3 className="aud-title">
                Gain diagnostic intelligence. Start measuring the right things.
              </h3>
              <p className="aud-body">
                High-stakes city decisions are routinely made without
                system-level intelligence. Fufitci changes what is visible to
                you — and joining the diagnostic ecosystem means contributing to
                a new standard for how inclusive growth gets measured globally.
              </p>
              <ul className="aud-items">
                <li>
                  Understand where structural constraints are limiting
                  participation and equity outcomes
                </li>
                <li>
                  Identify MAD Impact Innovators currently invisible to formal
                  decision-making
                </li>
                <li>
                  Make policy and investment decisions backed by diagnostic
                  confidence, not assumption
                </li>
              </ul>
              <a 
                href="https://www.fufitci.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aud-cta"
              >
                Explore a Fufitci diagnostic ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section mad-section">
        <div className="wrap">
          <div className="audiences-header reveal">
            <div className="section-kicker">The MAD community</div>
            <h2>The people at the heart of the mission.</h2>
          </div>

          <div className="mad-grid">
            <div className="mad-card innovators reveal">
              <div className="mad-card-kicker">MAD Impact Innovators</div>
              <h3>Grassroots problem-solvers changing cities from the inside</h3>
              <div className="mad-stat">4.7M</div>
              <div className="mad-stat-label">
                Identified across 3 cities in current diagnostics
              </div>
              <p>
                MAD Impact Innovators are the community actors, entrepreneurs,
                and civic change-makers working within city systems — often{" "}
                <strong>invisible to formal institutions and funding structures.</strong>{" "}
                Fufitci identifies them. Madventurefin creates the infrastructure
                for them to be seen, supported, and resourced. When 10% of a
                city&apos;s population operates as genuine impact innovators,{" "}
                <strong>lived reality on the ground shifts.</strong>
              </p>
            </div>

            <div className="mad-card sponsors reveal">
              <div className="mad-card-kicker">MAD Impact Sponsors</div>
              <h3>Donors and institutions funding what actually works</h3>
              <div className="mad-stat">100</div>
              <div className="mad-stat-label">
                Cities in the Fufitci diagnostic vision
              </div>
              <p>
                MAD Impact Sponsors are the donors, foundations, and institutional
                partners who understand that{" "}
                <strong>
                  intent without infrastructure produces fragmented outcomes.
                </strong>{" "}
                They bring capital, networks, and authority — and through
                Madventurefin, they connect that to the diagnostic intelligence
                and implementation systems needed to drive{" "}
                <strong>real, equitable, scalable change.</strong> This is what
                it means to be MAD enough to actually change something.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="provocation-section">
        <div className="wrap prov-inner">
          <div className="section-kicker reveal">A unique value proposition</div>
          <div className="prov-quote reveal">
            &quot;Most systems are designed to <em>measure</em> impact.
            Madventurefin is designed to <em>enable</em> it.&quot;
          </div>
          <div className="prov-attr reveal">
            — Dr Marius Joubert · Founder &amp; CEO, Madventurefin
          </div>
          <div className="prov-divider reveal"></div>
          <p className="prov-body reveal">
            We connect three elements that are rarely aligned:{" "}
            <strong>system-level diagnostic intelligence</strong> that reveals
            what&apos;s actually constraining inclusive growth, real-world MAD
            Impact Innovators with genuine potential, and{" "}
            <strong>structured implementation pathways</strong> that make
            equitable outcomes possible — not just described.
          </p>
          <p className="prov-body reveal">
            This is not a programme. Not a fund. It is an{" "}
            <strong>enabling layer</strong> — the diagnostic and implementation
            infrastructure that has been missing from how impact gets done at
            city scale.
          </p>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="wrap">
          <div className="cta-wrap reveal">
            <div
              className="section-kicker"
              style={{ justifyContent: "center", marginBottom: "24px" }}
            >
              <span
                style={{
                  width: "24px",
                  height: "2px",
                  background: "var(--mad-purple)",
                  display: "inline-block",
                  borderRadius: "2px",
                  marginRight: "10px",
                }}
              ></span>
              Start the conversation
            </div>

            <h2>
              Ready to engage?
              <br />
              We are ready for you.
            </h2>

            <p>
              We are building the diagnostic and implementation infrastructure
              required to enable inclusive growth at scale. If you are a donor,
              institution, or potential ecosystem partner — request a briefing
              with Dr Marius Joubert.
            </p>

            <div className="cta-buttons">
              <a
                href="mailto:marius@madventurefin.com"
                className="btn btn-solid btn-large"
              >
                Request a briefing ↗
              </a>
              <a
                href="https://www.fufitci.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-large"
              >
                Explore a Fufitci diagnostic ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="wordmark" style={{ marginBottom: "12px" }}>
                MADVENTUREFIN.
              </div>
              <p className="footer-desc">
                The diagnostic and implementation infrastructure for inclusive
                growth at city scale — built for MAD Impact Sponsors, ecosystem
                partners, and the institutions MAD enough to actually change
                something.
              </p>
            </div>

            <div>
              <div className="footer-col-title">Navigate</div>
              <div className="footer-links">
                <a href="#why">Why this matters</a>
                <a href="#fufitci">Fufitci</a>
                <a href="#who">Who we serve</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Contact</div>
              <div className="footer-links">
                <a href="mailto:marius@madventurefin.com">
                  info@madventurefin.com
                </a>
                <a href="http://www.madventurefin.com">www.madventurefin.com</a>
                <a href="http://www.fufitci.com">www.fufitci.com</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Madventurefin Global LLC · For everyone MAD enough to
              actually change something.
            </span>
            <span>Madventurefin · Fufitci</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;