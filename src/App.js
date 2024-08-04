import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import HealthPackage from './components/HealthPackage/HealthPackage';
import FullBodyPackage from './components/FullBodyPackage/FullBodyPackage';
import NEUExpressHealthPackage from './components/NEUExpressHealthPackage/NEUExpressHealthPackage';
import ComprehensiveHealthTests from './components/ComprehensiveHealthTests/ComprehensiveHealthTests';
import RequestACall from './components/RequestACall/RequestACall';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
    <Header />
    <Intro />
    <HealthPackage />
    {/* <FullBodyPackage />
    <NEUExpressHealthPackage />
    <ComprehensiveHealthTests />
    <RequestACall />
    <HowItWorks />
    <Footer /> */}
    </div>
  );
}

export default App;
