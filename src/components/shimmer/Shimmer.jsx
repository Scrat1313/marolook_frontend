import React from 'react';

const Shimmer = ({className}) => (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
        <div
            className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200"/>
    </div>
);

export default Shimmer;