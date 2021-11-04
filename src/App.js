import {
  About,
  AppScreenShot,
  Features,
  Hero,
  HowItWork,
  Navbar,
  Sports,
  Statistics,
  Footer,
  Testimonials,
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
      <AppScreenShot />
      <Sports />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
