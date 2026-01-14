"use client";
import { motion } from "framer-motion";
import DisclaimerBanner from "components/Disclaimer";
export default function Hero() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Analiza tu piel con
          <span className="text-primary block mt-2 text-teal-600">
            inteligencia artificial
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Sube una foto de cualquier mancha o lesión en tu piel y obtén una
          evaluación educativa sobre sus características.
        </p>
      </motion.div>

      <div className="mb-12">
        <DisclaimerBanner />
      </div>
    </div>
  );
}
