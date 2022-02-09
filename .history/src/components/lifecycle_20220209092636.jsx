const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Phases of component lifecycle: </div>
        <div className="text-color">
    
        <pre>{`
Lifecycle methods are only available in class components.
We can somehow replace them in functional components with React Hooks. 

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
Before rendering of component, getDerivedStateFromProps method is called which updates the state according to the props passed to it.
It is called on every rerendering of the component.
Static means method isn't called on instances of the class. It is called only on the class itself.

props - props passed to component.
state - previous state of component.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">render() </div>
        <div className="text-color">
        <pre>{`
Render is only obligatory method in class component.
After call it checks state and props and returns React elements, components etc.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentDidMount() </div>
        <div className="text-color">
        <pre>{`
This method executes after rendering of component.
This is a good place to instantiate the network request or subscriptions that should be later unsubscribed in componentWillUnmount().
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">shouldComponentUpdate(nextProps, nextState) </div>
        <div className="text-color">
        <pre>{`
This method is called everytime before render when component received new props or new state.
This method exists only for optimalization of performance, it shouldn't be used to prevent rendering.
It by default returns true and if it returns false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">getSnapshotBeforeUpdate() </div>
        <div className="text-color">
        <pre>{`
This method is invoked just before the DOM is being rendered.
It is used to store the previous values of the state after the DOM is updated.
Any value returned by getSnapshotBeforeUpdate() method will be used as a parameter for componentDidUpdate() method.
          `}</pre>
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentDidUpdate() </div>
        <div className="text-color">
        <pre>{`
This method is called directly after update of component.
This is a good place to instantiate the network request depending if state or props changed.
You can also put here setState() with if conditional to o.
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
