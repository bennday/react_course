//useState is a hook that allows you to add state to a functional component
import { useState, Fragment } from "react";

// Import the components that we want to render
import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";

import Examples from "./components/Examples/Examples.jsx";




function App() {
  //we can use const to declare the state variable because we are not reassigning the variable, we are updating the value of the variable

  //useState returns an array with two elements. The first element is the current state value and the second element is a function that can be used to update the state value.
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selected => 'components', 'JSX', 'props', or 'state
    console.log(selectedButton);

    //This will update the component because it is a state variable
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    //You can use an empty tag inplace of a div, or React's Fragment. React requires only one parent element to be returned from a component
    <>
      <Header />
      <main>

        <CoreConcepts />
        <Examples />

      </main>
    </>
  );
}

export default App;
