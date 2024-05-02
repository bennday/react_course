//useState is a hook that allows you to add state to a functional component
import { useState } from "react";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js";

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
