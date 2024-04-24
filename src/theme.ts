import { defineStyle, defineStyleConfig,extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          variant: "solid",
        },
      },
    },
  });
  export default theme;