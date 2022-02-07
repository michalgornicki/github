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
        (constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. super(props) function pass properties to component.)
      </div>
    </div>
  );
};

export default State;
