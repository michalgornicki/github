const State = () => {
  return (
    <div className="">
      <div className="js-item">
       
        {" "}
        <div className="">Class component state: </div>
        <div className="text-color">
        <pre>{`
class Car extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      brand: "Toyota",
      model: "Auris"
      color: "red",
}}

  render() {
    return (
      <div>
        <h1>{this.state.brand}</h1>
        <h1>{this.state.model}</h1>
        <h1>{this.state.color}</h1>
      </div>
      )
        `}</pre>
        </div>{" "}
        Class components in React have built-in state object. It is not available in functional components. constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. super(props) function pass properties to this React component.
      </div>
      <div className="js-item">
        {" "}
        <div className="">Changing state: </div>
        <div className="text-color">
          <pre>{`this.setState({color: 'blue'})
          `}</pre>
        </div>
        With this method you can change state of component. Don't try to change state with "this.state=", because it will generate problems with code.
      </div>
      <div className="js-item">
        {" "}
        <div className="">useState (React hook): </div>
        <div className="text-color">
          <pre>{`
const [myState, setMyState] = useState(initialState) 
setMyState(newState) //Setting new state 
          `}</pre>
        </div>{" "}
        State hook can be used to store state within component. It could be passed to other components.
      </div>
      <div className="js-item">
        {" "}
        <div className="">useReducer: </div>
        <div className="text-color">
          <pre>{`
const [state, dispatch] = useReducer(reducer, initialArg, init);


//example
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Counter: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
          `}</pre>
        </div>{" "}
        Reducer hook works similar to state hook but it is recommended when next state is dependent on previous state. UseReducer mechanism is similar to Redux.
      </div>
    </div>
  );
};

export default State;
