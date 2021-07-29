import logo from './logo.svg';
import './App.css';
import Background from './components/Background';
import Header from "./components/Header";
import TableTop from './components/TableTop';
import Container from './components/Container';
import AllBtns from "./components/Buttons/AllBtns";

///
///Create Figma layout
//Build out logic of BlackJack and breakdown components
///


function App() {
  return (
    <div className="App">
      
        <Background>
        <TableTop>
        <AllBtns />
        </TableTop>
        <AllBtns />
        </Background>
     
    </div>
  );
}

export default App;
