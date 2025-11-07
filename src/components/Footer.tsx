'use client';

// @ts-ignore
const Footer = ({ copyright, tagline }) => {
    return (
        <footer className="relative py-12 px-8 border-t border-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <div className="font-mono">
                    {copyright}
                </div>
                <div className="font-mono mt-4 md:mt-0">
                    {tagline}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
