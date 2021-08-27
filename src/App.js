import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function WhoIsHotter(){
  const [hottest, setHottest] = useState('');
  const [shak, setShak] = useState('');
  const [arlo, setArlo] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`https://whosehotterapi.herokuapp.com/apartments`);
    console.log(res.data[0]);
    setHottest(res.data[0].hottest);
    setShak(res.data[0].shak);
    setArlo(res.data[0].arlo);
  };

  return (
    <div className="hot">
      <div>
        <Header hottest={hottest} />
      </div>
      <div>
        <HotTable shak={shak} arlo={arlo}/>
      </div>
    </div>
  );
}

function Header({hottest}) {
  return (
    <article>
      <h1>It is whose apartment is hotter?! dot com!</h1>
      <p>
        {hottest}
      </p>
    </article>
  );
}

function HotTable({shak,arlo}) {
  return (
    <table>
      <tr>
        <th>Shak temp:</th>
        <th>Arlo temp:</th>
      </tr>
      <tr>
        <td>{shak}</td>
        <td>{arlo}</td>
      </tr>
    </table>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default WhoIsHotter;
