import './App.css';
import Activities from './components/Activities/Activities';
import Discussion from './components/Discussion/Discussion';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Activities></Activities>
      <Discussion></Discussion>
    </div>
  );
}

export default App;
