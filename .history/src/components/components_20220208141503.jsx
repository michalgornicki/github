const Components = () => {
  return (
    <div className="">
      <div className="js-item">
        <div className="">Functional component: </div>
        <div className="text-color">
          <pre>{`
function Welcome() {
return
<div>Hello!</div>;
}
        `}</pre>
        </div>
      </div>
      <div className="js-item">
        <div className="">Functional component (arrow function): </div>
        <div className="text-color">
          <pre>{`
const Welcome = () => { 
return 
<div>Hello!</div>;
}
        `}</pre>
        </div>
      </div>
      <div className="js-item">
        <div className="">Class component: </div>
        <div className="text-color">
          <pre>{`
class Welcome extends React.Component { 
render() { 
return <h1>Hello!</h1>; 
}}
        `}</pre>
        </div>
      </div>
      <div className="js-item">
        <div className="">Inserting components into parent component: </div>

        <div className="text-color">
          <pre>{`
//Welcome.js
const Welcome = () => {
return (
<div>Hello!</div>;
)}

//Items.js
const Items = () => {
return (
<div>items</div>;
)}

//App.js
const App = () => {
return (
<Welcome />
<Items />
)}
        `}</pre>
        </div>
      </div>
      <div className="js-item">
        <div className="">Passing props (properties) from parent component to child component: </div>
        <div className="text-color">
          <pre>{`
//App.js
<Car color={this.state.color} />

//Car.js
const Car = (props) => {
return
<div>This car color is: {props.color}.</div>;}
        `}</pre>
        </div>
        (We can pass props from parent component to its child component. It could be accessed in child component by putting props as component parameter. Any state is always owned by some specific component, and any data fetched from that state can only affect components “below” them in the tree. It is called top-down data flow.)
      </div>
      <div className="js-item">
        <div className="">Passing props up from child component to parent component (using hooks): </div>
        <div className="text-color">
          <pre>{`
//App.js
const [value, setValue] = useState("")

const updateValue = (childData) => {
setValue(childData);
<ComponentB update={updateValue} />

//ComponentB.js
<textarea onChange={(e) => props.update(e.target.value)}></textarea>
        `}</pre>
        </div>
        (We can pass function to child to component which change hook state. When function is executing in children component it passes value as parameter, changing state in parent component.)
      </div>
      <div className="js-item">
        <div className="">React Context for quick passing properties through tree: </div>


        <div className="text-color">
        <pre>{`
//App.js
const ThemeColor = React.createContext('green'); //Creating context with default value

const App = () => {
return(
<ThemeColor.Provider value="blue"> //Use Provider to pass theme through app tree
<Navbar />
<ThemeColor.Provider>
)}

const Navbar = () => {
return(
<div>
<Button />
<div>
)}

const Button = () => {
static contextType = ThemeColor; //Assign value to contextType to read value from available provider. Static means a property that belongs to class only but not for it's instances.
return(
<div>
<Button theme={this.context} />
<div>
)}
        `}</pre>
        </div>
        (React Context provides passing values through whole tree. It should be used to pass global data like theme, information about logged user, set language of website.)
      </div>
      <div className="js-item">
        <div className="">Context.Consumer: </div>
        <div className="text-color">
          <pre>{`
<MyContext.Consumer> 
{value => rendering code based on provided value} 
</MyContext.Consumer> `}
          </pre>
        </div>
        (In component we can use Consumer to render code based on value provided by Provider.)
      </div>
      <div className="js-item">
        <div className="">Multiple contexts: </div>
        <div className="text-color">
          <pre>{`
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: 'guest'});

<ThemeContext.Provider value={theme}>
<UserContext.Provider value={user}>
<Layout />
</UserContext.Provider>
</ThemeContext.Provider>
         `}</pre> 
        </div>
        (Each context needs separate const and node.)

      </div>
      <div className="js-item">
        <div className="">Conditional rendering: </div>
  
        <div className="text-color">
        <pre>{`
if (isLogged) {
return <Account />;
}
else {
return <LogInButton />;
}
          `}
          </pre>         
        </div>
      </div>
      <div className="js-item">

        <div className="">Conditional rendering with ternary operator: </div>
        <div className="text-color">
        <pre>{`
{isLoggedIn ? <Account /> : <LogInButton />}`}</pre>
        </div>
      </div>
      <div className="js-item">
        <div className="">React containment with props.children: </div>
        <div className="text-color">
        <pre>{`
//Welcome.js
function Welcome() {
return
<div>Hello!</div>;
props.children
}

//App.js
function App() {
return(
<Welcome>
// what you place here is passed as props.children
</Welcome>
}
        `}</pre>
        </div>
        (When children component dont't know what it will contain we can use {`{props.children}`} in child component body.)
      </div>
      <div className="js-item">
        <div className="">React fragments: </div>

        <div className="text-color">
        <pre>{`
return (
<React.Fragment>
<Component1 />
<Component2 />
<Component3 />
</React.Fragment>`}
</pre>
        </div>
        (React fragments gives possibility to group elements without adding new node to DOM. Fragments can be written with "{"<></>"}tags.")
      </div>
    </div>
  );
};

export default Components;
