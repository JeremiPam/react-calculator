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
      switch (input) {
        case "+":
          console.log(displayOperation);
          let temp =
            Number(displayOperation.replace(/\D/g, "")) + Number(display);
          setDisplayOperation(temp + "+");
          setDisplay("0");
          break;
        case "=":
          let result = displayOperation + display;
          console.log(result);
          setDisplay(eval(result));
          setDisplayOperation("");
          break;
      }
    }
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/", "="];
  return (
    <Grid
      bg="cyan"
      h={"400px"}
      w={"400px"}
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={1}
      padding={"5px"}
    >
      <GridItem colSpan={3} bg={"red"}>
        <Text>{displayOperation}</Text>
        <Text>{display}</Text>
      </GridItem>
      <GridItem colSpan={1} rowSpan={5}>
        {operations.map((op) => (
          <Button width="100%" height="20%" onClick={() => handleClick(op)}>
            {op}
          </Button>
        ))}
      </GridItem>
      <GridItem colSpan={3} rowSpan={3} bg={"yellow"}>
        <Grid templateColumns="repeat(3, 1fr)" height={"100%"}>
          {numbers.map((num) => (
            <GridItem>
              <Button
                width="100%"
                height="100%"
                onClick={() => handleClick(num.toString())}
              >
                {num}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem>
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
      <GridItem>
        <Button width="100%" height="100%" onClick={() => handleClick("0")}>
          0
        </Button>
      </GridItem>
      <GridItem>
        <Button width="100%" height="100%" onClick={() => setDisplay("0")}>
          C
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Calculator;
