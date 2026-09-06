
export default function VideoSection() {
  return (
    <section className="bg-bg py-[100px] px-8 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto text-center">
        <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
          // La clínica
        </span>

        <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-text leading-[1.1] mb-16">
          Así Transformamos Sonrisas
        </h2>

        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-[0_4px_32px_rgba(15,76,92,0.08)] border border-dark/5">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1050078020?badge=0&autopause=0&player_id=0&app_id=58479"
              title="Video presentación The Tooth Boutique"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
