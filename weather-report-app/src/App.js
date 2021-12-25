import './App.css';

/* Components */
import WeatherReport from './components/Weather'

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <WeatherReport />
    </div>
  );
}

export default App;
