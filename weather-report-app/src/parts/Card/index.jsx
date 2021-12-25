function DayCard({ report, currentDay }) {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          {report.day}
        </div>
        <div className={`card-body ${currentDay === report.day ? "bg-secondary bg-opacity-10" : "bg-transparent"}`} style={{ "width": "10rem" }}>
          <div className="row">
            <div className="col-12">
              <img src={report.icon} width="58px" className="img-circle mx-auto" alt="weather-icon" />
            </div>
            <div className="text-center fs-5">
              {report.min}° {report.max}°
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayCard
