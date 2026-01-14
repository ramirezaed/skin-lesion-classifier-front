"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { skinlesion } from "actions/imageDetections";
import DetectionDisplay from "./DetectionDisplay";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  // =========================
  // Helpers
  // =========================
  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const resizeImage = (base64Str: string): Promise<string> =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX = 1000;
        let { width, height } = img;

        if (width > height && width > MAX) {
          height *= MAX / width;
          width = MAX;
        } else if (height > MAX) {
          width *= MAX / height;
          height = MAX;
        }

        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
    });

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    try {
      const rawBase64 = await toBase64(file);
      const optimized = await resizeImage(rawBase64);
      const response = await skinlesion(optimized);
      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Error al procesar la imagen");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      {/* ================= RESULTADO ================= */}
      {result ? (
        <div className="flex flex-col gap-6">
          <DetectionDisplay data={result} />

          <button
            onClick={reset}
            className="mx-auto bg-teal-200 text-teal-900 px-6 py-2 rounded-full font-medium hover:cursor-pointer"
          >
            Analizar otra imagen
          </button>
        </div>
      ) : (
        /* ================= UPLOAD / PREVIEW ================= */
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-sm p-6 flex flex-col gap-6"
        >
          {/* ====== ESTADO INICIAL (sin preview) ====== */}
          {!preview && (
            <>
              <h2 className="text-center text-lg font-semibold text-foreground">
                Sube tu imagen
              </h2>

              <label
                className={`cursor-pointer border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 transition
                  ${
                    dragging
                      ? "bg-teal-50 border-teal-400"
                      : "border-border hover:bg-muted"
                  }
                `}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => setDragging(true)}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const f = e.dataTransfer.files?.[0];
                  if (f) handleFile(f);
                }}
              >
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-teal-700" />
                </div>

                <div className="text-sm text-foreground">
                  <span className="font-medium">Arrastra tu imagen aquí</span>
                  <br />
                  <span className="text-muted-foreground">
                    o haz clic para seleccionar un archivo
                  </span>
                </div>

                <p className="text-xs text-muted-foreground">
                  PNG, JPG hasta 10MB
                </p>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                  }}
                />
              </label>

              <p className="text-xs text-muted-foreground text-center">
                Formatos aceptados: JPG, PNG • Máximo 10MB
              </p>
            </>
          )}

          {/* ====== ESTADO PREVIEW ====== */}
          {preview && (
            <>
              <img
                src={preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-lg shadow"
              />

              <button
                type="submit"
                disabled={!file || loading}
                className="mx-auto bg-teal-200 text-teal-900 px-6 py-2 rounded-full font-medium disabled:opacity-50 hover:cursor-pointer"
              >
                {loading ? "Analizando..." : "Analizar Imagen"}
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
}
