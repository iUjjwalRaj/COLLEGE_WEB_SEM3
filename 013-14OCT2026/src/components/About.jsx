import { Link } from 'react-router';
import spinImage from '../assets/RONOVA-SPIN.gif';
import reactionImage from '../assets/ronova-terry-hmph.gif';

function About() {
  return (
    <main className="page inner-page">
      <section className="story-layout">
        <div>
          <p className="eyebrow">version 7.1 lore update · spoilers</p>
          <h1>Who is <em>Ronova?</em></h1>
          <p className="lead">
            Ronova is the Ruler of Death, one of the Four Shades who existed
            long before the Archons. In Version 7.1's Snezhnaya Archon Quest,
            she appears as the Arbiter of the Heavenly Principles — a figure
            whose authority reaches across life, death, and Teyvat's oldest
            secrets.
          </p>
          <p>
            The latest story leaves her defeated and stripped of that divine
            authority, but does not confirm her death. That deliberately open
            ending, together with her parting act and the post-quest weekly
            boss encounter, has given players plenty to debate — and plenty
            of reasons to keep replaying her most dramatic moments.
          </p>
          <Link className="button button-primary" to="/service">Why she's adorable →</Link>
        </div>
        <div className="quote-card">
          <span className="quote-mark">“</span>
          <p>Not gone. Not forgiven. Definitely still iconic.</p>
          <span className="quote-credit">— the post-7.1 Ronova fan club</span>
        </div>
      </section>
      <section className="community-gallery">
        <div className="gallery-copy">
          <p className="eyebrow">the replay loop</p>
          <h2>One twirl. One HMPH.<br /><em>Infinite replays.</em></h2>
          <p>These are the moments the community keeps turning into reaction posts, edits, and “just one more time” clips after the Snezhnaya quest.</p>
        </div>
        <figure className="gallery-card gallery-spin">
          <img src={spinImage} alt="Animated Ronova twirling dramatically" />
          <figcaption>the twirl that launched a thousand edits</figcaption>
        </figure>
        <figure className="gallery-card gallery-reaction">
          <img src={reactionImage} alt="Animated Ronova making a HMPH reaction" />
          <figcaption>certified HMPH material</figcaption>
        </figure>
      </section>
      <section className="timeline">
        <div><span>01</span><h2>Ruler of Death</h2><p>One of the Four Shades, with authority over the definition of death itself.</p></div>
        <div><span>02</span><h2>the aftermath</h2><p>Defeated and powerless after the Version 7.1 confrontation — but not confirmed dead.</p></div>
        <div><span>03</span><h2>still iconic</h2><p>Her HMPH, twirl, and repeatable boss encounter keep the community talking.</p></div>
      </section>
      <p className="fan-note">Information updated for Version 7.1's “A Rekviem for the Underworld.” Fan reactions and meme language are kept separate from the story summary.</p>
    </main>
  );
}

export default About;