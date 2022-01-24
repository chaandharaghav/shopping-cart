import LandingPage from './LandingPage';
import Navbar from './Navbar';

function Home(props) {
  return (
    <main>
      <Navbar brandName="shoppers" />
      <LandingPage
        tagline="Be Fashionable. Stand out"
        subtag="Expect more from the clothes. We always deliver the best"
      />
    </main>
  );
}

export default Home;
