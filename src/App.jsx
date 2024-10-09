import "./App.css";
import Acordion from "./components/Acordion";
import Faqs from "./components/Faqs.jsx";
function App() {
  const faqs = Faqs;
  return (
    <>
      <div className="content pt-28">
        <Acordion data={faqs} />
      </div>
    </>
  );
}

export default App;
