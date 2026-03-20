/**
 * Coaching module data — structured data for all roles (Top, Jungle, Mid, ADC, Support).
 * Every user-visible string has ES and EN translations.
 */

// ─── Champion Pool Recommendations ──────────────────────────────────────────

export const CHAMPION_POOLS = {
  top: {
    'iron-bronze': [
      { id: 'Garen', name: 'Garen', difficulty: 1, reason: { es: 'Tanque simple, pasiva regenera vida', en: 'Simple tank, passive regens health' } },
      { id: 'Malphite', name: 'Malphite', difficulty: 1, reason: { es: 'Ult de engage, muy tanque vs AD', en: 'Engage ult, very tanky vs AD' } },
      { id: 'Mordekaiser', name: 'Mordekaiser', difficulty: 1, reason: { es: 'Ult 1v1, domina peleas aisladas', en: 'Ult 1v1, dominates isolated fights' } },
    ],
    'silver-gold': [
      { id: 'Darius', name: 'Darius', difficulty: 2, reason: { es: 'Lane bully, resets en teamfights', en: 'Lane bully, teamfight resets' } },
      { id: 'Camille', name: 'Camille', difficulty: 2, reason: { es: 'Splitpush + engage con ult', en: 'Splitpush + engage with ult' } },
      { id: 'Sett', name: 'Sett', difficulty: 1, reason: { es: 'Trades cortos, W absorbe dano', en: 'Short trades, W absorbs damage' } },
    ],
    'plat-emerald': [
      { id: 'Fiora', name: 'Fiora', difficulty: 3, reason: { es: 'Splitpush pura, outplay con W', en: 'Pure splitpush, outplay with W' } },
      { id: 'Jax', name: 'Jax', difficulty: 2, reason: { es: 'Escala como monstruo, 1v1 letal', en: 'Scales like a monster, lethal 1v1' } },
      { id: 'Aatrox', name: 'Aatrox', difficulty: 2, reason: { es: 'Sustain en peleas, teamfighter', en: 'Sustain in fights, teamfighter' } },
    ],
    'diamond-plus': [
      { id: 'Jayce', name: 'Jayce', difficulty: 3, reason: { es: 'Poke + all-in, domina early', en: 'Poke + all-in, early dominance' } },
      { id: 'Gangplank', name: 'Gangplank', difficulty: 3, reason: { es: 'Barriles escalan, presion global con R', en: 'Barrels scale, global pressure with R' } },
      { id: 'Kennen', name: 'Kennen', difficulty: 2, reason: { es: 'Teamfight con ult, safe laning', en: 'Teamfight with ult, safe laning' } },
    ],
  },
  jungle: {
    'iron-bronze': [
      { id: 'Warwick', name: 'Warwick', difficulty: 1, reason: { es: 'Sustain + ganks faciles', en: 'Sustain + easy ganks' } },
      { id: 'Amumu', name: 'Amumu', difficulty: 1, reason: { es: 'CC en area, team fights', en: 'AoE CC, team fights' } },
      { id: 'MasterYi', name: 'Master Yi', difficulty: 1, reason: { es: 'Escala fuerte, castiga falta de CC', en: 'Scales hard, punishes no CC' } },
    ],
    'silver-gold': [
      { id: 'Viego', name: 'Viego', difficulty: 2, reason: { es: 'Resets, puede 1v9', en: 'Resets, can 1v9' } },
      { id: 'Vi', name: 'Vi', difficulty: 1, reason: { es: 'CC con ult point-and-click', en: 'Point-click CC ult' } },
      { id: 'Nocturne', name: 'Nocturne', difficulty: 2, reason: { es: 'Presion global con R', en: 'Global pressure R' } },
    ],
    'plat-emerald': [
      { id: 'LeeSin', name: 'Lee Sin', difficulty: 3, reason: { es: 'Playmaker, alto skill ceiling', en: 'Playmaker, high skill ceiling' } },
      { id: 'Lillia', name: 'Lillia', difficulty: 2, reason: { es: 'Clear rapido, AoE en TF', en: 'Fast clear, team fight AoE' } },
      { id: 'RekSai', name: "Rek'Sai", difficulty: 2, reason: { es: 'Dominio en early game', en: 'Early game dominance' } },
    ],
    'diamond-plus': [
      { id: 'Nidalee', name: 'Nidalee', difficulty: 3, reason: { es: 'Clear mas rapido, invade king', en: 'Fastest clear, invade king' } },
      { id: 'Elise', name: 'Elise', difficulty: 3, reason: { es: 'Especialista en tower dives', en: 'Tower dive specialist' } },
      { id: 'Kindred', name: 'Kindred', difficulty: 3, reason: { es: 'Escala, potencial de outplay', en: 'Scales, outplay potential' } },
    ],
  },
  mid: {
    'iron-bronze': [
      { id: 'Annie', name: 'Annie', difficulty: 1, reason: { es: 'Stun facil, burst con ult', en: 'Easy stun, burst with ult' } },
      { id: 'Veigar', name: 'Veigar', difficulty: 1, reason: { es: 'Escala infinito, cage de zona', en: 'Infinite scaling, zone cage' } },
      { id: 'Lux', name: 'Lux', difficulty: 1, reason: { es: 'Poke seguro, root + burst', en: 'Safe poke, root + burst' } },
    ],
    'silver-gold': [
      { id: 'Ahri', name: 'Ahri', difficulty: 2, reason: { es: 'Mobilidad con R, picks con E', en: 'Mobility with R, picks with E' } },
      { id: 'Viktor', name: 'Viktor', difficulty: 2, reason: { es: 'Control de zona, escala fuerte', en: 'Zone control, scales hard' } },
      { id: 'Syndra', name: 'Syndra', difficulty: 2, reason: { es: 'Burst alto, stun versatil', en: 'High burst, versatile stun' } },
    ],
    'plat-emerald': [
      { id: 'Zed', name: 'Zed', difficulty: 3, reason: { es: 'Asesino AD, outplay con sombras', en: 'AD assassin, outplay with shadows' } },
      { id: 'Leblanc', name: 'LeBlanc', difficulty: 3, reason: { es: 'Burst rapido, escape con W', en: 'Fast burst, escape with W' } },
      { id: 'Orianna', name: 'Orianna', difficulty: 2, reason: { es: 'Control de zona, ult cambia teamfights', en: 'Zone control, ult changes teamfights' } },
    ],
    'diamond-plus': [
      { id: 'Azir', name: 'Azir', difficulty: 3, reason: { es: 'DPS + engage con R, alto skill ceiling', en: 'DPS + engage with R, high skill ceiling' } },
      { id: 'Akali', name: 'Akali', difficulty: 3, reason: { es: 'Mobilidad extrema, outplay mecanico', en: 'Extreme mobility, mechanical outplay' } },
      { id: 'TwistedFate', name: 'Twisted Fate', difficulty: 2, reason: { es: 'Presion global con R, wave clear', en: 'Global pressure with R, wave clear' } },
    ],
  },
  adc: {
    'iron-bronze': [
      { id: 'MissFortune', name: 'Miss Fortune', difficulty: 1, reason: { es: 'Ult de teamfight, laning facil', en: 'Teamfight ult, easy laning' } },
      { id: 'Ashe', name: 'Ashe', difficulty: 1, reason: { es: 'Utilidad con R, vision con E', en: 'Utility with R, vision with E' } },
      { id: 'Jinx', name: 'Jinx', difficulty: 1, reason: { es: 'Resets en teamfights, escala fuerte', en: 'Teamfight resets, scales hard' } },
    ],
    'silver-gold': [
      { id: 'Kaisa', name: "Kai'Sa", difficulty: 2, reason: { es: 'Versatil AP/AD, ult reposiciona', en: 'Versatile AP/AD, ult repositions' } },
      { id: 'Ezreal', name: 'Ezreal', difficulty: 2, reason: { es: 'Seguro con E, poke con Q', en: 'Safe with E, poke with Q' } },
      { id: 'Jhin', name: 'Jhin', difficulty: 2, reason: { es: 'Utility + burst, ult de rango', en: 'Utility + burst, long range ult' } },
    ],
    'plat-emerald': [
      { id: 'Draven', name: 'Draven', difficulty: 3, reason: { es: 'Snowball con pasiva, dano early', en: 'Snowball with passive, early damage' } },
      { id: 'Vayne', name: 'Vayne', difficulty: 2, reason: { es: 'Tank shredder, outplay con ult + Q', en: 'Tank shredder, outplay with ult + Q' } },
      { id: 'Aphelios', name: 'Aphelios', difficulty: 3, reason: { es: 'DPS extremo, multiples armas', en: 'Extreme DPS, multiple weapons' } },
    ],
    'diamond-plus': [
      { id: 'Kalista', name: 'Kalista', difficulty: 3, reason: { es: 'Kite perfecto, sinergia con support', en: 'Perfect kite, support synergy' } },
      { id: 'Zeri', name: 'Zeri', difficulty: 3, reason: { es: 'Mobilidad extrema, teamfights largos', en: 'Extreme mobility, long teamfights' } },
      { id: 'Lucian', name: 'Lucian', difficulty: 2, reason: { es: 'Lane dominante, burst con combo', en: 'Lane dominant, burst with combo' } },
    ],
  },
  support: {
    'iron-bronze': [
      { id: 'Nautilus', name: 'Nautilus', difficulty: 1, reason: { es: 'Hook + cadena de CC', en: 'Hook + CC chain' } },
      { id: 'Maokai', name: 'Maokai', difficulty: 1, reason: { es: 'Ward gratis en bushes, root', en: 'Free bush wards, root' } },
      { id: 'Lux', name: 'Lux', difficulty: 1, reason: { es: 'Dano + escudo + root', en: 'Damage + shield + root' } },
    ],
    'silver-gold': [
      { id: 'Thresh', name: 'Thresh', difficulty: 2, reason: { es: 'Lantern salva, versatil', en: 'Lantern saves, versatile' } },
      { id: 'Nami', name: 'Nami', difficulty: 2, reason: { es: 'Sustain + engage', en: 'Sustain + engage' } },
      { id: 'Zyra', name: 'Zyra', difficulty: 2, reason: { es: 'Carry de dano desde support', en: 'Damage carry from support' } },
    ],
    'plat-emerald': [
      { id: 'Pyke', name: 'Pyke', difficulty: 3, reason: { es: 'Generacion de oro, ejecucion', en: 'Gold generation, execute' } },
      { id: 'Renata', name: 'Renata Glasc', difficulty: 2, reason: { es: 'W cambia el juego', en: 'W is game-changing' } },
      { id: 'Bard', name: 'Bard', difficulty: 3, reason: { es: 'Roaming, jugadas creativas', en: 'Roaming, creative plays' } },
    ],
    'diamond-plus': [
      { id: 'Thresh', name: 'Thresh', difficulty: 3, reason: { es: 'Hooks perfectos, timing de lantern', en: 'Perfect hooks, lantern timing' } },
      { id: 'Rakan', name: 'Rakan', difficulty: 3, reason: { es: 'Engage + escape', en: 'Engage + escape' } },
      { id: 'Janna', name: 'Janna', difficulty: 2, reason: { es: 'Reina del peel, anti-engage', en: 'Peel queen, anti-engage' } },
    ],
  },
}

