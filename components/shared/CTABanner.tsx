import { SITE } from '@/lib/site';

type Props = {
  line1: string;
  line2: string;
  text: string;
  cta: string;
};

export default function CTABanner({ line1, line2, text, cta }: Props) {
  return (
    <section className="w-full bg-gold py-[80px] px-8 md:px-[8%] text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-display font-bold text-[clamp(36px,4vw,60px)] text-white leading-[1.1] mb-4">
          {line1}<br />
          <span className="italic font-normal">{line2}</span>
        </p>

        <p className="font-body font-light text-[17px] text-white/80 max-w-[480px] leading-[1.6] mb-10 mx-auto">{text}</p>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass-light inline-flex items-center justify-center text-white font-body font-semibold text-[15px] px-10 py-4 rounded-full"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
