// Datos canónicos del negocio (NAP). Toda mención en el sitio y en el schema sale de aquí.
export const SITE = {
  url: 'https://thetoothboutique.com',
  name: 'The Tooth Boutique',
  alternateName: 'Tooth Boutique',
  phone: '+50379056000',
  phoneDisplay: '+503 7905 6000',
  whatsapp: 'https://wa.me/50379056000',
  email: 'hola@thetoothboutique.com',
  address: {
    street: 'Century Tower, Zona Rosa',
    short: 'Century Tower, Zona Rosa, San Salvador',
    locality: 'San Salvador',
    region: 'San Salvador',
    postalCode: '1101',
    country: 'SV',
    countryName: 'El Salvador',
  },
  geo: { lat: '13.6912581', lng: '-89.2373773' },
  hours: {
    weekdays: 'Lunes a Viernes 9:30 a.m. a 6:00 p.m.',
    saturday: 'Sábado 9:00 a.m. a 1:00 p.m.',
    short: 'Lun a Vie 9:30 a 6:00 p.m. · Sáb 9:00 a 1:00 p.m.',
  },
  placeId: 'ChIJx2ygEgAxY48RnHlQz5Fv2gI',
  mapUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJx2ygEgAxY48RnHlQz5Fv2gI',
  mapEmbed: 'https://maps.google.com/maps?q=The+Tooth+Boutique+Century+Tower+San+Salvador&output=embed',
  wazeUrl:
    'https://ul.waze.com/ul?place=ChIJx2ygEgAxY48RnHlQz5Fv2gI&ll=13.69125810%2C-89.23737730&navigate=yes',
  reviewUrl: 'https://review.thetoothboutique.com',
  social: {
    instagram: 'https://www.instagram.com/thetoothboutique/',
    facebook: 'https://www.facebook.com/thetoothboutique',
    tiktok: 'https://www.tiktok.com/@dramelissarenee',
  },
  founded: '2020',
  areas: ['San Salvador', 'Zona Rosa', 'San Benito', 'Escalón', 'Maquilishuat', 'Antiguo Cuscatlán', 'Santa Tecla', 'Santa Elena'],
  images: {
    hero: '/main tooth.webp',
    doctor: '/dra-melissa-renee-ortodoncista-san-salvador.webp',
    logo: '/tooth-logo-v2.webp',
    og: '/main%20tooth.webp',
  },
  prices: {
    evaluacion: 65,
    radiografia: 20,
    profilaxis: 50,
  },
} as const;

export const DOCTOR = {
  id: `${SITE.url}/#dra-melissa`,
  name: 'Dra. Melissa Reneé',
  url: `${SITE.url}/dra-melissa-renee`,
  path: '/dra-melissa-renee',
  jobTitle: 'Ortodoncista',
  image: `${SITE.url}${SITE.images.doctor}`,
  credentials: {
    master: 'Máster en Ortodoncia',
    masterUniversity: 'Universidad Francisco Marroquín',
    undergradUniversity: 'Universidad Evangélica de El Salvador',
    invisalign: 'Invisalign Doctor Provider',
  },
} as const;

export const CLINIC_ID = `${SITE.url}/#clinic`;
export const WEBSITE_ID = `${SITE.url}/#website`;
