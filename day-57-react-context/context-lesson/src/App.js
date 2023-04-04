import "./App.css";
import { UserProvider } from "./contexts/userContext";
import Layout from "./components/Layout";
import Heading from "./components/Heading";
import Section from "./components/Section";
function App() {
  const userName = "turbat";
  return (
    <div className="App">
      <h2>Day-57 React--Context</h2>

      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>

          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>

            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
