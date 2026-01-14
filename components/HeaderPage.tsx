import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function headerPage() {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white bg-teal-700 rounded-lg" />
          </div> */}
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <span className="text-xl font-bold text-foreground">DermaLytica</span>
        </motion.div>
      </div>
    </header>
  );
}
