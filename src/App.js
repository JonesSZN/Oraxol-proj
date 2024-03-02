import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonial } from "./Testimonial";
import { Team } from "./Team";
import { Blog } from "./Blog";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonial />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
