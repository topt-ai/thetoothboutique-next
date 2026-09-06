
const brands = [
  { name: "iTERO", logo: "/itero-logo.webp", larger: true },
  { name: "INVISALIGN", logo: "/invisalign-logo-transparente.webp", larger: true },
  { name: "CARESTREAM", logo: "/carestream-dental-logo_01.webp", larger: true },
  { name: "ULTRADENT", logo: "/ultradent-logo.webp", larger: true },
  { name: "3M", logo: "/3m-logo.webp", larger: true },
  { name: "AMERICAN ORTHODONTICS", logo: "/american-orthodontics-logo.webp", larger: true },
  { name: "SPRINTRAY", logo: "/sprintray-logo.webp", larger: true },
  { name: "DOLPHIN", logo: "/dolphin.png", larger: true }
];

export default function BrandsCarousel() {
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full h-10 md:h-14 bg-dark flex items-center overflow-hidden relative z-30">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center h-full gap-10 md:gap-14">
        {duplicatedBrands.map((brand, index) => (
          <img
            key={`${brand.name}-${index}`}
            src={brand.logo}
            alt={brand.name}
            className={`w-auto max-w-[120px] md:max-w-[150px] object-contain brightness-0 invert opacity-90 shrink-0 ${
              brand.larger ? 'h-5 md:h-8' : 'h-4 md:h-6'
            }`}
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
      `}</style>
    </div>
  );
}
