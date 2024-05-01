
//import CoreConcept.jsx
import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* you can use the map function to iterate over an array and return a new array with the results of the function */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
