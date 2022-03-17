import './App.css';
import apple from './components/img/Apple.png'
import samsung from './components/img/samsung.png'
import xiaomi from './components/img/Xiaomi.png'
import CenteredCard from './components/CenteredCard'


function App() {

  return (

    <div className="App">
      <div className="App-header">

        <CenteredCard> <p> <img src= {apple} ></img> </p> </CenteredCard>
        <CenteredCard> <p> <img src= {samsung} className='samsung' ></img> </p> </CenteredCard>
        <CenteredCard> <p> <img src= {xiaomi} ></img> </p> </CenteredCard>

      </div>
    </div>
  );
}

export default App;
