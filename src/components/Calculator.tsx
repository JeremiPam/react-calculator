import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const Calculator = () => {
  const [display, changeDisplay] = useState(0);

  function handleNumberClick(number: number) {
    changeDisplay(number);
  }

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
      <GridItem colSpan={3}>
        <Text>{display}</Text>
      </GridItem>
      <GridItem>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          +
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(1)}
        >
          1
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(2)}
        >
          2
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(3)}
        >
          3
        </Button>
      </GridItem>
      <GridItem>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          -
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(4)}
        >
          4
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(5)}
        >
          5
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(6)}
        >
          6
        </Button>
      </GridItem>
      <GridItem>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          *
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(7)}
        >
          7
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(8)}
        >
          8
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(9)}
        >
          9
        </Button>
      </GridItem>
      <GridItem>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          /
        </Button>
      </GridItem>
      <GridItem>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          ,
        </Button>
      </GridItem>
      <GridItem>
        <Button
          width={"100%"}
          height={"100%"}
          borderRadius={0}
          onClick={() => handleNumberClick(0)}
        >
          0
        </Button>
      </GridItem>
      <GridItem colSpan={2}>
        <Button width={"100%"} height={"100%"} borderRadius={0}>
          =
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Calculator;
