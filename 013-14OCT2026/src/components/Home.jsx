import { Link } from 'react-router';
import ronovaImage from '../assets/RONOVA-CUTE-1.JPG';
import hmphImage from '../assets/RONOVA-CUTE-HMPH.jpeg';

function Home() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">a tiny corner of Teyvat</p>
          <h1>Soft heart.<br /><em>Big destiny.</em></h1>
          <p className="hero-text">
            Meet Ronova, the elegant little menace of Version 7.1. After the
            Archon Quest, players could not stop talking about her icy “HMPH!”
            energy, her theatrical twirls, and the soft face hiding all that
            cosmic drama.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about">Meet Ronova <span>→</span></Link>
            <Link className="text-link" to="/service">see the cute side ✿</Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✧</span>
          <div className="image-frame">
            <img src={ronovaImage} alt="Ronova with a cute, bashful expression" />
            <span className="image-caption">ronova's soft era ♡</span>
          </div>
        </div>
      </section>
      <section className="feature-row">
        <article className="feature-card">
          <span className="feature-icon">☼</span>
          <div><h2>golden gaze</h2><p>Eyes brighter than a little sunset over Celestia.</p></div>
        </article>
        <article className="feature-card">
          <span className="feature-icon">♡</span>
          <div><h2>secretly soft</h2><p>Ancient power, tiny pout, enormous charm.</p></div>
        </article>
        <article className="feature-card">
          <span className="feature-icon">✧</span>
          <div><h2>cosmic cutie</h2><p>A little mysterious, always impossible to forget.</p></div>
        </article>
      </section>
      <section className="meme-strip">
        <img src={hmphImage} alt="Ronova giving a dramatic HMPH expression" />
        <div>
          <p className="eyebrow">the community's current mood</p>
          <h2>She said “HMPH!” and the whole fandom folded.</h2>
          <p>Not official dialogue analysis — just a lovingly dramatic summary of the meme energy players brought to her scenes.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;