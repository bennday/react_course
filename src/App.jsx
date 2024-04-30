//useState is a hook that allows you to add state to a functional component
import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
// Import the components that we want to render
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import CoreConceptAlt from "./components/CoreConcept/CoreConceptAlt.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

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
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* you can use the && operator to conditionally render elements */}
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}

          <hr />

          {/*Alternatively, you can merge the two if statements into one by using the ternary operator */}
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          <hr />

          {/* you can use the && operator to conditionally render elements */}
          {!selectedTopic && <p>Please select a topic.</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          <hr />
          
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
