'use client';

import { motion } from 'framer-motion';

// @ts-ignore
const SkillsSection = ({ skills }) => {
    return (
        <section className="relative py-32 px-8 border-t border-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-xs text-blue-400 font-mono mb-4 tracking-widest">
                    [TECHNICAL.CAPABILITIES]
                </div>
                <h2 className="text-5xl font-bold mb-16 tracking-tight">SKILLS</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillSet, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-gray-800 p-6 hover:border-blue-400 transition-colors duration-300"
                        >
                            <h3 className="text-blue-400 font-mono text-sm mb-6 tracking-widest">
                                {skillSet.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillSet.items.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-gray-400 flex items-center">
                                        <span className="w-1 h-1 bg-blue-400 mr-3" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
