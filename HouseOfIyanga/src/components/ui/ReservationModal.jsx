import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReservation } from '../../context/ReservationContext';

const ReservationModal = () => {
    const { isModalOpen, closeModal } = useReservation();
    const modalRef = useRef();

    // Close on outside click
    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleBackdropClick}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        ref={modalRef}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden"
                    >
                        <div className="bg-Secondary-theme p-6 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-manrope">Make a Reservation</h2>
                            <button onClick={closeModal} className="text-white hover:text-gray-200 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all" placeholder="+123..." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                        <select className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all bg-white">
                                            <option>Spa & Massage</option>
                                            <option>Hair Styling</option>
                                            <option>Full Makeup</option>
                                            <option>Body Treatment</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                    <input type="date" className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                    <textarea className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-Secondary-theme focus:border-transparent outline-none transition-all h-24" placeholder="Any special requests?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-Secondary-theme text-white py-3 font-semibold hover:bg-Primary-theme transition-colors mt-2">
                                    CONFIRM BOOKING
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ReservationModal;
