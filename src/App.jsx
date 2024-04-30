//useState is a hook that allows you to add state to a functional component
import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
// Import the components that we want to render
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import CoreConceptAlt from "./components/CoreConcept/CoreConceptAlt.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {


  // tabContent is a variable that is executed only once when the component is rendered. This is not a state variable so it will not re-render the component when it is updated. This is why the content does not change when the buttons are clicked.
  let tabContent = 'Please click a button to view content.';

  //Hooks need to be called at the top level of the component function, not within an inner function or block
  //const stateArray = useState('Please click a button to view content.');
  //You can use destructuring to assign the values of the array to variables
  //You can set a default value for the state by passing it as an argument to useState
  //The second element of the array is a function that can be used to update the state value
  //This tells React to re-render the component with the new state value
  //we can use const to declare the state variable because we are not reassigning the variable, we are updating the value of the variable
  const [selectedTopic, setSelectedTopic] = useState('Please click a button to view content.');

  //useState returns an array with two elements. The first element is the current state value and the second element is a function that can be used to update the state value.

  function handleSelect(selectedButton) {
    //selected => 'components', 'JSX', 'props', or 'state
    console.log(selectedButton);
    tabContent = selectedButton; //This will not update the component because it is not a state variable

    //This will update the component because it is a state variable
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />

            {/* In React, you can use the spread operator to pass all the 
            properties of an object as props to a component, provided that 
            the property names match the prop names */}
            <CoreConceptAlt {...CORE_CONCEPTS[0]} />
            <CoreConceptAlt {...CORE_CONCEPTS[1]} />
            <CoreConceptAlt {...CORE_CONCEPTS[2]} />
            <CoreConceptAlt {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* you can use anomonomous arrow functions to pass arguments to the function. You can then pass parameters to handleSelect and it will not be executed immediately when run but instead only the arrow function is defined */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <p>{tabContent} {/* This will not update because it is not a state variable */}</p>
          <p>{selectedTopic} {/* This will update because it is a state variable */}</p>

        </section>
      </main>
    </div>
  );
}

export default App;
