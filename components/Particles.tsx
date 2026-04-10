"use client";

import React, { useRef, useEffect } from "react";

interface ParticlesProps {
    className?: string;
    quantity?: number;
    color?: string; 
}

export function Particles({ className = "", quantity = 60 }: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const particleCount = isMobile ? Math.max(18, Math.floor(quantity * 0.35)) : quantity;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                // Cap DPR to reduce heavy redraw costs on mobile.
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = canvas.parentElement.clientWidth * dpr;
                canvas.height = canvas.parentElement.clientHeight * dpr;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
        };

        class Particle {
            angle: number;
            baseRadius: number;
            size: number;
            baseAlpha: number;
            alpha: number;
            radialSpeed: number;
            rotationSpeed: number;
            timeOffset: number;
            hueOffset: number;

            constructor(maxRadius: number) {
                // Determine position inside the donut structure
                this.angle = Math.random() * Math.PI * 2;
                
                // Inner radius = 40% of max, Outer radius = 100% of max
                this.baseRadius = maxRadius * (0.4 + Math.random() * 0.6);
                
                this.size = Math.random() * 3 + 1.5;
                this.baseAlpha = Math.random() * 0.6 + 0.4;
                this.alpha = this.baseAlpha;
                
                // Speeds for pulsing and rotating
                this.radialSpeed = Math.random() * 0.001 + 0.0005;
                this.rotationSpeed = (Math.random() - 0.5) * 0.0005; // Slow ambient orbit
                this.timeOffset = Math.random() * Math.PI * 2;
                
                // Color spread across individual particles
                this.hueOffset = Math.random() * 40 - 20; // +/- 20 degrees difference
            }

            draw(w: number, h: number, time: number) {
                if (!ctx) return;

                // Set center to the middle of the canvas bounding box
                const centerX = w / 2;
                const centerY = h / 2;

                // Orbit rotation
                const currentAngle = this.angle + time * this.rotationSpeed;
                
                // Pulse in and out across the radius
                const pulse = Math.sin(time * this.radialSpeed + this.timeOffset);
                const currentRadius = this.baseRadius * (1 + pulse * 0.15); // Expand/Contract by 15%

                // Calculate geometry
                const x = centerX + Math.cos(currentAngle) * currentRadius;
                const y = centerY + Math.sin(currentAngle) * currentRadius;

                // Smooth varying opacity
                this.alpha = this.baseAlpha * (0.5 + 0.5 * ((pulse + 1) / 2)); 

                // Dynamic Hue: Oscilliating between Teal (160), Blue (240), and Purple/Pink (320)
                const baseHue = 240 + Math.sin(time * 0.0003) * 80;
                const hue = (baseHue + this.hueOffset) % 360;
                
                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 85%, 65%, ${this.alpha})`;
                
                // Strong glowing bloom matched to the color
                ctx.shadowBlur = this.size * 4;
                ctx.shadowColor = `hsla(${hue}, 85%, 65%, ${this.alpha * 1.5})`;
                ctx.fill();
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            const w = canvas.parentElement?.clientWidth || window.innerWidth;
            const h = canvas.parentElement?.clientHeight || window.innerHeight;
            
            // Constrain outer bounds of the donut based on container height
            const maxRadius = Math.min(w, h) / 1.6; 
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(maxRadius));
            }
        };

        const animate = (time: number) => {
            const w = canvas.parentElement?.clientWidth || window.innerWidth;
            const h = canvas.parentElement?.clientHeight || window.innerHeight;
            
            // Clear prior frames
            ctx.clearRect(0, 0, w, h);
            
            particles.forEach((particle) => {
                particle.draw(w, h, time);
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        if (!prefersReducedMotion) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            const w = canvas.parentElement?.clientWidth || window.innerWidth;
            const h = canvas.parentElement?.clientHeight || window.innerHeight;
            ctx.clearRect(0, 0, w, h);
            particles.forEach((particle) => {
                particle.draw(w, h, 0);
            });
        }

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [quantity]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 block ${className}`}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
