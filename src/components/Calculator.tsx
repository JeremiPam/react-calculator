import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [displayOperation, setDisplayOperation] = useState("");
  function handleClick(input: string) {
    if (!isNaN(Number(input))) {
      if (display === "0") {
        setDisplay(input);
      } else {
        setDisplay(display + input);
      }
    } else {
      let temp = displayOperation + display;
      switch (input) {
        case "+":
          setDisplayOperation(eval(temp) + "+");
          setDisplay("0");
          break;
        case "-":
          setDisplayOperation(eval(temp) + "-");
          setDisplay("0");
          break;
        case "*":
          setDisplayOperation(eval(temp) + "*");
          setDisplay("0");
          break;
        case "/":
          setDisplayOperation(eval(temp) + "/");
          setDisplay("0");
          break;
        case "=":
          setDisplay(eval(temp));
          setDisplayOperation("");
          break;
      }
    }
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/", "="];
  return (
    <Grid
      bg="black"
      h={"400px"}
      w={"400px"}
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={1}
      padding={"5px"}
    >
      <GridItem colSpan={3} id="display" bgColor={"white"}>
        <Text>{displayOperation}</Text>
        <Text fontSize={"160%"} textAlign={"center"}>
          {display}
        </Text>
      </GridItem>
      <GridItem colSpan={1} rowSpan={5} id="operations">
        <Grid templateColumns="repeat(1, 1fr)" height={"100%"} gap={1}>
          {operations.map((op) => (
            <GridItem>
              <Button
                backgroundColor={"orange"}
                width="100%"
                height="100%"
                onClick={() => handleClick(op)}
              >
                {op}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem colSpan={3} rowSpan={3} id="numbers">
        <Grid templateColumns="repeat(3, 1fr)" height={"100%"} gap={1}>
          {numbers.map((num) => (
            <GridItem id={num.toString()}>
              <Button
                width="100%"
                height="100%"
                variant={"solid"}
                onClick={() => handleClick(num.toString())}
              >
                {num}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem id="dot">
        <Button
          width="100%"
          height="100%"
          onClick={() => {
            if (!display.includes(".")) setDisplay(display + ".");
          }}
        >
          .
        </Button>
      </GridItem>
      <GridItem id="numbers">
        <Button width="100%" height="100%" onClick={() => handleClick("0")}>
          0
        </Button>
      </GridItem>
      <GridItem id="clearbtn">
        <Button
          width="100%"
          height="100%"
          onClick={() => {
            setDisplay("0");
            setDisplayOperation("");
          }}
        >
          C
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Calculator;
