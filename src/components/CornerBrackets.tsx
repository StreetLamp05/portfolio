'use client';

const CornerBrackets = () => {
    return (
        <>
            <div className="fixed top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange-500 opacity-30 z-50" />
        <div className="fixed top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-orange-500 opacity-30 z-50" />
        <div className="fixed bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-orange-500 opacity-30 z-50" />
        <div className="fixed bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange-500 opacity-30 z-50" />
            </>
    );
};

export default CornerBrackets;
