import React, { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <ReservationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </ReservationContext.Provider>
    );
}

export function useReservation() {
    return useContext(ReservationContext);
}
