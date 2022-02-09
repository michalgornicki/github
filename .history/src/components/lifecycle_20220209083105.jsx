const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Phases of component lifecycle: </div>
        <div className="text-color">
    
        <pre>{`
Mounting - inserting elements into the DOM.

  constructor()
  static getDerivedStateFromProps()
  ---
  render()
  ---
  componentDidMount()

Updating - updating components in the DOM.

  static getDerivedStateFromProps()
  shouldComponentUpdate()
  ---
  render()
  ---
  getSnapshotBeforeUpdate()
  componentDidUpdate()

Unmounting - removing a component from the DOM.

  componentWillUnmount()

          `}</pre>
        </div>In components we can declare this specific methods that will execute code in selected phase of component lifecycle.
      </div>
      <div className="js-item">
        {" "}
        <div className="">constructor() </div>
        <div className="text-color">
        <pre>{`
Constructor method is called before mounting component. 
This is place to set initial state with "this.state".
Avoid adding any effects or subscriptions in the constructor.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">static getDerivedStateFromProps(props, state) </div>
        <div className="text-color">
        <pre>{`
This method is used to update the state, before the rendering of the component, which depends upon the props received by the component. 
This method is called on every rerendering of the component.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentDidMount() </div>
        <div className="text-color">
        <pre>{`
This method executes after rendering of component.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentWillUnmount() </div>
        <div className="text-color">
        <pre>{`
This method executes after removing component from DOM.
          `}</pre>
        </div>{" "}
      </div>
    </div>
  );
};

export default Lifecycle;
