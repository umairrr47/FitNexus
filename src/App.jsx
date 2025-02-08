import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import Trainers from "./components/Trainers";
import PricingPlans from "./components/PricingPlans";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";


const App = () => (
  <>
    <Navbar />
    <section id="home">
      <Banner />
    </section>
    <StatsSection />
    <WhyChooseUs />
    <section id="trainers">
      <Trainers />
    </section>
    <section id="pricing">
      <PricingPlans />
    </section>
    <Reviews />
    <section id="contact">
      <Footer />
    </section>
  </>
);

export default App;
