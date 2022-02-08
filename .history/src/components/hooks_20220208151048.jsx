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
        (State hook can be used to store state within component. It could be passed to other components.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">useEffect: </div>
        <div className="text-color">
          <pre>{`
useEffect(
  () => console.log("code updated!")
);

//Cleaning after effect
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    subscription.unsubscribe();
  };
});
          `}</pre>
        </div>{" "}
        (Effect hook execute function or functions after every render of its component. React is cleaning buffer from effects from previous renders before new execution of useEffect.)
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
        (Context hook is substitute for "static contextType = MyContext" or "{<MyContext.Consumer>")
      </div>
    </div>
  );
};

export default Hooks;
