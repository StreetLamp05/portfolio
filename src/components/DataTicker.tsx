'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DataTicker = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const messages = [
            'SYSTEM.STATUS > OPERATIONAL',
            'NEURAL.LINK > ACTIVE',
            'PROTOCOLS > INITIALIZED',
            'SECURITY.LEVEL > MAXIMUM',
            'MENTAT.COMPUTATION > RUNNING'
        ];

        const interval = setInterval(() => {
            setData(prev => {
                const newData = [...prev, messages[Math.floor(Math.random() * messages.length)]];
                return newData.slice(-3);
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-4 right-4 text-orange-500 font-mono text-xs space-y-1 z-50 opacity-40">
            <AnimatePresence>
                {data.map((msg, idx) => (
                    <motion.div
                        key={`${msg}-${idx}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-right"
                    >
                        {msg}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default DataTicker;
