import './App.scss';
import GistList from './components/GistList';
import SearchForm from './components/SearchForm';

function App() {
  return (

    <div className="App">
      <header className="app-header">
        <SearchForm/>
      </header>
      <section>
        <GistList/>
      </section>
    </div>
  );
}

export default App;
