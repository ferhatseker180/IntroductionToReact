import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function Main(){

  function handleSelect(selectedButton){
    console.log(selectedButton);
  }

  return (
    <div>
      <main>     
      <section id="core-concepts"> 
        <h2> Core Concepts</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
          <CoreConcept {...CORE_CONCEPTS[1]} /> {/* Daha kısa yol bu şekildedir böylece belirlenen indexdeki tüm propsları ilgili yerlerine aktarır */}
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu> 
            <TabButton onSelect={() => handleSelect('components')}> Components </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}> JSX Button </TabButton>
            <TabButton onSelect={() => handleSelect('props')}> Props Button </TabButton>
            <TabButton onSelect={() => handleSelect('state')}> State Button </TabButton>
          </menu>

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
