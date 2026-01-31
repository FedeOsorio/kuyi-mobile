export type Breed = {
  id: string;
  name: string;
  coat: string;
  location?: string;
  colors?: string[];
  description: string;
  image: string | any;
};

export const breeds: Breed[] = [
{
    id: 'americana',
    name: 'Americana',
    coat: 'Pelo corto y liso',
    location: 'Mundial - muy común en América del Sur',
    colors: ['Variados'],
    description: 'La raza más común como mascota. De pelaje corto y fácil de cuidar, son tranquilas y perfectas para principiantes. Su temperamento dócil las hace ideales para familias.',
    image: require('@/assets/breeds/american.jpg')
  },
  {
    id: 'abisinia',
    name: 'Abisinia',
    coat: 'Pelo áspero con rosetas',
    location: 'Mundial - común en América del Sur',
    colors: ['Múltiples'],
    description: 'Conocida por sus rosetas (remolinos) distintivas por todo el cuerpo. Son vivaces y muy atractivas, con personalidad juguetona y energética.',
    image: require('@/assets/breeds/abyssinia.jpg')
  },
  {
    id: 'peruana',
    name: 'Peruana',
    coat: 'Pelo muy largo y liso',
    location: 'Mundial - disponible en América del Sur',
    colors: ['Variados'],
    description: 'Pelo largo que puede llegar al suelo. Requiere cuidado extensivo y cepillado diario. Muy elegante pero demandante en mantenimiento.',
    image: require('@/assets/breeds/peruana.jpg')
  },
  {
    id: 'teddy',
    name: 'Teddy',
    coat: 'Pelo corto, denso y esponjoso',
    location: 'América del Norte y Europa - rara en América del Sur',
    colors: ['Múltiples'],
    description: 'Pelaje suave y denso que se levanta ligeramente. Textura única tipo peluche y temperamento amigable. Muy popular por su apariencia adorable.',
    image: require('@/assets/breeds/teddy.jpg')
  },
  {
    id: 'rex',
    name: 'Rex',
    coat: 'Pelo corto, denso y rizado',
    location: 'América del Norte y Europa - poco común en América del Sur',
    colors: ['Variados'],
    description: 'Pelaje rizado y aterciopelado producido por mutación recesiva. Bajo mantenimiento pero con textura única al tacto.',
    image: require('@/assets/breeds/rex.jpg')
  },
  {
    id: 'crestada',
    name: 'Crestada',
    coat: 'Pelo corto con cresta',
    location: 'Mundial - poco común en América del Sur',
    colors: ['Múltiples'],
    description: 'Pelo corto con una cresta distintiva en la frente, a veces de color contrastante. También conocida como English Crested o White Crested.',
    image: require('@/assets/breeds/crestada.jpg')
  },
  {
    id: 'silkie',
    name: 'Silkie',
    coat: 'Pelo largo, liso',
    location: 'Mundial - disponible en América del Sur',
    colors: ['Variados'],
    description: 'Pelo largo pero sin rosetas, fluye hacia atrás elegantemente. Requiere cuidado regular pero menos que la Peruana.',
    image: require('@/assets/breeds/silkie.jpg')
  },
  {
    id: 'coronet',
    name: 'Coronet',
    coat: 'Pelo largo con cresta',
    location: 'América del Norte y Europa - rara en América del Sur',
    colors: ['Variados'],
    description: 'Similar a Silkie pero con una cresta distintiva en la frente. Elegante y requiere cuidado moderado del pelaje.',
    image: require('@/assets/breeds/coronet.jpg')
  },
  {
    id: 'texel',
    name: 'Texel',
    coat: 'Pelo largo y rizado',
    location: 'Europa y América del Norte - muy rara en América del Sur',
    colors: ['Múltiples'],
    description: 'Combina pelo largo con textura rizada. Resultado del cruce entre Silkie y Rex. Alto requerimiento de cuidado pero espectacular.',
    image: require('@/assets/breeds/texel.jpg')
  },
  {
    id: 'merino',
    name: 'Merino',
    coat: 'Pelo largo rizado con corona',
    location: 'Europa - muy rara en América del Sur',
    colors: ['Variados'],
    description: 'Pelo largo y rizado con una corona distintiva. Raza de exhibición en algunos registros. Requiere cuidado especializado.',
    image: require('@/assets/breeds/merino.jpg')
  },
  {
    id: 'alpaca',
    name: 'Alpaca',
    coat: 'Pelo largo y lanoso',
    location: 'Europa y América del Norte - muy rara en América del Sur',
    colors: ['Múltiples'],
    description: 'Pelaje denso similar al de una alpaca. Suave pero necesita cuidado constante para evitar enredos.',
    image: require('@/assets/breeds/alpaca.jpg')
  },
  {
    id: 'lunkarya',
    name: 'Lunkarya',
    coat: 'Pelo largo, áspero y rizado',
    location: 'Escandinavia - extremadamente rara fuera de Europa',
    colors: ['Variados'],
    description: 'Grupo de razas nórdicas con pelaje largo y rizado denso. Menos común fuera de Escandinavia.',
    image: require('@/assets/breeds/lunkarya.jpg')
  },
  {
    id: 'sheba',
    name: 'Sheba',
    coat: 'Pelo largo con rosetas',
    location: 'Australia - no disponible en América del Sur',
    colors: ['Múltiples'],
    description: 'También llamada Sheba Mini Yak. Pelo largo y despeinado con rosetas y "patillas". Apariencia única y salvaje.',
    image: require('@/assets/breeds/sheba.jpg')
  },
  {
    id: 'skinny',
    name: 'Skinny',
    coat: 'Mayormente sin pelo',
    location: 'América del Norte y Europa - poco común en América del Sur',
    colors: ['Piel variada'],
    description: 'Raza casi sin pelo que requiere ambiente cálido y cuidado especial de la piel. Muy cariñosas y únicas.',
    image: require('@/assets/breeds/skinny.jpg')
  },
  {
    id: 'baldwin',
    name: 'Baldwin',
    coat: 'Nace con pelo, lo pierde',
    location: 'América del Norte - muy rara en América del Sur',
    colors: ['Sin pelo adulta'],
    description: 'Nace con pelo pero lo pierde al crecer. Cuidados similares a Skinny. Requiere ambiente controlado.',
    image: require('@/assets/breeds/baldwin.jpg')
  },
  {
    id: 'aguti',
    name: 'Agutí',
    coat: 'Pelo corto jaspeado',
    location: 'Mundial - muy común en América del Sur',
    colors: ['Agutí variados'],
    description: 'Patrón de coloración agutí (pelos jaspeados) presente en múltiples razas. Color silvestre natural.',
    image: require('@/assets/breeds/aguti.jpg')
  },
  {
    id: 'canida',
    name: 'Cañida',
    coat: 'Variado (regional)',
    location: 'Sudamérica - disponible en América del Sur',
    colors: ['Variados'],
    description: 'Variedades regionales/landrace. La nomenclatura difiere según el país. Incluida por completitud.',
    image: require('@/assets/breeds/canida.jpg')
  },
  {
    id: 'holandesa',
    name: 'Holandesa',
    coat: 'Pelo corto con patrón',
    location: 'Mundial - poco común en América del Sur',
    colors: ['Patrón holandés'],
    description: 'Patrón de color con banda blanca distintiva similar a los conejos holandeses. Muy llamativa visualmente.',
    image: require('@/assets/breeds/holandesa.jpg')
  },
  {
    id: 'abigarrada',
    name: 'Abigarrada',
    coat: 'Color quebrado/tricolor',
    location: 'Mundial - común en América del Sur',
    colors: ['Multicolor'],
    description: 'Patrón de color quebrado o tricolor que aparece en muchas razas. Combinación atractiva de colores.',
    image: require('@/assets/breeds/abigarrada.jpg')
  },
  {
    id: 'carey',
    name: 'Carey',
    coat: 'Tres colores definidos',
    location: 'Mundial - disponible en América del Sur',
    colors: ['Carey'],
    description: 'Patrón carey (tortoiseshell) con parches rojos y negros. Combinación de colores distintiva.',
    image: require('@/assets/breeds/carey.jpg')
  },
  {
    id: 'tricolor',
    name: 'Tricolor',
    coat: 'Tres colores',
    location: 'Mundial - disponible en América del Sur',
    colors: ['Tres colores'],
    description: 'Patrón con tres colores distintos. Puede aparecer en múltiples razas. Muy apreciada para exhibición.',
    image: require('@/assets/breeds/tricolor.jpg')
  },
  {
    id: 'himalaya',
    name: 'Himalaya',
    coat: 'Puntas oscuras',
    location: 'Mundial - se puede conseguir en América del Sur',
    colors: ['Blanco con puntas'],
    description: 'Coloración apuntada similar al patrón himalayo en gatos. Pigmento sensible a la temperatura.',
    image: require('@/assets/breeds/himalaya.jpg')
  },
  /* {
    id: 'ruana',
    name: 'Ruana',
    coat: 'Patrón regional',
    location: 'Sudamérica - disponible en América del Sur',
    colors: ['Variados'],
    description: 'Nombre regional de color/patrón usado en algunos países para marcas específicas.',
    image: require('@/assets/breeds/ruana.jpg')
  },
  {
    id: 'dalmata',
    name: 'Dálmata',
    coat: 'Blanco con manchas',
    location: 'Mundial - poco común en América del Sur',
    colors: ['Blanco con manchas'],
    description: 'Patrón de manchas sobre fondo blanco tipo dálmata. Difícil de criar con manchas consistentes.',
    image: require('@/assets/breeds/dalmata.jpg')
  },
  {
    id: 'urraca',
    name: 'Urraca',
    coat: 'Blanco y negro',
    location: 'Sudamérica - disponible en América del Sur',
    colors: ['Blanco', 'Negro'],
    description: 'Patrón tipo urraca blanco y negro. La nomenclatura varía según el país.',
    image: require('@/assets/breeds/urraca.jpg')
  },
  {
    id: 'arlequin',
    name: 'Arlequín',
    coat: 'Parches distintivos',
    location: 'Mundial - disponible en América del Sur',
    colors: ['Parches variados'],
    description: 'Patrón arlequín con grandes parches de color. Muy apreciada en exhibiciones por su patrón único.',
    image: require('@/assets/breeds/arlequin.jpg')
  } */
];

export default breeds;