// ─── Jungle Clear Routes ────────────────────────────────────────────────────

export const CLEAR_ROUTES = {
  Warwick: [
    {
      name: { es: 'Full Clear - Lado Azul', en: 'Full Clear Blue Side' },
      steps: [
        { time: '1:30', camp: { es: 'Blue Buff (Smite)', en: 'Blue Buff (Smite)' } },
        { time: '1:48', camp: { es: 'Gromp', en: 'Gromp' } },
        { time: '2:08', camp: { es: 'Lobos', en: 'Wolves' } },
        { time: '2:28', camp: { es: 'Raptores', en: 'Raptors' } },
        { time: '2:48', camp: { es: 'Red Buff', en: 'Red Buff' } },
        { time: '3:08', camp: { es: 'Krugs', en: 'Krugs' } },
        { time: '3:15', camp: { es: 'Scuttle Crab', en: 'Scuttle Crab' } },
        { time: '3:20', camp: { es: 'Gank bot/mid', en: 'Gank bot/mid' } },
      ],
    },
    {
      name: { es: 'Full Clear - Lado Rojo', en: 'Full Clear Red Side' },
      steps: [
        { time: '1:30', camp: { es: 'Red Buff (Smite)', en: 'Red Buff (Smite)' } },
        { time: '1:48', camp: { es: 'Krugs', en: 'Krugs' } },
        { time: '2:15', camp: { es: 'Raptores', en: 'Raptors' } },
        { time: '2:35', camp: { es: 'Lobos', en: 'Wolves' } },
        { time: '2:55', camp: { es: 'Blue Buff', en: 'Blue Buff' } },
        { time: '3:10', camp: { es: 'Gromp (Smite)', en: 'Gromp (Smite)' } },
        { time: '3:15', camp: { es: 'Scuttle Crab', en: 'Scuttle Crab' } },
        { time: '3:20', camp: { es: 'Gank top/mid', en: 'Gank top/mid' } },
      ],
    },
  ],
  Viego: [
    {
      name: { es: 'Full Clear - Lado Azul', en: 'Full Clear Blue Start' },
      steps: [
        { time: '1:30', camp: { es: 'Blue Buff (Smite)', en: 'Blue (Smite)' } },
        { time: '1:47', camp: { es: 'Gromp', en: 'Gromp' } },
        { time: '2:05', camp: { es: 'Lobos', en: 'Wolves' } },
        { time: '2:22', camp: { es: 'Raptores', en: 'Raptors' } },
        { time: '2:42', camp: { es: 'Red Buff (Smite)', en: 'Red (Smite)' } },
        { time: '3:00', camp: { es: 'Krugs', en: 'Krugs' } },
        { time: '3:20', camp: { es: 'Scuttle Crab', en: 'Scuttle Crab' } },
      ],
    },
  ],
  LeeSin: [
    {
      name: { es: '3 Camps - Gank Rapido', en: '3 Camp Fast Gank' },
      steps: [
        { time: '1:30', camp: { es: 'Red Buff (Smite)', en: 'Red Buff (Smite)' } },
        { time: '1:50', camp: { es: 'Blue Buff', en: 'Blue Buff' } },
        { time: '2:12', camp: { es: 'Gromp', en: 'Gromp' } },
        { time: '2:30', camp: { es: 'Gank top/mid (nivel 3 power spike)', en: 'Gank top/mid (level 3 power spike)' } },
      ],
    },
  ],
}

