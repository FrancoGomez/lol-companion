// Champion identity, gameplan, combos and build reasoning for all 172 LoL champions
// Uses DDragon champion IDs as keys
// Bilingual: es (Argentine Spanish with voseo) + en

export const CHAMPION_IDENTITIES = {
  Aatrox: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de teamfight que sustenta con daño. Cuanto más pegás, más curás. Sos una amenaza constante si el enemigo no tiene Grievous Wounds.',
      en: 'Teamfight bruiser who sustains through damage. The more you hit, the more you heal. Constant threat if the enemy lacks Grievous Wounds.'
    },
    gameplan: {
      early: {
        es: 'Jugá agresivo nivel 1-3 con Q sweetspots. Cada Q tiene un punto dulce en el borde — si lo pegás, hace mucho más daño y knockea. Usá W para asegurar el segundo y tercer Q.',
        en: 'Play aggressive levels 1-3 with Q sweetspots. Each Q has a sweet spot at the edge — hitting it deals much more damage and knocks up. Use W to guarantee second and third Q.'
      },
      mid: {
        es: 'Con Gore y Black Cleaver sos un monstruo en teamfights. Buscá flanqueos con R activada. Tu ulti te da más AD, más curación y revive si conseguís un kill.',
        en: 'With Gore and Black Cleaver you\'re a teamfight monster. Look for flanks with R active. Your ult gives more AD, more healing and revive if you get a kill.'
      },
      late: {
        es: 'Tu trabajo es ser la línea frontal y pegar Q sweetspots en el mayor número de enemigos posible. Con R activa podés tanquear muchísimo. Si te focusean, tu equipo pega libre.',
        en: 'Your job is to frontline and hit Q sweetspots on as many enemies as possible. With R active you can tank a lot. If they focus you, your team deals free damage.'
      }
    },
    combo: {
      basic: {
        keys: 'Q1 → W → Q2 → Q3 → E',
        es: 'Q1 para pokear → W para atrapar → Q2 sweetspot sobre el W → Q3 para el knock-up grande → E para ajustar posición en cualquier Q.',
        en: 'Q1 to poke → W to trap → Q2 sweetspot on W pull → Q3 for the big knock-up → E to adjust position on any Q.'
      },
      advanced: {
        keys: 'R → E → Q1 → W → AA → Q2 → AA → Q3 → AA',
        es: 'R para el buff → E+Q1 para cerrar distancia → W debajo de ellos → Auto entre cada Q para maximizar daño → Q2 y Q3 sweetspots garantizados.',
        en: 'R for buff → E+Q1 to close distance → W under them → Auto between each Q to maximize damage → Q2 and Q3 sweetspots guaranteed.'
      }
    },
    buildReasoning: {
      es: 'Eclipse o Goredrinker según matchup — Eclipse si necesitás burst, Gore si van a ser peleas largas. Black Cleaver es core porque tu Q aplica stacks rápido y el armor shred beneficia a tu equipo. Death\'s Dance te hace unkillable con la ulti.',
      en: 'Eclipse or Goredrinker depending on matchup — Eclipse if you need burst, Gore for extended fights. Black Cleaver is core because your Q applies stacks fast and armor shred helps your team. Death\'s Dance makes you unkillable with ult.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero siempre: es todo tu daño y clear. E segundo para más dashes y daño. W último porque el CD no baja mucho y el pull duration es fijo.',
      en: 'Q first always: it\'s all your damage and clear. E second for more dashes and damage. W last because CD doesn\'t decrease much and pull duration is fixed.'
    }
  },
  Ahri: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Maga assassin con movilidad extrema. Tu trabajo es pickear targets aislados con E (charm) y ejecutar con el combo completo. Muy segura gracias a las 3 cargas de R.',
      en: 'Assassin mage with extreme mobility. Your job is to pick isolated targets with E (charm) and execute with full combo. Very safe thanks to 3 R charges.'
    },
    gameplan: {
      early: {
        es: 'Farmeá con Q que pasa y vuelve (pega true damage en la vuelta). Pokeá con Q a través de la wave. Nivel 3 si pegás E es kill con Ignite. Jugá segura hasta nivel 6.',
        en: 'Farm with Q that goes and returns (deals true damage on return). Poke with Q through the wave. Level 3 if you land E it\'s a kill with Ignite. Play safe until level 6.'
      },
      mid: {
        es: 'Roameá constantemente. Con R tenés 3 dashes para entrar, matar y salir. Buscá picks en el río, en rotaciones. Tu E es tu herramienta más importante — sin charm no matás.',
        en: 'Roam constantly. With R you have 3 dashes to go in, kill and get out. Look for picks in river, on rotations. Your E is your most important tool — no charm no kill.'
      },
      late: {
        es: 'En teamfights buscá flanquear y charmar al carry enemigo. Si no podés, usá R para esquivar y pokeá con Q. Nunca seas la primera en entrar a menos que puedas one-shotear y salir.',
        en: 'In teamfights look to flank and charm the enemy carry. If you can\'t, use R to dodge and poke with Q. Never be first to go in unless you can one-shot and get out.'
      }
    },
    combo: {
      basic: {
        keys: 'E → Q → W',
        es: 'E para charmar → Q inmediato (está garantizado) → W para el daño extra. Simple y efectivo para trades en lane.',
        en: 'E to charm → immediate Q (it\'s guaranteed) → W for extra damage. Simple and effective for lane trades.'
      },
      advanced: {
        keys: 'R → E → W → Q → R → R',
        es: 'R hacia adelante para cerrar distancia → E charm → W + Q para burst → R para perseguir o R para escapar. Usá los dashes de R para reposicionarte.',
        en: 'R forward to close distance → E charm → W + Q for burst → R to chase or R to escape. Use R dashes to reposition.'
      }
    },
    buildReasoning: {
      es: 'Luden\'s para waveclear y poke con la pasiva de daño extra. Shadowflame amplifica tu burst contra targets con poca MR. Rabadon\'s para escalar. Zhonyas si necesitás tiempo después de entrar con R.',
      en: 'Luden\'s for waveclear and poke with bonus damage passive. Shadowflame amplifies burst against low MR targets. Rabadon\'s to scale. Zhonya\'s if you need time after going in with R.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: waveclear y poke principal. W segundo: baja el CD y sube el daño de los fueguitos. E último: el charm duration sube poco, lo importante es pegarlo.',
      en: 'Q first: main waveclear and poke. W second: lowers CD and increases foxfire damage. E last: charm duration barely increases, landing it is what matters.'
    }
  },
  Akali: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Assassin AP con movilidad infinita. Entrás, matás al carry y salís con tu shroud. Difícil de aprender pero devastadora cuando la dominás.',
      en: 'AP assassin with infinite mobility. Go in, kill the carry, get out with shroud. Hard to learn but devastating when mastered.'
    },
    gameplan: {
      early: {
        es: 'Nivel 1-5 es débil. Farmeá con Q y usá la pasiva para tradear corto (Q → auto pasiva → alejarte). Nivel 6 es tu primer powerspike real — buscá all-in.',
        en: 'Levels 1-5 are weak. Farm with Q and use passive to short trade (Q → passive auto → walk away). Level 6 is your first real powerspike — look for all-in.'
      },
      mid: {
        es: 'Roameá y matá todo lo que esté solo. Con Hextech Rocketbelt tenés aún más gap close. Siempre tené en cuenta el CD de tu R — sin ulti no podés hacer mucho.',
        en: 'Roam and kill anything that\'s alone. With Hextech Rocketbelt you have even more gap close. Always track your R cooldown — without ult you can\'t do much.'
      },
      late: {
        es: 'Esperá a que empiece la teamfight y entrá por el flanco. Tu target es el ADC o el mago. Usá W (shroud) para que no te puedan targetear mientras esperás cooldowns.',
        en: 'Wait for the teamfight to start and enter from the flank. Your target is the ADC or mage. Use W (shroud) so they can\'t target you while waiting for cooldowns.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → AA(pasiva) → Q → AA(pasiva)',
        es: 'Q para marcar → caminá fuera del rango para activar pasiva → Auto potenciado → repetí. Este trade corto gana casi cualquier lane.',
        en: 'Q to mark → walk out of range to proc passive → empowered Auto → repeat. This short trade wins almost any lane.'
      },
      advanced: {
        keys: 'R1 → E → Q → AA → W → E2 → Q → R2',
        es: 'R1 para entrar → E shuriken → Q mientras volás → Auto pasiva → W para invisibilidad → E2 para volver a ellos → Q → R2 para ejecutar.',
        en: 'R1 to engage → E shuriken → Q while dashing → Passive auto → W for invisibility → E2 to snap back → Q → R2 to execute.'
      }
    },
    buildReasoning: {
      es: 'Hextech Rocketbelt da AP, pen mágica y otro dash — todo lo que necesitás. Shadowflame amplifica burst. Zhonyas te deja entrar, hacer daño, stasis y esperar CDs. Rabadon\'s para cerrar.',
      en: 'Hextech Rocketbelt gives AP, magic pen and another dash — everything you need. Shadowflame amplifies burst. Zhonya\'s lets you go in, deal damage, stasis and wait for CDs. Rabadon\'s to close.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: tu pan de cada día, daño y farmeo. E segundo: más daño en el combo y menor CD. W último: la invisibilidad no escala, solo el CD baja un poco.',
      en: 'Q first: your bread and butter, damage and farming. E second: more combo damage and lower CD. W last: invisibility doesn\'t scale, only CD drops slightly.'
    }
  },
  Akshan: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Marksman de midlane con roaming agresivo. Tu pasiva revive aliados si matás al Scoundrel. Jugá como un ADC agresivo que busca escaramuzas 1v1 y 2v2.',
      en: 'Midlane marksman with aggressive roaming. Your passive revives allies if you kill the Scoundrel. Play as an aggressive ADC looking for 1v1 and 2v2 skirmishes.'
    },
    gameplan: {
      early: {
        es: 'Tu auto doble (pasiva) tradea muy bien nivel 1-2. Usá Q boomerang a través de la wave para push + poke. Nivel 3 con E podés hacer trades largos envolviendo paredes.',
        en: 'Your double auto (passive) trades very well levels 1-2. Use Q boomerang through wave for push + poke. Level 3 with E you can make extended trades swinging around walls.'
      },
      mid: {
        es: 'Roameá con W (camuflaje) para buscar kills en sidelanes. Tu pasiva de revive puede cambiar la partida — si tu equipo pierde una pelea, matá al Scoundrel y revivís a todos.',
        en: 'Roam with W (camouflage) to look for kills in sidelanes. Your revive passive can swing the game — if your team loses a fight, kill the Scoundrel and revive everyone.'
      },
      late: {
        es: 'No sos un ADC tradicional de teamfight. Buscá flanqueos con E, ejecutá con R (el daño escala con vida perdida). Siempre priorizá matar al Scoundrel para el revive.',
        en: 'You\'re not a traditional teamfight ADC. Look for flanks with E, execute with R (damage scales with missing health). Always prioritize killing the Scoundrel for the revive.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → AA → AA',
        es: 'Q boomerang → dos autos rápidos (pasiva de doble shot). Cancelá el segundo auto con movimiento para tradear más fluido.',
        en: 'Q boomerang → two quick autos (double shot passive). Cancel second auto with movement for smoother trading.'
      },
      advanced: {
        keys: 'E → Q → AA → AA → E(recast)',
        es: 'E en una pared para swinguear → Q mientras girás → Autos durante el swing (cada hit resetea el swing) → Recasteá E para salir.',
        en: 'E on a wall to swing → Q while spinning → Autos during swing (each hit resets the swing) → Recast E to exit.'
      }
    },
    buildReasoning: {
      es: 'Kraken Slayer synergiza con tu pasiva de doble auto — cada auto doble cuenta stacks más rápido. BOTRK te da duelo y sustain. Wit\'s End si hay mucho AP. Guinsoo\'s como opción on-hit.',
      en: 'Kraken Slayer synergizes with double auto passive — each double auto stacks faster. BOTRK gives dueling and sustain. Wit\'s End if heavy AP. Guinsoo\'s as on-hit option.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: poke, push y daño principal. E segundo: menor CD del swing, más daño. W último: el camuflaje y detección no necesitan niveles.',
      en: 'Q first: poke, push and main damage. E second: lower swing CD, more damage. W last: camouflage and detection don\'t need levels.'
    }
  },
  Alistar: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Tanque support con el mejor engage de nivel 2 del juego. Tu W+Q combo es instantáneo y cambia teamfights. Con R sos prácticamente inmortal.',
      en: 'Tank support with the best level 2 engage in the game. Your W+Q combo is instant and changes teamfights. With R you\'re practically immortal.'
    },
    gameplan: {
      early: {
        es: 'Nivel 1 jugá pasivo con E. NIVEL 2 es tu powerspike más grande — W+Q combo es casi imposible de esquivar. Buscá el all-in apenas llegás a nivel 2 antes que el enemigo.',
        en: 'Level 1 play passive with E. LEVEL 2 is your biggest powerspike — W+Q combo is nearly impossible to dodge. Look for all-in as soon as you hit level 2 before the enemy.'
      },
      mid: {
        es: 'Roameá mid con tu jungler. Tu W+Q es el mejor setup de gank del juego. En objetivos, buscá flanquear y W+Q al carry enemigo hacia tu equipo.',
        en: 'Roam mid with your jungler. Your W+Q is the best gank setup in the game. At objectives, look to flank and W+Q the enemy carry into your team.'
      },
      late: {
        es: 'Sos el iniciador principal. Flash → W+Q sobre el carry enemigo. Con R activada podés tanquear todo el burst inicial. Después usá E para curar al equipo con los stacks.',
        en: 'You\'re the main initiator. Flash → W+Q on the enemy carry. With R active you can tank all initial burst. Then use E to heal the team with stacks.'
      }
    },
    combo: {
      basic: {
        keys: 'W → Q',
        es: 'W hacia el enemigo → Q inmediato durante el dash. El timing tiene que ser rápido — si Q sale tarde, empujás al enemigo lejos sin knockear.',
        en: 'W toward enemy → immediate Q during dash. Timing must be quick — if Q comes out late, you push the enemy away without knocking up.'
      },
      advanced: {
        keys: 'Flash → W → Q → E → R',
        es: 'Flash encima del carry → W hacia tu equipo (los empujás hacia tu team) → Q para knockear a todos alrededor → E para curación → R si necesitás tanquear.',
        en: 'Flash on top of carry → W toward your team (push them into your team) → Q to knock up everyone around → E for healing → R if you need to tank.'
      }
    },
    buildReasoning: {
      es: 'Locket protege a todo tu equipo cuando vas al engage — el shield se activa y mitigás daño AoE. Después full tanque: Frozen Heart vs mucho AD, Force of Nature vs mucho AP. Mobility Boots para roamear.',
      en: 'Locket protects your whole team when you engage — the shield activates and mitigates AoE damage. Then full tank: Frozen Heart vs heavy AD, Force of Nature vs heavy AP. Mobility Boots for roaming.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: menor CD del knock-up, más daño. W segundo: menor CD del dash. E último: la curación escala poco y en lane no la usás mucho.',
      en: 'Q first: lower knock-up CD, more damage. W second: lower dash CD. E last: healing scales poorly and you barely use it in lane.'
    }
  },
  Ambessa: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de top con dashes constantes y daño mixto. Cada habilidad te da un dash, así que sos extremadamente móvil en peleas extendidas.',
      en: 'Top lane bruiser with constant dashes and mixed damage. Each ability gives you a dash, so you\'re extremely mobile in extended fights.'
    },
    gameplan: {
      early: {
        es: 'Usá tus dashes de pasiva para tradear corto y salir. Nivel 3 tenés mucha movilidad para esquivar skillshots. No te quedes quieta tradeando — siempre mové entre habilidades.',
        en: 'Use your passive dashes to short trade and disengage. Level 3 you have lots of mobility to dodge skillshots. Don\'t stand still trading — always move between abilities.'
      },
      mid: {
        es: 'Con 1-2 items sos muy fuerte en peleas 1v1 y skirmishes. Splitpusheá y buscá peleas en la sidelane. Tu movilidad te permite escapar de ganks.',
        en: 'With 1-2 items you\'re very strong in 1v1 and skirmishes. Splitpush and look for fights in the sidelane. Your mobility lets you escape ganks.'
      },
      late: {
        es: 'En teamfights buscá flanquear con R. Usá tus dashes para llegar al backline y pelear ahí. Podés tanquear bastante con items de bruiser mientras hacés mucho daño.',
        en: 'In teamfights look to flank with R. Use your dashes to reach the backline and fight there. You can tank quite a bit with bruiser items while dealing lots of damage.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → AA(dash) → E → AA(dash)',
        es: 'Q para daño → auto con dash de pasiva → E para más daño → auto con dash. Cada habilidad habilita un dash en tu siguiente auto.',
        en: 'Q for damage → auto with passive dash → E for more damage → auto with dash. Each ability enables a dash on your next auto.'
      },
      advanced: {
        keys: 'R → AA(dash) → Q → AA(dash) → W → AA(dash) → E → AA(dash)',
        es: 'R para entrar → weaveá autos entre cada habilidad para maximizar dashes y daño DPS. Nunca uses dos habilidades seguidas sin auto entre medio.',
        en: 'R to engage → weave autos between each ability to maximize dashes and DPS damage. Never use two abilities in a row without an auto in between.'
      }
    },
    buildReasoning: {
      es: 'Trinity Force es perfecto — el Spellblade proc sale en cada auto-dash de pasiva. Black Cleaver stackea rápido con tus múltiples hits. Death\'s Dance te mantiene viva en peleas largas.',
      en: 'Trinity Force is perfect — Spellblade proc triggers on each passive auto-dash. Black Cleaver stacks fast with your multiple hits. Death\'s Dance keeps you alive in extended fights.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: daño principal y waveclear. E segundo: más daño y menor CD. W último: la utilidad defensiva no necesita niveles tempranos.',
      en: 'Q first: main damage and waveclear. E second: more damage and lower CD. W last: defensive utility doesn\'t need early levels.'
    }
  },
  Amumu: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Tanque jungler con el mejor engage AoE del juego. Tu R es un stun AoE enorme que gana teamfights sola. Simple pero devastador.',
      en: 'Tank jungler with the best AoE engage in the game. Your R is a huge AoE stun that wins teamfights alone. Simple but devastating.'
    },
    gameplan: {
      early: {
        es: 'Full clear es rápido gracias a tu W (daño AoE por segundo) y E (reducción de daño + AoE). Tenés 2 cargas de Q así que podés gankear bien desde nivel 3-4.',
        en: 'Full clear is fast thanks to W (AoE damage per second) and E (damage reduction + AoE). You have 2 Q charges so you can gank well from level 3-4.'
      },
      mid: {
        es: 'Buscá peleas en dragón/herald. Flash → R sobre 3+ enemigos gana la pelea automáticamente. Siempre guardá al menos una carga de Q para engage o escape.',
        en: 'Look for fights at dragon/herald. Flash → R on 3+ enemies wins the fight automatically. Always save at least one Q charge for engage or escape.'
      },
      late: {
        es: 'Sos el iniciador. Tu único trabajo es pegar un buen R en la mayor cantidad de gente posible. Flash + R o Q + R. Después activá W y dejá que tu equipo haga el daño.',
        en: 'You\'re the initiator. Your only job is to land a good R on as many people as possible. Flash + R or Q + R. Then activate W and let your team deal damage.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → W → E',
        es: 'Q para engancharte → W activar aura de daño → E para el burst AoE. Mantenelo simple.',
        en: 'Q to hook onto them → W activate damage aura → E for AoE burst. Keep it simple.'
      },
      advanced: {
        keys: 'Flash → R → Q → W → E',
        es: 'Flash encima de varios enemigos → R inmediato para stun AoE → Q al que intente escapar → W + E para daño. La R sin aviso es imposible de reaccionar.',
        en: 'Flash on top of multiple enemies → immediate R for AoE stun → Q whoever tries to escape → W + E for damage. R without warning is impossible to react to.'
      }
    },
    buildReasoning: {
      es: 'Sunfire Aegis hace daño AoE constante que stackea con tu W — estás siempre al lado del enemigo. Demonic Embrace convierte tu vida en más daño de tu W. Después Frozen Heart o Abyssal Mask según el equipo enemigo.',
      en: 'Sunfire Aegis deals constant AoE damage that stacks with your W — you\'re always next to the enemy. Demonic Embrace converts your health into more W damage. Then Frozen Heart or Abyssal Mask depending on enemy team.'
    },
    skillOrder: {
      order: 'W > E > Q',
      es: 'W primero: es tu daño constante de jungla y teamfight (% vida). E segundo: reduce CD del burst AoE. Q último: el stun duration no sube, solo el daño.',
      en: 'W first: it\'s your constant jungle and teamfight damage (% health). E second: reduces AoE burst CD. Q last: stun duration doesn\'t increase, only damage.'
    }
  },
  Anivia: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'late',
    identity: {
      es: 'Maga de control con waveclear infinito y zone control brutal. Tu muro (W) puede cortar equipos enteros y tu R+E combo hace daño absurdo. Pasiva de huevo te da una segunda vida.',
      en: 'Control mage with infinite waveclear and brutal zone control. Your wall (W) can split entire teams and your R+E combo deals absurd damage. Egg passive gives a second life.'
    },
    gameplan: {
      early: {
        es: 'Pre-6 sos débil y gastás mucho maná. Farmeá con autos y Q solo cuando sea necesario. Tu pasiva de huevo te salva de dives. Nivel 6 con R tu waveclear se vuelve infinita.',
        en: 'Pre-6 you\'re weak and burn lots of mana. Farm with autos and Q only when needed. Egg passive saves you from dives. Level 6 with R your waveclear becomes infinite.'
      },
      mid: {
        es: 'Pusheá waves instantáneamente con R y roameá o controá visión. En peleas, poné R en los chokepoints y usá W para separar al equipo enemigo. E hace doble daño a targets con R encima.',
        en: 'Insta-push waves with R and roam or control vision. In fights, place R on chokepoints and use W to split the enemy team. E deals double damage to targets standing in R.'
      },
      late: {
        es: 'Sos una de las magas más fuertes del late game. Tu zone control es insana — R en objetivos obliga al enemigo a moverse o morir. W bien puesto gana la teamfight entera.',
        en: 'You\'re one of the strongest late game mages. Your zone control is insane — R on objectives forces enemies to move or die. Well-placed W wins the entire teamfight.'
      }
    },
    combo: {
      basic: {
        keys: 'R → E',
        es: 'R debajo del enemigo → E inmediato para daño doble (E hace el doble si el target está chilled por R o Q). Repetí cada vez que E esté disponible.',
        en: 'R under enemy → immediate E for double damage (E deals double if target is chilled by R or Q). Repeat whenever E is available.'
      },
      advanced: {
        keys: 'Q → E → R → W → E',
        es: 'Q stun → E (doble daño por chill) → R debajo → W atrás para que no escapen → E de nuevo cuando vuelve del CD.',
        en: 'Q stun → E (double damage from chill) → R underneath → W behind to cut escape → E again when off CD.'
      }
    },
    buildReasoning: {
      es: 'Rod of Ages te da todo: maná, vida, AP — y escalás con el tiempo que es perfecto para Anivia. Archangel\'s resuelve tus problemas de maná para siempre. Rabadon\'s para que tu E+R haga daño obsceno.',
      en: 'Rod of Ages gives everything: mana, health, AP — and you scale over time which is perfect for Anivia. Archangel\'s solves mana problems forever. Rabadon\'s so your E+R deals obscene damage.'
    },
    skillOrder: {
      order: 'E > Q > W',
      es: 'E primero: es tu daño principal y el CD baja mucho. Q segundo: menor CD del stun. W último: un punto es suficiente para el muro, el tamaño sube pero no es prioridad.',
      en: 'E first: main damage and CD drops significantly. Q second: lower stun CD. W last: one point is enough for the wall, size increases but it\'s not priority.'
    }
  },
  Annie: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Maga burst con engage instantáneo. Stackeás tu pasiva a 4 y tu siguiente habilidad stunea. Flash + R Tibbers con stun es uno de los engages más letales del juego.',
      en: 'Burst mage with instant engage. Stack passive to 4 and your next ability stuns. Flash + R Tibbers with stun is one of the most lethal engages in the game.'
    },
    gameplan: {
      early: {
        es: 'Farmeá con Q (te devuelve maná si matás con él). Mantené el stun listo para zonar — el enemigo no puede acercarse si tenés 4 stacks. Nivel 6 con Flash + R es kill asegurado.',
        en: 'Farm with Q (refunds mana on kill). Keep stun ready to zone — the enemy can\'t approach if you have 4 stacks. Level 6 with Flash + R is a guaranteed kill.'
      },
      mid: {
        es: 'Buscá flashear + R con stun sobre el carry enemigo o sobre varios. Es un combo instantáneo e imposible de reaccionar. Tibbers sigue pegando después de que hagas tu burst.',
        en: 'Look to Flash + R with stun on enemy carry or on multiple targets. It\'s an instant combo impossible to react to. Tibbers keeps hitting after your burst.'
      },
      late: {
        es: 'Tu Flash + R con stun puede ganar la partida sola. Esperá a que el equipo enemigo se agrupe y tirá R. Controlá a Tibbers con R recast para que persiga carries.',
        en: 'Your Flash + R with stun can win the game alone. Wait for enemy team to group and drop R. Control Tibbers with R recast to chase carries.'
      }
    },
    combo: {
      basic: {
        keys: 'Q(stun) → W → AA',
        es: 'Q con pasiva cargada para stun → W inmediato → Auto. Trade simple que sacás de lane.',
        en: 'Q with charged passive for stun → immediate W → Auto. Simple trade that wins lane.'
      },
      advanced: {
        keys: 'Flash → R(stun) → W → Q → Ignite',
        es: 'Flash encima → R Tibbers con stun AoE → W para más burst → Q → Ignite. Todo esto pasa en menos de un segundo. El target muere antes de poder reaccionar.',
        en: 'Flash on top → R Tibbers with AoE stun → W for more burst → Q → Ignite. All of this happens in under a second. Target dies before they can react.'
      }
    },
    buildReasoning: {
      es: 'Luden\'s para burst extra en el combo. Shadowflame amplifica tu one-shot con magic pen. Rabadon\'s para que tu R+W+Q one-shotee a cualquier squishy. Zhonyas para sobrevivir después del Flash engage.',
      en: 'Luden\'s for extra burst in combo. Shadowflame amplifies one-shot with magic pen. Rabadon\'s so your R+W+Q one-shots any squishy. Zhonya\'s to survive after Flash engage.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: más daño y menor CD, además te farmea con refund de maná. W segundo: AoE burst para waveclear y teamfight. E último: el shield es útil pero no es prioridad.',
      en: 'Q first: more damage and lower CD, plus farms with mana refund. W second: AoE burst for waveclear and teamfight. E last: shield is useful but not priority.'
    }
  },
  Aphelios: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: {
      es: 'ADC con 5 armas que rotan. Cada arma tiene un propósito — roja cura, verde pokea, morada daño AoE, azul rootea, blanca ataque rápido. Extremadamente fuerte si aprendés las combos de armas.',
      en: 'ADC with 5 rotating weapons. Each weapon has a purpose — red heals, green pokes, purple AoE damage, blue roots, white rapid fire. Extremely strong if you learn weapon combos.'
    },
    gameplan: {
      early: {
        es: 'Dependés de qué armas tengas. Roja+verde es fuerte para lane (sustain + poke). Azul+cualquiera te da kill pressure con root. Farmeá y manipulá las armas gastando munición para tener la combo correcta.',
        en: 'Depends on which weapons you have. Red+green is strong for lane (sustain + poke). Blue+anything gives kill pressure with root. Farm and manipulate weapons by spending ammo to have the right combo.'
      },
      mid: {
        es: 'Buscá teamfights con morada (Infernum) para el Q AoE devastador, especialmente con R. Si tenés verde (Calibrum), pokeá desde lejos. Siempre pensá qué armas vas a necesitar para la próxima pelea.',
        en: 'Look for teamfights with purple (Infernum) for devastating AoE Q, especially with R. If you have green (Calibrum), poke from range. Always think about which weapons you\'ll need for the next fight.'
      },
      late: {
        es: 'Sos uno de los ADCs más fuertes del late game. Infernum R en un grupo de enemigos hace daño obsceno. Posicionate bien, dejá que el equipo engagee y vos hacé daño desde atrás.',
        en: 'You\'re one of the strongest late game ADCs. Infernum R on a group of enemies deals obscene damage. Position well, let the team engage and you deal damage from the back.'
      }
    },
    combo: {
      basic: {
        keys: 'Q(arma principal) → AA',
        es: 'Usá el Q del arma principal → Auto ataque del arma secundaria se aplica automáticamente. Cada combo de armas funciona diferente — aprendé los 20 combos.',
        en: 'Use main weapon Q → secondary weapon auto applies automatically. Each weapon combo works differently — learn all 20 combos.'
      },
      advanced: {
        keys: 'R(Infernum) → Q(Infernum) → swap → Q',
        es: 'R con Infernum (morada) para AoE explosiva sobre el grupo → Q Infernum para más AoE → Swap al arma secundaria → Q para aplicar su efecto. El daño AoE es nuclear.',
        en: 'R with Infernum (purple) for explosive AoE on the group → Infernum Q for more AoE → Swap to secondary weapon → Q to apply its effect. AoE damage is nuclear.'
      }
    },
    buildReasoning: {
      es: 'Infinity Edge rush porque Aphelios escala con crit como ningún otro ADC — sus armas amplifican el crit. Runaan\'s es core porque los bolts extra aplican efectos de arma. Bloodthirster para sustain.',
      en: 'Infinity Edge rush because Aphelios scales with crit like no other ADC — his weapons amplify crit. Runaan\'s is core because extra bolts apply weapon effects. Bloodthirster for sustain.'
    },
    skillOrder: {
      order: 'Q > Q > Q (level weapon damage)',
      es: 'Subís Q en cada nivel — cada punto sube el daño de las 5 armas. No tenés W/E/R convencionales. R se desbloquea nivel 6. Los puntos van todos a Q.',
      en: 'Level Q every level — each point increases all 5 weapon damages. You don\'t have conventional W/E/R. R unlocks at 6. All points go to Q.'
    }
  },
  Ashe: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC de utilidad con slow constante y una ulti global que puede iniciar peleas desde cualquier lado del mapa. No tiene dash así que el posicionamiento es clave.',
      en: 'Utility ADC with constant slow and a global ult that can start fights from anywhere on the map. No dash so positioning is key.'
    },
    gameplan: {
      early: {
        es: 'Pokeá con W a través de la wave. Tu pasiva slowa con cada auto así que es muy difícil escapar de vos en trades largos. Nivel 6 tu R global puede ayudar a cualquier lane.',
        en: 'Poke with W through the wave. Your passive slows with every auto so it\'s very hard to escape from you in extended trades. Level 6 your global R can help any lane.'
      },
      mid: {
        es: 'Usá E (hawk) para escanear objetivos antes de ir. Tu R puede iniciar peleas a distancia — tirala a mid o a un teamfight que esté pasando. Farmeá y mantené tu CS alto.',
        en: 'Use E (hawk) to scout objectives before going. Your R can start fights at range — send it mid or to a teamfight happening. Farm and keep your CS high.'
      },
      late: {
        es: 'Tu R de larga distancia puede ganar la partida. Buscá pillarlo al carry enemigo. En teamfights, quedáte atrás y pegá al más cercano — tu slow constante kittea a cualquiera.',
        en: 'Your long range R can win the game. Look to catch the enemy carry. In teamfights, stay back and hit the closest target — your constant slow kites anyone.'
      }
    },
    combo: {
      basic: {
        keys: 'W → AA → AA → AA',
        es: 'W para slow inicial → Autos con pasiva que siguen sloweando. Contra melee esto es devastador porque nunca te alcanzan.',
        en: 'W for initial slow → Autos with passive that keep slowing. Against melee this is devastating because they never reach you.'
      },
      advanced: {
        keys: 'R → W → Q → AA → AA → AA',
        es: 'R para stun → W mientras llega → Q para activar ráfaga de flechas (más attack speed) → Autos con Q activo hacen AoE y aplican slow. Todo el daño es amplificado por la pasiva.',
        en: 'R for stun → W while it travels → Q to activate flurry (more attack speed) → Autos with Q active deal AoE and apply slow. All damage amplified by passive.'
      }
    },
    buildReasoning: {
      es: 'Kraken Slayer le da el daño que le falta — Ashe tiene utilidad pero necesita DPS. Runaan\'s para aplicar slow AoE en teamfights. Blade of the Ruined King es alternativa si hay muchos tanques.',
      en: 'Kraken Slayer gives the damage she lacks — Ashe has utility but needs DPS. Runaan\'s to apply AoE slow in teamfights. Blade of the Ruined King as alternative vs heavy tanks.'
    },
    skillOrder: {
      order: 'W > Q > E',
      es: 'W primero: poke y slow principal, baja mucho el CD. Q segundo: más attack speed en la ráfaga. E último: un punto para visión es suficiente.',
      en: 'W first: main poke and slow, CD drops a lot. Q second: more attack speed on flurry. E last: one point for vision is enough.'
    }
  },
  AurelionSol: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: {
      es: 'Mago que escala infinitamente con stacks de Stardust. Cuanto más jugás, más fuerte te hacés. Tu Q y W farmean rápido y stackean tu pasiva. Late game sos imparable.',
      en: 'Mage who scales infinitely with Stardust stacks. The longer you play, the stronger you get. Your Q and W farm fast and stack your passive. Late game you\'re unstoppable.'
    },
    gameplan: {
      early: {
        es: 'Farmeá con Q — cada minion que matás te da stacks de Stardust. No pelees — sos débil temprano. Usá W para pushear waves y rotar a peleas cercanas.',
        en: 'Farm with Q — each minion killed gives Stardust stacks. Don\'t fight — you\'re weak early. Use W to push waves and rotate to nearby fights.'
      },
      mid: {
        es: 'Seguí farmeando y stackeando. Con muchos stacks tu Q y W empiezan a doler mucho. Buscá peleas en chokepoints donde tu W pueda pegar a varios enemigos. Empezás a ser peligroso.',
        en: 'Keep farming and stacking. With many stacks your Q and W start hurting a lot. Look for fights in chokepoints where W can hit multiple enemies. You\'re starting to become dangerous.'
      },
      late: {
        es: 'Con stacks completos sos el mago más fuerte del juego. Tu R hace daño absurdo en una línea gigante y stunea con suficientes stacks. Poné W en objetivos y zonas de pelea — el daño es ridículo.',
        en: 'With full stacks you\'re the strongest mage in the game. Your R deals absurd damage in a giant line and stuns with enough stacks. Place W on objectives and fight zones — damage is ridiculous.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → Q → Q → W',
        es: 'Q repetido para farmear y stackear Stardust → W para burst cuando el enemigo se acerca. Cada Q tiene 3 casts.',
        en: 'Repeated Q to farm and stack Stardust → W for burst when enemy approaches. Each Q has 3 casts.'
      },
      advanced: {
        keys: 'E → W → Q → Q → Q → R',
        es: 'E para breathe sobre el grupo → W para daño masivo → Q×3 para seguir haciendo daño → R para ejecutar a los que quedan bajos.',
        en: 'E to breathe over the group → W for massive damage → Q×3 for sustained damage → R to execute low targets.'
      }
    },
    buildReasoning: {
      es: 'Rod of Ages porque escalás en el tiempo — perfecto para ASol que quiere llegar al late. Archangel\'s resuelve maná y te da AP masivo con stacks. Rabadon\'s para multiplicar todo ese AP.',
      en: 'Rod of Ages because you scale over time — perfect for ASol who wants to reach late game. Archangel\'s solves mana and gives massive AP with stacks. Rabadon\'s to multiply all that AP.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: es tu farmeo, poke y fuente principal de stacks. W segundo: burst aumenta. E último: la utilidad es buena con un punto.',
      en: 'Q first: it\'s your farming, poke and main stack source. W second: burst increases. E last: utility is good with one point.'
    }
  },
  Aurora: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Maga de batalla que entra, hace daño y sale con su R. Creás una zona donde los enemigos no pueden escapar. Ideal para skirmishes y peleas pequeñas.',
      en: 'Battle mage who goes in, deals damage and gets out with R. Creates a zone where enemies can\'t escape. Ideal for skirmishes and small fights.'
    },
    gameplan: {
      early: {
        es: 'Tradeá con Q (pega dos veces) y autos pasivos. Nivel 3 con E podés hacer trades agresivos entrando y saliendo. Tu sustain con pasiva te deja tradear constantemente.',
        en: 'Trade with Q (hits twice) and passive autos. Level 3 with E you can make aggressive trades going in and out. Your sustain with passive lets you trade constantly.'
      },
      mid: {
        es: 'Tu R es una zona que atrapa enemigos — usala en peleas de dragón o herald. Combiná R con CC de tu equipo para que nadie escape. Con Riftmaker hacés daño sostenido brutal.',
        en: 'Your R is a zone that traps enemies — use it in dragon or herald fights. Combine R with team CC so nobody escapes. With Riftmaker you deal brutal sustained damage.'
      },
      late: {
        es: 'Tu R en una teamfight puede atrapar a todo el equipo enemigo. Buscá flanquear y tirar R sobre el backline. Después entrá con E y hacé daño mientras no pueden salir de tu zona.',
        en: 'Your R in a teamfight can trap the entire enemy team. Look to flank and drop R on the backline. Then go in with E and deal damage while they can\'t leave your zone.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → AA → AA → AA',
        es: 'Q que pega dos veces → Autos para stackear pasiva → El tercer auto de pasiva hace daño extra y cura.',
        en: 'Q that hits twice → Autos to stack passive → Third passive auto deals extra damage and heals.'
      },
      advanced: {
        keys: 'R → E → Q → AA → AA → AA → E(return)',
        es: 'R para atrapar → E adentro → Q + Autos para maximizar daño mientras están atrapados → E para salir cuando sea necesario.',
        en: 'R to trap → E inside → Q + Autos to maximize damage while they\'re trapped → E to exit when needed.'
      }
    },
    buildReasoning: {
      es: 'Riftmaker para daño sostenido + omnivamp — sos una maga de batalla, no de burst. Nashor\'s Tooth synergiza con tus autos de pasiva. Zhonyas para sobrevivir en el medio de la pelea.',
      en: 'Riftmaker for sustained damage + omnivamp — you\'re a battle mage, not burst. Nashor\'s Tooth synergizes with your passive autos. Zhonya\'s to survive in the middle of the fight.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: daño principal que pega dos veces. E segundo: menor CD del dash. W último: el buff de movimiento escala poco.',
      en: 'Q first: main damage that hits twice. E second: lower dash CD. W last: movement buff scales poorly.'
    }
  },
  Azir: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'late',
    identity: {
      es: 'Mago de control con soldados que atacan por vos. Difícil de jugar pero con el mejor DPS sostenido de cualquier mago. Tu R (Shurima Shuffle) es un engage legendario.',
      en: 'Control mage with soldiers that attack for you. Hard to play but with the best sustained DPS of any mage. Your R (Shurima Shuffle) is a legendary engage.'
    },
    gameplan: {
      early: {
        es: 'Poné soldados (W) y pegá con autos a través de ellos. Usá Q para reposicionar soldados. Es muy difícil tradear contra vos si mantenés distancia. Farmeá seguro y escalá.',
        en: 'Place soldiers (W) and auto through them. Use Q to reposition soldiers. It\'s very hard to trade against you if you maintain distance. Farm safe and scale.'
      },
      mid: {
        es: 'Pusheá waves rápido con soldados y movete a objetivos. En peleas, posicionate soldados en chokepoints y hacé DPS constante. Guardá E+Q+R para el Shurima Shuffle si es necesario.',
        en: 'Push waves fast with soldiers and move to objectives. In fights, position soldiers in chokepoints and deal constant DPS. Save E+Q+R for the Shurima Shuffle if needed.'
      },
      late: {
        es: 'Tu DPS es insano con 3 items+. Poné soldados en la pelea y pegá desde lejos. El Shurima Shuffle (E+Q hacia el enemigo → R para empujarlos a tu equipo) gana partidas.',
        en: 'Your DPS is insane with 3+ items. Place soldiers in the fight and hit from afar. The Shurima Shuffle (E+Q into enemy → R to push them into your team) wins games.'
      }
    },
    combo: {
      basic: {
        keys: 'W → AA → Q → AA',
        es: 'W para poner soldado → Auto a través del soldado → Q para mover soldado al enemigo → Auto de nuevo. El daño es sorprendente.',
        en: 'W to place soldier → Auto through soldier → Q to move soldier to enemy → Auto again. The damage is surprising.'
      },
      advanced: {
        keys: 'W → E → Q → R',
        es: 'W soldado adelante → E para deslizarte al soldado → Q mientras te deslizás (extiende el dash) → R al llegar para empujar a todos hacia tu equipo. El Shurima Shuffle.',
        en: 'W soldier forward → E to slide to soldier → Q while sliding (extends dash) → R on arrival to push everyone into your team. The Shurima Shuffle.'
      }
    },
    buildReasoning: {
      es: 'Nashor\'s Tooth es core — los soldados aplican on-hit y el attack speed te da más DPS con ellos. Luden\'s para burst y pen mágica. Zhonyas porque después del Shuffle estás en medio del equipo enemigo.',
      en: 'Nashor\'s Tooth is core — soldiers apply on-hit and attack speed gives more DPS with them. Luden\'s for burst and magic pen. Zhonya\'s because after the Shuffle you\'re in the middle of the enemy team.'
    },
    skillOrder: {
      order: 'W > Q > E',
      es: 'W primero: más daño de soldados y menor CD para tener más soldados. Q segundo: menor CD de reposición. E último: el shield y dash no necesitan niveles.',
      en: 'W first: more soldier damage and lower CD for more soldiers. Q second: lower reposition CD. E last: shield and dash don\'t need levels.'
    }
  },
  Bard: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: {
      es: 'Support roamer con utilidad única. Tus chimes te dan experiencia y movimiento extra. Tu R congela TODO (aliados, enemigos, torres). Bardo ganado, partida ganada.',
      en: 'Roaming support with unique utility. Your chimes give experience and extra movement. Your R freezes EVERYTHING (allies, enemies, towers). Bard won, game won.'
    },
    gameplan: {
      early: {
        es: 'Juntá chimes cuando tu ADC no necesite protección. Tu Q stunnea si pega a 2 targets o pinnea a uno contra pared. Los meeps de pasiva hacen mucho daño en trades tempranos.',
        en: 'Collect chimes when your ADC doesn\'t need protection. Your Q stuns if it hits 2 targets or pins one against a wall. Passive meeps deal lots of damage in early trades.'
      },
      mid: {
        es: 'Roameá con E (portal) a través de paredes para ganks sorpresa. Juntá chimes por el mapa para scaling. Tu R puede hacer plays insanos — congelá al equipo enemigo en drake, congelá torre para dives.',
        en: 'Roam with E (portal) through walls for surprise ganks. Collect chimes around the map for scaling. Your R can make insane plays — freeze enemy team at drake, freeze tower for dives.'
      },
      late: {
        es: 'Tu R define teamfights. Podés congelar a 3 enemigos y tu equipo se posiciona para el follow up. También podés salvar aliados congelándolos. E permite flanqueos que nadie espera.',
        en: 'Your R defines teamfights. You can freeze 3 enemies and your team positions for follow up. You can also save allies by freezing them. E enables flanks nobody expects.'
      }
    },
    combo: {
      basic: {
        keys: 'Q(stun en pared) → AA(meep)',
        es: 'Q que pinnee contra pared para stun garantizado → Auto con meep para daño burst y slow.',
        en: 'Q that pins against wall for guaranteed stun → Auto with meep for burst damage and slow.'
      },
      advanced: {
        keys: 'R → Q → AA → W',
        es: 'R para congelar enemigos → esperá el timing → Q apenas salen del stasis para stun → Auto meep → W en el suelo para curar aliados.',
        en: 'R to freeze enemies → wait for timing → Q right as they come out of stasis for stun → Auto meep → W on ground to heal allies.'
      }
    },
    buildReasoning: {
      es: 'Imperial Mandate prockea fácil con tu Q (slow y stun) y marca al enemigo para daño extra del equipo. Mobi Boots para roamear más rápido y juntar chimes. Redemption para más utilidad de equipo.',
      en: 'Imperial Mandate procs easy with Q (slow and stun) and marks enemy for extra team damage. Mobi Boots for faster roaming and collecting chimes. Redemption for more team utility.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: más daño de stun y menor CD. W segundo: curación más fuerte. E último: un punto alcanza, el tamaño del portal es fijo.',
      en: 'Q first: more stun damage and lower CD. W second: stronger heal. E last: one point is enough, portal size is fixed.'
    }
  },
  Belveth: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler que farmea extremadamente rápido y escala con velocidad de ataque infinita. Cada campamento que matás te da attack speed permanente. Después de matar un epic monster, te transformás.',
      en: 'Jungler who farms extremely fast and scales with infinite attack speed. Every camp killed gives permanent attack speed. After killing an epic monster, you transform.'
    },
    gameplan: {
      early: {
        es: 'Full clear rápido — necesitás stacks de velocidad de ataque. No fuerces ganks temprano, tu clear speed es tu ventaja. Nivel 6 con forma coral de un dragón/herald te hacés un monstruo.',
        en: 'Full clear fast — you need attack speed stacks. Don\'t force early ganks, your clear speed is your advantage. Level 6 with coral form from a dragon/herald you become a monster.'
      },
      mid: {
        es: 'Priorizá dragones y heralds para tu forma coral. En forma coral tenés más rango, más vida y generás voidlings que pushean. Peleá cerca de tus minions coral para más presión.',
        en: 'Prioritize dragons and heralds for your coral form. In coral form you have more range, more health and spawn voidlings that push. Fight near your coral minions for more pressure.'
      },
      late: {
        es: 'Con suficientes stacks tu attack speed es ridícula. En true form después de baron/elder, sos prácticamente imparable. Hacé split push con voidlings o peleá con el equipo — hacés ambas cosas bien.',
        en: 'With enough stacks your attack speed is ridiculous. In true form after baron/elder, you\'re practically unstoppable. Split push with voidlings or teamfight — you do both well.'
      }
    },
    combo: {
      basic: {
        keys: 'Q(dirección) → AA → Q(dirección) → AA',
        es: 'Q tiene 4 dashes (uno por dirección). Intercalá auto entre cada dash. Cada dash es un auto reset.',
        en: 'Q has 4 dashes (one per direction). Weave auto between each dash. Each dash is an auto reset.'
      },
      advanced: {
        keys: 'W → Q → AA → Q → AA → Q → AA → Q → AA → E',
        es: 'W para knockup + slow → Q en cada dirección con autos entre medio → E para reducción de daño y daño extra al final. Maximizá los 4 dashes.',
        en: 'W for knockup + slow → Q in each direction with autos in between → E for damage reduction and bonus damage at the end. Maximize all 4 dashes.'
      }
    },
    buildReasoning: {
      es: 'BOTRK es core — tu attack speed obscena multiplica los procs de % vida. Kraken Slayer para true damage cada 3 autos (con tu AS pegás rápidísimo). Guinsoo\'s es opción on-hit. Death\'s Dance para no morir.',
      en: 'BOTRK is core — your obscene attack speed multiplies % health procs. Kraken Slayer for true damage every 3 autos (with your AS you hit incredibly fast). Guinsoo\'s as on-hit option. Death\'s Dance to not die.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: menor CD de los dashes, más daño. E segundo: más reducción de daño y mejor ejecución. W último: el knockup no escala, solo el slow duration.',
      en: 'Q first: lower dash CD, more damage. E second: more damage reduction and better execution. W last: knockup doesn\'t scale, only slow duration.'
    }
  },
  Blitzcrank: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Support con el hook más icónico del juego. Un Q bien puesto gana la teamfight. La amenaza de tu hook zonea incluso cuando fallás. Simple pero letal.',
      en: 'Support with the most iconic hook in the game. One good Q wins the teamfight. The threat of your hook zones even when you miss. Simple but lethal.'
    },
    gameplan: {
      early: {
        es: 'Nivel 1 Q es terror — hook + auto + ignite es casi kill. Escondete en el bush y buscá hooks. Si fallás Q, jugá pasivo hasta que vuelva. E knockea después del hook.',
        en: 'Level 1 Q is terror — hook + auto + ignite is nearly a kill. Hide in bush and look for hooks. If you miss Q, play passive until it\'s back. E knocks up after hook.'
      },
      mid: {
        es: 'Roameá con tu jungler y hookeá gente que está fuera de posición. En objetivos, tu hook puede agarrar al jungler enemigo y robar el smite fight. Buscá picks en el río.',
        en: 'Roam with your jungler and hook people out of position. At objectives, your hook can grab the enemy jungler and steal the smite fight. Look for picks in river.'
      },
      late: {
        es: 'Un hook en el carry enemigo = victoria de teamfight. Posicionate para hooks desde ángulos inesperados. Usá R silence para interrumpir channels y ultimates.',
        en: 'A hook on the enemy carry = teamfight victory. Position for hooks from unexpected angles. Use R silence to interrupt channels and ultimates.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → E → AA → R',
        es: 'Q hook → E knockup inmediato → Auto (está potenciado) → R para silence AoE. El target muere o queda al borde de morir.',
        en: 'Q hook → immediate E knockup → Auto (it\'s empowered) → R for AoE silence. Target dies or is on the edge of dying.'
      },
      advanced: {
        keys: 'E → Flash → AA → Q → R',
        es: 'Activá E primero → Flash encima para knockup sorpresa → Auto potenciado → Q cuando intentan escapar → R. Nadie espera el Flash-E.',
        en: 'Activate E first → Flash on top for surprise knockup → Empowered auto → Q when they try to escape → R. Nobody expects the Flash-E.'
      }
    },
    buildReasoning: {
      es: 'Locket es sólido para proteger al equipo cuando engageás — el shield grupal compensa tu estilo agresivo. Mobility Boots para roamear y posicionarte para hooks. Después full tanque.',
      en: 'Locket is solid to protect the team when engaging — the group shield compensates your aggressive style. Mobility Boots for roaming and hook positioning. Then full tank.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: menor CD del hook y más daño. E segundo: más daño del knockup. W último: la velocidad es útil pero no es prioridad.',
      en: 'Q first: lower hook CD and more damage. E second: more knockup damage. W last: speed is useful but not priority.'
    }
  },
  Brand: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'Mago de daño AoE por excelencia. Tu pasiva quema % de vida, así que destruís a tanques y squishies por igual. R rebota entre enemigos agrupados para daño catastrófico.',
      en: 'AoE damage mage par excellence. Your passive burns % health, so you destroy tanks and squishies alike. R bounces between grouped enemies for catastrophic damage.'
    },
    gameplan: {
      early: {
        es: 'Pokeá con W (círculo de fuego en el suelo). Si el target ya tiene pasiva de fuego, W hace 25% más daño. E → W es tu combo de poke básico. Nivel 6 tu R rebota y hace mucho daño en 2v2.',
        en: 'Poke with W (fire circle on ground). If target already has fire passive, W deals 25% more damage. E → W is your basic poke combo. Level 6 your R bounces and deals lots of damage in 2v2.'
      },
      mid: {
        es: 'Buscá peleas en dragón donde el enemigo esté agrupado. Tu R rebota entre ellos + pasiva quema a todos. Un buen R en 3+ personas hace más daño que cualquier otro mago.',
        en: 'Look for fights at dragon where the enemy is grouped. Your R bounces between them + passive burns everyone. A good R on 3+ people deals more damage than any other mage.'
      },
      late: {
        es: 'Tu daño en teamfights es absurdo. R que rebota 3+ veces + pasiva en todo el equipo = la mitad de la vida de todos. No necesitás mucha plata — tu pasiva de % vida escala sola.',
        en: 'Your teamfight damage is absurd. R that bounces 3+ times + passive on the whole team = half of everyone\'s health. You don\'t need much gold — your % health passive scales by itself.'
      }
    },
    combo: {
      basic: {
        keys: 'E → Q',
        es: 'E para aplicar fuego (point and click) → Q que stunea si el target está en llamas. El stun es clave de tu kit.',
        en: 'E to apply fire (point and click) → Q that stuns if target is ablaze. The stun is key to your kit.'
      },
      advanced: {
        keys: 'E → Q → W → R',
        es: 'E para encender → Q para stun (asegurado por E) → W que hace daño extra en target encendido → R que rebota en todo. Máximo daño.',
        en: 'E to ignite → Q for stun (guaranteed by E) → W that deals extra damage on ablaze target → R that bounces on everything. Maximum damage.'
      }
    },
    buildReasoning: {
      es: 'Liandry\'s es PERFECTA — quema % vida que se suma a tu pasiva de % vida. El enemigo pierde vida solo por estar cerca de vos. Rylai\'s para slow permanente con pasiva. Demonic Embrace para más quema.',
      en: 'Liandry\'s is PERFECT — burns % health that stacks with your % health passive. Enemy loses health just from being near you. Rylai\'s for permanent slow with passive. Demonic Embrace for more burn.'
    },
    skillOrder: {
      order: 'W > Q > E',
      es: 'W primero: es tu daño AoE principal y baja mucho el CD. Q segundo: stun más frecuente. E último: el daño base es bajo, solo sirve para aplicar fuego.',
      en: 'W first: main AoE damage and CD drops a lot. Q second: more frequent stun. E last: base damage is low, only used to apply fire.'
    }
  },
  Braum: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: {
      es: 'Support tanque defensor. Tu E (escudo) bloquea el PRIMER proyectil completamente y reduce todo lo demás. Protegés a tu ADC como nadie y tu pasiva stunea con autos del equipo.',
      en: 'Defensive tank support. Your E (shield) blocks the FIRST projectile completely and reduces everything else. You protect your ADC like nobody else and your passive stuns with team autos.'
    },
    gameplan: {
      early: {
        es: 'Nivel 1 tu pasiva es fuerte — Q aplica un stack, y 3 autos más de tu equipo stunean. Busca trades donde tu ADC pueda followear. E bloquea habilidades clave como hooks o engages.',
        en: 'Level 1 your passive is strong — Q applies one stack, and 3 more team autos stun. Look for trades where your ADC can follow up. E blocks key abilities like hooks or engages.'
      },
      mid: {
        es: 'Pegáte a tu carry y protegelo con E. Tu W te deja saltar a un aliado y darle armadura/MR. En peleas usá R para knockup en línea y después E para bloquear daño.',
        en: 'Stick to your carry and protect them with E. Your W lets you jump to an ally and give them armor/MR. In fights use R for line knockup then E to block damage.'
      },
      late: {
        es: 'Sos el guardaespaldas del carry. E bloquea absolutamente todo — R de Jinx, R de Caitlyn, lo que sea. R para iniciar o contra-iniciar. Nunca te alejes de tu carry principal.',
        en: 'You\'re the carry\'s bodyguard. E blocks absolutely everything — Jinx R, Caitlyn R, whatever. R to initiate or counter-initiate. Never leave your main carry.'
      }
    },
    combo: {
      basic: {
        keys: 'Q → AA → AA → AA(stun)',
        es: 'Q para slow y primer stack de pasiva → 3 autos o autos de tu equipo para completar el stun. El ADC puede ayudar a stackear.',
        en: 'Q for slow and first passive stack → 3 autos or team autos to complete the stun. ADC can help stack.'
      },
      advanced: {
        keys: 'R → Q → W(a aliado) → E(bloquear)',
        es: 'R para knockup en línea → Q para slow y stack → W a tu ADC si está en peligro → E para bloquear el contraataque enemigo.',
        en: 'R for line knockup → Q for slow and stack → W to your ADC if in danger → E to block enemy counterattack.'
      }
    },
    buildReasoning: {
      es: 'Locket es perfecto — protegés al equipo con shield activo además de tu E. Frozen Heart reduce attack speed de los enemigos cerca tuyo. Después items tanque según lo que necesites.',
      en: 'Locket is perfect — protect the team with active shield on top of your E. Frozen Heart reduces attack speed of nearby enemies. Then tank items as needed.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: poke, slow y más daño. E segundo: menor CD y más reducción de daño del escudo. W último: el salto es útil pero los stats que da escalan poco.',
      en: 'Q first: poke, slow and more damage. E second: lower CD and more damage reduction from shield. W last: jump is useful but stats it gives scale poorly.'
    }
  },
  Briar: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler vampira que pierde control al entrar en pelea. Tu W te pone en frenzy — pegás como loca pero no podés parar. La curación es tu tanqueo.',
      en: 'Vampire jungler who loses control when fighting. Your W puts you in frenzy — you hit like crazy but can\'t stop. Healing is your tankiness.'
    },
    gameplan: {
      early: {
        es: 'Tu clear es sano gracias a la curación de W. Gankeá nivel 3 — tu E dash + W frenzy hacen mucho daño y la curación te mantiene viva. Cuidado: en W no podés cancelar, se pelea hasta morir.',
        en: 'Your clear is healthy thanks to W healing. Gank level 3 — your E dash + W frenzy deal lots of damage and healing keeps you alive. Careful: in W you can\'t cancel, you fight to the death.'
      },
      mid: {
        es: 'Tu R es un engage global — te lanzás al target desde leyos y lo suprimís. Usalo para flanquear en peleas o cazár gente en sidelanes. Con Eclipse sos una asesina que se cura todo.',
        en: 'Your R is a global engage — you launch at the target from far away and suppress them. Use it to flank in fights or hunt people in sidelanes. With Eclipse you\'re an assassin who heals everything.'
      },
      late: {
        es: 'Buscá picks con R global. En teamfights, R al carry enemigo para suprimirlo y matarlo. Tu equipo pelea 4v4 mientras vos eliminás al carry. Si entrás con W, aseguráte de que podés matar antes de que te maten.',
        en: 'Look for picks with global R. In teamfights, R the enemy carry to suppress and kill them. Your team fights 4v4 while you eliminate the carry. If you go in with W, make sure you can kill before they kill you.'
      }
    },
    combo: {
      basic: {
        keys: 'E → W → AA → AA → AA',
        es: 'E dash hacia el enemigo → W frenzy para autos rápidos con curación → pegá hasta matar. Briar es simple: entrás y no parás.',
        en: 'E dash to enemy → W frenzy for fast autos with healing → hit until dead. Briar is simple: you go in and don\'t stop.'
      },
      advanced: {
        keys: 'R → W → E → AA → AA',
        es: 'R global al target → W frenzy inmediato → E para CC extra si intentan escapar → Autos con frenzy. El R suprime así que el daño está garantizado.',
        en: 'R global to target → immediate W frenzy → E for extra CC if they try to escape → Autos with frenzy. R suppresses so damage is guaranteed.'
      }
    },
    buildReasoning: {
      es: 'Eclipse te da burst, omnivamp y shield — todo lo que Briar necesita. Black Cleaver stackea rápido con tus autos frenzy. Death\'s Dance convierte daño en bleed que curás con tu sustain.',
      en: 'Eclipse gives burst, omnivamp and shield — everything Briar needs. Black Cleaver stacks fast with frenzy autos. Death\'s Dance converts damage into bleed that you heal with sustain.'
    },
    skillOrder: {
      order: 'W > Q > E',
      es: 'W primero: es todo tu daño y curación, menor CD del frenzy. Q segundo: más daño de bite. E último: el CC es útil pero el dash no necesita niveles.',
      en: 'W first: it\'s all your damage and healing, lower frenzy CD. Q second: more bite damage. E last: CC is useful but dash doesn\'t need levels.'
    }
  },
  Caitlyn: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC de largo alcance que domina la lane con poke y trampas. 650 de rango base — la más alta de los ADCs. Controlás la lane, pokeás libre y en late game tu headshot crit destruye.',
      en: 'Long range ADC who dominates lane with poke and traps. 650 base range — highest among ADCs. You control lane, poke freely and late game your headshot crit destroys.'
    },
    gameplan: {
      early: {
        es: 'Abusá tu rango superior — pegá autos cuando el enemigo va a farmear. Poné trampas (W) en el bush y detrás de minions. Q a través de la wave. Tu nivel 1-3 es de los más fuertes.',
        en: 'Abuse your superior range — auto when the enemy goes to farm. Place traps (W) in bushes and behind minions. Q through the wave. Your level 1-3 is one of the strongest.'
      },
      mid: {
        es: 'Pusheá la wave y buscá plates o roam a mid con tu support. Poné trampas en zonas de pelea antes de objetivos. Si alguien pisa una trampa, headshot hace daño obsceno.',
        en: 'Push the wave and look for plates or roam mid with your support. Place traps in fight zones before objectives. If someone steps on a trap, headshot deals obscene damage.'
      },
      late: {
        es: 'Con 3 items de crit, tu headshot hace 70%+ de la vida de un squishy. Posicionate atrás y usá tu rango. Poné trampas en chokepoints. R para ejecutar targets bajos que escapan.',
        en: 'With 3 crit items, your headshot does 70%+ of a squishy\'s health. Position in the back and use your range. Place traps in chokepoints. R to execute low targets escaping.'
      }
    },
    combo: {
      basic: {
        keys: 'W → AA(headshot) → Q',
        es: 'W trampa debajo del enemigo → Auto con headshot garantizado cuando pisan → Q para followup. El headshot del trap hace daño masivo.',
        en: 'W trap under enemy → Auto with guaranteed headshot when they step on it → Q for followup. Trap headshot deals massive damage.'
      },
      advanced: {
        keys: 'E → W → Q → AA(headshot)',
        es: 'E net hacia atrás para slow → W trampa donde caen (el slow les impide esquivar) → Q mientras están trapped → Headshot del trap+net combo. Doble headshot proc.',
        en: 'E net backwards for slow → W trap where they land (slow prevents them from dodging) → Q while trapped → Headshot from trap+net combo. Double headshot proc.'
      }
    },
    buildReasoning: {
      es: 'Infinity Edge rush para maximizar headshot damage — Caitlyn es la ADC que más se beneficia del crit por la pasiva. Rapid Firecannon extiende tu rango aún más. Lord Dominik\'s para tanks.',
      en: 'Infinity Edge rush to maximize headshot damage — Caitlyn benefits from crit the most of any ADC thanks to passive. Rapid Firecannon extends your range further. Lord Dominik\'s for tanks.'
    },
    skillOrder: {
      order: 'Q > W > E',
      es: 'Q primero: daño y waveclear principal. W segundo: más trampas disponibles y menor CD. E último: el net escala poco, un punto es suficiente para el escape.',
      en: 'Q first: main damage and waveclear. W second: more traps available and lower CD. E last: net scales poorly, one point is enough for the escape.'
    }
  },
  Camille: {
    playstyle: { es: 'Splitpush', en: 'Splitpush' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de top lane con true damage en Q2 y engage con E. Splitpusheás y nadie te puede 1v1 gracias al true damage que ignora armadura. Tu R atrapa a un enemigo sin escape.',
      en: 'Top lane bruiser with true damage on Q2 and engage with E. You splitpush and nobody can 1v1 you thanks to true damage that ignores armor. Your R traps one enemy with no escape.'
    },
    gameplan: {
      early: {
        es: 'Tradeá con Q1 → esperá Q2 (brilla true damage) → auto Q2. Tu pasiva te da shield según el tipo de daño del enemigo. Nivel 1-3 es fuerte en trades cortos.',
        en: 'Trade with Q1 → wait for Q2 (glows true damage) → auto Q2. Your passive gives shield based on enemy damage type. Levels 1-3 are strong in short trades.'
      },
      mid: {
        es: 'Splitpusheá y forzá 1v1. Con Ravenous Hydra + Trinity tu Q2 true damage chunka a cualquiera. Si te mandan 2, tu equipo toma el otro lado. E escape por paredes si vienen muchos.',
        en: 'Splitpush and force 1v1s. With Ravenous Hydra + Trinity your Q2 true damage chunks anyone. If they send 2, your team takes the other side. E escape over walls if many come.'
      },
      late: {
        es: 'Tu R en el carry enemigo en una teamfight cambia todo — lo encerrás en un hexágono donde nadie más puede entrar o salir. Matalo con Q2 true damage. Después peleá con el equipo.',
        en: 'Your R on the enemy carry in a teamfight changes everything — you trap them in a hexagon where nobody else can enter or leave. Kill them with Q2 true damage. Then fight with the team.'
      }
    },
    combo: {
      basic: {
        keys: 'Q1 → AA → Q2(true damage)',
        es: 'Q1 para el primer golpe → Auto → Esperá 1.5s para Q2 (brilla) → Q2 true damage. El timing de Q2 es clave — si lo tirás muy rápido no hace true damage.',
        en: 'Q1 for first hit → Auto → Wait 1.5s for Q2 (glows) → Q2 true damage. Q2 timing is key — if you cast too early it doesn\'t deal true damage.'
      },
      advanced: {
        keys: 'E(pared) → E(dash) → R → AA → Q1 → AA → Q2',
        es: 'E a pared → segundo E al enemigo (stun) → R para atraparlo → Auto → Q1 → Auto → Q2 true damage. No puede escapar del hexágono.',
        en: 'E to wall → second E to enemy (stun) → R to trap → Auto → Q1 → Auto → Q2 true damage. Can\'t escape the hexagon.'
      }
    },
    buildReasoning: {
      es: 'Trinity Force es core — el Spellblade proc se amplifica con Q2 true damage. Ravenous Hydra para sustain y waveclear en splitpush. Death\'s Dance para sobrevivir peleas extendidas.',
      en: 'Trinity Force is core — Spellblade proc amplifies with Q2 true damage. Ravenous Hydra for sustain and waveclear in splitpush. Death\'s Dance to survive extended fights.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero siempre: es tu true damage y menor CD. E segundo: menor CD del dash/stun. W último: el poke y sustain de W escalan poco comparado con Q.',
      en: 'Q first always: it\'s your true damage and lower CD. E second: lower dash/stun CD. W last: W poke and sustain scale poorly compared to Q.'
    }
  },
  Cassiopeia: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'late',
    identity: {
      es: 'Maga DPS que no puede comprar botas. Tu E (Twin Fang) spamea cada 0.75s contra targets envenenados. Sos un ADC mágico con el mejor DPS sostenido de cualquier mago.',
      en: 'DPS mage who can\'t buy boots. Your E (Twin Fang) spams every 0.75s on poisoned targets. You\'re a magic ADC with the best sustained DPS of any mage.'
    },
    gameplan: {
      early: { es: 'Pokeá con Q (veneno) y farmeá con E (resetea si mata). Nivel 2-3 Q+E+E+E tradea muy fuerte. Manejá bien el maná — E devuelve maná si el target muere.', en: 'Poke with Q (poison) and farm with E (resets on kill). Level 2-3 Q+E+E+E trades very strong. Manage mana well — E refunds mana if target dies.' },
      mid: { es: 'Con Seraph\'s tu DPS es insano. Poné veneno y spameá E — hacés más DPS que la mayoría de ADCs. Tu R petrifica (stun) si te miran, o slowa si miran para otro lado.', en: 'With Seraph\'s your DPS is insane. Apply poison and spam E — you deal more DPS than most ADCs. Your R petrifies (stun) if they face you, or slows if they look away.' },
      late: { es: 'Sos una de las mejores late game mages. Tu DPS es comparable a un ADC full build. Posicionate como un ADC — atrás, pegando E constantemente. R para counter-engage.', en: 'You\'re one of the best late game mages. Your DPS is comparable to a full build ADC. Position like an ADC — in the back, constantly hitting E. R to counter-engage.' }
    },
    combo: {
      basic: { keys: 'Q → E → E → E', es: 'Q para envenenar → E spam mientras dure el veneno. Cada E sale en 0.75s contra target envenenado y cura.', en: 'Q to poison → E spam while poison lasts. Each E comes out in 0.75s on poisoned target and heals.' },
      advanced: { keys: 'Flash → R → Q → E → E → E → W', es: 'Flash → R para stun múltiple (tienen que estar mirándote) → Q veneno → E spam → W si intentan huir (zona de veneno que grounded).', en: 'Flash → R for multi-stun (they must face you) → Q poison → E spam → W if they try to flee (poison zone that grounds).' }
    },
    buildReasoning: { es: 'Archangel\'s es core porque spameás E constantemente y necesitás maná infinito. No podés comprar botas así que la pasiva te da MS por nivel. Rabadon\'s multiplica tu DPS.', en: 'Archangel\'s is core because you spam E constantly and need infinite mana. Can\'t buy boots so passive gives MS per level. Rabadon\'s multiplies your DPS.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: es tu DPS principal. Q segundo: más daño de veneno y más MS al pegar. W último: la zona de grounded es útil con un punto.', en: 'E first: it\'s your main DPS. Q second: more poison damage and more MS on hit. W last: grounded zone is useful with one point.' }
  },
  Chogath: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'late',
    identity: {
      es: 'Tanque que crece infinitamente con stacks de R. Cada R que ejecuta un enemigo o monstruo te da vida permanente. En late game tenés 6000+ de vida y tu R hace 1000+ de true damage.',
      en: 'Tank who grows infinitely with R stacks. Each R that executes an enemy or monster gives permanent health. Late game you have 6000+ HP and your R does 1000+ true damage.'
    },
    gameplan: {
      early: { es: 'Farmeá pasivo con Q y W. Tu pasiva te cura cuando matás minions así que susteneás bien. Nivel 6 tu R ejecuta — si el enemigo está a 300 HP, lo comés.', en: 'Farm passive with Q and W. Your passive heals on minion kills so you sustain well. Level 6 your R executes — if enemy is at 300 HP, you eat them.' },
      mid: { es: 'Stackeá R en todo lo que puedas — campamentos de jungla, dragones, enemigos. Cada stack te da vida permanente. Con 6+ stacks sos un monstruo imposible de matar.', en: 'Stack R on everything you can — jungle camps, dragons, enemies. Each stack gives permanent health. With 6+ stacks you\'re an unkillable monster.' },
      late: { es: 'Sos enorme (literalmente). Flash + R ejecuta al carry enemigo por 1000+ true damage. En teamfights, tu Q knockea, W silencia, y nadie puede ignorarte porque tu R los puede ejecutar.', en: 'You\'re enormous (literally). Flash + R executes enemy carry for 1000+ true damage. In teamfights, your Q knocks up, W silences, and nobody can ignore you because your R can execute them.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q knockup → W silence mientras caen → Auto para daño extra. Simple y efectivo.', en: 'Q knockup → W silence while they fall → Auto for extra damage. Simple and effective.' },
      advanced: { keys: 'Flash → R → Q → W', es: 'Flash encima del carry → R para ejecutar (true damage, no se mitiga) → Q en el equipo → W silence AoE. El carry desaparece.', en: 'Flash on top of carry → R to execute (true damage, can\'t be mitigated) → Q on team → W AoE silence. The carry disappears.' }
    },
    buildReasoning: { es: 'Heartsteel stackea vida con tu tamaño — sos el mejor usuario porque tenés la mayor base HP. Después Warmog\'s para regen, Frozen Heart para CDR y armadura. Tu R escala con AP y vida.', en: 'Heartsteel stacks health with your size — you\'re the best user because you have the highest base HP. Then Warmog\'s for regen, Frozen Heart for CDR and armor. Your R scales with AP and health.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: knockup con menor CD y más daño AoE. W segundo: silence más largo. E último: el daño de autos es útil pero no prioritario en tanque.', en: 'Q first: knockup with lower CD and more AoE damage. W second: longer silence. E last: auto damage is useful but not priority on tank.' }
  },
  Corki: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC de mid que hace daño mágico con autos. Tu Package (pasiva) te da un mega-dash que deja un trail de fuego. Pokeás con R misiles y tu daño mixto es difícil de itemizar.',
      en: 'Mid lane ADC who deals magic damage with autos. Your Package (passive) gives a mega-dash that leaves a fire trail. Poke with R missiles and your mixed damage is hard to itemize.'
    },
    gameplan: {
      early: { es: 'Farmeá con Q y autos. Tu daño es mixto (50% mágico) desde el principio. Nivel 6 tenés misiles para poke constante. Guardá el Big One (cada 3er misil) para trades grandes.', en: 'Farm with Q and autos. Your damage is mixed (50% magic) from the start. Level 6 you have missiles for constant poke. Save the Big One (every 3rd missile) for big trades.' },
      mid: { es: 'Cuando aparece el Package en base, agarralo y usalo para roamear. El W con Package (Valkyrie especial) cruza media pantalla y deja un trail de fuego devastador. Es un play maker.', en: 'When Package appears in base, grab it and use it to roam. W with Package (special Valkyrie) crosses half the screen and leaves a devastating fire trail. It\'s a play maker.' },
      late: { es: 'Pokeá con R Big Ones antes de la pelea. Tu daño mixto hace que armadura y MR no te counteren eficientemente. Package + Flash en un teamfight puede ganar solo.', en: 'Poke with R Big Ones before the fight. Your mixed damage means armor and MR don\'t counter you efficiently. Package + Flash in a teamfight can win alone.' }
    },
    combo: {
      basic: { keys: 'R → Q → AA', es: 'R misil para poke → Q para burst → Auto. Simple y efectivo para trades.', en: 'R missile for poke → Q for burst → Auto. Simple and effective for trades.' },
      advanced: { keys: 'W(Package) → R(Big One) → Q → E → AA', es: 'W con Package para mega-dash que deja fuego → R Big One → Q → E para ráfaga de balas → Autos. El Package hace daño masivo.', en: 'W with Package for mega-dash that leaves fire → R Big One → Q → E for bullet barrage → Autos. Package deals massive damage.' }
    },
    buildReasoning: { es: 'Trinity Force synergiza con tu spameo de habilidades — el Spellblade proc sale en cada misil. Manamune para resolver maná y escalar. Rapid Firecannon para más rango y poke.', en: 'Trinity Force synergizes with your ability spam — Spellblade proc fires on every missile. Manamune to solve mana and scale. Rapid Firecannon for more range and poke.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: burst y waveclear. E segundo: más daño de ráfaga. W último: el dash no necesita niveles, la distancia es fija.', en: 'Q first: burst and waveclear. E second: more barrage damage. W last: dash doesn\'t need levels, distance is fixed.' }
  },
  Darius: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: {
      es: 'Bruiser de top que domina la lane con daño de sangrado. 5 stacks de pasiva + R = ejecución garantizada. Si sacás una kill con R, reseteá y matá a todos.',
      en: 'Top lane bruiser who dominates lane with bleed damage. 5 passive stacks + R = guaranteed execution. If you get a kill with R, it resets and kill everyone.'
    },
    gameplan: {
      early: { es: 'Jugá MUY agresivo. Tu pasiva de bleed gana cualquier trade extendido. Pegá Q en el borde exterior para curar y hacer más daño. E para pullear cuando quieren escapar.', en: 'Play VERY aggressive. Your bleed passive wins any extended trade. Hit Q on the outer edge to heal and deal more damage. E to pull when they try to escape.' },
      mid: { es: 'Splitpusheá y nadie te puede 1v1 con 5 stacks. Si te mandan 2 y estás ahead, podés matar a ambos con R reset. En teamfights buscá acumular 5 stacks lo antes posible para el penta.', en: 'Splitpush and nobody can 1v1 you with 5 stacks. If they send 2 and you\'re ahead, you can kill both with R reset. In teamfights look to stack 5 passive ASAP for the penta.' },
      late: { es: 'Te kittean mucho en late. Necesitás Flash o Ghost para llegar al backline. Si podés entrar con 5 stacks (kill a un tanque primero), tu R resetea y hacés penta.', en: 'You get kited hard late. You need Flash or Ghost to reach backline. If you can enter with 5 stacks (kill a tank first), your R resets and you get a penta.' }
    },
    combo: {
      basic: { keys: 'E → AA → W → Q', es: 'E pull → Auto inmediato → W auto reset (slow) → Q outer edge para curar. 4 stacks de pasiva en segundos.', en: 'E pull → immediate Auto → W auto reset (slow) → Q outer edge to heal. 4 passive stacks in seconds.' },
      advanced: { keys: 'E → AA → W → AA → Q → R', es: 'E pull → Auto → W reset → Auto → Q heal (ya tenés 5 stacks) → R ejecución con daño máximo. El true damage de R con 5 stacks es letal.', en: 'E pull → Auto → W reset → Auto → Q heal (already have 5 stacks) → R execution with max damage. R true damage with 5 stacks is lethal.' }
    },
    buildReasoning: { es: 'Trinity Force te da Spellblade que prockea con W auto reset — daño brutal. Sterak\'s te da shield cuando estás en el medio de la pelea. Dead Man\'s para llegar al backline.', en: 'Trinity Force gives Spellblade that procs with W auto reset — brutal damage. Sterak\'s gives shield when in the middle of the fight. Dead Man\'s to reach backline.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño, curación y waveclear. E segundo: menor CD del pull y más armor pen. W último: el slow es útil pero solo necesitás el auto reset.', en: 'Q first: damage, healing and waveclear. E second: lower pull CD and more armor pen. W last: slow is useful but you only need the auto reset.' }
  },
  Diana: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler/mid AP bruiser con engage AoE devastador. Tu R atrae a todos los enemigos cercanos y explota — en un grupo de 3+ es daño nuclear. Combinas burst con sustain.',
      en: 'AP bruiser jungler/mid with devastating AoE engage. Your R pulls all nearby enemies and explodes — on a group of 3+ it\'s nuclear damage. Combines burst with sustain.'
    },
    gameplan: {
      early: { es: 'En jungla, hacé full clear sano con pasiva (cada 3er auto hace AoE). Gankeá nivel 6 — tu R atraea al enemigo y hace mucho daño. Pre-6 tu gank es Q → E dash.', en: 'In jungle, full clear healthy with passive (every 3rd auto does AoE). Gank level 6 — your R pulls enemy in and deals lots of damage. Pre-6 your gank is Q → E dash.' },
      mid: { es: 'Buscá peleas en dragón/herald. Si podés R con 3+ enemigos, el daño es absurdo. Combinated con Zhonya\'s: entrás, R, Zhonya\'s, tu equipo followea.', en: 'Look for fights at dragon/herald. If you can R with 3+ enemies, damage is absurd. Combined with Zhonya\'s: go in, R, Zhonya\'s, your team follows up.' },
      late: { es: 'Flash → R en un grupo de enemigos es game-winning. Zhonya\'s te deja sobrevivir después del engage. Tu trabajo es ser la bola de demolición que entra primera.', en: 'Flash → R on a group of enemies is game-winning. Zhonya\'s lets you survive after engage. Your job is to be the wrecking ball that goes in first.' }
    },
    combo: {
      basic: { keys: 'Q → E → AA → AA → AA(pasiva)', es: 'Q crescent → E dash al target marcado por Q (reset si pega) → 3 autos para proc pasiva AoE.', en: 'Q crescent → E dash to Q-marked target (resets if hit) → 3 autos to proc AoE passive.' },
      advanced: { keys: 'Q → E → R → Zhonya\'s', es: 'Q para marcar → E dash al marcado → R inmediato para atraer a todos → Zhonya\'s para sobrevivir mientras tu equipo mata. El engage perfecto.', en: 'Q to mark → E dash to marked → immediate R to pull everyone → Zhonya\'s to survive while team kills. The perfect engage.' }
    },
    buildReasoning: { es: 'Rod of Ages para sustain y AP que escala con tiempo. Nashor\'s amplifica tu pasiva de 3 autos con on-hit. Zhonya\'s es obligatoria — sin ella morís después de R.', en: 'Rod of Ages for sustain and AP that scales over time. Nashor\'s amplifies your 3-hit passive with on-hit. Zhonya\'s is mandatory — without it you die after R.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño principal y marca para resetear E. W segundo: shield y daño AoE. E último: el dash no necesita niveles, solo el reset importa.', en: 'Q first: main damage and mark to reset E. W second: shield and AoE damage. E last: dash doesn\'t need levels, only the reset matters.' }
  },
  DrMundo: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: {
      es: 'Tanque que escala con vida y regenera cantidades absurdas. No usa maná. Tu R te cura un % masivo de tu vida máxima. Cuanto más vida tenés, más curás, más tanqueás.',
      en: 'Tank who scales with health and regenerates absurd amounts. No mana. Your R heals a massive % of your max health. More health = more healing = more tanking.'
    },
    gameplan: {
      early: { es: 'Farmeá con Q (cleaver a distancia, cuesta vida pero devuelve si pega). Tu pasiva te da inmunidad al primer CC cada cierto tiempo. No pelees — sos débil temprano.', en: 'Farm with Q (ranged cleaver, costs health but refunds on hit). Your passive gives immunity to first CC periodically. Don\'t fight — you\'re weak early.' },
      mid: { es: 'Con 2 items de vida ya sos muy difícil de matar. Tu R te cura masivamente y te da AD y MS. Splitpusheá y obligá a que manden 2 o más para matarte.', en: 'With 2 health items you\'re very hard to kill. Your R heals massively and gives AD and MS. Splitpush and force them to send 2+ to kill you.' },
      late: { es: 'Sos prácticamente inmortal. Caminá hacia el backline y pegá — no pueden matarte si no tienen Grievous Wounds fuerte. Tu Q slow constante y tu daño % vida molesta a cualquiera.', en: 'You\'re practically immortal. Walk at the backline and hit — they can\'t kill you without strong Grievous Wounds. Your constant Q slow and % health damage annoys everyone.' }
    },
    combo: {
      basic: { keys: 'Q → E → AA', es: 'Q para slow → E auto reset (empowered auto con más daño) → Auto. E da más daño cuanta menos vida tenés.', en: 'Q for slow → E auto reset (empowered auto with more damage) → Auto. E gives more damage the lower your health.' },
      advanced: { keys: 'R → Q → E → AA → Q → AA', es: 'R para MS y regen → Q slow → E empowered auto → perseguí y repetí Q. Con R activa sos imparable.', en: 'R for MS and regen → Q slow → E empowered auto → chase and repeat Q. With R active you\'re unstoppable.' }
    },
    buildReasoning: { es: 'Heartsteel stackea vida que se multiplica con tu R. Warmog\'s para regen fuera de combate (volvés con vida full en segundos). Spirit Visage amplifica TODA tu curación un 25%.', en: 'Heartsteel stacks health that multiplies with your R. Warmog\'s for out-of-combat regen (back to full in seconds). Spirit Visage amplifies ALL your healing by 25%.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: poke, slow y daño % vida. E segundo: más daño de autos. W último: la curación pasiva y daño son OK pero Q y E son mejores.', en: 'Q first: poke, slow and % health damage. E second: more auto damage. W last: passive healing and damage are OK but Q and E are better.' }
  },
  Draven: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: {
      es: 'ADC agresivo con el mayor daño de autos temprano del juego. Tus Q (Spinning Axes) amplifican masivamente el daño de cada auto. Matá gente = stacks de oro = snowball.',
      en: 'Aggressive ADC with the highest early auto damage in the game. Your Q (Spinning Axes) massively amplify each auto\'s damage. Kill people = gold stacks = snowball.'
    },
    gameplan: {
      early: { es: 'Activá Q y tradeá agresivamente — tu auto con hacha hace el doble de daño que cualquier otro ADC. Atrapa las hachas rebotantes para mantener Q activo. Nivel 2 all-in es brutal con E+autos.', en: 'Activate Q and trade aggressively — your auto with axe does double the damage of any other ADC. Catch bouncing axes to keep Q active. Level 2 all-in is brutal with E+autos.' },
      mid: { es: 'Si sacaste kills temprano, tus stacks de oro te dan una montaña de plata. Con 2 items de crit sos el ADC más fuerte del juego. Seguí peleando y snowballeando.', en: 'If you got early kills, your gold stacks give you a mountain of gold. With 2 crit items you\'re the strongest ADC in the game. Keep fighting and snowballing.' },
      late: { es: 'Cada auto con Q crit pega por 1000+. Posicionate para atrapar hachas sin ponerte en peligro. Si la partida se extiende y no snowballeaste, otros ADCs te van a superar.', en: 'Each auto with Q crit hits for 1000+. Position to catch axes without putting yourself in danger. If the game extends and you didn\'t snowball, other ADCs will outscale you.' }
    },
    combo: {
      basic: { keys: 'Q → AA → Q → AA → E', es: 'Activar Q → Auto con hacha → Atrapar hacha → Auto → E para slow/knockback si se acercan. Mantener siempre 2 hachas girando.', en: 'Activate Q → Auto with axe → Catch axe → Auto → E for slow/knockback if they approach. Always keep 2 axes spinning.' },
      advanced: { keys: 'W → AA(Q) → AA(Q) → E → R → AA(Q)', es: 'W para MS y AS → Autos con Q → E si intentan escapar → R global para ejecutar → Seguir pegando. W se resetea al atrapar hachas.', en: 'W for MS and AS → Autos with Q → E if they try to escape → R global to execute → Keep hitting. W resets on axe catch.' }
    },
    buildReasoning: { es: 'Infinity Edge rush porque tu Q amplifica el daño base del auto y el crit lo multiplica encima. Bloodthirster para sustain agresivo. Lord Dominik\'s para penetración.', en: 'Infinity Edge rush because your Q amplifies auto base damage and crit multiplies on top. Bloodthirster for aggressive sustain. Lord Dominik\'s for penetration.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: es tu fuente de daño — cada punto sube el daño de las hachas. W segundo: más AS y MS, se resetea al atrapar hacha. E último: el knockback es útil con un punto.', en: 'Q first: it\'s your damage source — each point increases axe damage. W second: more AS and MS, resets on axe catch. E last: knockback is useful with one point.' }
  },
  Ekko: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Assassin AP con una R que te devuelve al pasado. Entrás, reventás al carry, y R te vuelve a donde estabas hace 4 segundos con vida de vuelta. Riesgo cero si lo hacés bien.',
      en: 'AP assassin with an R that takes you back in time. Go in, burst the carry, and R brings you back to where you were 4 seconds ago with health back. Zero risk if done right.'
    },
    gameplan: {
      early: { es: 'Farmeá con Q (ida y vuelta). Tradeá con pasiva — 3 hits activan un proc de daño extra + speed boost. E dash + auto para el tercer hit. Nivel 6 R te hace invulnerable a all-ins.', en: 'Farm with Q (there and back). Trade with passive — 3 hits proc bonus damage + speed boost. E dash + auto for the third hit. Level 6 R makes you invulnerable to all-ins.' },
      mid: { es: 'Roameá y buscá picks. E → Q → AA (3 hits de pasiva) mata a cualquier squishy. Si sale mal, R te devuelve y te cura. Es el assassin más seguro del juego.', en: 'Roam and look for picks. E → Q → AA (3 passive hits) kills any squishy. If it goes wrong, R brings you back and heals. Safest assassin in the game.' },
      late: { es: 'Flanqueá en teamfights. Si podés poner tu W (campo de stasis) sobre el equipo enemigo y caer adentro, stuneas a todos. Después R para volver. Tu fantasma de R siempre muestra dónde vas a volver.', en: 'Flank in teamfights. If you can place W (stasis field) on enemy team and land inside, you stun everyone. Then R to go back. Your R ghost always shows where you\'ll return.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA', es: 'E dash → Q mientras dasheas (sale más rápido) → Auto para tercer hit de pasiva. Burst rápido y salís corriendo con el MS de pasiva.', en: 'E dash → Q while dashing (comes out faster) → Auto for third passive hit. Quick burst and run out with passive MS.' },
      advanced: { keys: 'W(predicción) → E → Q → AA → R', es: 'W donde va a estar el enemigo → E dash adentro del W → Q → AA para burst → R para volver. El W stunea y te da shield masivo.', en: 'W where enemy will be → E dash inside W → Q → AA for burst → R to return. W stuns and gives massive shield.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt le da otro gap close + magic pen — perfecto para un assassin. Lich Bane prockea con tu E auto (burst tremendo). Rabadon\'s para one-shot. Zhonya\'s como alternativa a R para sobrevivir.', en: 'Hextech Rocketbelt gives another gap close + magic pen — perfect for an assassin. Lich Bane procs with your E auto (tremendous burst). Rabadon\'s to one-shot. Zhonya\'s as R alternative to survive.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: waveclear y poke principal. E segundo: menor CD del dash, más daño. W último: la zona de stun es útil con un punto — solo sube el shield.', en: 'Q first: main waveclear and poke. E second: lower dash CD, more damage. W last: stun zone is useful with one point — only increases shield.' }
  },
  Elise: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'early',
    identity: {
      es: 'Jungler que domina el early game con ganks letales. Forma humana pokea, forma araña ejecuta. Cocoon (E humano) es un stun que cambia todo. Caés nivel 3 y la lane muere.',
      en: 'Jungler who dominates early game with lethal ganks. Human form pokes, spider form executes. Cocoon (human E) is a stun that changes everything. Level 3 gank and the lane dies.'
    },
    gameplan: {
      early: { es: 'Gankeá lo antes posible — nivel 3 con cocoon es letal. E stun → Q humano (% vida actual) → W araña → R forma araña → Q araña (% vida perdida). Ejecutás a casi cualquiera.', en: 'Gank ASAP — level 3 with cocoon is lethal. E stun → human Q (% current HP) → spider W → R spider form → spider Q (% missing HP). You execute almost anyone.' },
      mid: { es: 'Seguí gankeando y controlando objetivos. Rappel (E araña) te deja esquivar cosas y hacer dives de torre (rappel droppea aggro de torre). Sos la reina del early/mid.', en: 'Keep ganking and controlling objectives. Rappel (spider E) lets you dodge things and tower dive (rappel drops tower aggro). You\'re the queen of early/mid.' },
      late: { es: 'Caés bastante. Tu trabajo es pillar gente con cocoon y hacer picks. En teamfights no tenés mucho AoE — buscá atrapar al carry con E y burstearlo.', en: 'You fall off hard. Your job is to catch people with cocoon and make picks. In teamfights you lack AoE — look to catch carries with E and burst them.' }
    },
    combo: {
      basic: { keys: 'E(humano) → Q(humano) → W(humano) → R → Q(araña)', es: 'Cocoon stun → Q humano (% vida actual) → W araña voladora → R forma araña → Q araña (% vida perdida) para ejecutar.', en: 'Cocoon stun → human Q (% current HP) → spider W → R spider form → spider Q (% missing HP) to execute.' },
      advanced: { keys: 'W(humano) → Flash → E(humano) → Q(humano) → R → Q(araña) → E(araña)', es: 'W primero (tarda en llegar) → Flash cocoon sorpresa → Q humano → R cambio → Q araña ejecutar → E rappel para escapar torre.', en: 'W first (travel time) → Flash cocoon surprise → human Q → R swap → spider Q execute → E rappel to escape tower.' }
    },
    buildReasoning: { es: 'Shadowflame amplifica tu burst temprano. Ionian Boots para CDR (más cocoons). Zhonya\'s te deja sobrevivir dives agresivos. Void Staff si stackean MR.', en: 'Shadowflame amplifies early burst. Ionian Boots for CDR (more cocoons). Zhonya\'s lets you survive aggressive dives. Void Staff if they stack MR.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño % vida en ambas formas. W segundo: más daño de araña. E último: cocoon stun duration sube poco.', en: 'Q first: % health damage in both forms. W second: more spider damage. E last: cocoon stun duration barely increases.' }
  },
  Evelynn: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Assassin AP invisible permanente desde nivel 6. Nadie sabe dónde estás. Cazás gente que está sola y los reventás antes de que reaccionen. La paranoia que generás es tu mejor arma.',
      en: 'Permanently invisible AP assassin from level 6. Nobody knows where you are. You hunt isolated people and burst them before they react. The paranoia you generate is your best weapon.'
    },
    gameplan: {
      early: { es: 'Pre-6 sos débil y visible — full clear rápido. Nivel 6 te hacés invisible y cambia todo. Ahora podés gankear desde cualquier ángulo sin que pongan wards.', en: 'Pre-6 you\'re weak and visible — full clear fast. Level 6 you become invisible and everything changes. Now you can gank from any angle without wards mattering.' },
      mid: { es: 'Cazá a cualquiera que esté solo. Acercáte invisible → W para marcar (esperar charm) → Q → E para one-shot. Tu R es una ejecución + escape (te vuelve invisible).', en: 'Hunt anyone who\'s alone. Approach invisible → W to mark (wait for charm) → Q → E to one-shot. Your R is an execution + escape (goes back to stealth).' },
      late: { es: 'Flanqueá invisible y buscá al carry enemigo. Si podés W + esperar charm + full combo, lo matás sin que pueda reaccionar. R te saca de la pelea. Nunca pelees de frente.', en: 'Flank invisible and find the enemy carry. If you can W + wait for charm + full combo, you kill them before they react. R gets you out. Never fight head on.' }
    },
    combo: {
      basic: { keys: 'W → (esperar charm) → Q → E', es: 'W para marcar → esperá 2.5s para charm → Q para activar → E para burst. El charm aplica MR reduction masiva.', en: 'W to mark → wait 2.5s for charm → Q to proc → E for burst. Charm applies massive MR reduction.' },
      advanced: { keys: 'W → (esperar) → Q → E → Q → Q → Q → R', es: 'W charm → Q inicial → E burst → Q×3 extra → R ejecución que te devuelve a stealth. El target muere y nadie te ve.', en: 'W charm → initial Q → E burst → Q×3 extra → R execution that returns you to stealth. Target dies and nobody sees you.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt te da un dash extra desde stealth + magic pen. Shadowflame para más burst. Rabadon\'s para one-shot. Mejai\'s porque acumulás stacks fácil al no morir (sos invisible).', en: 'Hextech Rocketbelt gives extra dash from stealth + magic pen. Shadowflame for more burst. Rabadon\'s to one-shot. Mejai\'s because you stack easy by not dying (you\'re invisible).' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño principal con 4 casts. E segundo: más burst en el empowered. W último: el charm duration y MR reduction son suficientes nivel 1.', en: 'Q first: main damage with 4 casts. E second: more burst on empowered. W last: charm duration and MR reduction are enough at level 1.' }
  },
  Ezreal: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC caster con poke infinito y el mejor escape de los ADCs (E blink). Spameás Q para reducir CDs de todo. Muy seguro y consistente pero requiere pegar skillshots.',
      en: 'Caster ADC with infinite poke and the best ADC escape (E blink). Spam Q to reduce all CDs. Very safe and consistent but requires landing skillshots.'
    },
    gameplan: {
      early: { es: 'Pokeá con Q a través de minions (no pasa, apuntá en ángulo). Cada Q que pegas reduce el CD de todas tus habilidades. E es tu blink — guardalo para escapar, nunca lo uses agresivo temprano.', en: 'Poke with Q through minions (doesn\'t pass through, aim at angles). Each Q hit reduces all ability CDs. E is your blink — save for escaping, never use aggressively early.' },
      mid: { es: 'Con Manamune + Sheen/Trinity pokeás por 40% de vida con cada Q. Buscá poke antes de peleas. Tu W → Q combo marca y detona para burst extra.', en: 'With Manamune + Sheen/Trinity you poke for 40% health per Q. Look for poke before fights. Your W → Q combo marks and detonates for extra burst.' },
      late: { es: 'Tu Q pega como un camión cada 2 segundos. En teamfights, pokeá desde atrás con Q. Si alguien se acerca, E blink y seguí pokeando. R para iniciar peleas con daño AoE global.', en: 'Your Q hits like a truck every 2 seconds. In teamfights, poke from behind with Q. If someone approaches, E blink and keep poking. R to start fights with global AoE damage.' }
    },
    combo: {
      basic: { keys: 'W → Q', es: 'W marca al enemigo → Q detona la marca para daño extra. Este es tu trade principal y sale rápido.', en: 'W marks enemy → Q detonates mark for extra damage. This is your main trade and comes out fast.' },
      advanced: { keys: 'W → E → AA → Q', es: 'W marca → E blink agresivo (detona la marca + daño de E) → Auto → Q. Esto es all-in y solo lo hacés si sabés que matás o estás seguro.', en: 'W mark → aggressive E blink (detonates mark + E damage) → Auto → Q. This is all-in and only do it if you know you kill or are safe.' }
    },
    buildReasoning: { es: 'Manamune es core — spameás Q así que stackeás Tear rapidísimo y el daño de Muramana en cada Q es enorme. Trinity Force para Spellblade en cada Q. Serylda\'s para slow en Q.', en: 'Manamune is core — you spam Q so you stack Tear super fast and Muramana damage on each Q is huge. Trinity Force for Spellblade on each Q. Serylda\'s for Q slow.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu pan de cada día, daño y CD reduction. E segundo: menor CD del blink para seguridad. W último: la marca es útil pero el daño base es bajo.', en: 'Q first: bread and butter, damage and CD reduction. E second: lower blink CD for safety. W last: mark is useful but base damage is low.' }
  },
  Fiddlesticks: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler AP con el engage más terrorífico del juego. Tu R channeleado desde fog of war causa MIEDO (fear AoE) y hace daño absurdo. Un buen R gana cualquier teamfight.',
      en: 'AP jungler with the most terrifying engage in the game. Your R channeled from fog of war causes FEAR (AoE fear) and deals absurd damage. A good R wins any teamfight.'
    },
    gameplan: {
      early: { es: 'Full clear con W (drain) — empezás en raptors con W AoE y estás full HP siempre. Tu clear es de los más sanos del juego. Pre-6 tus ganks son mediocres; post-6 son aterradoras.', en: 'Full clear with W (drain) — start raptors with AoE W and you\'re always full HP. Your clear is one of the healthiest in the game. Pre-6 ganks are mediocre; post-6 they\'re terrifying.' },
      mid: { es: 'Buscá positions de R desde fog of war (bushes, detrás de paredes). Si R sale desde donde no te ven, aplica FEAR a todos. Buscá peleas en dragón/herald donde hay bushes cerca.', en: 'Look for R positions from fog of war (bushes, behind walls). If R comes from where they can\'t see you, it applies FEAR to everyone. Look for dragon/herald fights with nearby bushes.' },
      late: { es: 'Tu ÚNICO trabajo es pegar un buen R. Escondete, esperá, channeleá R desde fog → fear a todo el equipo → Zhonya\'s. Tu equipo limpia mientras están feared y vos hacés DPS en Zhonya\'s.', en: 'Your ONLY job is to land a good R. Hide, wait, channel R from fog → fear the whole team → Zhonya\'s. Your team cleans up while they\'re feared and you deal DPS in Zhonya\'s.' }
    },
    combo: {
      basic: { keys: 'R(desde fog) → W → E', es: 'R channel desde bush/fog para fear AoE → W drain para curar y hacer daño → E silence para más CC. Mantené W activo para curar.', en: 'R channel from bush/fog for AoE fear → W drain to heal and deal damage → E silence for more CC. Keep W active to heal.' },
      advanced: { keys: 'R(desde fog) → Flash → Zhonya\'s → W', es: 'R channel → Flash para extender el rango de R → Zhonya\'s inmediato (R sigue haciendo daño en Zhonya\'s) → W drain al salir. Es el combo más devastador del juego.', en: 'R channel → Flash to extend R range → immediate Zhonya\'s (R keeps dealing damage in Zhonya\'s) → W drain on exit. Most devastating combo in the game.' }
    },
    buildReasoning: { es: 'Zhonya\'s es TU item más importante — sin él morís después de R. Después Liandry\'s para quema constante con tu R DPS. Rabadon\'s para multiplicar todo ese daño AoE.', en: 'Zhonya\'s is YOUR most important item — without it you die after R. Then Liandry\'s for constant burn with R DPS. Rabadon\'s to multiply all that AoE damage.' },
    skillOrder: { order: 'W > Q > E', es: 'W primero: tu sustain de jungla y DPS principal. Q segundo: más daño de fear. E último: el silence es útil con un punto.', en: 'W first: jungle sustain and main DPS. Q second: more fear damage. E last: silence is useful with one point.' }
  },
  Fiora: {
    playstyle: { es: 'Splitpush', en: 'Splitpush' },
    powerSpike: 'mid',
    identity: {
      es: 'La mejor duelista del juego. Nadie te puede 1v1 si pegás tus vitals (pasiva). W (Riposte) bloquea CUALQUIER habilidad y devuelve stun. Splitpush es tu destino.',
      en: 'The best duelist in the game. Nobody can 1v1 you if you hit vitals (passive). W (Riposte) blocks ANY ability and returns stun. Splitpush is your destiny.'
    },
    gameplan: {
      early: { es: 'Pegá los vitals de pasiva — aparecen como flechitas en el enemigo. Cada vital te cura y hace % vida true damage. Q dash tiene bajo CD y prockea vitals. W para bloquear el CC clave del enemigo.', en: 'Hit passive vitals — they appear as arrows on the enemy. Each vital heals and deals % health true damage. Q dash has low CD and procs vitals. W to block enemy\'s key CC.' },
      mid: { es: 'Splitpusheá constantemente. Con Ravenous Hydra + Trinity matás torres rápido y NADIE te puede 1v1. Si te mandan 2, usá W para bloquear CC y escapá con Q. Si te mandan 1, lo matás.', en: 'Splitpush constantly. With Ravenous Hydra + Trinity you kill towers fast and NOBODY can 1v1 you. If they send 2, use W to block CC and escape with Q. If they send 1, you kill them.' },
      late: { es: 'Seguí en sidelane. Tu R marca 4 vitals — si pegás las 4, creás una zona de curación masiva AoE. En teamfights buscá R al tanque frontliner, pegá 4 vitals, y curá a tu equipo.', en: 'Stay in sidelane. Your R marks 4 vitals — hit all 4 to create a massive AoE healing zone. In teamfights look to R the frontline tank, hit 4 vitals, and heal your team.' }
    },
    combo: {
      basic: { keys: 'Q(vital) → AA → E → AA', es: 'Q al vital → Auto → E para reset de auto (primer hit slowa, segundo crit) → Auto. Los vitals curan y hacen % true damage.', en: 'Q to vital → Auto → E for auto reset (first hit slows, second crits) → Auto. Vitals heal and deal % true damage.' },
      advanced: { keys: 'R → Q(vital) → AA → E → AA(vital) → Q(vital) → AA(vital)', es: 'R para marcar 4 vitals → Q a un vital → Auto a otro → E reset → Auto a tercero → Q al cuarto. Los 4 vitals crean zona de heal AoE masiva.', en: 'R to mark 4 vitals → Q to one vital → Auto to another → E reset → Auto to third → Q to fourth. All 4 vitals create massive AoE heal zone.' }
    },
    buildReasoning: { es: 'Ravenous Hydra para sustain y waveclear en splitpush. Trinity Force para Spellblade en cada Q (que tiene bajísimo CD). Death\'s Dance para sobrevivir peleas y el bleed se cura con tus vitals.', en: 'Ravenous Hydra for sustain and splitpush waveclear. Trinity Force for Spellblade on each Q (very low CD). Death\'s Dance to survive fights and the bleed heals from your vitals.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: menor CD del dash/vital proc. E segundo: más AS y menor CD del auto reset. W último: el riposte es situacional y no necesita niveles.', en: 'Q first: lower dash/vital proc CD. E second: more AS and lower auto reset CD. W last: riposte is situational and doesn\'t need levels.' }
  },
  Fizz: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: {
      es: 'Assassin AP melee que es imposible de targetear. Tu E (Playful/Trickster) te hace untargeteable — esquivás TODO. Entrás, one-shoteás y desaparecés.',
      en: 'Melee AP assassin who is impossible to target. Your E (Playful/Trickster) makes you untargetable — dodge EVERYTHING. Go in, one-shot and disappear.'
    },
    gameplan: {
      early: { es: 'Nivel 1-2 sos débil contra rangos. Farmeá con E si es necesario. Nivel 3 con Q+W+E podés all-inear. Nivel 6 con R es kill asegurada en cualquier mago si lo pegás.', en: 'Levels 1-2 you\'re weak against ranged. Farm with E if needed. Level 3 with Q+W+E you can all-in. Level 6 with R is guaranteed kill on any mage if you land it.' },
      mid: { es: 'Roameá y buscá kills. R tiene hitbox gigante — pegala y el tiburón pega. Q+W para cerrar distancia y burst. E para esquivar contraataques o escapar.', en: 'Roam and look for kills. R has giant hitbox — land it and the shark hits. Q+W to close distance and burst. E to dodge counterattacks or escape.' },
      late: { es: 'Tu R en el carry enemigo = muerte segura. Esperá a que empiece la pelea, R al ADC, Q+W para cerrar, E para salir. Si estás ahead podés one-shotear sin R.', en: 'Your R on enemy carry = guaranteed death. Wait for fight to start, R the ADC, Q+W to close, E to get out. If ahead you can one-shot without R.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA → E', es: 'Q dash al enemigo → W para potenciar autos → Autos → E para escapar o hacer más daño (cae encima de ellos).', en: 'Q dash to enemy → W to empower autos → Autos → E to escape or deal more damage (land on them).' },
      advanced: { keys: 'R → Q → AA → W → E', es: 'R tiburón (100% one-shot setup) → Q al target knockeado → Auto → W empowered → E para esquivar o seguir. Si R pega, el target muere.', en: 'R shark (100% one-shot setup) → Q to knocked-up target → Auto → W empowered → E to dodge or follow. If R lands, target dies.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt para otro gap close + magic pen — Fizz necesita llegar al target. Lich Bane prockea con tu Q y W para burst tremendo. Rabadon\'s para one-shot.', en: 'Hextech Rocketbelt for another gap close + magic pen — Fizz needs to reach the target. Lich Bane procs with Q and W for tremendous burst. Rabadon\'s to one-shot.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: más daño, menor CD y es tu principal herramienta (damage+escape+dodge). Q segundo: menor CD del dash. W último: el empowered auto escala menos.', en: 'E first: more damage, lower CD and your main tool (damage+escape+dodge). Q second: lower dash CD. W last: empowered auto scales less.' }
  },
  Galio: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: {
      es: 'Tanque AP de mid con R global que protege aliados. Anti-mago natural con tu W de Magic Shield. Tu R te teleporta a un aliado y knockea en área. El guardian del equipo.',
      en: 'AP tank mid with global R that protects allies. Natural anti-mage with your W Magic Shield. Your R teleports to an ally and AoE knocks up. The team\'s guardian.'
    },
    gameplan: {
      early: { es: 'Tradeá con Q (remolino que hace daño % HP) y pasiva (auto empowered AoE). Sos fuerte contra AP mids gracias a tu W que reduce daño mágico. Pusheá y roameá.', en: 'Trade with Q (whirlwind that deals % HP damage) and passive (empowered AoE auto). You\'re strong vs AP mids thanks to W that reduces magic damage. Push and roam.' },
      mid: { es: 'Tu R global cambia peleas. Cuando tu bot o jungler pelea, R encima de un aliado para caer con knockup AoE masivo. Siempre mirá el mapa para oportunidades de R.', en: 'Your global R changes fights. When your bot or jungler fights, R on an ally to land with massive AoE knockup. Always watch the map for R opportunities.' },
      late: { es: 'En teamfights podés tanquear frente o salvar aliados con R. W carga → Flash → W release es un combo de engage letal. Tu CC es absurdo: taunt AoE + knockup AoE.', en: 'In teamfights you can frontline tank or save allies with R. W charge → Flash → W release is a lethal engage combo. Your CC is absurd: AoE taunt + AoE knockup.' }
    },
    combo: {
      basic: { keys: 'Q → AA(pasiva) → W(tap)', es: 'Q poke → Auto de pasiva (AoE) → W tap para daño rápido y reducción de daño. Simple trade de lane.', en: 'Q poke → Passive auto (AoE) → W tap for quick damage and damage reduction. Simple lane trade.' },
      advanced: { keys: 'W(cargar) → Flash → W(release) → E → Q → AA(pasiva)', es: 'W cargar taunt → Flash encima de varios → W release taunt AoE → E dash para knockup → Q → Auto pasiva. CC encadenado tremendo.', en: 'W charge taunt → Flash on top of multiple → W release AoE taunt → E dash for knockup → Q → Passive auto. Tremendous CC chain.' }
    },
    buildReasoning: { es: 'Rod of Ages te da tanqueo y AP que necesitás. Después Zhonya\'s para engages agresivos (W charge → Flash → Zhonya\'s). Force of Nature si el equipo enemigo es muy AP.', en: 'Rod of Ages gives the tankiness and AP you need. Then Zhonya\'s for aggressive engages (W charge → Flash → Zhonya\'s). Force of Nature if enemy team is heavy AP.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: waveclear y poke principal. W segundo: taunt más largo y más reducción de daño. E último: el dash knockup es útil con un punto.', en: 'Q first: main waveclear and poke. W second: longer taunt and more damage reduction. E last: dash knockup is useful with one point.' }
  },
  Gangplank: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: {
      es: 'Pirata de top lane que escala como un monstruo con barriles. Tu Q farmea plata extra con pasiva de Parrrley. Tus barriles (E) critan y hacen AoE — en late game one-shotean equipos.',
      en: 'Top lane pirate who scales like a monster with barrels. Your Q farms extra gold with Parrrley passive. Your barrels (E) crit and deal AoE — late game they one-shot teams.'
    },
    gameplan: {
      early: { es: 'Farmeá con Q para sacar plata extra (Silver Serpents para mejoras de R). Poné barriles cerca de minions y detonalos con Q para farmear + pokear. Tu W te limpia CC y cura.', en: 'Farm with Q for extra gold (Silver Serpents for R upgrades). Place barrels near minions and detonate with Q to farm + poke. Your W cleanses CC and heals.' },
      mid: { es: 'Con Sheen + barril crit empezás a doler. Practicá el combo de barril: poné uno, poné otro conectado, detoná el primero con Q → explota en cadena. Usá R para ayudar en peleas de otros lanes.', en: 'With Sheen + barrel crit you start hurting. Practice barrel combo: place one, chain another, detonate first with Q → chain explosion. Use R to help fights in other lanes.' },
      late: { es: 'Tu barril con 3+ items de crit hace 1500+ daño AoE. Un barril bien puesto en un teamfight mata al backline entero. R con upgrade hace slow masivo y quema. Sos un carry completo.', en: 'Your barrel with 3+ crit items deals 1500+ AoE damage. One well-placed barrel in a teamfight kills the entire backline. R with upgrade does massive slow and burn. You\'re a full carry.' }
    },
    combo: {
      basic: { keys: 'E → Q(al barril)', es: 'E barril cerca del enemigo → Q al barril para detonarlo. Si el barril está en 1 HP, Q lo detona instantáneamente para daño sorpresa.', en: 'E barrel near enemy → Q the barrel to detonate. If barrel is at 1 HP, Q detonates it instantly for surprise damage.' },
      advanced: { keys: 'E → E(cadena) → Q(primer barril)', es: 'E primer barril lejos → E segundo barril conectado al primero, encima del enemigo → Q el primer barril (cadena explosión). Conocido como "one part barrel". El rango es enorme.', en: 'E first barrel far → E second barrel connected to first, on top of enemy → Q first barrel (chain explosion). Known as "one part barrel". Range is enormous.' }
    },
    buildReasoning: { es: 'Trinity Force es core — Spellblade prockea con Q y se transfiere al barril. Infinity Edge para crit de barril. Lord Dominik\'s para que el barril penetre armadura. Collector para ejecución.', en: 'Trinity Force is core — Spellblade procs with Q and transfers to barrel. Infinity Edge for barrel crit. Lord Dominik\'s so barrel penetrates armor. Collector for execution.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: más daño de poke y más plata generada. E segundo: los barriles tienen menos HP (más fácil de detonar) y más daño. W último: la curación y cleanse no necesitan niveles.', en: 'Q first: more poke damage and more gold generated. E second: barrels have less HP (easier to detonate) and more damage. W last: heal and cleanse don\'t need levels.' }
  },
  Garen: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser simple pero efectivo. Q silencia, E gira para daño AoE, W te hace tanque, R ejecuta. Pasiva te regenera fuera de combate. Si el enemigo está a 30% de vida, R lo mata.',
      en: 'Simple but effective bruiser. Q silences, E spins for AoE damage, W makes you tanky, R executes. Passive regens you out of combat. If enemy is at 30% HP, R kills them.'
    },
    gameplan: {
      early: { es: 'Q para cerrar distancia + silence → E spin → retrocedé. Tu pasiva te regenera entre trades. Contra rangos es difícil — usá bushes para acercarte con Q sin recibir poke.', en: 'Q to close distance + silence → E spin → back off. Passive regens between trades. Against ranged it\'s hard — use bushes to approach with Q without taking poke.' },
      mid: { es: 'Con Stridebreaker o Trinity sos una amenaza en sidelane. Splitpusheá y buscá 1v1. Tu R como ejecución cierra kills que otros no consiguen. Podés tanquear bastante con W activo.', en: 'With Stridebreaker or Trinity you\'re a sidelane threat. Splitpush and look for 1v1s. Your R as execution closes kills others can\'t. You can tank a lot with W active.' },
      late: { es: 'En teamfights buscá correr al backline con Q (silence al mago), E spin en el grupo, R al que esté bajo. W te da tenacity y shield. No sos un engage — sos un follow-up.', en: 'In teamfights look to run at backline with Q (silence the mage), E spin on the group, R whoever is low. W gives tenacity and shield. You\'re not an engage — you\'re a follow-up.' }
    },
    combo: {
      basic: { keys: 'Q → AA → E', es: 'Q empowered auto (silence) → Auto → E spin. El silence impide que usen habilidades mientras girás.', en: 'Q empowered auto (silence) → Auto → E spin. Silence prevents abilities while you spin.' },
      advanced: { keys: 'Q → Flash → AA → E → W → R', es: 'Q activar → Flash para llegar → Auto silence → E spin → W para tanquear mientras spineas → R ejecutar. Flash Q sorprende siempre.', en: 'Q activate → Flash to reach → Auto silence → E spin → W to tank while spinning → R execute. Flash Q always surprises.' }
    },
    buildReasoning: { es: 'Trinity Force synergiza con tu Q auto empowered — Spellblade hace daño enorme. Mortal Reminder vs curación. Dead Man\'s Plate para llegar al backline (MS). Sterak\'s para shield.', en: 'Trinity Force synergizes with Q empowered auto — Spellblade deals enormous damage. Mortal Reminder vs healing. Dead Man\'s Plate to reach backline (MS). Sterak\'s for shield.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: es tu daño principal de spin, más ticks y más daño. Q segundo: más daño y menor CD del silence. W último: el shield y tenacity escalan con nivel del campeón.', en: 'E first: main spin damage, more ticks and more damage. Q second: more damage and lower silence CD. W last: shield and tenacity scale with champion level.' }
  },
  Gnar: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de top con dos formas. Mini Gnar pokea a distancia, Mega Gnar es un tanque CC con R que empuja contra paredes para stun AoE. Manejá tu barra de furia para transformarte cuando importa.',
      en: 'Top bruiser with two forms. Mini Gnar pokes from range, Mega Gnar is a CC tank with R that pushes against walls for AoE stun. Manage your rage bar to transform when it matters.'
    },
    gameplan: {
      early: { es: 'En mini, pokeá con Q boomerang y autos — sos ranged vs la mayoría de toplaners. Cuando la barra de furia esté llena, engageá con Mega para el burst + CC. No desperdicies Mega sin pelea.', en: 'In mini, poke with Q boomerang and autos — you\'re ranged vs most toplaners. When rage bar is full, engage with Mega for burst + CC. Don\'t waste Mega without a fight.' },
      mid: { es: 'Coordiná tus transformaciones para objetivos y peleas. Mega Gnar R contra una pared es uno de los CC más fuertes del juego. Buscá TP flanks con Mega listo.', en: 'Coordinate transformations for objectives and fights. Mega Gnar R against a wall is one of the strongest CCs in the game. Look for TP flanks with Mega ready.' },
      late: { es: 'Mega Gnar R contra pared + W stun + Q slow = el equipo enemigo no se mueve por 3 segundos. Controlá tu furia para transformarte EN la teamfight, no antes.', en: 'Mega Gnar R against wall + W stun + Q slow = enemy team doesn\'t move for 3 seconds. Control your rage to transform IN the teamfight, not before.' }
    },
    combo: {
      basic: { keys: 'AA → AA → AA(W proc)', es: 'En mini: 3 autos para proc W (daño % HP + MS). Kiteá con tu rango. En mega: Q → W para CC encadenado.', en: 'In mini: 3 autos to proc W (% HP damage + MS). Kite with range. In mega: Q → W for chained CC.' },
      advanced: { keys: 'R(hacia pared) → Q → W → AA', es: 'En Mega: R empujá hacia pared para stun AoE masivo → Q slow → W stun de seguimiento → Auto. El CC dura una eternidad.', en: 'In Mega: R push toward wall for massive AoE stun → Q slow → W follow-up stun → Auto. CC lasts an eternity.' }
    },
    buildReasoning: { es: 'Trinity Force para ambas formas — Spellblade en mini con Q spam y en Mega con combos. Black Cleaver como alternativa si hay muchos tanques. Frozen Mallet... ya no existe pero Randuin\'s o Sterak\'s para Mega.', en: 'Trinity Force for both forms — Spellblade in mini with Q spam and in Mega with combos. Black Cleaver as alternative vs heavy tanks. Randuin\'s or Sterak\'s for Mega tankiness.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: poke principal en mini y daño en mega. W segundo: más % HP damage y menor CD del stun en mega. E último: el salto es útil con un punto.', en: 'Q first: main poke in mini and damage in mega. W second: more % HP damage and lower mega stun CD. E last: jump is useful with one point.' }
  },
  Gragas: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: {
      es: 'Tanque AP versátil que puede jugar jungla, top o mid. Tu R desplaza a todo el equipo enemigo — podés separar carries de frontline. E dash con bodyslam para engage.',
      en: 'Versatile AP tank who can play jungle, top or mid. Your R displaces the entire enemy team — you can separate carries from frontline. E dash with bodyslam for engage.'
    },
    gameplan: {
      early: { es: 'Pokeá con Q (barril que fermenta — más daño cuanto más tiempo está). E bodyslam para trades cortos. Tu pasiva te cura cuando usás habilidades. Sustain fuerte en lane.', en: 'Poke with Q (barrel that ferments — more damage the longer it sits). E bodyslam for short trades. Your passive heals when you use abilities. Strong lane sustain.' },
      mid: { es: 'Buscá separar al equipo enemigo con R. Tirá R para empujar al carry hacia tu equipo, o para empujar amenazas lejos de tu carry. E → Flash es un engage rápido e inesperado.', en: 'Look to split the enemy team with R. Use R to push the carry into your team, or push threats away from your carry. E → Flash is a fast unexpected engage.' },
      late: { es: 'Tu R es game-changing — podés insec a un carry hacia tu equipo o pelar para tu ADC empujando divers lejos. E → Flash → R es un combo de pick insano. Full AP o tanque, ambos funcionan.', en: 'Your R is game-changing — you can insec a carry into your team or peel for ADC by pushing divers away. E → Flash → R is an insane pick combo. Full AP or tank, both work.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA → W → AA', es: 'E bodyslam → Q barril → Auto → W empowered auto → Auto. Trade sólido que sale rápido.', en: 'E bodyslam → Q barrel → Auto → W empowered auto → Auto. Solid trade that comes out fast.' },
      advanced: { keys: 'E → Flash → R(hacia tu equipo) → Q', es: 'E bodyslam → Flash para extender rango → R para empujar al target hacia tu equipo → Q en la zona. El carry enemigo aparece en medio de tu equipo.', en: 'E bodyslam → Flash to extend range → R to push target into your team → Q on the zone. Enemy carry appears in the middle of your team.' }
    },
    buildReasoning: { es: 'AP: Hextech Rocketbelt para engage extra. Tanque: Iceborn Gauntlet para slow field y tanqueo. Zhonya\'s en ambos builds porque después de E+Flash estás en el medio del enemigo.', en: 'AP: Hextech Rocketbelt for extra engage. Tank: Iceborn Gauntlet for slow field and tankiness. Zhonya\'s in both builds because after E+Flash you\'re in the middle of the enemy.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño y waveclear principal. E segundo: menor CD de bodyslam. W último: el empowered auto y daño reduction escalan poco.', en: 'Q first: main damage and waveclear. E second: lower bodyslam CD. W last: empowered auto and damage reduction scale poorly.' }
  },
  Graves: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler AD que farmea rápido y pelea con ventaja de items. Tratalo como un ADC de jungla.',
      en: 'AD jungler who farms fast and fights with item advantage. Treat him like a jungle ADC.'
    },
    gameplan: {
      early: {
        es: 'Full clear lo más rápido posible. No fuerces ganks — tu clear speed es tu ventaja. Tomá scuttle y seguí farmeando. Solo gankeá si la oportunidad es gratis.',
        en: 'Full clear as fast as possible. Don\'t force ganks — your clear speed is your advantage. Take scuttle and keep farming. Only gank if the opportunity is free.'
      },
      mid: {
        es: 'Con 2 items sos una bestia. Buscá peleas donde tengas ventaja de items. Hacé dragones y heralds. Invadí la jungla enemiga si estás ahead.',
        en: 'With 2 items you\'re a beast. Look for fights where you have item advantage. Take dragons and heralds. Invade enemy jungle if you\'re ahead.'
      },
      late: {
        es: 'Jugá como un ADC — posicionate atrás, pegá lo que esté más cerca. Tu E te da stacks de armadura así que podés ser más agresivo que un ADC normal. No seas el que engagea.',
        en: 'Play like an ADC — position in the back, hit whatever is closest. Your E gives armor stacks so you can be more aggressive than a normal ADC. Don\'t be the one who engages.'
      }
    },
    combo: {
      basic: {
        keys: 'AA → Q → AA → E → AA',
        es: 'Auto para cargar pasiva → Q para el burst → Auto → E para reposicionar y recargar → Auto. El E resetea tu auto.',
        en: 'Auto to stack passive → Q for burst → Auto → E to reposition and reload → Auto. E resets your auto.'
      },
      advanced: {
        keys: 'E → AA → Q → R → AA',
        es: 'E hacia adelante para stackear armadura → Auto → Q de cerca (ambas partes pegan) → R para knockback + daño → Auto final.',
        en: 'E forward to stack armor → Auto → Q up close (both parts hit) → R for knockback + damage → Final auto.'
      }
    },
    buildReasoning: {
      es: 'Eclipse le da burst, omnivamp y shield. Fleet Footwork para sustain. Collector da lethality + ejecución para one-shotear. Después Lord Dominik\'s vs tanques o Infinity Edge para crit.',
      en: 'Eclipse gives burst, omnivamp and shield. Fleet Footwork for sustain. Collector gives lethality + execution for one-shots. Then Lord Dominik\'s vs tanks or Infinity Edge for crit.'
    },
    skillOrder: {
      order: 'Q > E > W',
      es: 'Q primero: es tu mayor fuente de daño y clear. E segundo: reduce el CD del dash y da más armadura. W último: el slow y ceguera escalan poco.',
      en: 'Q first: it\'s your main damage and clear. E second: reduces dash CD and gives more armor. W last: the slow and blind scale poorly.'
    }
  },
  Gwen: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'AP bruiser de top con tijeras que hacen daño % vida. Tu W (Hallowed Mist) te hace inmune a ataques de fuera de la zona. Sos una duelista que escala como loca.',
      en: 'Top AP bruiser with scissors that deal % health damage. Your W (Hallowed Mist) makes you immune to attacks from outside the zone. You\'re a duelist who scales insanely.'
    },
    gameplan: {
      early: { es: 'Tradeá con Q (corte de tijera — más daño en el centro). Farmeá stacks de pasiva con autos y después Q para tradear. W te protege de poke ranged. Nivel 6 con R tenés 3 casts de daño extra.', en: 'Trade with Q (scissor cut — more damage in center). Farm passive stacks with autos then Q to trade. W protects from ranged poke. Level 6 with R you have 3 extra damage casts.' },
      mid: { es: 'Con Riftmaker + Nashor\'s sos una bestia en 1v1. Splitpusheá y nadie te puede matar dentro de tu W. Tu daño % vida destruye tanques. Buscá sidelane y forzá presión.', en: 'With Riftmaker + Nashor\'s you\'re a 1v1 beast. Splitpush and nobody can kill you inside your W. Your % health damage destroys tanks. Look for sidelane and force pressure.' },
      late: { es: 'En teamfights usá W para que no te puedan pegar desde lejos. Tu Q con stacks hace daño absurdo en el centro. R tiene 3 casts para DPS extra. Sos una amenaza constante en peleas largas.', en: 'In teamfights use W so they can\'t hit you from range. Your Q with stacks deals absurd damage in center. R has 3 casts for extra DPS. You\'re a constant threat in long fights.' }
    },
    combo: {
      basic: { keys: 'AA → AA → AA → AA → Q', es: '4 autos para stacks de pasiva → Q con stacks llenos para daño máximo (el centro del corte hace bonus).', en: '4 autos for passive stacks → Q with full stacks for max damage (center of the cut deals bonus).' },
      advanced: { keys: 'R1 → AA → Q → W → R2 → AA → Q → R3', es: 'R1 para daño + slow → Autos + Q → W para protección → R2 → Más autos + Q → R3 final. Los 3 casts de R espaciados maximizan DPS.', en: 'R1 for damage + slow → Autos + Q → W for protection → R2 → More autos + Q → R3 final. 3 spaced R casts maximize DPS.' }
    },
    buildReasoning: { es: 'Riftmaker para omnivamp + daño que escala en peleas largas. Nashor\'s Tooth para on-hit AP (synergiza con tus autos constantes). Rabadon\'s para multiplicar tu daño % vida.', en: 'Riftmaker for omnivamp + damage that scales in long fights. Nashor\'s Tooth for AP on-hit (synergizes with constant autos). Rabadon\'s to multiply your % health damage.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño principal. E segundo: más AS y menor CD del dash. W último: la inmunidad es buena con un punto, el tamaño no sube mucho.', en: 'Q first: main damage. E second: more AS and lower dash CD. W last: immunity is good with one point, size doesn\'t increase much.' }
  },
  Hecarim: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler bruiser con velocidad y engage devastador. Tu R te hace fantasma — atravesás al equipo enemigo causando fear. Cuanto más rápido te movés, más daño hacés (pasiva).',
      en: 'Bruiser jungler with speed and devastating engage. Your R makes you ghostly — you pass through the enemy team causing fear. The faster you move, the more damage you deal (passive).'
    },
    gameplan: {
      early: { es: 'Full clear rápido — Q spam hace el clear eficiente. Tus ganks son fuertes con E (carga que acelera y knockback). Usá E desde lejos para maximizar la velocidad y el daño.', en: 'Fast full clear — Q spam makes clear efficient. Your ganks are strong with E (charge that accelerates and knocks back). Use E from far to maximize speed and damage.' },
      mid: { es: 'Con Trinity/Sunderer empezás a ser un monstruo. E carga desde lejos + Q spam + W curación = sos difícil de matar y pegás mucho. R para iniciar teamfights en dragón.', en: 'With Trinity/Sunderer you start being a monster. E charge from far + Q spam + W heal = hard to kill and deal lots of damage. R to initiate teamfights at dragon.' },
      late: { es: 'R hacia el backline causa fear en todo el equipo. Después Q spam + E + W para mantenerte vivo. Tu velocidad es tan alta que llegás al carry antes de que reaccione.', en: 'R into backline causes fear on the whole team. Then Q spam + E + W to stay alive. Your speed is so high you reach the carry before they react.' }
    },
    combo: {
      basic: { keys: 'E → AA → Q → Q', es: 'E carga desde lejos → Auto knockback → Q spam repetido. Q tiene CD muy bajo y stackea daño.', en: 'E charge from far → Auto knockback → repeated Q spam. Q has very low CD and stacks damage.' },
      advanced: { keys: 'R → E → AA → Q → W → Q → Q', es: 'R para fear masivo → E knockback al carry → Q spam → W para curar durante la pelea → más Q. Todo mientras te movés a mil por hora.', en: 'R for massive fear → E knockback the carry → Q spam → W to heal during fight → more Q. All while moving at a thousand miles per hour.' }
    },
    buildReasoning: { es: 'Trinity Force prockea con tu Q de bajo CD — Spellblade en cada Q. Spear of Shojin para más haste y peleas extendidas. Death\'s Dance + Spirit Visage para sustain combo.', en: 'Trinity Force procs with your low CD Q — Spellblade on every Q. Spear of Shojin for more haste and extended fights. Death\'s Dance + Spirit Visage for sustain combo.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero siempre: es tu DPS constante con CD bajísimo. W segundo: más curación en peleas. E último: la carga es buena con un punto, solo sube daño.', en: 'Q first always: constant DPS with very low CD. W second: more fight healing. E last: charge is good with one point, only damage increases.' }
  },
  Heimerdinger: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: {
      es: 'Mago de zona que pone torretas que pelean por vos. Si el enemigo pelea cerca de tus 3 torretas, pierde. Controlás la lane entera con tu setup de torretas.',
      en: 'Zone mage who places turrets that fight for you. If the enemy fights near your 3 turrets, they lose. You control the entire lane with your turret setup.'
    },
    gameplan: {
      early: { es: 'Poné 3 torretas en lane y el enemigo no puede acercarse. Si te diveán, ponés torreta mejorada (R+Q) y los matás bajo torre. W para poke a distancia. Sos un bully de lane insoportable.', en: 'Place 3 turrets in lane and the enemy can\'t approach. If they dive you, place upgraded turret (R+Q) and kill them under tower. W for ranged poke. You\'re an unbearable lane bully.' },
      mid: { es: 'Pusheá constantemente con torretas. En objetivos, pre-poné torretas para zone control. R+Q torreta gigante hace daño absurdo. R+W misiles hacen mucho daño de burst.', en: 'Push constantly with turrets. At objectives, pre-place turrets for zone control. R+Q giant turret deals absurd damage. R+W missiles deal lots of burst damage.' },
      late: { es: 'Tu zona de torretas en un chokepoint es imbatible. R+Q torreta gigante en barón/dragón obliga al enemigo a elegir: pelearte o ceder el objetivo. Sos un siege machine.', en: 'Your turret zone in a chokepoint is unbeatable. R+Q giant turret at baron/dragon forces the enemy to choose: fight you or give up the objective. You\'re a siege machine.' }
    },
    combo: {
      basic: { keys: 'Q → Q → Q → W → E', es: 'Poné 3 torretas → W misiles → E stun. Las torretas atacan lo que vos pegás y hacen mucho más daño de lo que la gente piensa.', en: 'Place 3 turrets → W missiles → E stun. Turrets attack what you hit and deal much more damage than people think.' },
      advanced: { keys: 'E → R+Q → W', es: 'E stun → R+Q torreta gigante (aparece inmediatamente y hace beam de daño) → W para burst. La R+Q torreta sola hace más daño que muchas ultis.', en: 'E stun → R+Q giant turret (appears immediately and fires damage beam) → W for burst. R+Q turret alone deals more damage than many ults.' }
    },
    buildReasoning: { es: 'Liandry\'s porque tus torretas aplican quemadura constantemente. Rylai\'s para que las torretas sloween (permanente slow desde 3 torretas). Zhonya\'s para sobrevivir dives.', en: 'Liandry\'s because turrets constantly apply burn. Rylai\'s so turrets slow (permanent slow from 3 turrets). Zhonya\'s to survive dives.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: torretas más fuertes y más resistentes. W segundo: más burst de misiles. E último: el stun es útil con un punto.', en: 'Q first: stronger and more resilient turrets. W second: more missile burst. E last: stun is useful with one point.' }
  },
  Hwei: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'Mago artista con 10 habilidades (3 categorías × 3 + R). QQ es poke, QW es AoE, QE es línea. Extremadamente versátil con daño, CC y utilidad. Tu R es un campo que explota.',
      en: 'Artist mage with 10 abilities (3 categories × 3 + R). QQ is poke, QW is AoE, QE is line. Extremely versatile with damage, CC and utility. Your R is a field that explodes.'
    },
    gameplan: {
      early: { es: 'Pokeá con QQ (bola de fuego a distancia) — es tu poke principal y sale rápido. QE para waveclear (línea de daño). EW para shield si necesitás tradear. Farmeá seguro y escalá.', en: 'Poke with QQ (ranged fireball) — it\'s your main poke and comes out fast. QE for waveclear (damage line). EW for shield if you need to trade. Farm safe and scale.' },
      mid: { es: 'Tu kit es super versátil. QQ para poke, WQ para speed de equipo, EQ para CC (fear), QW para AoE burst. Usá la herramienta correcta para cada situación. R para zone control en objetivos.', en: 'Your kit is super versatile. QQ for poke, WQ for team speed, EQ for CC (fear), QW for AoE burst. Use the right tool for each situation. R for zone control at objectives.' },
      late: { es: 'Pokeás con QQ antes de la pelea, controlás zonas con R, proteges aliados con EW shield. En la pelea usá QW para AoE burst y EQ para fear. Tenés respuesta para todo.', en: 'Poke with QQ before the fight, control zones with R, protect allies with EW shield. In fight use QW for AoE burst and EQ for fear. You have an answer for everything.' }
    },
    combo: {
      basic: { keys: 'QQ → EQ', es: 'QQ bola de fuego para poke → EQ fear si se acercan. QQ es lo que más vas a usar — bajo CD y buen daño.', en: 'QQ fireball for poke → EQ fear if they approach. QQ is what you\'ll use most — low CD and good damage.' },
      advanced: { keys: 'EQ → R → QW → QQ', es: 'EQ fear → R campo encima (no pueden salir por el fear) → QW AoE burst → QQ para rematar. El combo completo es devastador.', en: 'EQ fear → R field on top (can\'t escape due to fear) → QW AoE burst → QQ to finish. Full combo is devastating.' }
    },
    buildReasoning: { es: 'Luden\'s para burst extra y magic pen — amplifica tu poke de QQ. Shadowflame para más pen. Rabadon\'s porque escalás muy bien con AP puro.', en: 'Luden\'s for extra burst and magic pen — amplifies QQ poke. Shadowflame for more pen. Rabadon\'s because you scale very well with pure AP.' },
    skillOrder: { order: 'QQ > QE > EQ (put points in Q spell group first)', es: 'Priorizá el grupo Q (daño) subiendo QQ. Después QE para waveclear. El grupo E (CC) con un punto alcanza.', en: 'Prioritize Q group (damage) by leveling QQ. Then QE for waveclear. E group (CC) is fine with one point.' }
  },
  Illaoi: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de top que QUIERE que la gankeen. Tu R invoca tentáculos por cada enemigo cerca — contra 2-3 hacés 1v3. Si te sacan el alma con E, los tentáculos pegan al espíritu.',
      en: 'Top bruiser who WANTS to be ganked. Your R spawns tentacles per nearby enemy — against 2-3 you can 1v3. If they pull your soul with E, tentacles hit the spirit.'
    },
    gameplan: {
      early: { es: 'Poné tentáculos con pasiva en las paredes. E saca el alma del enemigo — pegale al alma y también daña al campeón. Q para curar cuando pega campeones o el alma.', en: 'Place tentacles with passive on walls. E pulls enemy soul — hit the soul and it also damages the champion. Q to heal when hitting champions or the soul.' },
      mid: { es: 'Si te gankean 2v1: R para invocar tentáculos extra (uno por cada enemigo), W para que todos peguen. Contra 2+ enemigos tu R es la habilidad más fuerte del juego en 1vX.', en: 'If they gank you 2v1: R to spawn extra tentacles (one per enemy), W to make them all slam. Against 2+ enemies your R is the strongest 1vX ability in the game.' },
      late: { es: 'Splitpusheá y forzá que manden 2+. Si mandás uno solo, lo matás con E + tentáculos. Si mandan 2+, R y probablemente los matás a ambos. En teamfights, R en el centro del grupo.', en: 'Splitpush and force them to send 2+. If they send one, you kill them with E + tentacles. If they send 2+, R and you probably kill both. In teamfights, R in center of group.' }
    },
    combo: {
      basic: { keys: 'E → W → Q', es: 'E saca el alma → W salta y hace que tentáculos peguen → Q para curar y hacer daño. Los tentáculos pegan tanto al alma como al campeón.', en: 'E pulls soul → W jumps and makes tentacles slam → Q to heal and damage. Tentacles hit both soul and champion.' },
      advanced: { keys: 'E → R → W → Q → W', es: 'E alma → R para invocar tentáculos extra → W para que todos peguen → Q → W de nuevo (corto CD con R activa). El daño es nuclear contra múltiples targets.', en: 'E soul → R to spawn extra tentacles → W to slam all → Q → W again (short CD with R active). Damage is nuclear against multiple targets.' }
    },
    buildReasoning: { es: 'Sunderer para sustain y daño % vida que complementa tus tentáculos. Black Cleaver stackea con múltiples tentáculos pegando. Sterak\'s para no morir cuando vas all-in con R.', en: 'Sunderer for sustain and % health damage that complements tentacles. Black Cleaver stacks with multiple tentacles hitting. Sterak\'s to not die when going all-in with R.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: curación y daño principal. E segundo: más daño al alma y menor CD. W último: el dash corto solo necesita un punto.', en: 'Q first: main healing and damage. E second: more soul damage and lower CD. W last: short dash only needs one point.' }
  },
  Irelia: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Bruiser de top/mid con dashes infinitos cuando matás con Q. Stackeás pasiva a 4 para autos super potenciados. Irrompible en 1v1 si jugás bien el reset de Q.',
      en: 'Top/mid bruiser with infinite dashes when killing with Q. Stack passive to 4 for super empowered autos. Unbeatable in 1v1 if you play Q resets well.'
    },
    gameplan: {
      early: { es: 'Stackeá pasiva a 4 matando minions con Q (reseta si mata). Con 4 stacks tu auto hace mucho más daño + AS. E marca enemigos — Q a marcados también reseta. Nivel 1-2 con 4 stacks es imbatible.', en: 'Stack passive to 4 by killing minions with Q (resets on kill). With 4 stacks your auto deals much more damage + AS. E marks enemies — Q to marked also resets. Levels 1-2 with 4 stacks is unbeatable.' },
      mid: { es: 'Con BOTRK tu sustain y duelo es insano. Buscá peleas donde puedas stackear pasiva en minions antes de ir al campeón. E+R para marcar → Q resets para matar.', en: 'With BOTRK your sustain and dueling is insane. Look for fights where you can stack passive on minions before going to champion. E+R to mark → Q resets to kill.' },
      late: { es: 'En teamfights buscá R para marcar a varios → Q entre targets marcados para reset infinito. Si matás a un squishy, Q reseta y vas al siguiente. La cadena de Q es tu arma.', en: 'In teamfights look to R to mark multiple → Q between marked targets for infinite resets. If you kill a squishy, Q resets and you go to the next. Q chain is your weapon.' }
    },
    combo: {
      basic: { keys: 'E1 → E2 → Q(marcado) → AA → AA', es: 'E1 detrás del enemigo → E2 para stun → Q al marcado (reset) → Autos con pasiva completa. Daño tremendo.', en: 'E1 behind enemy → E2 for stun → Q to marked (reset) → Autos with full passive. Tremendous damage.' },
      advanced: { keys: 'R → Q(marcado) → AA → E1 → E2 → Q(marcado) → AA → Q(minion bajo)', es: 'R marca → Q reset → Autos → E stun → Q reset → Autos → Q a minion para reposicionarte. Usás los resets en todo.', en: 'R marks → Q reset → Autos → E stun → Q reset → Autos → Q to minion to reposition. Use resets on everything.' }
    },
    buildReasoning: { es: 'BOTRK es core #1 — on-hit + lifesteal + slow activo con tus autos rápidos de pasiva es perfecto. Trinity o Sunderer segundo. Wit\'s End vs AP, Death\'s Dance vs AD.', en: 'BOTRK is core #1 — on-hit + lifesteal + active slow with your fast passive autos is perfect. Trinity or Sunderer second. Wit\'s End vs AP, Death\'s Dance vs AD.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño del dash, más curación on-hit. E segundo: menor CD del stun. W último: la reducción de daño es útil con un punto.', en: 'Q first: dash damage, more on-hit healing. E second: lower stun CD. W last: damage reduction is useful with one point.' }
  },
  Ivern: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler support que no pelea campamentos — los libera. Hacés buffs y los compartís con aliados. Daisy (R) es tu pet tanque. Sos el jungler más unique del juego.',
      en: 'Support jungler who doesn\'t fight camps — you free them. Make buffs and share with allies. Daisy (R) is your tank pet. You\'re the most unique jungler in the game.'
    },
    gameplan: {
      early: { es: 'Tu clear es distinto — marcás campamentos y los liberás después. No necesitás pelear monstruos. Buscá ganks con Q (root) + shield (E) para tu laner. Compartí buffs rojos/azules.', en: 'Your clear is different — mark camps and free them later. Don\'t need to fight monsters. Look for ganks with Q (root) + shield (E) for your laner. Share red/blue buffs.' },
      mid: { es: 'Sos un support desde la jungla. Shieldeá a tu carry con E (da slow en autos), Q para root, Daisy para engage o peel. Priorizá proteger a tu win condition.', en: 'You\'re a support from the jungle. Shield your carry with E (gives slow on autos), Q for root, Daisy for engage or peel. Prioritize protecting your win condition.' },
      late: { es: 'En teamfights, E shield constante en tu carry, Q para root amenazas, Daisy pegando al frontline (3 autos = knockup). Sos el mejor peeler de jungla del juego.', en: 'In teamfights, constant E shield on your carry, Q to root threats, Daisy hitting frontline (3 autos = knockup). You\'re the best jungle peeler in the game.' }
    },
    combo: {
      basic: { keys: 'Q → E(aliado) → R(Daisy)', es: 'Q root al enemigo → E shield al aliado que va a followear (el slow de E ayuda) → R Daisy para que pegue y knockee con 3 autos.', en: 'Q root enemy → E shield ally who will follow up (E slow helps) → R Daisy to hit and knock up with 3 autos.' },
      advanced: { keys: 'Q → aliado dash al Q → E(aliado) → R', es: 'Q root → Tu aliado puede deshear al target rooteado clicando Q → E para darle shield con slow → R Daisy encima. El dash al Q es la mecánica clave de Ivern.', en: 'Q root → Ally can dash to rooted target by clicking Q → E for shield with slow → R Daisy on top. Dash to Q is Ivern\'s key mechanic.' }
    },
    buildReasoning: { es: 'Locket para protección AoE del equipo. Staff of Flowing Water o Ardent Censer para amplificar a tu carry cuando lo shieldeás. Redemption para más curación de equipo.', en: 'Locket for AoE team protection. Staff of Flowing Water or Ardent Censer to amplify your carry when shielding. Redemption for more team healing.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: shield más grande con slow para tu carry. Q segundo: menor CD del root. W último: el bush es situacional.', en: 'E first: bigger shield with slow for your carry. Q second: lower root CD. W last: bush is situational.' }
  },
  Janna: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: {
      es: 'Support enchantera con el mejor peel del juego. Tu R empuja a todos lejos y cura AoE. Tornados (Q) interrumpen dashes y engages. Nadie toca a tu carry si jugás bien.',
      en: 'Enchanter support with the best peel in the game. Your R pushes everyone away and AoE heals. Tornados (Q) interrupt dashes and engages. Nobody touches your carry if you play well.'
    },
    gameplan: {
      early: { es: 'Pokeá con W y autos (tu pasiva da MS extra y daño de auto). Usá Q reactivamente para interrumpir engages enemigos, no proactivamente. E shield en tu ADC cuando tradea.', en: 'Poke with W and autos (passive gives extra MS and auto damage). Use Q reactively to interrupt enemy engages, not proactively. E shield your ADC when trading.' },
      mid: { es: 'Pegáte a tu carry y protegelo. E shield + R para pelar. Q para interrumpir cualquier dash o engage (Leona E, Thresh Q, etc). Roameá con tu MS alta si tu ADC está seguro.', en: 'Stick to your carry and protect them. E shield + R to peel. Q to interrupt any dash or engage (Leona E, Thresh Q, etc). Roam with high MS if your ADC is safe.' },
      late: { es: 'Tu R en teamfights es clave — empuja divers lejos de tu carry y cura al equipo. Q interrumpe channels (TP, Kata R, etc). E shield + Ardent en tu ADC los hace una bestia.', en: 'Your R in teamfights is key — pushes divers away from carry and heals team. Q interrupts channels (TP, Kata R, etc). E shield + Ardent on your ADC makes them a beast.' }
    },
    combo: {
      basic: { keys: 'E(ADC) → W → AA', es: 'E shield al ADC cuando tradea → W al enemigo para slow → Auto para daño extra. Simple y safe.', en: 'E shield ADC when trading → W enemy for slow → Auto for extra damage. Simple and safe.' },
      advanced: { keys: 'Q(predicción) → R(instantáneo) → E(carry)', es: 'Q predictivo en la dirección del engage enemigo → R instantáneo si se acercan mucho → E shield al carry. El Q con carga completa tiene knockup enorme.', en: 'Predictive Q in the direction of enemy engage → instant R if they get too close → E shield carry. Fully charged Q has enormous knockup.' }
    },
    buildReasoning: { es: 'Moonstone para curación constante al equipo. Ardent Censer hace que tu E shield le dé AS y on-hit al carry. Staff of Flowing Water para AP. Redemption para curación AoE extra.', en: 'Moonstone for constant team healing. Ardent Censer makes E shield give AS and on-hit to carry. Staff of Flowing Water for AP. Redemption for extra AoE healing.' },
    skillOrder: { order: 'E > W > Q', es: 'E primero: shield más grande para tu carry. W segundo: más poke y slow. Q último: el tornado interrumpe sin importar el nivel.', en: 'E first: bigger shield for carry. W second: more poke and slow. Q last: tornado interrupts regardless of level.' }
  },
  JarvanIV: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: {
      es: 'Jungler bruiser con el mejor engage early del juego. E+Q combo es un dash-knockup garantizado. R crea un arena que atrapa a todos — nadie escapa sin Flash o dash.',
      en: 'Bruiser jungler with the best early engage in the game. E+Q combo is a guaranteed dash-knockup. R creates an arena that traps everyone — nobody escapes without Flash or dash.'
    },
    gameplan: {
      early: { es: 'Gankeá nivel 2 con E+Q — el knockup es casi imposible de esquivar. Tu pasiva hace daño extra en el primer auto a cada campeón. Nivel 3-4 tus ganks son de las mejores del juego.', en: 'Gank level 2 with E+Q — the knockup is nearly impossible to dodge. Your passive deals extra damage on first auto to each champion. Level 3-4 your ganks are among the best in the game.' },
      mid: { es: 'E+Q para engage en peleas → R para encerrar al carry en la arena. Si el ADC no tiene Flash, R es una sentencia de muerte. Buscá picks y peleas en objetivos.', en: 'E+Q to engage in fights → R to trap carry in arena. If ADC has no Flash, R is a death sentence. Look for picks and objective fights.' },
      late: { es: 'Flash → E+Q → R sobre el carry enemigo. El carry queda encerrado con vos y tu equipo followea desde afuera. Cuidado de no encerrar aliados afuera del R.', en: 'Flash → E+Q → R on enemy carry. Carry is trapped with you and your team follows from outside. Be careful not to trap allies outside of R.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA', es: 'E flag → Q dash al flag (knockup en el camino) → Auto con pasiva. Simple y garantizado.', en: 'E flag → Q dash to flag (knockup on the way) → Auto with passive. Simple and guaranteed.' },
      advanced: { keys: 'E → Q → R → AA → W', es: 'E+Q knockup → R arena inmediata → Auto pasiva → W shield para sobrevivir. El target está encerrado con vos.', en: 'E+Q knockup → immediate R arena → Passive auto → W shield to survive. Target is trapped with you.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain. Black Cleaver stackea rápido con tu combo. Sterak\'s para sobrevivir dentro de tu propio R. Death\'s Dance si estás ahead.', en: 'Eclipse for burst and sustain. Black Cleaver stacks fast with your combo. Sterak\'s to survive inside your own R. Death\'s Dance if ahead.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: más daño del dash y menor CD. E segundo: más AS del flag para el equipo. W último: shield escala con vida, no con niveles.', en: 'Q first: more dash damage and lower CD. E second: more AS from flag for team. W last: shield scales with health, not levels.' }
  },
  Jax: {
    playstyle: { es: 'Splitpush', en: 'Splitpush' },
    powerSpike: 'late',
    identity: {
      es: 'El duelist scaling definitivo. En late game nadie te gana 1v1. E esquiva TODOS los autos, Q salta, W auto reset. Tu R te da resistencias pasivas. El rey del splitpush.',
      en: 'The definitive scaling duelist. Late game nobody beats you 1v1. E dodges ALL autos, Q leaps, W auto reset. Your R gives passive resistances. The splitpush king.'
    },
    gameplan: {
      early: { es: 'Nivel 1 es fuerte con E (Counter Strike — esquivás autos y stuneás). Tradeá con E activado → stun → W auto → Q para salir. Contra rangos es difícil — farmeá y esperá 6.', en: 'Level 1 is strong with E (Counter Strike — dodge autos and stun). Trade with E active → stun → W auto → Q out. Against ranged it\'s hard — farm and wait for 6.' },
      mid: { es: 'Con Trinity + BOTRK sos un monstruo de duelo. Splitpusheá y forzá 1v1 — ganás contra casi todos. Q para saltar paredes si te gankean. E inutiliza a cualquier ADC o auto-attacker.', en: 'With Trinity + BOTRK you\'re a dueling monster. Splitpush and force 1v1s — you beat almost everyone. Q to jump walls if ganked. E renders any ADC or auto-attacker useless.' },
      late: { es: 'Literalmente el campeón más fuerte del late game en 1v1. Split y forzá que manden 2+. En teamfight, Q al carry y E para esquivar sus autos. R te da armadura y MR masivos.', en: 'Literally the strongest late game 1v1 champion. Split and force them to send 2+. In teamfight, Q to carry and E to dodge their autos. R gives massive armor and MR.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA → W → E(stun)', es: 'E activar → Q saltar al enemigo → Auto → W auto reset → E soltar para stun. El stun pega siempre porque Q te deja encima.', en: 'E activate → Q leap to enemy → Auto → W auto reset → E release for stun. Stun always lands because Q puts you on top.' },
      advanced: { keys: 'Q → AA → W → E → AA → AA → E(stun) → AA → R', es: 'Q engage → Auto → W reset → E dodge → Autos mientras esquivás → E stun → Autos → R si necesitás las resistencias. DPS máximo.', en: 'Q engage → Auto → W reset → E dodge → Autos while dodging → E stun → Autos → R if you need resistances. Maximum DPS.' }
    },
    buildReasoning: { es: 'Trinity Force prockea con tu W auto reset cada 3 segundos — Spellblade constante. BOTRK para on-hit con tu AS alta. Sterak\'s para shield en peleas. Death\'s Dance para sustain.', en: 'Trinity Force procs with your W auto reset every 3 seconds — constant Spellblade. BOTRK for on-hit with high AS. Sterak\'s for shield in fights. Death\'s Dance for sustain.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero en top (CD del salto baja mucho). E segundo: menor CD del dodge/stun. W último: el auto reset es útil con un punto.', en: 'Q first in top (leap CD drops a lot). E second: lower dodge/stun CD. W last: auto reset is useful with one point.' }
  },
  Jayce: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'early',
    identity: {
      es: 'Top/mid con dos formas: cañón (rango) y martillo (melee). Pokeás desde lejos y all-ineás de cerca. Fuerte temprano pero cae un poco en late game comparado con otros.',
      en: 'Top/mid with two forms: cannon (ranged) and hammer (melee). Poke from afar and all-in up close. Strong early but falls off a bit late game compared to others.'
    },
    gameplan: {
      early: { es: 'Domina la lane. En forma cañón: Q a través de E (gate) para poke de largo alcance que hace daño obsceno. Nivel 1 con martillo Q o cañón autos, abusá tu rango.', en: 'Dominate lane. In cannon form: Q through E (gate) for long range poke that deals obscene damage. Level 1 with hammer Q or cannon autos, abuse your range.' },
      mid: { es: 'Pokeá con E+Q cañón antes de peleas. Si aterrizás 2-3, el enemigo no puede pelear. En all-in: cañón W (AS boost) → R martillo → Q salto → W thundering blow → E knock away.', en: 'Poke with cannon E+Q before fights. If you land 2-3, enemy can\'t fight. In all-in: cannon W (AS boost) → R hammer → Q leap → W thundering blow → E knock away.' },
      late: { es: 'Tu poke sigue siendo fuerte pero tu daño cae vs tanques. Buscá pillar gente con E+Q poke. En teamfights mantené forma cañón y pokeá — solo cambies a martillo si alguien se te acerca.', en: 'Your poke is still strong but damage falls vs tanks. Look to catch people with E+Q poke. In teamfights stay cannon and poke — only switch to hammer if someone gets close.' }
    },
    combo: {
      basic: { keys: 'E(gate) → Q(cañón)', es: 'E gate → Q a través del gate para poke de largo alcance acelerado. El daño escalado de Q + gate es enorme.', en: 'E gate → Q through gate for accelerated long range poke. Scaled Q + gate damage is enormous.' },
      advanced: { keys: 'W(cañón) → E(gate) → Q(cañón) → R(martillo) → Q → AA → AA → AA → E(martillo)', es: 'W para AS → E+Q poke → R cambio a martillo → Q salto → 3 autos rápidos (W buff se mantiene) → E knockback. Combo all-in completo.', en: 'W for AS → E+Q poke → R switch to hammer → Q leap → 3 fast autos (W buff carries over) → E knockback. Full all-in combo.' }
    },
    buildReasoning: { es: 'Muramana para resolver maná y escalar (aplicás on-hit con cada habilidad). Eclipse para burst y sustain. Youmuu\'s para lethality y movilidad.', en: 'Muramana to solve mana and scale (apply on-hit with every ability). Eclipse for burst and sustain. Youmuu\'s for lethality and mobility.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño principal en ambas formas. W segundo: AS boost en cañón es crucial. E último: el gate y knockback no necesitan niveles.', en: 'Q first: main damage in both forms. W second: cannon AS boost is crucial. E last: gate and knockback don\'t need levels.' }
  },
  Jhin: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC artista con 4 balas. La cuarta bala siempre crit y hace daño masivo. No tenés attack speed tradicional — tu AD escala con crit y AS. Cada auto es un evento.',
      en: 'Artist ADC with 4 bullets. Fourth bullet always crits and deals massive damage. No traditional attack speed — your AD scales with crit and AS. Every auto is an event.'
    },
    gameplan: {
      early: { es: 'Pokeá con Q (rebota en 4 targets — si mata los primeros, hace más daño al siguiente). Cuarta bala para tradear siempre. W es un snare de largo alcance si el target fue dañado.', en: 'Poke with Q (bounces on 4 targets — if it kills first ones, more damage to next). Fourth bullet for trading always. W is a long range snare if target was damaged.' },
      mid: { es: 'Con 2 items tu cuarta bala hace 50% de la vida de un squishy. Usá W para snare a distancia (setup para el equipo). R es un sniper de 4 disparos — la cuarta bala de R hace daño ejecutivo.', en: 'With 2 items your fourth bullet does 50% of a squishy\'s health. Use W for long range snare (team setup). R is a 4-shot sniper — R\'s fourth bullet deals executive damage.' },
      late: { es: 'Tu AD es absurdo con 4 items de crit. Cada cuarta bala one-shotea. R para iniciar peleas o ejecutar desde lejos. Tu W+E (trampas) dan visión y slow para zone control.', en: 'Your AD is absurd with 4 crit items. Each fourth bullet one-shots. R to start fights or execute from range. Your W+E (traps) give vision and slow for zone control.' }
    },
    combo: {
      basic: { keys: 'AA(4ta bala) → Q → AA', es: 'Cuarta bala para crit masivo → Q bouncing → Empezá la siguiente ronda de 4 autos. Siempre tradeá con la cuarta bala.', en: 'Fourth bullet for massive crit → Q bouncing → Start next round of 4 autos. Always trade with fourth bullet.' },
      advanced: { keys: 'W → AA(4ta) → Q → AA → AA → AA → AA(4ta)', es: 'W snare → Cuarta bala crit → Q → Autos → Próxima cuarta bala. Si W aterrizó, tenés tiempo para un ciclo completo de 4 balas.', en: 'W snare → Fourth bullet crit → Q → Autos → Next fourth bullet. If W landed, you have time for a full 4-bullet cycle.' }
    },
    buildReasoning: { es: 'Infinity Edge rush — tu pasiva convierte crit y AS en AD puro, así que IE te da más AD que a cualquier otro campeón. Rapid Firecannon para rango extra en cuarta bala. Collector para ejecución.', en: 'Infinity Edge rush — your passive converts crit and AS into pure AD, so IE gives you more AD than any other champion. Rapid Firecannon for extra fourth bullet range. Collector for execution.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño bouncing para poke y farm. W segundo: menor CD del snare. E último: las trampas son utilidad, no daño.', en: 'Q first: bouncing damage for poke and farm. W second: lower snare CD. E last: traps are utility, not damage.' }
  },
  Jinx: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: {
      es: 'ADC hypercarry con resets. Tu pasiva te da MS masivo por cada kill/assist — y con tu forma rocket (Q) hacés daño AoE a distancia. Si sacás la primera kill, hacés penta.',
      en: 'Hypercarry ADC with resets. Your passive gives massive MS per kill/assist — and with rocket form (Q) you deal AoE damage at range. Get the first kill and you get a penta.'
    },
    gameplan: {
      early: { es: 'Nivel 1 usá minigun (Q toggle) para AS rápida. Pokeá con W (zap — largo alcance). E trampas si te engagean. Nivel 2-3 tu DPS de minigun es fuerte en trades largos.', en: 'Level 1 use minigun (Q toggle) for fast AS. Poke with W (zap — long range). E traps if they engage. Levels 2-3 your minigun DPS is strong in extended trades.' },
      mid: { es: 'Farmeá y escalá. Con IE + Runaan\'s tu rocket Q hace AoE crit. En teamfights, switcheá entre minigun (single target DPS) y rocket (AoE). Si sacás una kill, la pasiva te resetea para más.', en: 'Farm and scale. With IE + Runaan\'s your rocket Q does AoE crit. In teamfights, switch between minigun (single target DPS) and rocket (AoE). Get a kill and passive resets for more.' },
      late: { es: 'Sos una de las ADCs más fuertes del late. Rocket AoE crits con Runaan\'s destruye equipos enteros. Tu pasiva en teamfight te convierte en un monstruo después de la primera kill. R global para ejecutar.', en: 'You\'re one of the strongest late game ADCs. Rocket AoE crits with Runaan\'s destroys entire teams. Passive in teamfights turns you into a monster after first kill. Global R to execute.' }
    },
    combo: {
      basic: { keys: 'W → AA(rocket) → AA(rocket)', es: 'W para slow → Autos en rocket form para AoE y rango. Si el target está quieto por el slow, aprovechá.', en: 'W for slow → Autos in rocket form for AoE and range. If target is still from the slow, capitalize.' },
      advanced: { keys: 'E → W → Q(minigun) → AA → AA → AA → Q(rocket) → AA', es: 'E trampas para root → W slow → Minigun para DPS single target rápido → Switch a rocket para AoE si hay más enemigos cerca.', en: 'E traps for root → W slow → Minigun for fast single target DPS → Switch to rocket for AoE if more enemies nearby.' }
    },
    buildReasoning: { es: 'Infinity Edge core porque tu rocket Q crit con AoE es tu identidad. Runaan\'s para multiplicar el AoE de rockets. Rapid Firecannon para rango extra. Bloodthirster para sustain.', en: 'Infinity Edge core because rocket Q crit with AoE is your identity. Runaan\'s to multiply rocket AoE. Rapid Firecannon for extra range. Bloodthirster for sustain.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: más daño de rocket y más AS de minigun. W segundo: más poke y menor CD. E último: las trampas son utilidad.', en: 'Q first: more rocket damage and more minigun AS. W second: more poke and lower CD. E last: traps are utility.' }
  },
  KSante: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'Tanque de top que se transforma en bruiser con R. Normalmente sos un tanque CC, pero cuando activás R sacrificás resistencias por daño y movilidad. Dos campeones en uno.',
      en: 'Top tank who transforms into a bruiser with R. Normally you\'re a CC tank, but when you activate R you sacrifice resistances for damage and mobility. Two champions in one.'
    },
    gameplan: {
      early: { es: 'Tradeá con Q (3 casts — el tercero knockea). W cargar para stun + daño. Tu early no es el más fuerte pero podés tradear consistentemente con Q poke y W stun.', en: 'Trade with Q (3 casts — third knocks up). W charge for stun + damage. Your early isn\'t the strongest but you can consistently trade with Q poke and W stun.' },
      mid: { es: 'Con R podés insec al carry enemigo a través de una pared. R te da daño pero perdés tanqueo. Usalo selectivamente — R para matar al carry, después volvé a tanque cuando termina.', en: 'With R you can insec enemy carry through a wall. R gives damage but you lose tankiness. Use selectively — R to kill carry, then return to tank when it ends.' },
      late: { es: 'En teamfights, Q×3 para knockup → W stun → R al carry enemigo a través de la pared → matalo en modo bruiser. Sin R, sos un tanque sólido con buen CC.', en: 'In teamfights, Q×3 for knockup → W stun → R enemy carry through wall → kill them in bruiser mode. Without R, you\'re a solid tank with good CC.' }
    },
    combo: {
      basic: { keys: 'Q → Q → Q(knockup) → W', es: 'Q×3 para knockup → W charge stun. CC encadenado sólido.', en: 'Q×3 for knockup → W charge stun. Solid chained CC.' },
      advanced: { keys: 'Q → Q → Q(knockup) → W → R(a través de pared) → Q → Q → Q → AA', es: 'Q×3 knockup → W stun → R para empujar a través de pared (cambia a modo bruiser) → Nuevo set de Q×3 en modo daño → Autos. El carry muere aislado.', en: 'Q×3 knockup → W stun → R to push through wall (switch to bruiser mode) → New Q×3 set in damage mode → Autos. Carry dies isolated.' }
    },
    buildReasoning: { es: 'Iceborn Gauntlet para slow field y tanqueo — tu R convierte resistencias en daño así que más tanque = más daño con R. Sunfire para damage pasivo. Jak\'Sho para más resistencias.', en: 'Iceborn Gauntlet for slow field and tankiness — your R converts resistances to damage so more tank = more R damage. Sunfire for passive damage. Jak\'Sho for more resistances.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño y CD del knockup. W segundo: más stun damage y menor CD. E último: el dash es útil con un punto.', en: 'Q first: damage and knockup CD. W second: more stun damage and lower CD. E last: dash is useful with one point.' }
  },
  Kaisa: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC que evoluciona habilidades con stats de items. Q evoluciona con AD, W con AP, E con AS. Versátil — puede ser burst assassin o DPS. R te deja dashear a targets marcados con pasiva.',
      en: 'ADC who evolves abilities with item stats. Q evolves with AD, W with AP, E with AS. Versatile — can be burst assassin or DPS. R lets you dash to targets marked with passive.'
    },
    gameplan: {
      early: { es: 'Farmeá para la evolución de Q (necesitás AD suficiente). Q aislado (sin minions cerca del target) hace daño concentrado. Nivel 2 con Q+W pokeás bien. Tu pasiva stackea con autos+habilidades — a 5 stacks explota.', en: 'Farm for Q evolution (need enough AD). Isolated Q (no minions near target) deals focused damage. Level 2 with Q+W you poke well. Passive stacks with autos+abilities — at 5 stacks it explodes.' },
      mid: { es: 'Con Q evolucionado hacés burst insano en targets aislados. R te deja reposicionarte o perseguir targets con pasiva. E evolucionada te da stealth breve — ideal para reposicionarte en peleas.', en: 'With evolved Q you deal insane burst on isolated targets. R lets you reposition or chase targets with passive. Evolved E gives brief stealth — ideal for repositioning in fights.' },
      late: { es: 'Con 3 evoluciones sos una máquina. Q burst + E stealth + R reposition. Buscá targets aislados del grupo para Q maximizado. Tu pasiva explota con 5 stacks del equipo (aliados pueden stackear).', en: 'With 3 evolutions you\'re a machine. Q burst + E stealth + R reposition. Look for targets isolated from group for max Q. Passive explodes at 5 stacks from team (allies can stack).' }
    },
    combo: {
      basic: { keys: 'AA → AA → Q → AA → AA → AA(pasiva explode)', es: 'Autos para stackear pasiva → Q para burst + más stacks → Autos hasta que explote la pasiva (5 stacks de daño mágico).', en: 'Autos to stack passive → Q for burst + more stacks → Autos until passive explodes (5 stacks of magic damage).' },
      advanced: { keys: 'W → R(a target marcado) → AA → Q → E → AA → AA', es: 'W desde lejos para marcar → R dash al marcado → Auto → Q burst → E para stealth y reposición → Autos para terminar.', en: 'W from far to mark → R dash to marked → Auto → Q burst → E for stealth and reposition → Autos to finish.' }
    },
    buildReasoning: { es: 'Kraken Slayer para DPS build. Nashor\'s Tooth si vas AP/hybrid. Collector para evolución de Q temprana con burst. Phantom Dancer para E evolution y DPS.', en: 'Kraken Slayer for DPS build. Nashor\'s Tooth for AP/hybrid build. Collector for early Q evolution with burst. Phantom Dancer for E evolution and DPS.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu burst principal que necesitás evolucionar primero. E segundo: más AS para evolución. W último: poke es útil pero Q y E son prioridad.', en: 'Q first: main burst that needs to evolve first. E second: more AS for evolution. W last: poke is useful but Q and E are priority.' }
  },
  Kalista: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: {
      es: 'ADC de alta movilidad que salta con cada auto. Tu E saca las lanzas clavadas para daño ejecutivo. R lanzás a tu support como proyectil knockup. Necesitás un support bound.',
      en: 'High mobility ADC who hops with every auto. Your E pulls out spears for execution damage. R throws your support as a knockup projectile. Need a bound support.'
    },
    gameplan: {
      early: { es: 'Clavá lanzas con autos y E para ejecutar cuando tienen muchas lanzas. Tu salto de pasiva te deja kitear increíblemente. Con un support agresivo (Thresh, Nautilus) tu nivel 2 mata.', en: 'Stick spears with autos and E to execute when they have many spears. Your passive hop lets you kite incredibly. With an aggressive support (Thresh, Nautilus) your level 2 kills.' },
      mid: { es: 'E tiene un mechanic: si E mata algo, el CD se resetea. Usá esto para farmear + tradear — E un minion para reset → inmediatamente pegá al campeón → más lanzas → E. Objetivos: clavá lanzas en dragón para smite combo con E.', en: 'E has a mechanic: if E kills, CD resets. Use this to farm + trade — E a minion for reset → immediately hit champion → more spears → E. Objectives: stack spears on dragon for smite combo with E.' },
      late: { es: 'Tu kiting es el mejor del juego por el salto de pasiva. R para salvar a tu support o lanzarlo como engage. E con 20 lanzas clavadas hace daño absurdo. Nunca pares de saltar.', en: 'Your kiting is the best in the game from passive hop. R to save your support or throw them as engage. E with 20 stacked spears deals absurd damage. Never stop hopping.' }
    },
    combo: {
      basic: { keys: 'AA → AA → AA → E', es: 'Autos para clavar lanzas (saltando con cada auto) → E para arrancar todas las lanzas (daño escala por lanza). Cuantas más lanzas, más daño.', en: 'Autos to stick spears (hopping with each auto) → E to rip all spears (damage scales per spear). More spears, more damage.' },
      advanced: { keys: 'R → AA → AA → AA → AA → E', es: 'R para lanzar a tu support como knockup → Autos mientras están CC → E para arrancar lanzas. El R setup te da tiempo libre para clavar muchas lanzas.', en: 'R to throw support as knockup → Autos while they\'re CC\'d → E to rip spears. R setup gives you free time to stick many spears.' }
    },
    buildReasoning: { es: 'BOTRK es core #1 — on-hit + AS + slow con tus saltos constantes es perfecto. Runaan\'s para clavar lanzas en múltiples targets. Guinsoo\'s para más on-hit.', en: 'BOTRK is core #1 — on-hit + AS + slow with constant hops is perfect. Runaan\'s to stick spears on multiple targets. Guinsoo\'s for more on-hit.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: tu daño de ejecución principal. Q segundo: más daño del dash-lanza. W último: el sentinel es utilidad.', en: 'E first: main execution damage. Q second: more dash-spear damage. W last: sentinel is utility.' }
  },
  Karma: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'early',
    identity: { es: 'Support/mid con R desde nivel 1 que empodera habilidades. Mantra Q es un poke devastador, Mantra E es un speed + shield AoE para todo el equipo. Versátil y fuerte en early.', en: 'Support/mid with R from level 1 that empowers abilities. Mantra Q is devastating poke, Mantra E is AoE speed + shield for whole team. Versatile and strong early.' },
    gameplan: {
      early: { es: 'Abusá tu R nivel 1 — Mantra Q hace daño absurdo. Pokeá constantemente con Q y autos. Tu E shield + speed te deja tradear y salir. Nivel 1-3 sos una de las supports más fuertes.', en: 'Abuse R at level 1 — Mantra Q deals absurd damage. Poke constantly with Q and autos. E shield + speed lets you trade and disengage. Levels 1-3 you\'re one of the strongest supports.' },
      mid: { es: 'Mantra E (shield AoE + speed) en tu equipo para engages o rotaciones. Mantra Q para poke antes de peleas. Tu utilidad es enorme — shield, speed, root (W), poke.', en: 'Mantra E (AoE shield + speed) on your team for engages or rotations. Mantra Q for poke before fights. Your utility is enormous — shield, speed, root (W), poke.' },
      late: { es: 'Mantra E antes de una teamfight acelera a TODO tu equipo + shield. Eso solo cambia peleas. Mantra Q para poke, W para root a divers que se acercan a tu carry.', en: 'Mantra E before a teamfight speeds your ENTIRE team + shield. That alone changes fights. Mantra Q for poke, W to root divers approaching your carry.' }
    },
    combo: {
      basic: { keys: 'R → Q', es: 'Mantra → Q empowered para poke devastador con explosión AoE. Tu trade principal.', en: 'Mantra → empowered Q for devastating poke with AoE explosion. Your main trade.' },
      advanced: { keys: 'R → E(equipo) → Q → W(diver)', es: 'Mantra E para shield AoE al equipo → Q poke al grupo → W root al diver que se acerque. Mantra E antes de la pelea, no durante.', en: 'Mantra E for AoE team shield → Q poke at group → W root the approaching diver. Mantra E before fight, not during.' }
    },
    buildReasoning: { es: 'Moonstone para curación constante. Ardent Censer para amplificar ADC con shield. Staff of Flowing Water para AP del equipo. Shurelya\'s como alternativa para más speed.', en: 'Moonstone for constant healing. Ardent Censer to amplify ADC with shield. Staff of Flowing Water for team AP. Shurelya\'s as alternative for more speed.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: poke principal. E segundo: shield más grande. W último: root es útil con un punto.', en: 'Q first: main poke. E second: bigger shield. W last: root is useful with one point.' }
  },
  Karthus: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Mago con R global que hace daño a TODOS los enemigos del mapa. Tu pasiva te deja castear 7 segundos después de morir. Farmeá, escalá y apretá R para ganar teamfights desde cualquier lado.', en: 'Mage with global R that damages ALL enemies on the map. Your passive lets you cast for 7 seconds after dying. Farm, scale and press R to win teamfights from anywhere.' },
    gameplan: {
      early: { es: 'Farmeá jungla rápido con Q (AoE) — hace doble daño si pega a un solo target. Tu clear es rápido y sano. Post-6, mirá el mapa para oportunidades de R (enemigos bajos de vida).', en: 'Farm jungle fast with Q (AoE) — deals double damage on single target. Your clear is fast and healthy. Post-6, watch map for R opportunities (low HP enemies).' },
      mid: { es: 'Seguí farmeando y R cuando sea impactante. La mejor R es en medio de una teamfight cuando varios están bajos. No necesitás estar ahí — solo R desde la jungla.', en: 'Keep farming and R when impactful. Best R is mid teamfight when several are low. You don\'t need to be there — just R from jungle.' },
      late: { es: 'Tu R con items full hace 800+ a CADA enemigo. En teamfight, entrá, morí (está bien), usá pasiva para hacer DPS 7 segundos más, después R. Sos más peligroso muerto que vivo.', en: 'Your R with full items does 800+ to EACH enemy. In teamfight, go in, die (it\'s fine), use passive to DPS 7 more seconds, then R. You\'re more dangerous dead than alive.' }
    },
    combo: {
      basic: { keys: 'Q → Q → Q (spam)', es: 'Q spam constante — intentá pegar Q aislados (doble daño). En jungla, poné Q donde va a estar el monstruo.', en: 'Constant Q spam — try to land isolated Q (double damage). In jungle, place Q where the monster will be.' },
      advanced: { keys: 'Flash → E → Q → Q → (morir) → Q → Q → Q → R', es: 'Flash al grupo → E aura de daño → Q spam → Cuando morís, seguí con Q 7 segundos → R al final para ejecutar a los sobrevivientes.', en: 'Flash into group → E damage aura → Q spam → When you die, keep Q spamming 7 seconds → R at the end to execute survivors.' }
    },
    buildReasoning: { es: 'Liandry\'s para quema con tu E aura y Q spam. Shadowflame para pen mágica. Rabadon\'s para que tu R haga daño nuclear. Void Staff vs equipos con MR.', en: 'Liandry\'s for burn with E aura and Q spam. Shadowflame for magic pen. Rabadon\'s so your R deals nuclear damage. Void Staff vs teams with MR.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño principal de farm y poke. E segundo: más daño de aura. W último: el slow/MR reduction es útil con un punto.', en: 'Q first: main farm and poke damage. E second: more aura damage. W last: slow/MR reduction is useful with one point.' }
  },
  Kassadin: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Assassin AP anti-mago que escala como un monstruo. Pre-6 sos débil. Post-16 con R stackeado sos literalmente el campeón más fuerte del juego. Cada R tiene CD de 1 segundo.', en: 'Anti-mage AP assassin who scales like a monster. Pre-6 you\'re weak. Post-16 with stacked R you\'re literally the strongest champion in the game. Each R has 1 second CD.' },
    gameplan: {
      early: { es: 'Sobreviví la lane. Sos débil nivel 1-5, especialmente contra AD. Usá Q para interrumpir mages (shield mágico de pasiva). Farmeá lo que puedas. Nivel 6 con R podés tradear y escapar.', en: 'Survive lane. You\'re weak levels 1-5, especially against AD. Use Q to interrupt mages (passive magic shield). Farm what you can. Level 6 with R you can trade and escape.' },
      mid: { es: 'Nivel 11 empezás a ser peligroso. R → Q → W → E mata squishies. R tiene CD bajísimo así que podés entrar y salir. Seguí farmeando y escalando hacia nivel 16.', en: 'Level 11 you start being dangerous. R → Q → W → E kills squishies. R has very low CD so you can go in and out. Keep farming and scaling to level 16.' },
      late: { es: 'Nivel 16 con items sos el campeón más fuerte del juego. R cada 1 segundo con daño enorme, entrás y salís 3 veces en un segundo. One-shoteás al carry y desaparecés.', en: 'Level 16 with items you\'re the strongest champion in the game. R every 1 second with huge damage, go in and out 3 times in a second. One-shot the carry and vanish.' }
    },
    combo: {
      basic: { keys: 'R → Q → W → E', es: 'R blink encima → Q para burst + silence → W empowered auto → E slow/damage. Todo en menos de un segundo.', en: 'R blink on top → Q for burst + silence → W empowered auto → E slow/damage. All in under a second.' },
      advanced: { keys: 'R → E → AA(W) → Q → R → R', es: 'R entrada → E slow → Auto empowered con W → Q → R escape → R de nuevo si necesitás (triple blink). La movilidad es absurda.', en: 'R entry → E slow → W empowered auto → Q → R escape → R again if needed (triple blink). Mobility is absurd.' }
    },
    buildReasoning: { es: 'Rod of Ages para sobrevivir el early y escalar. Archangel\'s para maná infinito (R stackeado gasta mucho maná). Rabadon\'s para que tu R haga daño nuclear. Zhonya\'s para seguridad.', en: 'Rod of Ages to survive early and scale. Archangel\'s for infinite mana (stacked R costs lots of mana). Rabadon\'s so R deals nuclear damage. Zhonya\'s for safety.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: poke y shield contra mages en lane. E segundo: más AoE daño. W último: el empowered auto es útil con un punto.', en: 'Q first: poke and shield against lane mages. E second: more AoE damage. W last: empowered auto is useful with one point.' }
  },
  Katarina: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin AP con resets infinitos. Cada kill/assist resetea tus habilidades. Si matás a uno, matás a todos. Tu R channel hace daño masivo. E es un blink a cualquier target/dagger.', en: 'AP assassin with infinite resets. Every kill/assist resets abilities. Kill one, kill all. R channel deals massive damage. E blinks to any target/dagger.' },
    gameplan: {
      early: { es: 'Nivel 1-2 pokeá con Q (tira dagger que cae detrás). Si pisan la dagger, E encima para daño de pasiva + electroctue. Nivel 3 tus trades son letales. Nivel 6 con R all-in es kill.', en: 'Levels 1-2 poke with Q (throws dagger that falls behind). If they step on dagger, E on top for passive damage + electrocute. Level 3 trades are lethal. Level 6 with R all-in is kill.' },
      mid: { es: 'Roameá CONSTANTEMENTE. Tu potencial de kills es enorme y los resets te permiten 1v2 o 1v3. E a una dagger → daño de pasiva → kill → reset → E a la siguiente dagger → kill. La cadena de resets es adictiva.', en: 'Roam CONSTANTLY. Your kill potential is enormous and resets let you 1v2 or 1v3. E to dagger → passive damage → kill → reset → E to next dagger → kill. Reset chain is addictive.' },
      late: { es: 'En teamfights esperá que gasten CC y entrá. Si te stunean durante R, morís. Pero si R channel completo + resets, hacés penta. E entre daggers es tu movilidad.', en: 'In teamfights wait for CC to be spent then go in. If stunned during R, you die. But if full R channel + resets, you get penta. E between daggers is your mobility.' }
    },
    combo: {
      basic: { keys: 'Q → E(a dagger) → W → E(a segunda dagger)', es: 'Q tira dagger → E a la dagger caída (daño de pasiva AoE) → W para otra dagger debajo → E a esa dagger. Doble pasiva proc.', en: 'Q throws dagger → E to fallen dagger (AoE passive damage) → W for another dagger below → E to that dagger. Double passive proc.' },
      advanced: { keys: 'E → W → Q → R → E(a dagger de Q)', es: 'E al target → W dagger debajo → Q dagger volante → R channel → E a la dagger de Q cuando cae. Maximiza daño y movilidad.', en: 'E to target → W dagger below → Q flying dagger → R channel → E to Q dagger when it lands. Maximizes damage and mobility.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt para gap close + magic pen. Nashor\'s si vas on-hit/AP. Shadowflame para pen. Rabadon\'s para one-shot. Zhonya\'s es mandatorio para sobrevivir después de entrar.', en: 'Hextech Rocketbelt for gap close + magic pen. Nashor\'s for on-hit/AP. Shadowflame for pen. Rabadon\'s for one-shot. Zhonya\'s is mandatory to survive after going in.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño y setup de dagger principal. E segundo: menor CD del blink. W último: solo necesitás un punto para la segunda dagger.', en: 'Q first: main damage and dagger setup. E second: lower blink CD. W last: only need one point for second dagger.' }
  },
  Kayle: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Top laner que empieza melee y se transforma en hypercarry ranged. Nivel 6 rangos, nivel 11 AoE, nivel 16 daño bonus permanente. Sobreviví el early y destruí el late.', en: 'Top laner who starts melee and transforms into ranged hypercarry. Level 6 ranged, level 11 AoE, level 16 permanent bonus damage. Survive early, destroy late.' },
    gameplan: {
      early: { es: 'Sos MELEE y débil. Farmeá bajo torre. Usá Q para slow + farmear de lejos. W para curar y MS. No pelees — cada minion que agarrás es un paso más al late game.', en: 'You\'re MELEE and weak. Farm under tower. Use Q for slow + ranged farming. W to heal and MS. Don\'t fight — every minion you grab is a step closer to late game.' },
      mid: { es: 'Nivel 11 con AoE en autos empezás a ser fuerte. Farmeá sidelanes rápido con autos AoE. Tu R es una invulnerabilidad + daño — usalo para salvar a tu carry o a vos misma.', en: 'Level 11 with AoE autos you start being strong. Farm sidelanes fast with AoE autos. Your R is invulnerability + damage — use it to save your carry or yourself.' },
      late: { es: 'Nivel 16 sos una diosa. Autos ranged con AoE + bonus de daño permanente. Sos el ADC más fuerte del late game. R en el momento correcto (en vos o un aliado) gana la pelea.', en: 'Level 16 you\'re a goddess. Ranged autos with AoE + permanent bonus damage. You\'re the strongest late game ADC. R at the right moment (on you or an ally) wins the fight.' }
    },
    combo: {
      basic: { keys: 'Q → AA → AA → E → AA', es: 'Q slow → Autos → E empowered auto para daño extra. Mantenelo simple — tu DPS viene de autos constantes, no de combos.', en: 'Q slow → Autos → E empowered auto for extra damage. Keep it simple — your DPS comes from constant autos, not combos.' },
      advanced: { keys: 'Q → AA → E → AA → R(en vos)', es: 'Q slow → Auto → E empowered → Auto → R para invulnerabilidad si te focusean. El daño de R explota al final. Seguí pegando durante R.', en: 'Q slow → Auto → E empowered → Auto → R for invulnerability if focused. R damage explodes at the end. Keep hitting during R.' }
    },
    buildReasoning: { es: 'Nashor\'s Tooth es core — on-hit AP con tu AS y autos constantes es perfecto. Riftmaker para omnivamp y daño sostenido. Rabadon\'s para multiplicar el daño de autos AP.', en: 'Nashor\'s Tooth is core — AP on-hit with your AS and constant autos is perfect. Riftmaker for omnivamp and sustained damage. Rabadon\'s to multiply AP auto damage.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: tu daño de auto empowered principal. Q segundo: más slow y daño. W último: la curación y MS son útiles con un punto.', en: 'E first: main empowered auto damage. Q second: more slow and damage. W last: healing and MS are useful with one point.' }
  },
  Kayn: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'Jungler que elige entre dos formas: Rhaast (rojo, bruiser) o Shadow Assassin (azul, assassin). Pegá rangos para azul, melees para rojo. Tu E atraviesa paredes.', en: 'Jungler who chooses between two forms: Rhaast (red, bruiser) or Shadow Assassin (blue, assassin). Hit ranged for blue, melee for red. Your E walks through walls.' },
    gameplan: {
      early: { es: 'Base Kayn es débil — farmeá rápido con Q+W y evitá peleas 1v1. Gankeá para juntar orbes de transformación. Pegá campeones ranged si querés azul, melee si querés rojo. E para pathing por paredes.', en: 'Base Kayn is weak — farm fast with Q+W and avoid 1v1s. Gank to collect transformation orbs. Hit ranged champs for blue, melee for red. E for wall pathing.' },
      mid: { es: 'Rhaast: peleas extendidas con curación % vida en habilidades. Shadow: one-shot squishies y salí con R. Ambas formas son fuertes mid game. Elegí forma según comp enemiga.', en: 'Rhaast: extended fights with % health healing on abilities. Shadow: one-shot squishies and get out with R. Both forms are strong mid game. Choose form based on enemy comp.' },
      late: { es: 'Rhaast: frontline bruiser unkillable con curación absurda vs tanques. Shadow: flanqueá, one-shot carry, R para untargeteable + escape. E a través de paredes para flanqueos imposibles.', en: 'Rhaast: unkillable frontline bruiser with absurd healing vs tanks. Shadow: flank, one-shot carry, R for untargetable + escape. E through walls for impossible flanks.' }
    },
    combo: {
      basic: { keys: 'W → Q → AA', es: 'W slow/knockup → Q dash-through → Auto. Rhaast W knockea, Shadow W slowa.', en: 'W slow/knockup → Q dash-through → Auto. Rhaast W knocks up, Shadow W slows.' },
      advanced: { keys: 'E(pared) → W → Q → AA → R → (esperar) → salir', es: 'E desde pared sorpresa → W CC → Q daño → Auto → R para entrar en el target (sos untargeteable) → Salir detrás para escape. Shadow: one-shot. Rhaast: curar dentro de R.', en: 'E from wall surprise → W CC → Q damage → Auto → R to enter target (untargetable) → Exit behind for escape. Shadow: one-shot. Rhaast: heal inside R.' }
    },
    buildReasoning: { es: 'Rhaast: Eclipse + Black Cleaver para bruiser con sustain. Shadow: Youmuu\'s + Profane Hydra para lethality one-shot. Ambos: Death\'s Dance para sustain extra.', en: 'Rhaast: Eclipse + Black Cleaver for bruiser with sustain. Shadow: Youmuu\'s + Profane Hydra for lethality one-shot. Both: Death\'s Dance for extra sustain.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero en ambas formas: es tu daño principal. W segundo: más CC y daño. E último: atravesar paredes es bueno con un punto.', en: 'Q first in both forms: main damage. W second: more CC and damage. E last: walking through walls is good with one point.' }
  },
  Kennen: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Mago top ranged con engage AoE de R. Stackeás marcas de trueno en enemigos — a 3 marcas, stun. Tu R es una tormenta AoE alrededor tuyo que stunea a todo el grupo.', en: 'Ranged top mage with AoE R engage. Stack thunder marks on enemies — at 3 marks, stun. Your R is an AoE storm around you that stuns the entire group.' },
    gameplan: {
      early: { es: 'Sos ranged en top — abusá tu rango contra melees. Q shuriken para poke, W pasiva cada 4 autos (marca). Si acumulás 3 marcas, stun. Dominá la lane con autos y Q.', en: 'You\'re ranged in top — abuse range against melees. Q shuriken for poke, W passive every 4 autos (mark). Stack 3 marks for stun. Dominate lane with autos and Q.' },
      mid: { es: 'Buscá TP flanks con R listo. Protobelt + R en el equipo enemigo agrupa stunea a todos. Tu R + Zhonya\'s es un combo devastador — R, Zhonya\'s, todo sigue haciendo daño.', en: 'Look for TP flanks with R ready. Protobelt + R into enemy team stuns everyone. Your R + Zhonya\'s is a devastating combo — R, Zhonya\'s, everything keeps dealing damage.' },
      late: { es: 'Flash/Protobelt → R en un grupo de 3+ enemigos gana la pelea. Zhonya\'s mientras R sigue activa. El stun AoE + daño es de las mejores ultis de teamfight del juego.', en: 'Flash/Protobelt → R on a group of 3+ enemies wins the fight. Zhonya\'s while R stays active. AoE stun + damage is one of the best teamfight ults in the game.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q shuriken (1 marca) → W active (2 marcas si pega) → Auto (si tiene W pasiva, stun). Simple stun combo.', en: 'Q shuriken (1 mark) → W active (2 marks if hits) → Auto (if W passive ready, stun). Simple stun combo.' },
      advanced: { keys: 'E → Flash → R → Zhonya\'s', es: 'E para MS y protección → Flash al grupo → R tormenta AoE → Zhonya\'s inmediato (R sigue activa en stasis). Todo el equipo stunned y muerto.', en: 'E for MS and protection → Flash into group → R AoE storm → immediate Zhonya\'s (R stays active in stasis). Entire team stunned and dead.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt para otro gap close para tu R engage. Zhonya\'s es CORE — R sigue activa en stasis. Shadowflame para más burst después del engage.', en: 'Hextech Rocketbelt for another gap close for R engage. Zhonya\'s is CORE — R stays active in stasis. Shadowflame for more burst after engage.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: poke y waveclear principal. W segundo: más daño y menor CD. E último: el dash MS es útil con un punto.', en: 'Q first: main poke and waveclear. W second: more damage and lower CD. E last: dash MS is useful with one point.' }
  },
  Khazix: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin AD de jungla que mata targets AISLADOS. Tu Q hace daño extra masivo si el target está solo (sin aliados cerca). Evolucionás habilidades en niveles 6/11/16.', en: 'AD jungle assassin who kills ISOLATED targets. Your Q deals massive extra damage if target is alone (no allies nearby). Evolve abilities at levels 6/11/16.' },
    gameplan: {
      early: { es: 'Farmeá rápido y buscá ganks en targets aislados. Q aislado hace daño tremendo. W slow + pasiva de auto empowered es tu trade. Nivel 6 evolucioná Q o W según la partida.', en: 'Farm fast and look for ganks on isolated targets. Isolated Q deals tremendous damage. W slow + passive empowered auto is your trade. Level 6 evolve Q or W based on the game.' },
      mid: { es: 'Cazá gente sola en sidelanes, jungla, wards. Si un ADC está solo farmeando, lo matás en menos de un segundo con Q aislado. Tu pasiva de camuflaje (R evolve) te da múltiples stealth.', en: 'Hunt solo people in sidelanes, jungle, wards. If an ADC is alone farming, you kill them in under a second with isolated Q. Camouflage passive (R evolve) gives multiple stealth.' },
      late: { es: 'Buscá picks. Nunca pelees 5v5 de frente — flanqueá, matá al carry aislado, salí con E evolucionada (reset en kill). E reset te permite saltar de target en target como un insecto.', en: 'Look for picks. Never fight 5v5 head-on — flank, kill the isolated carry, get out with evolved E (reset on kill). E reset lets you jump target to target like an insect.' }
    },
    combo: {
      basic: { keys: 'E → AA(pasiva) → Q → W', es: 'E salto → Auto empowered por pasiva → Q aislado para burst → W slow si escapan. Lo importante es que Q sea en aislado.', en: 'E leap → Passive empowered auto → Isolated Q for burst → W slow if escaping. Key is Q being isolated.' },
      advanced: { keys: 'R → E → AA(pasiva) → Q → W → R → AA(pasiva)', es: 'R stealth → E salto → Auto pasiva → Q burst → W → R stealth de nuevo → Auto pasiva. Cada cast de R da un nuevo proc de pasiva.', en: 'R stealth → E leap → Passive auto → Q burst → W → R stealth again → Passive auto. Each R cast gives new passive proc.' }
    },
    buildReasoning: { es: 'Youmuu\'s para movilidad y lethality — llegas más rápido a targets aislados. Profane Hydra para burst extra. Edge of Night para shield anti-CC. Serylda\'s para slow y pen.', en: 'Youmuu\'s for mobility and lethality — reach isolated targets faster. Profane Hydra for extra burst. Edge of Night for anti-CC shield. Serylda\'s for slow and pen.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño de ejecución, especialmente aislado. W segundo: poke y slow. E último: el salto no necesita niveles.', en: 'Q first: execution damage, especially isolated. W second: poke and slow. E last: leap doesn\'t need levels.' }
  },
  Kindred: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Marksman jungler que escala con stacks de pasiva (marcas en campeones y campamentos). Tu R crea una zona donde NADIE puede morir — aliados ni enemigos. ADC desde la jungla.', en: 'Marksman jungler who scales with passive stacks (marks on champions and camps). Your R creates a zone where NOBODY can die — allies or enemies. ADC from the jungle.' },
    gameplan: {
      early: { es: 'Marcá campeones (pasiva elige uno automáticamente y vos elegís campamentos). Priorizá stacks — cada stack te da más rango y daño. Gankeá targets marcados. Clear con Q dash en tu W.', en: 'Mark champions (passive auto-selects one and you choose camps). Prioritize stacks — each stack gives more range and damage. Gank marked targets. Clear with Q dash in your W.' },
      mid: { es: 'Con stacks suficientes tu rango y daño son de ADC. Peleá en tu W (círculo) donde Q tiene CD reducido a 2 segundos. Buscá marcas en campamentos enemigos para invadir si estás ahead.', en: 'With enough stacks your range and damage are ADC-level. Fight inside your W (circle) where Q has 2 second CD. Look for marks on enemy camps to invade if ahead.' },
      late: { es: 'Sos un ADC. Posicionate atrás y hacé DPS. R es complicada — úsala para salvar aliados o a vos, pero ojo que enemigos dentro también sobreviven. R al 10% → esperar → curar al final.', en: 'You\'re an ADC. Position back and DPS. R is tricky — use it to save allies or yourself, but enemies inside also survive. R at 10% → wait → heal at the end.' }
    },
    combo: {
      basic: { keys: 'W → Q → AA → Q → AA', es: 'W para crear zona → Q dash dentro del W (CD 2s) → Auto → Q de nuevo → Auto. El DPS dentro del W es insano por el Q de 2 segundos.', en: 'W to create zone → Q dash inside W (2s CD) → Auto → Q again → Auto. DPS inside W is insane from 2 second Q.' },
      advanced: { keys: 'E → W → Q → AA → AA → AA → E(explota)', es: 'E marca al target (explota después de 3 autos para daño % HP) → W zona → Q dashes + autos para aplicar los 3 hits → E explota para ejecución.', en: 'E marks target (explodes after 3 autos for % HP damage) → W zone → Q dashes + autos to apply 3 hits → E explodes for execution.' }
    },
    buildReasoning: { es: 'Kraken Slayer para DPS de ADC. Collector para ejecución que synergiza con E. Infinity Edge para crit. BOTRK como alternativa on-hit si hay muchos tanques.', en: 'Kraken Slayer for ADC DPS. Collector for execution that synergizes with E. Infinity Edge for crit. BOTRK as on-hit alternative vs heavy tanks.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: menor CD del dash, más daño. W segundo: más daño del lobo y menor CD de zona. E último: la marca de ejecución escala con crit, no niveles.', en: 'Q first: lower dash CD, more damage. W second: more wolf damage and lower zone CD. E last: execution mark scales with crit, not levels.' }
  },
  Kled: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Bruiser de top que nunca para de pelear. Tu pasiva es Skaarl — cuando te bajan la vida, te desmontás pero NO morís. Si pegás suficiente desmontado, Skaarl vuelve con vida extra. R es una carga global.', en: 'Top bruiser who never stops fighting. Your passive is Skaarl — when health drops, you dismount but DON\'T die. If you hit enough dismounted, Skaarl returns with extra health. R is a global charge.' },
    gameplan: {
      early: { es: 'Peleá SIEMPRE. Tu pasiva te da una segunda barra de vida. Si el enemigo te baja, te desmontás, seguí pegando para recuperar a Skaarl. Nivel 1-3 con Q+W sos imbatible.', en: 'ALWAYS fight. Your passive gives a second health bar. If enemy takes you down, you dismount, keep hitting to get Skaarl back. Levels 1-3 with Q+W you\'re unbeatable.' },
      mid: { es: 'R es una carga en línea recta que arrastra a tu equipo — úsala para flanquear o engage de equipo. CHAAAAARGE. Con Sundered Sky no morís nunca entre desmontadas.', en: 'R is a straight line charge that drags your team — use for flanking or team engage. CHAAAAARGE. With Sundered Sky you never die between dismounts.' },
      late: { es: 'R para engage de teamfight. En la pelea, buscá desmontarte y remontarte para el reset de vida. Los enemigos que creen que te mataron se sorprenden cuando Skaarl vuelve.', en: 'R for teamfight engage. In the fight, look to dismount and remount for health reset. Enemies who think they killed you get surprised when Skaarl returns.' }
    },
    combo: {
      basic: { keys: 'Q → E → AA → W → AA → AA → AA → E2', es: 'Q bear trap → E dash → Auto → W se activa (4 autos rápidos) → E2 para dash de vuelta al target. El W da AS burst.', en: 'Q bear trap → E dash → Auto → W activates (4 fast autos) → E2 to dash back to target. W gives burst AS.' },
      advanced: { keys: 'R → E → Q → AA → W → AA → AA → AA → E2', es: 'R carga → E para gap close extra → Q engancha → Auto → W burst de 4 autos → E2. El target está muerto o vos te desmontás y seguís peleando.', en: 'R charge → E extra gap close → Q hooks → Auto → W 4 auto burst → E2. Target is dead or you dismount and keep fighting.' }
    },
    buildReasoning: { es: 'Sundered Sky da sustain masivo y burst en primer hit — perfecto para Kled que pelea constantemente. Black Cleaver stackea rápido con W. Sterak\'s para no morir al desmontarte.', en: 'Sundered Sky gives massive sustain and first-hit burst — perfect for Kled who fights constantly. Black Cleaver stacks fast with W. Sterak\'s to survive dismounting.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño principal y pull. W segundo: más AS burst y daño por auto. E último: dash no necesita niveles.', en: 'Q first: main damage and pull. W second: more AS burst and damage per auto. E last: dash doesn\'t need levels.' }
  },
  KogMaw: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'ADC hypercarry con el mayor rango y DPS del late game. Tu W activo te da rango + daño % vida. Necesitás protección constante — no tenés escape. El ADC que más daño hace si lo dejan vivo.', en: 'Hypercarry ADC with the highest late game range and DPS. Active W gives range + % health damage. Need constant protection — no escape. ADC that deals the most damage if kept alive.' },
    gameplan: {
      early: { es: 'Sos extremadamente débil. Farmeá bajo torre. Tu W activo te da rango corto para tradear pero el CD es largo. Dependés 100% de tu support para sobrevivir. No te arriesgues.', en: 'Extremely weak. Farm under tower. Active W gives short range for trading but CD is long. 100% depend on support to survive. Don\'t take risks.' },
      mid: { es: 'Con Guinsoo\'s + BOTRK tu DPS empieza a ser relevante. W activo con AS + on-hit hace daño absurdo. Siempre quedate detrás de tu equipo. R para poke antes de peleas.', en: 'With Guinsoo\'s + BOTRK your DPS starts being relevant. Active W with AS + on-hit deals absurd damage. Always stay behind your team. R for poke before fights.' },
      late: { es: 'Sos el ADC más fuerte del late game si te protegen. W activo con on-hit builds literalmente derrite a cualquier tanque en 3 segundos. Tu R pokea desde pantalla y media de distancia.', en: 'You\'re the strongest late game ADC if protected. Active W with on-hit builds literally melts any tank in 3 seconds. Your R pokes from a screen and a half away.' }
    },
    combo: {
      basic: { keys: 'W → AA → AA → AA', es: 'W para rango + % HP → Autos constantes. No necesitás combos — tu DPS viene de autos con W activo.', en: 'W for range + % HP → Constant autos. No combos needed — your DPS comes from autos with W active.' },
      advanced: { keys: 'R → R → R → W → AA → Q → AA → E → AA', es: 'R×3 para poke antes de la pelea → W activar rango → Autos → Q para AS y MR shred → E slow si se acercan.', en: 'R×3 for poke before fight → W activate range → Autos → Q for AS and MR shred → E slow if they approach.' }
    },
    buildReasoning: { es: 'Guinsoo\'s es core — convierte crit en on-hit que aplica tus procs de W y BOTRK el doble de rápido. BOTRK para % vida. Runaan\'s para AoE on-hit.', en: 'Guinsoo\'s is core — converts crit to on-hit that applies W and BOTRK procs twice as fast. BOTRK for % health. Runaan\'s for AoE on-hit.' },
    skillOrder: { order: 'W > Q > E', es: 'W primero: rango y % HP daño es tu identidad. Q segundo: AS steroid y MR shred. E último: slow es útil con un punto.', en: 'W first: range and % HP damage is your identity. Q second: AS steroid and MR shred. E last: slow is useful with one point.' }
  },
  Leblanc: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Maga assassin con burst instantáneo y movilidad engañosa. Tu W es un dash que podés recastear para volver. R copia tu última habilidad. Matás en un parpadeo y desaparecés.', en: 'Burst assassin mage with instant burst and deceptive mobility. W is a dash you can recast to return. R copies your last ability. Kill in a blink and vanish.' },
    gameplan: {
      early: { es: 'Nivel 2-3 tu Q+W (o W+Q) hace 40% de la vida del enemigo. Es tu trade: W dash → Q marca → auto para detonar → W back. Nivel 6 con R el burst se duplica.', en: 'Levels 2-3 your Q+W (or W+Q) does 40% of enemy health. Your trade: W dash → Q mark → auto to proc → W back. Level 6 with R the burst doubles.' },
      mid: { es: 'Roameá y one-shoteá gente. W+Q+R(Q)+E = kill en un segundo. Tu movilidad es insana — W ida, W vuelta, R(W) otro dash. Nadie puede followearte.', en: 'Roam and one-shot people. W+Q+R(Q)+E = kill in one second. Your mobility is insane — W forward, W return, R(W) another dash. Nobody can follow you.' },
      late: { es: 'Buscá picks. LeBlanc no es la mejor en teamfights 5v5 porque necesitás targets aislados. Flankéa, matá al carry con combo completo, W back. Replicá con R lo que necesites.', en: 'Look for picks. LeBlanc isn\'t the best in 5v5 teamfights because you need isolated targets. Flank, kill carry with full combo, W back. Replicate with R what you need.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q marca → W dash (detona marca) → Auto. Después W back para volver segura. Trade rápido y seguro.', en: 'Q mark → W dash (pops mark) → Auto. Then W back to return safe. Quick safe trade.' },
      advanced: { keys: 'W → R(W) → Q → E', es: 'W dash al target → R(W) para segundo dash (o guardar para volver) → Q → E cadena. Dos dashes + burst = muerte instantánea.', en: 'W dash to target → R(W) for second dash (or save to return) → Q → E chain. Two dashes + burst = instant death.' }
    },
    buildReasoning: { es: 'Luden\'s para burst + magic pen. Shadowflame para más pen contra bajos de MR. Rabadon\'s para one-shot. Banshee\'s para seguridad (podés jugar más agresiva con spellshield).', en: 'Luden\'s for burst + magic pen. Shadowflame for more pen against low MR. Rabadon\'s to one-shot. Banshee\'s for safety (can play more aggressive with spellshield).' },
    skillOrder: { order: 'W > Q > E', es: 'W primero: waveclear, movilidad y poke. Q segundo: más burst. E último: la cadena es útil con un punto.', en: 'W first: waveclear, mobility and poke. Q second: more burst. E last: chain is useful with one point.' }
  },
  LeeSin: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Jungler de early game con el skill ceiling más alto del juego. Q para engage, W para ward-hop, R para insec. Si dominás sus mecánicas, controlás toda la partida temprana.', en: 'Early game jungler with the highest skill ceiling in the game. Q for engage, W for ward-hop, R for insec. Master his mechanics and control the entire early game.' },
    gameplan: {
      early: { es: 'Gankeá nivel 2-3 con Q → Q resonating → auto → E → auto. Tu daño temprano es brutal. Weaveá autos entre habilidades para pasiva (2 autos con AS gratis). Invadí si el jungler enemigo es débil.', en: 'Gank levels 2-3 with Q → Q resonating → auto → E → auto. Early damage is brutal. Weave autos between abilities for passive (2 free AS autos). Invade if enemy jungler is weak.' },
      mid: { es: 'El Insec: Ward → W hop detrás del target → R kick hacia tu equipo. Es el play más icónico del juego. Buscá picks con Q → Q → R kick hacia aliados.', en: 'The Insec: Ward → W hop behind target → R kick toward your team. It\'s the most iconic play in the game. Look for picks with Q → Q → R kick toward allies.' },
      late: { es: 'Caés en late. Tu trabajo es R Insec al carry hacia tu equipo o pelar para tu ADC con R para empujar amenazas. Un buen Insec gana la partida, pero un mal engage la pierde.', en: 'You fall off late. Your job is R Insec the carry into your team or peel for ADC with R to push threats away. A good Insec wins the game, but a bad engage loses it.' }
    },
    combo: {
      basic: { keys: 'Q → Q → AA → AA → E → AA → AA', es: 'Q skillshot → Q dash → 2 autos (pasiva) → E slow → 2 autos (pasiva). Weaveá siempre 2 autos entre habilidades.', en: 'Q skillshot → Q dash → 2 autos (passive) → E slow → 2 autos (passive). Always weave 2 autos between abilities.' },
      advanced: { keys: 'Q → Q → Ward → W → R → Q(en el aire)', es: 'Q al target → Q dash → Ward detrás de ellos → W al ward → R kick hacia tu equipo. El famoso Insec. Se puede hacer con Flash en vez de Ward+W.', en: 'Q to target → Q dash → Ward behind them → W to ward → R kick toward your team. The famous Insec. Can be done with Flash instead of Ward+W.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain — todo lo que Lee necesita. Black Cleaver para peleas más largas. Death\'s Dance para sobrevivir. Youmuu\'s si estás snowballeando.', en: 'Eclipse for burst and sustain — everything Lee needs. Black Cleaver for longer fights. Death\'s Dance to survive. Youmuu\'s if snowballing.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño y engage principal. W segundo: menor CD de ward-hop y shield. E último: el slow es útil con un punto.', en: 'Q first: main damage and engage. W second: lower ward-hop CD and shield. E last: slow is useful with one point.' }
  },
  Leona: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'La support tanque engage más agresiva del juego. Tres habilidades de CC: Q stun, E dash, R stun AoE. Si Leona te agarra, te stunea por 3+ segundos consecutivos.', en: 'The most aggressive tank engage support in the game. Three CC abilities: Q stun, E dash, R AoE stun. If Leona catches you, she stuns you for 3+ consecutive seconds.' },
    gameplan: {
      early: { es: 'Nivel 2 con E+Q es kill. E dash al enemigo → Q auto stun → tu ADC hace el daño. Si tu ADC tiene CC o daño (Draven, Lucian), nivel 2 all-in es mortal.', en: 'Level 2 with E+Q is kill. E dash to enemy → Q auto stun → your ADC deals damage. If ADC has CC or damage (Draven, Lucian), level 2 all-in is deadly.' },
      mid: { es: 'Roameá y busca engages en objetivos. R stun AoE → E dash → Q stun = el target no se mueve por 3 segundos. Buscá al carry enemigo y dáselo a tu equipo.', en: 'Roam and look for engages at objectives. R AoE stun → E dash → Q stun = target doesn\'t move for 3 seconds. Find enemy carry and deliver them to your team.' },
      late: { es: 'Flash → R para stun AoE → E → Q. Tu cadena de CC es la más larga del juego para un support. W te da resistencias para tanquear. Sos la queen del engage.', en: 'Flash → R for AoE stun → E → Q. Your CC chain is the longest in the game for a support. W gives resistances to tank. You\'re the engage queen.' }
    },
    combo: {
      basic: { keys: 'E → AA → Q → AA', es: 'E dash al target → Auto → Q auto stun → Auto. La pasiva de Leona marca al enemigo para daño extra de aliados.', en: 'E dash to target → Auto → Q auto stun → Auto. Leona\'s passive marks enemy for extra damage from allies.' },
      advanced: { keys: 'R → Flash → E → AA → Q → AA → W', es: 'R a distancia para stun → Flash para cerrar → E dash → Auto → Q stun → Auto → W para resistencias. El target está CC\'d 3+ segundos seguidos.', en: 'R from range for stun → Flash to close → E dash → Auto → Q stun → Auto → W for resistances. Target is CC\'d 3+ consecutive seconds.' }
    },
    buildReasoning: { es: 'Locket para shield AoE al equipo cuando engageás. Después full tanque: Frozen Heart vs AD, Force of Nature vs AP. Mobi Boots para roam.', en: 'Locket for AoE team shield when engaging. Then full tank: Frozen Heart vs AD, Force of Nature vs AP. Mobi Boots for roaming.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: menor CD del stun, más daño. W segundo: más resistencias y daño. E último: el dash no necesita niveles.', en: 'Q first: lower stun CD, more damage. W second: more resistances and damage. E last: dash doesn\'t need levels.' }
  },
  Lillia: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'Jungler AP que se mueve a velocidad absurda. Tu pasiva stackea MS cada vez que pegás habilidades. Q spin hace daño % HP. R duerme a TODOS los que tengan tu pasiva de sueño.', en: 'AP jungler who moves at absurd speed. Passive stacks MS every time you hit abilities. Q spin deals % HP damage. R sleeps ALL who have your drowsy passive.' },
    gameplan: {
      early: { es: 'Full clear rápido con Q spin — cada Q stackea tu MS. Sos la jungler más rápida del juego moviéndote entre campamentos. Post-6, tu R duerme en ganks para CC gratis.', en: 'Fast full clear with Q spin — each Q stacks your MS. You\'re the fastest jungler moving between camps. Post-6, your R sleeps on ganks for free CC.' },
      mid: { es: 'En peleas de objetivos, Q spam en el grupo — el daño % HP se acumula y tu MS te hace imposible de agarrar. R cuando varios tienen pasiva de drowsy = sleep AoE masivo.', en: 'In objective fights, Q spam on the group — % HP damage adds up and MS makes you impossible to catch. R when multiple have drowsy passive = massive AoE sleep.' },
      late: { es: 'Q en teamfights hace daño obsceno porque es % HP. Corrés alrededor del equipo enemigo spinneando. R con 3+ enemigos drowsy = gana la pelea. Sos un trompo de destrucción.', en: 'Q in teamfights deals obscene damage because it\'s % HP. You run around the enemy team spinning. R with 3+ drowsy enemies = wins the fight. You\'re a destruction spinning top.' }
    },
    combo: {
      basic: { keys: 'Q → Q → Q (spin spam)', es: 'Q spin constantemente para daño y MS stacks. Corré en círculos pegando Q al borde exterior (más daño en el borde).', en: 'Constant Q spin for damage and MS stacks. Run in circles hitting Q on outer edge (more damage on edge).' },
      advanced: { keys: 'E → Q → W → R', es: 'E lob desde lejos para aplicar pasiva drowsy → Q spin para daño → W para más daño → R para dormir a todos los que tengan drowsy. El sleep es devastador.', en: 'E lob from far to apply drowsy passive → Q spin for damage → W for more damage → R to sleep all with drowsy. The sleep is devastating.' }
    },
    buildReasoning: { es: 'Liandry\'s amplifica tu daño % HP de Q. Rylai\'s para slow constante con Q spam. Rabadon\'s para multiplicar todo. Dark Seal/Mejai\'s porque no morís fácilmente (sos ultra rápida).', en: 'Liandry\'s amplifies Q % HP damage. Rylai\'s for constant slow with Q spam. Rabadon\'s to multiply everything. Dark Seal/Mejai\'s because you don\'t die easily (you\'re ultra fast).' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu todo — daño, MS, clear. W segundo: más daño y curación. E último: es poke/setup, no necesita niveles.', en: 'Q first: your everything — damage, MS, clear. W second: more damage and healing. E last: poke/setup, doesn\'t need levels.' }
  },
  Lissandra: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Maga de control con self-stasis en R y CC masivo. Entrás con E, R en vos misma para stasis+AoE, y tu equipo followea. Contra assassins sos una pesadilla con tu R defensiva.', en: 'Control mage with self-stasis on R and massive CC. Enter with E, R on yourself for stasis+AoE, and your team follows. Against assassins you\'re a nightmare with defensive R.' },
    gameplan: {
      early: { es: 'Pokeá y pusheá con Q (pasa a través de minions). Tu early es decente pero no destacás hasta nivel 6. E claw para escapar ganks o tradear agresivo. W root si se acercan.', en: 'Poke and push with Q (passes through minions). Your early is decent but you don\'t shine until 6. E claw to escape ganks or trade aggressively. W root if they approach.' },
      mid: { es: 'E agresivo → W root → Q → R (en el enemigo para stun, o en vos para stasis). Tu engage con E+Flash+R es devastador. Busca flanqueos o TP plays.', en: 'Aggressive E → W root → Q → R (on enemy for stun, or on self for stasis). Your engage with E+Flash+R is devastating. Look for flanks or TP plays.' },
      late: { es: 'E → Flash → R(self) en el medio del equipo enemigo = stasis + AoE que los congela a todos. Tu equipo followea mientras estás en stasis. Aftershock + Zhonya\'s te hacen ultra tanque en la entrada.', en: 'E → Flash → R(self) in the middle of enemy team = stasis + AoE that freezes everyone. Team follows while you\'re in stasis. Aftershock + Zhonya\'s make you ultra tanky on entry.' }
    },
    combo: {
      basic: { keys: 'E → W → Q', es: 'E dash al enemigo → W root AoE → Q a través de ellos. CC encadenado con daño.', en: 'E dash to enemy → W AoE root → Q through them. Chained CC with damage.' },
      advanced: { keys: 'E(lanzar) → Flash → R(self) → W → Q → Zhonya\'s', es: 'E claw → Flash al centro del equipo → R en vos misma (AoE stasis) → W root a todos → Q → Zhonya\'s para segundo stasis. Doble engage imposible de contrarrestar.', en: 'E claw → Flash to team center → R on self (AoE stasis) → W root everyone → Q → Zhonya\'s for second stasis. Double engage impossible to counter.' }
    },
    buildReasoning: { es: 'Luden\'s para burst y pen. Zhonya\'s es CORE — doble stasis con R+Zhonya\'s. Shadowflame para más pen. Banshee\'s si necesitás entrar sin que te CCeen antes de R.', en: 'Luden\'s for burst and pen. Zhonya\'s is CORE — double stasis with R+Zhonya\'s. Shadowflame for more pen. Banshee\'s if you need to enter without getting CC\'d before R.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: waveclear y poke principal. W segundo: menor CD del root y más daño. E último: el dash es útil con un punto.', en: 'Q first: main waveclear and poke. W second: lower root CD and more damage. E last: dash is useful with one point.' }
  },
  Lucian: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'ADC agresivo con pasiva de doble disparo después de cada habilidad. Tu DPS en trades cortos es insuperable. Fuerte en early con un support agresivo. Dash corto con E.', en: 'Aggressive ADC with double-shot passive after every ability. Your short trade DPS is unmatched. Strong early with an aggressive support. Short dash with E.' },
    gameplan: {
      early: { es: 'Nivel 2 con Q+E es de los trades más fuertes del juego. Cada habilidad → doble auto de pasiva. Q+AA(x2)+E+AA(x2) hace daño absurdo. Con Nami support sos imbatible.', en: 'Level 2 with Q+E is one of the strongest trades in the game. Each ability → double passive auto. Q+AA(x2)+E+AA(x2) deals absurd damage. With Nami support you\'re unbeatable.' },
      mid: { es: 'Pusheá ventaja de lane. Con Essence Reaver tu daño de combo es insano. Buscá peleas cortas donde tu pasiva de doble disparo brille. No pelees largo — buscá burst trades.', en: 'Push lane advantage. With Essence Reaver your combo damage is insane. Look for short fights where your double-shot passive shines. Don\'t fight long — look for burst trades.' },
      late: { es: 'Tu rango corto te hace difícil de jugar en late. Usá E para reposicionarte constantemente. R para DPS de largo alcance si no podés llegar. Caés contra hypercarries pero seguís fuerte en bursts.', en: 'Your short range makes you hard to play late. Use E to constantly reposition. R for long range DPS if you can\'t reach. Fall off vs hypercarries but still strong in bursts.' }
    },
    combo: {
      basic: { keys: 'Q → AA → AA → E → AA → AA', es: 'Q → Doble auto de pasiva → E dash → Doble auto de pasiva. El patrón siempre es: habilidad → doble auto.', en: 'Q → Double passive auto → E dash → Double passive auto. Pattern is always: ability → double auto.' },
      advanced: { keys: 'E → AA → AA → Q → AA → AA → W → AA → AA', es: 'E dash agresivo → Doble auto → Q → Doble auto → W → Doble auto. Tres pasivas en un trade. El daño es nuclear.', en: 'Aggressive E dash → Double auto → Q → Double auto → W → Double auto. Three passives in one trade. Damage is nuclear.' }
    },
    buildReasoning: { es: 'Essence Reaver prockea Spellblade con tu rotación constante de habilidades — cada doble auto proc es daño extra. Navori para menor CD. Infinity Edge para crit scaling.', en: 'Essence Reaver procs Spellblade with constant ability rotation — each double auto proc is extra damage. Navori for lower CD. Infinity Edge for crit scaling.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño principal. E segundo: menor CD del dash (cada auto reduce E CD). W último: solo para activar pasiva.', en: 'Q first: main damage. E second: lower dash CD (each auto reduces E CD). W last: only for passive proc.' }
  },
  Lulu: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: { es: 'Enchantera que convierte a su carry en un monstruo. W polymorph silencia + transforma enemigos. E shield + pasiva da poke. R da vida + knockup AoE. La mejor protectora de ADC.', en: 'Enchanter who turns her carry into a monster. W polymorph silences + transforms enemies. E shield + passive gives poke. R gives health + AoE knockup. Best ADC protector.' },
    gameplan: {
      early: { es: 'Pokeá con E + auto (pasiva Pix pega con tus autos). W en el ADC para speed cuando tradea, o W polymorph en el enemigo si se acercan. Tu poke es sorprendentemente fuerte.', en: 'Poke with E + auto (Pix passive hits with your autos). W on ADC for speed when trading, or W polymorph on enemy if they approach. Your poke is surprisingly strong.' },
      mid: { es: 'Pegáte al carry y potenciálo. E shield → W speed → R para vida extra si lo diveán. W polymorph en el assassin que intente matar a tu ADC es game-changing.', en: 'Stick to carry and empower them. E shield → W speed → R for extra health if they dive. W polymorph on the assassin trying to kill your ADC is game-changing.' },
      late: { es: 'Tu ADC con Lulu es 2x más fuerte que sin Lulu. E shield + Ardent + W speed + R knockup = el ADC es intocable. Polymorph el diver más peligroso.', en: 'Your ADC with Lulu is 2x stronger than without. E shield + Ardent + W speed + R knockup = ADC is untouchable. Polymorph the most dangerous diver.' }
    },
    combo: {
      basic: { keys: 'E(ADC) → Q', es: 'E en tu ADC (Pix va a él) → Q sale desde Pix para poke de largo alcance desde la posición del ADC.', en: 'E on your ADC (Pix goes to them) → Q fires from Pix for long range poke from ADC\'s position.' },
      advanced: { keys: 'W(polymorph enemigo) → E(ADC) → R(ADC) → Q', es: 'W polymorph al diver → E shield al ADC → R para knockup + vida extra → Q slow. El diver no puede hacer nada.', en: 'W polymorph diver → E shield ADC → R for knockup + extra health → Q slow. Diver can\'t do anything.' }
    },
    buildReasoning: { es: 'Moonstone para curación constante. Ardent Censer es CORE — tu E shield da AS y on-hit al carry. Staff of Flowing Water para AP. Redemption para curación AoE de teamfight.', en: 'Moonstone for constant healing. Ardent Censer is CORE — E shield gives AS and on-hit to carry. Staff of Flowing Water for AP. Redemption for AoE teamfight healing.' },
    skillOrder: { order: 'E > W > Q', es: 'E primero: shield más grande y más poke de Pix. W segundo: menor CD de polymorph (crucial). Q último: el slow es útil con un punto.', en: 'E first: bigger shield and more Pix poke. W second: lower polymorph CD (crucial). Q last: slow is useful with one point.' }
  },
  Lux: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: { es: 'Maga de poke con burst de una combo. Q root doble, E AoE slow/poke, R laser global de bajo CD. Si pegás Q, el target muere. Si no, pokeás con E desde lejos.', en: 'Poke mage with one-combo burst. Q double root, E AoE slow/poke, R low CD global laser. Land Q and target dies. If not, poke with E from range.' },
    gameplan: {
      early: { es: 'Pokeá con E (zona AoE que explota para daño). Q para root si se acercan — pega a 2 targets. Auto después de habilidades para pasiva (daño extra). Nivel 6 con R completás kills.', en: 'Poke with E (AoE zone that explodes for damage). Q for root if they approach — hits 2 targets. Auto after abilities for passive (extra damage). Level 6 with R completes kills.' },
      mid: { es: 'Q+E+R = one-shot a cualquier squishy. El CD de R es bajísimo — usalo para waveclear, poke, o kills. Si pegás Q de lejos, E+R es kill. Buscá picks desde la niebla de guerra.', en: 'Q+E+R = one-shot any squishy. R CD is very low — use for waveclear, poke, or kills. If you land Q from far, E+R is kill. Look for picks from fog of war.' },
      late: { es: 'Tu R con 3+ items one-shotea a cualquier squishy y tiene 30 segundos de CD. Pokeá con E antes de la pelea. Un buen Q → E → R en 2+ personas gana la teamfight.', en: 'Your R with 3+ items one-shots any squishy and has 30 second CD. Poke with E before the fight. A good Q → E → R on 2+ people wins the teamfight.' }
    },
    combo: {
      basic: { keys: 'E → AA', es: 'E zona de slow → Auto para pasiva (daño extra). Poke simple y seguro.', en: 'E slow zone → Auto for passive (extra damage). Simple safe poke.' },
      advanced: { keys: 'Q → E → R → AA', es: 'Q root → E inmediata → R laser antes de que E explote (los dos pegan al root) → Auto pasiva para rematar. Todo pega mientras están rooteados.', en: 'Q root → immediate E → R laser before E detonates (both hit on root) → Passive auto to finish. Everything hits while rooted.' }
    },
    buildReasoning: { es: 'Luden\'s para burst y pen mágica. Shadowflame para más pen. Rabadon\'s para que R one-shotee. Horizon Focus para daño extra en targets CC\'d por Q (sinergia perfecta).', en: 'Luden\'s for burst and magic pen. Shadowflame for more pen. Rabadon\'s so R one-shots. Horizon Focus for extra damage on targets CC\'d by Q (perfect synergy).' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: poke y waveclear principal. Q segundo: más daño y menor CD del root. W último: el shield escala poco.', en: 'E first: main poke and waveclear. Q second: more damage and lower root CD. W last: shield scales poorly.' }
  },
  Malphite: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Tanque de top con la R más simple y efectiva del juego. R = dash imparable + knockup AoE. Flash+R en el carry enemigo es game over. Anti-AD natural con armadura de pasiva.', en: 'Top tank with the simplest and most effective R in the game. R = unstoppable dash + AoE knockup. Flash+R on enemy carry is game over. Natural anti-AD with passive armor.' },
    gameplan: {
      early: { es: 'Jugá pasivo y farmeá. Q para poke (roba MS). Tu pasiva te da un shield de % vida cada cierto tiempo. Contra AD stackeá armadura — con Tabis + Bramble sos inmune al daño físico.', en: 'Play passive and farm. Q for poke (steals MS). Passive gives % health shield periodically. Against AD stack armor — with Tabis + Bramble you\'re immune to physical damage.' },
      mid: { es: 'Nivel 6 tu R cambia todo. Flash+R en el ADC o mago enemigo = muere. En objetivos, buscá R en 2-3 personas. Tu R es imparable — nada la cancela.', en: 'Level 6 your R changes everything. Flash+R on enemy ADC or mage = dead. At objectives, look for R on 2-3 people. Your R is unstoppable — nothing cancels it.' },
      late: { es: 'Un buen Flash+R gana la partida entera. R en 3+ personas → tu equipo followea → win. Tu armadura stackeada te hace inmune a AD carries. W da AS + AoE de armadura.', en: 'A good Flash+R wins the entire game. R on 3+ people → team follows → win. Stacked armor makes you immune to AD carries. W gives AS + AoE from armor.' }
    },
    combo: {
      basic: { keys: 'R → Q → W → E', es: 'R knockup AoE → Q slow → W empowered autos → E AoE slow (escala con armadura). Simple y devastador.', en: 'R AoE knockup → Q slow → W empowered autos → E AoE slow (scales with armor). Simple and devastating.' },
      advanced: { keys: 'Flash → R → E → Q → W', es: 'Flash para extender rango → R knockup en el grupo → E slow AoE → Q para steal MS → W para autos. El Flash+R tiene rango absurdo.', en: 'Flash to extend range → R knockup on group → E AoE slow → Q to steal MS → W for autos. Flash+R has absurd range.' }
    },
    buildReasoning: { es: 'Full armadura vs AD: Frozen Heart + Randuin\'s + Thornmail. Tu E y W escalan con armadura así que más armadura = más daño también. Vs AP: Force of Nature.', en: 'Full armor vs AD: Frozen Heart + Randuin\'s + Thornmail. Your E and W scale with armor so more armor = more damage too. Vs AP: Force of Nature.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: poke en lane y MS steal. E segundo: AoE que escala con armadura. W último: el steroid es útil con un punto.', en: 'Q first: lane poke and MS steal. E second: AoE that scales with armor. W last: steroid is useful with one point.' }
  },
  Malzahar: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Mago de mid que supprimé con R. R es un canal de supresión point-and-click que NO SE PUEDE esquivar (solo QSS la saca). Pusheás waves infinitamente con voidlings y space aids.', en: 'Mid mage who suppresses with R. R is a point-and-click suppression channel that CANNOT be dodged (only QSS removes it). Push waves infinitely with voidlings and space aids.' },
    gameplan: {
      early: { es: 'Pusheá con E (space aids — rebota entre minions que mueren) + W voidlings. Tu pasiva te da un spellshield cada cierto tiempo. Farmeá y esperá 6 para tu R de supresión.', en: 'Push with E (space aids — bounces between dying minions) + W voidlings. Passive gives spellshield periodically. Farm and wait for 6 for your suppression R.' },
      mid: { es: 'Tu R supprime al carry enemigo por 2.5 segundos — es la habilidad de pick más fuerte del juego (point-and-click). Cuando tu jungler gankea, R = kill garantizada. En objetivos, R al smiter enemigo.', en: 'Your R suppresses enemy carry for 2.5 seconds — it\'s the strongest pick ability in the game (point-and-click). When jungler ganks, R = guaranteed kill. At objectives, R the enemy smiter.' },
      late: { es: 'Flash → R al carry enemigo gana la pelea. Los voidlings pegan al target suprimido para más daño. El enemigo TIENE que comprar QSS o morir cada teamfight.', en: 'Flash → R on enemy carry wins the fight. Voidlings hit the suppressed target for more damage. Enemy HAS to buy QSS or die every teamfight.' }
    },
    combo: {
      basic: { keys: 'E → W → Q', es: 'E space aids → W voidlings (atacan al target con E) → Q silence. Los voidlings hacen mucho DPS al target debuffed.', en: 'E space aids → W voidlings (attack E target) → Q silence. Voidlings deal lots of DPS to debuffed target.' },
      advanced: { keys: 'Q → E → W → R', es: 'Q silence primero → E space aids → W voidlings → R supresión. El target está silenciado + suprimido + comido por voidlings. Muerte segura.', en: 'Q silence first → E space aids → W voidlings → R suppression. Target is silenced + suppressed + eaten by voidlings. Certain death.' }
    },
    buildReasoning: { es: 'Liandry\'s porque tu E y R son DoT (daño por tiempo) — la quemadura se aplica constantemente. Rylai\'s para slow permanente con E y voidlings. Void Staff si stackean MR.', en: 'Liandry\'s because E and R are DoT (damage over time) — burn applies constantly. Rylai\'s for permanent slow with E and voidlings. Void Staff if they stack MR.' },
    skillOrder: { order: 'E > W > Q', es: 'E primero: tu waveclear y daño principal. W segundo: más voidlings y daño. Q último: el silence es útil con un punto.', en: 'E first: main waveclear and damage. W second: more voidlings and damage. Q last: silence is useful with one point.' }
  },
  Maokai: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Tanque support/top con CC masivo. Q knockback, W root point-and-click, E saplings de visión, R ola de raíces que rootea a todos. Imposible de matar gracias a curación de pasiva.', en: 'Tank support/top with massive CC. Q knockback, W point-and-click root, E vision saplings, R root wave that roots everyone. Impossible to kill thanks to passive healing.' },
    gameplan: {
      early: { es: 'Como support: pokeá con E saplings en bushes (hacen más daño en bush). W point-and-click root para ganks del jungler. Q para knockback si el enemigo se acerca. Pasiva cura con autos.', en: 'As support: poke with E saplings in bushes (deal more damage in bush). W point-and-click root for jungler ganks. Q for knockback if enemy approaches. Passive heals with autos.' },
      mid: { es: 'R es una ola masiva que avanza y rootea a TODOS los que toque. Tirala en un chokepoint o en engage para rootear al equipo entero. W root al carry si se deja.', en: 'R is a massive wave that advances and roots EVERYONE it touches. Cast in a chokepoint or on engage to root the entire team. W root the carry if exposed.' },
      late: { es: 'Tu CC es ridículo: R root AoE + W root + Q knockback. En teamfights, controlá al equipo enemigo con CC encadenado. Tu pasiva te cura tanto que sos un tanque eterno.', en: 'Your CC is ridiculous: R AoE root + W root + Q knockback. In teamfights, control enemy team with chained CC. Passive heals so much you\'re an eternal tank.' }
    },
    combo: {
      basic: { keys: 'W → Q → AA', es: 'W root point-and-click → Q knockback → Auto para pasiva heal. Simple y efectivo.', en: 'W point-and-click root → Q knockback → Auto for passive heal. Simple and effective.' },
      advanced: { keys: 'R → W → Q → E', es: 'R ola de raíces → W al carry rooteado → Q knockback hacia tu equipo → E saplings para más daño. CC masivo encadenado.', en: 'R root wave → W to rooted carry → Q knockback toward your team → E saplings for more damage. Massive chained CC.' }
    },
    buildReasoning: { es: 'Locket para shield de equipo. Frozen Heart vs AD pesado. Force of Nature vs AP. Tu pasiva te cura así que más vida y resistencias = más curación.', en: 'Locket for team shield. Frozen Heart vs heavy AD. Force of Nature vs AP. Passive heals you so more health and resistances = more healing.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero (support): poke de saplings en bushes. Q segundo: más knockback daño. W último: el root es point-and-click, no necesita niveles.', en: 'E first (support): sapling poke in bushes. Q second: more knockback damage. W last: root is point-and-click, doesn\'t need levels.' }
  },
  MasterYi: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'Jungler melee hypercarry. Q te hace untargeteable, W cura, E da true damage, R te da speed y AS masivos. Farmea rápido, escalá, y 1v5 en late game. Resets en kills.', en: 'Melee hypercarry jungler. Q makes you untargetable, W heals, E gives true damage, R gives massive speed and AS. Farm fast, scale, and 1v5 late game. Resets on kills.' },
    gameplan: {
      early: { es: 'Full clear rápido con Q Alpha Strike + E true damage. No fuerces ganks temprano — sos débil en 2v2. Farmeá hasta Guinsoo\'s. Post-6 podés duelear mejor con R.', en: 'Fast full clear with Q Alpha Strike + E true damage. Don\'t force early ganks — weak in 2v2. Farm to Guinsoo\'s. Post-6 can duel better with R.' },
      mid: { es: 'Con Guinsoo\'s + BOTRK tu DPS es insano. Buscá picks en gente sola. Q para esquivar CC clave (ej: esquivá una ulti con Q untargeteable). R para perseguir — nadie te escapa.', en: 'With Guinsoo\'s + BOTRK your DPS is insane. Look for picks on solo people. Q to dodge key CC (e.g.: dodge an ult with Q untargetable). R to chase — nobody escapes you.' },
      late: { es: 'Sos un monstruo. Q entre targets, R para AS/MS, E true damage. Si sacás un kill, Q resetea parcialmente. W para healear entre autos. Podés literalmente 1v5 si estás ahead.', en: 'You\'re a monster. Q between targets, R for AS/MS, E true damage. Get a kill and Q partially resets. W to heal between autos. Can literally 1v5 if ahead.' }
    },
    combo: {
      basic: { keys: 'R → E → Q → AA → AA → AA', es: 'R para speed + AS → E true damage → Q al target → Autos con AS ridícula. Simple pero letal.', en: 'R for speed + AS → E true damage → Q to target → Autos with ridiculous AS. Simple but lethal.' },
      advanced: { keys: 'R → E → AA → Q(esquivar CC) → AA → W(reset auto) → AA', es: 'R+E → Auto → Q para esquivar CC o burst enemigo (sos untargeteable) → Auto → W cancel instantáneo para auto reset → Auto. Maximiza DPS.', en: 'R+E → Auto → Q to dodge CC or enemy burst (untargetable) → Auto → instant W cancel for auto reset → Auto. Maximizes DPS.' }
    },
    buildReasoning: { es: 'Guinsoo\'s es core — convierte crit en on-hit que aplica E true damage y BOTRK más seguido. BOTRK para % vida. Wit\'s End para MR + on-hit. Kraken Slayer alternativa.', en: 'Guinsoo\'s is core — converts crit to on-hit that applies E true damage and BOTRK more often. BOTRK for % health. Wit\'s End for MR + on-hit. Kraken Slayer alternative.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño + menor CD + resets. E segundo: más true damage. W último: heal no necesita niveles para el auto reset trick.', en: 'Q first: damage + lower CD + resets. E second: more true damage. W last: heal doesn\'t need levels for auto reset trick.' }
  },
  Mel: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: { es: 'Maga de mid con poke y control de zona. Manipulás el campo de batalla con habilidades de largo alcance. Tu kit gira alrededor de posicionar tus habilidades para maximizar daño.', en: 'Mid mage with poke and zone control. You manipulate the battlefield with long range abilities. Your kit revolves around positioning abilities to maximize damage.' },
    gameplan: {
      early: { es: 'Pokeá desde distancia segura con Q y W. Farmeá con habilidades. Tu early es decente pero escalás mejor. Jugá respetando el rango de tus habilidades.', en: 'Poke from safe distance with Q and W. Farm with abilities. Your early is decent but you scale better. Play respecting your ability range.' },
      mid: { es: 'Con items tu poke empieza a doler mucho. Controlá zonas antes de objetivos. Tu R es tu herramienta de teamfight principal — usala para burst AoE.', en: 'With items your poke starts hurting a lot. Control zones before objectives. Your R is your main teamfight tool — use for AoE burst.' },
      late: { es: 'Tu daño AoE es excelente en teamfights. Posicionate atrás y usá tu rango. Un buen R en un grupo de enemigos puede ganar la pelea sola.', en: 'Your AoE damage is excellent in teamfights. Position back and use your range. A good R on a group of enemies can win the fight alone.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q para poke → W para daño adicional → Auto si es seguro. Mantené distancia.', en: 'Q for poke → W for additional damage → Auto if safe. Maintain distance.' },
      advanced: { keys: 'E → R → Q → W', es: 'E para setup → R burst AoE → Q → W para maximizar daño. Usá E para controlar el posicionamiento enemigo.', en: 'E for setup → R AoE burst → Q → W to maximize damage. Use E to control enemy positioning.' }
    },
    buildReasoning: { es: 'Luden\'s para burst y pen mágica en tu poke. Shadowflame para más pen. Rabadon\'s para multiplicar tu daño AoE. Zhonya\'s para seguridad.', en: 'Luden\'s for burst and magic pen on poke. Shadowflame for more pen. Rabadon\'s to multiply AoE damage. Zhonya\'s for safety.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: poke y daño principal. W segundo: más utilidad y daño. E último: la utilidad es buena con un punto.', en: 'Q first: main poke and damage. W second: more utility and damage. E last: utility is good with one point.' }
  },
  Milio: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: { es: 'Enchantera que amplifica el rango de ataque de aliados con pasiva y los cura/protege. R es un cleanse AoE que saca TODOS los CC del equipo + cura. El anti-engage definitivo.', en: 'Enchanter who amplifies ally attack range with passive and heals/protects them. R is an AoE cleanse that removes ALL CC from team + heals. The definitive anti-engage.' },
    gameplan: {
      early: { es: 'Tu pasiva da rango extra al ADC — esto es enorme en trades. E shield al ADC + rango extra = domina trades. Q knockback si el enemigo se acerca. W zona de curación.', en: 'Your passive gives extra range to ADC — this is huge in trades. E shield to ADC + extra range = dominate trades. Q knockback if enemy approaches. W healing zone.' },
      mid: { es: 'Tu R es ANTI-TODO. Si Malzahar R a tu ADC, R lo limpia. Si Leona engagea, R limpia todo el CC. Siempre guardá R para contrarrestar el engage enemigo.', en: 'Your R is ANTI-EVERYTHING. If Malzahar R your ADC, R cleanses it. If Leona engages, R cleanses all CC. Always save R to counter enemy engage.' },
      late: { es: 'R en el momento correcto gana teamfights sola. Cleanse AoE + heal es ridículo. E shield constante + pasiva de rango en tu carry. Sos el mejor peeler contra equipos de CC.', en: 'R at the right moment wins teamfights alone. AoE cleanse + heal is ridiculous. Constant E shield + range passive on carry. Best peeler against CC teams.' }
    },
    combo: {
      basic: { keys: 'E(carry) → Q', es: 'E shield al carry (da rango y MS) → Q si alguien se acerca para knockback. Mantené al carry seguro.', en: 'E shield carry (gives range and MS) → Q if someone approaches for knockback. Keep carry safe.' },
      advanced: { keys: 'E(carry) → W(zona) → R(si CC)', es: 'E shield → W zona de curación bajo el equipo → R instantáneo si el enemigo engagea con CC. El timing de R es todo.', en: 'E shield → W healing zone under team → instant R if enemy engages with CC. R timing is everything.' }
    },
    buildReasoning: { es: 'Moonstone para curación constante que amplifica tu W. Ardent Censer para AS + on-hit del carry con tu E. Redemption para más curación AoE.', en: 'Moonstone for constant healing that amplifies W. Ardent Censer for carry AS + on-hit with E. Redemption for more AoE healing.' },
    skillOrder: { order: 'E > W > Q', es: 'E primero: más shield y más rango para tu carry. W segundo: mejor zona de curación. Q último: knockback no necesita niveles.', en: 'E first: more shield and more range for carry. W second: better healing zone. Q last: knockback doesn\'t need levels.' }
  },
  MissFortune: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'mid',
    identity: { es: 'ADC con la ulti de teamfight más devastadora. R es un channel AoE en cono que hace daño absurdo. Q rebota para poke letal. Fuerte en lane con autos de pasiva.', en: 'ADC with the most devastating teamfight ult. R is a cone AoE channel that deals absurd damage. Q bounces for lethal poke. Strong in lane with passive autos.' },
    gameplan: {
      early: { es: 'Tu pasiva Love Tap hace daño extra cuando cambias de target — alterná autos entre minions y campeones. Q rebota y si mata el primer target, el rebote crit. Pokeá con Q bounces.', en: 'Passive Love Tap deals extra damage when switching targets — alternate autos between minions and champions. Q bounces and if it kills first target, bounce crits. Poke with Q bounces.' },
      mid: { es: 'Tu R en un chokepoint o detrás de un engage aliado hace daño nuclear. Buscá peleas en dragón/baron donde el equipo esté agrupado. Un R bien posicionado mata a 3 personas.', en: 'Your R in a chokepoint or behind an ally engage deals nuclear damage. Look for fights at dragon/baron where the team is grouped. A well-positioned R kills 3 people.' },
      late: { es: 'Posicionate para R. Un buen R + Amumu/Malphite/Leona CC = penta kill. El daño AoE es el más alto del juego para un ADC. Si te interrumpen R, perdés todo tu daño.', en: 'Position for R. A good R + Amumu/Malphite/Leona CC = penta kill. AoE damage is the highest in the game for an ADC. If they interrupt R, you lose all your damage.' }
    },
    combo: {
      basic: { keys: 'Q(en minion) → AA', es: 'Q al minion bajo de vida → rebota al campeón detrás con crit. Es tu poke principal y hace daño absurdo.', en: 'Q to low health minion → bounces to champion behind with crit. Main poke and deals absurd damage.' },
      advanced: { keys: 'E → R', es: 'E slow AoE → R channel inmediato. El slow de E mantiene a los enemigos dentro del cono de R. Simple pero letal.', en: 'E AoE slow → immediate R channel. E slow keeps enemies inside R cone. Simple but lethal.' }
    },
    buildReasoning: { es: 'Collector para lethality + ejecución en tu R. Infinity Edge para crit que amplifica R y Q bounce. Lord Dominik\'s para penetración en R. Opportunity para más lethality.', en: 'Collector for lethality + execution on R. Infinity Edge for crit that amplifies R and Q bounce. Lord Dominik\'s for R penetration. Opportunity for more lethality.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: poke y daño principal. W segundo: más AS y MS. E último: slow es útil con un punto.', en: 'Q first: main poke and damage. W second: more AS and MS. E last: slow is useful with one point.' }
  },
  Mordekaiser: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: { es: 'Bruiser AP de top que secuestra gente al Death Realm con R. Tu R te manda a un 1v1 forzado con el target y le robás stats. Si ganás el 1v1 (siempre ganás), quedás con sus stats.', en: 'Top AP bruiser who kidnaps people to the Death Realm with R. Your R forces a 1v1 with the target and steals their stats. If you win the 1v1 (you always win), you keep their stats.' },
    gameplan: {
      early: { es: 'Tradeá con Q (mazazo que hace más daño si pega aislado). E pull para atraer al enemigo → Q → pasiva se activa (aura de daño AoE). Tu sustain con W shield/heal te mantiene en lane.', en: 'Trade with Q (hammer that deals more damage if isolated). E pull to drag enemy → Q → passive activates (AoE damage aura). Sustain with W shield/heal keeps you in lane.' },
      mid: { es: 'R al carry enemigo en teamfight y matalo en el Death Realm 1v1. Mientras tu equipo pelea 4v4, vos matás al carry y volvés con stats robados. Es insanamente fuerte.', en: 'R the enemy carry in teamfight and kill them in Death Realm 1v1. While your team fights 4v4, you kill the carry and return with stolen stats. Insanely strong.' },
      late: { es: 'R al amenaza más grande del equipo enemigo (ADC o mago fed). Con Riftmaker + Rylai\'s nadie escapa de vos en el Death Realm. Pasiva activada + Q = el target muere seguro.', en: 'R the biggest threat on enemy team (fed ADC or mage). With Riftmaker + Rylai\'s nobody escapes you in Death Realm. Active passive + Q = target dies for sure.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA → AA → AA(pasiva activa)', es: 'E pull → Q mazazo → 3 autos para activar pasiva AoE → Pasiva drainea vida alrededor tuyo. El pull garantiza Q.', en: 'E pull → Q hammer → 3 autos to activate AoE passive → Passive drains life around you. Pull guarantees Q.' },
      advanced: { keys: 'R → E → Q → AA → W → AA → AA → Q', es: 'R secuestrar al carry → E pull en el Death Realm → Q → Autos + W para shield → Más autos → Q de nuevo. No hay escape del 1v1.', en: 'R kidnap carry → E pull in Death Realm → Q → Autos + W for shield → More autos → Q again. No escape from the 1v1.' }
    },
    buildReasoning: { es: 'Riftmaker para omnivamp + daño que crece en peleas largas — perfecto para 1v1 en Death Realm. Rylai\'s para slow permanente con pasiva. Zhonya\'s para sobrevivir post-Death Realm.', en: 'Riftmaker for omnivamp + damage that grows in long fights — perfect for 1v1 in Death Realm. Rylai\'s for permanent slow with passive. Zhonya\'s to survive post-Death Realm.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño principal de mazazo. E segundo: menor CD del pull. W último: el shield/heal escala con daño recibido, no niveles.', en: 'Q first: main hammer damage. E second: lower pull CD. W last: shield/heal scales with damage taken, not levels.' }
  },
  Morgana: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Support/mid con el root más largo del juego (Q 3 segundos). E es un spellshield que bloquea TODO el daño mágico y CC. R stun AoE si te quedás cerca. Anti-engage perfecta.', en: 'Support/mid with the longest root in the game (Q 3 seconds). E is a spellshield that blocks ALL magic damage and CC. R AoE stun if you stay close. Perfect anti-engage.' },
    gameplan: {
      early: { es: 'Pokeá con W (charco que hace daño constante — reduce CD de pasiva). Q root de 3 segundos es kill si tu ADC followea. E spellshield en tu ADC contra hooks/engage.', en: 'Poke with W (pool that deals constant damage — reduces passive CD). 3-second Q root is a kill if ADC follows. E spellshield on ADC against hooks/engage.' },
      mid: { es: 'Q root en cualquier target aislado = kill. E spellshield bloquea hooks de Blitz, Thresh, etc. En peleas, R + Zhonya\'s para stun AoE al grupo.', en: 'Q root on any isolated target = kill. E spellshield blocks Blitz, Thresh hooks, etc. In fights, R + Zhonya\'s for AoE group stun.' },
      late: { es: 'Q root de 3 segundos pilla a cualquiera. E protege al carry de CC. R → Zhonya\'s en un grupo para stun AoE masivo. Una Morgana Q puede ganar la partida entera.', en: 'Q 3-second root catches anyone. E protects carry from CC. R → Zhonya\'s on a group for massive AoE stun. One Morgana Q can win the entire game.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q root (3 segundos) → W charco debajo del rooteado → Auto. El root garantiza todo el daño de W.', en: 'Q root (3 seconds) → W pool under rooted target → Auto. Root guarantees all W damage.' },
      advanced: { keys: 'R → Zhonya\'s → Q → W', es: 'R en el grupo (slow + stun si se quedan) → Zhonya\'s para sobrevivir el channel → Q al que intente escapar → W debajo. El combo de engage.', en: 'R on group (slow + stun if they stay) → Zhonya\'s to survive channel → Q whoever tries to escape → W underneath. The engage combo.' }
    },
    buildReasoning: { es: 'Zhonya\'s es core si engageás con R. Imperial Mandate para poke con Q+W. Shurelya\'s para speed del equipo. Banshee\'s para AP build.', en: 'Zhonya\'s is core if engaging with R. Imperial Mandate for poke with Q+W. Shurelya\'s for team speed. Banshee\'s for AP build.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: root más largo y más daño. W segundo: waveclear y DPS. E último: spellshield no escala en duración, solo daño absorbido.', en: 'Q first: longer root and more damage. W second: waveclear and DPS. E last: spellshield doesn\'t scale duration, only absorbed damage.' }
  },
  Naafiri: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin AD simple con perros que te ayudan a pelear. Q es tu poke principal, W es un dash largo que pega con la manada, R te da un dash extra y potencia a la manada.', en: 'Simple AD assassin with dogs that help you fight. Q is main poke, W is a long dash that hits with the pack, R gives extra dash and empowers the pack.' },
    gameplan: {
      early: { es: 'Pokeá con Q (doble hit si el target está aislado). Tus perros ayudan a tradear — se lanzan al target. W para dash agresivo o escape. Nivel 3 trades son fuertes.', en: 'Poke with Q (double hit if target is isolated). Dogs help trade — they lunge at target. W for aggressive dash or escape. Level 3 trades are strong.' },
      mid: { es: 'Con Profane Hydra + lethality tu burst es excelente. Roameá y matá gente. R te da MS, dash extra y potencia a los perros. Buscá targets solos.', en: 'With Profane Hydra + lethality your burst is excellent. Roam and kill people. R gives MS, extra dash and empowers dogs. Look for solo targets.' },
      late: { es: 'Flanqueá y buscá al carry. R → W dash largo → Q burst → los perros hacen el resto. Es una de las assassins más simples — si entrás, hacés daño.', en: 'Flank and find the carry. R → long W dash → Q burst → dogs do the rest. One of the simplest assassins — if you go in, you deal damage.' }
    },
    combo: {
      basic: { keys: 'Q → Q(segundo cast) → W', es: 'Q doble para poke → W si querés entrar para all-in. Los perros se lanzan automáticamente.', en: 'Double Q for poke → W if you want to go in for all-in. Dogs lunge automatically.' },
      advanced: { keys: 'R → W → Q → Q → AA', es: 'R para empower + dash → W dash largo al target → Q×2 burst → Auto. Los perros empowered hacen mucho daño extra.', en: 'R for empower + dash → long W dash to target → Q×2 burst → Auto. Empowered dogs deal lots of extra damage.' }
    },
    buildReasoning: { es: 'Profane Hydra para burst AoE + lethality. Youmuu\'s para movilidad y lethality. Edge of Night para spellshield al entrar. Serylda\'s para slow y pen.', en: 'Profane Hydra for AoE burst + lethality. Youmuu\'s for mobility and lethality. Edge of Night for spellshield on entry. Serylda\'s for slow and pen.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño y poke principal. W segundo: menor CD del dash largo. E último (pasiva perros): escala sola.', en: 'Q first: main damage and poke. W second: lower long dash CD. E last (dog passive): scales on its own.' }
  },
  Nami: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'early',
    identity: { es: 'Enchantera agresiva con la mejor sinergia de botlane. W rebota curación y daño entre aliado y enemigo. E empodera autos aliados con slow. R tsunami AoE knockup. Lucian+Nami es legendario.', en: 'Aggressive enchanter with the best botlane synergy. W bounces heal and damage between ally and enemy. E empowers ally autos with slow. R tsunami AoE knockup. Lucian+Nami is legendary.' },
    gameplan: {
      early: { es: 'W rebota: cura aliado → daña enemigo → cura aliado (o viceversa). E en tu ADC antes de que pegue — cada auto slowa. Q bubble para stun si ves la oportunidad.', en: 'W bounces: heals ally → damages enemy → heals ally (or vice versa). E on ADC before they hit — each auto slows. Q bubble for stun if you see the opportunity.' },
      mid: { es: 'E en tu carry antes de peleas — sus autos slowean. Tu pasiva da MS a aliados que reciben tus habilidades. R tsunami para engage o counter-engage.', en: 'E on carry before fights — their autos slow. Passive gives MS to allies hit by your abilities. R tsunami for engage or counter-engage.' },
      late: { es: 'R tsunami bien tirado es un engage AoE devastador. W curación constante en peleas. E en el ADC para slows. Tu equipo con Nami se mueve más rápido y pega más fuerte.', en: 'Well-aimed R tsunami is a devastating AoE engage. Constant W healing in fights. E on ADC for slows. Your team with Nami moves faster and hits harder.' }
    },
    combo: {
      basic: { keys: 'E(ADC) → W → Q', es: 'E empodera autos del ADC → W bounce para curar y dañar → Q bubble si el slow de E los mantiene quietos.', en: 'E empowers ADC autos → W bounce to heal and damage → Q bubble if E slow keeps them still.' },
      advanced: { keys: 'R → Q → E(carry) → W', es: 'R tsunami knockup → Q bubble donde caen → E al carry para más slow → W para curar y dañar. CC encadenado brutal.', en: 'R tsunami knockup → Q bubble where they land → E carry for more slow → W to heal and damage. Brutal chained CC.' }
    },
    buildReasoning: { es: 'Moonstone para curación amplificada con W bounce. Ardent Censer con E — cada auto del carry con E prockea Ardent. Staff of Flowing Water para AP del equipo.', en: 'Moonstone for amplified healing with W bounce. Ardent Censer with E — each carry auto with E procs Ardent. Staff of Flowing Water for team AP.' },
    skillOrder: { order: 'W > E > Q', es: 'W primero: curación y daño principal. E segundo: más slow y más buff para el carry. Q último: bubble stun no escala en duración.', en: 'W first: main healing and damage. E second: more slow and more buff for carry. Q last: bubble stun doesn\'t scale in duration.' }
  },
  Nasus: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Tanque de top que stackea Q infinitamente. Cada minion que matás con Q te da stacks permanentes de daño. En late game tu Q one-shotea cosas. R te hace un monstruo de tamaño y stats.', en: 'Top tank who stacks Q infinitely. Each minion killed with Q gives permanent damage stacks. Late game your Q one-shots things. R makes you a giant stat monster.' },
    gameplan: {
      early: { es: 'SOLO farmeá stacks de Q. Cada minion melee = +3, cannon = +6, campeón = +6. No pelees, no tradees, solo Q last-hits. Dejá que te empujen bajo torre y Q ahí.', en: 'ONLY farm Q stacks. Each melee minion = +3, cannon = +6, champion = +6. Don\'t fight, don\'t trade, just Q last-hits. Let them push you under tower and Q there.' },
      mid: { es: 'Con 200+ stacks y Sheen empezás a doler. W es un slow brutal (99% AS slow). Splitpusheá y forzá 1v1 — con stacks suficientes ganás contra casi todos. R para peleas.', en: 'With 200+ stacks and Sheen you start hurting. W is a brutal slow (99% AS slow). Splitpush and force 1v1 — with enough stacks you beat almost everyone. R for fights.' },
      late: { es: 'Con 500+ stacks tu Q hace 700+ daño. Torres caen en 4 Qs. Splitpusheá y nadie te para. R te da 300+ vida, rango, AoE daño %. Sos un jefe final.', en: 'With 500+ stacks your Q does 700+ damage. Towers fall in 4 Qs. Splitpush and nobody stops you. R gives 300+ health, range, % AoE damage. You\'re a final boss.' }
    },
    combo: {
      basic: { keys: 'W → Q → AA', es: 'W slow → Q empowered auto (stacks) → Auto. Simple. Tu Q con stacks ES tu combo.', en: 'W slow → Q empowered auto (stacks) → Auto. Simple. Your Q with stacks IS your combo.' },
      advanced: { keys: 'R → W → E → Q → AA → Q → AA', es: 'R para stats y tamaño → W slow → E armor reduction AoE → Q empowered → Auto → Repetir Q cada 3 segundos. El E reduce armadura para que Q pegue más.', en: 'R for stats and size → W slow → E AoE armor reduction → Q empowered → Auto → Repeat Q every 3 seconds. E reduces armor so Q hits harder.' }
    },
    buildReasoning: { es: 'Trinity Force para Spellblade con Q cada 3 segundos — daño absurdo. Frozen Heart para CDR (más Qs) y armadura. Spirit Visage para curación de pasiva (lifesteal en Q).', en: 'Trinity Force for Spellblade with Q every 3 seconds — absurd damage. Frozen Heart for CDR (more Qs) and armor. Spirit Visage for passive healing (Q lifesteal).' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero SIEMPRE: más daño de stack, menor CD. W segundo: slow más fuerte y duración más larga. E último: armor reduction es útil con un punto.', en: 'Q first ALWAYS: more stack damage, lower CD. W second: stronger slow and longer duration. E last: armor reduction is useful with one point.' }
  },
  Nautilus: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Support tanque con más CC que cualquier otro campeón. Pasiva root en auto, Q hook, E slow, R knockup que viaja por el suelo. Si Nautilus te agarra, no te movés por 4 segundos.', en: 'Tank support with more CC than any other champion. Passive root on auto, Q hook, E slow, R knockup that travels through ground. If Nautilus catches you, you don\'t move for 4 seconds.' },
    gameplan: {
      early: { es: 'Nivel 1 auto root de pasiva + Aftershock es un trade ganado gratis. Q hook es más fácil de pegar que Blitz Q. Nivel 2 con Q+E o Q+AA(root) es kill en muchas lanes.', en: 'Level 1 passive auto root + Aftershock is a free winning trade. Q hook is easier to land than Blitz Q. Level 2 with Q+E or Q+AA(root) is kill in many lanes.' },
      mid: { es: 'Tu R es point-and-click knockup que viaja por el suelo knockeando a TODOS en el camino. R al carry → camina a todo el equipo para llegar → knockup masivo.', en: 'Your R is point-and-click knockup that travels through ground knocking up EVERYONE in the way. R the carry → walks through everyone → massive knockup.' },
      late: { es: 'Flash Q o R al carry gana peleas. Tu cadena de CC: Q hook → AA root → E slow → R knockup = 4+ segundos de CC. Ningún otro support tiene tanto CC.', en: 'Flash Q or R on carry wins fights. CC chain: Q hook → AA root → E slow → R knockup = 4+ seconds of CC. No other support has this much CC.' }
    },
    combo: {
      basic: { keys: 'Q → AA(root) → E', es: 'Q hook → Auto con root de pasiva → E slow. Cadena de CC simple pero efectiva.', en: 'Q hook → Passive root auto → E slow. Simple but effective CC chain.' },
      advanced: { keys: 'R → Q → AA(root) → E', es: 'R knockup point-and-click → Q hook cuando caen → Auto root → E slow. 4 formas de CC en una combo. El target no se mueve.', en: 'R point-and-click knockup → Q hook when they land → Auto root → E slow. 4 forms of CC in one combo. Target doesn\'t move.' }
    },
    buildReasoning: { es: 'Locket para shield AoE del equipo. Frozen Heart vs AD. Force of Nature vs AP. Mobi Boots para roaming. Full tanque porque tu valor está en el CC, no el daño.', en: 'Locket for AoE team shield. Frozen Heart vs AD. Force of Nature vs AP. Mobi Boots for roaming. Full tank because your value is CC, not damage.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: menor CD del hook, más daño. E segundo: más slow y daño. W último: el shield escala con vida.', en: 'Q first: lower hook CD, more damage. E second: more slow and damage. W last: shield scales with health.' }
  },
  Neeko: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Maga con disfraz y engage de R. Podés disfrazarte como un aliado y sorprender con R AoE stun. Q hace daño AoE, E root que pasa a través de minions. Tu R disfrazada es letal.', en: 'Disguise mage with R engage. You can disguise as an ally and surprise with AoE stun R. Q deals AoE damage, E root that passes through minions. Disguised R is lethal.' },
    gameplan: {
      early: { es: 'E root a través de la wave (rootea más si pasa por minions primero). Q AoE para poke y farm. Tu auto de 3 stacks hace daño extra. Tradeá con E+Q+auto empowered.', en: 'E root through wave (roots longer if it passes through minions first). Q AoE for poke and farm. 3-stack auto deals extra damage. Trade with E+Q+empowered auto.' },
      mid: { es: 'Disfrazáte como tu jungler o support y acercáte al equipo enemigo. Cuando estés en rango: R → stun AoE masivo. Nadie espera que el "support" tire una R de Neeko.', en: 'Disguise as your jungler or support and walk up to enemy team. When in range: R → massive AoE stun. Nobody expects the "support" to throw a Neeko R.' },
      late: { es: 'Flash + R (o disfraz + R) en un grupo = stun a todo el equipo. Zhonya\'s durante el channel de R para seguridad. Tu R + follow-up del equipo = teamfight ganada.', en: 'Flash + R (or disguise + R) on a group = stun entire team. Zhonya\'s during R channel for safety. Your R + team follow-up = teamfight won.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA(empowered)', es: 'E root → Q AoE sobre el root → Auto empowered (3 stacks). Buen trade.', en: 'E root → Q AoE on root → Empowered auto (3 stacks). Good trade.' },
      advanced: { keys: 'Pasiva(disfraz) → R → Flash → Zhonya\'s → E → Q', es: 'Disfrazarte → Acercarte → R channel → Flash para posicionar → Zhonya\'s durante stun → E root → Q. El enemigo no puede reaccionar.', en: 'Disguise → Walk up → R channel → Flash to position → Zhonya\'s during stun → E root → Q. Enemy can\'t react.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt para gap close extra en el R engage. Zhonya\'s para sobrevivir el channel de R. Shadowflame para pen. Rabadon\'s para burst.', en: 'Hextech Rocketbelt for extra gap close on R engage. Zhonya\'s to survive R channel. Shadowflame for pen. Rabadon\'s for burst.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño AoE principal. E segundo: menor CD del root. W último: el disfraz y clon no necesitan niveles.', en: 'Q first: main AoE damage. E second: lower root CD. W last: disguise and clone don\'t need levels.' }
  },
  Nidalee: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'early',
    identity: { es: 'Jungler con dos formas: humana (poke ranged) y puma (burst melee). Q lanza en humano es poke de largo alcance que marca. Puma Q hace daño ejecutivo a marcados. Muy difícil de jugar.', en: 'Jungler with two forms: human (ranged poke) and cougar (melee burst). Human Q spear is long range poke that marks. Cougar Q deals execution damage to marked. Very hard to play.' },
    gameplan: {
      early: { es: 'Tu clear es rápido alternando formas. Gankeá con lanza (Q humano) → si pega, R puma → Q puma para ejecución. Tu early es fuerte pero necesitás hacer cosas temprano porque caés.', en: 'Fast clear alternating forms. Gank with spear (human Q) → if it hits, R cougar → cougar Q for execution. Early is strong but you need to do things early because you fall off.' },
      mid: { es: 'Pokeá con lanzas antes de peleas. Si una lanza pega, saltar con puma para ejecutar. Tu E humano cura aliados — también sos un healer. Si no snowballeaste, vas a tener problemas.', en: 'Poke with spears before fights. If a spear hits, jump in cougar to execute. Human E heals allies — you\'re also a healer. If you didn\'t snowball, you\'ll have problems.' },
      late: { es: 'Caés mucho en late. Tu rol es poke con lanzas y curar aliados. Si pillás a alguien con lanza, podés ejecutarlo. Pero en teamfights 5v5 tu utilidad es limitada.', en: 'You fall off hard late. Your role is poke with spears and heal allies. If you catch someone with spear, you can execute. But in 5v5 teamfights your utility is limited.' }
    },
    combo: {
      basic: { keys: 'Q(humano) → R → W(puma) → Q(puma) → E(puma)', es: 'Q lanza → R forma puma → W salto al marcado → Q ejecución → E swipe. La ejecución al marcado es tu burst.', en: 'Q spear → R cougar form → W leap to marked → Q execution → E swipe. Execution on marked is your burst.' },
      advanced: { keys: 'Q(humano) → W(humano trap) → R → W(puma) → E(puma) → Q(puma) → R → E(humano heal)', es: 'Q lanza → W trampa → R puma → W salto → E swipe → Q ejecución → R humana → E curar aliado. Alternás formas fluidamente.', en: 'Q spear → W trap → R cougar → W leap → E swipe → Q execution → R human → E heal ally. Alternate forms fluidly.' }
    },
    buildReasoning: { es: 'Hextech Rocketbelt para gap close. Shadowflame para pen. Rabadon\'s para que la lanza y ejecución hagan daño nuclear. Zhonya\'s porque entrás en melee para ejecutar.', en: 'Hextech Rocketbelt for gap close. Shadowflame for pen. Rabadon\'s so spear and execution deal nuclear damage. Zhonya\'s because you go melee to execute.' },
    skillOrder: { order: 'Q > W > E (en humano afecta puma)', es: 'Q primero: lanza y ejecución de puma. W segundo: salto de puma y trampa humana. E último: curación humana y swipe puma.', en: 'Q first: spear and cougar execution. W second: cougar leap and human trap. E last: human heal and cougar swipe.' }
  },
  Nilah: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: { es: 'ADC melee con pasiva que comparte experiencia extra con su support. W te da dodge de autos. R AoE que cura. Fuerte en peleas bot 2v2 y escalás rápido por la XP extra.', en: 'Melee ADC with passive that shares extra XP with support. W gives auto dodge. R AoE that heals. Strong in bot 2v2 fights and scale fast due to extra XP.' },
    gameplan: {
      early: { es: 'Tu pasiva te da más XP así que llegás a nivel 6 antes. W te hace esquivar autos — usalo en trades contra la ADC enemiga. Q para poke y farm. Nivel 6 tu R es un engage fuerte.', en: 'Passive gives more XP so you hit level 6 first. W makes you dodge autos — use in trades vs enemy ADC. Q for poke and farm. Level 6 your R is a strong engage.' },
      mid: { es: 'Con tu ventaja de XP tenés niveles extra. R pull + daño + curación AoE es muy fuerte en peleas de 2v2 o skirmishes. Buscá peleas agresivas con tu support.', en: 'With XP advantage you have extra levels. R pull + damage + AoE healing is very strong in 2v2 or skirmishes. Look for aggressive fights with support.' },
      late: { es: 'R en un teamfight cura a todo tu equipo y hace daño AoE masivo. W dodge autos es enorme contra ADC enemiga. Tu DPS melee con crit es comparable a Yasuo/Yone.', en: 'R in teamfight heals entire team and deals massive AoE damage. W auto dodge is huge vs enemy ADC. Your melee crit DPS is comparable to Yasuo/Yone.' }
    },
    combo: {
      basic: { keys: 'Q → AA → AA → AA', es: 'Q empowered dash → Autos con crit. Tu Q empodera los siguientes autos.', en: 'Q empowered dash → Autos with crit. Q empowers next autos.' },
      advanced: { keys: 'Flash → R → W → Q → AA → AA', es: 'Flash al grupo → R pull AoE + curación → W dodge → Q empowered → Autos. El R pull junta a los enemigos.', en: 'Flash into group → R AoE pull + healing → W dodge → Q empowered → Autos. R pull groups enemies together.' }
    },
    buildReasoning: { es: 'Infinity Edge core para crit DPS melee. Phantom Dancer para AS y shield. Bloodthirster para sustain extra. Navori para menor CD de habilidades.', en: 'Infinity Edge core for melee crit DPS. Phantom Dancer for AS and shield. Bloodthirster for extra sustain. Navori for lower ability CD.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño y empower principal. E segundo: menor CD del dash. W último: dodge de autos es bueno con un punto.', en: 'Q first: main damage and empower. E second: lower dash CD. W last: auto dodge is good with one point.' }
  },
  Nocturne: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin jungler con R que oscurece la pantalla de TODOS los enemigos y te deja dashear a uno. El efecto de oscuridad quita visión aliada — es aterrador. Ideal para picks.', en: 'Assassin jungler with R that darkens ALL enemies\' screens and lets you dash to one. Darkness effect removes allied vision — it\'s terrifying. Ideal for picks.' },
    gameplan: {
      early: { es: 'Farmeá rápido con pasiva de AoE autos. Nivel 6 tu R cambia el juego — oscurece todo el mapa y volás al target. Pre-6 gankeá con Q (deja un trail que te da MS y AD).', en: 'Farm fast with AoE auto passive. Level 6 your R changes the game — darkens entire map and you fly to target. Pre-6 gank with Q (leaves trail giving MS and AD).' },
      mid: { es: 'R cuando un carry enemigo está solo en sidelane = kill gratis. La oscuridad impide que aliados se teleportén o reaccionen. Usá R coordinado con tu equipo para que engagen durante la oscuridad.', en: 'R when enemy carry is alone in sidelane = free kill. Darkness prevents allies from teleporting or reacting. Use R coordinated with team so they engage during darkness.' },
      late: { es: 'R para engages de equipo — la oscuridad desorienta masivamente. Volá al ADC, matalo con burst (Q+pasiva+E). W spellshield para bloquear el CC que te tiren al aterrizar.', en: 'R for team engages — darkness disorirates massively. Fly to ADC, kill with burst (Q+passive+E). W spellshield to block CC thrown at you on landing.' }
    },
    combo: {
      basic: { keys: 'Q → AA → AA → E → AA', es: 'Q trail → Autos en el trail (más AD) → E fear tether → Autos mientras el fear channela. Mantenéte cerca para que E conecte.', en: 'Q trail → Autos on trail (more AD) → E fear tether → Autos while fear channels. Stay close so E connects.' },
      advanced: { keys: 'R → R(volar) → Q → W → AA → E → AA', es: 'R oscurecer → R volar al carry → Q trail → W spellshield anticipando CC → Auto → E fear → Autos para matar.', en: 'R darken → R fly to carry → Q trail → W spellshield anticipating CC → Auto → E fear → Autos to kill.' }
    },
    buildReasoning: { es: 'Stridebreaker para slow y MS — necesitás quedarte encima del target para E. BOTRK para DPS y sustain. Death\'s Dance para sobrevivir después del burst. Black Cleaver si hay tanques.', en: 'Stridebreaker for slow and MS — need to stay on target for E. BOTRK for DPS and sustain. Death\'s Dance to survive after burst. Black Cleaver vs tanks.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño, MS, AD en el trail. E segundo: fear más rápido. W último: spellshield no necesita niveles.', en: 'Q first: damage, MS, AD on trail. E second: faster fear. W last: spellshield doesn\'t need levels.' }
  },
  Nunu: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Jungler tanque con la bola de nieve más divertida del juego. W ruedás una bola gigante que knockea y hace daño. Q tiene el mejor smite seguro (consume monstruos). Ganks de bola de nieve son imparables.', en: 'Tank jungler with the most fun snowball in the game. W rolls a giant ball that knocks up and damages. Q has the best secure smite (consumes monsters). Snowball ganks are unstoppable.' },
    gameplan: {
      early: { es: 'Clear sano con Q (consume) que cura mucho. Nivel 3 gankeá con W bola de nieve — aceleré y el knockup es casi imposible de esquivar si venís desde ángulo correcto. Q para smite seguro de objetivos.', en: 'Healthy clear with Q (consume) that heals a lot. Level 3 gank with W snowball — accelerate and knockup is nearly impossible to dodge from correct angle. Q for secure objective smite.' },
      mid: { es: 'Priorizá dragones — tu Q + smite = doble smite, imposible de robar. W bola de nieve desde fog para ganks sorpresa. En peleas, W para engage + E slow + R para daño AoE masivo si podés channelarlo.', en: 'Prioritize dragons — your Q + smite = double smite, impossible to steal. W snowball from fog for surprise ganks. In fights, W for engage + E slow + R for massive AoE damage if you can channel.' },
      late: { es: 'Tu R channelado en un bush hace daño nuclear (5 segundos de channel = daño masivo AoE + shield masivo). W engage → R channel es letal. Q sigue asegurando objetivos.', en: 'Your R channeled in a bush deals nuclear damage (5 seconds of channel = massive AoE damage + massive shield). W engage → R channel is lethal. Q keeps securing objectives.' }
    },
    combo: {
      basic: { keys: 'W → E → Q → AA', es: 'W bola de nieve knockup → E slow de bolas de nieve → Q consume → Auto. Engage simple y efectivo.', en: 'W snowball knockup → E snowball slow → Q consume → Auto. Simple effective engage.' },
      advanced: { keys: 'W(desde fog) → R(channel) → E', es: 'W bola desde bush → Inmediatamente R channel (la bola sigue rodando) → Al llegar, knockup + R explota + E slow. El daño es absurdo si el R channeleó completo.', en: 'W ball from bush → Immediately R channel (ball keeps rolling) → On arrival, knockup + R explodes + E slow. Damage is absurd if R fully channeled.' }
    },
    buildReasoning: { es: 'Iceborn Gauntlet para slow field constante. Hollow Radiance para AoE quema. Frozen Heart vs AD. Spirit Visage para curación de Q amplificada.', en: 'Iceborn Gauntlet for constant slow field. Hollow Radiance for AoE burn. Frozen Heart vs AD. Spirit Visage for amplified Q healing.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: curación de consume y daño a monstruos. W segundo: menor CD de bola de nieve. E último: slow no necesita niveles.', en: 'Q first: consume healing and monster damage. W second: lower snowball CD. E last: slow doesn\'t need levels.' }
  },
  Olaf: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Bruiser viking que es IMPARABLE con R (inmune a CC). Cuanto menos vida tenés, más rápido pegás (pasiva). R + correr al carry sin que nadie te pare es tu identidad.', en: 'Viking bruiser who is UNSTOPPABLE with R (immune to CC). Lower health = faster attacks (passive). R + running at carry with nobody stopping you is your identity.' },
    gameplan: {
      early: { es: 'Peleá todo el tiempo. Tu pasiva te da más AS cuanta menos vida tenés. Q tirás hacha y la recogés para tirar de nuevo (spammeable). W lifesteal + E true damage. Nivel 1-3 ganás casi todos los 1v1.', en: 'Fight all the time. Passive gives more AS the lower your health. Q throw axe and pick up to throw again (spammable). W lifesteal + E true damage. Levels 1-3 you win almost every 1v1.' },
      mid: { es: 'R activa → corré al carry enemigo. NADA te para — no hay stun, root, knockup que te afecte con R. Q slow para que no escapen. W para sustain. E true damage.', en: 'R active → run at enemy carry. NOTHING stops you — no stun, root, knockup affects you with R. Q slow so they can\'t escape. W for sustain. E true damage.' },
      late: { es: 'Caés un poco en late pero R sigue siendo poderosa. Ghost + R = llegás al carry sin importar cuánto CC tengan. Si estás ahead, sos imparable literalmente.', en: 'Fall off a bit late but R is still powerful. Ghost + R = reach carry regardless of how much CC they have. If ahead, you\'re literally unstoppable.' }
    },
    combo: {
      basic: { keys: 'Q → AA → Q(recoger) → AA → E', es: 'Q hacha → Auto → Recoger hacha → Tirar de nuevo → Auto → E true damage. El loop de Q es tu DPS.', en: 'Q axe → Auto → Pick up axe → Throw again → Auto → E true damage. Q loop is your DPS.' },
      advanced: { keys: 'R → Ghost → Q → W → E → Q(recoger) → AA', es: 'R unstoppable + Ghost → Q slow → W lifesteal → E true damage → Recoger Q y repetir. Nada te para.', en: 'R unstoppable + Ghost → Q slow → W lifesteal → E true damage → Pick up Q and repeat. Nothing stops you.' }
    },
    buildReasoning: { es: 'Goredrinker para curación AoE cuando estás bajo de vida (synergiza con tu pasiva). Death\'s Dance para sobrevivir. Black Cleaver para pen. Sterak\'s para shield.', en: 'Goredrinker for AoE healing when low health (synergizes with passive). Death\'s Dance to survive. Black Cleaver for pen. Sterak\'s for shield.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño, slow y menor CD. W segundo: más lifesteal y AS. E último: true damage fijo sube pero Q es mejor.', en: 'Q first: damage, slow and lower CD. W second: more lifesteal and AS. E last: fixed true damage increases but Q is better.' }
  },
  Orianna: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Maga de control con una bola que posicionás. Tu R atrae a todos hacia la bola + AoE masivo. E pone la bola en un aliado para combos. La reina de las teamfights de zona.', en: 'Control mage with a ball you position. Your R pulls everyone toward the ball + massive AoE. E places ball on ally for combos. The queen of zone teamfights.' },
    gameplan: {
      early: { es: 'Pokeá moviendo la bola con Q a través de la wave al enemigo. Auto autos hacen daño extra (pasiva). E para shield si tradean. La bola es tu zona de control — donde va la bola, el enemigo no va.', en: 'Poke by moving ball with Q through wave to enemy. Auto attacks deal extra damage (passive). E for shield if trading. Ball is your control zone — where ball goes, enemy doesn\'t.' },
      mid: { es: 'E la bola en tu engager (Malphite, Amumu, etc) → cuando engagan, tu R shockwave atrae a todos. El combo E(aliado)+R es el engage más fuerte del juego con el aliado correcto.', en: 'E ball onto your engager (Malphite, Amumu, etc) → when they engage, your R shockwave pulls everyone. E(ally)+R combo is the strongest engage in the game with the right ally.' },
      late: { es: 'Posicionate la bola perfectamente para R. Un R en 3+ personas gana la partida. Si no tenés engage aliado, Q posición la bola → Flash → R. Tu W da speed a aliados y slowa enemigos.', en: 'Position ball perfectly for R. An R on 3+ people wins the game. If no allied engage, Q position ball → Flash → R. W gives speed to allies and slows enemies.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA', es: 'Q mover bola al enemigo → W zona de speed/slow alrededor de la bola → Auto pasiva. Poke constante.', en: 'Q move ball to enemy → W speed/slow zone around ball → Passive auto. Constant poke.' },
      advanced: { keys: 'E(engager) → (esperar engage) → R → Q → W', es: 'E bola al aliado que va a engagear → Esperá que entre → R shockwave cuando está en el grupo → Q para reposicionar → W para speed/slow. El combo perfecto.', en: 'E ball on ally who will engage → Wait for them to go in → R shockwave when in the group → Q to reposition → W for speed/slow. The perfect combo.' }
    },
    buildReasoning: { es: 'Luden\'s para burst y pen. Shadowflame para más pen. Rabadon\'s para multiplicar el R shockwave. Zhonya\'s si necesitás Flash+R de cerca.', en: 'Luden\'s for burst and pen. Shadowflame for more pen. Rabadon\'s to multiply R shockwave. Zhonya\'s if you need Flash+R from close.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: reposición de bola y daño principal. W segundo: más burst y utility. E último: shield es útil con un punto.', en: 'Q first: ball repositioning and main damage. W second: more burst and utility. E last: shield is useful with one point.' }
  },
  Ornn: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'late',
    identity: { es: 'Tanque de top que craftea items MEJORADOS para su equipo. Tu pasiva mejora items aliados en late. R es un carnero masivo que knockea 2 veces. El mejor tanque scaling del juego.', en: 'Top tank who crafts UPGRADED items for team. Passive upgrades ally items late. R is a massive ram that knocks up twice. Best scaling tank in the game.' },
    gameplan: {
      early: { es: 'Tradeá con Q pilar + W breathe (auto empowered al final de W es key). Tu W te da unstoppable por un momento — usalo para tanquear burst. Farmeá y escalá.', en: 'Trade with Q pillar + W breathe (empowered auto at end of W is key). W makes you unstoppable briefly — use to tank burst. Farm and scale.' },
      mid: { es: 'R carnero: cast primero → carnero va en línea → R recast para golpearlo de vuelta con knockup masivo. Buscá pelear en objetivos donde tu R puede pegar a varios.', en: 'R ram: first cast → ram goes in line → R recast to knock it back with massive knockup. Look for fights at objectives where R can hit multiple.' },
      late: { es: 'A nivel 14+ mejorar items de 2 aliados es ENORME (2000+ gold gratis para el equipo). Tu R en teamfights knockea 2 veces a todo el equipo. Sos el tanque más valioso del late game.', en: 'At level 14+ upgrading 2 ally items is ENORMOUS (2000+ free gold for team). Your R in teamfights knocks up entire team twice. You\'re the most valuable late game tank.' }
    },
    combo: {
      basic: { keys: 'Q → W → AA(empowered) → E', es: 'Q pilar → W breathe (último tick empodera auto) → Auto empowered con Brittle → E dash al pilar (knockup si pega).', en: 'Q pillar → W breathe (last tick empowers auto) → Empowered auto with Brittle → E dash to pillar (knockup if hits).' },
      advanced: { keys: 'R → R(recast) → Q → W → AA → E(al pilar)', es: 'R enviar carnero → R knockear de vuelta → Q pilar → W breathe → Auto Brittle → E dash al pilar para knockup extra. Triple knockup combo.', en: 'R send ram → R knock back → Q pillar → W breathe → Brittle auto → E dash to pillar for extra knockup. Triple knockup combo.' }
    },
    buildReasoning: { es: 'Sunfire para daño pasivo. Frozen Heart vs AD. Force of Nature vs AP. Iceborn para slow. Tu pasiva mejora estos items en versiones superiores — así que tanque items son aún más eficientes.', en: 'Sunfire for passive damage. Frozen Heart vs AD. Force of Nature vs AP. Iceborn for slow. Your passive upgrades these into superior versions — so tank items are even more efficient.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: poke y setup para E combo. W segundo: más daño de breathe y más Brittle damage. E último: dash no necesita niveles.', en: 'Q first: poke and E combo setup. W second: more breathe damage and Brittle damage. E last: dash doesn\'t need levels.' }
  },
  Pantheon: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Bruiser de early game con stun point-and-click y R global. W stun garantizado + empowered Q = el combo más simple y letal del early. R te manda a cualquier parte del mapa.', en: 'Early game bruiser with point-and-click stun and global R. Guaranteed W stun + empowered Q = simplest and most lethal early combo. R sends you anywhere on the map.' },
    gameplan: {
      early: { es: 'Nivel 2-3 con W stun + Q empowered (3 stacks de pasiva) matás a cualquiera. Tu Q tiene modo tap (poke) y modo charge (más daño pero más lento). Pre-6 dominá la lane.', en: 'Levels 2-3 with W stun + empowered Q (3 passive stacks) you kill anyone. Q has tap mode (poke) and charge mode (more damage but slower). Pre-6 dominate lane.' },
      mid: { es: 'R global para caer en peleas de otros lanes. W+Q empowered mata squishies. E te hace inmune a daño frontal por un momento. Buscá picks y snowball.', en: 'Global R to drop into other lane fights. W+Q empowered kills squishies. E makes you immune to frontal damage briefly. Look for picks and snowball.' },
      late: { es: 'Caés bastante. Transicioná a semi-tanque o roamer. Tu W stun sigue siendo valioso para picks. E para tanquear burst en teamfights. R para flanqueos.', en: 'You fall off a lot. Transition to semi-tank or roamer. W stun remains valuable for picks. E to tank burst in teamfights. R for flanks.' }
    },
    combo: {
      basic: { keys: 'W → AA → Q(empowered)', es: 'W stun point-and-click → Auto → Q empowered (mantener para daño máximo). Daño explosivo garantizado.', en: 'W point-and-click stun → Auto → Empowered Q (hold for max damage). Guaranteed explosive damage.' },
      advanced: { keys: 'R(global) → W → AA → Q(empowered) → E', es: 'R caer desde el cielo → W stun inmediato → Auto → Q empowered → E para tanquear contraataque. El enemigo no espera la llegada.', en: 'R drop from the sky → immediate W stun → Auto → Empowered Q → E to tank counterattack. Enemy doesn\'t expect the arrival.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain. Youmuu\'s para movilidad y lethality. Black Cleaver si necesitás más sustain y pen. Hubris si estás snowballeando para más AD por kills.', en: 'Eclipse for burst and sustain. Youmuu\'s for mobility and lethality. Black Cleaver if you need more sustain and pen. Hubris if snowballing for more AD per kills.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño principal (empowered Q es brutal). W segundo: menor CD del stun. E último: inmunidad frontal es útil con un punto.', en: 'Q first: main damage (empowered Q is brutal). W second: lower stun CD. E last: frontal immunity is useful with one point.' }
  },
  Poppy: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Tanque anti-dash. Tu W bloquea TODOS los dashes en un área. R martillazo envía a los enemigos volando hacia su base. Contra equipos con muchos dashes, sos una pesadilla.', en: 'Anti-dash tank. Your W blocks ALL dashes in an area. R hammer sends enemies flying back to their base. Against teams with many dashes, you\'re a nightmare.' },
    gameplan: {
      early: { es: 'Tradeá con pasiva (auto ranged de shield que deja escudo en el suelo) y Q (martillazo en el suelo — segunda parte hace más daño). E pinnea contra pared para stun.', en: 'Trade with passive (ranged shield auto that drops shield on ground) and Q (ground hammer — second part deals more damage). E pins against wall for stun.' },
      mid: { es: 'W bloquea dashes — usalo contra Irelia, Yasuo, Riven, cualquier diver. E contra pared → Q encima = combo brutal. R cargado envía a un enemigo volando lejos — úsalo para sacar al frontline.', en: 'W blocks dashes — use against Irelia, Yasuo, Riven, any diver. E against wall → Q on top = brutal combo. Charged R sends enemy flying far — use to remove frontline.' },
      late: { es: 'W en teamfights bloquea todos los dashes de entrada — Leona, Jarvan, assassins, todos frenados. E stun + Q contra paredes. R para sacar a alguien de la pelea por 3 segundos.', en: 'W in teamfights blocks all entry dashes — Leona, Jarvan, assassins, all stopped. E stun + Q against walls. R to remove someone from the fight for 3 seconds.' }
    },
    combo: {
      basic: { keys: 'E(contra pared) → Q → AA', es: 'E al enemigo contra pared para stun → Q martillazo → Auto. Si pinneas contra pared, el stun garantiza Q completo.', en: 'E enemy against wall for stun → Q hammer → Auto. If you pin against wall, stun guarantees full Q.' },
      advanced: { keys: 'E(pared) → Q → W → R(tap)', es: 'E stun contra pared → Q daño → W para bloquear dash de escape → R tap (knockup corto, no los mandás lejos). Para ejecutar, no empujar.', en: 'E wall stun → Q damage → W to block escape dash → R tap (short knockup, don\'t send them away). To execute, not to push away.' }
    },
    buildReasoning: { es: 'Iceborn Gauntlet para slow field constante. Sunfire para daño AoE pasivo. Randuin\'s vs crit. Force of Nature vs AP. Full tanque anti-dive.', en: 'Iceborn Gauntlet for constant slow field. Sunfire for passive AoE damage. Randuin\'s vs crit. Force of Nature vs AP. Full anti-dive tank.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño principal y waveclear. E segundo: menor CD del dash/stun. W último: el dash block es bueno con un punto.', en: 'Q first: main damage and waveclear. E second: lower dash/stun CD. W last: dash block is good with one point.' }
  },
  Pyke: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Support assassin con R que ejecuta Y da el oro completo de la kill a tu aliado. Tu R resetea en kill. Camuflaje con W, hook con Q, stun con E. El support que saca pentakills.', en: 'Assassin support with R that executes AND gives full kill gold to your ally. R resets on kill. Camouflage with W, hook with Q, stun with E. The support who gets pentakills.' },
    gameplan: {
      early: { es: 'Q hook → E dash stun → tu ADC hace daño. Nivel 6 tu R ejecuta bajo cierto umbral — el indicador te muestra cuándo. Cada kill con R da oro extra al carry.', en: 'Q hook → E dash stun → your ADC deals damage. Level 6 your R executes below a threshold — the indicator shows when. Each R kill gives extra gold to carry.' },
      mid: { es: 'Roameá como un asesino. W camuflaje → Q hook → E stun → R ejecutar. Generás oro doble para tu equipo con R. Sos el support más snowbally del juego.', en: 'Roam like an assassin. W camouflage → Q hook → E stun → R execute. Generate double gold for team with R. You\'re the most snowbally support in the game.' },
      late: { es: 'Buscá picks con W camuflaje. R ejecuta y resetea — si pillás a uno, podés pillar a todos. En teamfights esperá a que bajen de vida y R execute chain. No podés buildear vida — tu pasiva la convierte en AD.', en: 'Look for picks with W camouflage. R executes and resets — catch one and you can catch all. In teamfights wait for low health and R execute chain. Can\'t build health — passive converts to AD.' }
    },
    combo: {
      basic: { keys: 'Q(hook) → E → AA', es: 'Q cargado para hook → E dash a través de ellos (stun donde cruzaste) → Auto. El E deja un fantasma que stunea cuando vuelve.', en: 'Charged Q for hook → E dash through them (stun where you crossed) → Auto. E leaves a phantom that stuns when it returns.' },
      advanced: { keys: 'W → E → Flash → Q(hook) → R', es: 'W camuflaje → E dash → Flash para extender el E phantom stun → Q hook al stunned → R ejecutar. El Flash-E es imposible de esquivar.', en: 'W camouflage → E dash → Flash to extend E phantom stun → Q hook the stunned → R execute. Flash-E is impossible to dodge.' }
    },
    buildReasoning: { es: 'Youmuu\'s para movilidad y lethality — necesitás moverte rápido para roam y picks. Umbral Glaive para clear wards (controlar visión). Edge of Night para spellshield.', en: 'Youmuu\'s for mobility and lethality — need to move fast for roam and picks. Umbral Glaive for ward clearing (vision control). Edge of Night for spellshield.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: hook daño y menor CD. E segundo: menor CD del stun. W último: camuflaje funciona con un punto.', en: 'Q first: hook damage and lower CD. E second: lower stun CD. W last: camouflage works with one point.' }
  },
  Qiyana: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin AD que usa elementos del mapa. Q cambia según el elemento: río (root), pasto (stealth), piedra (daño extra). R es una onda explosiva que stunea contra paredes. Letal en la jungla del río.', en: 'AD assassin who uses map elements. Q changes by element: river (root), grass (stealth), rock (extra damage). R is a shockwave that stuns against walls. Lethal in river jungle.' },
    gameplan: {
      early: { es: 'Nivel 3 con Q+W+E tenés burst alto. W para agarrar elemento → Q para aplicar. Río Q rootea — muy fuerte para ganks. Pasto Q te hace invisible. Tradeá con E+Q (garantiza Q por el dash).', en: 'Level 3 with Q+W+E you have high burst. W to grab element → Q to apply. River Q roots — very strong for ganks. Grass Q makes you invisible. Trade with E+Q (guarantees Q via dash).' },
      mid: { es: 'Roameá por el río donde tenés acceso a agua Q (root). Tu R contra paredes de jungla es demoledora. Buscá peleas en chokepoints donde R puede bouncear contra paredes.', en: 'Roam through river where you have access to water Q (root). Your R against jungle walls is demolishing. Look for fights in chokepoints where R can bounce off walls.' },
      late: { es: 'R en una teamfight en jungla/río stunea a TODO el equipo contra las paredes. Es el AoE CC más fuerte del juego en la posición correcta. Flanqueá y R hacia la pared más cercana al grupo.', en: 'R in a jungle/river teamfight stuns the ENTIRE team against walls. It\'s the strongest AoE CC in the game in the right position. Flank and R toward the nearest wall to the group.' }
    },
    combo: {
      basic: { keys: 'E → Q → W → Q', es: 'E dash al target → Q con elemento actual → W agarrar nuevo elemento → Q otra vez. Doble Q combo.', en: 'E dash to target → Q with current element → W grab new element → Q again. Double Q combo.' },
      advanced: { keys: 'E → Q → W(río) → Q(root) → R(hacia pared)', es: 'E dash → Q first element → W grab river → Q root → R shockwave hacia la pared. Todo stunea y el daño es nuclear.', en: 'E dash → Q first element → W grab river → Q root → R shockwave toward wall. Everything stuns and damage is nuclear.' }
    },
    buildReasoning: { es: 'Profane Hydra para burst AoE + lethality — synergiza con tu R AoE. Youmuu\'s para movilidad. Opportunity para lethality extra. Serylda\'s si necesitás pen.', en: 'Profane Hydra for AoE burst + lethality — synergizes with your R AoE. Youmuu\'s for mobility. Opportunity for extra lethality. Serylda\'s if you need pen.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño principal con cada elemento. W segundo: menor CD para cambiar elementos. E último: dash no necesita niveles.', en: 'Q first: main damage with each element. W second: lower CD to switch elements. E last: dash doesn\'t need levels.' }
  },
  Quinn: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'early',
    identity: { es: 'ADC de top lane con R que te da MS masivo para roamear. Dominás la lane como ranged vs melee y después roameás para ayudar a otros lanes. Scout con W para visión.', en: 'Top lane ADC with R that gives massive MS for roaming. Dominate lane as ranged vs melee then roam to help other lanes. Scout with W for vision.' },
    gameplan: {
      early: { es: 'Abusá tu rango contra melees. Pasiva marca targets → auto empowered hace daño extra. E vault te aleja si se acercan (y marca con pasiva). Q ciega a auto-attackers.', en: 'Abuse range against melees. Passive marks targets → empowered auto deals extra damage. E vault pushes you away if they approach (and marks with passive). Q blinds auto-attackers.' },
      mid: { es: 'R para roamear a mid o bot en segundos. Matá al carry enemigo y volvé a tu lane. Tu velocidad de rotación es la más rápida del juego con R.', en: 'R to roam to mid or bot in seconds. Kill enemy carry and return to lane. Your rotation speed is the fastest in the game with R.' },
      late: { es: 'Splitpusheá y usá R para rotar a peleas rápido. No sos un ADC de teamfight tradicional — buscá picks y flanqueos. R → llegar → burst al carry → E vault para salir.', en: 'Splitpush and use R to rotate to fights quickly. You\'re not a traditional teamfight ADC — look for picks and flanks. R → arrive → burst carry → E vault to exit.' }
    },
    combo: {
      basic: { keys: 'AA(pasiva) → E → AA(pasiva)', es: 'Auto empowered de pasiva → E vault (te aleja + marca) → Auto empowered de marca. Doble pasiva proc.', en: 'Passive empowered auto → E vault (pushes away + marks) → Empowered passive auto. Double passive proc.' },
      advanced: { keys: 'R → Q → AA(pasiva) → E → AA(pasiva)', es: 'R para llegar rápido (cancela R al atacar) → Q ciega → Auto pasiva → E vault → Auto pasiva. Burst rápido.', en: 'R to arrive fast (cancel R on attack) → Q blind → Passive auto → E vault → Passive auto. Quick burst.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain en duelos. Collector para lethality + ejecución. Youmuu\'s para más MS y lethality. Oportunity como alternativa.', en: 'Eclipse for burst and sustain in duels. Collector for lethality + execution. Youmuu\'s for more MS and lethality. Opportunity as alternative.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño y ciega. E segundo: menor CD del vault. W último: visión es útil con un punto.', en: 'Q first: damage and blind. E second: lower vault CD. W last: vision is useful with one point.' }
  },
  Rakan: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Support encantador con engage de assassin. R te da MS y charma al primer enemigo que toques. W knockup AoE. E dash a aliado para shield. Con Xayah tenés sinergia especial.', en: 'Enchanter support with assassin engage. R gives MS and charms first enemy you touch. W AoE knockup. E dash to ally for shield. Special synergy with Xayah.' },
    gameplan: {
      early: { es: 'W knockup AoE para trades (pero te deja expuesto). E de vuelta a tu ADC para seguridad. Q para poke y curación. Nivel 6 tu R+W es un engage devastador.', en: 'W AoE knockup for trades (but leaves you exposed). E back to ADC for safety. Q for poke and healing. Level 6 your R+W is a devastating engage.' },
      mid: { es: 'R → Flash → W es el engage más rápido del juego. Corré con R (charma al primero) → W knockup → E de vuelta a tu ADC. El charma + knockup es CC encadenado.', en: 'R → Flash → W is the fastest engage in the game. Run with R (charm first one) → W knockup → E back to ADC. Charm + knockup is chained CC.' },
      late: { es: 'Flash + R hacia el equipo enemigo → W knockup AoE → E de vuelta a tu carry. Tu engage y escape son increíbles. Con Shurelya\'s tu R es aún más rápida.', en: 'Flash + R into enemy team → W AoE knockup → E back to carry. Your engage and escape are incredible. With Shurelya\'s your R is even faster.' }
    },
    combo: {
      basic: { keys: 'W → AA → Q → E(aliado)', es: 'W knockup → Auto → Q para curación → E de vuelta a tu ADC para shield y seguridad.', en: 'W knockup → Auto → Q for healing → E back to ADC for shield and safety.' },
      advanced: { keys: 'R → Flash → W → E(aliado)', es: 'R para MS y charm → Flash al grupo → W knockup AoE → E de vuelta al carry. Charm + knockup + escape en 2 segundos.', en: 'R for MS and charm → Flash into group → W AoE knockup → E back to carry. Charm + knockup + escape in 2 seconds.' }
    },
    buildReasoning: { es: 'Shurelya\'s para speed de equipo + amplifica tu R engage speed. Después enchanter items: Ardent, Staff, Redemption. Zhonya\'s si necesitás más seguridad en el engage.', en: 'Shurelya\'s for team speed + amplifies R engage speed. Then enchanter items: Ardent, Staff, Redemption. Zhonya\'s if you need more engage safety.' },
    skillOrder: { order: 'W > Q > E', es: 'W primero: menor CD del knockup y más daño. Q segundo: más curación. E último: shield escala poco.', en: 'W first: lower knockup CD and more damage. Q second: more healing. E last: shield scales poorly.' }
  },
  Rammus: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Tanque jungler anti-AD que rueda hacia vos con Q. Tu W devuelve daño a quien te pega con autos. E taunt point-and-click. R terremoto AoE. Contra full AD sos invencible.', en: 'Anti-AD tank jungler who rolls at you with Q. W returns damage to whoever hits you with autos. E point-and-click taunt. R earthquake AoE. Against full AD you\'re invincible.' },
    gameplan: {
      early: { es: 'Clear con W (refleja daño a monstruos). Q para rodar a ganks — el MS es enorme y el knockup al llegar es garantizado. E taunt point-and-click para que el laner siga pegando.', en: 'Clear with W (reflects damage to monsters). Q to roll to ganks — MS is huge and knockup on arrival is guaranteed. E point-and-click taunt so laner keeps hitting.' },
      mid: { es: 'Q roll + E taunt en cualquier ADC o melee AD = los matás con daño reflejado. Contra comps full AD literal no te hacen daño y morís dañándolos.', en: 'Q roll + E taunt any ADC or melee AD = kill them with reflected damage. Against full AD comps they literally can\'t damage you and die damaging themselves.' },
      late: { es: 'Q roll al carry AD → E taunt → W para reflejar su daño → R terremoto. El ADC muere pegándote con W activo. Sos el counter perfecto de full AD.', en: 'Q roll to AD carry → E taunt → W to reflect their damage → R earthquake. ADC dies from hitting you with W active. Perfect counter to full AD.' }
    },
    combo: {
      basic: { keys: 'Q → E → W → AA', es: 'Q roll knockup → E taunt → W damage reflect → Auto. El taunted ADC se mata solo pegándote.', en: 'Q roll knockup → E taunt → W damage reflect → Auto. Taunted ADC kills themselves hitting you.' },
      advanced: { keys: 'Flash → Q → E → W → R', es: 'Flash para cerrar distancia → Q knockup → E taunt → W reflect → R terremoto AoE. La cadena de CC es larga y el daño reflejado es brutal.', en: 'Flash to close distance → Q knockup → E taunt → W reflect → R AoE earthquake. CC chain is long and reflected damage is brutal.' }
    },
    buildReasoning: { es: 'Full armadura: Thornmail (devuelve daño + GW), Frozen Heart (AS slow), Randuin\'s (crit reduction). Cuanta más armadura, más refleja tu W. Contra AP: Force of Nature.', en: 'Full armor: Thornmail (returns damage + GW), Frozen Heart (AS slow), Randuin\'s (crit reduction). More armor = more W reflects. Against AP: Force of Nature.' },
    skillOrder: { order: 'W > E > Q', es: 'W primero: más daño reflejado y más resistencias. E segundo: taunt más largo. Q último: el roll no necesita niveles, solo el knockup.', en: 'W first: more reflected damage and more resistances. E second: longer taunt. Q last: roll doesn\'t need levels, just the knockup.' }
  },
  RekSai: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Jungler bruiser que se entierra para detectar movimiento y tuneliza por el mapa. Forma enterrada tiene knock-up. R es un dash a un target marcado con daño ejecutivo masivo.', en: 'Bruiser jungler who burrows to detect movement and tunnels across the map. Burrowed form has knock-up. R is a dash to a marked target with massive execution damage.' },
    gameplan: {
      early: { es: 'Gankeá agresivamente — forma enterrada + knock-up es muy fuerte nivel 3. Usá túneles (E) para pathing rápido entre campamentos y lanes. Tu early es brutal.', en: 'Gank aggressively — burrowed form + knock-up is very strong level 3. Use tunnels (E) for fast pathing between camps and lanes. Your early is brutal.' },
      mid: { es: 'R marca targets que dañaste → la ejecución hace true damage masivo. Buscá dañar al carry y después R para ejecutar. Túneles por el mapa dan movilidad única.', en: 'R marks damaged targets → execution deals massive true damage. Damage the carry then R to execute. Tunnels across map give unique mobility.' },
      late: { es: 'Caés un poco pero tu R ejecución sigue siendo letal. Buscá flanquear, dañar al carry y R para ejecutar. Tu detección de movimiento en forma enterrada es visión gratis.', en: 'Fall off a bit but R execution remains lethal. Look to flank, damage carry and R to execute. Movement detection in burrowed form is free vision.' }
    },
    combo: {
      basic: { keys: 'W(enterrarse) → E(tunel) → W(desenterrarse/knockup) → Q → E → AA', es: 'Enterrarte → Tunelear cerca → Desenterrarte con knockup → Q empowered → E → Auto.', en: 'Burrow → Tunnel close → Unburrow with knockup → Q empowered → E → Auto.' },
      advanced: { keys: 'W(knockup) → Q → AA → AA → AA → E → R', es: 'W knockup → Q → Autos para marcar → E true damage → R dash de ejecución cuando estén bajos. La R hace más daño cuanta menos vida tengan.', en: 'W knockup → Q → Autos to mark → E true damage → R execution dash when they\'re low. R deals more damage the lower their health.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain. Black Cleaver stackea rápido con tus autos. Death\'s Dance para sobrevivir. Profane Hydra para más burst.', en: 'Eclipse for burst and sustain. Black Cleaver stacks fast with autos. Death\'s Dance to survive. Profane Hydra for more burst.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño principal en ambas formas. E segundo: más true damage de tunel/bite. W último: knockup no escala.', en: 'Q first: main damage in both forms. E second: more true damage from tunnel/bite. W last: knockup doesn\'t scale.' }
  },
  Rell: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Support tanque con engage de montaje/desmontaje. W montada das MS, desmontada das resistencias a aliado. R atrae a enemigos cerca. E stun. Fuerte engage con Flash+W.', en: 'Tank support with mount/dismount engage. W mounted gives MS, dismounted gives ally resistances. R pulls enemies close. E stun. Strong engage with Flash+W.' },
    gameplan: {
      early: { es: 'W crash (desmontarte) es un knockup. E conecta a un aliado — al stunear aplica stun en línea. Nivel 2 W+E es mucho CC. Jugá agresiva con engage.', en: 'W crash (dismount) is a knockup. E connects to ally — stun applies in a line. Level 2 W+E is lots of CC. Play aggressive with engage.' },
      mid: { es: 'Flash + W es un engage fuerte. R atrae a enemigos → W knockup → E stun. Tu CC encadenado es brutal. Buscá peleas en objetivos.', en: 'Flash + W is a strong engage. R pulls enemies → W knockup → E stun. Your chained CC is brutal. Look for fights at objectives.' },
      late: { es: 'Flash W → R → E. Tu engage es masivo. La atracción de R agrupa enemigos para combos aliados (MF R, Ori R, etc). Sos una de las mejores iniciadoras del juego.', en: 'Flash W → R → E. Your engage is massive. R pull groups enemies for ally combos (MF R, Ori R, etc). You\'re one of the best initiators in the game.' }
    },
    combo: {
      basic: { keys: 'W(crash) → E → AA', es: 'W desmontarte para knockup → E stun → Auto para daño. CC doble rápido.', en: 'W dismount for knockup → E stun → Auto for damage. Quick double CC.' },
      advanced: { keys: 'Flash → W(crash) → R → E', es: 'Flash → W knockup → R atracción magnética → E stun. Triple CC y los enemigos quedan agrupados.', en: 'Flash → W knockup → R magnetic pull → E stun. Triple CC and enemies are grouped.' }
    },
    buildReasoning: { es: 'Locket para shield de equipo. Frozen Heart vs AD. Force of Nature vs AP. Full tanque porque tu valor es puro CC y engage.', en: 'Locket for team shield. Frozen Heart vs AD. Force of Nature vs AP. Full tank because your value is pure CC and engage.' },
    skillOrder: { order: 'W > E > Q', es: 'W primero: más daño y menor CD del engage. E segundo: menor CD del stun. Q último: daño útil con un punto.', en: 'W first: more damage and lower engage CD. E second: lower stun CD. Q last: damage useful with one point.' }
  },
  RenataGlasc: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Enchantera oscura con W que revive aliados temporalmente y R que hace que ENEMIGOS SE ATAQUEN ENTRE ELLOS. Tu R Hostile Takeover es la habilidad más unique del juego.', en: 'Dark enchanter with W that temporarily revives allies and R that makes ENEMIES ATTACK EACH OTHER. Your R Hostile Takeover is the most unique ability in the game.' },
    gameplan: {
      early: { es: 'Q root + empuja al target hacia vos. W en tu ADC para darle AS y si muere, revive por 3 segundos (si saca kill en ese tiempo, vive). E para poke. Nivel 6 R es caótica.', en: 'Q root + pushes target toward you. W on ADC for AS and if they die, revive for 3 seconds (if they get a kill in that time, they live). E for poke. Level 6 R is chaotic.' },
      mid: { es: 'R en un grupo de enemigos los hace atacarse entre ellos por 2.5 segundos — el ADC enemigo literalmente mata a su propio equipo. Es la habilidad más disruptiva del juego.', en: 'R on a group of enemies makes them attack each other for 2.5 seconds — enemy ADC literally kills their own team. Most disruptive ability in the game.' },
      late: { es: 'Un buen R en teamfight gana la partida sola. El ADC enemigo con 3 items atacando a su propio equipo es devastador. W para salvar carries. Q para pelar.', en: 'A good R in teamfight wins the game alone. Enemy ADC with 3 items attacking their own team is devastating. W to save carries. Q to peel.' }
    },
    combo: {
      basic: { keys: 'Q → E → AA', es: 'Q root y pull → E poke → Auto. Mantenelo simple y guardá W para salvar.', en: 'Q root and pull → E poke → Auto. Keep it simple and save W to save.' },
      advanced: { keys: 'R → Q → W(ADC) → E', es: 'R para hacer que los enemigos se peguen entre ellos → Q para root → W al carry para AS + revive seguro → E para más daño.', en: 'R to make enemies hit each other → Q for root → W on carry for AS + revive safety → E for more damage.' }
    },
    buildReasoning: { es: 'Shurelya\'s para speed de equipo que synergiza con tus engages. Ardent Censer amplifica el W AS buff. Staff of Flowing Water para AP. Redemption para utility.', en: 'Shurelya\'s for team speed that synergizes with engages. Ardent Censer amplifies W AS buff. Staff of Flowing Water for AP. Redemption for utility.' },
    skillOrder: { order: 'E > Q > W', es: 'E primero: poke principal. Q segundo: menor CD del root. W último: revive y AS no necesitan niveles para el efecto core.', en: 'E first: main poke. Q second: lower root CD. W last: revive and AS don\'t need levels for core effect.' }
  },
  Renekton: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'early',
    identity: { es: 'Bruiser de top que domina el early-mid con burst alto. Tu combo E+W stun+Q cura es instantáneo y devastador. R te da vida y AoE. El bully de lane por excelencia.', en: 'Top bruiser who dominates early-mid with high burst. Your E+W stun+Q heal combo is instant and devastating. R gives health and AoE. The quintessential lane bully.' },
    gameplan: {
      early: { es: 'E dash → W stun (si tenés 50+ furia, W stunea más y hace más daño) → Q AoE curación → E dash de vuelta. Este trade es inescapable y gana cualquier lane.', en: 'E dash → W stun (if 50+ fury, W stuns longer and deals more damage) → Q AoE healing → E dash back. This trade is inescapable and wins any lane.' },
      mid: { es: 'Con BOTRK tu combo one-shotea squishies. Empowered W con 50 fury hace burst insano. Splitpusheá o pelea con el equipo — sos una amenaza en ambos.', en: 'With BOTRK your combo one-shots squishies. Empowered W with 50 fury deals insane burst. Splitpush or teamfight — you\'re a threat in both.' },
      late: { es: 'Caés en late comparado con otros tops. Tu trabajo es divear al backline con E+Flash y burst con W+Q. R te da vida extra para sobrevivir el dive. Acá sos más dive-buddy que carry.', en: 'Fall off late compared to other tops. Your job is to dive backline with E+Flash and burst with W+Q. R gives extra health to survive the dive. Here you\'re more dive-buddy than carry.' }
    },
    combo: {
      basic: { keys: 'E → W → Q → E', es: 'E dash entrada → W stun → Q curación AoE → E dash salida. Trade perfecto: entrás, hacés daño, curé, salís.', en: 'E dash entry → W stun → Q AoE heal → E dash exit. Perfect trade: go in, deal damage, heal, get out.' },
      advanced: { keys: 'E → AA → W(empowered) → Q → AA → E → AA', es: 'E entrada → Auto → W empowered (50 fury) para stun largo + burst → Q heal → Auto → E salida → Auto. Máximo daño con fury.', en: 'E entry → Auto → Empowered W (50 fury) for long stun + burst → Q heal → Auto → E exit → Auto. Maximum damage with fury.' }
    },
    buildReasoning: { es: 'BOTRK rush para on-hit con W (multi-hit aplica on-hit varias veces) — burst insano. Sundered Sky para más burst y sustain. Black Cleaver para pen. Sterak\'s para sobrevivir.', en: 'BOTRK rush for on-hit with W (multi-hit applies on-hit several times) — insane burst. Sundered Sky for more burst and sustain. Black Cleaver for pen. Sterak\'s to survive.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: curación y waveclear. W segundo: más stun burst. E último: dash no necesita niveles.', en: 'Q first: healing and waveclear. W second: more stun burst. E last: dash doesn\'t need levels.' }
  },
  Rengar: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'mid',
    identity: { es: 'Assassin AD de jungla con R que te hace invisible y te da información de la ubicación enemiga. Saltás desde bushes con pasiva. Un R well-timed one-shotea al ADC sin que reaccione.', en: 'AD jungle assassin with R that makes you invisible and reveals enemy locations. Leap from bushes with passive. A well-timed R one-shots the ADC before they react.' },
    gameplan: {
      early: { es: 'Usá bushes para saltar (pasiva). Clear con Q empowered. Gankeá desde bushes de lane. Tu nivel 3 con 3 stacks de ferocity es letal — Q empowered extra por ferocity.', en: 'Use bushes to leap (passive). Clear with empowered Q. Gank from lane bushes. Level 3 with 3 ferocity stacks is lethal — extra empowered Q from ferocity.' },
      mid: { es: 'R para cazar ADCs y magos solos. Te volvés invisible → salto con pasiva → Q empowered + empowered Q de ferocity = one-shot. Los enemigos ven "!" sobre su cabeza cuando estás cerca.', en: 'R to hunt solo ADCs and mages. Become invisible → leap with passive → empowered Q + ferocity empowered Q = one-shot. Enemies see "!" above their head when you\'re near.' },
      late: { es: 'Tu único trabajo: R → one-shot al carry. Si lo lográs, tu equipo gana 5v4. Si fallás, sos un gato muerto. Buscá el momento perfecto cuando el carry se separa del equipo.', en: 'Your only job: R → one-shot carry. If you succeed, your team wins 5v4. If you fail, you\'re a dead cat. Look for the perfect moment when carry separates from team.' }
    },
    combo: {
      basic: { keys: 'Salto(bush) → Q → W → E', es: 'Salto desde bush → Q empowered auto → W para curar → E bola. Acumulás ferocity para otro empowered.', en: 'Leap from bush → Q empowered auto → W to heal → E bola. Stack ferocity for another empowered.' },
      advanced: { keys: 'R → Salto → E(en aire) → Q → W → Q(ferocity)', es: 'R stealth → Salto al carry → E en el aire → Q empowered al aterrizar → W → Q de ferocity. Doble Q es el one-shot.', en: 'R stealth → Leap to carry → E mid-air → Q empowered on landing → W → Ferocity Q. Double Q is the one-shot.' }
    },
    buildReasoning: { es: 'Profane Hydra para burst AoE + lethality. Youmuu\'s para movilidad. Collector para ejecución. Edge of Night para spellshield al entrar.', en: 'Profane Hydra for AoE burst + lethality. Youmuu\'s for mobility. Collector for execution. Edge of Night for spellshield on entry.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: tu daño principal de burst. W segundo: curación y cleanse con ferocity. E último: bola slow no necesita niveles.', en: 'Q first: main burst damage. W second: healing and ferocity cleanse. E last: slow bola doesn\'t need levels.' }
  },
  Riven: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: { es: 'Bruiser AD de top con el skill ceiling más alto de los toplaners. Q tiene 3 dashes, W stun AoE, E shield+dash. Todo cancela animaciones. Si la dominás, es imparable.', en: 'Top AD bruiser with the highest skill ceiling among toplaners. Q has 3 dashes, W AoE stun, E shield+dash. Everything animation cancels. Master her and she\'s unstoppable.' },
    gameplan: {
      early: { es: 'Nivel 1 Q×3 con autos entre cada Q (animation cancel) gana muchos trades. Q1 → AA → Q2 → AA → Q3 → AA. El tercer Q knockea. E shield para esquivar daño en trades.', en: 'Level 1 Q×3 with autos between each Q (animation cancel) wins many trades. Q1 → AA → Q2 → AA → Q3 → AA. Third Q knocks up. E shield to dodge damage in trades.' },
      mid: { es: 'Con CDR tu combo es constante. E+R para empezar → Q×3 con autos → W stun → R2 para ejecutar. La clave es cancelar animaciones (E cancela Q y W, etc).', en: 'With CDR your combo is constant. E+R to start → Q×3 with autos → W stun → R2 to execute. Key is canceling animations (E cancels Q and W, etc).' },
      late: { es: 'Con CDR full tus habilidades están siempre disponibles. Buscá flanqueos y burst al backline. E → R → Flash → W → Q×3 → R2 es el combo completo que one-shotea a cualquiera.', en: 'With full CDR abilities are always up. Look for flanks and backline burst. E → R → Flash → W → Q×3 → R2 is the full combo that one-shots anyone.' }
    },
    combo: {
      basic: { keys: 'Q → AA → Q → AA → Q → AA', es: 'Q1 dash → Auto cancel → Q2 dash → Auto cancel → Q3 knockup → Auto. Weaveá autos entre cada Q para máximo DPS.', en: 'Q1 dash → Auto cancel → Q2 dash → Auto cancel → Q3 knockup → Auto. Weave autos between each Q for max DPS.' },
      advanced: { keys: 'E → R1 → Flash → W → AA → Q → AA → Q → AA → Q3 → R2', es: 'E dash + R1 (animation cancel simultáneo) → Flash al grupo → W stun AoE → Auto → Q×3 con autos → R2 ejecutar. El combo de Riven más letal.', en: 'E dash + R1 (simultaneous animation cancel) → Flash into group → W AoE stun → Auto → Q×3 with autos → R2 execute. Riven\'s most lethal combo.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain. Black Cleaver para CDR y pen. Death\'s Dance es core — el bleed se resetea con kills. Youmuu\'s si estás snowballeando.', en: 'Eclipse for burst and sustain. Black Cleaver for CDR and pen. Death\'s Dance is core — bleed resets on kills. Youmuu\'s if snowballing.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño y movilidad principal. E segundo: menor CD de shield/dash. W último: stun no necesita niveles.', en: 'Q first: main damage and mobility. E second: lower shield/dash CD. W last: stun doesn\'t need levels.' }
  },
  Rumble: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Mago AP de top con sistema de calor. Tus habilidades generan calor — en zona de peligro hacen más daño, si sobrecalentás te silenciás. R Equalizer es una línea de fuego en el suelo devastadora.', en: 'Top AP mage with heat system. Abilities generate heat — in danger zone they deal more damage, overheating silences you. R Equalizer is a devastating fire line on the ground.' },
    gameplan: {
      early: { es: 'Tradeá con Q (lanzallamas cónico) en zona de peligro (50-100 calor) para daño extra. E para slow a distancia. Manejá tu calor — overheating te impide usar habilidades pero tus autos pegan más.', en: 'Trade with Q (cone flamethrower) in danger zone (50-100 heat) for extra damage. E for ranged slow. Manage heat — overheating prevents abilities but autos hit harder.' },
      mid: { es: 'Tu R es una línea de fuego en el suelo que hace daño MASIVO y slowa. Ponela en chokepoints (entradas de dragón, baron). Un buen R decide teamfights enteras.', en: 'Your R is a fire line on the ground that deals MASSIVE damage and slows. Place in chokepoints (dragon entrances, baron). A good R decides entire teamfights.' },
      late: { es: 'R en un teamfight sobre el grupo enemigo es letal. Corta el mapa en dos — los enemigos tienen que elegir un lado. Con Liandry\'s + Rylai\'s la R quema y slowa constantemente.', en: 'R in a teamfight over enemy group is lethal. Cuts the map in two — enemies must choose a side. With Liandry\'s + Rylai\'s the R burns and slows constantly.' }
    },
    combo: {
      basic: { keys: 'E → Q → W', es: 'E slow → Q lanzallamas (zona de peligro para más daño) → W shield para tanquear. Mantenete en 50-80 de calor.', en: 'E slow → Q flamethrower (danger zone for more damage) → W shield to tank. Stay at 50-80 heat.' },
      advanced: { keys: 'R(línea) → E → Q → W → E', es: 'R línea de fuego sobre el grupo → E slow → Q lanzallamas → W shield → E de nuevo. El R sigue haciendo daño mientras vos peleas.', en: 'R fire line over group → E slow → Q flamethrower → W shield → E again. R keeps dealing damage while you fight.' }
    },
    buildReasoning: { es: 'Liandry\'s para quema con R y Q constante. Rylai\'s para slow permanente con Q y R. Zhonya\'s para sobrevivir en el frente. Rabadon\'s para multiplicar.', en: 'Liandry\'s for burn with constant R and Q. Rylai\'s for permanent slow with Q and R. Zhonya\'s to survive on the front. Rabadon\'s to multiply.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño de lanzallamas principal. E segundo: más slow y daño. W último: shield es útil con un punto.', en: 'Q first: main flamethrower damage. E second: more slow and damage. W last: shield is useful with one point.' }
  },
  Ryze: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Mago de corto alcance con combos de spam que escala muy bien. E marca targets y Q hace más daño a marcados. R teleporta a todo tu equipo a una zona. Machine gun mage.', en: 'Short range mage with spam combos who scales very well. E marks targets and Q deals more damage to marked. R teleports your entire team to a zone. Machine gun mage.' },
    gameplan: {
      early: { es: 'Farmeá con Q y E+Q combo. Tu early no es el más fuerte pero tradeás OK con E+Q (Q pega más a marcados). Necesitás Tear temprano para maná.', en: 'Farm with Q and E+Q combo. Your early isn\'t the strongest but you trade OK with E+Q (Q deals more to marked). Need early Tear for mana.' },
      mid: { es: 'Con Archangel\'s tu DPS de combos es fuerte. E+Q para single target, E+E(spread)+Q para AoE. R para tp al equipo en flanqueos o escapes.', en: 'With Archangel\'s your combo DPS is strong. E+Q for single target, E+E(spread)+Q for AoE. R to TP team for flanks or escapes.' },
      late: { es: 'Tu DPS sostenido con E+Q spam es comparable a un ADC. R para mover al equipo entero a baron, a peleas, o flanqueos. Escalás muy bien con AP y maná.', en: 'Your sustained DPS with E+Q spam is comparable to an ADC. R to move entire team to baron, fights, or flanks. You scale very well with AP and mana.' }
    },
    combo: {
      basic: { keys: 'E → Q', es: 'E marca → Q hace más daño al marcado. Tu combo de pan de cada día.', en: 'E marks → Q deals more damage to marked. Your bread and butter combo.' },
      advanced: { keys: 'E → E → Q → W → Q → E → Q', es: 'E spread marca a varios → Q AoE → W root → Q → E → Q. Spam constante de combos para máximo DPS.', en: 'E spread marks multiple → Q AoE → W root → Q → E → Q. Constant combo spam for maximum DPS.' }
    },
    buildReasoning: { es: 'Archangel\'s es core — necesitás maná y la AP de Seraph\'s es enorme. Rod of Ages para scaling. Rabadon\'s para multiplicar. Zhonya\'s para seguridad (rango corto).', en: 'Archangel\'s is core — need mana and Seraph\'s AP is huge. Rod of Ages for scaling. Rabadon\'s to multiply. Zhonya\'s for safety (short range).' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu spam de daño principal. E segundo: spread y menor CD. W último: root es útil con un punto.', en: 'Q first: main damage spam. E second: spread and lower CD. W last: root is useful with one point.' }
  },
  Samira: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: { es: 'ADC que sube de estilo (D a S) con combos. A rango S, tu R es un Katarina spin que hace daño insano y lifestealea. W windwall bloquea proyectiles. Necesitás engage aliado para brillar.', en: 'ADC who builds style (D to S) with combos. At S rank, R is a Katarina spin that deals insane damage and lifesteals. W windwall blocks projectiles. Need allied engage to shine.' },
    gameplan: {
      early: { es: 'Subí de estilo alternando autos y habilidades (cada ataque diferente sube un grado). Q para poke, W para bloquear proyectiles, E dash a aliados o enemigos. Necesitás un support con CC.', en: 'Build style by alternating autos and abilities (each different attack raises one grade). Q for poke, W to block projectiles, E dash to allies or enemies. Need a CC support.' },
      mid: { es: 'Con CC de tu support, llegás a S rank rápido. R a rango S hace daño nuclear en AoE y lifestealea todo de vuelta. Buscá peleas 2v2 donde tu combo brille.', en: 'With support CC, reach S rank quickly. R at S rank deals nuclear AoE damage and lifesteals everything back. Look for 2v2 fights where your combo shines.' },
      late: { es: 'En teamfights, esperá el engage aliado → E dash al CC\'d → subí a S con el combo → R spin para pentakill. W para bloquear proyectiles clave durante tu R.', en: 'In teamfights, wait for allied engage → E dash to CC\'d → build to S with combo → R spin for pentakill. W to block key projectiles during R.' }
    },
    combo: {
      basic: { keys: 'AA → Q → AA → E → AA → W', es: 'Auto → Q → Auto → E → Auto → W. Cada acción diferente sube un grado de estilo.', en: 'Auto → Q → Auto → E → Auto → W. Each different action raises one style grade.' },
      advanced: { keys: 'E → AA → Q → AA → W → AA → R', es: 'E dash → Auto → Q → Auto → W → Auto = rango S → R spin. La cadena de combos perfecta para llegar a S.', en: 'E dash → Auto → Q → Auto → W → Auto = S rank → R spin. Perfect combo chain to reach S.' }
    },
    buildReasoning: { es: 'Infinity Edge core para crit en tu R. Bloodthirster para lifesteal masivo durante R spin. Collector para ejecución. Navori para menor CD.', en: 'Infinity Edge core for crit on R. Bloodthirster for massive lifesteal during R spin. Collector for execution. Navori for lower CD.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño principal. E segundo: menor CD del dash. W último: windwall no necesita niveles.', en: 'Q first: main damage. E second: lower dash CD. W last: windwall doesn\'t need levels.' }
  },
  Sejuani: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Tanque jungler con R que stunea desde lejos. Pasiva con aliados melee marca enemigos — 4 stacks = stun. Tu R es una bola que explota en stun AoE. Engage tanque sólida.', en: 'Tank jungler with R that stuns from range. Passive with melee allies marks enemies — 4 stacks = stun. R is a ball that explodes in AoE stun. Solid tank engage.' },
    gameplan: {
      early: { es: 'Clear decente con W (2 casts de daño). Gankeá con Q dash + E stun (si tu laner es melee, entre los dos stackean la pasiva rápido). Post-6 R es un stun de largo alcance.', en: 'Decent clear with W (2 damage casts). Gank with Q dash + E stun (if laner is melee, you both stack passive fast). Post-6 R is a long range stun.' },
      mid: { es: 'R en peleas de objetivos es brutal. Q dash para engage → R stun al grupo → E stun al marcado. Tu CC es masivo. Con aliados melee la pasiva de stun se stackea rápido.', en: 'R in objective fights is brutal. Q dash for engage → R stun on group → E stun on marked. Your CC is massive. With melee allies passive stun stacks fast.' },
      late: { es: 'R al carry desde lejos → tu equipo followea. Q para llegar → E para stun extra. Tu tankeo es sólido con W y pasiva de resistencias. Peeling o engage, ambos funcionan.', en: 'R carry from range → team follows. Q to reach → E for extra stun. Tankiness is solid with W and resistance passive. Peeling or engage, both work.' }
    },
    combo: {
      basic: { keys: 'Q → AA → W → E', es: 'Q dash → Auto (stackea pasiva) → W damage → E stun cuando pasiva está full.', en: 'Q dash → Auto (stacks passive) → W damage → E stun when passive is full.' },
      advanced: { keys: 'R → Q → W → E → AA', es: 'R stun desde lejos → Q dash al stunned → W damage → E stun extra (si hay aliados melee ayudando a stackear) → Autos.', en: 'R stun from range → Q dash to stunned → W damage → E extra stun (if melee allies help stack) → Autos.' }
    },
    buildReasoning: { es: 'Iceborn Gauntlet para slow field y tanqueo. Sunfire para AoE daño pasivo. Frozen Heart vs AD. Force of Nature vs AP.', en: 'Iceborn Gauntlet for slow field and tankiness. Sunfire for passive AoE damage. Frozen Heart vs AD. Force of Nature vs AP.' },
    skillOrder: { order: 'W > E > Q', es: 'W primero: tu daño principal de clear y trades. E segundo: menor CD de stun. Q último: dash no necesita niveles.', en: 'W first: main damage for clear and trades. E second: lower stun CD. Q last: dash doesn\'t need levels.' }
  },
  Senna: {
    playstyle: { es: 'Pokear', en: 'Poke' },
    powerSpike: 'late',
    identity: { es: 'ADC support que escala infinitamente con almas (pasiva). Cada alma da rango, AD y crit. En late game tu rango es el más largo del juego. R es un shield/daño global. Heal+damage en un package.', en: 'ADC support who scales infinitely with souls (passive). Each soul gives range, AD and crit. Late game your range is the longest in the game. R is a global shield/damage. Heal+damage in one package.' },
    gameplan: {
      early: { es: 'Juntá almas — caen de minions que mueren cerca y de campeones que pokeás (2 autos o habilidad + auto). Q es un beam de curación + daño. Pokeá constantemente para generar almas.', en: 'Collect souls — drop from nearby dying minions and champions you poke (2 autos or ability + auto). Q is a heal + damage beam. Poke constantly to generate souls.' },
      mid: { es: 'Con almas tu rango crece. A 60+ almas tu rango es más largo que Caitlyn. W root es un setup para picks. R global para ayudar peleas en otros lanes.', en: 'With souls your range grows. At 60+ souls your range is longer than Caitlyn. W root is setup for picks. R global to help fights in other lanes.' },
      late: { es: 'Con 100+ almas tu rango es absurdo — pegás desde tan lejos que nadie te alcanza. Tu Q cura Y hace daño. R shield/daño global. Sos ADC y support al mismo tiempo.', en: 'With 100+ souls your range is absurd — you hit from so far nobody reaches you. Q heals AND deals damage. R global shield/damage. You\'re ADC and support at the same time.' }
    },
    combo: {
      basic: { keys: 'AA → Q → AA', es: 'Auto (primer hit slowa) → Q beam curación/daño → Auto. Cada 2 autos al mismo target da un alma.', en: 'Auto (first hit slows) → Q beam heal/damage → Auto. Every 2 autos on same target gives a soul.' },
      advanced: { keys: 'W → AA → Q → AA → R(global)', es: 'W root → Auto → Q a través de aliados para curar + dañar → Auto → R global si necesitan ayuda en otro lado.', en: 'W root → Auto → Q through allies to heal + damage → Auto → R global if they need help elsewhere.' }
    },
    buildReasoning: { es: 'Eclipse para burst y sustain (funciona con tu poke de 2 autos). Rapid Firecannon para aún más rango. Collector para ejecución. Umbral Glaive para visión.', en: 'Eclipse for burst and sustain (works with 2-auto poke). Rapid Firecannon for even more range. Collector for execution. Umbral Glaive for vision.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: curación y daño principal. W segundo: menor CD del root. E último: camuflaje de equipo es útil con un punto.', en: 'Q first: main healing and damage. W second: lower root CD. E last: team camouflage is useful with one point.' }
  },
  Seraphine: {
    playstyle: { es: 'Controlar', en: 'Control' },
    powerSpike: 'mid',
    identity: { es: 'Maga/enchantera con excelente utility AoE. R es un charm que se extiende cada vez que pega a un aliado o enemigo. W shield + curación AoE. Q poke. Doble cast de pasiva cada 3 habilidades.', en: 'Mage/enchanter with excellent AoE utility. R is a charm that extends each time it hits an ally or enemy. W AoE shield + heal. Q poke. Passive double cast every 3 abilities.' },
    gameplan: {
      early: { es: 'Pokeá con Q y E. Tu pasiva cada 3 habilidades duplica la siguiente — guardala para doble Q (poke) o doble E (CC). W shield + curación AoE en trades.', en: 'Poke with Q and E. Passive every 3 abilities doubles the next — save for double Q (poke) or double E (CC). W AoE shield + heal in trades.' },
      mid: { es: 'R charm que se extiende — si pega a un aliado y después al enemigo, el rango crece. Buscá R desde atrás de tu equipo para máximo rango. W curación de equipo en peleas.', en: 'R charm that extends — if it hits an ally then enemy, range grows. Look for R from behind your team for max range. W team healing in fights.' },
      late: { es: 'Un buen R en el equipo agrupado charma a 5 personas. Double cast E para root AoE. W shield/heal constante. Sos una máquina de utilidad AoE.', en: 'A good R on grouped team charms 5 people. Double cast E for AoE root. Constant W shield/heal. You\'re an AoE utility machine.' }
    },
    combo: {
      basic: { keys: 'Q → Q(double cast)', es: 'Usá 2 habilidades normales → Q con doble cast para doble daño. Manejo de pasiva es clave.', en: 'Use 2 normal abilities → Q with double cast for double damage. Passive management is key.' },
      advanced: { keys: 'R → E(double cast) → Q → W', es: 'R charm → E doble cast para root AoE (charm + root encadenado) → Q burst → W curación del equipo.', en: 'R charm → E double cast for AoE root (charm + root chained) → Q burst → W team healing.' }
    },
    buildReasoning: { es: 'Moonstone para curación amplificada con W. Archangel\'s si vas AP carry. Ardent Censer para amplificar al ADC. Staff of Flowing Water para AP del equipo.', en: 'Moonstone for amplified healing with W. Archangel\'s for AP carry build. Ardent Censer to amplify ADC. Staff of Flowing Water for team AP.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño y poke. W segundo: curación AoE más fuerte. E último: slow/root no necesita niveles.', en: 'Q first: damage and poke. W second: stronger AoE healing. E last: slow/root doesn\'t need levels.' }
  },
  Sett: {
    playstyle: { es: 'Pelear', en: 'Fight' },
    powerSpike: 'mid',
    identity: { es: 'Bruiser de top con W que convierte daño recibido en un puñetazo de true damage masivo. R agarra a un enemigo y lo slammea encima de su equipo. El boss fight del top lane.', en: 'Top bruiser with W that converts damage taken into a massive true damage punch. R grabs an enemy and slams them on top of their team. The top lane boss fight.' },
    gameplan: {
      early: { es: 'Tradeá con Q (2 autos empowered) y E pull. Dejá que te peguen un poco para cargar W — después soltá W para un puñetazo de true damage. Tu regen pasiva entre trades es fuerte.', en: 'Trade with Q (2 empowered autos) and E pull. Let them hit you a bit to charge W — then release W for a true damage punch. Passive regen between trades is strong.' },
      mid: { es: 'R agarrá a un tanque y slammealo encima de su equipo — el daño es % vida del tanque así que cuanto más gordo mejor. W con grit máximo hace 1000+ true damage.', en: 'R grab a tank and slam on their team — damage is % of the tank\'s health so the fatter the better. W with max grit deals 1000+ true damage.' },
      late: { es: 'Flash → R al tanque sobre su equipo. El impacto hace daño masivo AoE. Después W el grit acumulado para true damage en cono. E pull para más CC. Sos una máquina de CC y daño.', en: 'Flash → R the tank onto their team. Impact deals massive AoE damage. Then W accumulated grit for cone true damage. E pull for more CC. You\'re a CC and damage machine.' }
    },
    combo: {
      basic: { keys: 'E → AA(Q) → AA(Q) → W', es: 'E pull + stun (si pulle de ambos lados) → Q empowered autos → W puñetazo con grit. El burst es enorme.', en: 'E pull + stun (if pulled from both sides) → Q empowered autos → W grit punch. Burst is enormous.' },
      advanced: { keys: 'Flash → R(en tanque hacia su equipo) → E → W → Q', es: 'Flash → R slam tanque sobre su equipo → E pull los que quedan → W true damage puñetazo → Q autos. Es un combo de 5-man CC.', en: 'Flash → R slam tank onto team → E pull remaining → W true damage punch → Q autos. It\'s a 5-man CC combo.' }
    },
    buildReasoning: { es: 'Stridebreaker para slow y MS — necesitás pegarte al target. BOTRK para DPS y sustain. Sterak\'s para shield que te da más grit para W. Dead Man\'s para movilidad.', en: 'Stridebreaker for slow and MS — need to stick to target. BOTRK for DPS and sustain. Sterak\'s for shield that gives more grit for W. Dead Man\'s for mobility.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: autos empowered son tu DPS. W segundo: más daño de puñetazo y shield. E último: pull es útil con un punto.', en: 'Q first: empowered autos are your DPS. W second: more punch damage and shield. E last: pull is useful with one point.' }
  },
  Shaco: {
    playstyle: { es: 'Cazar', en: 'Hunt' },
    powerSpike: 'early',
    identity: { es: 'Trickster jungler con invisibilidad, trampas y clon. Q te hace invisible + blink. W cajas de fear. E slow/ejecución. R clon que explota. El campeón más molesto del juego.', en: 'Trickster jungler with invisibility, traps and clone. Q makes you invisible + blink. W fear boxes. E slow/execution. R clone that explodes. Most annoying champion in the game.' },
    gameplan: {
      early: { es: 'Poné cajas (W) en campamentos antes de que spawneen para clear gratis. Gankeá nivel 2-3 con Q invisible → auto backstab (más daño por detrás) + E slow. Tus ganks tempranas son aterradoras.', en: 'Place boxes (W) at camps before they spawn for free clear. Gank level 2-3 with Q invisible → backstab auto (more damage from behind) + E slow. Early ganks are terrifying.' },
      mid: { es: 'Poné cajas en bushes estratégicos para traps. Buscá picks con Q invisible. R clon para confundir — controlá el clon y hacé que vaya al frente mientras vos flanqueás.', en: 'Place boxes in strategic bushes for traps. Look for picks with Q invisible. R clone to confuse — control clone and send it front while you flank.' },
      late: { es: 'Splitpusheá con cajas y clon. Si te pillan, Q invisible para escapar. En teamfights, el clon explota para AoE + fear de cajas en los bushes. Sos un agente del caos.', en: 'Splitpush with boxes and clone. If caught, Q invisible to escape. In teamfights, clone explodes for AoE + fear from boxes in bushes. You\'re an agent of chaos.' }
    },
    combo: {
      basic: { keys: 'Q(invisible) → AA(backstab) → E', es: 'Q blink invisible → Auto por detrás (backstab bonus) → E slow/ejecución. Burst rápido desde la invisibilidad.', en: 'Q invisible blink → Auto from behind (backstab bonus) → E slow/execution. Quick burst from invisibility.' },
      advanced: { keys: 'R → Q(invisible) → (enviar clon) → AA(backstab) → E → Ignite', es: 'R clon → Q invisible → Mandá el clon al frente como distracción → Vos atacá por detrás → Backstab + E. El clon explota cuando muere.', en: 'R clone → Q invisible → Send clone forward as distraction → You attack from behind → Backstab + E. Clone explodes on death.' }
    },
    buildReasoning: { es: 'AD: Profane Hydra + lethality para one-shot. AP: Liandry\'s + Malignance para cajas que hacen daño absurdo. Ambos builds funcionan — AD para assassin, AP para traps.', en: 'AD: Profane Hydra + lethality for one-shot. AP: Liandry\'s + Malignance for boxes that deal absurd damage. Both builds work — AD for assassin, AP for traps.' },
    skillOrder: { order: 'E > Q > W (AD) / W > E > Q (AP)', es: 'AD: E primero para burst. AP: W primero para cajas. Q segundo en ambos para menor CD de invisibilidad.', en: 'AD: E first for burst. AP: W first for boxes. Q second in both for lower invis CD.' }
  },
  Shen: {
    playstyle: { es: 'Proteger', en: 'Protect' },
    powerSpike: 'mid',
    identity: { es: 'Tanque de top con R global que teleporta a un aliado y le da shield masivo. Tu E taunt es un dash que fuerza autos. Protegés al equipo desde cualquier lado del mapa.', en: 'Top tank with global R that teleports to an ally and gives massive shield. E taunt is a dash that forces autos. Protect the team from anywhere on the map.' },
    gameplan: {
      early: { es: 'Tradeá con Q (espada que pasa a través del enemigo empowering autos) y E taunt. Tu pasiva da shield en autos. Contra AD matchups sos muy fuerte. W bloquea autos en un área.', en: 'Trade with Q (sword passes through enemy empowering autos) and E taunt. Passive gives shield on autos. Against AD matchups you\'re very strong. W blocks autos in an area.' },
      mid: { es: 'R global para salvar aliados en cualquier lane. Splitpusheá y cuando tu equipo pelea, R para teleportarte. El shield de R es masivo. Después del TP, E taunt al enemigo que diveó a tu carry.', en: 'Global R to save allies in any lane. Splitpush and when team fights, R to teleport. R shield is massive. After TP, E taunt the enemy who dove your carry.' },
      late: { es: 'Splitpush + R global es tu pattern. Pusheá sidelane, cuando hay pelea R. Tu equipo pelea 4v5 con tu shield → llegás → E taunt al carry → W zone. El timing de R es todo.', en: 'Splitpush + global R is your pattern. Push sidelane, when fight happens R. Team fights 4v5 with your shield → you arrive → E taunt carry → W zone. R timing is everything.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA → AA → AA', es: 'E taunt dash → Q espada (empowering 3 autos) → 3 autos empowered. El E fuerza al enemigo a atacarte.', en: 'E taunt dash → Q sword (empowering 3 autos) → 3 empowered autos. E forces enemy to attack you.' },
      advanced: { keys: 'R(aliado) → E(taunt al diver) → W → Q → AA', es: 'R teleporta al aliado con shield → E taunt al que lo estaba atacando → W bloquea autos → Q autos empowered. Salvaste al carry y CC\'aste al diver.', en: 'R teleport to ally with shield → E taunt whoever was attacking → W block autos → Q empowered autos. Saved the carry and CC\'d the diver.' }
    },
    buildReasoning: { es: 'Sunfire para daño AoE pasivo. Iceborn para slow field. Titanic Hydra para más daño con tu vida alta. Spirit Visage para más shield de pasiva.', en: 'Sunfire for passive AoE damage. Iceborn for slow field. Titanic Hydra for more damage with high health. Spirit Visage for more passive shield.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: autos empowered son tu daño. E segundo: menor CD del taunt. W último: zone de bloqueo de autos es buena con un punto.', en: 'Q first: empowered autos are your damage. E second: lower taunt CD. W last: auto block zone is good with one point.' }
  },
  Shyvana: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'Jungler que se transforma en dragón con R. Forma humana es DPS, forma dragón es burst AoE. Tus habilidades se amplifican en forma dragón. Matar dragones te da stats extra.', en: 'Jungler who transforms into dragon with R. Human form is DPS, dragon form is AoE burst. Abilities amplify in dragon form. Killing dragons gives extra stats.' },
    gameplan: {
      early: { es: 'Farmeá rápido con W AoE speed y E fireball. No tenés R hasta que se cargue la barra de furia. Priorizar dragones te da stats extra de pasiva. Ganks son débiles sin R.', en: 'Farm fast with W AoE speed and E fireball. Don\'t have R until fury bar charges. Prioritize dragons for extra passive stats. Ganks are weak without R.' },
      mid: { es: 'Con R forma dragón tu E es un fireball AoE que deja charco de fuego. R dash → E AoE → Q auto reset. El burst de dragón es sorprendente.', en: 'With R dragon form your E is an AoE fireball that leaves fire pool. R dash → E AoE → Q auto reset. Dragon burst is surprising.' },
      late: { es: 'En teamfights, R al grupo → E AoE fireball → W speed + AoE → Q DPS. Con Nashor\'s + AP tu E fireball one-shotea backlines. O DPS con on-hit.', en: 'In teamfights, R into group → E AoE fireball → W speed + AoE → Q DPS. With Nashor\'s + AP your E fireball one-shots backlines. Or DPS with on-hit.' }
    },
    combo: {
      basic: { keys: 'R → E → W → Q → AA', es: 'R dash forma dragón → E fireball AoE → W speed + AoE → Q auto reset → Autos.', en: 'R dash dragon form → E AoE fireball → W speed + AoE → Q auto reset → Autos.' },
      advanced: { keys: 'R(a grupo) → E(AoE) → Flash(reposicionar) → Q → W → AA', es: 'R dash al grupo → E fireball masivo → Flash si necesitás reposicionar → Q reset → W AoE → Autos. El burst AoE de dragón es nuclear.', en: 'R dash into group → E massive fireball → Flash to reposition if needed → Q reset → W AoE → Autos. Dragon AoE burst is nuclear.' }
    },
    buildReasoning: { es: 'AP: Nashor\'s + Riftmaker para DPS AP. AD/On-hit: BOTRK + Guinsoo\'s para DPS. Ambos builds funcionan. AP para burst de E, AD para DPS sostenido.', en: 'AP: Nashor\'s + Riftmaker for AP DPS. AD/On-hit: BOTRK + Guinsoo\'s for DPS. Both builds work. AP for E burst, AD for sustained DPS.' },
    skillOrder: { order: 'E > W > Q', es: 'E primero: tu daño principal (especialmente en forma dragón). W segundo: clear speed y MS. Q último: auto reset es útil con un punto.', en: 'E first: main damage (especially in dragon form). W second: clear speed and MS. Q last: auto reset is useful with one point.' }
  },
  Singed: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'El tanque más troll del juego. Corrés y dejás veneno atrás (Q toggle). El que te persigue se muere. W pega grounded (no pueden dashear). E flip por encima tuyo. Proxy farming legend.', en: 'The most troll tank in the game. Run and leave poison behind (Q toggle). Whoever chases you dies. W applies grounded (can\'t dash). E flips over you. Proxy farming legend.' },
    gameplan: {
      early: { es: 'Proxy farm (farmeá detrás de la torre enemiga para que la wave no llegue). Si te persiguen, veneno + W + E flip. Tu pasiva da MS cerca de campeones. Conqueror + veneno = sustain.', en: 'Proxy farm (farm behind enemy tower so wave doesn\'t reach). If they chase, poison + W + E flip. Passive gives MS near champions. Conqueror + poison = sustain.' },
      mid: { es: 'R te da stats masivos (AP, armadura, MR, MS, HP regen). Con R activo corré por el equipo enemigo dejando veneno. W grounded impide dashes. E flip al carry hacia tu equipo.', en: 'R gives massive stats (AP, armor, MR, MS, HP regen). With R active run through enemy team leaving poison. W grounded prevents dashes. E flip carry into your team.' },
      late: { es: 'Splitpush es tu juego. Si te persiguen, los matás con veneno. Si no, pusheás. En teamfights, R activo → corré por el medio dejando veneno → E flip al carry → W grounded en divers.', en: 'Splitpush is your game. If they chase, poison kills them. If not, you push. In teamfights, active R → run through middle leaving poison → E flip carry → W grounded on divers.' }
    },
    combo: {
      basic: { keys: 'Q(toggle) → E(flip) → W', es: 'Q veneno → E flip al enemigo sobre el veneno → W grounded para que no pueda dashear. Se pudre en tu veneno.', en: 'Q poison → E flip enemy onto poison → W grounded so they can\'t dash. They rot in your poison.' },
      advanced: { keys: 'R → Q → W → E(flip) → AA(Fling)', es: 'R para stats → Q veneno → W grounded → E flip al carry dentro del veneno + grounded → Seguí corriendo. El carry no puede escapar.', en: 'R for stats → Q poison → W grounded → E flip carry into poison + grounded → Keep running. Carry can\'t escape.' }
    },
    buildReasoning: { es: 'Rylai\'s es CORE — tu veneno Q slowa permanentemente con Rylai\'s. Liandry\'s para quema constante con veneno. Demonic Embrace para más quema. Deadman\'s para MS.', en: 'Rylai\'s is CORE — your Q poison permanently slows with Rylai\'s. Liandry\'s for constant burn with poison. Demonic Embrace for more burn. Dead Man\'s for MS.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: tu daño de veneno principal. E segundo: menor CD del flip. W último: grounded es bueno con un punto.', en: 'Q first: main poison damage. E second: lower flip CD. W last: grounded is good with one point.' }
  },
  Sion: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'Tanque que escala vida infinitamente con W (cada minion/kill da vida permanente). R es un semi-truck que carga en línea recta y stunea masivamente. Pasiva zombie al morir.', en: 'Tank who scales health infinitely with W (each minion/kill gives permanent health). R is a semi-truck that charges in a straight line and stuns massively. Zombie passive on death.' },
    gameplan: {
      early: { es: 'Farmeá W stacks (vida permanente por minions). Q carga para knock-up. E slow que empuja minions al enemigo para poke. Tu early es decente con Q full charge trades.', en: 'Farm W stacks (permanent health from minions). Q charges for knock-up. E slow that pushes minions into enemy for poke. Early is decent with full charge Q trades.' },
      mid: { es: 'R desde la base o desde fog para engage sorpresa. La carga de R es como un camión — stun masivo si pega. En lane, sidelane Q charge en el bush para picks.', en: 'R from base or fog for surprise engage. R charge is like a truck — massive stun if it hits. In lane, sidelane Q charge in bush for picks.' },
      late: { es: 'Con 500+ stacks de W tenés 5000+ HP. R engage → Q knockup → W shield. Pasiva zombie te da DPS extra cuando morís. Sos un tanque gigante unkillable (y seguís pegando muerto).', en: 'With 500+ W stacks you have 5000+ HP. R engage → Q knockup → W shield. Zombie passive gives extra DPS when you die. Giant unkillable tank (and keep hitting when dead).' }
    },
    combo: {
      basic: { keys: 'E → Q(cargar) → W', es: 'E slow → Q cargado knock-up (el slow te ayuda a cargar completo) → W shield para tanquear.', en: 'E slow → Charged Q knock-up (slow helps you fully charge) → W shield to tank.' },
      advanced: { keys: 'R(charge) → Q(cargar) → W → E', es: 'R camión stun → Q cargado knock-up → W shield/daño → E slow. El R stun te da tiempo para cargar Q.', en: 'R truck stun → Charged Q knock-up → W shield/damage → E slow. R stun gives time to charge Q.' }
    },
    buildReasoning: { es: 'Heartsteel stackea vida con tu ya enorme pool de HP. Sunfire para AoE daño. Titanic Hydra convierte tu vida masiva en daño. Warmog\'s para regen con tanta vida.', en: 'Heartsteel stacks health with your already enormous HP pool. Sunfire for AoE damage. Titanic Hydra converts your massive health to damage. Warmog\'s for regen with so much health.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: knock-up daño y waveclear. E segundo: poke y slow. W último: shield es % de vida, escala con la vida que stackeás.', en: 'Q first: knock-up damage and waveclear. E second: poke and slow. W last: shield is % health, scales with stacked health.' }
  },
  Sivir: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'mid',
    identity: { es: 'ADC de waveclear y utilidad. Q boomerang pega ida y vuelta. W ricochet autos bouncing. E spellshield que devuelve maná. R da MS a TODO el equipo. La mejor waveclear ADC.', en: 'Waveclear and utility ADC. Q boomerang hits going and returning. W ricochet bouncing autos. E spellshield that refunds mana. R gives MS to ENTIRE team. Best waveclear ADC.' },
    gameplan: {
      early: { es: 'Farmeá con Q boomerang y W ricochet. E spellshield bloquea una habilidad enemiga y te devuelve maná. Tu early no es el más fuerte — farmeá y escalá.', en: 'Farm with Q boomerang and W ricochet. E spellshield blocks one enemy ability and refunds mana. Your early isn\'t strongest — farm and scale.' },
      mid: { es: 'Pusheá waves instantáneamente con W ricochet + Q. R para rotaciones de equipo (MS AoE). En peleas, tu W bouncing ricochet con crit hace AoE obsceno.', en: 'Insta-push waves with W ricochet + Q. R for team rotations (AoE MS). In fights, your W bouncing ricochet with crit deals obscene AoE.' },
      late: { es: 'W ricochet con crit items bouncea entre todo el equipo enemigo. Tu DPS AoE es de los más altos del juego. R para que tu equipo llegue a peleas o escape. E para bloquear la habilidad clave.', en: 'W ricochet with crit items bounces through entire enemy team. Your AoE DPS is among the highest in the game. R for team to reach fights or escape. E to block key ability.' }
    },
    combo: {
      basic: { keys: 'W → AA → AA → AA → Q', es: 'W activar ricochet → Autos bouncing → Q boomerang. W hace que tus autos bounteen a targets cercanos.', en: 'W activate ricochet → Bouncing autos → Q boomerang. W makes autos bounce to nearby targets.' },
      advanced: { keys: 'R → W → AA → AA → Q → E(anticipar CC)', es: 'R speed del equipo → W ricochet → Autos AoE → Q boomerang → E spellshield si te tiran algo. DPS AoE constante.', en: 'R team speed → W ricochet → AoE autos → Q boomerang → E spellshield if they target you. Constant AoE DPS.' }
    },
    buildReasoning: { es: 'Infinity Edge core para ricochet crit AoE. Navori para menor CD de W y Q. Phantom Dancer para AS. Lord Dominik\'s vs tanques.', en: 'Infinity Edge core for ricochet crit AoE. Navori for lower W and Q CD. Phantom Dancer for AS. Lord Dominik\'s vs tanks.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero: daño y poke principal. W segundo: más ricochet bounces. E último: spellshield es bueno con un punto.', en: 'Q first: main damage and poke. W second: more ricochet bounces. E last: spellshield is good with one point.' }
  },
  Skarner: {
    playstyle: { es: 'Engagear', en: 'Engage' },
    powerSpike: 'mid',
    identity: { es: 'Tanque jungler con R que agarra a un enemigo y lo arrastra. Tu R secuestra al carry y lo traés a tu equipo. Q poke, W shield, E stun. Simple pero eficaz.', en: 'Tank jungler with R that grabs an enemy and drags them. R kidnaps the carry and brings them to your team. Q poke, W shield, E stun. Simple but effective.' },
    gameplan: {
      early: { es: 'Clear con Q poke y E para stun. Gankeá nivel 6 — tu R es un secuestro point-and-click. Flash → R al carry enemigo y arrástralo hacia tu equipo.', en: 'Clear with Q poke and E for stun. Gank level 6 — R is a point-and-click kidnap. Flash → R the enemy carry and drag them to your team.' },
      mid: { es: 'Flash + R es tu play maker principal. Secuestrá al carry en peleas de objetivos. W shield para llegar, E stun para CC extra. Tu engage es simple y mortal.', en: 'Flash + R is your main play maker. Kidnap carry in objective fights. W shield to reach, E stun for extra CC. Your engage is simple and deadly.' },
      late: { es: 'Un Flash + R en el carry gana la teamfight. El carry aparece en medio de tu equipo y muere. Después de R, usá E y Q para más CC y daño. Sos un tanque de engage simple pero eficaz.', en: 'Flash + R on carry wins the teamfight. Carry ends up in middle of your team and dies. After R, use E and Q for more CC and damage. Simple but effective engage tank.' }
    },
    combo: {
      basic: { keys: 'E → Q → AA → W', es: 'E stun → Q poke → Auto → W shield. CC + daño básico.', en: 'E stun → Q poke → Auto → W shield. CC + basic damage.' },
      advanced: { keys: 'Flash → R → E → Q → W', es: 'Flash encima → R secuestro (arrastrá al carry) → E stun cuando termina R → Q para más daño → W shield.', en: 'Flash on top → R kidnap (drag carry) → E stun when R ends → Q for more damage → W shield.' }
    },
    buildReasoning: { es: 'Iceborn Gauntlet para slow field después de R. Sunfire para daño AoE. Frozen Heart vs AD. Force of Nature vs AP. Full tanque.', en: 'Iceborn Gauntlet for slow field after R. Sunfire for AoE damage. Frozen Heart vs AD. Force of Nature vs AP. Full tank.' },
    skillOrder: { order: 'Q > E > W', es: 'Q primero: daño principal. E segundo: menor CD del stun. W último: shield no necesita niveles.', en: 'Q first: main damage. E second: lower stun CD. W last: shield doesn\'t need levels.' }
  },
  Smolder: {
    playstyle: { es: 'Farmear', en: 'Farm' },
    powerSpike: 'late',
    identity: { es: 'ADC dragón que escala con stacks de Q (como Nasus pero ADC). Cada Q que pega da stacks. A 25 stacks Q tiene AoE, a 125 Q tiene explosión, a 225 Q hace burn AoE. Hyperscaler.', en: 'Dragon ADC who scales with Q stacks (like Nasus but ADC). Each Q hit gives stacks. At 25 Q has AoE, at 125 Q has explosion, at 225 Q does AoE burn. Hyperscaler.' },
    gameplan: {
      early: { es: 'Spameá Q para stacks. Q en minions + campeones. Farmeá lo más que puedas. Tu early es débil pero cada Q que pegas te acerca al late game monster. W para poke de lejos.', en: 'Spam Q for stacks. Q on minions + champions. Farm as much as possible. Early is weak but each Q hit brings you closer to late game monster. W for ranged poke.' },
      mid: { es: 'A 25 stacks tu Q tiene AoE — empieza a doler en teamfights. A 125 stacks Q tiene explosión extra. Seguí farmeando y pokeando con Q + W. E para escape.', en: 'At 25 stacks Q has AoE — starts hurting in teamfights. At 125 stacks Q has extra explosion. Keep farming and poking with Q + W. E for escape.' },
      late: { es: 'A 225 stacks tu Q es un misil nuclear que quema AoE. Tu DPS es absurdo. R ejecuta desde largo alcance. Sos uno de los ADCs más fuertes del ultra-late game.', en: 'At 225 stacks Q is a nuclear missile that AoE burns. Your DPS is absurd. R executes from long range. You\'re one of the strongest ultra-late game ADCs.' }
    },
    combo: {
      basic: { keys: 'Q → AA → Q → AA', es: 'Q spam + autos entre cada Q. Cada Q pega stacks. Mantenelo simple y constante.', en: 'Q spam + autos between each Q. Each Q hits for stacks. Keep it simple and constant.' },
      advanced: { keys: 'W → Q → AA → E(si peligro) → R(ejecutar)', es: 'W poke desde lejos → Q para stack + daño → Auto → E si te diveán → R ejecutar a los que están bajos. R es un beam de largo alcance.', en: 'W poke from range → Q for stack + damage → Auto → E if dived → R execute low targets. R is a long range beam.' }
    },
    buildReasoning: { es: 'Trinity Force prockea con tu Q spam constante — Spellblade en cada Q. Manamune para resolver maná del spam. Infinity Edge para crit scaling.', en: 'Trinity Force procs with constant Q spam — Spellblade on every Q. Manamune to solve spam mana. Infinity Edge for crit scaling.' },
    skillOrder: { order: 'Q > W > E', es: 'Q primero SIEMPRE: es tu identidad, stacks y daño. W segundo: más poke. E último: escape no necesita niveles.', en: 'Q first ALWAYS: it\'s your identity, stacks and damage. W second: more poke. E last: escape doesn\'t need levels.' }
  },
}
