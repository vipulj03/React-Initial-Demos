import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//React ES-6 - http://demo.fabiobiondi.io/es6playground/

//1) Method in Classes
//2) Class Inheritance
//3) Arrow Functions
/*
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
    return this.present() + ', it is a ' + this.model
  }
}

var mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
*/

//Arrow Function

//Before
/*hello = function() {
  return "Hello World!";
}
//After
hello = () => {
  return "Hello World!";
}*/

//Arrow Functions Return Value by Default: hello = () => "Hello World!";

//Arrow Function With Parameters: hello = (val) => "Hello " + val;

/*let add = function(x,y) {
  return x + y;
}
console.log(add(10,20));

let add = (x,y) => x + y;
console.log(add(10,20));*/

/*let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers);

let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers);*/



//Example-1
/*class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}*/

//Example-2
/*class MyComponent extends React.Component {
  render() {
    return <h1>Hello from the render method!</h1>;
  }
}*/

//Example-3
/*
function MyFunctionComponent() {
  return <h1>Hello from a function component!</h1>;
}

class MyClassComponent extends React.Component {
  render() {
    return <h1>Hello from a class component!</h1>;
  }
}
*/

//Example-4
/*class MyClassComponent extends React.Component {
  render() {
    return (
      <blockquote>
        <p>Be the change you wish to see in the world.</p>
        <cite>
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Mahatma_Gandhi"
          >
            Mahatma Gandhi
          </a>
        </cite>
      </blockquote>
    );
  }
}
*/

//Example-5 - A Stateful Component with Lifecycle Methods

//The componentDidMount() method is called after the component is rendered.
//This is where you run statements that requires that the component is already placed in the DOM.

//The componentWillUnmount method is called when the component is about to be removed from the DOM.
/*
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}*/

//Example-6 - defaultProps
/*class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.profilePictureSrc} alt="" />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

Profile.defaultProps = {
  profilePictureSrc: 'https://example.com/no-profile-picture.jpg',
};

class MyFriends extends React.Component {
  render() {
    return (
      <div>
        <h1>My friends</h1>
        <Profile
          name="Jane Doe"
          profilePictureSrc="https://example.com/jane-doe.jpg"
        />
        <Profile name="John Smith" />
      </div>
    );
  }
}*/

//Example-7 - Dynamic Data in Components
/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  render() {
    let text;
    if (this.state.showPassword) {
      text = `The password is ${this.props.password}`;
    } else {
      text = 'The password is a secret';
    }

    return (
      <div>
        <p>{text}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            this.setState((oldState) => ({
              showPassword: !oldState.showPassword,
            }));
          }}
        >
          Toggle password
        </button>
      </div>
    );
  }
}*/

//Example-8 - Creating the state Object (Specify the state object in the constructor method)
/*class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}&nbsp;
          {this.state.model}&nbsp;
          from {this.state.year}.
        </p>
      </div>
    );
  }
}*/


//Example-9 - Changing the state Object
/*
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
*/