// ─── Objective Timers ───────────────────────────────────────────────────────

export const OBJECTIVES = [
  {
    name: { es: 'Voidgrubs / Heraldo del Rift', en: 'Rift Herald / Voidgrubs' },
    spawn: '5:00',
    respawn: '5:00',
    priority: { es: 'Tomar voidgrubs antes de las 14:00', en: 'Take voidgrubs before 14:00' },
  },
  {
    name: { es: 'Dragon', en: 'Dragon' },
    spawn: '5:00',
    respawn: '5:00',
    priority: {
      es: 'Prioridad: Infernal > Montana > Oceano > Hextech > Nube',
      en: 'Priority: Infernal > Mountain > Ocean > Hextech > Cloud',
    },
  },
  {
    name: { es: 'Baron Nashor', en: 'Baron Nashor' },
    spawn: '20:00',
    respawn: '5:00',
    priority: {
      es: 'Tomar cuando hay ventaja numerica y vision',
      en: 'Take with number advantage and vision',
    },
  },
  {
    name: { es: 'Dragon Ancestral', en: 'Elder Dragon' },
    spawn: '35:00',
    respawn: '5:00',
    priority: {
      es: 'Maxima prioridad — buff de ejecucion',
      en: 'Highest priority — execution buff',
    },
  },
]

