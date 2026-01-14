"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Análisis Visual",
      description:
        "Utiliza inteligencia artificial para analizar características visuales de las lesiones cutáneas.",
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description:
        "Obtén una evaluación preliminar en cuestión de segundos para orientarte.",
    },
    {
      icon: Shield,
      title: "Privacidad Garantizada",
      description:
        "Tu imagen no se almacena y el procesamiento es completamente confidencial.",
    },
  ];

  return (
    <section className="mb-16 ">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold text-foreground text-center mb-8 pt-10"
      >
        ¿Cómo funciona?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={0.6 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
