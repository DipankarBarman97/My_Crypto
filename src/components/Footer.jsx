import { Box, Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
  } from 'react-icons/ai';


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} size={'md'} >About us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very reasonable price.
          </Text>
        </VStack>

<VStack>

<Heading size={'md'} mb={'2'}>
  Social handles
</Heading>

<HStack>
  <Button variant={'link'} colorScheme={'pink'} >
    <a target="blank" href="https://instagram.com/dipankar.db37">
      <AiFillInstagram size={'3vmax'} />
    </a>
  </Button>

  <Button variant={'link'} colorScheme={'white'} >
    <a target="blank" href="https://github.com/DipankarBarman97">
      <AiFillGithub size={'3vmax'} />
    </a>
  </Button>

  <Button variant={'link'} colorScheme={'linkedin'} >
    <a
      target="blank"
      href="https://www.linkedin.com/in/dipankarbarman2607/"
    >
      <AiFillLinkedin size={'3vmax'} />
    </a>
  </Button>

  <Button variant={'link'} colorScheme={'red'} >
    <a target="blank" href="https://youtube.com/@dipankarbarman5307">
      <AiFillYoutube  size={'3vmax'} />
    </a>
  </Button>
</HStack>

</VStack>

      </Stack>
    </Box>
  );
};

export default Footer;