export const OBJECTIVE_DECISIONS = {
  es: [
    'Si 2+ enemigos muertos Y dragon esta arriba → tomar dragon',
    'Si baron esta arriba Y tenes vision → ping baron',
    'Si el jungler enemigo esta muerto → contestar objetivo opuesto',
    'Nunca forcear baron sin vision del jungler enemigo',
  ],
  en: [
    'If 2+ enemies dead AND dragon up → take dragon',
    'If baron up AND you have vision → ping baron',
    'If enemy jungler is dead → contest opposite objective',
    'Never force baron without vision of enemy jungler',
  ],
}

// ─── Minute-by-Minute Gameplan (Jungle) ─────────────────────────────────────

export const JUNGLE_GAMEPLAN = [
  {
    time: '0:00 - 1:25',
    action: {
      es: 'Comprar items, poner ward en buff enemigo o pixel brush, ir al campamento inicial',
      en: 'Buy items, place ward at enemy buff or pixel brush, go to starting camp',
    },
  },
  {
    time: '1:30 - 3:15',
    action: {
      es: 'Primer clear (ver rutas de arriba)',
      en: 'First clear (see route above)',
    },
  },
  {
    time: '3:15 - 5:00',
    action: {
      es: 'Gankear o farmear segunda rotacion, recall para componente',
      en: 'Gank or farm second rotation, recall for component',
    },
  },
  {
    time: '5:00 - 8:00',
    action: {
      es: 'Contestar primer dragon/grubs, trackear al jungler enemigo',
      en: 'Contest first dragon/grubs, track enemy jungler',
    },
  },
  {
    time: '8:00 - 14:00',
    action: {
      es: 'Asegurar grubs o 2do dragon, buscar tower dives',
      en: 'Secure grubs or 2nd dragon, look for tower dives',
    },
  },
  {
    time: '14:00 - 20:00',
    action: {
      es: 'Agruparse para setup de baron, asegurar heraldo si todavia esta',
      en: 'Group for baron setup, secure rift herald if still up',
    },
  },
  {
    time: '20:00+',
    action: {
      es: 'Dance de baron, team fights, control de vision',
      en: 'Baron dance, team fights, vision control',
    },
  },
]

