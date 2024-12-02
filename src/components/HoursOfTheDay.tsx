import { Box, VStack } from "@chakra-ui/react";
import { generate24HourIntervals } from "@/utils/functions";
import { forwardRef } from "react";
import { HOURS_HEIGHT_VH, DAYS_HEIGTH_HOURS_WIDTH } from "@/utils/constants";

const HoursOfTheDay = forwardRef<HTMLDivElement>((props, ref) => {

    return <VStack
        ref={ref}
        overflowY="scroll"
        gap="0px"
        maxH={`calc(100% - ${DAYS_HEIGTH_HOURS_WIDTH}px)`}
        mt={`${DAYS_HEIGTH_HOURS_WIDTH}px`}
    >
        {generate24HourIntervals().map((hour: string, index: number) => (
            <Box
                key={index + hour}
                textAlign="center"
                textJustify="center"
                h={`${HOURS_HEIGHT_VH}vh`}
                flexShrink="0"
            >
                {hour}
            </Box>
        ))}
    </VStack>
});

export default HoursOfTheDay;
