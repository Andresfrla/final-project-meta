import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      p={4}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
      align="start"
      boxShadow="lg"
      color="black"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="start" spacing={2}>
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack justify="flex-start" w="100%">
        <Text color="teal.500">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="teal.500" />
      </HStack>
    </VStack>
  );
};

export default Card;
