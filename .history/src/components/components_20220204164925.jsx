const Async = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Callback: </div>
        <div className="text-pink">
          {`const functionOne = () => {code}`} <br />
          {`const functionTwo = (callback) => {code; callback();}`} <br />
          {`functionTwo(functionOne)`}{" "}
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise: </div>
        <div className="text-pink">
          {`const promise = new Promise((resolve, reject) => {`} <br />
          {`const x = "pegasus";`} <br />
          {`const y = "unicorn";`} <br />
          {` if(x === y) {resolve();}`} <br />
          {` else {reject();}})`} <br /> <br />
          {`promise`} <br />
          {`.then(result => {console.log('Yes, it is true!')})`} <br />
          {`.catch(error => {console.log('Sorry, it is false.')})`}{" "}
        </div>{" "}
        (Promise is producing code, when finished it gives success (resolve) or error (reject). Next there is possibility to execute code when promise returned result with "then" and when promise returned error with "catch".)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.all: </div>
        <div className="text-pink">
          {`Promise.all([`}
          {`loadComments()`} <br />
          {`loadLikes()`} <br />
          {`loadArticles()`} <br />
          {`])`} <br />
          {`.then(res => {`} <br />
          {`console.log(res); //[comments, likes, articles]`} <br />
          {`});`}
        </div>
        (This method takes array of promises as input. It returns single promise (array of results) that resolves when all of the passed promises have resolved or when the iterable contains no promises. )
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.allSettled: </div>
        (This method is similar to Promise.all, but it returns result also when one or more passed promise returned error.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.race: </div>
        <div className="text-pink">
          {`Promise.race([`}
          {`loadComments()`} <br />
          {`loadLikes()`} <br />
          {`loadArticles()`} <br />
          {`])`} <br />
          {`.then(res => {`} <br />
          {`console.log(res); //[comments or likes or articles, whichever promise executed first]`} <br />
          {`});`}
        </div>
        (This promise method returns only one of passed promises, which executed first regardless success or error.
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise.finally: </div>
        (When promise is either fulfilled or rejected callback finally is executed. This provides a way to run code despite result of promise.)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Promise chain: </div>
        <div className="text-pink">
          {`const promise = new Promise((resolve, reject) => {`} <br />
          {` if(value ) {resolve();}`} <br />
          {` else {reject();}})`} <br /> <br />
          {`promise`} <br />
          {`.then(result => {console.log('first task is over!')})`} <br />
          {`.then(result => {console.log('second task is over.')})`} <br />
          {`.then(result => {console.log('third task is over too!')})`} <br />
        </div>{" "}
        (Using this method we can chain many tasks in sequence, one after another)
      </div>
      <div className="js-item">
        {" "}
        <div className="">Async / await: </div>
        <div className="text-pink">
          {`const renderPage = async () => {`} <br />
          {`const country = getCountry();`} <br />
          {`const weather = getWeather(country.lat, country.lng);`} 
          <br/> <br/>
          {`const countryData = await country;`} <br />
          {`const weatherData = await weather;`} <br />
          {`updatePage(countryData, weatherData);}`} <br />
        </div>{" "}
        (The word async before a function means this function will always returns a promise. Using async and await gives possibility to wait with execution of code until previous action will finish. This could be also acomplished with promises. Advantage of using async/await over promises is similarity to working with synchronous code.)
      </div>
    </div>
  );
};

export default Async;
