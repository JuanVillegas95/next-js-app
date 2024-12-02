import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { BaseModalProps } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { getCalendarKeys } from "@/actions/calendarActions";

const CalendarModal: React.FC<BaseModalProps> = ({ closeModal }) => {
    const [calendarKeys, setCalendarKeys] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCalendarKeys = async () => {
            try {
                const keys = await getCalendarKeys();
                setCalendarKeys(keys);
            }
            catch (error) {
                console.error("Failed to fetch calendar keys:", error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchCalendarKeys();
    }, []);

    return <DialogRoot
        lazyMount
        modal
        closeOnEscape={false}
        onEscapeKeyDown={closeModal}
        onExitComplete={closeModal}
        onInteractOutside={closeModal}
        onPointerDownOutside={closeModal}
        placement="center"
        defaultOpen
    >
        <DialogContent >
            <DialogHeader display="flex" justifyContent={"space-around"}>
                <DialogTitle>Calendars</DialogTitle>
                <Button>Add Calendar</Button>
            </DialogHeader>
            <DialogBody>
                <VStack>
                    {isLoading
                        ? <div>Loading...</div>
                        : calendarKeys.map((calendarKey: string, i: number) => <div key={i}>{calendarKey}</div>)
                    }
                </VStack>
            </DialogBody>
            <DialogFooter>
                <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button>Save</Button>
            </DialogFooter>
            {/* <DialogCloseTrigger /> */}
        </DialogContent>
    </DialogRoot>
};

export default CalendarModal;