//Example-10
/*
class Quiz extends React.Component {
  constructor(props) {
    super(props)
    
    var dataSet = [
      {
        question: "What is 8 x 1?",
        answers: [
          "1",
          "8",
          "16",
          "9"
        ],
        correct: 1
      },
      {
        question: "Who is Steve Jobs?",
            answers: [
              "CEO of Microsoft",
              "Barber in NY",
              "Movie Star",
              "CEO of Apple"
            ],
            correct: 3
      },
       {
            question: "Metallica is a ____ band",
            answers: [
              "Blues",
              "Hard-Rock",
              "Jazz",
              "Metal"
            ],
            correct: 3
          },
          {
            question: "IS is a ____",
            answers: [
              "Word",
              "Band",
              "Terror Group",
              "Brand"
            ],
            correct: 2
          },
          {
            question: "Who was Einstein",
            answers: [
              "A Scientist",
              "A Dentist",
              "A Serial Killer",
              "None of the above"
            ],
            correct: 0
          },
          {
            question: "JavaScript can be used in ____ development",
            answers: [
              "Back-End",
              "Front-End",
              "ReactJS",
              "All of the Above"
            ],
            correct: 3
          },
          {
            question: "Hitler was a",
            answers: [
              "Mass Murderer",
              "Dictator",
              "Jew",
              "None of the above",
              "All of the above"
            ],
            correct: 4
          },
          {
            question: "Korn is a",
            answers: [
              "Nu-Metal band",
              "Religion",
              "Singer"
            ],
            correct: 0
          },
          {
            question: "Windows computers are",
            answers: [
              "Horrible",
              "Great",
              "Cheap",
              "Invented by Bill Gates"
            ],
            correct: 3
          },
          {
            question: "The BigBan stands in",
            answers: [
              "Egypt",
              "London",
              "Amsterdam",
              "NewYork"
            ],
            correct: 1
          },
    ];
    
    this.state = {current: 0, dataSet: dataSet, correct: 0, incorrect: 0}
    this.handleClick = this.handleClick.bind(this)
  } // end constructor

 handleClick(choice){
  if(choice == this.state.dataSet[this.state.current].correct){
    this.setState({correct : this.state.correct + 1})
  }else{
    this.setState({incorrect : this.state.incorrect + 1})
  }

if(this.state.current == 9){
  this.setState({current: 0})
  this.setState({incorrect : 0})
  this.setState ({correct : 0})
}else{
  this.setState({current : this.state.current + 1})
 }
}//end of handkeClick

render(){
 return(
   <div>
     <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
     <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
   </div>
 )
}

}//end of Class


function QuizArea(props){
 var style={
   width: "25%",
   display: "block",
   textAlign: "center",
   boxSizing: "border-box",
   float: "left",
   padding: "0.2em"
 }
 return(
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
 )
}//end of QuizArea

function Question(props){
 var style={color : "red"}
 return(
   <h1 style={style}>{props.dataSet.question}</h1>
 )
}

function AnswerList(props){
 var answers = [];
 for(let i=0;i<props.dataSet.answers.length;i++){
   answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
 }
 return(
   <div>
     {answers}
   </div>
 )
}

function Answer(props){
 var style={
   width: "100%",
   height: "50",
   color: "blue"
 }
 return (
  <div>
    <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
  </div>
 )
}

function ScoreArea(props){
 var style={
   width: "100%",
   display: "block",
   textAlign: "left",
   float: "left",
   padding: "0.2em"
 }
 return(
   <div style={style}>
     <TotalCorrect correct={props.correct} />
     <TotalIncorrect incorrect={props.incorrect} />
   </div>
 )
}

function TotalCorrect(props){
 var style={
  display: "inline-block",
  padding: "1em",
  background: "#eee",
  margin: "0 1em 0 0"
 }
 return(
 <h1 style={style}>Correct: {props.correct}</h1>
 )
}

function TotalIncorrect(props){
  var style={
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 1em 0 0"
   }
   return(
   <h1 style={style}>InCorrect: {props.incorrect}</h1>
   )
}

ReactDOM.render(
  <React.StrictMode>
    <Quiz  />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*
class FilterableProductTable extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    filterText: '',
    inStockOnly: false
  }

  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  this.handleInStockChange = this.handleInStockChange.bind(this);

  }//end of Constructor

  handleFilterTextChange(filterText){
    this.setState({filterText : filterText});
  }

  handleInStockChange(inStockOnly){
    this.setState({inStockOnly : inStockOnly});
  }
 render(){
   return(
    <div>
      <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange={this.handleInStockChange} />
      <ProductTable
        products={this.props.products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly} />        
    </div>
   );
 }

}//end of Class

class SearchBar extends React.Component{
 constructor(props){
  super(props);
  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  this.handleInStockChange = this.handleInStockChange.bind(this);
 }//end of Constructor
 handleFilterTextChange(e){
   this.props.onFilterTextChange(e.target.value);
 }

 handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
 }

 render(){
  return(
    <form>
      <input
        type="text"
        placeholder="Search.."
        value={this.props.filterText}
        onChange={this.handleFilterTextChange} />
       <p>
         <input
           type="checkbox"
           checked={this.props.inStockOnly}
           onChange={this.handleInStockChange} />
       {' '}
       Only Show Products which are in Stock
       </p>
    </form>
  );
 }

}//end of SearchBar

class ProductTable extends React.Component{
  render(){
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if(product.name.indexof(filterText) === -1) {
        return;
      }
      if(inStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return(
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}//end of ProductTable

class ProductCategoryRow extends React.Component{
 render(){
   const category = this.props.category;
  return(
    <tr>
      <th colspan="2">{category}</th>
    </tr>
  );
 }
}

class ProductRow extends React.Component{
  render(){
    const product = this.props.products;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable  />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
*/
/*
function tick(){
 const element = (
  <div>
    <h1>Hello World !</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
 );
 ReactDOM.render(
   element, 
   document.getElementById('root')
 );
}

setInterval(tick, 1000);
*/
/*
function Clock(props){
 return(
    <div>
      <h1>Hello World !</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
 );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>, 
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/

/*
class Clock extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    date : new Date()
  };
 }

 componentDidMount(){
   this.timerID = setInterval(() => this.tick(), 1000);
 }

 componentWillUnmount(){
   clearInterval(this.timerID);
 }

 tick(){
   this.setState({
      date: new Date()
   });
 }
 
  render(){
  return(
    <div>
      <h1>Hello World !</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
 }
}

ReactDOM.render(
 <Clock />,
 document.getElementById('root')
);

*/



//React Hooks
/*function CountApp() {  
  // Declare a new state variable, which we will call "count"  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  */
/*
class CountApp extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      count: 0  
    };  
  }  
  render() {  
    return (  
      <div>  
        <p><b>You clicked {this.state.count} times</b></p>  
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
          Click me  
        </button>  
      </div>  
    );  
  }  
}  */
/*
ReactDOM.render(
  <React.StrictMode>
    <CountApp  />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
