export type HealthIssue = {
  id: string
  name: string
  severity: 'high' | 'medium' | 'low'
  images?: Array<string | number>
  symptoms: string[]
  immediateActions: string
  reasons: string
  prevention: string
  category: string
  visible?: boolean
}

export const healthIssues: HealthIssue[] = [
  {
    id: 'pododermatitis',
    name: 'Pododermatitis (Pie inflamado)',
    severity: 'high',
    category: 'Infección',
    visible: true,
    images: [
      require('@/assets/images/health/pododermatitis1.jpg'),
      require('@/assets/images/health/pododermatitis2.jpg'),
    ],
    symptoms: [
      'Inflamación en las patas',
      'Enrojecimiento',
      'Costras o llagas en las plantas',
      'Dolor al caminar',
    ],
    reasons: 'Hábitat inadecuado, superficie del suelo rasposa o metálica, manta humeda o muy sucia.',
    immediateActions: 'Mientras se consigue turno veterinario: Limpiar las patitas con toallita humeda, si tiene puede aplicar clorhexidina en spray, luego de esto también puede aplicar Milacrem en cada patita. La cantidad a aplicar de menos del tamaño de un grano de arroz, para formar una capa protectora.',
    prevention: 'Mantener manta y jaula limpia, nunca usar jaulas de alambre, controlar sobrepeso, usar camas y mantas suaves.',
  },
  {
    id: 'pisBlanca',
    name: 'Pis Blanca',
    severity: 'low',
    category: 'Urinario',
    visible: true,
    images: [
      require('@/assets/images/health/peewhite1.jpg'),
      require('@/assets/images/health/peewhite2.jpg'),
      require('@/assets/images/health/peewhite3.jpg'),
    ],
    symptoms: [
      'Orina espesa',
      'Pis blanca o amarillenta con aspecto lechoso',
      'Manchas blancas de orina',
    ],
    reasons: 'Exceso de calcio en la alimentación, falta de agua fresca.',
    immediateActions: 'Dar solo heno de pastura, alguna verdura y verificar que el cobayo esté tomando agua. Si persiste puede generar cálculos.',
    prevention: 'No dar heno de alfalfa como principal alimento. Asegurar suficiente suministro de agua. Verificar buena calidad de pellets.',
  },
  {
    id: 'resfrio',
    name: 'Resfriado / Infección Respiratoria',
    severity: 'high',
    category: 'Respiratorio',
    visible: true,
    images: [
      require('@/assets/images/health/resfrio.jpg'),
      require('@/assets/images/health/resfrio2.jpg'),
    ],
    symptoms: [
      'Estornudos frecuentes',
      'Secreción nasal',
      'Ojos llorosos',
      'Dificultad para respirar',
      'Respiración ruidosa',
      'Pérdida de apetito'
    ],
    reasons: 'Falta de Vitamina C, exposición a corrientes de aire frío, cambios bruscos de temperatura, ambiente húmedo, contacto con otros animales enfermos.',
    immediateActions: 'Puede nebulizar solo con solución fisiológica para aliviar los sintomas, pero debe dirigirse a su veterinario lo antes posible ya que si los sintomas se agravaron puede derivar en una infección respiratoria.',
    prevention: 'Evitar cambios bruscos de temperatura, corrientes de aire frio directas, mantener ambiente seco, buena ventilación sin humedad.'
  },
  {
    id: 'escorbuto',
    name: 'Escorbuto (Déficit de Vitamina C)',
    severity: 'high',
    category: 'Nutricional',
    visible: true,
    images: [
      require('@/assets/images/health/escorbuto1.jpg'),
      require('@/assets/images/health/escorbuto2.jpg'),
      require('@/assets/images/health/escorbuto3.jpg'),
    ],
    symptoms: [
      'Pérdida de apetito',
      'Encías sangrantes o hinchadas',
      'Articulaciones hinchadas',
      'Costras en la oreja',
      'Pelaje áspero',
      'Descamación',
      'Heridas en las patas',
      'Dificultad para moverse'
    ],
    reasons: 'Falta de vitamina C en la dieta, alimentación desequilibrada.',
    immediateActions: 'Esto es grave, debe ir al veterinario lo antes posible para que le suplementen vitamina C y tratamiento a seguir.',
    prevention: 'Suplementar vitamina C, consulte la dosis recomendada y el modo de administración según el peso de su Cobayo a su veterinario. Proporcionar 30g de pimiento rojo(morrón rojo) a diario, no lo confunda con el Ají (prohibido en Cobayos).'
  },
  {
    id: 'gases',
    name: 'Gases / Timpanismo',
    severity: 'high',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Abdomen hinchado y duro',
      'Dolor abdominal',
      'Postura encorvada',
      'No come ni bebe',
      'No defeca',
      'Gemidos o chirridos de dolor',
      'Respiración rápida'
    ],
    reasons: 'Dieta inadecuada (exceso de verduras ricas en agua, frutas, pellets bajos en fibra), cambios bruscos en la dieta, falta de heno, estrés, falta de ejercicio.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Introducir nuevos alimentos gradualmente, evitar alimentos que producen gases (brócoli, repollo), proporcionar heno ilimitado'
  },
  {
    id: 'diarrea',
    name: 'Diarrea',
    severity: 'high',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Heces líquidas o muy blandas',
      'Zona anal sucia',
      'Deshidratación',
      'Pérdida de apetito',
      'Letargo',
      'Abdomen sensible'
    ],
    reasons: 'Dieta inadecuada (exceso de verduras ricas en agua, frutas, pellets bajos en fibra), cambios bruscos en la dieta, falta de heno, estrés, falta de ejercicio.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta equilibrada alta en fibra, introducir alimentos nuevos gradualmente, agua fresca disponible, higiene de jaula'
  },
  {
    id: 'caca-pastosa',
    name: 'Heces Pastosas / Cecotrofos Anormales',
    severity: 'medium',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Heces blandas pero formadas',
      'Cecotrofos no consumidos',
      'Zona anal sucia',
      'Olor fuerte',
      'Malestar digestivo leve'
    ],
    reasons: 'Dieta baja en fibra, falta de heno, exceso de verduras ricas en agua, falta de ejercicio, estrés.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Aumentar fibra (heno), reducir pellets y verduras temporalmente, evitar frutas y alimentos ricos en azúcar'
  },
  {
    id: 'malocusion',
    name: 'Maloclusión Dental',
    severity: 'high',
    category: 'Dental',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Dificultad para comer',
      'Pérdida de peso',
      'Babeo excesivo',
      'Dientes visiblemente largos',
      'Preferencia por alimentos blandos',
      'Heridas en boca o lengua'
    ],
    reasons: 'Genética, dieta baja en fibra, falta de heno para desgaste natural, falta de ejercicio.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Heno ilimitado, juguetes para roer, dieta rica en fibra, revisiones dentales regulares'
  },
  {
    id: 'cistitis',
    name: 'Cistitis / Infección Urinaria',
    severity: 'medium',
    category: 'Urinario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Zona genital húmeda',
      'Orina con sangre',
      'Dolor al orinar',
      'Micción frecuentes',
      'Lamido excesivo del área genital',
      'Pérdida de apetito'
    ],
    reasons: 'Higiene inadecuada, falta de agua fresca, dieta alta en calcio, estrés.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Agua fresca abundante, higiene de jaula, evitar alimentos muy ricos en calcio'
  },
  {
    id: 'calculos',
    name: 'Cálculos Urinarios',
    severity: 'high',
    category: 'Urinario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Sangre en orina',
      'Esfuerzo para orinar',
      'Anorexia',
      'Postura encorvada',
      'Dolor al tocar abdomen',
      'Imposibilidad de orinar (emergencia)'
    ],
    reasons: 'Dieta alta en calcio, falta de agua fresca, predisposición genética.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Agua abundante, reducir alimentos altos en calcio (acelgas, legumbres, frutos secos), dieta balanceada'
  },
  {
    id: 'parasitos-externos',
    name: 'Parásitos Externos (Ácaros, Piojos, Pulgas)',
    severity: 'medium',
    category: 'Parasitario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Picazón intensa (peor de noche)',
      'Pérdida de pelo',
      'Costras en la piel',
      'Caspa',
      'Enrojecimiento',
      'Estrés y nerviosismo',
      'Residuos marrones o negros en pelo'
    ],
    reasons: 'Contacto con otros animales infectados, ambiente sucio, falta de heno, falta de cuidado.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Mantener jaula limpia, cuarentena de animales nuevos, revisiones periódicas, evitar contacto con otros animales infectados'
  },
  {
    id: 'parasitos-internos',
    name: 'Parásitos Internos (Tenias, Lombrices)',
    severity: 'medium',
    category: 'Parasitario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Abdomen hinchado',
      'Gusanos visibles en heces',
      'Pérdida de peso',
      'Pelaje áspero',
      'Diarrea intermitente',
      'Letargo'
    ],
    reasons: 'Contacto con heces de animales infectados, falta de heno, dieta inadecuada.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Higiene de jaula, lavar verduras y frutas, agua limpia, evitar contacto con otros animales'
  },
  {
    id: 'hongos',
    name: 'Hongos (Tiña)',
    severity: 'medium',
    category: 'Dermatológico',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Pérdida de pelo circular u ovalada',
      'Especialmente en cabeza',
      'Piel escamosa',
      'Enrojecimiento',
      'Costras',
      'Puede no causar picazón'
    ],
    reasons: 'Contacto con animales infectados, ambiente húmedo, falta de higiene.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta rica en fibra, ambiente limpio y seco, evitar estrés, cuarentena de animales nuevos (puede transmitirse a humanos)'
  },
  {
    id: 'golpe-calor',
    name: 'Golpe de Calor',
    severity: 'high',
    category: 'Emergencia',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Respiración rápida y superficial',
      'Salivación excesiva',
      'Letargo extremo',
      'Temperatura corporal elevada',
      'Pérdida de conciencia',
      'Convulsiones'
    ],
    reasons: 'Exposición a altas temperaturas, falta de sombra o agua fresca, jaula en lugar caluroso.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Mantener en lugar fresco (18-24°C), nunca exponer al sol directo, proporcionar sombra, agua fresca, evitar altas temperaturas'
  },
  {
    id: 'obesidad',
    name: 'Obesidad',
    severity: 'medium',
    category: 'Nutricional',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Peso superior a 1.5kg',
      'Dificultad para moverse',
      'Respiración agitada',
      'Falta de energía',
      'No puede asearse correctamente',
      'Pododermatitis por sobrepeso'
    ],
    reasons: 'Dieta alta en pellets y verduras ricas en agua, falta de heno, falta de ejercicio.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta controlada, heno ilimitado pero pellets medidos, limitar frutas y vegetales altos en azúcar, ejercicio diario'
  },
  {
    id: 'abscesos',
    name: 'Abscesos',
    severity: 'high',
    category: 'Infección',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Bultos llenos de pus',
      'Hinchazón localizada',
      'Dolor en la zona',
      'Pérdida de apetito',
      'Fiebre',
      'Letargo'
    ],
    reasons: 'Infección bacteriana por heridas, mordeduras, o problemas dentales.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Evitar jaulas con elementos punzantes, mantener higiene, tratar heridas rápidamente, alimentación suave para evitar lesiones bucales'
  },
  {
    id: 'conjuntivitis',
    name: 'Conjuntivitis / Infección Ocular',
    severity: 'medium',
    category: 'Ocular',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Ojos rojos',
      'Secreción ocular',
      'Párpados hinchados',
      'Ojo cerrado o semicerrado',
      'Lagrimeo excesivo',
      'Se rasca los ojos'
    ],
    reasons: 'Irritación por polvo, alergias, infecciones bacterianas o virales, falta de higiene.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Evitar polvo en camas, mantener limpia la jaula, evitar corrientes de aire, usar heno de calidad sin polvo'
  },
  {
    id: 'estreñimiento',
    name: 'Estreñimiento',
    severity: 'medium',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Ausencia de heces',
      'Heces pequeñas y duras',
      'Abdomen hinchado',
      'Cansancio',
      'Pérdida de apetito',
      'Postura encorvada'
    ],
    reasons: 'Dieta baja en fibra, falta de heno, deshidratación, falta de ejercicio, estrés.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Heno ilimitado, agua fresca abundante, ejercicio regular, dieta alta en fibra, vegetales frescos diarios'
  },
  {
    id: 'otitis',
    name: 'Otitis / Infección de Oído',
    severity: 'high',
    category: 'Infección',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Inclinación de cabeza',
      'Pérdida de equilibrio',
      'Secreción del oído',
      'Rascado de orejas',
      'Sacudidas de cabeza',
      'Dolor al tocar las orejas'
    ],
    reasons: 'Contacto con animales infectados, ambiente húmedo, falta de higiene.',
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consiga turno veterinario',
    prevention: 'Mantener oídos limpios, evitar agua en los oídos, tratar infecciones respiratorias temprano, ambiente sin humedad excesiva'
  }
]
