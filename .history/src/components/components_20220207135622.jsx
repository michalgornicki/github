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
          {`return`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`}`}{" "}
          {`const App = () => {`} <br />
          <Welcome />
          {`}`}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Components;
