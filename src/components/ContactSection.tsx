'use client';

import { motion } from 'framer-motion';

const ContactSection = ({ contact }) => {
    return (
        <section id="contact" className="relative py-32 px-8 border-t border-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-xs text-orange-500 font-mono mb-4 tracking-widest">
                    [COMMUNICATIONS.CHANNEL]
                </div>
                <h2 className="text-5xl font-bold mb-12 tracking-tight">CONTACT</h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-gray-800 p-12 hover:border-orange-500 transition-colors duration-300"
                >
                    <p className="text-gray-400 text-lg mb-8">
                        {contact.description}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        {contact.email && (
                            <a
                                href={`mailto:${contact.email}`}
                                className="border border-orange-500 px-8 py-3 hover:bg-orange-500 hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                Email
                            </a>
                        )}
                        {contact.github && (
                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-700 px-8 py-3 hover:border-orange-500 transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                GitHub
                            </a>
                        )}
                        {contact.linkedin && (
                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-700 px-8 py-3 hover:border-orange-500 transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                LinkedIn
                            </a>
                        )}
                        {contact.twitter && (
                            <a
                                href={contact.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-700 px-8 py-3 hover:border-orange-500 transition-all duration-300 uppercase tracking-wider text-sm"
                            >
                                Twitter
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
