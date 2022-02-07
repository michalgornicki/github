const Fragments = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">{"Window"}: </div>
        <div className="text-pink"> This object represents an open window in a browser.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"setInterval(() => function(), 500)"}: </div>
        <div className="text-pink"> Repeat function() every 500 miliseconds </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"clearInterval(myInterval)"}: </div>
        <div className="text-pink"> Clear myInterval from executing </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"setTimeout(() => function(), 500)"}: </div>
        <div className="text-pink"> Execute function() after 500 miliseconds </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"clearTimeout(MyTimeout)"}: </div>
        <div className="text-pink"> Prevent MyTimeout from executing </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"alert(message)"}: </div>
        <div className="text-pink"> Display alert box with your message </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"confirm(do you accept conditions?)"}: </div>
        <div className="text-pink"> Display confirm box with choice </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"prompt(Enter your first name)"}: </div>
        <div className="text-pink"> Display prompt box to enter value </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.open()"}: </div>
        <div className="text-pink"> Open new window </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window(close)"}: </div>
        <div className="text-pink"> Close current window </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.innerWidth"}: </div>
        <div className="text-pink"> Inner width of browser window </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.innerHeight"}: </div>
        <div className="text-pink"> Inner height of browser window </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.scrollX"}: </div>
        <div className="text-pink"> Pixels a document has scrolled from the left of the window.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.scrollY"}: </div>
        <div className="text-pink"> Pixels a document has scrolled from the top of the window. </div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"window.location.origin"}: </div>
        <div className="text-pink"> Information about the current URL.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"history.back()"}: </div>
        <div className="text-pink"> Loads the previous URL in the history list.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"navigator.appName"}: </div>
        <div className="text-pink"> Get user browser name.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"navigator.language"}: </div>
        <div className="text-pink"> Get user browser language.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"Document"}: </div>
        <div className="text-pink"> When HTML document is loades into a web browser it becomes document object. It is root node of the HTML document.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"document.getElementById()"}: </div>
        <div className="text-pink"> Returns the element that has the ID attribute with the specified value.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"document.getElementsByClassName()[]"}: </div>
        <div className="text-pink"> Returns a HTMLCollection containing all elements with the specified class name.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{"document.querySelectorAll()"}: </div>
        <div className="text-pink"> Select all elements with class.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`addEventListener(event, function)`}: </div>
        <div className="text-pink"> This method attaches an event handler to the document. Sample events: click, mouseenter, mouseleave, keypress, mousewheel, scroll, drag, onload, onchange, DOMContentLoaded.</div> 
      </div>
      <div className="js-item">
        {" "}
        <div className="">{`removeEventListener(event, function)`}: </div>
        <div className="text-pink"> Remove selected event listener.</div> 
      </div>

    </div>
  );
};

export default Fragments;
