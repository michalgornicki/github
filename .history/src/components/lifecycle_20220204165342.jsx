const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">{`Loop for`}: </div>
        <div className="text-pink">
          {" "}
          {`for (let i = 0; i < array.length; i++)`} <br /> {`{text += array[i] + "<br>";}`}
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop for in`}: </div>
        <div className="text-pink">
          {" "}
          {`for (let x in object)`} <br /> {`{ text += object[x];}`}
        </div>{" "}
        (loops through the properties of an object)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop for of`}: </div>
        <div className="text-pink">
          {" "}
          {`for (let x of array)`} <br /> {`{ text += x;}`}
        </div>{" "}
         (loops through the values of an iterable object.)
      </div>
      <div className="js-item">
        {" "}
        
        <div className="">{`Loop while`}: </div>
        <div className="text-pink">
          {" "}
          
          {`while (i < 10)`} <br /> {`{text += "The number is " + i;`} <br /> {`i++;}`}
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Loop do while`}: </div>
        <div className="text-pink">
          {" "}
          
          {`do`} <br /> {`{text += "The number is " + i;`} <br /> {`i++;}`} {`while (i < 10)`};
        </div>{" "}
         (This loop will execute the code block once, before checking if the condition is true.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`Switch`}: </div>
        <div className="text-pink">
          {" "}
          
          {`switch(expression) {`} <br />
          {`case x:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case y:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`case z:`} <br /> {`{code}`} <br /> {`break;`} <br />
          <br />
          {`default:`} <br /> {`{code}`} <br />
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`if else`}: </div>
        <div className="text-pink">
          {" "}
          
          {`if(condition) {`} <br />
          {`(code)`} <br />
          <br />
          {`else if(condition) {`} <br />
          {`(code)`} <br />
          <br />
          {`else {`} <br />
          {`(code)`} <br />
        </div>{" "}
        
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`ternary expression if else`}: </div>
        <div className="text-pink">
          {" "}
          
          {`condition ? code1 : code2`} <br /> 
        </div>(if condition is fulfilled execute code1, if else execute code2)
       
      </div>
    </div>
  );
};

export default Loops;
