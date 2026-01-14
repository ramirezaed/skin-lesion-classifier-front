interface Prediction {
  class: string;
  confidence: number;
}

interface AnalysisResult {
  top: string;
  confidence: number;
  predictions: Prediction[];
}
