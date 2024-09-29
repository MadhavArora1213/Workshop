import "./App.css";
import Layout1 from "./components/Layout1";
import { Layout2 } from "./components/Layout2";
import { Navbar1 } from "./components/Navbar1";
import Layout3 from "./components/Layout3";
import Heading from "./components/Heading";
import ServicesLayout from "./components/ServicesLayout";
import { ContactForm } from "./components/ContactForm";
import { AboutLayout } from "./components/AboutLayout";

function App() {
  return (
    <div className="bg-[#527385]">
      <Navbar1 />
      <Layout1 />
      <Heading title="My Skills" />
      <Layout2 />
      <Heading title="My Projects" />
      <Layout3 />
      <Heading title="Services I provide" />
      <ServicesLayout />
      <Heading title="About" />
      <AboutLayout />
      <Heading title="Contact Me" />
      <ContactForm />
    </div>
  );
}

export default App;
