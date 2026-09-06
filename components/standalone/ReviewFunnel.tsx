'use client';

import { useState, type FormEvent } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CZx5UM-Rb9oCEBM/review';
const FEEDBACK_WEBHOOK_URL = 'https://tommy-1.app.n8n.cloud/webhook/77b0e027-b79e-4144-b769-0d58db0bd83f';

async function handleSubmitFeedback(rating: number, name: string, feedback: string) {
  try {
    await fetch(FEEDBACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, rating, feedback, timestamp: new Date().toISOString() }),
    });
  } catch (error) {
    console.error('Error enviando feedback al webhook:', error);
  }
}

export default function ReviewFunnel() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayRating = hoverRating || rating;
  const isHighRating = rating >= 4;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmitFeedback(rating, name, feedback);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/tooth-logo-v2.webp"
            alt="The Tooth Boutique"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="bg-surface rounded-3xl border border-dark/10 shadow-[0_8px_40px_rgba(15,76,92,0.10)] px-6 py-10 sm:px-8">
          {rating === 0 && (
            <>
              <h1 className="font-display font-medium text-2xl sm:text-[26px] text-dark text-center leading-snug mb-2">
                ¿Cómo estuvo tu visita?
              </h1>
              <p className="text-center text-[13px] text-muted tracking-[0.02em] mb-8">
                Tu opinión nos ayuda a mejorar cada día
              </p>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`${star} estrella${star > 1 ? 's' : ''}`}
                    className="p-1 transition-transform duration-150 hover:scale-110 active:scale-95"
                  >
                    <Star
                      size={40}
                      strokeWidth={1.5}
                      className="transition-colors duration-150"
                      fill={displayRating >= star ? '#C9956B' : 'transparent'}
                      stroke={displayRating >= star ? '#C9956B' : '#7BA3AD'}
                    />
                  </button>
                ))}
              </div>
            </>
          )}

          {rating > 0 && isHighRating && (
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-accent" />
              </div>
              <h2 className="font-display font-medium text-xl text-dark mb-2">
                ¡Gracias por tu visita!
              </h2>
              <p className="text-[14px] text-muted leading-relaxed mb-8">
                Nos alegra mucho que hayas tenido una buena experiencia. ¿Nos ayudarías compartiéndola en Google? Solo te toma un minuto.
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass inline-flex items-center justify-center w-full font-body font-medium text-[15px] tracking-[0.02em] rounded-full px-6 py-4"
              >
                Déjanos tu review en Google
              </a>
            </div>
          )}

          {rating > 0 && !isHighRating && !submitted && (
            <div>
              <h2 className="font-display font-medium text-xl text-dark text-center mb-2">
                Lo sentimos
              </h2>
              <p className="text-[14px] text-muted text-center leading-relaxed mb-6">
                Cuéntanos qué pasó, queremos mejorar
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className="w-full rounded-2xl border border-dark/15 bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors mb-3"
                />
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Cuéntanos qué pasó, queremos mejorar"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-dark/15 bg-bg px-4 py-3 text-[14px] text-text placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-colors resize-none mb-5"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dark text-white font-body font-medium text-[15px] tracking-[0.02em] rounded-full px-6 py-4 hover:bg-dark/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-dark" />
              </div>
              <h2 className="font-display font-medium text-xl text-dark mb-2">
                Gracias por tu comentario
              </h2>
              <p className="text-[14px] text-muted leading-relaxed">
                Tomamos muy en serio tu experiencia y nos pondremos en contacto contigo pronto.
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-[11px] text-muted/70 tracking-[0.05em] mt-6">
          The Tooth Boutique · Zona Rosa, San Salvador
        </p>
        <p className="text-center text-[11px] text-muted/50 tracking-[0.05em] mt-2">
          by <a href="https://www.tommyhq.com/es-sv" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TommyHQ</a>
        </p>
      </div>
    </div>
  );
}
