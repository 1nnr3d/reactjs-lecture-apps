import Cities from '../../../cities.json';

import { useWeather } from '../../../context/Weather';

function Header() {
  const { setCity } = useWeather();

  return (
    <div>
      <select className="form-select" aria-label="Default select example" onChange={(e) => setCity(e.target.value)}>
        {
          /* City options looping */
          Cities.map(city => {
            return <option key={city.id} value={city.name}>{city.name}</option>
          })
        }
      </select>
    </div>
  )
}

export default Header
