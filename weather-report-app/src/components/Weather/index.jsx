/* Components */
import Header from './Header';
import Cards from './Cards';

import { WeatherProvider } from '../../context/Weather'

function WeatherReport() {
  return (
    <div className="card px-5 py-5" style={{ "borderRadius": "18px" }}>
      <h1 className="title text-center">Weather Report App</h1>
      <br />
      <WeatherProvider>
        <div className="card-header bg-transparent border-0">
          <Header />
        </div>
        <br />
        <div className="card-body">
          <Cards />
        </div>
      </WeatherProvider>
    </div>
  )
}

export default WeatherReport