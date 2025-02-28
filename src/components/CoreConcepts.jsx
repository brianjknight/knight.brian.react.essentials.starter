import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* multiple components with dynamic props */}
        {/* <CoreConcept
              title="Components"
              description="The core UI building blocks"
              image={componentsImg}
            />
            <CoreConcept // imported from data.js
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

        {/* dynamically generating components */}
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept}></CoreConcept>
        ))}
      </ul>
    </section>
  );
}
