import { Button } from "@/components/ui/button"
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
import { useState } from "react"

interface EventModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const EventModal: React.FC<EventModalProps> = ({ open, setOpen }) => {
    return (
        <DialogRoot
            lazyMount
            modal
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
            placement="center"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                </DialogHeader>
                <DialogBody>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default EventModal;