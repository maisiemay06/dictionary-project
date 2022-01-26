import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js'; 
import Synonyms from './Synonyms';
import Images from './Images';

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        
      </header>
      <main className="row align-items-center h-100">
        
            <SearchBar />
            
    
      
        <div className="right col-8 container">
          <div className="shelf row"></div>
          <div className="shelf row">
            <Synonyms />
          </div>
          <div className="shelf row">
            <Images />
          </div>
          <div className="shelf row"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
