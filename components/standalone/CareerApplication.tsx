'use client';

import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from 'react';
import { CheckCircle2, FileText, Loader2, Upload, X } from 'lucide-react';

const APPLICATION_WEBHOOK_URL = 'https://tommy-1.app.n8n.cloud/webhook/aplicacion-tooth-boutique';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_MESSAGE_LENGTH = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
  cv?: string;
  mensaje?: string;
}

export default function CareerApplication() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (file.type !== 'application/pdf') {
      return 'Solo aceptamos CV en formato PDF';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'El archivo no debe superar los 5MB';
    }
    return null;
  };

  const handleFile = (file: File) => {
    const error = validateFile(file);
    if (error) {
      setErrors((prev) => ({ ...prev, cv: error }));
      setCv(null);
      return;
    }
    setErrors((prev) => ({ ...prev, cv: undefined }));
    setCv(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const removeFile = () => {
    setCv(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!nombre.trim()) next.nombre = 'Ingresa tu nombre completo';
    if (!telefono.trim()) next.telefono = 'Ingresa tu teléfono';
    if (!email.trim()) next.email = 'Ingresa tu email';
    else if (!EMAIL_REGEX.test(email.trim())) next.email = 'Ingresa un email válido';
    if (!cv) next.cv = 'Sube tu CV en formato PDF';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    if (!validate() || !cv) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('nombre', nombre.trim());
      formData.append('telefono', telefono.trim());
      formData.append('email', email.trim());
      formData.append('mensaje', mensaje.trim());
      formData.append('cv', cv);

      const res = await fetch(APPLICATION_WEBHOOK_URL, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch (error) {
      console.error('Error enviando aplicación:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <img
            src="/tooth-logo-v2.webp"
            alt="The Tooth Boutique"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="bg-surface rounded-3xl border border-dark/10 shadow-[0_8px_40px_rgba(15,76,92,0.10)] px-6 py-10 sm:px-8">
          {submitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-accent" />
              </div>
              <h2 className="font-display font-medium text-xl text-dark mb-2">
                ¡Listo!
              </h2>
              <p className="text-[14px] text-muted leading-relaxed">
                Recibimos tu aplicación. Si tu perfil encaja con lo que buscamos, nos pondremos en contacto.
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-display font-medium text-2xl sm:text-[26px] text-dark text-center leading-snug mb-2">
                Gracias por querer ser parte del equipo Tooth Boutique
              </h1>
              <p className="text-center text-[13px] text-muted tracking-[0.02em] mb-8">
                Llena el formulario y nos pondremos en contacto contigo de ser necesario.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre completo"
                    className={`w-full rounded-2xl border bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors ${
                      errors.nombre ? 'border-red-400 focus:border-red-400' : 'border-dark/15 focus:border-accent/50'
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-[12px] text-red-500 mt-1.5 ml-1">{errors.nombre}</p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    className={`w-full rounded-2xl border bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors ${
                      errors.telefono ? 'border-red-400 focus:border-red-400' : 'border-dark/15 focus:border-accent/50'
                    }`}
                  />
                  {errors.telefono && (
                    <p className="text-[12px] text-red-500 mt-1.5 ml-1">{errors.telefono}</p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={`w-full rounded-2xl border bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-dark/15 focus:border-accent/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[12px] text-red-500 mt-1.5 ml-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-3">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`w-full rounded-2xl border-2 border-dashed px-4 py-6 text-center cursor-pointer transition-colors ${
                      isDragging
                        ? 'border-accent bg-accent/5'
                        : errors.cv
                        ? 'border-red-400 bg-bg'
                        : 'border-dark/20 bg-bg hover:border-accent/50'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                    {cv ? (
                      <div className="flex items-center justify-center gap-2">
                        <FileText size={18} className="text-dark shrink-0" strokeWidth={1.5} />
                        <span className="text-[13px] text-text truncate max-w-[180px]">{cv.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile();
                          }}
                          aria-label="Quitar archivo"
                          className="p-1 text-muted hover:text-dark transition-colors"
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={22} strokeWidth={1.5} className="text-muted" />
                        <p className="text-[13px] text-muted">
                          Arrastra tu CV aquí o <span className="text-dark font-medium">selecciona un archivo</span>
                        </p>
                        <p className="text-[11px] text-muted/70">Solo PDF, máximo 5MB</p>
                      </div>
                    )}
                  </div>
                  {errors.cv && (
                    <p className="text-[12px] text-red-500 mt-1.5 ml-1">{errors.cv}</p>
                  )}
                </div>

                <div className="mb-5">
                  <textarea
                    value={mensaje}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_MESSAGE_LENGTH) setMensaje(e.target.value);
                    }}
                    placeholder="Escribe brevemente por qué quisieras trabajar con nosotros y qué crees que te hace diferente de los demás aplicantes."
                    rows={5}
                    className="w-full rounded-2xl border border-dark/15 bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors resize-none"
                  />
                  <p className="text-[11px] text-muted/70 text-right mt-1.5 mr-1">
                    {mensaje.length}/{MAX_MESSAGE_LENGTH}
                  </p>
                </div>

                {submitError && (
                  <p className="text-[13px] text-red-500 text-center mb-4">
                    Hubo un problema al enviar tu aplicación. Por favor intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glass w-full inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] tracking-[0.02em] rounded-full px-6 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" strokeWidth={2} />
                      Enviando...
                    </>
                  ) : (
                    'Enviar aplicación'
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-[11px] text-muted/70 tracking-[0.05em] mt-6">
          The Tooth Boutique · Zona Rosa, San Salvador
        </p>
        <p className="text-center text-[11px] text-muted/50 tracking-[0.05em] mt-2">
          by <a href="https://www.tuwebsv.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">tuwebsv</a>
        </p>
      </div>
    </div>
  );
}