// ─── Support Gameplan ───────────────────────────────────────────────────────

export const SUPPORT_WARDING = [
  {
    phase: { es: 'Fase de linea (0-14 min)', en: 'Laning phase (0-14 min)' },
    spots: {
      es: [
        'Tri-bush de tu lado si estas en lado rojo',
        'River brush cerca del dragon',
        'Pixel brush en el rio (centro entre mid y bot)',
        'Bush de la lane enemiga si estan empujados',
      ],
      en: [
        'Tri-bush on your side if you are red side',
        'River brush near dragon pit',
        'Pixel brush in river (center between mid and bot)',
        'Enemy lane bush if they are pushed up',
      ],
    },
  },
  {
    phase: { es: 'Mid game (14-25 min)', en: 'Mid game (14-25 min)' },
    spots: {
      es: [
        'Entrada a la jungla enemiga (raptores o lobos)',
        'Bushes alrededor de baron/dragon',
        'Pixel brush de mid para vision de roams',
        'Deep ward en el buff enemigo',
      ],
      en: [
        'Enemy jungle entrance (raptors or wolves)',
        'Bushes around baron/dragon pit',
        'Mid pixel brush for roam vision',
        'Deep ward at enemy buff',
      ],
    },
  },
  {
    phase: { es: 'Setup de Baron (25+ min)', en: 'Baron setup (25+ min)' },
    spots: {
      es: [
        'Baron pit (control ward adentro)',
        'Entrada superior a la jungla enemiga',
        'Tri-bush de top lado enemigo',
        'Brush del rio entre mid y baron',
      ],
      en: [
        'Baron pit (control ward inside)',
        'Upper entrance to enemy jungle',
        'Enemy-side top tri-bush',
        'River brush between mid and baron',
      ],
    },
  },
]

