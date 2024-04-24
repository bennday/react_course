import { CORE_CONCEPTS } from "./data.js";

// Import the components that we want to render
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import CoreConceptAlt from "./components/CoreConcept/CoreConceptAlt.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {
    //selected => 'components', 'JSX', 'props', or 'state
    console.log(selectedButton);
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
          Dynamic content goes here!
        </section>
      </main>
    </div>
  );
}

export default App;
