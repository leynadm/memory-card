import logo from './logo.svg';
import './App.css';
import PageHeader from './components/page-header';
import CardsHolder from './components/cards-holder';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <CardsHolder/>
    </div>
  );
}

export default App;
