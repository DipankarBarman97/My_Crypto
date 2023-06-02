// import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

import '../styles/Loader.css'

const Loader = () => {
  return (
    // <VStack h="90vh" justifyContent={"center"}>
    //   <Box transform={"scale(3)"}>
    //     <Spinner size={"xl"} />
    //   </Box>
    // </VStack>


    <div className="load">
      <div className="loader"></div>
    </div>


  );
};

export default Loader;