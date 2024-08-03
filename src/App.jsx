import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data";

function Main() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {/* Aşağıdaki gibi map yöntemiyle sayısını bilmediğimiz componentleri otomatik şekilde ekrana listeleyebiliriz */}
            {/* Böylece verilerin herhangisinde sorun olursa tasarım buna adapte olacak şekilde dizayn edilir */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              {" "}
              Components{" "}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>
              {" "}
              JSX Button{" "}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>
              {" "}
              Props Button{" "}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>
              {" "}
              State Button{" "}
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <p> Please Select Topic </p>
          ) : (
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p> {EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
