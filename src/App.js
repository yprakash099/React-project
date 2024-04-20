import logo from './logo.svg';
import './App.css';

import './Carousel.css';
import LatestProducts from './LatestProducts';

function App() {
  return (
    <>
    <div  className="App">
  <div className="carousel">
    <img width="100%" height="100%" src="./images/Applewebsite.jpg" />
    <img width="100%" height="100%" src="./images/Homepage.jpg" />
    <img width="100%" height="100%" src="./images/1.jpg" />
    <img width="100%" height="100%" src="./images/2.jpg" />
    <img width="100%" height="100%" src="./images/3.jpg" />
  </div>
  <LatestProducts/>
  <img src="./images/5.jpg" width="1000" height="900"/>
  <img src="./images/7.jpg" width="1500" height="700"/>
</div>

    </>
  );
}

export default App;