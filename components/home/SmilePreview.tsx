'use client';

import { useState, useRef, useCallback, type DragEvent, type ChangeEvent } from 'react';
import { Upload, Camera, Check, RefreshCcw } from 'lucide-react';

const getActiveWebhookUrl = (): string =>
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  'https://tommy-1.app.n8n.cloud/webhook/201252fe-e004-4ec5-b525-1aa39c6d5718';

const SUBMIT_TIMEOUT_MS = 120000; // nano banana pro image edits can legitimately take a while

export default function SmilePreview() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorType, setErrorType] = useState<'failure' | 'timeout' | null>(null);
  const [consent, setConsent] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleFileSelection = (selectedFile: File) => {
    if (selectedFile.size > 8 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 8MB.');
      return;
    }
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setResultImage(null); // Reset result if new file is selected
    setErrorType(null);
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      setIsCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("No se pudo acceder a la cámara.");
    }
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
            handleFileSelection(file);
            closeCamera();
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const handleSubmit = async () => {
    if (!file || !consent) return;

    setIsLoading(true);
    setResultImage(null);
    setErrorType(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const webhookUrl = getActiveWebhookUrl();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('mode', 'inline');
      formData.append('consent', 'yes');

      const response = await fetch(webhookUrl, { method: 'POST', body: formData, signal: controller.signal });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const resultBlob = await response.blob();
      let imageBlob = resultBlob;
      if (!resultBlob.type?.startsWith('image/')) {
        imageBlob = new Blob([resultBlob], { type: 'image/png' });
      }
      setResultImage(URL.createObjectURL(imageBlob));
    } catch (error) {
      console.error('Error procesando la imagen:', error);
      setErrorType(error instanceof DOMException && error.name === 'AbortError' ? 'timeout' : 'failure');
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-dark py-[120px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-[clamp(36px,4vw,60px)] text-[#FAFAF8] leading-[1.1] mb-6">
            Sube tu selfie y mira cómo se podría ver<br />
            <span className="italic font-normal">tu sonrisa después del tratamiento</span>
          </h2>

          <p className="font-body font-light text-[17px] text-[#FAFAF8]/65 max-w-[520px] mx-auto leading-[1.6]">
            En menos de un minuto. Sin compromiso. Solo sube una foto sonriendo y nuestra IA te muestra una vista previa de tu sonrisa con el tratamiento terminado.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Upload */}
          <div className="flex flex-col gap-6">
            {/* Instructions */}
            <div className="bg-accent/10 border border-accent/15 rounded-[16px] p-6">
              <span className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase mb-4 block">
                // Para mejores resultados
              </span>
              <ul className="space-y-3">
                {[
                  'Tu cara debe aparecer completa en la foto',
                  'Sonríe mostrando tus dientes',
                  'Usa una foto frontal, no de perfil',
                  'Buena iluminación',
                  'Evita tomar la foto desde muy lejos o muy cerca'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="font-body font-light text-[14px] text-[#FAFAF8]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upload Area */}
            <div
              className={`${isCameraOpen ? 'hidden' : 'flex'} flex-col items-center justify-center text-center cursor-pointer transition-colors border-2 border-dashed rounded-[16px] p-12 ${
                isDragging ? 'border-accent bg-accent/5' : 'border-accent/30 hover:border-accent/60'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg, image/png, image/webp"
                className="hidden"
              />
              <Upload size={32} className="text-accent mb-4" />
              <p className="font-body font-light text-[15px] text-[#FAFAF8]/50 mb-2">
                Arrastra tu selfie aquí o haz clic para seleccionar
              </p>
              <p className="font-mono text-[10px] text-muted tracking-wider">
                JPG, PNG o WebP · máx. 8MB
              </p>
            </div>

            <div className={`${!isCameraOpen ? 'hidden' : 'relative'} rounded-[16px] overflow-hidden bg-black aspect-[3/4] md:aspect-auto md:h-[300px]`}>
              <video ref={videoRef} className="w-full h-full object-cover -scale-x-100" autoPlay playsInline muted />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                <button onClick={takePhoto} className="bg-accent text-dark font-body font-medium px-6 py-2 rounded-full">Capturar</button>
                <button onClick={closeCamera} className="bg-white/20 text-white font-body font-medium px-6 py-2 rounded-full backdrop-blur-md">Cancelar</button>
              </div>
            </div>

            {!isCameraOpen && (
              <div className="flex justify-center">
                <button
                  onClick={openCamera}
                  className="flex items-center gap-2 bg-accent text-dark font-body font-medium text-[14px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
                >
                  <Camera size={18} />
                  Tomar Selfie
                </button>
              </div>
            )}

            {/* Consent & Submit */}
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="peer appearance-none w-5 h-5 border border-accent/40 rounded-[4px] bg-transparent checked:bg-accent checked:border-accent transition-colors cursor-pointer"
                  />
                  <Check size={14} className="absolute text-dark opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="font-body font-light text-[13px] text-[#FAFAF8]/60 group-hover:text-[#FAFAF8]/80 transition-colors">
                  Autorizo el uso de mi imagen para generar esta vista previa no clínica.
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={!file || !consent || isLoading}
                className="btn-glass w-full font-body font-semibold text-[15px] py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ver mi sonrisa
              </button>
            </div>
          </div>

          {/* Right Column: Result */}
          <div className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden flex flex-col items-center justify-center min-h-[400px] relative">
            {isLoading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                <p className="font-body font-light text-[14px] text-[#FAFAF8]/50 animate-pulse">
                  Generando tu vista previa...
                </p>
              </div>
            ) : errorType === 'timeout' ? (
              <div className="flex flex-col items-center gap-4 px-8 text-center">
                <RefreshCcw size={32} className="text-accent" />
                <p className="font-body font-medium text-[15px] text-[#FAFAF8]">
                  Esto está tomando más tiempo del esperado.
                </p>
                <p className="font-body font-light text-[14px] text-[#FAFAF8]/60">
                  Nuestra IA sigue procesando tu imagen. Por favor, intenta de nuevo en un momento.
                </p>
              </div>
            ) : errorType === 'failure' ? (
              <div className="flex flex-col items-center gap-4 px-8 text-center">
                <RefreshCcw size={32} className="text-accent" />
                <p className="font-body font-medium text-[15px] text-[#FAFAF8]">
                  Estamos optimizando este sistema.
                </p>
                <p className="font-body font-light text-[14px] text-[#FAFAF8]/60">
                  Intenta de nuevo en unos minutos.
                </p>
              </div>
            ) : resultImage ? (
              <div className="w-full h-full relative">
                <img src={resultImage} alt="Vista previa de sonrisa" className="w-full h-full object-cover rounded-[16px]" />
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider">Resultado IA</span>
                </div>
              </div>
            ) : previewUrl ? (
              <div className="w-full h-full relative opacity-50 grayscale">
                <img src={previewUrl} alt="Tu selfie" className="w-full h-full object-cover rounded-[16px]" />
                <div className="absolute inset-0 flex items-center justify-center bg-dark/40 backdrop-blur-sm">
                  <p className="font-body font-light text-[14px] text-[#FAFAF8]/70">
                    Lista para procesar
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 opacity-20">
                <Upload size={48} className="text-[#FAFAF8]" />
                <span className="font-mono text-[12px] text-[#FAFAF8] uppercase tracking-wider">Esperando imagen</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
