// components/SoundLink.tsx
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import soundUrl from './In.mp3';

interface SoundLinkProps extends LinkProps {
    children: React.ReactNode;
}

export const SoundInLink: React.FC<SoundLinkProps> = ({ children, to, ...props }) => {
    const playSound = () => {
        const audio = new Audio(soundUrl);
        audio.play();
    };

    return (
        <Link
            to={to}
            {...props}
            onClick={() => {
                playSound();
            }}
        >
            {children}
        </Link>
    );
};
