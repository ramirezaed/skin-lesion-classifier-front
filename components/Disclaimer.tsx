import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const DisclaimerBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-3xl mx-auto px-4"
    >
      <div className="bg-orange-100 border border-orange-200 rounded-xl p-4 flex gap-3">
        <div className="shrink-0">
          <AlertTriangle className="w-5 h-5 text-orange-500 " />
        </div>
        <div className="text-sm">
          <p className="font-semibold text-warning-foreground mb-1">
            Aviso Importante
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Esta herramienta es{" "}
            <span className="font-medium text-foreground">
              únicamente con fines educativos
            </span>{" "}
            y no sustituye el diagnóstico médico profesional. Los resultados no
            están avalados científicamente.
            <span className="font-medium text-foreground">
              {" "}
              Consulte siempre con un dermatólogo
            </span>{" "}
            para cualquier preocupación sobre su piel.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DisclaimerBanner;
