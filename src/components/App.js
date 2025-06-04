import logo from '../logo512.png';
import '../css/App.css';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Movie.ca!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a simple React application to showcase movie listings.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quae eos enim ut porro, nobis, sequi culpa aliquid commodi dolor voluptatem? Consectetur, deserunt odit aliquam cum porro quasi ad?
        </p>
           
      </header>
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
      <footer>
        <p>&copy; 2023 Movie.ca</p>
      </footer>
    </div>
  );
}

export default App;
