const Arrays = () => {
  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [
    { brand: "Mercedes", topspeed: "256" },
    { brand: "BMW", topspeed: "211" },
    { brand: "Porsche", topspeed: "302" },
  ];

  const functionOne = () => {console.log("first")}
  const functionTwo = () => {console.log("second")}

  functionOne(functionTwo)

  return (
    <div className="container">
      <div className="js-item">
        {" "}
        <div className="">Function: </div>
        <div className="text-pink">{`function myFunction() {code}`}</div>
      </div>

      <div className="js-item">
        {" "}
        <div className="">Function (arrow): </div>
        <div className="text-pink">{`const myFunction = () => {code}`}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Function (IIFE): </div>
        <div className="text-pink">
          {`(() => {code})()`} {" "}
        </div>{" "}
        (Immediately-invoked Function Expression without name)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array: </div>
        <div className="text-pink">[{array.join(", ")}]</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Set: </div>
        <div className="text-pink">{`const letters = new Set(["a","b","c"])`}</div>  (A JavaScript Set is a collection of unique values,Each value can only occur once in a Set)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Object: </div>
        <div className="text-pink">{`[{brand: "Mercedes", topspeed: "256"}, {brand: "BMW", topspeed: "211"}, {brand: "Porsche", topspeed: "302"}]`}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Object[0].brand: </div>
        <div className="text-pink">{object[0].brand}</div>  (object name [index of element] value name)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.toString(): </div> <div className="text-pink">{array.toString()}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.join(" + "): </div> <div className="text-pink">{array.join(" + ")}</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.pop(), Array: </div> <div className="text-pink">[1, 5, 9, 13, 17, 21]</div>  (pops last element of array, overwrites original array)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.pop(): </div> <div className="text-pink">{25}</div>  (returns popped element)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.push(28), Array: </div> <div className="text-pink">[1, 5, 9, 13, 17, 21, 25, 28]</div>
         (add new elements to end of array, very similar to unshift())
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.push(28): </div> <div className="text-pink"> {8}</div>  (returns new array length)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.shift(), Array: </div> <div className="text-pink"> [5, 9, 13, 17, 21, 25, 28]</div>
         (shifts (removes) first element from array, overwrites original array)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.shift(): </div> <div className="text-pink">1</div> (returns shifted element)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.unshift(101, 122), Array: </div> <div className="text-pink">[101, 122, 5, 9, 13, 17, 21, 25, 28]</div>  (add new elements to beginning of array, very similar to push())
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.unshift(101, 122): </div> <div className="text-pink">9</div>  (Returns new array length)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.slice(0, 4): </div> <div className="text-pink">[{array.slice(0, 4).join(", ")}]</div> (returns new array from selected range)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.slice(-3, array.length): </div> <div className="text-pink">[{array.slice(-3, array.length).join(", ")}]</div> (array of three last elements)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.concat(Array): </div> <div className="text-pink">[{array.concat(array).join(", ")}]</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">
          Array.filter(item {"=>"} item {">"} 5):
        </div>{" "}
        <div className="text-pink">[{array.filter((item) => item > 5).join(", ")}]</div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">
          Array.find(item {"=>"} item {">"} 5):
        </div>
        <div className="text-pink"> {array.find((item) => item > 5)} </div> (returns first element fulfilling the condition)
      </div>
      <div className="js-item">
        {" "}
        <div className="">
          Array.findIndex(item {"=>"} item {">"} 5):
        </div>
        <div className="text-pink"> {array.findIndex((item) => item > 5)} </div> (returns index of first element fulfilling the condition)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.from("ABCDEFGHIJKL"): </div>
        <div className="text-pink"> [{Array.from("ABCDEFGHIJKL").join(", ")}] </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.includes(13): </div>
        <div className="text-pink"> {"true"} </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.indexOf(17): </div>
        <div className="text-pink"> {array.indexOf(17)} </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.lastIndexOf(17): </div>
        <div className="text-pink"> {array.lastIndexOf(17)} </div>  (returns last index of element, if there are more iterations)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Array.length: </div>
        <div className="text-pink"> {array.length} </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.map(item => <div>n: {item} </div>)"}: </div>
        <div className="text-pink">
          {" "}
          {array.map((item) => (
            <div>n: {item} </div>
          ))}{" "}
        </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.reduce((total, value) => total + value)"}: </div>
        <div className="text-pink"> {array.reduce((total, num) => total + num)} </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.reverse()"}: </div>
        <div className="text-pink"> [{array.reverse().join(", ")}] </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.sort((a,b) => a - b)"}: </div>
        <div className="text-pink"> [{array.sort((a, b) => a - b).join(", ")}] </div>
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.some((item) => item > 5)"}: </div>
        <div className="text-pink"> true </div>  (check if any value fulfill condition)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.splice(0, 3)"}: </div>
        <div className="text-pink"> [{"1, 5, 9"}] </div>(gets position and number of items to remove from array, overwrites original array without removed items, returns removed items)
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"array.splice(array.length, 0, 45, 89)"}: </div>
        <div className="text-pink"> [{"1, 5, 9, 13, 17, 21, 25, 45, 89"}] </div> (add new array items to end of array)
      </div>
    </div>
  );
};

export default Arrays;
