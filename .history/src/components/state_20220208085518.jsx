const State = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Class component state: </div>
        <div className="text-color">
          {`class Car extends React.Component {`} <br />
          {`constructor(props) {`} <br />
          {`super(props);`}{" "} <br />
          {`this.state = {`} <br />
          {`brand: "Toyota",`} <br />
          {`model: "Auris"`} <br />
          {`color: "red",`} <br />
          {`}}`} <br /> <br />
          {`render() {`}{" "} <br />
          {`return (`}{" "} <br />
          {`<div>`}{" "} <br />
          {`<h1>{this.state.brand}</h1>`} <br />
          {`<h1>{this.state.model}</h1>`} <br />
          {`<h1>{this.state.color}</h1>`} <br />
          {`</div>`}{" "}
        </div>{" "}
        (Class components in React have built-in state object. It is not available in functional components. constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. super(props) function pass properties to this React component.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Changing state: </div>
        <div className="text-color">
          {`this.setState({color: 'blue'});`} <br />

        </div>{" "}
        (With this method you can change state of component. Don't try to change state with "this.state=", because it will generate problems with code.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Changing state: </div>
        <div className="text-color">
          {`this.setState({color: 'blue'});`} <br />

        </div>{" "}
        (With this method you can change state of component. Don't try to change state with "this.state=", because it will generate problems with code.)
      </div>
    </div>
  );
};

export default State;
