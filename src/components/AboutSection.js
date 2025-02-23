import "../styles/AboutSection.css"

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-image">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="About TMS"
          />
        </div>
        <div className="about-content">
          <h2>About TMS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-image">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="Mission"
          />
        </div>
        <div className="about-content">
          <h2>Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-image">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="Vision"
          />
        </div>
        <div className="about-content">
          <h2>Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

