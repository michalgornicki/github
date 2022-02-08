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
          {`color: "red",`} <br />
          {`brand: "Toyota",`} <br />
          {`model: "Auris"`} <br />
          {`render() {`}{" "} <br />
          {`return (`}{" "} <br />
          {`<div>`}{" "} <br />
          {`<h1>{Witaj, świecie!}</h1>`} <br />
          {`</div>`}{" "}
        </div>{" "}
        (Class components in React have built-in state object. It is not available in functional components. constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. super(props) function pass properties to this React component.)
      </div>
    </div>
  );
};

export default State;