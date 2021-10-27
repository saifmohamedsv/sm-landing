import {
  About,
  Features,
  Hero,
  HowItWork,
  Navbar,
  Statistics,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWork />
      <Statistics />
    </div>
  );
}

export default App;
