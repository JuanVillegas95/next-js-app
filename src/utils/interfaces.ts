export interface Event {
  eventId: string;
  date: string;
  startHours: number;
  startMinutes: number;
  endHours: number;
  endMinutes: number;
  color: string;
  icon: string;
  title: string;
  description: string;
  groupId: string | null;
  groupStarts: string | null;
  groupEnds: string | null;
}

export interface Calendar {
  eventIdToEvent: Map<string, Event>;
  dateToEventId: Map<string, Set<string>>;
  timeZone: string;
  monday: Date;
}

export interface User {
  email: string;
  username: string;
  friends: { email: string; username: string }[];
  calendars: Map<string, Calendar>;
}

export interface BaseModalProps {
  closeModal: () => void;
}
