import './App.scss';
import GistList from './components/GistList';
import SearchForm from './components/SearchForm';

function App() {
  return (

    <div className="app">
      <header className="app-header">
        <SearchForm/>
      </header>
      <section className="content">
        <GistList/>
      </section>
    </div>
  );
}

export default App;
