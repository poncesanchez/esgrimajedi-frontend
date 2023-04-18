import images from './images';

const dialog = [
   "El gran liderazgo viene en todos los tamaños.",
   "La fe no es cuestión de decisión sino una convicción.",
   "El camino a la sabiduría es sencillo para aquellos que no se dejan cegar por el ego.",
   "La utilidad de un plan depende de aquellos que lo llevan acabo.",
   "La experiencia es mejor forjadora que la confianza.",
   "Encontrar un amigo no es fácil, dejarlo es difícil, olvidarlo imposible.",
   "Conserva a tus amigos apretando el corazón mas que a la cabeza.",
   "Las épocas hacen a los héroes.",
   "Ignora tus instintos bajo tu propio riesgo.",
   "El mas poderoso es aquel que controla su propio poder.",
   "El largo camino a la paz siempre es digno de recorrer no importa cuanto lleve llegar a ella.",
   "Fracasa con honor en vez de triunfar con engaños.",
   "La avaricia y el temor de la perdida son las raíces que llevan al árbol de la maldad.",
   "En la guerra tarde o temprano debes elegir un bando.",
   "La arrogancia desmerita la sabiduría",
   "La verdad ilumina la mente pero no siempre lleva la felicidad al corazón.",
   "El miedo es una enfermedad la esperanza es la única cura.",
   "Una sola oportunidad es una galaxia de esperanza.",
   "Tortuoso es el camino a la grandeza.",
   "Los costos de la guerra realmente nunca pueden contabilizarse.",
   "El compromiso es una virtud que debe cosecharse, no una debilidad a despreciar.",
   "Un secreto compartido forja la confianza",
   "Una lección aprendida es una lección ganada.",
   "El exceso de confianza es el mas peligroso de los descuidos.",
   "El primer paso para corregir un error es la paciencia.",
   "Nunca dudes de un corazón sincero.",
   "Debes creer en ti mismo o nadie lo hará.",
   "No hay regalo mas valioso que la confianza.",
   "A veces, aceptar ayuda es más difícil que ofrecerla.",
   "El apego no es compasión.",
   "Para ganar algo, tienes que perder algo",
   "La busqueda del honor es lo que lo hace a uno honorable.",
   "Lo fácil no siempre es sencillo.",
   "No tener en cuenta el pasado pone en peligro el futuro.",
   "No temas al futuro, no llores por el pasado.",
   "En la guerra, la verdad es la primera victima.",
   "Buscar la verdad es fácil, aceptar la verdad es difícil.",
   "Un líder sabio sabe cuando seguir a otros.",
   "La valentía hace a los héroes, pero la confianza construye la amistad.",
   "Elige lo que es correcto, no lo que es fácil.",
   "La bestia mas peligrosa es la que está en el interior.",
   "Quien fue mi padre importa menos que el recuerdo que tengo de él.",
   "La adversidad es el mayor desafío para la amistad.",
   "La venganza es la confesión del dolor.",
   "Los hermanos en combate son hermanos de por vida.",
   "Pelear en una guerra pone a prueba la destreza del soldado, defender su hogar pone a prueba su corazón.",
   "El que quiere, puede.",
   "Un niño robado es la esperanza perdida.",
   "El reto de la esperanza es vencer la corrupción.",
   "Los que imponen la ley, deben obedecer la ley.",
]

export const getBackground = () => {
   const random = Math.floor(Math.random() * dialog.length);
   const randomImage = Math.floor(Math.random() * images.length);

   return {
      title: dialog[random],
      bg: images[randomImage]
   }
};