import '../styles/LandingPage.css';

function LandingPage(props) {
  return (
    <div id="landing-page">
      <div id="tagline-div">
        <h2>{props.tagline}</h2>
        <h3>{props.subtag}</h3>
      </div>
    </div>
  );
}

export default LandingPage;
