'use client'

import React from 'react';

import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { personalInfo } from '@/data/personalInfo';

import ParticleField from '@/components/ParticleField';
import HoloGrid from '@/components/HoloGrid';
import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection.jsx";

export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
    {/*bg effects */}
      <ParticleField />

        <HeroSection
        name={personalInfo.name}
        title={personalInfo.title}
        systemVersion={personalInfo.systemVersion}
        />

        <AboutSection
            about={personalInfo.about}
            details={personalInfo.details}
        />
    </div>
  );
}
