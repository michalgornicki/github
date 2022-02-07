const Components = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Functional component: </div>
        <div className="text-color">
          {`function Welcome() {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Functional component (arrow function): </div>
        <div className="text-color">
          {`const Welcome = () => {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Class component: </div>
        <div className="text-color">
          {`class Welcome extends React.Component {`} <br />
          {`render() {`} <br />
          {`return <h1>Hello!</h1>;`} <br/>
          {`}}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Inserting components into parent component: </div>
        <div className="text-color">
        {`const Welcome = () => {`} <br />
          {`return (`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`)}`}{" "} <br/><br/>
          {`const Items = () => {`} <br />
          {`return (`} <br />
          {`<div>items</div>;`} <br/>
          {`)}`}{" "} <br/><br/>
          {`const App = () => {`} <br />
          {`return (`} <br />
          {`<Welcome />`}<br />
          {`<Items />`} <br />
          {`)}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Passing props (properties) from parent to component: </div>
        <div className="text-color">
        {`<Car color={this.state.color} /> // parent component`}  <br /><br />
        {`const Car = (props) => {`} <br />
        {`return `} <br />
        {`<div>This car color is: {props.color}.</div>;}  // child component`} <br />
        </div>{" "} <br />
        (We can pass props from parent component to )
      </div>
    </div>
  );
};

export default Components;
