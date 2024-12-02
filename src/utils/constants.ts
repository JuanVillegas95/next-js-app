import { Event, User } from "./interfaces";
import { getMostRecentMonday } from "@/utils/functions";

export const HEADER_HEIGTH_ASIDE_WIDTH: number = 64; //multiple of 8, originally was set to 64
export const DAYS_HEIGTH_HOURS_WIDTH: number = 84;

export const HOURS_HEIGHT_VH: number = 4.16;
export const LEFT_MOUSE_CLICK: number = 0;
export const DAYS: string[] = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export const enum MODALS {
  NONE,
  EVENT,
  CALENDAR,
  LOADING,
  FRIENDS,
}

export const USER_ID: string = "BtXktmE5bOU5RHtNlw9vji9tcV23";
