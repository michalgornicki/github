const State = () => {
  return (
    <div className="">
      <div className="js-item">
       
       
        </div>{" "}
        (Class components in React have built-in state object. It is not available in functional components. constructor() function will be called when the component gets initiated, it is place where you initiate the component's properties. super(props) function pass properties to this React component.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Changing state: </div>
        <div className="text-color">
          {`this.setState({color: 'blue'});`} <br />

        </div>{" "}
        (With this method you can change state of component. Don't try to change state with "this.state=", because it will generate problems with code.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Changing state: </div>
        <div className="text-color">
          {`this.setState({color: 'blue'});`} <br />

        </div>{" "}
        (With this method you can change state of component. Don't try to change state with "this.state=", because it will generate problems with code.)
      </div>
    </div>
  );
};

export default State;
