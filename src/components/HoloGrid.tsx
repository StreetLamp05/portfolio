'use client';

const HoloGrid =() => {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
            <div className="absolute inset-0" style={{
                backgroundImage: `
                linear-gradient(rgba(255, 80, 40, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 80, 40, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
            }} />
        </div>
    );
};

export default HoloGrid;