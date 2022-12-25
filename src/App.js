import "./App.css";
import LandingPage from "./components/LandingPage";
import React, { Fragment } from "react";
import Badges from "./components/Badges";
import Services from "./components/Services";
import Hiw from "./components/Hiw";
import AboutUs from "./components/AboutUs";
import Jorney from "./components/Jorney";
import Subs from "./components/footer/Subs";
import Footer from "./components/footer/Footer";
import Industries from "./components/Industries";

function App() {
  return (
    <Fragment >
      <LandingPage className="bc" />
      <div className="tagLine">
        <p> VISION </p>
        <h1>We’ ve always been obsessed with making work better for people</h1>
        <p>
          Source brings your together, in one central place.They’ re easy to
          find and safely synced across all your devices— so you can access them
          anytime, anywhere.No more wasting the day tracking down work.
        </p>
      </div>
      <div className="manufacture">
        <h1 className="service"> Services </h1>
      </div>
      <Services />
      <div className="dic">
        <h1>
          There 's no dictionary yet that simplifies the meaning of a truly
          sustainable propduct for the end - consumer
        </h1>
      </div>
      <div className="hiw">
        <h1> How it works </h1> <Hiw />
      </div>
      <div className="manufacture">
        <h1>
          “Manufacturers are finally deciding not to drain easy - sourcing
          countries and opting for meaningful alternative routes instead.”
        </h1>
      </div>
      <Badges />
      <Industries/>
      <AboutUs />
      <Jorney />
      <Subs />
      <Footer />
     
    </Fragment>
  );
}

export default App;
