// Champion tier data by position
// Champion IDs use DDragon format (no spaces, no apostrophes)

export const POSITIONS = [
  { id: 'top', label: 'Top', icon: '🗡️' },
  { id: 'jungle', label: 'Jungle', icon: '🌲' },
  { id: 'mid', label: 'Mid', icon: '🔮' },
  { id: 'adc', label: 'ADC', icon: '🏹' },
  { id: 'support', label: 'Support', icon: '🛡️' },
];

export const CHAMPION_TIERS = {
  top: {
    S: ['Ambessa', 'KSante', 'Jax', 'Camille', 'Fiora'],
    A: ['Darius', 'Garen', 'Mordekaiser', 'Aatrox', 'Sett', 'Renekton', 'Riven', 'Gwen', 'Irelia', 'Volibear'],
    B: ['Ornn', 'Malphite', 'Shen', 'Gangplank', 'Jayce', 'Kennen', 'Gnar', 'Urgot', 'Illaoi', 'Yorick', 'Tryndamere', 'Nasus', 'Rumble', 'DrMundo', 'Sion', 'Poppy', 'Kled'],
    C: ['Teemo', 'Quinn', 'Vayne', 'Kayle', 'Singed', 'Heimerdinger', 'Vladimir', 'Chogath', 'TahmKench', 'Rengar', 'Wukong', 'Pantheon', 'Olaf', 'Gragas'],
    D: ['Warwick', 'Akali', 'Yasuo', 'Yone', 'Sylas'],
  },
  jungle: {
    S: ['Viego', 'LeeSin', 'Elise', 'Nidalee', 'Graves'],
    A: ['Khazix', 'RekSai', 'Vi', 'Nocturne', 'Lillia', 'Hecarim', 'Kindred', 'Ekko', 'Diana', 'JarvanIV'],
    B: ['Warwick', 'Amumu', 'MasterYi', 'Kayn', 'Shyvana', 'Sejuani', 'Volibear', 'XinZhao', 'Rammus', 'Zac', 'Skarner', 'Udyr', 'Nunu', 'Briar', 'Belveth', 'Evelynn', 'Fiddlesticks', 'Shaco'],
    C: ['Olaf', 'Trundle', 'Wukong', 'Rengar', 'Gragas', 'Ivern', 'Taliyah', 'Poppy', 'Maokai'],
    D: ['Pantheon', 'Rumble', 'Talon', 'Qiyana', 'Gwen'],
  },
  mid: {
    S: ['Ahri', 'Syndra', 'Orianna', 'Hwei', 'Aurora'],
    A: ['Zed', 'LeBlanc', 'Viktor', 'Lissandra', 'Vex', 'Akali', 'Katarina', 'Sylas', 'Cassiopeia', 'Azir'],
    B: ['Annie', 'Lux', 'Malzahar', 'Veigar', 'Brand', 'Ziggs', 'Xerath', 'Ekko', 'Fizz', 'Talon', 'Qiyana', 'Galio', 'TwistedFate', 'Yone', 'Yasuo', 'Ryze', 'Anivia', 'Corki', 'Kassadin', 'Naafiri'],
    C: ['Rumble', 'Heimerdinger', 'Vladimir', 'Swain', 'Neeko', 'AurelionSol', 'Kayle', 'Pantheon'],
    D: ['Tristana', 'Lucian', 'Jayce'],
  },
  adc: {
    S: ['Jinx', 'KaiSa', 'Jhin', 'Ashe', 'MissFortune'],
    A: ['Ezreal', 'Vayne', 'Caitlyn', 'Draven', 'Lucian', 'Samira', 'Xayah', 'Sivir', 'Tristana'],
    B: ['Aphelios', 'KogMaw', 'Twitch', 'Varus', 'Nilah', 'Smolder', 'Kalista', 'Zeri'],
    C: ['Corki', 'Quinn', 'Graves'],
    D: ['Yasuo', 'Ziggs', 'Swain', 'Seraphine'],
  },
  support: {
    S: ['Thresh', 'Nautilus', 'Lulu', 'Nami', 'Janna'],
    A: ['Blitzcrank', 'Leona', 'Pyke', 'Rakan', 'Rell', 'Senna', 'Soraka', 'Milio', 'Karma'],
    B: ['Braum', 'Alistar', 'Morgana', 'Zyra', 'Brand', 'Xerath', 'Lux', 'Seraphine', 'RenataGlasc', 'Bard', 'Taric', 'Sona', 'Yuumi', 'TahmKench', 'Maokai', 'Poppy', 'Swain'],
    C: ['Neeko', 'Velkoz', 'Heimerdinger', 'Fiddlesticks', 'Shaco', 'Shen', 'Zilean', 'Ivern'],
    D: ['Ashe', 'MissFortune', 'Pantheon', 'Camille'],
  },
};

export const TIER_COLORS = {
  S: '#ff7f7f',
  A: '#ffbf7f',
  B: '#ffdf7f',
  C: '#bfff7f',
  D: '#7fbfff',
  F: '#888',
};

export const TIER_ORDER = ['S', 'A', 'B', 'C', 'D', 'F'];

/**
 * Get a champion's tier for a given position.
 * Returns { tier, position } or null if position is invalid.
 * Champions not listed in a position get tier 'F'.
 */
export function getChampionTier(championId, position) {
  const positionTiers = CHAMPION_TIERS[position];
  if (!positionTiers) return null;

  for (const tier of TIER_ORDER) {
    if (tier === 'F') break;
    if (positionTiers[tier] && positionTiers[tier].includes(championId)) {
      return { tier, position };
    }
  }

  return { tier: 'F', position };
}

/**
 * Get all positions where a champion appears (any tier S-D).
 * Returns an array of position ID strings.
 */
export function getChampionPositions(championId) {
  const positions = [];

  for (const position of Object.keys(CHAMPION_TIERS)) {
    const tiers = CHAMPION_TIERS[position];
    for (const tier of TIER_ORDER) {
      if (tier === 'F') break;
      if (tiers[tier] && tiers[tier].includes(championId)) {
        positions.push(position);
        break;
      }
    }
  }

  return positions;
}
