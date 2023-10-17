import logo from './logo.svg';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Products from './Components/Products';
import WatchBox from './Components/WatchBox';
import Content from './Components/Content';
import Banner from './Components/Banner';
import Subscription from './Components/Subscription';
import Vr from './Components/Vr';
import Heritage from './Components/Heritage';
import Footer from './Components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App" >  
      <Header/>
      <Carousel/>
      <Products/>
      <WatchBox/>
      <Content/>
      <Banner/>
      <Subscription/>
      <Vr/>
      <Heritage/>
      <Footer/>
    </div>
  );
}

export default App;
