import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReservation } from '../../context/ReservationContext';
import CalendlyInlineWidget from './CalendlyInlineWidget';
import PaystackPayment from './PaystackPayment';
import { locationZoneMap, RETAINER_AMOUNTS, PACKAGE_FULL_PRICES } from '../../data/servicesData';

const CALENDLY_PARAMS = '?hide_gdpr_banner=1&primary_color=7A9CA5&text_color=1a1a1a&background_color=ffffff';
const STATES = Object.keys(locationZoneMap).sort();

// step progress bar widths per step
const PROGRESS = {
    location: '20%',
    calendly: '55%',
    payment:  '85%',
};

const ReservationModal = () => {
    const {
        isModalOpen, closeModal,
        selectedService, selectedKey,
        selectedUrl, bookingSuccess, onBookingSuccess,
    } = useReservation();

    const [step, setStep] = useState('location');   // 'location' | 'calendly' | 'payment'
    const [clientState, setClientState] = useState('');
    const [clientCity, setClientCity] = useState('');

    const retainerAmount = RETAINER_AMOUNTS[selectedKey] ?? null;
    const packagePrice   = PACKAGE_FULL_PRICES[selectedKey] ?? null;

    // Reset every time the modal opens
    useEffect(() => {
        if (isModalOpen) {
            setStep('location');
            setClientState('');
            setClientCity('');
        }
    }, [isModalOpen]);

    const zoneInfo = clientState ? locationZoneMap[clientState] : null;

    const locationLabel = clientState
        ? clientCity.trim() ? `${clientCity.trim()}, ${clientState}` : clientState
        : null;

    const prefill = locationLabel ? { customAnswers: { a1: locationLabel } } : {};

    const calendlyUrl = `${selectedUrl}${CALENDLY_PARAMS}`;

    // Called by Calendly when a time slot is confirmed
    const handleCalendlyScheduled = () => {
        if (retainerAmount) {
            setStep('payment');
        } else {
            // Enquiry only — no payment needed
            onBookingSuccess();
        }
    };

    // Called by Paystack on successful charge
    const handlePaymentSuccess = () => {
        onBookingSuccess();
    };

    // Called when client skips retainer payment
    const handlePaymentSkip = () => {
        onBookingSuccess();
    };

    const headerSubtitle = () => {
        if (bookingSuccess) return null;
        if (step === 'location') return 'Step 1 — Your Location';
        if (step === 'calendly') return selectedService ? `Service: ${selectedService}` : 'House of Iyanga — Beauty & Wellness';
        if (step === 'payment')  return 'Step 3 — Secure Your Date';
        return null;
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
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 24 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 24 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col"
                        style={{ maxHeight: '90vh' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-Secondary-theme px-6 py-4 text-white flex justify-between items-center shrink-0">
                            <div>
                                <h2 className="text-xl font-manrope tracking-wide">
                                    {bookingSuccess ? 'Booking Confirmed ✨' : 'Make a Reservation'}
                                </h2>
                                {headerSubtitle() && (
                                    <p className="text-xs text-white/70 mt-0.5 font-manrope">
                                        {headerSubtitle()}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={closeModal}
                                aria-label="Close modal"
                                className="text-white/80 hover:text-white transition-colors focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Progress bar */}
                        {!bookingSuccess && (
                            <div className="h-0.5 w-full bg-gray-100 shrink-0">
                                <motion.div
                                    animate={{ width: bookingSuccess ? '100%' : PROGRESS[step] ?? '100%' }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="h-full bg-Secondary-theme"
                                />
                            </div>
                        )}

                        {/* Body */}
                        <div className="overflow-y-auto flex-1">
                            {bookingSuccess ? (
                                /* ── Success Screen ── */
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col items-center justify-center text-center px-8 py-16 gap-5"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                                        className="w-20 h-20 rounded-full bg-Secondary-theme/10 flex items-center justify-center"
                                    >
                                        <svg className="w-10 h-10 text-Secondary-theme" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-2xl font-playfairDisplay font-semibold text-gray-800">
                                        You&rsquo;re all booked!
                                    </h3>
                                    <p className="text-gray-500 max-w-sm leading-relaxed">
                                        {retainerAmount
                                            ? "Your retainer has been processed and your date is exclusively confirmed. Check your email for your Paystack receipt and Calendly calendar invite."
                                            : "Your consultation has been scheduled. We\u2019ll be in touch with all the details. We can\u2019t wait to connect with you."}
                                    </p>
                                    <div className="w-12 h-0.5 bg-Secondary-theme/40 rounded-full" />
                                    <button
                                        onClick={closeModal}
                                        className="mt-2 px-8 py-2.5 bg-Secondary-theme text-white text-sm tracking-widest hover:bg-Primary-theme transition-colors"
                                    >
                                        CLOSE
                                    </button>
                                </motion.div>

                            ) : step === 'location' ? (
                                /* ── Step 1: Location ── */
                                <motion.div
                                    key="location"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    transition={{ duration: 0.25 }}
                                    className="px-6 py-8"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-lg font-playfairDisplay text-gray-800 mb-1.5">
                                            Where is your event located?
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            We&rsquo;re based in{' '}
                                            <span className="text-Secondary-theme font-medium">Asaba</span>
                                            , but we&rsquo;re without borders for our clients — we travel to you.
                                            Your state helps us confirm logistics and show you an accurate fee estimate.
                                        </p>
                                    </div>

                                    {/* State dropdown */}
                                    <div className="mb-4">
                                        <label className="block text-xs font-manrope tracking-widest text-gray-400 uppercase mb-1.5">
                                            State
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={clientState}
                                                onChange={(e) => setClientState(e.target.value)}
                                                className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-Secondary-theme bg-white appearance-none pr-8"
                                            >
                                                <option value="">Select your state...</option>
                                                {STATES.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Zone + fee */}
                                    <AnimatePresence>
                                        {zoneInfo && (
                                            <motion.div
                                                key="zone"
                                                initial={{ opacity: 0, y: -6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.2 }}
                                                className="mb-4 border border-Secondary-theme/20 bg-Secondary-theme/5 rounded-sm px-4 py-3.5"
                                            >
                                                <div className="flex justify-between items-start gap-4">
                                                    <div>
                                                        <p className="text-xs tracking-wide uppercase font-manrope text-gray-400">Logistics Zone</p>
                                                        <p className="text-sm font-medium text-gray-700 mt-0.5">{zoneInfo.zone}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs tracking-wide uppercase font-manrope text-gray-400">Est. Travel Fee</p>
                                                        <p className="text-sm font-semibold text-Secondary-theme mt-0.5">{zoneInfo.fee}</p>
                                                    </div>
                                                </div>
                                                {zoneInfo.note && (
                                                    <p className="text-xs text-gray-400 mt-2.5 pt-2.5 border-t border-Secondary-theme/10">
                                                        {zoneInfo.note}
                                                    </p>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* City / Area */}
                                    <div className="mb-8">
                                        <label className="block text-xs font-manrope tracking-widest text-gray-400 uppercase mb-1.5">
                                            City / Area{' '}
                                            <span className="normal-case text-gray-300">(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={clientCity}
                                            onChange={(e) => setClientCity(e.target.value)}
                                            placeholder="e.g. Warri, Onitsha, Ikeja..."
                                            className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-Secondary-theme placeholder-gray-300"
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setStep('calendly')}
                                            className="px-5 py-2.5 border border-gray-200 text-sm text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors rounded-sm"
                                        >
                                            Skip
                                        </button>
                                        <button
                                            onClick={() => setStep('calendly')}
                                            disabled={!clientState}
                                            className="flex-1 py-2.5 bg-Secondary-theme text-white text-sm tracking-widest hover:bg-Primary-theme transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            CONTINUE TO BOOKING →
                                        </button>
                                    </div>
                                </motion.div>

                            ) : step === 'calendly' ? (
                                /* ── Step 2: Calendly ── */
                                <motion.div
                                    key="calendly"
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <CalendlyInlineWidget
                                        url={calendlyUrl}
                                        onEventScheduled={handleCalendlyScheduled}
                                        prefill={prefill}
                                    />
                                </motion.div>

                            ) : step === 'payment' ? (
                                /* ── Step 3: Payment ── */
                                <PaystackPayment
                                    amount={retainerAmount}
                                    serviceName={selectedService}
                                    packagePrice={packagePrice}
                                    onSuccess={handlePaymentSuccess}
                                    onSkip={handlePaymentSkip}
                                />
                            ) : null}
                        </div>

                        {/* Bottom accent bar */}
                        {!bookingSuccess && step === 'calendly' && (
                            <div className="h-1 w-full bg-gradient-to-r from-Secondary-theme via-Primary-theme to-Secondary-theme shrink-0" />
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ReservationModal;