export const SUPPORT_ROAMING = {
  es: [
    'Roamear a mid despues de pushear la wave bajo torre a las 6-8 min',
    'Acompanar al jungler en scuttle/dragon si no perdes mucho en bot',
    'Roamear cuando tu ADC tiene recall y la wave esta empujada',
    'No roamear si tu ADC puede morir 1v2 bajo torre',
  ],
  en: [
    'Roam mid after pushing wave under tower at 6-8 min',
    'Accompany jungler on scuttle/dragon if you do not lose much bot',
    'Roam when your ADC has recall and wave is pushed',
    'Do not roam if your ADC can die 1v2 under tower',
  ],
}

export const SUPPORT_DECISIONS = {
  es: [
    'Si sos Nautilus: engage cuando el ADC tiene 2+ items',
    'Si sos Nami: pelear por los carries',
    'Si sos Thresh: usar lantern para salvar al carry, no para engagear',
    'Si sos Lux: peel con Q, no desperdiciar binding para poke',
    'Engage si el carry enemigo esta adelantado sin flash',
    'Peel si el asesino enemigo tiene ult — proteger al ADC',
  ],
  en: [
    'If you are Nautilus: engage when ADC has 2+ items',
    'If you are Nami: peel for carries',
    'If you are Thresh: use lantern to save carry, not to engage',
    'If you are Lux: peel with Q, do not waste binding for poke',
    'Engage if enemy carry is overextended without flash',
    'Peel if enemy assassin has ult — protect ADC',
  ],
}

// ─── Climbing Tips by Elo ───────────────────────────────────────────────────

export const CLIMBING_TIPS = {
  'iron-bronze': {
    es: [
      'Concentrate en no morir. Maximo 3 muertes por partida.',
      'Farmear > kills. 10 CS = 1 kill en oro.',
      'No perseguir kills. Si mataste a 1, alejate.',
      'Siempre tener un control ward en el mapa.',
      'Jugar 2-3 campeones nomas. No cambiar cada partida.',
    ],
    en: [
      'Focus on not dying. 3 deaths max per game.',
      'Farm > kills. 10 CS = 1 kill in gold.',
      'Do not chase kills. If you got 1, back off.',
      'Always have a control ward on the map.',
      'Play 2-3 champions only. Do not switch every game.',
    ],
  },
  'silver-gold': {
    es: [
      'Trackear al jungler enemigo. Mirar el minimapa cada 5 segundos.',
      'Aprender a freezear y slow pushear.',
      'Wardear antes de hacer jugadas agresivas.',
      'Aprovechar los power spikes de nivel y de items.',
      'Si sacaste una kill, tomar un objetivo (torre, dragon, grubs).',
    ],
    en: [
      'Track enemy jungler. Look at minimap every 5 seconds.',
      'Learn to freeze and slow push.',
      'Ward before making aggressive plays.',
      'Capitalize on level and item power spikes.',
      'If you got a kill, take an objective (tower, dragon, grubs).',
    ],
  },
  'plat-emerald': {
    es: [
      'Tempo y wave management. Timear recalls con objetivos.',
      'Jugar alrededor de los power spikes del equipo.',
      'Aprender a hacer trades cortos y largos segun el matchup.',
      'Preparar vision 1 minuto antes de cada objetivo.',
      'Trackear summoner spells y ults del enemigo.',
    ],
    en: [
      'Tempo and wave management. Time your recalls with objectives.',
      'Play around team power spikes.',
      'Learn short vs long trades based on matchup.',
      'Set up vision 1 minute before each objective.',
      'Track enemy summoner spells and ults.',
    ],
  },
  'diamond-plus': {
    es: [
      'Mejoras del 1%. Trackear cooldowns. Predecir pathing enemigo.',
      'Jugar alrededor de las win conditions del equipo.',
      'Manipular waves para crear slow pushes antes de objetivos.',
      'Conocer los limites exactos de tu campeon.',
      'VOD review: analizar 1 muerte por partida y como evitarla.',
    ],
    en: [
      '1% improvements. Track cooldowns. Predict enemy pathing.',
      'Play around team win conditions.',
      'Manipulate waves to create slow pushes before objectives.',
      'Know your champion limits exactly.',
      'VOD review: analyze 1 death per game and how to avoid it.',
    ],
  },
}

// ─── UI Labels (i18n for the coaching tab itself) ───────────────────────────

