const DOM = () => {
  document.addEventListener("DOMContentLoaded", function () {

    console.log(document.getElementsByClassName("body")[0].getBoundingClientRect())
  });

  return (
    <div className="body">
      <div className="js-item">
        {" "}
        <div className="">{`element.parentNode`}: </div>
        <div className="text-pink"> Select parent of selected element.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.childNodes`}: </div>
        <div className="text-pink"> Display list of an element's child nodes.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.firstChild`}: </div>
        <div className="text-pink"> Select first child.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.lastChild`}: </div>
        <div className="text-pink"> Select last child.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.nextSibling`}: </div>
        <div className="text-pink"> Select next sibling of selected node.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.previousSibling`}: </div>
        <div className="text-pink"> Select previous sibling of selected node.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`event.target`}: </div>
        <div className="text-pink"> Placed in function returns HTML element that triggered event. For example: "{`<div className="text-pink"> Returns HTML element that triggered event. </div>`}" </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`event.preventDefault()`}: </div>
        <div className="text-pink"> Prevents default action that belongs to the event. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.classList`}: </div>
        <div className="text-pink"> Returns classes of selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.classList.add("class-name")`}: </div>
        <div className="text-pink"> Add class to selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.classList.remove("class-name")`}: </div>
        <div className="text-pink"> Remove class from selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.classList.toggle("class-name")`}: </div>
        <div className="text-pink"> Toggle on/off class of selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.innerHTML`}: </div>
        <div className="text-pink"> Returns inner HTML content of selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.innerText`}: </div>
        <div className="text-pink"> Returns inner text of selected element. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.appendChild(node)`}: </div>
        <div className="text-pink"> Appends a node as the last child of a node.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`const newDiv = document.createElement("div")`}: </div>
        <div className="text-pink"> Create new element. It could be added to other element as child.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`const newText = document.createTextNode("text of my div")`}: </div>
        <div className="text-pink"> Appends a new text node, that could be added to element.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.removeChild(node)`}: </div>
        <div className="text-pink"> Removes selected child node of element.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.replaceChild(new node, old node)`}: </div>
        <div className="text-pink"> Replaces selected child node of element.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`const newDiv = document.createElement("div")`} </div><br />
        <div className="">{`newDiv.classList.add("class-name"): `} </div><br />
        <div className="">{`const newText = document.createTextNode("text of my div")`} </div><br />
        <div className="">{`newDiv.appendChild(newText)`} </div><br />
        <div className="">{`element.appendChild(newDiv)`}: </div><br />
        <div className="text-pink"> Creating new div element and text node, appending text node to this div, and appending div to selected element. It builds new div with class name and text which is child of selected element.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`element.getBoundingClientRect()`}: </div>
        <div className="text-pink"> returns the size of an element and its position relative to the viewport.</div> 
      </div>
    </div>
  );
};

export default DOM;
