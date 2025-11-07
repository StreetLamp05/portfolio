'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import GlitchText from '@/components/GlitchText';
import Image from 'next/image';

// @ts-ignore
const HeroSection = ({name, title, systemVersion}) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);

    return(
        <section className="relative min-h-screen flex items-center justify-center px-8">
            <motion.div style={{ opacity }} className="relative z-20 text-center max-w-4xl">
                {/* Scanning line effect */}
                <motion.div
                    initial={{ top: 0 }}
                    animate={{ top: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-6"
                >
                    <div className="text-xs text-blue-400 font-mono mb-4 tracking-widest">
                        {systemVersion}
                    </div>

                    <GlitchText className="text-7xl md:text-8xl font-bold tracking-tighter mb-8">
                        <Image src='/logo.png' alt='logo' width={100} height={100} className='mx-auto'/>
                        {name}
                    </GlitchText>
                    <div className="h-[1px] w-32 bg-blue-400 mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-gray-400 tracking-wide uppercase">
                        {title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-center gap-8 mt-12"
                >
                    <a href="#projects" className="border border-blue-400 px-8 py-3 hover:bg-blue-400 hover:text-black transition-all duration-300 uppercase tracking-wider text-sm">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-gray-700 px-8 py-3 hover:border-blue-400 transition-all duration-300 uppercase tracking-wider text-sm">
                        Contact
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-16 bg-gradient-to-b from-blue-400 to-transparent"
                />
            </motion.div>
        </section>
    );

}; // HeroSection

export default HeroSection;