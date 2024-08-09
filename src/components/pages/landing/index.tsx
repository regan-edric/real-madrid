import Navbar from "../../molecules/Navbar";
import ScoreBoard from "../../molecules/ScoreBoard";
import Jumbotron from "./components/Jumbotron";

export default function LandingPage() {
  return (
    <>
      <div className="h-screen bg-white">
        <Navbar />
        <ScoreBoard />
        <Jumbotron />
      </div>
    </>
  );
}
