import "./App.css";
import BannerText from "./components/common/BannerText";
import BestOfUs from "./components/BestOfUs/BestOfUs";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Layouts from "./components/Layouts/Layouts";
import PrimaryFooter from "./components/PrimaryFooter/PrimaryFooter";
import SecondaryFooter from "./components/SecondaryFooter/SecondaryFooter";
import StartToday from "./components/StartToday/StartToday";
import Uploads from "./components/Uploads/Uploads";

function App() {
  return (
    <>
      <main className="mx-auto max-w-screen-2xl">
        <Hero />
        <BannerText
          title={"Create Your Own Genuine Web Matserpiece"}
          isBackgroud
        />
        <Features />
        <BestOfUs />
        <Uploads />
        <StartToday />
        <Layouts />
      </main>
      <footer>
        <PrimaryFooter />
        <SecondaryFooter />
      </footer>
    </>
  );
}

export default App;
