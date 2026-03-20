/**
 * Elo Goals — progression path from Iron to Master.
 * Each tier has actionable, specific coaching content in Argentine Spanish (voseo) and English.
 */

export const ELO_GOALS = [
  {
    id: 'iron-bronze',
    from: { es: 'Hierro', en: 'Iron' },
    to: { es: 'Bronce', en: 'Bronze' },
    icon: '🪨',
    focus: { es: 'Especializarse', en: 'Specialize' },
    description: {
      es: 'Elegí UN rol y UN campeón. No cambies. Jugá 50 partidas con el mismo campeón antes de pensar en cambiar.',
      en: 'Pick ONE role and ONE champion. Don\'t switch. Play 50 games with the same champion before considering a change.',
    },
    tasks: [
      { es: 'Elegí tu rol principal (Jungle o Support en tu caso)', en: 'Choose your main role (Jungle or Support in your case)' },
      { es: 'Elegí tu campeón principal y jugá solo ese', en: 'Choose your main champion and only play that one' },
      { es: 'Tené un campeón secundario por si te lo banean', en: 'Have a backup champion in case yours gets banned' },
      { es: 'No cambies de campeón porque perdiste una partida', en: 'Don\'t switch champion because you lost a game' },
      { es: 'Desactivá el chat del equipo y el all chat', en: 'Disable team chat and all chat' },
    ],
    keyInsight: {
      es: 'Hasta que no asumas que sos Hierro, no vas a mejorar.',
      en: 'Until you accept you\'re Iron, you won\'t improve.',
    },
    metric: { es: 'Partidas con tu main: apuntá a 50+', en: 'Games on your main: aim for 50+' },
  },
  {
    id: 'bronze-silver',
    from: { es: 'Bronce', en: 'Bronze' },
    to: { es: 'Plata', en: 'Silver' },
    icon: '💰',
    focus: { es: 'Economía', en: 'Economy' },
    description: {
      es: 'Aprendé a farmear bien y a no regalar muertes. El oro gana partidas, no las peleas random.',
      en: 'Learn to farm properly and stop giving away free deaths. Gold wins games, not random fights.',
    },
    tasks: [
      { es: 'Jungle: apuntá a 6+ camps por minuto. Si tenés menos, estás perdiendo tiempo', en: 'Jungle: aim for 6+ camps per minute. If you have less, you\'re wasting time' },
      { es: 'Laners: apuntá a 7+ CS/min. Practicá last-hitting en Practice Tool 10 min antes de jugar ranked', en: 'Laners: aim for 7+ CS/min. Practice last-hitting in Practice Tool 10 min before playing ranked' },
      { es: 'Aprendé cuándo hacer recall: cuando tenés 1300+ gold para un componente importante', en: 'Learn when to recall: when you have 1300+ gold for an important component' },
      { es: 'Entendé el valor del oro: 10 CS = 1 kill aprox. Si el enemigo te lleva 30 CS, te lleva 3 kills', en: 'Understand gold value: 10 CS = 1 kill approx. If the enemy is up 30 CS, they\'re up 3 kills' },
      { es: 'No mueras de gratis: apuntá a menos de 6 muertes por partida. Cada muerte = 30s sin hacer nada', en: 'Stop dying for nothing: aim for under 6 deaths per game. Each death = 30s doing nothing' },
      { es: 'Siempre tené un plan después de limpiar la jungla. No vagués sin rumbo', en: 'Always have a plan after clearing jungle. Don\'t wander aimlessly' },
    ],
    keyInsight: {
      es: '10 CS = 1 kill. Si el enemigo tiene 200 CS y vos 150, te lleva 5 kills de ventaja.',
      en: '10 CS = 1 kill. If the enemy has 200 CS and you have 150, they have a 5 kill gold lead.',
    },
    metric: { es: 'Muertes por partida: apuntá a <6. CS/min (o camps/min): trackéalo', en: 'Deaths per game: aim for <6. CS/min (or camps/min): track it' },
  },
  {
    id: 'silver-gold',
    from: { es: 'Plata', en: 'Silver' },
    to: { es: 'Oro', en: 'Gold' },
    icon: '🎭',
    focus: { es: 'Identidad del campeón', en: 'Champion identity' },
    description: {
      es: 'Entendé qué quiere hacer TU campeón y jugá SIEMPRE en torno a eso. Nada de improvisar.',
      en: 'Understand what YOUR champion wants to do and ALWAYS play around that. No improvising.',
    },
    tasks: [
      { es: 'Identificá la identidad de tu campeón: ¿es un ganker early? ¿un powerfarmer? ¿un teamfighter?', en: 'Identify your champion\'s identity: early ganker? Powerfarmer? Teamfighter?' },
      { es: 'Si sos Graves, powerfarmeá. Si sos Warwick, gankeá. No hagas lo opuesto', en: 'If you\'re Graves, powerfarm. If you\'re Warwick, gank. Don\'t do the opposite' },
      { es: 'Aprendé los power spikes de tu campeón: nivel 6, 1 item, 2 items. Jugá agresivo en tus spikes', en: 'Learn your champion\'s power spikes: level 6, 1 item, 2 items. Play aggressive on your spikes' },
      { es: 'Conocé tu condición de victoria: ¿ganás por split push? ¿teamfight? ¿pick? Hacé ESO', en: 'Know your win condition: do you win by split push? Teamfight? Picks? Do THAT' },
      { es: 'No hagas cosas random. Cada acción tiene que alinearse con la identidad de tu campeón', en: 'Don\'t do random stuff. Every action should align with your champion\'s identity' },
      { es: 'Mirá un replay de un OTP de tu campeón en alto elo. Copiá su patrón de juego', en: 'Watch a replay from a high elo OTP of your champion. Copy their play pattern' },
    ],
    keyInsight: {
      es: 'Jugá SIEMPRE a la identidad de tu campeón. Una Fiora que siempre hace split push gana más que una que intenta decidir cuándo sí y cuándo no.',
      en: 'ALWAYS play to your champion\'s identity. A Fiora that always split pushes wins more than one that tries to decide when to and when not to.',
    },
    metric: { es: 'Preguntate cada minuto: ¿estoy haciendo lo que mi campeón quiere hacer?', en: 'Ask yourself every minute: am I doing what my champion wants to do?' },
  },
  {
    id: 'gold-platinum',
    from: { es: 'Oro', en: 'Gold' },
    to: { es: 'Platino', en: 'Platinum' },
    icon: '⚔️',
    focus: { es: 'Mecánicas', en: 'Mechanics' },
    description: {
      es: 'Mejorá tu spacing, rotación de habilidades, y movimiento. La diferencia entre Gold y Plat es mecánica pura.',
      en: 'Improve your spacing, ability rotation, and movement. The difference between Gold and Plat is pure mechanics.',
    },
    tasks: [
      { es: 'Spacing: mantenete al rango máximo donde el enemigo no te puede pegar pero vos sí a él', en: 'Spacing: stay at max range where the enemy can\'t hit you but you can hit them' },
      { es: 'Rotación de habilidades: agresivo cuando tenés CDs listos, defensivo cuando están en cooldown', en: 'Ability rotation: aggressive when abilities are up, defensive when on cooldown' },
      { es: 'Practicá esquivar skillshots: jugá ARAM para practicar en un entorno caótico', en: 'Practice dodging skillshots: play ARAM to practice in a chaotic environment' },
      { es: 'Kiting/orb-walking: cliqueá enemigo → cliqueá suelo → repetí. Practicá en Practice Tool', en: 'Kiting/orb-walking: click enemy → click ground → repeat. Practice in Practice Tool' },
      { es: 'Aprendé a hacer combos rápidos con tu campeón: practicá en Practice Tool hasta que salgan de memoria', en: 'Learn fast combos with your champion: practice in Practice Tool until they become muscle memory' },
      { es: 'Usá Attack Move Click (A+click) para no misclickear en teamfights', en: 'Use Attack Move Click (A+click) to avoid misclicking in teamfights' },
    ],
    keyInsight: {
      es: 'Agresivo cuando tenés habilidades, defensivo cuando no las tenés. Así de simple.',
      en: 'Aggressive when abilities are up, defensive when they\'re not. That simple.',
    },
    metric: { es: 'Practicá 15 min de combos en Practice Tool antes de cada sesión de ranked', en: 'Practice 15 min of combos in Practice Tool before each ranked session' },
  },
  {
    id: 'platinum-emerald',
    from: { es: 'Platino', en: 'Platinum' },
    to: { es: 'Esmeralda', en: 'Emerald' },
    icon: '🔍',
    focus: { es: 'Identidad del campeón enemigo', en: 'Enemy champion identity' },
    description: {
      es: 'Ya sabés lo que vos querés hacer. Ahora aprendé lo que el ENEMIGO quiere hacer y castigalo.',
      en: 'You already know what you want to do. Now learn what the ENEMY wants to do and punish them.',
    },
    tasks: [
      { es: 'Aprendé qué quiere hacer cada campeón enemigo. Fiora quiere split push, Malphite quiere teamfight', en: 'Learn what each enemy champion wants to do. Fiora wants split push, Malphite wants teamfight' },
      { es: 'Castigá cuando juegan en contra de su identidad: si Fiora teamfightea, ganás el teamfight', en: 'Punish when they play against their identity: if Fiora teamfights, you win the teamfight' },
      { es: 'Evitá pelear en las condiciones que el enemigo quiere. No teamfightees como Fiora vs Malphite', en: 'Avoid fighting on the enemy\'s terms. Don\'t teamfight as Fiora vs Malphite' },
      { es: 'Trackeá la posición del jungler enemigo: si viste que empezó en bot, va a estar en top a las 3:15', en: 'Track enemy jungler position: if they started bot, they\'ll be top at 3:15' },
      { es: 'Mirá los ítems del enemigo: si tiene Zhonya, esperá a que lo use antes de commitear', en: 'Check enemy items: if they have Zhonya\'s, wait for them to use it before committing' },
      { es: 'Aprendé los cooldowns de las ults enemigas clave: Malphite R ~80s, Flash ~300s', en: 'Learn cooldowns of key enemy ults: Malphite R ~80s, Flash ~300s' },
    ],
    keyInsight: {
      es: 'No solo sabés lo que VOS querés hacer, sino lo que el ENEMIGO quiere hacer. Esa info te da ventaja.',
      en: 'You don\'t just know what YOU want to do, but what the ENEMY wants to do. That info gives you the edge.',
    },
    metric: { es: 'Antes de cada pelea preguntate: ¿qué quiere hacer el enemigo? ¿cómo lo evito?', en: 'Before every fight ask yourself: what does the enemy want to do? How do I prevent it?' },
  },
  {
    id: 'emerald-diamond',
    from: { es: 'Esmeralda', en: 'Emerald' },
    to: { es: 'Diamante', en: 'Diamond' },
    icon: '🧠',
    focus: { es: 'Mentalidad', en: 'Mentality' },
    description: {
      es: 'A este nivel, la diferencia es mental. Tilt, ego, y culpar al equipo te mantienen estancado.',
      en: 'At this level, the difference is mental. Tilt, ego, and blaming your team keep you stuck.',
    },
    tasks: [
      { es: 'Muteá todo: /mute all al inicio de cada partida. Sin excepciones', en: 'Mute all: /mute all at the start of every game. No exceptions' },
      { es: 'Enfocate solo en tu gameplay. Lo que hagan tus compañeros no lo podés controlar', en: 'Focus only on your gameplay. You can\'t control what your teammates do' },
      { es: 'Después de 2 derrotas seguidas, tomá un descanso de 15 min mínimo', en: 'After 2 losses in a row, take at least a 15 min break' },
      { es: 'Desapegate del resultado: juzgá tu rendimiento, no si ganaste o perdiste', en: 'Detach from results: judge your performance, not whether you won or lost' },
      { es: 'Nunca culpes a tu equipo. Incluso si fue su culpa, pensá qué podrías haber hecho vos diferente', en: 'Never blame your team. Even if it was their fault, think about what you could have done differently' },
      { es: 'Si estás tilteado, dejá de jugar. Punto. No es negociable', en: 'If you\'re tilted, stop playing. Period. Non-negotiable' },
      { es: 'Revisá 1 replay por día: buscá TUS errores, no los de tu equipo', en: 'Review 1 replay per day: look for YOUR mistakes, not your team\'s' },
    ],
    keyInsight: {
      es: 'Valorá tu rendimiento sin tener en cuenta el resultado. ¿Perdiste jugando bien? Bien. ¿Ganaste jugando mal? Mal.',
      en: 'Judge your performance without considering the result. Lost playing well? Good. Won playing badly? Bad.',
    },
    metric: { es: 'Rachas de tilt: apuntá a 0 sesiones donde jugaste tilteado', en: 'Tilt streaks: aim for 0 sessions where you played tilted' },
  },
  {
    id: 'diamond-master',
    from: { es: 'Diamante', en: 'Diamond' },
    to: { es: 'Master', en: 'Master' },
    icon: '⏱️',
    focus: { es: 'Tempo', en: 'Tempo' },
    description: {
      es: 'La diferencia entre Diamond y Master es que Diamond pierde 30-60 segundos por partida sin hacer nada productivo.',
      en: 'The difference between Diamond and Master is that Diamond wastes 30-60 seconds per game doing nothing productive.',
    },
    tasks: [
      { es: 'Nunca pierdas tiempo sin hacer nada. Si no sabés qué hacer, farmeá', en: 'Never waste time doing nothing. If you don\'t know what to do, farm' },
      { es: 'Hacé recall cuando debas: no camines con 2000 gold en el bolsillo', en: 'Recall when you should: don\'t walk around with 2000 gold in your pocket' },
      { es: 'Pusheá oleadas antes de rotar. No dejes CS gratis en tu lane', en: 'Push waves before rotating. Don\'t leave free CS in your lane' },
      { es: 'Llegá a los objetivos ANTES de que spawnen, no después. Posicionate 30s antes', en: 'Arrive at objectives BEFORE they spawn, not after. Position 30s early' },
      { es: 'Trackeá los timers de recall del enemigo: si hizo recall, tenés 30s para hacer una jugada', en: 'Track enemy recall timers: if they recalled, you have 30s to make a play' },
      { es: 'Limpiá la jungla eficientemente: sin downtime entre camps. Optimizá tu pathing', en: 'Clear jungle efficiently: no downtime between camps. Optimize your pathing' },
      { es: 'Cada segundo cuenta. Preguntate: ¿estoy siendo productivo ahora mismo?', en: 'Every second counts. Ask yourself: am I being productive right now?' },
    ],
    keyInsight: {
      es: 'Los buenos jugadores nunca pierden el tiempo. Siempre están haciendo algo productivo.',
      en: 'Good players never waste time. They\'re always doing something productive.',
    },
    metric: { es: 'Revisá replays y contá los segundos que perdés sin hacer nada. Reducí ese número', en: 'Review replays and count seconds you waste doing nothing. Reduce that number' },
  },
]
