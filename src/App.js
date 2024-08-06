import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import HealthPackage from './components/HealthPackage/HealthPackage';
import FullBodyPackage from './components/FullBodyPackage/FullBodyPackage';
import PremiumPlus from './components/PremiumPlus/PremiumPlus';
import RequestACall from './components/RequestACall/RequestACall';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
    <Header />
    <Intro />
    <HealthPackage />
    <FullBodyPackage />
    <PremiumPlus />
    <RequestACall />
    <HowItWorks />
    <Footer />
    </div>
  );
}

export default App;
