import Navbar from "../../molecules/Navbar";
import NextEvent from "../../molecules/NextEvent";
import ScoreBoard from "../../molecules/ScoreBoard";
import Jumbotron from "../../molecules/Jumbotron";
import News from "../../molecules/News";
import TrackRecord from "../../molecules/TrackRecord";

export default function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
        <ScoreBoard />
        <Jumbotron />
        <NextEvent />
        <News />
        <TrackRecord />
      </div>
    </>
  );
}
