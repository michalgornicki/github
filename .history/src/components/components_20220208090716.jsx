const Components = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Functional component: </div>
        <div className="text-color">
          {`function Welcome() {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br />
          {`}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Functional component (arrow function): </div>
        <div className="text-color">
          {`const Welcome = () => {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br />
          {`}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Class component: </div>
        <div className="text-color">
          {`class Welcome extends React.Component {`} <br />
          {`render() {`} <br />
          {`return <h1>Hello!</h1>;`} <br />
          {`}}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Inserting components into parent component: </div>
        <div className="text-color">
          {`//Welcome.js`} <br />
          {`const Welcome = () => {`} <br />
          {`return (`} <br />
          {`<div>Hello!</div>;`} <br />
          {`)}`} <br />
          <br />
          {`//Items.js`} <br />
          {`const Items = () => {`} <br />
          {`return (`} <br />
          {`<div>items</div>;`} <br />
          {`)}`} <br />
          <br />
          {`//App.js`} <br />
          {`const App = () => {`} <br />
          {`return (`} <br />
          {`<Welcome />`}
          <br />
          {`<Items />`} <br />
          {`)}`}{" "}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Passing props (properties) from parent component to child component: </div>
        <div className="text-color">
          {`//App.js`} <br />
          {`<Car color={this.state.color} />`} <br />
          <br />
          {`//Car.js`} <br />
          {`const Car = (props) => {`} <br />
          {`return `} <br />
          {`<div>This car color is: {props.color}.</div>;}`} <br />
        </div>{" "}
        <br />
        (We can pass props from parent component to its child component. It could be accessed in child component by putting props as component parameter. Any state is always owned by some specific component, and any data fetched from that state can only affect components “below” them in the tree. It is called top-down data flow.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Passing props up from child component to parent component (using hooks): </div>
        <div className="text-color">
          {`//App.js`} <br />
          {`const [value, setValue] = useState("")`} <br />
          <br />
          {`const updateValue = (childData) => {`} <br />
          {`setValue(childData);`} <br />
          {`<ComponentB update={updateValue} />`} <br /> <br />
          {`//ComponentB.js`} <br />
          {`<textarea onChange={(e) => props.update(e.target.value)}></textarea>`} <br />
        </div>{" "}
        <br />
        (We can pass function to child to component which change hook state. When function is executing in children component it passes value as parameter, changing state in parent component.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">React Context for quick passing properties through tree: </div>
        <div className="text-color">
          {`//App.js`} <br />
          {`const ThemeColor = React.createContext('green');`} <br />
          <br />
          {`const App = () => {`} <br />
          {`return(`} <br />
          {`<ThemeColor.Provider value="blue">`} <br /> <br />
          {`<Navbar />`} <br />
          {`<ThemeColor.Provider>`} <br />
          {`)}`} <br /> <br />
          {`const Navbar = () => {`} <br />
          {`return(`} <br />
          {`<div>`} <br /> <br />
          {`<Button />`} <br />
          {`<div>`} <br />
          {`)}`} <br /> <br />
          {`const Button = () => {`} <br />
          {`return(`} <br />
          {`return(`} <br />
          {`<div>`} <br /> <br />
          {`<Button theme={this.context} />`} <br />
          {`<div>`} <br />
          {`)}`} <br /> <br />
        </div>{" "}
        <br />
        (We can pass function to child to component which change hook state. When function is executing in children component it passes value as parameter, changing state in parent component.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Conditional rendering: </div>
        <div className="text-color">
          {`if (isLogged) {`} <br />
          {` return <Account />;`} <br />
          {`}`} <br />
          {`else {`} <br />
          {`return <LogInButton />;`} <br />
          {`}`}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">Conditional rendering with ternary operator: </div>
        <div className="text-color">
          {`{isLoggedIn ? <Account /> : <LogInButton />}`} <br />
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">React containment with props.children: </div>
        <div className="text-color">
          {`//Welcome.js`} <br />
          {`function Welcome() {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br />
          {`props.children`} <br />
          {`}`} <br />
          <br />
          {`//App.js`} <br />
          {`function App() {`} <br />
          {`return(`} <br />
          {`<Welcome>`} <br />
          {`// what you place here is passed as props.children`} <br />
          {`</Welcome>`} <br />
          {`}`}{" "}
        </div>{" "}
        (When children component dont't know what it will contain we can use {`{props.children}`} in child component body.)
      </div>
    </div>
  );
};

export default Components;
