'use client'

import React from 'react';

import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { personalInfo } from '@/data/personalInfo';

import ParticleField from '@/components/ParticleField';




export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
    {/*bg effects */}
      <ParticleField />
    </div>
  );
}
