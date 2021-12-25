import DayCard from '../../../parts/Card';
import { useWeather } from '../../../context/Weather'

function Cards() {
  const { cityInfo } = useWeather();
  return (
    <div className="d-flex">
      {
        /* Sorting weather days */
        cityInfo === undefined ? '' : cityInfo.map((day, index) => (
          <div className="ms-2 w-100" key={index}>
            <DayCard report={day} currentDay={cityInfo[0].day} />
          </div>
        ))
      }
    </div >
  )
}

export default Cards
