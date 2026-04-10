"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Chunk {
    text: string;
    className?: string;
}

interface TypewriterTextProps {
    chunks: Chunk[];
    delay?: number;
    speed?: number;
    cursorColor?: string;
}

export function TypewriterText({
    chunks,
    delay = 0,
    speed = 65, // ms per char (slower global default)
    cursorColor = "bg-blue-600"
}: TypewriterTextProps) {
    // Cache the initial chunks to prevent re-renders from restarting or mangling the animation.
    const savedChunks = useRef(chunks);
    const [progress, setProgress] = useState({ chunkIdx: 0, charIdx: 0 });
    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let timer: NodeJS.Timeout;

        const typeNextChar = () => {
            setProgress((prev) => {
                const currentChunk = savedChunks.current[prev.chunkIdx];
                if (!currentChunk) return prev; // Fully completed.

                let nextCharIdx = prev.charIdx + 1;
                let nextChunkIdx = prev.chunkIdx;

                if (nextCharIdx > currentChunk.text.length) {
                    nextChunkIdx++;
                    nextCharIdx = 1; // Begin typing the first character of the next chunk.
                }

                if (nextChunkIdx < savedChunks.current.length) {
                    const randomSpeed = speed + (Math.random() * 40 - 10);
                    timer = setTimeout(typeNextChar, randomSpeed);
                }

                return { chunkIdx: nextChunkIdx, charIdx: nextCharIdx };
            });
        };

        timer = setTimeout(() => {
            typeNextChar();
        }, delay);

        return () => clearTimeout(timer);
    }, [isInView, delay, speed]); // Discard 'chunks' dependency to stop hot-reload/prop tearing.

    const chunksToRender = savedChunks.current.map((chunk, idx) => {
        if (idx < progress.chunkIdx) return chunk; // Chunk is completely typed.
        if (idx === progress.chunkIdx) return { ...chunk, text: chunk.text.substring(0, progress.charIdx) };
        return { ...chunk, text: "" }; // Chunk hasn't started typing yet.
    });

    return (
        <span ref={containerRef} className="relative inline-block">
            {chunksToRender.map((chunk, idx) => (
                <span key={idx} className={chunk.className}>
                    {chunk.text}
                </span>
            ))}
            {/* Terminal-style Blinking Cursor */}
            <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "linear",
                    times: [0, 0.5, 0.5, 1]
                }}
                className={`inline-block w-[3px] h-[0.9em] align-middle ml-1 mb-[0.1em] ${cursorColor}`}
            />
        </span>
    );
}
