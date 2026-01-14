"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="text-center py-8 border-t border-amber-100"
    >
      <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
        Este modelo es únicamente educativo y no constituye un diagnóstico
        médico. Los resultados no están avalados científicamente ni validados
        clínicamente.
        <strong className="text-foreground">
          {" "}
          Siempre consulte con un profesional de la salud
        </strong>{" "}
        para cualquier preocupación dermatológica.
      </p>
      <p className="text-xs text-muted-foreground mt-4">
        © 2026 DermaScan - Herramienta Educativa
      </p>
    </motion.footer>
  );
}
