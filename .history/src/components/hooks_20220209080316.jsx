const Hooks = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">useState: </div>
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
        <div className="">useEffect: </div>
        <div className="text-color">
          <pre>{`
useEffect(
  () => console.log("code updated!")
);

useEffect(() => {
  console.log('mounted');
  return () => console.log('unmounting...');
}, [])  // <-- add this empty array here to run useEffect only once on mount

//Cleaning after effect
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    subscription.unsubscribe();
  };
});
          `}</pre>
        </div>{" "}
        Effect hook execute function or functions after every render of its component. React is cleaning buffer from effects from previous renders before new execution of useEffect.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Conditional execution of useEffect: </div>
        <div className="text-color">
          <pre>{`
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
          `}</pre>
        </div>{" "}
        (Subscription will be created only when property props.source will change.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">useContext: </div>
        <div className="text-color">
          <pre>{`
const theme = useContext(ThemeContext);
          `}</pre>
        </div>{" "}
        (Context hook is substitute for "static contextType = MyContext" or "{"<MyContext.Consumer>"}". It can be used both in functional and class components.)
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
        (Reducer hook works similar to state hook but it is recommended when next state is dependent on previous state. UseReducer mechanism is similar to Redux.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">useCallback: </div>
        <div className="text-color">
          <pre>{`
          `}</pre>
        </div>{" "}
        ()
      </div>
      <div className="js-item">
        {" "}
        <div className="">useMemo: </div>
        <div className="text-color">
          <pre>{`
          `}</pre>
        </div>{" "}
        ()
      </div>
      <div className="js-item">
        {" "}
        <div className="">useRef: </div>
        <div className="text-color">
          <pre>{`
          `}</pre>
        </div>{" "}
        ()
      </div>
      <div className="js-item">
        {" "}
        <div className="">useLayoutEffect: </div>
        <div className="text-color">
          <pre>{`
          `}</pre>
        </div>{" "}
        ()
      </div>
    </div>
  );
};

export default Hooks;
