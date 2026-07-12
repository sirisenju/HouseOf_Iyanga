import React, { createContext, useContext, useState } from 'react';
import { CALENDLY_URLS } from '../data/servicesData';

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedKey, setSelectedKey] = useState('general');
    const [selectedUrl, setSelectedUrl] = useState(CALENDLY_URLS.general);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    /**
     * openModal(serviceName?, calendlyKey?)
     *  - serviceName: display name shown in modal header
     *  - calendlyKey: key from CALENDLY_URLS (e.g. "nuptials", "partyExtras")
     *                 falls back to "general" if omitted
     */
    const openModal = (service = null, calendlyKey = 'general') => {
        setSelectedService(service);
        setSelectedKey(calendlyKey);
        setSelectedUrl(CALENDLY_URLS[calendlyKey] ?? CALENDLY_URLS.general);
        setBookingSuccess(false);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
        setTimeout(() => {
            setSelectedService(null);
            setSelectedKey('general');
            setSelectedUrl(CALENDLY_URLS.general);
            setBookingSuccess(false);
        }, 400);
    };

    const onBookingSuccess = () => {
        setBookingSuccess(true);
    };

    return (
        <ReservationContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
                selectedService,
                selectedKey,
                selectedUrl,
                bookingSuccess,
                onBookingSuccess,
            }}
        >
            {children}
        </ReservationContext.Provider>
    );
}

export function useReservation() {
    return useContext(ReservationContext);
}
