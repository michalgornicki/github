const VariaRefbles = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">keyword var:  </div>
        <div className="text-pink"> global scope, function scope, can be reassigned </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">keyword let:  </div>
        <div className="text-pink"> function scope, block scope, can be reassigned </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">keyword const:  </div>
        <div className="text-pink"> function scope, block scope, cannot be reassigned </div> 
      </div>

      <div className="js-item">
        {" "}
        <div className="">{"const executeFunction = () =>"}:  </div>
        <div className="text-pink"> {`{function}`} </div>  (variable const representing some function)
      </div>
    </div>
    
  );
};

export default Variables;
