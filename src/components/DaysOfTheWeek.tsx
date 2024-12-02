import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { DAYS } from "@/utils/constants";

const DaysOfTheWeek = () => <HStack
  w="100%"
  h="100%"
  gap="0"
>
  {DAYS.map((day: string, index: number) => (
    <Box
      key={index + day}
      border="1px solid black"
      textAlign="center"
      flex={1}
    >
      {day}
    </Box>
  ))}
</HStack>

export default DaysOfTheWeek;
