import spinImage from '../assets/RONOVA-SPIN.gif';

function Services() {
  return (
    <main className="page inner-page cute-page">
      <div className="center-heading">
        <p className="eyebrow">ronova appreciation board</p>
        <h1>Reasons to <em>adore</em> her</h1>
        <p className="lead">A small collection of very serious observations from the post-7.1 Ronova brainrot era.</p>
      </div>
      <section className="cute-grid">
        <article className="cute-card blush">
          <span className="number">01</span><h2>“HMPH!”</h2><p>Two syllables, one raised chin, and suddenly the fandom had a new favorite reaction image.</p>
        </article>
        <article className="cute-card lavender">
          <span className="number">02</span><h2>The twirl</h2><p>Every movement is just a little more dramatic than necessary. That is the charm.</p>
        </article>
        <article className="cute-card image-card">
          <img src={spinImage} alt="Animated Ronova performing her dramatic twirl" />
          <div><span className="number">03</span><h2>Peak softness</h2></div>
        </article>
        <article className="cute-card butter">
          <span className="number">04</span><h2>The contrast</h2><p>Powerful cosmic energy wrapped in the cutest expression. Players never stood a chance.</p>
        </article>
      </section>
      <p className="fan-note">Fan-made page. “HMPH!” and the twirling jokes refer to community reaction and memes, not an official character profile.</p>
    </main>
  );
}

export default Services;