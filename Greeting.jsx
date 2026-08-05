import { useState } from 'react'
/*function Greeting() {
  return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>;
}


export default Greeting*/

/*function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function AppBtn() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}*/

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });
  //const [firstNameValue, setValue] = useState("");

  const handleIncreaseAge = () => {
    
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleNameChange = (e) => {
    setPerson({ ...person, firstName: person.firstName = e.target.value })
  }
  
  const handleLastName = (e) => {
    setPerson ({ ...person, lastName: person.lastName = e.target.value})
  }
  
 

  return (
    <>
      <h1>{person.firstName}       {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>

      <input
      type="text"
      value={person.firstName}
      onChange = {handleNameChange}
      
      />
      <input
      type="text"
      value={person.lastName}
      onChange = {handleLastName}
      
      />

    </>
  );
}