export const COACHING_I18N = {
  es: {
    tabCoaching: 'Coaching',
    coachingTitle: 'Coaching — Todos los Roles',
    selectRole: 'Selecciona tu rol',
    selectElo: 'Selecciona tu elo',
    roleTop: 'Top',
    roleJungle: 'Jungle',
    roleMid: 'Mid',
    roleAdc: 'ADC',
    roleSupport: 'Support',
    eloIronBronze: 'Iron-Bronze',
    eloSilverGold: 'Silver-Gold',
    eloPlatEmerald: 'Plat-Emerald',
    eloDiamondPlus: 'Diamond+',
    champPoolTitle: 'Pool de Campeones Recomendado',
    selectAsMain: 'Seleccionar como Main',
    selectedMain: 'Main',
    difficultyLabel: 'Dificultad',
    clearRoutesTitle: 'Rutas de Clear',
    objectivesTitle: 'Objetivos — Timers y Prioridad',
    objectiveName: 'Objetivo',
    objectiveSpawn: 'Spawn',
    objectiveRespawn: 'Respawn',
    objectivePriority: 'Prioridad',
    decisionFlowTitle: 'Decisiones de Objetivos',
    gameplanTitle: 'Gameplan Minuto a Minuto',
    wardingTitle: 'Spots de Warding',
    roamingTitle: 'Timers de Roaming',
    engagePeelTitle: 'Engage vs Peel',
    climbingTipsTitle: 'Tips para Subir de Elo',
    noRoutesAvailable: 'No hay rutas disponibles para este campeon',
    supportGameplanTitle: 'Gameplan de Support',
    eloGoalsTitle: 'Objetivos por Elo — Ruta de Progresión',
    eloGoalsMetric: 'Métrica',
  },
  en: {
    tabCoaching: 'Coaching',
    coachingTitle: 'Coaching — All Roles',
    selectRole: 'Select your role',
    selectElo: 'Select your elo',
    roleTop: 'Top',
    roleJungle: 'Jungle',
    roleMid: 'Mid',
    roleAdc: 'ADC',
    roleSupport: 'Support',
    eloIronBronze: 'Iron-Bronze',
    eloSilverGold: 'Silver-Gold',
    eloPlatEmerald: 'Plat-Emerald',
    eloDiamondPlus: 'Diamond+',
    champPoolTitle: 'Recommended Champion Pool',
    selectAsMain: 'Select as Main',
    selectedMain: 'Main',
    difficultyLabel: 'Difficulty',
    clearRoutesTitle: 'Clear Routes',
    objectivesTitle: 'Objectives — Timers & Priority',
    objectiveName: 'Objective',
    objectiveSpawn: 'Spawn',
    objectiveRespawn: 'Respawn',
    objectivePriority: 'Priority',
    decisionFlowTitle: 'Objective Decisions',
    gameplanTitle: 'Minute-by-Minute Gameplan',
    wardingTitle: 'Warding Spots',
    roamingTitle: 'Roaming Timers',
    engagePeelTitle: 'Engage vs Peel',
    climbingTipsTitle: 'Climbing Tips',
    noRoutesAvailable: 'No routes available for this champion',
    supportGameplanTitle: 'Support Gameplan',
    eloGoalsTitle: 'Elo Goals — Progression Path',
    eloGoalsMetric: 'Metric',
  },
}

// ─── Elo bracket keys (used for selectors) ──────────────────────────────────

export const ELO_BRACKETS = [
  { key: 'iron-bronze', labelKey: 'eloIronBronze' },
  { key: 'silver-gold', labelKey: 'eloSilverGold' },
  { key: 'plat-emerald', labelKey: 'eloPlatEmerald' },
  { key: 'diamond-plus', labelKey: 'eloDiamondPlus' },
]

export const ROLE_OPTIONS = [
  { key: 'top', labelKey: 'roleTop' },
  { key: 'jungle', labelKey: 'roleJungle' },
  { key: 'mid', labelKey: 'roleMid' },
  { key: 'adc', labelKey: 'roleAdc' },
  { key: 'support', labelKey: 'roleSupport' },
]
