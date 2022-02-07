const Hooks = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Math.round(10.67): </div>
        <div className="text-pink">{Math.round(10.67)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.ceil(10.67): </div>
        <div className="text-pink">{Math.ceil(10.67)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.floor(10.67): </div>
        <div className="text-pink">{Math.floor(10.67)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">(10.67546).toFixed(2): </div>
        <div className="text-pink">{(10.67546).toFixed(2)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.pow(3, 5): </div>
        <div className="text-pink">{Math.pow(3, 5)}</div>  (number x to power of y)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.random(): </div>
        <div className="text-pink">{Math.random()}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.sqrt(9): </div>
        <div className="text-pink">{Math.sqrt(9)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.abs(-9.34): </div>
        <div className="text-pink">{Math.abs(-9.34)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.min(0, 150, 30, 20, -8, -200): </div>
        <div className="text-pink">{Math.min(0, 150, 30, 20, -8, -200)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.max(0, 150, 30, 20, -8, -200): </div>
        <div className="text-pink">{Math.max(0, 150, 30, 20, -8, -200)}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Math.log2(64): </div>
        <div className="text-pink">{Math.log2(64)}</div>  (return the base 2 logarithm of x)
      </div>
      <div className="js-item">
        {" "}
        <div className="">new Date(): </div>
        <div className="text-pink">{Date()}</div>  (creates Date object representing current time and date)
      </div>
      <div className="js-item">
        {" "}
        <div className="">typeof "3.52": </div>
        <div className="text-pink">{typeof "3.52"}</div>  (finds the data type of a JavaScript variable)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Number("3.14"): </div>
        <div className="text-pink">{Number("3.14")}</div>  (converts whole string to number)
      </div>
      <div className="js-item">
        {" "}
        <div className="">ParseInt("3.14"): </div>
        <div className="text-pink">{parseInt("3.14")}</div>  (find number in string and returns a whole number, only the first number is returned)
      </div>
      <div className="js-item">
        {" "}
        <div className="">parseFloat("3.14"): </div>
        <div className="text-pink">{parseFloat("3.14")}</div>  (find number in string and returns a number, only the first number is returned)
      </div>
      <div className="js-item">
        {" "}
        <div className="">(3.14).toString(): </div>
        <div className="text-pink">"{(3.14).toString()}"</div>  (converts number to string)
      </div>
    </div>
  );
};

export default Numbers;
