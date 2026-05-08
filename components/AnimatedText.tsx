"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
    // Split text into words to retain natural browser line wrapping while animating piece-by-piece
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.04, 
                delayChildren: delay 
            },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 10, // Slight drop to fade upwards
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.p
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    <motion.span
                        variants={child}
                        style={{ display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 ? " " : null}
                </React.Fragment>
            ))}
        </motion.p>
    );
}
