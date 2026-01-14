import {
  AlertTriangle,
  CheckCircle,
  HeartPulse,
  CalendarClock,
  Sparkles,
  Shield,
  Brain,
} from "lucide-react";

export default function DetectionDisplay({ data }: { data: any }) {
  const prediction = data.predictions[0];
  const isMalignant = prediction.class.toLowerCase() === "malignant";
  const confidencePercent = (prediction.confidence * 100).toFixed(2);

  // Colores y mensajes según el resultado
  const resultConfig = {
    benign: {
      gradient: "from-emerald-100 via-teal-50 to-cyan-50",
      color: "text-teal-700",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100",
      icon: CheckCircle,
      title: "¡Buenas noticias!",
      subtitle: "El análisis sugiere características benignas",
      message:
        "Tu lunar presenta patrones que comúnmente se asocian con benignidad.",
      reassurance:
        "Continúa con tus revisiones periódicas y mantén hábitos de protección solar.",
      emotion: "😊",
    },
    malignant: {
      gradient: "from-amber-50 via-orange-50 to-rose-50",
      color: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      icon: AlertTriangle,
      title: "Atención preventiva",
      subtitle:
        "Se detectaron características que requieren evaluación profesional",
      message:
        "Tu lunar presenta patrones que comúnmente se asocian con malignidad .",
      reassurance:
        "La detección temprana es clave. Muchos casos tienen excelente pronóstico.",
      emotion: "🩺",
    },
  };

  const config = isMalignant ? resultConfig.malignant : resultConfig.benign;
  const Icon = config.icon;

  return (
    <div className="max-w-md mx-auto bg-linear-to-b from-white to-neutral-50 rounded-3xl shadow-xl overflow-hidden border border-neutral-200 transition-all duration-500 hover:shadow-2xl">
      {/* Header con enfoque humano */}
      <div className={`p-8 ${config.gradient} relative overflow-hidden`}>
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Brain className="w-full h-full text-neutral-600" />
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <HeartPulse className={`${config.color}`} size={20} />
              <span className="text-sm font-semibold tracking-wider text-neutral-600">
                ANÁLISIS DERMATOLÓGICO
              </span>
            </div>
            <div className="text-2xl">{config.emotion}</div>
          </div>

          <div className="flex items-start gap-4 mt-2">
            <div
              className={`p-3 rounded-2xl ${config.bgColor} border ${config.borderColor}`}
            >
              <Icon className={`${config.color}`} size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
                {config.title}
              </h1>
              <p className="text-base text-neutral-700 mt-2">
                {config.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-8 space-y-8">
        {/* Mensaje personalizado */}
        <div className="bg-linear-to-r from-white to-neutral-50 p-6 rounded-2xl border border-neutral-100">
          <div className="flex items-start gap-3">
            <Sparkles className="text-amber-500 mt-1" size={20} />
            <div>
              <p className="text-neutral-800 leading-relaxed">
                {config.message}
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                {config.reassurance}
              </p>
            </div>
          </div>
        </div>

        {/* Indicador de confianza con diseño amigable */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="text-neutral-500" size={18} />
              <span className="text-sm font-medium text-neutral-700">
                Confianza del análisis
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-bold ${config.color}`}>
                {confidencePercent}%
              </span>
              <span className="text-sm text-neutral-500">confianza</span>
            </div>
          </div>

          {/* Barra de progreso mejorada */}
          <div className="relative">
            <div className="w-full bg-linear-to-r from-neutral-100 to-neutral-50 rounded-full h-4 overflow-hidden border border-neutral-200">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  isMalignant
                    ? "bg-linear-to-r from-amber-400 to-orange-400"
                    : "bg-linear-to-r from-teal-400 to-emerald-400"
                }`}
                style={{ width: `${confidencePercent}%` }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-pulse-slow" />
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-neutral-500">
              <span>Baja</span>
              <span>Media</span>
              <span>Alta</span>
            </div>
          </div>
        </div>

        {/* Recomendación médica con tono cálido */}
        <div
          className={`p-6 rounded-2xl ${
            isMalignant
              ? "bg-linear-to-br from-amber-50 to-orange-50"
              : "bg-linear-to-br from-teal-50 to-emerald-50"
          } border ${config.borderColor}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl ${config.bgColor} border ${config.borderColor}`}
            >
              <HeartPulse className={config.color} size={24} />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">
                {isMalignant ? "Tu salud es lo primero" : "Mantén tu cuidado"}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {isMalignant
                  ? "Programa una cita con tu dermatólogo para una evaluación completa. La detección temprana aumenta significativamente las posibilidades de tratamiento exitoso."
                  : "Continúa monitoreando tus lunares mensualmente y utiliza protección solar diaria. Las revisiones anuales con especialistas son recomendables."}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
                <div className="w-2 h-2 rounded-full bg-current" />
                <span>Recomendación profesional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nota tranquilizadora */}
        <div className="text-center">
          <p className="text-xs text-neutral-500 italic">
            Este resultado se basa en inteligencia artificial y debe
            complementar, no reemplazar, el criterio médico profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
