import React, { forwardRef, useRef, useState } from "react";
import { Grid, Box } from "@chakra-ui/react";
import { HOURS_HEIGHT_VH } from "@/utils/constants";
import { Event } from "@/utils/interfaces";
import { addDateBy, formatDate } from "@/utils/functions";

interface MainGridProps {
    monday: Date;
}

const MainGrid = forwardRef<HTMLDivElement, MainGridProps>(({ monday }, ref) => {
    const [eventIdToEvent, setEventIdToEvent] = useState<Map<string, Event>>(new Map());
    const [dateToEventId, setDateToEventId] = useState<Map<string, Set<string>>>(new Map());


    const columnDivRefs: React.RefObject<HTMLDivElement>[] = new Array(7)
        .fill(null)
        .map(() => useRef<HTMLDivElement>(null));

    return (
        <Grid
            ref={ref}
            templateColumns="repeat(7, 1fr)"
            border="1px solid black"
            overflow="scroll"
            gap="0px"
            maxHeight="calc(100vh - (10vh))"
            position="relative"
            h="100%"
        >
            {columnDivRefs.map((_, i: number) => {
                const columnDate: Date = addDateBy(monday, i);
                const formattedDate: string = formatDate(columnDate);
                const eventIds: string[] = Array.from(dateToEventId.get(formattedDate) || []);

                return <React.Fragment key={i}>
                    {Array.from({ length: 48 }, (_, j) => (
                        <Box
                            key={`${i}-${j}`}
                            h={`calc(${HOURS_HEIGHT_VH}vh)`}
                            w="100%"
                            border="black 1px solid"
                            flexShrink={0}
                        >
                            {eventIds.map((eventId: string, k: number) => <Box key={`${i}-${j}-${k}`}>
                            </Box>
                            )}
                        </Box>
                    ))}
                </React.Fragment>
            })}

        </Grid>
    );
},
);

export default MainGrid;
