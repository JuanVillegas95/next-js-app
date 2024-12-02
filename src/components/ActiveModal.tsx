import { Button } from "@/components/ui/button"
import { Suspense, useState } from "react"
import { MODALS } from "@/utils/constants";
import CalendarModal from "./CalendarModal";
import FriendsModal from "./FriendsModal";


interface ActiveModalProps {
    activeModal: MODALS;
    closeModal: () => void;
}

const ActiveModal: React.FC<ActiveModalProps> = ({ activeModal, closeModal }) => {

    const retrunModal = (): JSX.Element | null => {
        switch (activeModal) {
            case MODALS.CALENDAR:
                return <CalendarModal closeModal={closeModal} />
            case MODALS.EVENT:
                return <></>
            case MODALS.FRIENDS:
                return <FriendsModal closeModal={closeModal} />
            case MODALS.LOADING:
                return <></>
            default:
                return null;
        }
    };

    return retrunModal()
};

export default ActiveModal;