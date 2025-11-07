'use client'

import { motion } from 'framer-motion';

// @ts-ignore
const AboutSection = ({ about, details }) => {
    return (
        <section className="relative py-32 px-8 border-t border-gray-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-xs text-orange-500 font-mono mb-4 tracking-widest">
                        [PERSONAL.INFO]
                    </div>
                    <h2 className="text-5xl font-bold mb-12 tracking-tight">ABOUT</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                                {about.paragraph1}
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {about.paragraph2}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {details.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center border-b border-gray-800 pb-4"
                                >
                                    <span className="text-orange-500 font-mono text-sm">{item.label}</span>
                                    <span className="text-gray-300">{item.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
};

export default AboutSection;