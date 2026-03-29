import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="nav">
          <div className="brand">MADVENTUREFIN.</div>
          <a href="#contact" className="nav-cta">Request a briefing</a>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Systemic impact infrastructure</p>
          <h1>Most impact never gets implemented. We change that.</h1>
          <p className="hero-text">
            Madventurefin enables real-world impact projects to move from idea
            to execution — by fixing how systems identify, support, and deliver
            impact at scale.
          </p>
          <div className="hero-actions">
            <a href="#mission" className="btn btn-primary">Explore how it works</a>
            <a href="#contact" className="btn btn-secondary">Request a briefing</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-dark" id="mission">
          <div className="container two-col">
            <div>
              <p className="section-kicker">The gap is not effort</p>
              <h2>It is execution.</h2>
            </div>
            <div>
              <p>
                Across the world, millions of people are working on real
                solutions to real problems. At the same time, billions in
                funding are allocated towards impact.
              </p>
              <p>
                Yet most projects never reach implementation.
              </p>
              <p>
                This is not due to a lack of intent, talent, or capital. It is
                because systems are not designed to consistently identify,
                support, and execute real impact at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <p className="section-kicker">Built for those driving impact at scale</p>
            <h2>Who we serve</h2>
            <div className="card-grid">
              <article className="card">
                <h3>Donors &amp; Foundations</h3>
                <p>
                  Enable funding to translate into real, measurable
                  implementation — not just reporting.
                </p>
              </article>
              <article className="card">
                <h3>Development Institutions</h3>
                <p>
                  Strengthen how impact is identified, supported, and delivered
                  across regions and programmes.
                </p>
              </article>
              <article className="card">
                <h3>Governments &amp; City Leaders</h3>
                <p>
                  Gain clearer visibility into system constraints and unlock
                  more effective participation and delivery.
                </p>
              </article>
              <article className="card">
                <h3>Ecosystem Partners</h3>
                <p>
                  Work within a structured environment that connects insight,
                  funding, and execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">A system designed for implementation</p>
            <h2>What Madventurefin does</h2>
            <div className="process-grid">
              <article className="process-card">
                <span>01</span>
                <h3>Identify real impact projects</h3>
                <p>
                  Surface initiatives that address real, lived challenges within
                  communities.
                </p>
              </article>
              <article className="process-card">
                <span>02</span>
                <h3>Understand system constraints</h3>
                <p>
                  Use Fufitci diagnostic intelligence to identify where systems
                  limit participation and outcomes.
                </p>
              </article>
              <article className="process-card">
                <span>03</span>
                <h3>Enable structured funding access</h3>
                <p>
                  Create clear, transparent pathways for capital to reach viable
                  impact initiatives.
                </p>
              </article>
              <article className="process-card">
                <span>04</span>
                <h3>Support implementation</h3>
                <p>
                  Ensure projects move forward through structured execution and
                  milestone-based progress.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container two-col">
            <div>
              <p className="section-kicker">Fufitci</p>
              <h2>The intelligence layer behind better decisions</h2>
            </div>
            <div>
              <p>
                Most systems are designed to measure or report on impact.
                Madventurefin is designed to enable it.
              </p>
              <p>
                Fufitci helps institutions understand where structural
                constraints limit inclusion, participation, and delivery.
              </p>
              <p>
                By making system conditions visible, it becomes possible to
                allocate attention, funding, and action more effectively.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">Why this matters</p>
            <h2>From visibility to execution</h2>
            <p className="section-intro">
              By aligning system-level understanding with real-world projects and
              structured delivery, Madventurefin creates the conditions for
              impact to be implemented — not just described.
            </p>

            <div className="impact-grid">
              <article className="impact-item">
                <h3>More projects reaching implementation</h3>
              </article>
              <article className="impact-item">
                <h3>Better alignment between funding and real need</h3>
              </article>
              <article className="impact-item">
                <h3>Increased participation from underrepresented innovators</h3>
              </article>
              <article className="impact-item">
                <h3>Stronger, more resilient local systems</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container contact-box">
            <div>
              <p className="section-kicker">Support the mission</p>
              <h2>Support the implementation of real impact</h2>
              <p>
                We are building the infrastructure required to enable impact at
                scale. If you are a donor, institution, or partner looking to
                improve how impact is delivered, we invite you to engage with us.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-accent" href="mailto:support@madventurefin.com">
                Request a briefing
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand">MADVENTUREFIN.</div>
            <p className="footer-text">
              Digital infrastructure for systemic impact.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:support@madventurefin.com">support@madventurefin.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
