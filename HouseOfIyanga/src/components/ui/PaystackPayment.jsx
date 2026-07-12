import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PaystackPop from '@paystack/inline-js';

const formatNaira = (amount) =>
    '₦' + amount.toLocaleString('en-NG');

const generateRef = () =>
    `IYANGA-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

/**
 * PaystackPayment
 * Props:
 *   amount        — retainer in Naira (e.g. 100000)
 *   serviceName   — display name (e.g. "The Nuptials")
 *   packagePrice  — full package price string (e.g. "₦200,000")
 *   onSuccess()   — called after successful charge
 *   onSkip()      — called when client chooses to pay later
 */
const PaystackPayment = ({ amount, serviceName, packagePrice, onSuccess, onSkip }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [skipWarning, setSkipWarning] = useState(false);

    const handlePay = () => {
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
        if (!publicKey) {
            setError('Payment is temporarily unavailable. Please contact us directly to complete your booking.');
            return;
        }
        setError('');
        setIsLoading(true);

        try {
            const popup = new PaystackPop();
            popup.newTransaction({
                key: publicKey,
                email: email.trim(),
                amount: amount * 100,   // Naira → kobo
                currency: 'NGN',
                reference: generateRef(),
                metadata: {
                    custom_fields: [
                        {
                            display_name: 'Service',
                            variable_name: 'service',
                            value: serviceName || 'Booking',
                        },
                    ],
                },
                onSuccess: () => {
                    setIsLoading(false);
                    onSuccess({ email: email.trim() });
                },
                onCancel: () => {
                    // User closed the popup — let them try again
                    setIsLoading(false);
                },
                onError: (err) => {
                    setIsLoading(false);
                    setError(
                        err?.message
                            ? `Payment error: ${err.message}`
                            : 'Something went wrong with the payment. Please try again.'
                    );
                },
            });
        } catch (err) {
            setIsLoading(false);
            setError('Could not initialise payment. Please check your connection and try again.');
        }
    };

    return (
        <motion.div
            key="payment"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 py-8"
        >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-playfairDisplay text-gray-800 mb-1.5">
                    Secure Your Date
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    A 50% non-refundable retainer is required to confirm your booking
                    and exclusively hold your date with House of Iyanga.
                </p>
            </div>

            {/* Booking summary */}
            <div className="border border-Secondary-theme/20 bg-Secondary-theme/5 rounded-sm px-4 py-4 mb-5">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <p className="text-xs tracking-wide uppercase font-manrope text-gray-400">Service Booked</p>
                        <p className="text-sm font-medium text-gray-700 mt-0.5">{serviceName || 'Booking'}</p>
                        {packagePrice && (
                            <p className="text-xs text-gray-400 mt-0.5">Full price: {packagePrice}</p>
                        )}
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-xs tracking-wide uppercase font-manrope text-gray-400">Retainer Due</p>
                        <p className="text-2xl font-semibold text-Secondary-theme mt-0.5">{formatNaira(amount)}</p>
                        <p className="text-xs text-gray-400">50% of total</p>
                    </div>
                </div>
            </div>

            {/* Email field */}
            <div className="mb-5">
                <label className="block text-xs font-manrope tracking-widest text-gray-400 uppercase mb-1.5">
                    Email Address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handlePay(); }}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-Secondary-theme placeholder-gray-300"
                />
                <p className="text-xs text-gray-300 mt-1">
                    Your Paystack receipt and booking confirmation will be sent here.
                </p>
            </div>

            {error && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-red-500 mb-4"
                >
                    {error}
                </motion.p>
            )}

            {/* Pay CTA */}
            <button
                onClick={handlePay}
                disabled={isLoading}
                className="w-full py-3 mb-3 bg-Secondary-theme text-white text-sm tracking-widest hover:bg-Primary-theme transition-colors disabled:opacity-60 disabled:cursor-wait"
            >
                {isLoading ? 'OPENING PAYMENT...' : `PAY ${formatNaira(amount)} →`}
            </button>

            {/* Trust signal */}
            <div className="flex items-center justify-center gap-1.5 text-gray-300 mb-5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <p className="text-xs">Secure payment powered by Paystack</p>
            </div>

            {/* Pay later escape hatch */}
            <div className="border-t border-gray-100 pt-4">
                {!skipWarning ? (
                    <button
                        onClick={() => setSkipWarning(true)}
                        className="w-full text-xs text-gray-300 hover:text-gray-500 transition-colors py-1"
                    >
                        I&rsquo;ll pay my retainer later
                    </button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 text-center"
                    >
                        <p className="text-xs text-amber-700 mb-3 leading-relaxed">
                            Your date is <span className="font-semibold">not confirmed</span> until the retainer is paid.
                            Dates are not held without payment per our booking terms.
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSkipWarning(false)}
                                className="flex-1 py-2 border border-Secondary-theme text-Secondary-theme text-xs tracking-wide hover:bg-Secondary-theme hover:text-white transition-colors rounded-sm"
                            >
                                Pay now
                            </button>
                            <button
                                onClick={onSkip}
                                className="flex-1 py-2 border border-gray-200 text-gray-400 text-xs hover:border-gray-300 transition-colors rounded-sm"
                            >
                                Skip anyway
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default PaystackPayment;
