"use client";

import React, { useRef, useState, useEffect } from "react";
import { Grid, GridItem, Theme, VStack } from "@chakra-ui/react";
import { syncScroll } from "@/utils/functions";
import HoursOfTheDay from "@/components/HoursOfTheDay";
import DaysOfTheWeek from "@/components/DaysOfTheWeek";
import MainGrid from "@/components/MainGrid";
import { HEADER_HEIGTH_ASIDE_WIDTH, DAYS_HEIGTH_HOURS_WIDTH, MODALS } from "@/utils/constants"
import { Button } from "@/components/ui/button"
import EventModal from "@/components/EventModal";
import { useAuth, useTheme } from "@/components/Providers";
import ActiveModal from "@/components/ActiveModal";
import { useRouter } from "next/navigation";
import { Router } from "next/router";


const Dashboard = () => {
  const hoursOfTheDayRef = useRef<HTMLDivElement>(null);
  const mainGridRef = useRef<HTMLDivElement>(null);
  const [timeZone, setTimeZone] = useState<string>("");
  const [monday, setMonday] = useState<Date>(new Date());
  const [calendarId, setCalendarId] = useState<string>();
  const [calendarName, setCalendarName] = useState<string>();
  const [activeModal, setActiveModal] = useState<MODALS>(MODALS.NONE)


  useEffect(() => {
    const cleanup = syncScroll(hoursOfTheDayRef, mainGridRef);
    return cleanup;
  }, [])



  return <React.Fragment>
    <Grid
      templateRows={`${HEADER_HEIGTH_ASIDE_WIDTH}px ${DAYS_HEIGTH_HOURS_WIDTH}px repeat(8, 1fr)`}
      templateColumns={`${HEADER_HEIGTH_ASIDE_WIDTH}px ${DAYS_HEIGTH_HOURS_WIDTH}px repeat(14, 1fr)`}
      h="100vh"
      gap={0}
    >
      <GridItem gridArea="1 / 1 / 2 / -1" >
        1
      </GridItem>
      <GridItem gridArea="2 / 1 / -1 / 1" w="100%">
        <VStack
          maxW="100%"
          overflowX="auto"
        >
          <Button onClick={() => setActiveModal(MODALS.EVENT)}>Add Event</Button>
          <Button onClick={() => setActiveModal(MODALS.CALENDAR)}>Calendar</Button>
          <Button onClick={() => setActiveModal(MODALS.FRIENDS)}>Manage Friends</Button>
          {/* <Button onClick={toggleTheme}>Toggle Theme</Button> */}
          {activeModal}
        </VStack>
      </GridItem>
      <GridItem gridArea="2 / 3 / 3 / -1">
        <DaysOfTheWeek />
      </GridItem>
      <GridItem gridArea="2 / 2 / -1 / 3" h="100%">
        <HoursOfTheDay
          ref={hoursOfTheDayRef}
        />
      </GridItem>
      <GridItem gridArea="3 / 3 / -1 / -1" >
        <MainGrid
          ref={mainGridRef}
          monday={monday}
        />
      </GridItem>
    </Grid>
    {activeModal !== MODALS.NONE && <ActiveModal
      activeModal={activeModal}
      closeModal={() => setActiveModal(MODALS.NONE)}
    />
    }
  </React.Fragment>

};

export default Dashboard;
