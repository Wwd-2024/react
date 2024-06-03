import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX now on
// ********** react Element
// const jsxHeading = (<h1 id="heading" className="tt">
//     Hi I'm JSX
//     </h1> );

// const root= ReactDOM.createRoot(document.getElementById("body"));

// root.render(jsxHeading);


//********** react component */

// const Header = () => {
// return <h1> Hey Buddy</h1>
// }


//const Header = () => <h1> Hey Buddy</h1>

const title = <h1> Hey Buddy</h1>

const Header = () =>( <div>
{title}
    <h2> 
       Good morning
    </h2>
    </div> );

const Body = () => (
    <div>
    <Header/> 
    {Header()}
    <Header></Header>
    <div>
        Welcome to this wonderland
        <p> Here you see react magic</p>
    </div>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("body"));

root.render(<Body/>);


