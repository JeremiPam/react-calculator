import { Container } from "@chakra-ui/react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Container display={"flex"} justifyContent={"center"}>
      <Calculator></Calculator>
    </Container>
  );
}

export default App;
