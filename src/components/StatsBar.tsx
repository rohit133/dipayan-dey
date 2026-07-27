"use client";

import React from "react";
import { motion } from "framer-motion";

import { heroData } from "@/lib/data";

const StatsBar: React.FC = () => {
    return (
        <section className="section-shell py-10 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="section-inner grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
                {heroData.stats.map((stat) => (
                    <div key={stat.label} className="surface-card-static p-4 sm:p-5">
                        <div className="type-stat">{stat.value}</div>
                        <p className="type-stat-label mt-1">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default StatsBar;
