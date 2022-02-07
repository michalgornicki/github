const State = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Class component state: </div>
        <div className="text-color">
          {`class Clock extends React.Component {`} <br />
          {`constructor(props) {`} <br />
          {`super(props);`}{" "} <br />
          {`this.state = {date: new Date()};`}{" "} <br />
          {`}`}{" "}
        </div>{" "}
        (Constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. )
      </div>
    </div>
  );
};

export default State;
