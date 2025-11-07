'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    live?: string;
    thumbnail?: string; // /public/... or remote
};

type Props = Project & { delay?: number };

const ProjectCard = ({ title, description, tech, link, live, thumbnail, delay = 0 }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group"
        >
            <div className="relative overflow-hidden rounded-xl bg-black border border-gray-800 transition-all duration-300 hover:border-orange-500">
                {/* Inline layout on md+, stacked on mobile */}
                <div className="flex flex-col md:flex-row md:items-stretch">
                    {/* Thumbnail (fixed width on md+ to keep rows tidy) */}
                    <div className="relative w-full md:w-[220px] lg:w-[260px] shrink-0 bg-gray-900">
                        {/* keep aspect on mobile, fill height on md+ */}
                        <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
                            {thumbnail ? (
                                <Image
                                    src={thumbnail}
                                    alt={`${title} thumbnail`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 260px, 300px"
                                    priority={false}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                                    No thumbnail
                                </div>
                            )}
                            {/* Hover accent */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.25 }}
                                className="absolute top-0 left-0 h-full w-[3px] bg-orange-500 origin-top"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 tracking-wider uppercase">
                            {title}
                        </h3>

                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3 md:line-clamp-2">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-[11px] px-2.5 py-1 bg-gray-900 border border-gray-700 text-orange-400 font-mono"
                                >
                  {t}
                </span>
                            ))}
                        </div>

                        {(link || live) && (
                            <div className="flex gap-4">
                                {link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-orange-500 hover:text-orange-400 transition-colors border-b border-orange-500/0 hover:border-orange-500/100"
                                    >
                                        View Code:
                                    </a>
                                )}
                                {live && (
                                    <a
                                        href={live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-orange-500 hover:text-orange-400 transition-colors border-b border-orange-500/0 hover:border-orange-500/100"
                                    >
                                        Live Demo:
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Corner accent */}
                <div className="pointer-events-none absolute top-2 right-2 w-8 h-8 border-r border-t border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
