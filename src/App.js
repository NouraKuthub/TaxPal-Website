import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/BusinessTask/BusinessTask';
import Section3 from './components/GetStart/GetStart';
import Faq from './components/FAQ/Faq';
import Pricing from './components/Pricing/Pricing';
import Connection from './components/Connections/Connection';

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Connection />
      <Pricing />
      <Faq />
    </div>
  );
}

export default App;
