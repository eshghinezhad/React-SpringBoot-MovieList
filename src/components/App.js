// import logo from '../logo512.png';
// import topLogo from '../topLogo.png';
import '../css/App.css';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Featured Movies</h1>
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
          <li>Movie 3</li>
        </ul>
        <p>
          Check out our latest releases and enjoy your movie experience!
        </p>
      </main>
      <footer/>
    </div>
  );
}

export default App;
