const State = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Class component state: </div>
        <div className="text-color">
          {`class Clock extends React.Component {`} <br />
          {`constructor(props) {`} <br />
          {`super(props);`}{" "}
          {`this.state = {date: new Date()};`}{" "}
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default State;
