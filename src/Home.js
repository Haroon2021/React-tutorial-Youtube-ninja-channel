import { useState } from 'react';

const Home = () => {
    // name = mario initially setName makes react listen for changes 
     //in the variable name (due to events happening
    //on screen user clicks ect) and respond whenn it changes
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        // since we use setName react responds and changes the value of the name variable
        setName('Luigi')
        setAge(30);
    }

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>Is {age} years old</p>
            <button onClick = {handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;