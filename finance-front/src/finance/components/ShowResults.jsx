function ShowResults(props) {
  return (
      <div>
          <div>
            {props.today}
          </div>
          <div>
            {props.thisWeek}
          </div>
          <div>
            {props.thisMonth}
          </div>
      </div>
      );
}

export default ShowResults;