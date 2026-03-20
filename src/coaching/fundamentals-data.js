/**
 * LoL Fundamentals / Academy — comprehensive educational content.
 * Every topic has ES (Argentine Spanish, voseo) and EN translations.
 * Content uses simple HTML for formatting.
 */

export const FUNDAMENTALS = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. TIPOS DE DANO (DAMAGE TYPES)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'damage-types',
    title: { es: 'Tipos de Dano', en: 'Damage Types' },
    icon: '\u2694\uFE0F',
    topics: [
      {
        title: { es: 'AD vs AP vs Verdadero', en: 'AD vs AP vs True Damage' },
        content: {
          es: `<p>En League of Legends hay <strong>tres tipos de dano</strong>:</p>
<ul>
  <li><strong>Dano Fisico (Physical / AD Damage):</strong> Es el dano que se reduce con <strong>Armadura (Armor)</strong>. Los autoataques basicos, la mayoria de las habilidades de campeones AD (Zed, Talon, Draven) y las torretas hacen dano fisico.</li>
  <li><strong>Dano Magico (Magic / AP Damage):</strong> Es el dano que se reduce con <strong>Resistencia Magica (MR)</strong>. La mayoria de las habilidades de magos y supports (Lux, Brand, Syndra) hacen dano magico.</li>
  <li><strong>Dano Verdadero (True Damage):</strong> <strong>Ignora TODA resistencia</strong>. No se reduce por armadura ni MR. Ejemplos: Ignite, la pasiva de Vayne (Silver Bolts, cada 3 hits), la ult de Cho'Gath (Feast), y el dano de Kraken Slayer.</li>
</ul>
<p><strong>Importante:</strong> El tipo de dano NO depende de que stat compres, sino de lo que dice la habilidad. Por ejemplo, la E de Ezreal escala con AD pero hace <em>dano magico</em>. Corki hace 80% de su dano de autoataques como magico gracias a su pasiva.</p>
<p><strong>Consejo practico:</strong> Presiona la tecla <strong>C</strong> en la pantalla de muerte para ver que tipo de dano te mato. Si ves mucho dano fisico, compra Armadura. Si ves mucho dano magico, compra MR.</p>`,
          en: `<p>In League of Legends there are <strong>three damage types</strong>:</p>
<ul>
  <li><strong>Physical Damage (AD Damage):</strong> Reduced by <strong>Armor</strong>. Basic attacks, most AD champion abilities (Zed, Talon, Draven), and turrets deal physical damage.</li>
  <li><strong>Magic Damage (AP Damage):</strong> Reduced by <strong>Magic Resistance (MR)</strong>. Most mage and support abilities (Lux, Brand, Syndra) deal magic damage.</li>
  <li><strong>True Damage:</strong> <strong>Ignores ALL resistances</strong>. Not reduced by armor or MR. Examples: Ignite, Vayne's passive (Silver Bolts, every 3 hits), Cho'Gath's ult (Feast), and Kraken Slayer damage.</li>
</ul>
<p><strong>Important:</strong> The damage type does NOT depend on what stat you buy, but on what the ability says. For example, Ezreal's E scales with AD but deals <em>magic damage</em>. Corki does 80% of his auto-attack damage as magic thanks to his passive.</p>
<p><strong>Practical tip:</strong> Press <strong>C</strong> on the death screen to see what damage type killed you. If you see lots of physical damage, buy Armor. If you see lots of magic damage, buy MR.</p>`,
        },
      },
      {
        title: { es: 'Como funcionan los autoataques', en: 'How basic attacks work' },
        content: {
          es: `<p>Los <strong>autoataques basicos</strong> siempre hacen <strong>dano fisico</strong> por defecto. Su dano base es igual a tu <strong>AD total</strong> (base + bonus).</p>
<p>Sin embargo, hay excepciones importantes:</p>
<ul>
  <li><strong>Corki:</strong> Su pasiva hace que el 80% del dano de sus autos sea <em>magico</em> y el 20% sea fisico.</li>
  <li><strong>Kayle:</strong> Cuando activa su E (Starfire Spellblade), sus autos pasan a hacer parte de dano magico. Despues del nivel 11, TODOS sus autos hacen dano magico bonus permanentemente (ondas de fuego).</li>
  <li><strong>Teemo:</strong> Su E (Toxic Shot) agrega dano magico on-hit a cada autoataque. El dano base del auto sigue siendo fisico, pero el dano adicional del veneno es magico.</li>
  <li><strong>Thresh:</strong> Su E (Flay) pasiva agrega dano magico bonus a sus autos basado en las almas recolectadas.</li>
</ul>
<p><strong>Concepto clave:</strong> El dano base de tu auto siempre es tu AD. Lo que puede cambiar es si se agrega dano extra de otro tipo encima.</p>`,
          en: `<p><strong>Basic attacks</strong> always deal <strong>physical damage</strong> by default. Their base damage equals your <strong>total AD</strong> (base + bonus).</p>
<p>However, there are important exceptions:</p>
<ul>
  <li><strong>Corki:</strong> His passive makes 80% of his auto damage <em>magic</em> and 20% physical.</li>
  <li><strong>Kayle:</strong> When she activates E (Starfire Spellblade), her autos deal part magic damage. After level 11, ALL her autos permanently deal bonus magic damage (fire waves).</li>
  <li><strong>Teemo:</strong> His E (Toxic Shot) adds on-hit magic damage to every auto. The auto's base damage is still physical, but the poison bonus is magic.</li>
  <li><strong>Thresh:</strong> His E (Flay) passive adds bonus magic damage to his autos based on collected souls.</li>
</ul>
<p><strong>Key concept:</strong> Your auto's base damage is always your AD. What can change is whether extra damage of another type is added on top.</p>`,
        },
      },
      {
        title: { es: 'Mito: "AP reduce el dano de tus autos"', en: 'Myth: "AP reduces your auto damage"' },
        content: {
          es: `<p>Esto es un <strong>mito MUY comun</strong> entre jugadores nuevos. Vamos a aclararlo:</p>
<p><strong>Comprar AP NO reduce el dano de tus autoataques.</strong> Punto. Nunca. Jamas.</p>
<p>Lo que pasa es lo siguiente: si jugás, por ejemplo, Lux y compras AP, el dano de tus autos NO baja. Sigue siendo igual a tu AD total. Lo que sucede es que <strong>no obtenes ningun beneficio extra en los autos</strong> porque Lux no tiene escalado de AP en sus autoataques (salvo su pasiva Illumination).</p>
<p>Comparemos:</p>
<ul>
  <li><strong>Lux nivel 10 sin items:</strong> Auto = ~75 de dano fisico (su AD base)</li>
  <li><strong>Lux nivel 10 con Luden's (80 AP):</strong> Auto = ~75 de dano fisico (MISMO dano, el AP no le agrega nada al auto normal)</li>
  <li><strong>Lux nivel 10 con un Long Sword (10 AD):</strong> Auto = ~85 de dano fisico (el AD SI le suma al auto)</li>
</ul>
<p>El AP simplemente <strong>no le suma</strong> al auto, pero <strong>tampoco le resta</strong>. Es neutro.</p>
<p><strong>Excepcion:</strong> Algunos campeones SI tienen escalado de AP en sus autoataques: Kayle (E), Teemo (E), Diana (pasiva), Twisted Fate (W pick-a-card), Ekko (pasiva), Fizz (W), entre otros. Para estos campeones, comprar AP SI aumenta el dano de sus autos.</p>`,
          en: `<p>This is a <strong>VERY common myth</strong> among new players. Let's clarify it:</p>
<p><strong>Buying AP does NOT reduce your auto-attack damage.</strong> Period. Never. Ever.</p>
<p>Here's what happens: if you play, say, Lux and buy AP, your auto damage does NOT go down. It remains equal to your total AD. What happens is that <strong>you get no extra benefit on autos</strong> because Lux has no AP scaling on her basic attacks (except her Illumination passive).</p>
<p>Let's compare:</p>
<ul>
  <li><strong>Lux level 10 no items:</strong> Auto = ~75 physical damage (her base AD)</li>
  <li><strong>Lux level 10 with Luden's (80 AP):</strong> Auto = ~75 physical damage (SAME damage, AP adds nothing to the normal auto)</li>
  <li><strong>Lux level 10 with a Long Sword (10 AD):</strong> Auto = ~85 physical damage (AD DOES add to the auto)</li>
</ul>
<p>AP simply <strong>doesn't add</strong> to the auto, but it <strong>also doesn't subtract</strong>. It's neutral.</p>
<p><strong>Exception:</strong> Some champions DO have AP scaling on their autos: Kayle (E), Teemo (E), Diana (passive), Twisted Fate (W pick-a-card), Ekko (passive), Fizz (W), among others. For these champions, buying AP DOES increase their auto damage.</p>`,
        },
      },
      {
        title: { es: 'Efectos On-Hit', en: 'On-Hit Effects' },
        content: {
          es: `<p>Los <strong>efectos on-hit</strong> son dano o efectos extra que se aplican <strong>cada vez que un autoataque conecta</strong>. Son una capa adicional encima del dano base del auto.</p>
<p><strong>Fuentes comunes de on-hit:</strong></p>
<ul>
  <li><strong>Items:</strong> Blade of the Ruined King (dano fisico basado en % HP del enemigo), Wit's End (dano magico on-hit), Nashor's Tooth (dano magico basado en AP), Kraken Slayer (dano verdadero cada 3 hits).</li>
  <li><strong>Habilidades de campeones:</strong> Vayne W (dano verdadero cada 3 hits), Kog'Maw W (% HP magico on-hit), Varus W (% HP magico on-hit), Kayle E (dano magico on-hit).</li>
  <li><strong>Runas:</strong> Press the Attack (dano bonus despues de 3 hits), Lethal Tempo (stacks de AS con autos).</li>
</ul>
<p><strong>Interaccion clave:</strong> Habilidades que aplican on-hit:</p>
<ul>
  <li><strong>Ezreal Q</strong> (Mystic Shot) aplica efectos on-hit. Por eso Ezreal puede usar Trinity Force o Blade of the Ruined King.</li>
  <li><strong>Gangplank Q</strong> (Parrrley) aplica on-hit. Por eso Sheen/Trinity es core en GP.</li>
  <li><strong>Irelia Q</strong> (Bladesurge) aplica on-hit. Por eso BOTRK es su primer item.</li>
  <li><strong>Yasuo/Yone Q</strong> aplica on-hit en el primer enemigo golpeado.</li>
</ul>
<p><strong>Life Steal</strong> solo aplica al dano fisico del auto. <strong>Omnivamp</strong> aplica a todo el dano (fisico, magico, verdadero) pero al 33% de efectividad en dano de area.</p>`,
          en: `<p><strong>On-hit effects</strong> are extra damage or effects that are applied <strong>every time a basic attack lands</strong>. They are an additional layer on top of the auto's base damage.</p>
<p><strong>Common on-hit sources:</strong></p>
<ul>
  <li><strong>Items:</strong> Blade of the Ruined King (physical damage based on % enemy HP), Wit's End (magic on-hit damage), Nashor's Tooth (AP-based magic damage), Kraken Slayer (true damage every 3 hits).</li>
  <li><strong>Champion abilities:</strong> Vayne W (true damage every 3 hits), Kog'Maw W (% HP magic on-hit), Varus W (% HP magic on-hit), Kayle E (magic on-hit damage).</li>
  <li><strong>Runes:</strong> Press the Attack (bonus damage after 3 hits), Lethal Tempo (AS stacks from autos).</li>
</ul>
<p><strong>Key interaction:</strong> Abilities that apply on-hit:</p>
<ul>
  <li><strong>Ezreal Q</strong> (Mystic Shot) applies on-hit effects. That's why Ezreal can use Trinity Force or BOTRK.</li>
  <li><strong>Gangplank Q</strong> (Parrrley) applies on-hit. That's why Sheen/Trinity is core on GP.</li>
  <li><strong>Irelia Q</strong> (Bladesurge) applies on-hit. That's why BOTRK is her first item.</li>
  <li><strong>Yasuo/Yone Q</strong> applies on-hit to the first enemy hit.</li>
</ul>
<p><strong>Life Steal</strong> only applies to the physical damage of the auto. <strong>Omnivamp</strong> applies to all damage (physical, magic, true) but at 33% effectiveness on AoE damage.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. STATS Y ESCALADO (STATS & SCALING)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'stats-scaling',
    title: { es: 'Stats y Escalado', en: 'Stats & Scaling' },
    icon: '\uD83D\uDCCA',
    topics: [
      {
        title: { es: 'Todas las stats explicadas', en: 'All stats explained' },
        content: {
          es: `<p>Estas son <strong>todas las estadisticas</strong> del juego:</p>
<table>
  <tr><th>Stat</th><th>Que hace</th><th>Quien la quiere</th></tr>
  <tr><td><strong>AD (Attack Damage)</strong></td><td>Aumenta el dano de tus autoataques y de habilidades que escalan con AD</td><td>Carries AD, asesinos AD, bruisers</td></tr>
  <tr><td><strong>AP (Ability Power)</strong></td><td>Aumenta el dano de habilidades que escalan con AP (no afecta autos salvo excepciones)</td><td>Magos, supports AP, algunos junglers</td></tr>
  <tr><td><strong>AS (Attack Speed)</strong></td><td>Cuantos autoataques por segundo haces. Mas AS = mas autos = mas DPS</td><td>ADCs, on-hit champions, Jax, Irelia</td></tr>
  <tr><td><strong>Crit (Probabilidad de Critico)</strong></td><td>Probabilidad de que tu auto haga x1.75 de dano. A 100% crit, TODOS tus autos critean</td><td>ADCs, Yasuo/Yone (doble crit chance)</td></tr>
  <tr><td><strong>Lethality</strong></td><td>Penetracion de armadura plana. Ignora X puntos de armadura del enemigo (escala con tu nivel)</td><td>Asesinos AD (Zed, Talon, Kha'Zix)</td></tr>
  <tr><td><strong>Penetracion Magica (Magic Pen)</strong></td><td>Ignora MR del enemigo. Viene en plana (Sorc Shoes) y porcentual (Void Staff)</td><td>Magos burst, supports AP con dano</td></tr>
  <tr><td><strong>Armor</strong></td><td>Reduce dano fisico recibido</td><td>Tanks, bruisers, contra equipos AD</td></tr>
  <tr><td><strong>MR (Magic Resistance)</strong></td><td>Reduce dano magico recibido</td><td>Tanks, contra equipos AP</td></tr>
  <tr><td><strong>HP (Health Points)</strong></td><td>Tu vida total. Mas HP = sobrevivís mas (pero es vulnerable a dano % HP)</td><td>Todos, especialmente tanks</td></tr>
  <tr><td><strong>Mana</strong></td><td>Recurso para usar habilidades. Sin mana, no podes castear</td><td>Magos, algunos supports y ADCs</td></tr>
  <tr><td><strong>AH (Ability Haste)</strong></td><td>Reduce el cooldown de tus habilidades. Antes se llamaba CDR</td><td>Magos, bruisers, tanks, supports</td></tr>
  <tr><td><strong>Life Steal</strong></td><td>Cura un % del dano fisico de tus autos</td><td>ADCs, bruisers AD</td></tr>
  <tr><td><strong>Omnivamp</strong></td><td>Cura un % de TODO el dano que haces (fisico, magico, verdadero). 33% efectividad en AoE</td><td>Bruisers, algunos magos</td></tr>
  <tr><td><strong>Move Speed (MS)</strong></td><td>Que tan rapido te moves. Base ~325-345 para la mayoria. Boots dan +25 a +45</td><td>Todos. MS es la stat mas infravalorada del juego</td></tr>
</table>`,
          en: `<p>These are <strong>all the stats</strong> in the game:</p>
<table>
  <tr><th>Stat</th><th>What it does</th><th>Who wants it</th></tr>
  <tr><td><strong>AD (Attack Damage)</strong></td><td>Increases your auto-attack damage and abilities that scale with AD</td><td>AD carries, AD assassins, bruisers</td></tr>
  <tr><td><strong>AP (Ability Power)</strong></td><td>Increases damage of abilities that scale with AP (doesn't affect autos except for exceptions)</td><td>Mages, AP supports, some junglers</td></tr>
  <tr><td><strong>AS (Attack Speed)</strong></td><td>How many auto-attacks per second. More AS = more autos = more DPS</td><td>ADCs, on-hit champions, Jax, Irelia</td></tr>
  <tr><td><strong>Crit (Critical Strike Chance)</strong></td><td>Chance your auto deals x1.75 damage. At 100% crit, ALL your autos crit</td><td>ADCs, Yasuo/Yone (double crit chance)</td></tr>
  <tr><td><strong>Lethality</strong></td><td>Flat armor penetration. Ignores X points of enemy armor (scales with your level)</td><td>AD assassins (Zed, Talon, Kha'Zix)</td></tr>
  <tr><td><strong>Magic Penetration</strong></td><td>Ignores enemy MR. Comes in flat (Sorc Shoes) and percent (Void Staff)</td><td>Burst mages, AP supports with damage</td></tr>
  <tr><td><strong>Armor</strong></td><td>Reduces physical damage received</td><td>Tanks, bruisers, against AD teams</td></tr>
  <tr><td><strong>MR (Magic Resistance)</strong></td><td>Reduces magic damage received</td><td>Tanks, against AP teams</td></tr>
  <tr><td><strong>HP (Health Points)</strong></td><td>Your total health. More HP = survive longer (but vulnerable to %HP damage)</td><td>Everyone, especially tanks</td></tr>
  <tr><td><strong>Mana</strong></td><td>Resource to use abilities. No mana = can't cast</td><td>Mages, some supports and ADCs</td></tr>
  <tr><td><strong>AH (Ability Haste)</strong></td><td>Reduces ability cooldowns. Previously called CDR</td><td>Mages, bruisers, tanks, supports</td></tr>
  <tr><td><strong>Life Steal</strong></td><td>Heals a % of your auto's physical damage</td><td>ADCs, AD bruisers</td></tr>
  <tr><td><strong>Omnivamp</strong></td><td>Heals a % of ALL damage dealt (physical, magic, true). 33% effective on AoE</td><td>Bruisers, some mages</td></tr>
  <tr><td><strong>Move Speed (MS)</strong></td><td>How fast you move. Base is ~325-345 for most champs. Boots give +25 to +45</td><td>Everyone. MS is the most underrated stat in the game</td></tr>
</table>`,
        },
      },
      {
        title: { es: 'Stats base vs bonus (y por que importa)', en: 'Base vs bonus stats (and why it matters)' },
        content: {
          es: `<p>Cada campeon tiene <strong>stats base</strong> que vienen de fabrica y <strong>stats bonus</strong> que vienen de items, runas y buffs.</p>
<p><strong>AD total = AD base + AD bonus</strong></p>
<p>Esto importa MUCHO porque muchas habilidades escalan con <strong>"AD bonus"</strong> o <strong>"AD total"</strong>, y la diferencia es enorme:</p>
<ul>
  <li><strong>Habilidad que escala con "AD total":</strong> Usa TODA tu AD (base + bonus). Ejemplo: Caitlyn Q hace 50/90/130/170/210 + 130% AD total.</li>
  <li><strong>Habilidad que escala con "AD bonus":</strong> Solo usa la AD que obtenes de items/runas. Ejemplo: Riven Q hace 15/35/55/75/95 + 45-75% AD bonus.</li>
</ul>
<p><strong>Ejemplo practico:</strong></p>
<p>Un campeon nivel 10 con 80 AD base y un B.F. Sword (40 AD):</p>
<ul>
  <li>AD total = 120</li>
  <li>AD bonus = 40</li>
  <li>Habilidad con 100% AD total = 120 dano extra</li>
  <li>Habilidad con 100% AD bonus = 40 dano extra</li>
</ul>
<p>Por eso cuando lees las habilidades, presta atencion si dice <strong>"total"</strong> o <strong>"bonus"</strong>. Lo mismo aplica para HP, Armor, etc. Por ejemplo, Gargoyle Stoneplate aumenta tu HP basado en tu <strong>HP bonus</strong>, no tu HP total.</p>
<p><strong>Tip:</strong> Podes ver tus stats base y bonus en la pantalla de stats (tecla C en el juego). Las stats base estan en blanco, las bonus en verde.</p>`,
          en: `<p>Every champion has <strong>base stats</strong> that come built-in and <strong>bonus stats</strong> from items, runes, and buffs.</p>
<p><strong>Total AD = Base AD + Bonus AD</strong></p>
<p>This matters A LOT because many abilities scale with <strong>"bonus AD"</strong> or <strong>"total AD"</strong>, and the difference is huge:</p>
<ul>
  <li><strong>Ability that scales with "total AD":</strong> Uses ALL your AD (base + bonus). Example: Caitlyn Q does 50/90/130/170/210 + 130% total AD.</li>
  <li><strong>Ability that scales with "bonus AD":</strong> Only uses AD from items/runes. Example: Riven Q does 15/35/55/75/95 + 45-75% bonus AD.</li>
</ul>
<p><strong>Practical example:</strong></p>
<p>A champion at level 10 with 80 base AD and a B.F. Sword (40 AD):</p>
<ul>
  <li>Total AD = 120</li>
  <li>Bonus AD = 40</li>
  <li>Ability with 100% total AD = 120 bonus damage</li>
  <li>Ability with 100% bonus AD = 40 bonus damage</li>
</ul>
<p>That's why when reading abilities, pay attention to whether it says <strong>"total"</strong> or <strong>"bonus"</strong>. Same applies to HP, Armor, etc. For instance, Gargoyle Stoneplate increases your HP based on your <strong>bonus HP</strong>, not total HP.</p>
<p><strong>Tip:</strong> You can see your base and bonus stats on the stats screen (C key in-game). Base stats are in white, bonus in green.</p>`,
        },
      },
      {
        title: { es: 'Como crecen las stats por nivel', en: 'How stats grow per level' },
        content: {
          es: `<p>Las stats de tu campeon <strong>no crecen linealmente</strong> por nivel. Riot usa una formula especifica:</p>
<p><strong>Stat en nivel X = Stat base + Crecimiento x (Nivel - 1) x (0.7025 + 0.0175 x (Nivel - 1))</strong></p>
<p>Esto significa que las stats crecen <strong>mas rapido en niveles altos</strong>. Ganar el nivel 18 da mas stats que ganar el nivel 2.</p>
<p><strong>Ejemplo con Jinx (AD):</strong></p>
<ul>
  <li>AD base: 57</li>
  <li>AD growth (crecimiento): 3.4</li>
  <li>Nivel 1: 57 (solo la base)</li>
  <li>Nivel 2: 57 + 3.4 x 1 x (0.7025 + 0.0175 x 1) = 57 + 3.4 x 0.72 = 57 + 2.45 = <strong>59.45 AD</strong></li>
  <li>Nivel 6: 57 + 3.4 x 5 x (0.7025 + 0.0175 x 5) = 57 + 17 x 0.79 = 57 + 13.43 = <strong>70.43 AD</strong></li>
  <li>Nivel 11: 57 + 3.4 x 10 x (0.7025 + 0.0175 x 10) = 57 + 34 x 0.8775 = 57 + 29.84 = <strong>86.84 AD</strong></li>
  <li>Nivel 18: 57 + 3.4 x 17 x (0.7025 + 0.0175 x 17) = 57 + 57.8 x 1.0 = <strong>114.8 AD</strong></li>
</ul>
<p><strong>Por que importa:</strong> Estar un nivel arriba del rival es como tener ~600g de ventaja en stats gratis. Por eso el XP importa tanto como el oro. Un jungler nivel 6 con R vs un jungler nivel 5 sin R tiene una ventaja ENORME en un 1v1.</p>`,
          en: `<p>Your champion's stats <strong>don't grow linearly</strong> per level. Riot uses a specific formula:</p>
<p><strong>Stat at level X = Base stat + Growth x (Level - 1) x (0.7025 + 0.0175 x (Level - 1))</strong></p>
<p>This means stats grow <strong>faster at higher levels</strong>. Gaining level 18 gives more stats than gaining level 2.</p>
<p><strong>Example with Jinx (AD):</strong></p>
<ul>
  <li>Base AD: 57</li>
  <li>AD growth: 3.4</li>
  <li>Level 1: 57 (just base)</li>
  <li>Level 2: 57 + 3.4 x 1 x (0.7025 + 0.0175 x 1) = 57 + 3.4 x 0.72 = 57 + 2.45 = <strong>59.45 AD</strong></li>
  <li>Level 6: 57 + 3.4 x 5 x (0.7025 + 0.0175 x 5) = 57 + 17 x 0.79 = 57 + 13.43 = <strong>70.43 AD</strong></li>
  <li>Level 11: 57 + 3.4 x 10 x (0.7025 + 0.0175 x 10) = 57 + 34 x 0.8775 = 57 + 29.84 = <strong>86.84 AD</strong></li>
  <li>Level 18: 57 + 3.4 x 17 x (0.7025 + 0.0175 x 17) = 57 + 57.8 x 1.0 = <strong>114.8 AD</strong></li>
</ul>
<p><strong>Why it matters:</strong> Being one level up on your opponent is like having ~600g worth of free stats. That's why XP matters as much as gold. A level 6 jungler with R vs a level 5 jungler without R has a HUGE advantage in a 1v1.</p>`,
        },
      },
      {
        title: { es: 'Formula de Attack Speed', en: 'Attack Speed Formula' },
        content: {
          es: `<p>El Attack Speed tiene una formula especial, diferente a las demas stats:</p>
<p><strong>AS total = AS base x (1 + AS bonus%)</strong></p>
<p>Cada campeon tiene un <strong>AS base</strong> diferente. Es MUY importante porque determina cuanto rinde cada punto de AS%.</p>
<p><strong>Ejemplo:</strong></p>
<ul>
  <li><strong>Jinx:</strong> AS base = 0.625. Con 50% AS bonus: 0.625 x 1.5 = <strong>0.9375 attacks/sec</strong></li>
  <li><strong>Kalista:</strong> AS base = 0.694. Con 50% AS bonus: 0.694 x 1.5 = <strong>1.041 attacks/sec</strong></li>
</ul>
<p>Con el mismo item, Kalista ataca mas rapido porque tiene mayor AS base.</p>
<p><strong>Cap de Attack Speed: 2.5 ataques por segundo.</strong></p>
<p>Es imposible superar 2.5 AS (salvo Lethal Tempo que temporalmente lo eleva a ~3.0+). Una vez que llegas a 2.5, comprar mas AS es desperdicio de oro.</p>
<p><strong>Cuantos autos por segundo:</strong></p>
<ul>
  <li>0.625 AS = 1 auto cada 1.6 segundos (lento, nivel 1 sin items)</li>
  <li>1.0 AS = 1 auto por segundo</li>
  <li>1.5 AS = 1.5 autos por segundo (con 1 item de AS)</li>
  <li>2.0 AS = 2 autos por segundo (con 2-3 items de AS)</li>
  <li>2.5 AS = cap, 2.5 autos por segundo</li>
</ul>
<p><strong>Tip practico:</strong> Si jugás un ADC y sentis que atacas lento despues de comprar un item de AD puro (como B.F. Sword), es porque necesitas AS. La mayoria de los ADCs quieren un mix de AD + AS + Crit.</p>`,
          en: `<p>Attack Speed has a special formula, different from other stats:</p>
<p><strong>Total AS = Base AS x (1 + Bonus AS%)</strong></p>
<p>Every champion has a different <strong>base AS</strong>. It's VERY important because it determines how much each point of AS% is worth.</p>
<p><strong>Example:</strong></p>
<ul>
  <li><strong>Jinx:</strong> Base AS = 0.625. With 50% bonus AS: 0.625 x 1.5 = <strong>0.9375 attacks/sec</strong></li>
  <li><strong>Kalista:</strong> Base AS = 0.694. With 50% bonus AS: 0.694 x 1.5 = <strong>1.041 attacks/sec</strong></li>
</ul>
<p>With the same item, Kalista attacks faster because she has a higher base AS.</p>
<p><strong>Attack Speed cap: 2.5 attacks per second.</strong></p>
<p>It's impossible to exceed 2.5 AS (except Lethal Tempo which temporarily raises it to ~3.0+). Once you hit 2.5, buying more AS is wasted gold.</p>
<p><strong>Attacks per second breakdown:</strong></p>
<ul>
  <li>0.625 AS = 1 auto every 1.6 seconds (slow, level 1 no items)</li>
  <li>1.0 AS = 1 auto per second</li>
  <li>1.5 AS = 1.5 autos per second (with 1 AS item)</li>
  <li>2.0 AS = 2 autos per second (with 2-3 AS items)</li>
  <li>2.5 AS = cap, 2.5 autos per second</li>
</ul>
<p><strong>Practical tip:</strong> If you play ADC and feel like you're attacking slowly after buying a pure AD item (like B.F. Sword), it's because you need AS. Most ADCs want a mix of AD + AS + Crit.</p>`,
        },
      },
      {
        title: { es: 'Ability Haste y la conversion a CDR', en: 'Ability Haste and CDR conversion' },
        content: {
          es: `<p>En el pasado, League usaba <strong>CDR (Cooldown Reduction)</strong> que tenia un cap de 40%. Ahora usa <strong>Ability Haste (AH)</strong> que no tiene cap, pero tiene retornos decrecientes.</p>
<p><strong>Formula: CDR% = AH / (AH + 100) x 100</strong></p>
<p>En la practica, cada punto de AH te da la misma cantidad de "habilidades extra" por minuto. Lo que pasa es que la <strong>reduccion porcentual</strong> crece cada vez mas lento:</p>
<table>
  <tr><th>Ability Haste</th><th>CDR Equivalente</th><th>Ejemplo (habilidad de 10s)</th></tr>
  <tr><td>0</td><td>0%</td><td>10.0 seg de cooldown</td></tr>
  <tr><td>10</td><td>9.1%</td><td>9.09 seg</td></tr>
  <tr><td>20</td><td>16.7%</td><td>8.33 seg</td></tr>
  <tr><td>30</td><td>23.1%</td><td>7.69 seg</td></tr>
  <tr><td>40</td><td>28.6%</td><td>7.14 seg</td></tr>
  <tr><td>50</td><td>33.3%</td><td>6.67 seg</td></tr>
  <tr><td>60</td><td>37.5%</td><td>6.25 seg</td></tr>
  <tr><td>80</td><td>44.4%</td><td>5.56 seg</td></tr>
  <tr><td>100</td><td>50.0%</td><td>5.00 seg</td></tr>
  <tr><td>120</td><td>54.5%</td><td>4.55 seg</td></tr>
  <tr><td>150</td><td>60.0%</td><td>4.00 seg</td></tr>
</table>
<p><strong>Retornos decrecientes explicados:</strong></p>
<p>Ir de 0 a 50 AH te da 33% de CDR (una mejora enorme). Ir de 100 a 150 AH solo te da 10% mas de CDR (de 50% a 60%). Cada punto de AH es menos impactante que el anterior <em>en terminos de porcentaje de reduccion</em>.</p>
<p>Sin embargo, en terminos de <strong>DPS de habilidades</strong>, cada punto de AH es igualmente valioso. 10 AH siempre te deja castear un 10% mas de habilidades por minuto, sin importar cuanto AH ya tengas.</p>
<p><strong>Tip:</strong> Para la mayoria de los campeones, 60-100 AH es el sweet spot. Mas alla de eso, generalmente conviene invertir en otras stats.</p>`,
          en: `<p>In the past, League used <strong>CDR (Cooldown Reduction)</strong> which was capped at 40%. Now it uses <strong>Ability Haste (AH)</strong> which has no cap but has diminishing returns.</p>
<p><strong>Formula: CDR% = AH / (AH + 100) x 100</strong></p>
<p>In practice, each point of AH gives you the same amount of "extra ability casts" per minute. What happens is that the <strong>percentage reduction</strong> grows more slowly:</p>
<table>
  <tr><th>Ability Haste</th><th>CDR Equivalent</th><th>Example (10s ability)</th></tr>
  <tr><td>0</td><td>0%</td><td>10.0 sec cooldown</td></tr>
  <tr><td>10</td><td>9.1%</td><td>9.09 sec</td></tr>
  <tr><td>20</td><td>16.7%</td><td>8.33 sec</td></tr>
  <tr><td>30</td><td>23.1%</td><td>7.69 sec</td></tr>
  <tr><td>40</td><td>28.6%</td><td>7.14 sec</td></tr>
  <tr><td>50</td><td>33.3%</td><td>6.67 sec</td></tr>
  <tr><td>60</td><td>37.5%</td><td>6.25 sec</td></tr>
  <tr><td>80</td><td>44.4%</td><td>5.56 sec</td></tr>
  <tr><td>100</td><td>50.0%</td><td>5.00 sec</td></tr>
  <tr><td>120</td><td>54.5%</td><td>4.55 sec</td></tr>
  <tr><td>150</td><td>60.0%</td><td>4.00 sec</td></tr>
</table>
<p><strong>Diminishing returns explained:</strong></p>
<p>Going from 0 to 50 AH gives you 33% CDR (a huge improvement). Going from 100 to 150 AH only gives 10% more CDR (from 50% to 60%). Each point of AH is less impactful than the previous one <em>in terms of percentage reduction</em>.</p>
<p>However, in terms of <strong>ability DPS</strong>, each point of AH is equally valuable. 10 AH always lets you cast 10% more abilities per minute, regardless of how much AH you already have.</p>
<p><strong>Tip:</strong> For most champions, 60-100 AH is the sweet spot. Beyond that, it's usually better to invest in other stats.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. FORMULAS DE DANO (DAMAGE FORMULAS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'damage-formulas',
    title: { es: 'Formulas de Dano', en: 'Damage Formulas' },
    icon: '\uD83E\uddEE',
    topics: [
      {
        title: { es: 'Dano fisico despues de armadura', en: 'Physical damage after armor' },
        content: {
          es: `<p>Esta es la formula mas importante del juego:</p>
<p><strong>Dano final = Dano bruto x 100 / (100 + Armadura)</strong></p>
<p>Es decir, la armadura <strong>nunca te hace inmune</strong>. Siempre recibis algo de dano. Pero cuanta mas armadura tenes, menos dano recibis.</p>
<p><strong>Ejemplos:</strong></p>
<table>
  <tr><th>Dano bruto</th><th>Armadura</th><th>Calculo</th><th>Dano final</th><th>Reduccion</th></tr>
  <tr><td>200</td><td>0</td><td>200 x 100/100</td><td>200</td><td>0%</td></tr>
  <tr><td>200</td><td>50</td><td>200 x 100/150</td><td>133</td><td>33%</td></tr>
  <tr><td>200</td><td>100</td><td>200 x 100/200</td><td>100</td><td>50%</td></tr>
  <tr><td>200</td><td>200</td><td>200 x 100/300</td><td>67</td><td>67%</td></tr>
  <tr><td>200</td><td>300</td><td>200 x 100/400</td><td>50</td><td>75%</td></tr>
</table>
<p><strong>Observaciones clave:</strong></p>
<ul>
  <li>100 de armadura = reduces el dano a la mitad (50% de reduccion)</li>
  <li>Cada punto de armadura te da <strong>1% mas de HP efectiva</strong> vs dano fisico (esto es lineal, no hay retornos decrecientes en terminos de EHP)</li>
  <li>Ir de 0 a 100 armadura dobla tu vida efectiva vs fisico. Ir de 100 a 200 la triplica. El beneficio REAL es constante.</li>
</ul>
<p><strong>Armadura negativa:</strong> Si la penetracion reduce tu armadura por debajo de 0, la formula funciona al reves: el enemigo recibe MAS dano del que le tirás. Esto pasa con items como Black Cleaver + Lethality.</p>`,
          en: `<p>This is the most important formula in the game:</p>
<p><strong>Final damage = Raw damage x 100 / (100 + Armor)</strong></p>
<p>This means armor <strong>never makes you immune</strong>. You always take some damage. But the more armor you have, the less damage you take.</p>
<p><strong>Examples:</strong></p>
<table>
  <tr><th>Raw damage</th><th>Armor</th><th>Calculation</th><th>Final damage</th><th>Reduction</th></tr>
  <tr><td>200</td><td>0</td><td>200 x 100/100</td><td>200</td><td>0%</td></tr>
  <tr><td>200</td><td>50</td><td>200 x 100/150</td><td>133</td><td>33%</td></tr>
  <tr><td>200</td><td>100</td><td>200 x 100/200</td><td>100</td><td>50%</td></tr>
  <tr><td>200</td><td>200</td><td>200 x 100/300</td><td>67</td><td>67%</td></tr>
  <tr><td>200</td><td>300</td><td>200 x 100/400</td><td>50</td><td>75%</td></tr>
</table>
<p><strong>Key observations:</strong></p>
<ul>
  <li>100 armor = halves the damage (50% reduction)</li>
  <li>Each point of armor gives you <strong>1% more effective HP</strong> vs physical damage (this is linear, no diminishing returns in terms of EHP)</li>
  <li>Going from 0 to 100 armor doubles your effective HP vs physical. Going from 100 to 200 triples it. The REAL benefit is constant.</li>
</ul>
<p><strong>Negative armor:</strong> If penetration reduces armor below 0, the formula works in reverse: the enemy takes MORE damage than you deal. This happens with items like Black Cleaver + Lethality.</p>`,
        },
      },
      {
        title: { es: 'Dano magico despues de MR', en: 'Magic damage after MR' },
        content: {
          es: `<p>La formula es <strong>exactamente la misma</strong> que para armadura, pero con MR:</p>
<p><strong>Dano final = Dano bruto x 100 / (100 + MR)</strong></p>
<p>Funciona identico. 100 MR = 50% de reduccion de dano magico. 200 MR = 67% de reduccion, etc.</p>
<p><strong>Dato importante:</strong> La mayoria de los campeones tienen <strong>menos MR base que armadura base</strong>. Un campeon tipico tiene ~30 armadura y ~30 MR a nivel 1, pero la armadura crece mas rapido por nivel que la MR. Ademas, los campeones cuerpo a cuerpo ganan mas MR por nivel que los ranged.</p>
<p><strong>Ejemplo comun:</strong></p>
<p>Un ADC nivel 11 tiene ~50 armadura pero solo ~38 MR. Eso significa que un mago hace proporcionalmente mas dano a un ADC que un asesino AD en las mismas condiciones, porque el ADC tiene menos resistencia a lo magico.</p>
<p>Por eso items como Maw of Malmortius, Wit's End, y Mercury's Treads son tan importantes para ADCs contra equipos con mucho burst magico.</p>`,
          en: `<p>The formula is <strong>exactly the same</strong> as for armor, but with MR:</p>
<p><strong>Final damage = Raw damage x 100 / (100 + MR)</strong></p>
<p>Works identically. 100 MR = 50% magic damage reduction. 200 MR = 67% reduction, etc.</p>
<p><strong>Important fact:</strong> Most champions have <strong>less base MR than base armor</strong>. A typical champion has ~30 armor and ~30 MR at level 1, but armor grows faster per level than MR. Also, melee champions gain more MR per level than ranged ones.</p>
<p><strong>Common example:</strong></p>
<p>An ADC at level 11 has ~50 armor but only ~38 MR. This means a mage does proportionally more damage to an ADC than an AD assassin under the same conditions, because the ADC has less magic resistance.</p>
<p>That's why items like Maw of Malmortius, Wit's End, and Mercury's Treads are so important for ADCs against heavy magic burst teams.</p>`,
        },
      },
      {
        title: { es: 'Orden de penetracion de armadura/MR', en: 'Armor/MR penetration order' },
        content: {
          es: `<p>Cuando tenes penetracion, se aplica en un <strong>orden especifico</strong>. Esto es CRITICO para entender cuanta defensa realmente tiene el enemigo:</p>
<p><strong>Orden de aplicacion:</strong></p>
<ol>
  <li><strong>Reduccion de armadura % (Armor Reduction %)</strong> — Black Cleaver stacks (hasta 30%)</li>
  <li><strong>Reduccion de armadura plana (Flat Armor Reduction)</strong> — Corki E, Nasus E</li>
  <li><strong>Penetracion de armadura % (% Armor Penetration)</strong> — Lord Dominik's Regards (35%), Serylda's Grudge (30%)</li>
  <li><strong>Lethality (Flat Armor Penetration)</strong> — Youmuu's, Edge of Night, Serrated Dirk</li>
</ol>
<p><strong>Ejemplo completo:</strong></p>
<p>Enemigo tiene <strong>100 de armadura</strong>. Vos tenes <strong>30% pen de armadura (Lord Dominik's) + 18 Lethality (Youmuu's)</strong>:</p>
<ol>
  <li>Armadura despues de % pen: 100 x (1 - 0.30) = 100 x 0.70 = <strong>70</strong></li>
  <li>Armadura despues de lethality: 70 - 18 = <strong>52</strong></li>
</ol>
<p>Armadura efectiva del enemigo: <strong>52</strong> (en vez de 100). Tu dano: bruto x 100/152 = ~66% del dano bruto pasa.</p>
<p><strong>Sin penetracion:</strong> bruto x 100/200 = 50% del dano bruto pasa.</p>
<p>La diferencia es ENORME. Por eso la penetracion es la stat mas eficiente contra enemigos que stackean resistencias.</p>
<p><strong>Para penetracion magica es lo mismo:</strong></p>
<ol>
  <li>Reduccion de MR % (ej: pasiva de Fiddlesticks)</li>
  <li>Reduccion de MR plana (ej: Abyssal Mask aura)</li>
  <li>% Magic Pen (Void Staff: 40%)</li>
  <li>Flat Magic Pen (Sorcerer's Shoes: 15, Shadowflame: variable)</li>
</ol>
<p><strong>Tip:</strong> La % pen se aplica ANTES que la flat pen, entonces la flat pen se vuelve mas efectiva. Comprar Void Staff + Sorc Shoes juntos es mucho mas eficiente que cualquiera de los dos solo.</p>`,
          en: `<p>When you have penetration, it applies in a <strong>specific order</strong>. This is CRITICAL to understanding how much defense the enemy actually has:</p>
<p><strong>Application order:</strong></p>
<ol>
  <li><strong>% Armor Reduction</strong> — Black Cleaver stacks (up to 30%)</li>
  <li><strong>Flat Armor Reduction</strong> — Corki E, Nasus E</li>
  <li><strong>% Armor Penetration</strong> — Lord Dominik's Regards (35%), Serylda's Grudge (30%)</li>
  <li><strong>Lethality (Flat Armor Penetration)</strong> — Youmuu's, Edge of Night, Serrated Dirk</li>
</ol>
<p><strong>Full example:</strong></p>
<p>Enemy has <strong>100 armor</strong>. You have <strong>30% armor pen (Lord Dominik's) + 18 Lethality (Youmuu's)</strong>:</p>
<ol>
  <li>Armor after % pen: 100 x (1 - 0.30) = 100 x 0.70 = <strong>70</strong></li>
  <li>Armor after lethality: 70 - 18 = <strong>52</strong></li>
</ol>
<p>Enemy's effective armor: <strong>52</strong> (instead of 100). Your damage: raw x 100/152 = ~66% of raw damage goes through.</p>
<p><strong>Without penetration:</strong> raw x 100/200 = 50% of raw damage goes through.</p>
<p>The difference is HUGE. That's why penetration is the most efficient stat against enemies who stack resistances.</p>
<p><strong>For magic penetration it's the same:</strong></p>
<ol>
  <li>% MR Reduction (e.g., Fiddlesticks passive)</li>
  <li>Flat MR Reduction (e.g., Abyssal Mask aura)</li>
  <li>% Magic Pen (Void Staff: 40%)</li>
  <li>Flat Magic Pen (Sorcerer's Shoes: 15, Shadowflame: variable)</li>
</ol>
<p><strong>Tip:</strong> % pen applies BEFORE flat pen, which makes flat pen more effective. Buying Void Staff + Sorc Shoes together is much more efficient than either alone.</p>`,
        },
      },
      {
        title: { es: 'Golpe critico', en: 'Critical Strike' },
        content: {
          es: `<p>Un <strong>golpe critico (critical strike)</strong> es un autoataque que hace dano extra. La probabilidad depende de tu stat de Crit Chance.</p>
<p><strong>Multiplicador de critico base: x1.75</strong></p>
<p>Es decir, un auto que normalmente hace 200 de dano, si critea hace 200 x 1.75 = <strong>350 de dano</strong>.</p>
<p><strong>Infinity Edge:</strong> Una vez que tenes 60% o mas de crit chance, Infinity Edge cambia el multiplicador a <strong>x2.0 (anteriormente x2.1)</strong>. Entonces un auto de 200 critica por 200 x 2.0 = <strong>400 de dano</strong>.</p>
<p><strong>DPS promedio con critico:</strong></p>
<p>Tu DPS se calcula como: AD x AS x (1 + critChance x (critMultiplier - 1))</p>
<ul>
  <li>25% crit (1 item): DPS extra promedio = +18.75% (sin IE)</li>
  <li>50% crit (2 items): DPS extra promedio = +37.5%</li>
  <li>75% crit (3 items): DPS extra promedio = +56.25%</li>
  <li>100% crit (4 items): DPS extra promedio = +75%</li>
  <li>100% crit + IE: DPS extra promedio = +100% (el doble de dano)</li>
</ul>
<p><strong>Yasuo y Yone:</strong> Su pasiva les da el <strong>doble de crit chance</strong>. Asi que con un solo item de 25% crit, ya tienen 50%. Con 2 items tienen 100% crit.</p>
<p><strong>Nota sobre RNG:</strong> El crit en LoL NO es puramente aleatorio. Riot usa un sistema de "pseudo-random distribution" donde si no criteas en varios autos seguidos, la probabilidad del proximo auto de critear aumenta, y viceversa. Esto suaviza la varianza.</p>`,
          en: `<p>A <strong>critical strike</strong> is an auto-attack that deals bonus damage. The chance depends on your Crit Chance stat.</p>
<p><strong>Base crit multiplier: x1.75</strong></p>
<p>So an auto that normally deals 200 damage, if it crits deals 200 x 1.75 = <strong>350 damage</strong>.</p>
<p><strong>Infinity Edge:</strong> Once you have 60% or more crit chance, Infinity Edge changes the multiplier to <strong>x2.0 (previously x2.1)</strong>. So a 200 damage auto crits for 200 x 2.0 = <strong>400 damage</strong>.</p>
<p><strong>Average crit DPS:</strong></p>
<p>Your DPS is calculated as: AD x AS x (1 + critChance x (critMultiplier - 1))</p>
<ul>
  <li>25% crit (1 item): Average extra DPS = +18.75% (without IE)</li>
  <li>50% crit (2 items): Average extra DPS = +37.5%</li>
  <li>75% crit (3 items): Average extra DPS = +56.25%</li>
  <li>100% crit (4 items): Average extra DPS = +75%</li>
  <li>100% crit + IE: Average extra DPS = +100% (double damage)</li>
</ul>
<p><strong>Yasuo and Yone:</strong> Their passive gives them <strong>double crit chance</strong>. So with a single 25% crit item, they already have 50%. With 2 items they have 100% crit.</p>
<p><strong>Note on RNG:</strong> Crit in LoL is NOT purely random. Riot uses a "pseudo-random distribution" system where if you don't crit for several autos in a row, the probability of the next auto critting increases, and vice versa. This smooths out variance.</p>`,
        },
      },
      {
        title: { es: 'HP Efectiva (EHP)', en: 'Effective HP (EHP)' },
        content: {
          es: `<p>La <strong>HP Efectiva</strong> es la cantidad REAL de dano que tenes que recibir para morir. Combina tu HP con tus resistencias.</p>
<p><strong>Formula: EHP = HP x (1 + Resistencia / 100)</strong></p>
<p><strong>Ejemplos:</strong></p>
<table>
  <tr><th>HP</th><th>Armadura</th><th>EHP vs Fisico</th><th>Explicacion</th></tr>
  <tr><td>2000</td><td>0</td><td>2000</td><td>Sin armadura, 2000 de dano te mata</td></tr>
  <tr><td>2000</td><td>50</td><td>3000</td><td>Necesitan hacer 3000 de dano fisico para matarte</td></tr>
  <tr><td>2000</td><td>100</td><td>4000</td><td>Necesitan 4000 de dano fisico</td></tr>
  <tr><td>2000</td><td>200</td><td>6000</td><td>Necesitan 6000 de dano fisico</td></tr>
  <tr><td>3000</td><td>100</td><td>6000</td><td>Mas HP con misma armadura = misma EHP que menos HP con mas armadura</td></tr>
</table>
<p><strong>Por que esto importa para itemizacion:</strong></p>
<ul>
  <li><strong>Si tenes mucha HP pero poca armadura:</strong> Compra armadura. Un Cloth Armor de 300g te da mas supervivencia que un Ruby Crystal de 400g.</li>
  <li><strong>Si tenes mucha armadura pero poca HP:</strong> Compra HP. Un Giant's Belt te da mas supervivencia que otro item de armadura.</li>
  <li><strong>La regla general:</strong> Equilibrar HP y resistencias maximiza tu EHP. Stackear solo uno de los dos es ineficiente.</li>
</ul>
<p><strong>Contrajuego:</strong></p>
<ul>
  <li><strong>HP sola es debil contra</strong> dano % HP (Vayne W, BOTRK, Liandry's). Estos ignoran tu HP apilada.</li>
  <li><strong>Armadura sola es debil contra</strong> penetracion (Lethality, Lord Dominik's, Void Staff). Estos ignoran tus resistencias.</li>
  <li><strong>La mejor defensa:</strong> HP + Armadura/MR balanceados. Por eso items como Randuin's Omen (HP + Armor + anti-crit) o Spirit Visage (HP + MR + healing amp) son tan buenos.</li>
</ul>`,
          en: `<p><strong>Effective HP</strong> is the ACTUAL amount of damage needed to kill you. It combines your HP with your resistances.</p>
<p><strong>Formula: EHP = HP x (1 + Resistance / 100)</strong></p>
<p><strong>Examples:</strong></p>
<table>
  <tr><th>HP</th><th>Armor</th><th>EHP vs Physical</th><th>Explanation</th></tr>
  <tr><td>2000</td><td>0</td><td>2000</td><td>Without armor, 2000 damage kills you</td></tr>
  <tr><td>2000</td><td>50</td><td>3000</td><td>They need to deal 3000 physical damage to kill you</td></tr>
  <tr><td>2000</td><td>100</td><td>4000</td><td>They need 4000 physical damage</td></tr>
  <tr><td>2000</td><td>200</td><td>6000</td><td>They need 6000 physical damage</td></tr>
  <tr><td>3000</td><td>100</td><td>6000</td><td>More HP with same armor = same EHP as less HP with more armor</td></tr>
</table>
<p><strong>Why this matters for itemization:</strong></p>
<ul>
  <li><strong>If you have lots of HP but little armor:</strong> Buy armor. A 300g Cloth Armor gives more survivability than a 400g Ruby Crystal.</li>
  <li><strong>If you have lots of armor but little HP:</strong> Buy HP. A Giant's Belt gives more survivability than another armor item.</li>
  <li><strong>General rule:</strong> Balancing HP and resistances maximizes EHP. Stacking only one is inefficient.</li>
</ul>
<p><strong>Counterplay:</strong></p>
<ul>
  <li><strong>HP alone is weak against</strong> %HP damage (Vayne W, BOTRK, Liandry's). These ignore stacked HP.</li>
  <li><strong>Armor alone is weak against</strong> penetration (Lethality, Lord Dominik's, Void Staff). These ignore your resistances.</li>
  <li><strong>Best defense:</strong> Balanced HP + Armor/MR. That's why items like Randuin's Omen (HP + Armor + anti-crit) or Spirit Visage (HP + MR + healing amp) are so good.</li>
</ul>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. CC (CROWD CONTROL) — GUIA COMPLETA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'crowd-control',
    title: { es: 'CC (Crowd Control) — Guia completa', en: 'CC (Crowd Control) — Complete Guide' },
    icon: '\u26D3\uFE0F',
    topics: [
      {
        title: { es: 'Hard CC — Lista completa', en: 'Hard CC — Complete list' },
        content: {
          es: `<p>El <strong>Hard CC</strong> te impide moverte Y usar habilidades/atacar. Es el CC mas poderoso.</p>
<table>
  <tr><th>Tipo</th><th>Que hace</th><th>Ejemplos famosos</th><th>Duracion tipica</th></tr>
  <tr><td><strong>Stun</strong></td><td>No podes moverte, atacar ni usar habilidades</td><td>Annie pasiva (Pyromania), Leona Q, Veigar E (borde)</td><td>0.75 - 2.0 seg</td></tr>
  <tr><td><strong>Root / Snare</strong></td><td>No podes moverte, pero SI podes atacar y usar habilidades (que no requieran movimiento)</td><td>Lux Q, Morgana Q (3 seg!), Maokai W</td><td>1.0 - 3.0 seg</td></tr>
  <tr><td><strong>Knock-up</strong></td><td>Te levanta del suelo. No podes hacer NADA. <strong>NO se reduce con Tenacity</strong></td><td>Yasuo Q3, Malphite R, Alistar W+Q, Yone R</td><td>0.5 - 1.5 seg</td></tr>
  <tr><td><strong>Knock-back</strong></td><td>Te empuja en una direccion. <strong>NO se reduce con Tenacity</strong></td><td>Lee Sin R, Janna R, Tristana R, Vayne E</td><td>Variable (distancia)</td></tr>
  <tr><td><strong>Suppression</strong></td><td>Stun que NO se puede quitar con Cleanse ni Tenacity. Solo QSS la remueve</td><td>Malzahar R, Warwick R, Skarner R, Urgot R</td><td>1.5 - 3.0 seg</td></tr>
  <tr><td><strong>Charm</strong></td><td>Caminas involuntariamente hacia el enemigo</td><td>Ahri E, Evelynn W, Rakan R</td><td>1.0 - 2.0 seg</td></tr>
  <tr><td><strong>Taunt</strong></td><td>Te obliga a autoatacar al que te taunteo</td><td>Shen E, Rammus E, Galio W</td><td>1.0 - 2.0 seg</td></tr>
  <tr><td><strong>Fear / Flee</strong></td><td>Te obliga a huir del enemigo en direccion contraria</td><td>Fiddlesticks Q, Shaco W (caja), Vex R</td><td>0.75 - 2.0 seg</td></tr>
  <tr><td><strong>Suspension</strong></td><td>Tipo especial de knock-up. Funciona como stun aereo</td><td>Nami Q (burbuja), Vel'Koz E</td><td>1.0 - 1.5 seg</td></tr>
  <tr><td><strong>Stasis</strong></td><td>Te congela. No podes hacer nada PERO sos invulnerable e intargeteable</td><td>Zhonya's Hourglass, Bard R</td><td>2.0 - 2.5 seg</td></tr>
</table>
<p><strong>Dato clave:</strong> Root (Snare) te deja castear habilidades. Es por eso que un Ezreal rooteado puede seguir tirando Q y W, pero no puede usar su E (que es un dash/movimiento).</p>`,
          en: `<p><strong>Hard CC</strong> prevents you from moving AND using abilities/attacking. It's the most powerful type of CC.</p>
<table>
  <tr><th>Type</th><th>What it does</th><th>Famous examples</th><th>Typical duration</th></tr>
  <tr><td><strong>Stun</strong></td><td>Can't move, attack, or use abilities</td><td>Annie passive (Pyromania), Leona Q, Veigar E (edge)</td><td>0.75 - 2.0 sec</td></tr>
  <tr><td><strong>Root / Snare</strong></td><td>Can't move, but CAN attack and use abilities (that don't require movement)</td><td>Lux Q, Morgana Q (3 sec!), Maokai W</td><td>1.0 - 3.0 sec</td></tr>
  <tr><td><strong>Knock-up</strong></td><td>Lifts you off the ground. You can't do ANYTHING. <strong>NOT reduced by Tenacity</strong></td><td>Yasuo Q3, Malphite R, Alistar W+Q, Yone R</td><td>0.5 - 1.5 sec</td></tr>
  <tr><td><strong>Knock-back</strong></td><td>Pushes you in a direction. <strong>NOT reduced by Tenacity</strong></td><td>Lee Sin R, Janna R, Tristana R, Vayne E</td><td>Variable (distance)</td></tr>
  <tr><td><strong>Suppression</strong></td><td>Stun that CAN'T be removed by Cleanse or Tenacity. Only QSS removes it</td><td>Malzahar R, Warwick R, Skarner R, Urgot R</td><td>1.5 - 3.0 sec</td></tr>
  <tr><td><strong>Charm</strong></td><td>Makes you walk involuntarily toward the enemy</td><td>Ahri E, Evelynn W, Rakan R</td><td>1.0 - 2.0 sec</td></tr>
  <tr><td><strong>Taunt</strong></td><td>Forces you to auto-attack the taunter</td><td>Shen E, Rammus E, Galio W</td><td>1.0 - 2.0 sec</td></tr>
  <tr><td><strong>Fear / Flee</strong></td><td>Forces you to run away from the enemy</td><td>Fiddlesticks Q, Shaco W (box), Vex R</td><td>0.75 - 2.0 sec</td></tr>
  <tr><td><strong>Suspension</strong></td><td>Special type of knock-up. Acts as an airborne stun</td><td>Nami Q (bubble), Vel'Koz E</td><td>1.0 - 1.5 sec</td></tr>
  <tr><td><strong>Stasis</strong></td><td>Freezes you. Can't do anything BUT you're invulnerable and untargetable</td><td>Zhonya's Hourglass, Bard R</td><td>2.0 - 2.5 sec</td></tr>
</table>
<p><strong>Key fact:</strong> Root (Snare) lets you cast abilities. That's why a rooted Ezreal can keep casting Q and W, but can't use his E (which is a dash/movement).</p>`,
        },
      },
      {
        title: { es: 'Soft CC — Lista completa', en: 'Soft CC — Complete list' },
        content: {
          es: `<p>El <strong>Soft CC</strong> te limita pero no te detiene por completo. Podes seguir atacando y usando habilidades.</p>
<table>
  <tr><th>Tipo</th><th>Que hace</th><th>Ejemplos</th></tr>
  <tr><td><strong>Slow</strong></td><td>Reduce tu velocidad de movimiento. Es el CC mas comun del juego</td><td>Nasus W (wither, hasta 95%!), Ashe autos, Rylai's Crystal Scepter</td></tr>
  <tr><td><strong>Cripple</strong></td><td>Reduce tu Attack Speed</td><td>Nasus W (tambien reduce AS), Malphite E, Randuin's Omen activo</td></tr>
  <tr><td><strong>Blind</strong></td><td>Tus autoataques fallan (missean). Tus habilidades NO fallan</td><td>Teemo Q (unica fuente confiable de blind)</td></tr>
  <tr><td><strong>Silence</strong></td><td>No podes usar habilidades, pero SI podes moverte y autoatacar</td><td>Garen Q, Soraka E, Cho'Gath W, Kassadin Q</td></tr>
  <tr><td><strong>Ground</strong></td><td>No podes usar habilidades de movimiento (dashes, blinks, flashes)</td><td>Cassiopeia W (Miasma), Singed W, Vex pasiva</td></tr>
  <tr><td><strong>Nearsight</strong></td><td>Reduce tu rango de vision drasticamente</td><td>Nocturne R (Paranoia), Graves W (Smoke Screen), Quinn Q</td></tr>
  <tr><td><strong>Drowsy / Sleep</strong></td><td>Primero te pone somnoliento (slow), despues te duerme (stun). El siguiente dano te despierta</td><td>Zoe E, Lillia R</td></tr>
  <tr><td><strong>Disarm</strong></td><td>No podes autoatacar</td><td>Lulu W (Polymorph, tambien silence + slow)</td></tr>
</table>
<p><strong>Tip:</strong> Muchos jugadores subestiman los slows fuertes. Un Nasus con W al maximo (95% slow + AS reduction) puede hacer que un ADC se sienta como si estuviera rooteado.</p>`,
          en: `<p><strong>Soft CC</strong> limits you but doesn't completely stop you. You can keep attacking and using abilities.</p>
<table>
  <tr><th>Type</th><th>What it does</th><th>Examples</th></tr>
  <tr><td><strong>Slow</strong></td><td>Reduces your movement speed. The most common CC in the game</td><td>Nasus W (wither, up to 95%!), Ashe autos, Rylai's Crystal Scepter</td></tr>
  <tr><td><strong>Cripple</strong></td><td>Reduces your Attack Speed</td><td>Nasus W (also reduces AS), Malphite E, Randuin's Omen active</td></tr>
  <tr><td><strong>Blind</strong></td><td>Your auto-attacks miss. Your abilities do NOT miss</td><td>Teemo Q (the only reliable source of blind)</td></tr>
  <tr><td><strong>Silence</strong></td><td>Can't use abilities, but CAN move and auto-attack</td><td>Garen Q, Soraka E, Cho'Gath W, Kassadin Q</td></tr>
  <tr><td><strong>Ground</strong></td><td>Can't use movement abilities (dashes, blinks, flashes)</td><td>Cassiopeia W (Miasma), Singed W, Vex passive</td></tr>
  <tr><td><strong>Nearsight</strong></td><td>Drastically reduces your vision range</td><td>Nocturne R (Paranoia), Graves W (Smoke Screen), Quinn Q</td></tr>
  <tr><td><strong>Drowsy / Sleep</strong></td><td>First makes you drowsy (slow), then puts you to sleep (stun). Next damage wakes you up</td><td>Zoe E, Lillia R</td></tr>
  <tr><td><strong>Disarm</strong></td><td>Can't auto-attack</td><td>Lulu W (Polymorph, also silence + slow)</td></tr>
</table>
<p><strong>Tip:</strong> Many players underestimate strong slows. A Nasus with max W (95% slow + AS reduction) can make an ADC feel like they're rooted.</p>`,
        },
      },
      {
        title: { es: 'Tenacity — Como funciona', en: 'Tenacity — How it works' },
        content: {
          es: `<p><strong>Tenacity</strong> reduce la <strong>duracion del CC</strong> que recibis. Mas tenacity = el CC te dura menos tiempo.</p>
<p><strong>Formula: Nueva duracion = Duracion original x (1 - Tenacity / 100)</strong></p>
<p><strong>Ejemplo:</strong> Un stun de 2 segundos con 30% de Tenacity (Mercury's Treads):</p>
<p>2 x (1 - 0.30) = 2 x 0.70 = <strong>1.4 segundos</strong></p>
<p><strong>Fuentes de Tenacity:</strong></p>
<ul>
  <li><strong>Mercury's Treads:</strong> 30% Tenacity</li>
  <li><strong>Legend: Tenacity (runa):</strong> Hasta 30% Tenacity (stacks con kills/assists/CS)</li>
  <li><strong>Elixir of Iron:</strong> 25% Tenacity</li>
  <li><strong>Unflinching (runa):</strong> 5-25% Tenacity basado en HP faltante</li>
</ul>
<p><strong>Tenacity se stackea multiplicativamente:</strong></p>
<p>Mercury's (30%) + Legend: Tenacity (30%) = 1 - (0.70 x 0.70) = 1 - 0.49 = <strong>51% Tenacity</strong> (no 60%)</p>
<p><strong>IMPORTANTE — Tenacity NO afecta:</strong></p>
<ul>
  <li><strong>Knock-ups / Knock-backs:</strong> Siempre duran lo mismo. No importa cuanta Tenacity tengas, te van a levantar/empujar la misma duracion. Esta es la razon por la que el CC de Yasuo (Q3 knock-up) + R es tan fuerte: no se puede reducir.</li>
  <li><strong>Suppression:</strong> Malzahar R, Warwick R, Skarner R. Tenacity no hace nada. Necesitas QSS.</li>
  <li><strong>Stasis:</strong> Zhonya's y Bard R siempre duran lo mismo.</li>
</ul>
<p><strong>Tip practico:</strong> Si el equipo enemigo tiene MUCHO CC pero es mayormente knock-ups (ej: Malphite + Yasuo + Alistar), comprar Mercury's Treads es desperdicio porque la mayoria de su CC no se reduce con Tenacity. Mejor comprar Plated Steelcaps o botas de movilidad.</p>`,
          en: `<p><strong>Tenacity</strong> reduces the <strong>duration of CC</strong> you receive. More tenacity = CC lasts shorter on you.</p>
<p><strong>Formula: New duration = Original duration x (1 - Tenacity / 100)</strong></p>
<p><strong>Example:</strong> A 2 second stun with 30% Tenacity (Mercury's Treads):</p>
<p>2 x (1 - 0.30) = 2 x 0.70 = <strong>1.4 seconds</strong></p>
<p><strong>Sources of Tenacity:</strong></p>
<ul>
  <li><strong>Mercury's Treads:</strong> 30% Tenacity</li>
  <li><strong>Legend: Tenacity (rune):</strong> Up to 30% Tenacity (stacks with kills/assists/CS)</li>
  <li><strong>Elixir of Iron:</strong> 25% Tenacity</li>
  <li><strong>Unflinching (rune):</strong> 5-25% Tenacity based on missing HP</li>
</ul>
<p><strong>Tenacity stacks multiplicatively:</strong></p>
<p>Mercury's (30%) + Legend: Tenacity (30%) = 1 - (0.70 x 0.70) = 1 - 0.49 = <strong>51% Tenacity</strong> (not 60%)</p>
<p><strong>IMPORTANT — Tenacity does NOT affect:</strong></p>
<ul>
  <li><strong>Knock-ups / Knock-backs:</strong> Always last the same duration. No matter how much Tenacity you have, you'll be lifted/pushed for the same time. This is why Yasuo's (Q3 knock-up) + R CC is so strong: it can't be reduced.</li>
  <li><strong>Suppression:</strong> Malzahar R, Warwick R, Skarner R. Tenacity does nothing. You need QSS.</li>
  <li><strong>Stasis:</strong> Zhonya's and Bard R always last the same time.</li>
</ul>
<p><strong>Practical tip:</strong> If the enemy team has a LOT of CC but it's mostly knock-ups (e.g., Malphite + Yasuo + Alistar), buying Mercury's Treads is a waste because most of their CC isn't reduced by Tenacity. Better to buy Plated Steelcaps or mobility boots.</p>`,
        },
      },
      {
        title: { es: 'Cleanse vs QSS vs Mikael\'s', en: 'Cleanse vs QSS vs Mikael\'s' },
        content: {
          es: `<p>Hay tres formas principales de <strong>remover CC</strong> en el juego, y cada una tiene reglas diferentes:</p>
<table>
  <tr><th></th><th>Cleanse (Spell)</th><th>QSS (Item)</th><th>Mikael's Blessing (Item)</th></tr>
  <tr><td><strong>Quien lo usa</strong></td><td>Vos mismo</td><td>Vos mismo</td><td>Un aliado te lo usa (support)</td></tr>
  <tr><td><strong>Remueve Stun</strong></td><td>Si</td><td>Si</td><td>Si</td></tr>
  <tr><td><strong>Remueve Root</strong></td><td>Si</td><td>Si</td><td>Si</td></tr>
  <tr><td><strong>Remueve Slow</strong></td><td>Si</td><td>Si</td><td>Si</td></tr>
  <tr><td><strong>Remueve Charm/Fear/Taunt</strong></td><td>Si</td><td>Si</td><td>Si</td></tr>
  <tr><td><strong>Remueve Silence</strong></td><td>Si</td><td>Si</td><td>Si</td></tr>
  <tr><td><strong>Remueve Suppression</strong></td><td><strong>NO</strong></td><td><strong>SI</strong></td><td><strong>NO</strong></td></tr>
  <tr><td><strong>Remueve Knock-up</strong></td><td><strong>NO</strong></td><td><strong>NO*</strong></td><td><strong>NO</strong></td></tr>
  <tr><td><strong>Remueve Ignite/Exhaust</strong></td><td><strong>SI (summoner debuffs)</strong></td><td>NO</td><td>NO</td></tr>
  <tr><td><strong>Da inmunidad a CC</strong></td><td>Si, 0.65 seg despues de usar</td><td>No</td><td>No</td></tr>
  <tr><td><strong>Cooldown</strong></td><td>210 seg</td><td>90 seg</td><td>120 seg</td></tr>
</table>
<p>*<strong>Nota sobre QSS vs Knock-ups:</strong> QSS remueve el estado de CC del knock-up, pero NO cancela la animacion. Es decir, seguis en el aire visualmente, pero podes flashear o usar habilidades de movimiento inmediatamente despues de QSSear.</p>
<p><strong>Cuando comprar cada uno:</strong></p>
<ul>
  <li><strong>Cleanse:</strong> Si sos ADC o mago mid contra Ashe R, TF gold card, Syndra stun. Lo elegis antes de la partida como summoner spell.</li>
  <li><strong>QSS:</strong> Si el enemigo tiene <strong>suppression</strong> (Malzahar, Warwick, Skarner). Es la UNICA contrajugada a suppression aparte de matarlos.</li>
  <li><strong>Mikael's:</strong> Si sos support y tu ADC esta siendo CC'eado constantemente. Cura + remueve CC de un aliado.</li>
</ul>
<p><strong>Interacciones especiales:</strong></p>
<ul>
  <li><strong>Gangplank W (Remove Scurvy):</strong> Funciona como Cleanse para CC. Remueve TODO el CC excepto suppression y airborne.</li>
  <li><strong>Olaf R (Ragnarok):</strong> Se vuelve INMUNE a todo tipo de CC durante la duracion. Incluso knock-ups y suppression.</li>
  <li><strong>Morgana E (Black Shield):</strong> Bloquea todo dano magico y TODO el CC mientras el escudo aguante.</li>
</ul>`,
          en: `<p>There are three main ways to <strong>remove CC</strong> in the game, and each has different rules:</p>
<table>
  <tr><th></th><th>Cleanse (Spell)</th><th>QSS (Item)</th><th>Mikael's Blessing (Item)</th></tr>
  <tr><td><strong>Who uses it</strong></td><td>Yourself</td><td>Yourself</td><td>An ally uses it on you (support)</td></tr>
  <tr><td><strong>Removes Stun</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
  <tr><td><strong>Removes Root</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
  <tr><td><strong>Removes Slow</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
  <tr><td><strong>Removes Charm/Fear/Taunt</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
  <tr><td><strong>Removes Silence</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
  <tr><td><strong>Removes Suppression</strong></td><td><strong>NO</strong></td><td><strong>YES</strong></td><td><strong>NO</strong></td></tr>
  <tr><td><strong>Removes Knock-up</strong></td><td><strong>NO</strong></td><td><strong>NO*</strong></td><td><strong>NO</strong></td></tr>
  <tr><td><strong>Removes Ignite/Exhaust</strong></td><td><strong>YES (summoner debuffs)</strong></td><td>No</td><td>No</td></tr>
  <tr><td><strong>Gives CC immunity</strong></td><td>Yes, 0.65 sec after use</td><td>No</td><td>No</td></tr>
  <tr><td><strong>Cooldown</strong></td><td>210 sec</td><td>90 sec</td><td>120 sec</td></tr>
</table>
<p>*<strong>Note on QSS vs Knock-ups:</strong> QSS removes the knock-up CC state, but does NOT cancel the animation. You'll still be visually airborne, but you can Flash or use movement abilities immediately after QSS'ing.</p>
<p><strong>When to buy each:</strong></p>
<ul>
  <li><strong>Cleanse:</strong> If you're ADC or mid mage against Ashe R, TF gold card, Syndra stun. You pick it before the game as a summoner spell.</li>
  <li><strong>QSS:</strong> If the enemy has <strong>suppression</strong> (Malzahar, Warwick, Skarner). It's the ONLY counterplay to suppression aside from killing them.</li>
  <li><strong>Mikael's:</strong> If you're support and your ADC is constantly getting CC'd. Heals + removes CC from an ally.</li>
</ul>
<p><strong>Special interactions:</strong></p>
<ul>
  <li><strong>Gangplank W (Remove Scurvy):</strong> Works like Cleanse for CC. Removes ALL CC except suppression and airborne.</li>
  <li><strong>Olaf R (Ragnarok):</strong> Becomes IMMUNE to all types of CC for the duration. Even knock-ups and suppression.</li>
  <li><strong>Morgana E (Black Shield):</strong> Blocks all magic damage and ALL CC while the shield holds.</li>
</ul>`,
        },
      },
      {
        title: { es: 'CC Chaining — Por que Nautilus es tan fuerte', en: 'CC Chaining — Why Nautilus is so strong' },
        content: {
          es: `<p><strong>CC Chaining</strong> es aplicar multiples CC uno detras del otro para que el enemigo no pueda hacer absolutamente nada durante mucho tiempo.</p>
<p><strong>Caso de estudio: Nautilus</strong></p>
<p>Nautilus es considerado el <strong>rey del CC</strong> porque tiene CC en CADA una de sus habilidades:</p>
<ol>
  <li><strong>Pasiva (Staggering Blow):</strong> Su primer auto contra un enemigo los rootea por <strong>0.75-1.5 seg</strong> (escala con nivel). Tiene un cooldown por campeon.</li>
  <li><strong>Q (Dredge Line):</strong> Hook que <strong>stunnea</strong> brevemente al impactar (~0.1 seg pull + mini stun).</li>
  <li><strong>E (Riptide):</strong> Onda de dano que <strong>slowea</strong> a todos los enemigos cercanos (30-50% slow).</li>
  <li><strong>R (Depth Charge):</strong> Proyectil que persigue a un enemigo y lo <strong>knock-upea</strong> por <strong>1.0 seg</strong>. Ademas, knock-upea a cualquier enemigo en el camino.</li>
</ol>
<p><strong>La cadena optima de CC de Nautilus:</strong></p>
<p><strong>Q hook (0.1s) → Auto pasiva root (1.0s) → R knockup (1.0s) → E slow (continuado)</strong></p>
<p>= Aproximadamente <strong>2-3 segundos de CC consecutivo</strong> donde el enemigo NO puede hacer nada, seguido de un slow fuerte.</p>
<p><strong>Otro ejemplo — Leona:</strong></p>
<p><strong>E dash (root 0.5s) → Q stun (1.25s) → R stun (1.5s)</strong> = hasta <strong>3.25 seg de CC</strong></p>
<p><strong>Por que el CC chaining es tan efectivo:</strong></p>
<ul>
  <li>En esos 2-3 segundos, tu ADC puede hacer 4-5 autoataques = mucha gente se muere sin poder moverse.</li>
  <li>El enemigo no puede usar Flash, Zhonya's, ni ninguna habilidad defensiva durante stuns/knock-ups.</li>
  <li>Un buen CC chain es como un stun de 3 segundos que no se puede reducir con Tenacity (porque los knock-ups no se reducen).</li>
</ul>
<p><strong>Tip:</strong> Cuando jugues support, <strong>NO apilés todo tu CC junto</strong>. Espera a que termine el CC de tu aliado para empezar el tuyo. Si Leona stunnea con Q, NO uses tu Nami Q al mismo tiempo. Esperá que termine el stun de Leona y ahi tirá tu burbuja.</p>`,
          en: `<p><strong>CC Chaining</strong> is applying multiple CC effects one after another so the enemy can't do anything for a long time.</p>
<p><strong>Case study: Nautilus</strong></p>
<p>Nautilus is considered the <strong>king of CC</strong> because he has CC on EVERY single ability:</p>
<ol>
  <li><strong>Passive (Staggering Blow):</strong> His first auto against a target roots them for <strong>0.75-1.5 sec</strong> (scales with level). Has a per-champion cooldown.</li>
  <li><strong>Q (Dredge Line):</strong> Hook that briefly <strong>stuns</strong> on impact (~0.1 sec pull + mini stun).</li>
  <li><strong>E (Riptide):</strong> Damage wave that <strong>slows</strong> all nearby enemies (30-50% slow).</li>
  <li><strong>R (Depth Charge):</strong> Homing projectile that <strong>knocks up</strong> a target for <strong>1.0 sec</strong>. Also knocks up any enemy in the path.</li>
</ol>
<p><strong>Nautilus optimal CC chain:</strong></p>
<p><strong>Q hook (0.1s) → Auto passive root (1.0s) → R knockup (1.0s) → E slow (continuous)</strong></p>
<p>= Approximately <strong>2-3 seconds of consecutive CC</strong> where the enemy can do NOTHING, followed by a strong slow.</p>
<p><strong>Another example — Leona:</strong></p>
<p><strong>E dash (root 0.5s) → Q stun (1.25s) → R stun (1.5s)</strong> = up to <strong>3.25 sec of CC</strong></p>
<p><strong>Why CC chaining is so effective:</strong></p>
<ul>
  <li>In those 2-3 seconds, your ADC can land 4-5 auto-attacks = many targets die without being able to move.</li>
  <li>The enemy can't use Flash, Zhonya's, or any defensive ability during stuns/knock-ups.</li>
  <li>A good CC chain is like a 3-second stun that can't be reduced by Tenacity (because knock-ups aren't reduced).</li>
</ul>
<p><strong>Tip:</strong> When playing support, <strong>DO NOT stack all your CC at once</strong>. Wait for your ally's CC to end before starting yours. If Leona stuns with Q, DON'T use your Nami Q at the same time. Wait for Leona's stun to end, then throw your bubble.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. WAVE MANAGEMENT (GESTION DE OLEADAS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wave-management',
    title: { es: 'Wave Management (Gestion de Oleadas)', en: 'Wave Management' },
    icon: '\uD83C\uDF0A',
    topics: [
      {
        title: { es: 'Que es una oleada de minions', en: 'What is a minion wave' },
        content: {
          es: `<p>Cada <strong>30 segundos</strong> (empezando en 1:05), una oleada de minions sale de cada nexo. Cada oleada contiene:</p>
<ul>
  <li><strong>3 minions melee (cuerpo a cuerpo):</strong> Mas HP (~480), menos dano. Son los que llegan primero.</li>
  <li><strong>3 minions caster (rango):</strong> Menos HP (~320), mas dano. Atacan desde atras.</li>
  <li><strong>1 minion cannon (catapulta):</strong> Aparece cada 3 oleadas antes del minuto 15, cada 2 oleadas entre min 15-25, y CADA oleada despues del minuto 25. Tiene mucha HP (~900+) y da mas oro.</li>
</ul>
<p><strong>Cuanto vale cada minion:</strong></p>
<table>
  <tr><th>Tipo</th><th>Oro (early)</th><th>Oro (late, ~25 min)</th></tr>
  <tr><td>Melee</td><td>21g</td><td>~25g</td></tr>
  <tr><td>Caster</td><td>14g</td><td>~17g</td></tr>
  <tr><td>Cannon</td><td>60g</td><td>~90g</td></tr>
</table>
<p><strong>Una oleada completa (sin cannon) = ~105g</strong>. Con cannon = ~165g.</p>
<p><strong>XP de minions:</strong></p>
<ul>
  <li>Melee: 60.45 XP</li>
  <li>Caster: 29.76 XP</li>
  <li>Cannon: 92 XP</li>
</ul>
<p><strong>Dato clave sobre XP:</strong> El XP se <strong>divide</strong> entre los campeones aliados cercanos. Si estas solo en lane, recibis 100% del XP. Si tu jungler viene y se queda, ambos reciben ~62% cada uno. Por eso el jungler no deberia quedarse "taxeando" la wave: les saca XP a ambos.</p>
<p>Estar <strong>1 nivel arriba</strong> del rival equivale a aproximadamente <strong>600g en stats gratis</strong>. Por eso perder 1 oleada completa de minions es peor que dar un kill al enemigo.</p>`,
          en: `<p>Every <strong>30 seconds</strong> (starting at 1:05), a wave of minions leaves each nexus. Each wave contains:</p>
<ul>
  <li><strong>3 melee minions:</strong> More HP (~480), less damage. They arrive first.</li>
  <li><strong>3 caster minions (ranged):</strong> Less HP (~320), more damage. Attack from the back.</li>
  <li><strong>1 cannon minion (siege):</strong> Spawns every 3 waves before minute 15, every 2 waves between min 15-25, and EVERY wave after minute 25. Has lots of HP (~900+) and gives more gold.</li>
</ul>
<p><strong>How much each minion is worth:</strong></p>
<table>
  <tr><th>Type</th><th>Gold (early)</th><th>Gold (late, ~25 min)</th></tr>
  <tr><td>Melee</td><td>21g</td><td>~25g</td></tr>
  <tr><td>Caster</td><td>14g</td><td>~17g</td></tr>
  <tr><td>Cannon</td><td>60g</td><td>~90g</td></tr>
</table>
<p><strong>A full wave (no cannon) = ~105g</strong>. With cannon = ~165g.</p>
<p><strong>Minion XP:</strong></p>
<ul>
  <li>Melee: 60.45 XP</li>
  <li>Caster: 29.76 XP</li>
  <li>Cannon: 92 XP</li>
</ul>
<p><strong>Key XP fact:</strong> XP is <strong>split</strong> among nearby allied champions. If you're alone in lane, you get 100% XP. If your jungler comes and stays, you both get ~62% each. That's why the jungler shouldn't stay "taxing" the wave: it steals XP from both.</p>
<p>Being <strong>1 level up</strong> on your opponent is worth approximately <strong>600g in free stats</strong>. That's why losing a full wave of minions is worse than giving the enemy a kill.</p>`,
        },
      },
      {
        title: { es: 'Slow push — La tecnica mas importante', en: 'Slow push — The most important technique' },
        content: {
          es: `<p>El <strong>slow push</strong> es matar solo 1-2 minions de la oleada enemiga para crear una ventaja numerica. Tu oleada gana la pelea de minions y la wave crece cada vez mas a medida que se acumulan oleadas.</p>
<p><strong>Como hacerlo:</strong></p>
<ol>
  <li>Mata solo los <strong>casters enemigos</strong> (los 3 de rango). Deja vivos los melee.</li>
  <li>Tus minions ahora son mas que los del enemigo. Tu wave empuja lentamente.</li>
  <li>Cuando llega la siguiente oleada enemiga, tu wave ya tiene ventaja. La diferencia se acumula.</li>
  <li>Despues de 2-3 oleadas, tenes una <strong>mega wave de 15-20+ minions</strong> chocando contra la torre enemiga.</li>
</ol>
<p><strong>Cuando usar slow push:</strong></p>
<ul>
  <li><strong>Antes de un tower dive:</strong> Una wave de 2-3 oleadas te protege de los tiros de torre. El tanque puede absorber 2-3 tiros de torre mientras la wave tanquea. Es MUCHO mas seguro hacer un dive con una wave grande.</li>
  <li><strong>Antes de un recall:</strong> Si mandas una mega wave bajo torre, el enemigo tiene que quedarse a farmearla (pierde 15-20 minions si se va). Mientras tanto, vos podes recallear, comprar, y volver sin perder nada.</li>
  <li><strong>Antes de un objetivo (dragon, baron):</strong> Si mandas una slow push en una side lane, el enemigo tiene que mandar a alguien a recoger esa wave. Eso significa que tienen un jugador menos para pelear el objetivo.</li>
</ul>
<p><strong>Tip avanzado:</strong> Un slow push desde tu torre tarda ~90 segundos en llegar a la torre enemiga. Planificá en base a eso.</p>`,
          en: `<p>A <strong>slow push</strong> is killing only 1-2 minions from the enemy wave to create a numerical advantage. Your wave wins the minion fight and grows bigger as waves stack up.</p>
<p><strong>How to do it:</strong></p>
<ol>
  <li>Kill only the <strong>enemy casters</strong> (the 3 ranged ones). Leave the melee alive.</li>
  <li>Your minions now outnumber the enemy's. Your wave slowly pushes.</li>
  <li>When the next enemy wave arrives, your wave already has an advantage. The difference stacks.</li>
  <li>After 2-3 waves, you have a <strong>mega wave of 15-20+ minions</strong> crashing into the enemy tower.</li>
</ol>
<p><strong>When to use slow push:</strong></p>
<ul>
  <li><strong>Before a tower dive:</strong> A 2-3 wave stack protects you from tower shots. The tank can absorb 2-3 tower shots while the wave tanks. It's MUCH safer to dive with a big wave.</li>
  <li><strong>Before a recall:</strong> If you crash a mega wave under tower, the enemy has to stay and farm it (loses 15-20 minions if they leave). Meanwhile, you can recall, buy, and return without losing anything.</li>
  <li><strong>Before an objective (dragon, baron):</strong> If you set up a slow push in a side lane, the enemy has to send someone to collect that wave. That means they have one fewer player for the objective fight.</li>
</ul>
<p><strong>Advanced tip:</strong> A slow push from your tower takes ~90 seconds to reach the enemy tower. Plan accordingly.</p>`,
        },
      },
      {
        title: { es: 'Fast push (hard push)', en: 'Fast push (hard push)' },
        content: {
          es: `<p>El <strong>fast push</strong> (o hard push) es matar la wave lo mas rapido posible para que tus minions lleguen rapidamente a la torre enemiga.</p>
<p><strong>Como hacerlo:</strong> Usa todas tus habilidades y autoataques para limpiar la wave. Un mago con una habilidad AoE puede limpiar los casters de un solo cast.</p>
<p><strong>Cuando usar fast push:</strong></p>
<ul>
  <li><strong>Despues de una kill en lane:</strong> Si matas al enemigo, pusha la wave rapido bajo su torre. Los minions se pierden en la torre, el enemigo pierde oro y XP. Esto es como sacar una <strong>segunda kill</strong> en terminos de ventaja.</li>
  <li><strong>Antes de roamear:</strong> Empuja la wave rapido y rota a otra lane o al rio. Tu laner rival tiene que elegir entre seguirte (pierde CS) o quedarse (no te puede igualar).</li>
  <li><strong>Cuando necesitas recallear urgente:</strong> Empuja rapido, recall, compra, y volves. El timing importa: si recalleas con la wave en el medio del lane, perdes todo cuando la wave enemiga llega a tu torre y tu torre la mata antes de que vuelvas.</li>
  <li><strong>Para resetear la wave:</strong> Si la wave esta en una posicion desfavorable (ej: empujando lentamente hacia el enemigo), fast pushear bajo torre la resetea a neutral.</li>
</ul>
<p><strong>Diferencia clave con slow push:</strong></p>
<ul>
  <li><strong>Slow push:</strong> Acumulas minions, la wave crece, presiona fuerte pero tarda.</li>
  <li><strong>Fast push:</strong> La wave es chica (solo 1 oleada) pero llega rapido. Te da <strong>tempo</strong> (tiempo para hacer cosas en el mapa).</li>
</ul>`,
          en: `<p><strong>Fast push</strong> (or hard push) is killing the wave as quickly as possible so your minions reach the enemy tower fast.</p>
<p><strong>How to do it:</strong> Use all your abilities and auto-attacks to clear the wave. A mage with an AoE ability can clear the casters in one cast.</p>
<p><strong>When to use fast push:</strong></p>
<ul>
  <li><strong>After a lane kill:</strong> If you kill the enemy, push the wave fast under their tower. The minions are lost to the tower, the enemy loses gold and XP. This is like getting a <strong>second kill</strong> in terms of advantage.</li>
  <li><strong>Before roaming:</strong> Push the wave fast and rotate to another lane or river. Your lane opponent has to choose between following (loses CS) or staying (can't match you).</li>
  <li><strong>When you need to recall urgently:</strong> Push fast, recall, buy, and come back. Timing matters: if you recall with the wave in the middle of lane, you lose everything when the enemy wave reaches your tower and your tower kills it before you return.</li>
  <li><strong>To reset the wave:</strong> If the wave is in an unfavorable position (e.g., slowly pushing toward the enemy), fast pushing into tower resets it to neutral.</li>
</ul>
<p><strong>Key difference from slow push:</strong></p>
<ul>
  <li><strong>Slow push:</strong> Accumulates minions, wave grows, pressures hard but takes time.</li>
  <li><strong>Fast push:</strong> Small wave (just 1 wave) but arrives fast. Gives you <strong>tempo</strong> (time to do things on the map).</li>
</ul>`,
        },
      },
      {
        title: { es: 'Freeze — Congela la wave', en: 'Freeze — Freeze the wave' },
        content: {
          es: `<p>El <strong>freeze</strong> es mantener la wave <strong>justo afuera del rango de tu torre</strong> (a 2-3 Teemos de la torre, aprox). Queres que la wave enemiga tenga un poco mas de minions que la tuya, asi empuja lentamente hacia vos pero nunca llega a tu torre.</p>
<p><strong>Como hacerlo:</strong></p>
<ol>
  <li>Necesitas que haya <strong>~4 minions enemigos de mas</strong> que los tuyos en la wave.</li>
  <li>Solo lastimés (last-hitea) los minions cuando estan por morir. No uses habilidades en la wave.</li>
  <li>Si la wave se acerca demasiado a tu torre, mata los minions extra para igualar.</li>
  <li>Si la wave empieza a empujar hacia el enemigo, deja de atacar minions por completo.</li>
</ol>
<p><strong>Cuando freezear:</strong></p>
<ul>
  <li><strong>Cuando estas ganando el lane:</strong> Si estas 2/0, freezear obliga al enemigo a acercarse a tu zona para farmear. Si se acerca, lo matás. Si no se acerca, pierde CS y XP. Es un <strong>"lose-lose"</strong> para el rival.</li>
  <li><strong>Cuando estas siendo gankeado:</strong> Si el jungler enemigo esta activo en tu lado del mapa, freezear te pone cerca de tu torre = seguridad.</li>
  <li><strong>Cuando tu jungler viene a gankear:</strong> Si la wave esta freezeada cerca de tu torre, el enemigo esta sobreextendido y es un gank facil.</li>
</ul>
<p><strong>Cuando NO freezear:</strong></p>
<ul>
  <li>Si necesitas rotar a un objetivo (dragon, herald)</li>
  <li>Si tu torre esta por caer y perdes la zona de freeze</li>
  <li>Si el equipo te necesita en un teamfight</li>
</ul>
<p><strong>Romper un freeze enemigo:</strong> Si el enemigo te freezea, tenes que "crashear" la wave. Empuja con todo (habilidades + autos) para que tu wave llegue a su torre. La torre mata los minions extra y la wave se resetea.</p>`,
          en: `<p>A <strong>freeze</strong> is keeping the wave <strong>just outside your tower range</strong> (about 2-3 Teemos from the tower). You want the enemy wave to have slightly more minions than yours, so it slowly pushes toward you but never reaches your tower.</p>
<p><strong>How to do it:</strong></p>
<ol>
  <li>You need about <strong>~4 more enemy minions</strong> than yours in the wave.</li>
  <li>Only last-hit minions when they're about to die. Don't use abilities on the wave.</li>
  <li>If the wave gets too close to your tower, kill the extra minions to even it out.</li>
  <li>If the wave starts pushing toward the enemy, stop attacking minions entirely.</li>
</ol>
<p><strong>When to freeze:</strong></p>
<ul>
  <li><strong>When you're winning lane:</strong> If you're 2/0, freezing forces the enemy to approach your zone to farm. If they approach, you kill them. If they don't, they lose CS and XP. It's a <strong>"lose-lose"</strong> for the opponent.</li>
  <li><strong>When you're being ganked:</strong> If the enemy jungler is active on your side of the map, freezing puts you near your tower = safety.</li>
  <li><strong>When your jungler is coming to gank:</strong> If the wave is frozen near your tower, the enemy is overextended and it's an easy gank.</li>
</ul>
<p><strong>When NOT to freeze:</strong></p>
<ul>
  <li>If you need to rotate to an objective (dragon, herald)</li>
  <li>If your tower is about to fall and you lose the freeze zone</li>
  <li>If your team needs you in a teamfight</li>
</ul>
<p><strong>Breaking an enemy freeze:</strong> If the enemy freezes on you, you have to "crash" the wave. Push with everything (abilities + autos) so your wave reaches their tower. The tower kills the extra minions and the wave resets.</p>`,
        },
      },
      {
        title: { es: 'Dano de minions (no los subestimes)', en: 'Minion damage (don\'t underestimate them)' },
        content: {
          es: `<p>Los minions hacen <strong>mucho dano en los primeros niveles</strong>. Esto es algo que muchos jugadores no respetan, especialmente en trades agresivos.</p>
<p><strong>Dano de minions nivel 1:</strong></p>
<ul>
  <li>Cada <strong>caster minion</strong> hace ~23 dano por ataque, ataca cada 1.0 seg</li>
  <li>Cada <strong>melee minion</strong> hace ~12 dano por ataque, ataca cada 1.0 seg</li>
  <li>Una <strong>oleada completa (3 melee + 3 caster)</strong> atacandote = ~105 dano por segundo</li>
</ul>
<p><strong>Escenario comun:</strong> Vos atacas al enemigo nivel 1 y los 6 minions enemigos te empiezan a pegar. En 2 segundos perdes <strong>~210 HP</strong> solo por los minions. Eso puede ser la diferencia entre ganar y perder un trade.</p>
<p><strong>Cuando los minions te agrean:</strong></p>
<ul>
  <li>Los minions te atacan cuando <strong>autoatacas a un campeon enemigo</strong> dentro de su rango (~500 unidades)</li>
  <li>Las <strong>habilidades NO atraen agro</strong> de minions. Podes pegar habilidades al enemigo sin que los minions te persigan</li>
  <li>Para <strong>quitar el agro</strong>: metete en un bush o alejate lo suficiente para que los minions elijan otro objetivo</li>
</ul>
<p><strong>Tip critico:</strong> Si el enemigo tiene una wave grande (6+ minions) y vos tenes pocos, <strong>NO tradees</strong>. Perdes el trade por el dano de los minions, aunque tus habilidades hagan mas dano que las de el. Siempre fijate la <strong>ventaja de minions</strong> antes de tradear.</p>`,
          en: `<p>Minions deal <strong>a lot of damage in the early levels</strong>. This is something many players don't respect, especially during aggressive trades.</p>
<p><strong>Level 1 minion damage:</strong></p>
<ul>
  <li>Each <strong>caster minion</strong> deals ~23 damage per attack, attacks every 1.0 sec</li>
  <li>Each <strong>melee minion</strong> deals ~12 damage per attack, attacks every 1.0 sec</li>
  <li>A <strong>full wave (3 melee + 3 caster)</strong> attacking you = ~105 damage per second</li>
</ul>
<p><strong>Common scenario:</strong> You attack the enemy at level 1 and all 6 enemy minions start hitting you. In 2 seconds you lose <strong>~210 HP</strong> just from minions. That can be the difference between winning and losing a trade.</p>
<p><strong>When minions aggro you:</strong></p>
<ul>
  <li>Minions attack you when you <strong>auto-attack an enemy champion</strong> within their range (~500 units)</li>
  <li><strong>Abilities do NOT draw minion aggro</strong>. You can hit abilities on the enemy without minions chasing you</li>
  <li>To <strong>drop aggro</strong>: enter a bush or walk far enough that minions pick another target</li>
</ul>
<p><strong>Critical tip:</strong> If the enemy has a big wave (6+ minions) and you have few, <strong>DON'T trade</strong>. You'll lose the trade from minion damage, even if your abilities deal more damage than theirs. Always check the <strong>minion advantage</strong> before trading.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. VISION Y MAPA (VISION & MAP)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'vision-map',
    title: { es: 'Vision y Mapa', en: 'Vision & Map' },
    icon: '\uD83D\uDC41\uFE0F',
    topics: [
      {
        title: { es: 'Stealth Wards (Wards amarillos)', en: 'Stealth Wards (Yellow trinket)' },
        content: {
          es: `<p>Las <strong>Stealth Wards</strong> son wards <strong>invisibles</strong> que dan vision de una zona.</p>
<p><strong>Caracteristicas:</strong></p>
<ul>
  <li><strong>Duracion:</strong> 90-120 segundos (dependiendo del nivel)</li>
  <li><strong>Cargas:</strong> 2 cargas maximo del trinket (se recargan cada 90-120 seg)</li>
  <li><strong>Invisibles:</strong> Solo se ven con Control Wards, Oracle Lens (trinket rojo), u habilidades que revelen (ej: Twisted Fate R)</li>
  <li><strong>Vida:</strong> 3 golpes para destruirlas (dan ~10g)</li>
  <li><strong>Rango de vision:</strong> ~900 unidades (bastante amplio)</li>
  <li><strong>Limite:</strong> Maximo 3 stealth wards en el mapa al mismo tiempo. Si pones una 4ta, la mas vieja desaparece.</li>
</ul>
<p><strong>Dato importante:</strong> Los supports que compran un item de soporte reciben <strong>Stealth Wards extra</strong> al completar la mision del item (matar minions con el item o pokeando). Esto les da 4 cargas de ward en vez de 2, y las wards duran mas.</p>`,
          en: `<p><strong>Stealth Wards</strong> are <strong>invisible</strong> wards that provide vision of an area.</p>
<p><strong>Characteristics:</strong></p>
<ul>
  <li><strong>Duration:</strong> 90-120 seconds (depending on level)</li>
  <li><strong>Charges:</strong> 2 max trinket charges (recharge every 90-120 sec)</li>
  <li><strong>Invisible:</strong> Only visible with Control Wards, Oracle Lens (red trinket), or reveal abilities (e.g., Twisted Fate R)</li>
  <li><strong>Health:</strong> 3 hits to destroy (give ~10g)</li>
  <li><strong>Vision range:</strong> ~900 units (fairly wide)</li>
  <li><strong>Limit:</strong> Maximum 3 stealth wards on the map at once. If you place a 4th, the oldest disappears.</li>
</ul>
<p><strong>Important fact:</strong> Supports who buy a support item receive <strong>extra Stealth Wards</strong> upon completing the item quest (killing minions with the item or poking). This gives them 4 ward charges instead of 2, and wards last longer.</p>`,
        },
      },
      {
        title: { es: 'Control Wards (Wards rosas)', en: 'Control Wards (Pink wards)' },
        content: {
          es: `<p>Las <strong>Control Wards</strong> son wards <strong>visibles</strong> pero con propiedades especiales:</p>
<ul>
  <li><strong>Duran para siempre</strong> hasta que son destruidas por el enemigo</li>
  <li><strong>Revelan</strong> wards enemigos invisibles (stealth wards), trampas, y campeones camuflados (como Twitch Q, Evelynn) en su rango</li>
  <li><strong>Deshabilitan</strong> wards enemigos mientras estan en rango (los wards enemigos dejan de dar vision)</li>
  <li><strong>Costo:</strong> 75g cada una. Se compran en la tienda.</li>
  <li><strong>Limite:</strong> Solo 1 control ward tuya en el mapa al mismo tiempo. Si pones otra, la anterior desaparece.</li>
  <li><strong>Limite en inventario:</strong> Podes llevar 2 en el inventario.</li>
  <li><strong>Vida:</strong> 4 golpes para destruirla.</li>
</ul>
<p><strong>Por que son TAN importantes:</strong></p>
<ol>
  <li>75g es NADA. Un melee minion vale 21g. Una control ward vale menos que 4 minions.</li>
  <li>Puede salvarte la vida. Si detecta al jungler enemigo viniendo a gankearte, esa control ward de 75g te salvo 300g (de la kill) + CS + XP.</li>
  <li>Controla la vision del objetivo. Una control ward en el dragon pit antes de un dragon fight puede ganar la pelea sola porque revela wards enemigos.</li>
</ol>
<p><strong>Regla de oro: SIEMPRE tene una control ward en el mapa. En CADA recall, compra una si no tenes.</strong> Esto aplica a TODOS los roles, no solo al support.</p>`,
          en: `<p><strong>Control Wards</strong> are <strong>visible</strong> wards with special properties:</p>
<ul>
  <li><strong>Last forever</strong> until destroyed by the enemy</li>
  <li><strong>Reveal</strong> enemy invisible wards (stealth wards), traps, and camouflaged champions (like Twitch Q, Evelynn) in their range</li>
  <li><strong>Disable</strong> enemy wards while in range (enemy wards stop providing vision)</li>
  <li><strong>Cost:</strong> 75g each. Bought from the shop.</li>
  <li><strong>Limit:</strong> Only 1 of your control wards on the map at once. If you place another, the previous one disappears.</li>
  <li><strong>Inventory limit:</strong> You can carry 2 in your inventory.</li>
  <li><strong>Health:</strong> 4 hits to destroy.</li>
</ul>
<p><strong>Why they are SO important:</strong></p>
<ol>
  <li>75g is NOTHING. A melee minion is worth 21g. A control ward costs less than 4 minions.</li>
  <li>It can save your life. If it detects the enemy jungler coming to gank you, that 75g control ward saved you 300g (from the kill) + CS + XP.</li>
  <li>Controls objective vision. A control ward in the dragon pit before a dragon fight can win the fight alone because it reveals enemy wards.</li>
</ol>
<p><strong>Golden rule: ALWAYS have a control ward on the map. On EVERY recall, buy one if you don't have one.</strong> This applies to ALL roles, not just support.</p>`,
        },
      },
      {
        title: { es: 'Donde wardear (guia por situacion)', en: 'Where to ward (situational guide)' },
        content: {
          es: `<p>Los mejores spots de ward dependen de tu <strong>situacion en el juego</strong>:</p>
<p><strong>Fase de linea — Proteccion de ganks:</strong></p>
<ul>
  <li><strong>River brush (arbusto del rio):</strong> El spot mas basico. Cubre la ruta principal de ganks del jungler.</li>
  <li><strong>Pixel brush:</strong> El arbustito chiquito en el rio entre mid y bot/top. Da vision de roams y del jungler pasando.</li>
  <li><strong>Tri-bush:</strong> El arbusto triangular. Si estas en lado azul bot lane, el tri-bush de TU lado es crucial. Si estas en lado rojo, wardea el river en su lugar.</li>
  <li><strong>Entrada a la jungla enemiga:</strong> Si estas ganando lane, wardear la entrada a los raptores o lobos enemigos te da info del jungler enemigo sin necesidad de que este en el rio.</li>
</ul>
<p><strong>Mid game — Control de mapa:</strong></p>
<ul>
  <li><strong>Bushes de dragon/baron:</strong> Vision del pit es PRIORIDAD antes de cualquier pelea de objetivo.</li>
  <li><strong>Buffs enemigos:</strong> Wardear el blue o red buff enemigo te dice cuando el jungler va a estar ahi. Podes interceptarlo o tomar el objetivo opuesto.</li>
  <li><strong>Crossroads de jungla:</strong> Las intersecciones de la jungla (donde se cruzan 3+ caminos) dan vision de multiples rutas con una sola ward.</li>
</ul>
<p><strong>Late game — Setup de Baron:</strong></p>
<ul>
  <li><strong>Dentro del baron pit:</strong> Control ward aca. Es sagrada.</li>
  <li><strong>Ambas entradas al pit de baron:</strong> Una ward en cada lado (arriba y abajo).</li>
  <li><strong>Jungla enemiga cerca de baron:</strong> Para ver al enemigo acercandose antes de que llegue.</li>
</ul>`,
          en: `<p>The best ward spots depend on your <strong>situation in the game</strong>:</p>
<p><strong>Laning phase — Gank protection:</strong></p>
<ul>
  <li><strong>River brush:</strong> The most basic spot. Covers the main ganking route for the jungler.</li>
  <li><strong>Pixel brush:</strong> The small brush in the river between mid and bot/top. Gives vision of roams and the jungler passing through.</li>
  <li><strong>Tri-bush:</strong> The triangular brush. If you're on blue side bot lane, YOUR side tri-bush is crucial. If you're on red side, ward the river instead.</li>
  <li><strong>Enemy jungle entrance:</strong> If you're winning lane, warding the entrance to enemy raptors or wolves gives you jungler info without them needing to be in river.</li>
</ul>
<p><strong>Mid game — Map control:</strong></p>
<ul>
  <li><strong>Dragon/baron brushes:</strong> Pit vision is PRIORITY before any objective fight.</li>
  <li><strong>Enemy buffs:</strong> Warding the enemy blue or red buff tells you when the jungler will be there. You can intercept or take the opposite objective.</li>
  <li><strong>Jungle crossroads:</strong> Jungle intersections (where 3+ paths cross) give vision of multiple routes with a single ward.</li>
</ul>
<p><strong>Late game — Baron setup:</strong></p>
<ul>
  <li><strong>Inside baron pit:</strong> Control ward here. It's sacred.</li>
  <li><strong>Both pit entrances:</strong> A ward on each side (above and below).</li>
  <li><strong>Enemy jungle near baron:</strong> To see the enemy approaching before they arrive.</li>
</ul>`,
        },
      },
      {
        title: { es: 'Fog of War y Vision Score', en: 'Fog of War and Vision Score' },
        content: {
          es: `<p><strong>Fog of War</strong> (niebla de guerra) es la zona oscura del mapa donde NO tenes vision. Si no podes ver a un enemigo, asumí que esta viniendo por vos.</p>
<p><strong>Regla de oro:</strong> Si ves 4 enemigos en el mapa y no sabes donde esta el 5to, ese 5to esta haciendo algo peligroso. Puede estar:</p>
<ul>
  <li>Gankeando tu lane</li>
  <li>Haciendo un objetivo en secreto</li>
  <li>Esperando en un bush para emboscarte</li>
</ul>
<p><strong>Contar enemigos en el mapa:</strong> Cada 5 segundos, mira el minimapa y <strong>conta cuantos enemigos ves</strong>. Si faltan 2+, juega pasivo. Esto es literalmente la diferencia entre Iron y Gold.</p>
<p><strong>Vision Score:</strong></p>
<p>Es una metrica que mide cuanto contribuis a la vision del equipo. Se calcula basandose en:</p>
<ul>
  <li>Wards colocadas que dan vision util</li>
  <li>Wards enemigas destruidas</li>
  <li>Uso del Oracle Lens (trinket rojo)</li>
</ul>
<p><strong>Objetivos de Vision Score por rol:</strong></p>
<table>
  <tr><th>Rol</th><th>Vision Score objetivo (por minuto de juego)</th></tr>
  <tr><td>Support</td><td>2.0x los minutos del juego (30 min = 60 VS)</td></tr>
  <tr><td>Jungler</td><td>1.5x los minutos del juego</td></tr>
  <tr><td>Mid/Top/ADC</td><td>1.0x los minutos del juego</td></tr>
</table>
<p><strong>Tip:</strong> Cambiar al trinket rojo (Oracle Lens) te da vision score por negar vision enemiga. Los junglers y supports deberian cambiar a rojo despues de completar su item de jungla/support.</p>`,
          en: `<p><strong>Fog of War</strong> is the dark area of the map where you have NO vision. If you can't see an enemy, assume they're coming for you.</p>
<p><strong>Golden rule:</strong> If you see 4 enemies on the map and don't know where the 5th is, that 5th one is doing something dangerous. They could be:</p>
<ul>
  <li>Ganking your lane</li>
  <li>Doing an objective secretly</li>
  <li>Waiting in a bush to ambush you</li>
</ul>
<p><strong>Counting enemies on the map:</strong> Every 5 seconds, look at the minimap and <strong>count how many enemies you see</strong>. If 2+ are missing, play passive. This is literally the difference between Iron and Gold.</p>
<p><strong>Vision Score:</strong></p>
<p>It's a metric that measures how much you contribute to team vision. It's calculated based on:</p>
<ul>
  <li>Wards placed that provide useful vision</li>
  <li>Enemy wards destroyed</li>
  <li>Use of Oracle Lens (red trinket)</li>
</ul>
<p><strong>Vision Score targets by role:</strong></p>
<table>
  <tr><th>Role</th><th>Vision Score target (per minute of game time)</th></tr>
  <tr><td>Support</td><td>2.0x game minutes (30 min = 60 VS)</td></tr>
  <tr><td>Jungler</td><td>1.5x game minutes</td></tr>
  <tr><td>Mid/Top/ADC</td><td>1.0x game minutes</td></tr>
</table>
<p><strong>Tip:</strong> Switching to the red trinket (Oracle Lens) gives you vision score for denying enemy vision. Junglers and supports should switch to red after completing their jungle/support item.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 7. OBJETIVOS (OBJECTIVES)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'objectives',
    title: { es: 'Objetivos', en: 'Objectives' },
    icon: '\uD83C\uDFF0',
    topics: [
      {
        title: { es: 'Torres — Estructura y placas', en: 'Towers — Structure and plating' },
        content: {
          es: `<p>Las torres son el <strong>objetivo principal</strong> para ganar la partida. El camino a la victoria es: Torres exteriores -> Torres interiores -> Torres de inhibidor -> Torres del nexo -> Nexo.</p>
<p><strong>Placas de torre (Tower Plating):</strong></p>
<ul>
  <li>Existen solo en las <strong>torres exteriores</strong> (las primeras de cada lane)</li>
  <li><strong>5 placas por torre</strong>, cada placa da <strong>160g</strong> (repartido entre los que estan cerca)</li>
  <li>5 placas = <strong>800g potenciales</strong> por torre. Es una fuente de oro ENORME en early game.</li>
  <li>Las placas <strong>desaparecen a las 14:00</strong>. Toda placa que no rompiste antes de las 14 se pierde.</li>
  <li>Cada placa destruida hace que la torre <strong>gane armadura y MR temporal</strong> (Bulwark). Esto hace que cada placa siguiente sea mas dificil de sacar.</li>
</ul>
<p><strong>Oro por destruir torres:</strong></p>
<ul>
  <li>Torre exterior: 250g (repartido) + 150g al que da el ultimo golpe</li>
  <li>Torre interior: 300g (repartido) + 150g</li>
  <li>Torre de inhibidor: 50g (repartido) + 50g</li>
  <li>First Blood tower (primera torre del juego): +150g bonus</li>
</ul>
<p><strong>Prioridad de torres:</strong></p>
<p>En general: <strong>Bot > Mid > Top</strong> (en ese orden de prioridad)</p>
<ul>
  <li><strong>Torre bot:</strong> Sacar la torre bot te da acceso libre al dragon. El ADC y support rotan a mid despues de sacarla.</li>
  <li><strong>Torre mid:</strong> Sacar mid abre el mapa entero. Es la torre mas importante del mid game.</li>
  <li><strong>Torre top:</strong> Da acceso al Rift Herald/Baron pero es la menos prioritaria porque esta lejos del dragon.</li>
</ul>`,
          en: `<p>Towers are the <strong>main objective</strong> for winning the game. The path to victory is: Outer towers -> Inner towers -> Inhibitor towers -> Nexus towers -> Nexus.</p>
<p><strong>Tower Plating:</strong></p>
<ul>
  <li>Only exists on <strong>outer towers</strong> (the first tower in each lane)</li>
  <li><strong>5 plates per tower</strong>, each plate gives <strong>160g</strong> (split among nearby players)</li>
  <li>5 plates = <strong>800g potential</strong> per tower. It's a HUGE gold source in early game.</li>
  <li>Plates <strong>disappear at 14:00</strong>. Any plate you didn't break before 14 is lost.</li>
  <li>Each destroyed plate makes the tower <strong>gain temporary armor and MR</strong> (Bulwark). This makes each subsequent plate harder to take.</li>
</ul>
<p><strong>Gold for destroying towers:</strong></p>
<ul>
  <li>Outer tower: 250g (split) + 150g to the last hitter</li>
  <li>Inner tower: 300g (split) + 150g</li>
  <li>Inhibitor tower: 50g (split) + 50g</li>
  <li>First Blood tower (first tower of the game): +150g bonus</li>
</ul>
<p><strong>Tower priority:</strong></p>
<p>Generally: <strong>Bot > Mid > Top</strong> (in that priority order)</p>
<ul>
  <li><strong>Bot tower:</strong> Taking bot tower gives free dragon access. ADC and support rotate to mid after taking it.</li>
  <li><strong>Mid tower:</strong> Taking mid opens the entire map. It's the most important mid game tower.</li>
  <li><strong>Top tower:</strong> Gives access to Rift Herald/Baron but is the least priority because it's far from dragon.</li>
</ul>`,
        },
      },
      {
        title: { es: 'Dragones — Tipos y almas', en: 'Dragons — Types and souls' },
        content: {
          es: `<p>Los dragones dan <strong>buffs permanentes</strong> a todo tu equipo. El primer dragon aparece a las <strong>5:00</strong> y respawnea cada <strong>5 minutos</strong>.</p>
<p><strong>Tipos de Dragon y sus buffs:</strong></p>
<table>
  <tr><th>Dragon</th><th>Buff por dragon</th><th>Alma (4to dragon)</th></tr>
  <tr><td><strong>Infernal</strong></td><td>+4% AD y AP</td><td>Cada cierto tiempo, tu proximo ataque/habilidad explota en area</td></tr>
  <tr><td><strong>Mountain</strong></td><td>+6% Armor y MR</td><td>Obtenes un escudo que se regenera fuera de combate</td></tr>
  <tr><td><strong>Ocean</strong></td><td>Regeneracion de HP (% HP faltante)</td><td>Dano que haces cura un % de tu HP</td></tr>
  <tr><td><strong>Hextech</strong></td><td>+5% AS y Ability Haste</td><td>Tus ataques y habilidades aplican un chain lightning</td></tr>
  <tr><td><strong>Cloud</strong></td><td>+3.5% Move Speed</td><td>Despues de usar tu ult, ganas MS y slow resistance</td></tr>
  <tr><td><strong>Chemtech</strong></td><td>+5% Tenacity y Healing/Shielding power</td><td>Al llegar a bajos HP, ganas un burst de tenacity y dano</td></tr>
</table>
<p><strong>Dragon Soul:</strong> El equipo que mata al <strong>4to dragon</strong> obtiene el <strong>Dragon Soul</strong>, un buff permanente y MUY poderoso basado en el tipo de dragon dominante. El dragon soul puede definir el juego.</p>
<p><strong>Elder Dragon:</strong></p>
<ul>
  <li>Aparece despues de que un equipo obtiene el Dragon Soul</li>
  <li>Da un buff de <strong>ejecucion</strong>: cualquier enemigo que bajes al <strong>20% de HP o menos es ejecutado instantaneamente</strong></li>
  <li>El buff de Elder dura solo un tiempo limitado, no es permanente</li>
  <li>Es el objetivo mas poderoso del juego. Un equipo con Elder casi siempre gana la pelea.</li>
</ul>
<p><strong>Prioridad de dragones:</strong> Infernal > Mountain > Hextech > Ocean > Cloud > Chemtech (en general, pero depende de la comp).</p>`,
          en: `<p>Dragons give <strong>permanent buffs</strong> to your entire team. The first dragon spawns at <strong>5:00</strong> and respawns every <strong>5 minutes</strong>.</p>
<p><strong>Dragon types and buffs:</strong></p>
<table>
  <tr><th>Dragon</th><th>Buff per dragon</th><th>Soul (4th dragon)</th></tr>
  <tr><td><strong>Infernal</strong></td><td>+4% AD and AP</td><td>Periodically, your next attack/ability explodes in AoE</td></tr>
  <tr><td><strong>Mountain</strong></td><td>+6% Armor and MR</td><td>You get a shield that regenerates out of combat</td></tr>
  <tr><td><strong>Ocean</strong></td><td>HP regeneration (% missing HP)</td><td>Damage you deal heals a % of your HP</td></tr>
  <tr><td><strong>Hextech</strong></td><td>+5% AS and Ability Haste</td><td>Your attacks and abilities apply chain lightning</td></tr>
  <tr><td><strong>Cloud</strong></td><td>+3.5% Move Speed</td><td>After using your ult, you gain MS and slow resistance</td></tr>
  <tr><td><strong>Chemtech</strong></td><td>+5% Tenacity and Healing/Shielding power</td><td>When reaching low HP, you gain a burst of tenacity and damage</td></tr>
</table>
<p><strong>Dragon Soul:</strong> The team that kills the <strong>4th dragon</strong> gets the <strong>Dragon Soul</strong>, a permanent and VERY powerful buff based on the dominant dragon type. Dragon soul can define the game.</p>
<p><strong>Elder Dragon:</strong></p>
<ul>
  <li>Spawns after a team obtains Dragon Soul</li>
  <li>Gives an <strong>execute</strong> buff: any enemy you bring to <strong>20% HP or below is instantly executed</strong></li>
  <li>Elder buff only lasts for a limited time, it's not permanent</li>
  <li>It's the most powerful objective in the game. A team with Elder almost always wins the fight.</li>
</ul>
<p><strong>Dragon priority:</strong> Infernal > Mountain > Hextech > Ocean > Cloud > Chemtech (generally, but depends on comp).</p>`,
        },
      },
      {
        title: { es: 'Rift Herald y Baron Nashor', en: 'Rift Herald and Baron Nashor' },
        content: {
          es: `<p><strong>Rift Herald (Heraldo del Rift):</strong></p>
<ul>
  <li>Aparece a las <strong>14:00</strong> en el pit de baron</li>
  <li>Segundo heraldo aparece a las <strong>19:45</strong></li>
  <li>Al matarlo, deja un <strong>ojo</strong> que podes recoger. Usalo para invocarlo y que cargue contra una torre.</li>
  <li>Dano a la torre: saca <strong>2-3 placas</strong> (o ~40% de HP de una torre sin placas). Mas dano si carga directamente.</li>
  <li><strong>Tip:</strong> Si el heraldo carga contra una placa, espera a que la placa caiga ANTES de atacar la torre vos. Asi la armadura de Bulwark no se aplica todavia.</li>
  <li><strong>Herald vs Dragon:</strong> Si solo podes tomar uno, generalmente el <strong>Herald es mejor en early game</strong> porque da mas oro inmediato (placas), pero si el dragon es Infernal, puede valer mas.</li>
</ul>
<p><strong>Baron Nashor:</strong></p>
<ul>
  <li>Aparece a las <strong>20:00</strong> en el mismo pit que el Herald</li>
  <li>Respawnea cada <strong>5 minutos</strong> si es matado</li>
  <li><strong>Baron buff:</strong> Dura 3 minutos. Da:
    <ul>
      <li><strong>Empowered Recall:</strong> Tu recall tarda solo 4 segundos (en vez de 8)</li>
      <li><strong>Buff a minions cercanos:</strong> Los minions ganan mas HP, dano, velocidad, y rango. Esto es como tener super minions en TODAS las lanes.</li>
      <li>Bonus AD y AP a tu campeon</li>
    </ul>
  </li>
  <li><strong>Como usar Baron buff:</strong> El buff brilla cuando empujas con minions. Agrupa al equipo, ve a una lane, y pushea. Los minions buffeados tanquean la torre y la derriban rapidamente. Asi se siegea y se toman inhibidores.</li>
</ul>
<p><strong>REGLA DE ORO de Baron:</strong></p>
<p><strong>NUNCA</strong> hagas Baron si:</p>
<ul>
  <li>El jungler enemigo esta vivo Y no sabes donde esta (puede robarlo con Smite)</li>
  <li>Hay 3+ enemigos vivos cerca sin vision</li>
  <li>Tu equipo no tiene suficiente HP/mana para pelear despues</li>
</ul>
<p>Baron mata mas equipos de los que ayuda en elos bajos porque la gente lo intenta sin las condiciones correctas.</p>`,
          en: `<p><strong>Rift Herald:</strong></p>
<ul>
  <li>Spawns at <strong>14:00</strong> in the baron pit</li>
  <li>Second herald spawns at <strong>19:45</strong></li>
  <li>When killed, drops an <strong>eye</strong> you can pick up. Use it to summon it to charge at a tower.</li>
  <li>Tower damage: takes <strong>2-3 plates</strong> (or ~40% HP of a plateless tower). More damage on a direct charge.</li>
  <li><strong>Tip:</strong> If the herald charges a plate, wait for the plate to fall BEFORE you attack the tower. That way Bulwark armor doesn't apply yet.</li>
  <li><strong>Herald vs Dragon:</strong> If you can only take one, generally <strong>Herald is better in early game</strong> because it gives more immediate gold (plates), but if the dragon is Infernal, it might be worth more.</li>
</ul>
<p><strong>Baron Nashor:</strong></p>
<ul>
  <li>Spawns at <strong>20:00</strong> in the same pit as Herald</li>
  <li>Respawns every <strong>5 minutes</strong> if killed</li>
  <li><strong>Baron buff:</strong> Lasts 3 minutes. Gives:
    <ul>
      <li><strong>Empowered Recall:</strong> Your recall takes only 4 seconds (instead of 8)</li>
      <li><strong>Minion buff:</strong> Nearby minions gain more HP, damage, speed, and range. This is like having super minions in ALL lanes.</li>
      <li>Bonus AD and AP for your champion</li>
    </ul>
  </li>
  <li><strong>How to use Baron buff:</strong> The buff shines when you push with minions. Group your team, go to a lane, and push. Buffed minions tank the tower and bring it down quickly. This is how you siege and take inhibitors.</li>
</ul>
<p><strong>Baron GOLDEN RULE:</strong></p>
<p><strong>NEVER</strong> do Baron if:</p>
<ul>
  <li>The enemy jungler is alive AND you don't know where they are (they can steal with Smite)</li>
  <li>There are 3+ enemies alive nearby without vision</li>
  <li>Your team doesn't have enough HP/mana to fight afterward</li>
</ul>
<p>Baron kills more teams than it helps in low elo because people attempt it without the right conditions.</p>`,
        },
      },
      {
        title: { es: 'Inhibidores y super minions', en: 'Inhibitors and super minions' },
        content: {
          es: `<p>Los <strong>inhibidores</strong> son las estructuras que estan despues de las torres de inhibidor (la 3ra torre de cada lane).</p>
<ul>
  <li>Cuando destruis un inhibidor, la lane correspondiente empieza a spawnear <strong>super minions</strong></li>
  <li>Los super minions son MUY fuertes: tienen ~4000 HP, hacen mucho dano, y tienen mucha armadura/MR</li>
  <li>El inhibidor <strong>respawnea despues de 5 minutos</strong>. Cuando respawnea, los super minions dejan de aparecer</li>
  <li>Los inhibidores <strong>NO dan oro</strong> al destruirlos</li>
</ul>
<p><strong>La presion de un inhibidor destruido:</strong></p>
<p>Cuando destruis un inhibidor, el equipo enemigo tiene un problema enorme:</p>
<ul>
  <li>Alguien TIENE que quedarse a defender la lane con super minions. Si nadie defiende, los super minions llegan al nexo y lo destruyen.</li>
  <li>Eso significa que el equipo enemigo pelea 4v5 en cualquier otro lugar del mapa.</li>
  <li>Podes usar esta presion para tomar Baron, el otro inhibidor, o forzar una pelea 5v4.</li>
</ul>
<p><strong>Si destruis los 3 inhibidores:</strong> Las 3 lanes spawnean super minions. El enemigo esta practicamente atrapado en la base. En este punto, ir al nexo es cuestion de tiempo.</p>
<p><strong>Tip:</strong> No siempre hay que ir directamente al nexo despues de destruir un inhibidor. A veces es mejor <strong>retirarse, tomar Baron, y despues volver con Baron buff + super minions</strong>. Esa combinacion es imparable.</p>`,
          en: `<p><strong>Inhibitors</strong> are the structures after the inhibitor towers (the 3rd tower in each lane).</p>
<ul>
  <li>When you destroy an inhibitor, the corresponding lane starts spawning <strong>super minions</strong></li>
  <li>Super minions are VERY strong: they have ~4000 HP, deal lots of damage, and have high armor/MR</li>
  <li>The inhibitor <strong>respawns after 5 minutes</strong>. When it respawns, super minions stop appearing</li>
  <li>Inhibitors <strong>do NOT give gold</strong> when destroyed</li>
</ul>
<p><strong>The pressure of a destroyed inhibitor:</strong></p>
<p>When you destroy an inhibitor, the enemy team has a huge problem:</p>
<ul>
  <li>Someone HAS to stay and defend the lane with super minions. If no one defends, super minions reach the nexus and destroy it.</li>
  <li>That means the enemy team fights 4v5 anywhere else on the map.</li>
  <li>You can use this pressure to take Baron, the other inhibitor, or force a 5v4 fight.</li>
</ul>
<p><strong>If you destroy all 3 inhibitors:</strong> All 3 lanes spawn super minions. The enemy is practically trapped in base. At this point, getting to the nexus is just a matter of time.</p>
<p><strong>Tip:</strong> You don't always have to go straight for the nexus after destroying an inhibitor. Sometimes it's better to <strong>back off, take Baron, and then come back with Baron buff + super minions</strong>. That combination is unstoppable.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 8. FASES DEL JUEGO (GAME PHASES)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'game-phases',
    title: { es: 'Fases del Juego', en: 'Game Phases' },
    icon: '\u23F1\uFE0F',
    topics: [
      {
        title: { es: 'Fase de linea (1:00 - 14:00)', en: 'Laning phase (1:00 - 14:00)' },
        content: {
          es: `<p>La fase de linea es desde el inicio hasta que las <strong>placas de torre caen a las 14:00</strong>. Es cuando cada jugador esta en su lane (o jungla) y el foco esta en:</p>
<p><strong>Prioridades:</strong></p>
<ol>
  <li><strong>CS (Creep Score):</strong> Cada minion que matas te da oro. Apuntar a 7-8 CS/min en elos bajos, 9-10 CS/min en elos altos.</li>
  <li><strong>Trading:</strong> Dano al enemigo para hacerle gastar pociones o sacarlo del lane. Tradear cuando tenes ventaja de minions.</li>
  <li><strong>No morir:</strong> Cada muerte le da al rival 300g + XP + tempo. Morir es LO PEOR que podes hacer.</li>
  <li><strong>Vision:</strong> Wardear para no ser gankeado.</li>
</ol>
<p><strong>Como jugador de Jungle (tu rol):</strong></p>
<ul>
  <li>Primer clear: hace tu ruta completa (6 camps) terminando a las ~3:15-3:30</li>
  <li>Gankea la lane que tenga ventaja de wave (la wave esta empujada hacia tu torre) o la lane que tenga CC para asegurar la kill</li>
  <li>Si no podes gankear, segui farmeando. Es mejor farmear que un gank fallido.</li>
  <li>Prepara vision para el primer dragon/herald a las 5:00</li>
  <li>Trackea al jungler enemigo (si empezo azul, va a estar en rojo a las 3:15)</li>
</ul>
<p><strong>Como support (tu otro rol):</strong></p>
<ul>
  <li>Nivel 1-2: focus en tradear con habilidades cuando el enemigo va a last-hittear (estan parados quietos)</li>
  <li>Nivel 3-5: buscar engages si sos tank (Nautilus, Leona) o pokear si sos mago (Lux, Zyra)</li>
  <li>Nivel 6: power spike gigante para la mayoria de los supports. Ults como Nautilus R o Lux R cambian el lane.</li>
  <li>A partir de las 6:00-8:00: empeza a roamear a mid cuando tu ADC esta seguro</li>
</ul>`,
          en: `<p>The laning phase is from the start until <strong>tower plating falls at 14:00</strong>. It's when each player is in their lane (or jungle) and the focus is on:</p>
<p><strong>Priorities:</strong></p>
<ol>
  <li><strong>CS (Creep Score):</strong> Every minion you kill gives gold. Aim for 7-8 CS/min in low elo, 9-10 CS/min in high elo.</li>
  <li><strong>Trading:</strong> Damage to the enemy to make them spend potions or leave lane. Trade when you have minion advantage.</li>
  <li><strong>Not dying:</strong> Every death gives the enemy 300g + XP + tempo. Dying is THE WORST thing you can do.</li>
  <li><strong>Vision:</strong> Ward to avoid ganks.</li>
</ol>
<p><strong>As a Jungler (your role):</strong></p>
<ul>
  <li>First clear: do your full route (6 camps) finishing at ~3:15-3:30</li>
  <li>Gank the lane that has wave advantage (wave is pushed toward your tower) or the lane with CC to secure the kill</li>
  <li>If you can't gank, keep farming. Better to farm than a failed gank.</li>
  <li>Set up vision for the first dragon/herald at 5:00</li>
  <li>Track the enemy jungler (if they started blue, they'll be at red at ~3:15)</li>
</ul>
<p><strong>As a Support (your other role):</strong></p>
<ul>
  <li>Level 1-2: focus on trading with abilities when the enemy goes for last-hits (they're standing still)</li>
  <li>Level 3-5: look for engages if you're a tank (Nautilus, Leona) or poke if you're a mage (Lux, Zyra)</li>
  <li>Level 6: huge power spike for most supports. Ults like Nautilus R or Lux R change the lane.</li>
  <li>From 6:00-8:00: start roaming to mid when your ADC is safe</li>
</ul>`,
        },
      },
      {
        title: { es: 'Mid game (14:00 - 25:00)', en: 'Mid game (14:00 - 25:00)' },
        content: {
          es: `<p>El mid game empieza cuando las <strong>placas caen a las 14:00</strong>. Las lanes se abren, los jugadores empiezan a rotar, y el foco cambia a <strong>objetivos y teamfights</strong>.</p>
<p><strong>Que cambia:</strong></p>
<ul>
  <li>Ya no hay placas, asi que sacar torres es menos lucrativo pero sigue siendo importante</li>
  <li>Los bot laners (ADC + Support) generalmente rotan a mid despues de sacar torre bot</li>
  <li>Los junglers tienen que elegir entre farmear y estar presente para objetivos</li>
  <li>Las peleas alrededor de Dragon y Baron empiezan a definir el juego</li>
</ul>
<p><strong>Como jungler en mid game:</strong></p>
<ul>
  <li><strong>Prioridad 1:</strong> Estar cerca de los objetivos 1 minuto antes de que spawnen</li>
  <li><strong>Prioridad 2:</strong> Farmear la jungla cuando no hay objetivos. Los camps valen cada vez mas con el tiempo.</li>
  <li><strong>Prioridad 3:</strong> Ayudar a las lanes que estan siendo empujadas. Si el top esta siendo diveado, tenes que responder.</li>
  <li><strong>NO te quedes en una lane farmeando CS de la wave.</strong> Eso es para los laners. Vos deberias estar farmeando jungla y rotando.</li>
</ul>
<p><strong>Como support en mid game:</strong></p>
<ul>
  <li><strong>Quedate con tu ADC</strong> si es tu win condition (si esta fed/farmeado)</li>
  <li><strong>Roamea con el jungler</strong> si tu ADC esta seguro y el jungler necesita ayuda en objetivos</li>
  <li><strong>Wardea AGRESIVAMENTE:</strong> Tu trinket deberia estar en rojo (Oracle Lens). Nega la vision enemiga y pone wards profundas en la jungla enemiga.</li>
  <li>Sé la persona que <strong>inicia la rotacion</strong>. Ping dragon 30 seg antes, pone wards, y agrupa al equipo.</li>
</ul>`,
          en: `<p>The mid game starts when <strong>plating falls at 14:00</strong>. Lanes open up, players start rotating, and the focus shifts to <strong>objectives and teamfights</strong>.</p>
<p><strong>What changes:</strong></p>
<ul>
  <li>No more plates, so taking towers is less lucrative but still important</li>
  <li>Bot laners (ADC + Support) usually rotate to mid after taking bot tower</li>
  <li>Junglers have to choose between farming and being present for objectives</li>
  <li>Fights around Dragon and Baron start defining the game</li>
</ul>
<p><strong>As jungler in mid game:</strong></p>
<ul>
  <li><strong>Priority 1:</strong> Be near objectives 1 minute before they spawn</li>
  <li><strong>Priority 2:</strong> Farm jungle when no objectives are up. Camps are worth more over time.</li>
  <li><strong>Priority 3:</strong> Help lanes that are being pushed. If top is being dove, you need to respond.</li>
  <li><strong>DON'T stay in a lane farming CS from the wave.</strong> That's for laners. You should be farming jungle and rotating.</li>
</ul>
<p><strong>As support in mid game:</strong></p>
<ul>
  <li><strong>Stay with your ADC</strong> if they're your win condition (if they're fed/farmed)</li>
  <li><strong>Roam with the jungler</strong> if your ADC is safe and the jungler needs help at objectives</li>
  <li><strong>Ward AGGRESSIVELY:</strong> Your trinket should be on red (Oracle Lens). Deny enemy vision and place deep wards in enemy jungle.</li>
  <li>Be the person who <strong>initiates the rotation</strong>. Ping dragon 30 sec before, place wards, and group the team.</li>
</ul>`,
        },
      },
      {
        title: { es: 'Late game (25:00+)', en: 'Late game (25:00+)' },
        content: {
          es: `<p>El late game es donde <strong>un error puede costar la partida</strong>. Los death timers son de 40-60 segundos, y el respawn del enemigo puede no llegar a tiempo para defender.</p>
<p><strong>Que cambia en el late game:</strong></p>
<ul>
  <li><strong>Death timers:</strong> Morir a las 30+ minutos = 45-60 seg muerto. Eso es tiempo suficiente para que el enemigo tome Baron, inhib, y posiblemente el nexo.</li>
  <li><strong>Full build:</strong> Los carries tienen 5-6 items. El dano es ENORME. Un ADC full build puede matar a un tanque en 4-5 segundos.</li>
  <li><strong>Una pelea decide todo:</strong> Si ganas una teamfight 5v5 a las 35 minutos con Baron, probablemente ganaste la partida.</li>
</ul>
<p><strong>Como jugar el late game:</strong></p>
<ul>
  <li><strong>NUNCA vayas solo.</strong> Ir solo a wardear, pushear una side lane, o explorar la jungla puede significar la muerte y la derrota.</li>
  <li><strong>Agrupense como equipo.</strong> Mover juntos, pushear juntos, pelear juntos.</li>
  <li><strong>Vision es TODO.</strong> El equipo con mejor vision gana. Si tenes vision de Baron y el enemigo no, vos decidis cuando pelear.</li>
  <li><strong>Jugar para picks:</strong> Si podes agarrar a un enemigo solo fuera de posicion, es un 5v4 instantaneo. Una sola pick puede ganar el juego.</li>
</ul>
<p><strong>Para jungler en late game:</strong></p>
<ul>
  <li>Tu Smite es la herramienta mas valiosa del juego. Si el enemigo tiene jungler vivo, NO empieces Baron.</li>
  <li>Si la pelea estalla, enfocate en peeling a tu carry o en ejecutar al carry enemigo (depende de tu campeon).</li>
  <li>Comprá Elixir de Iron o Sorcery con tu oro sobrante.</li>
</ul>
<p><strong>Para support en late game:</strong></p>
<ul>
  <li>Tu trabajo es mantener vivo al carry. Si sos tank, parate delante y absorbe dano. Si sos enchanter, quédate atras y curá/escuda.</li>
  <li>Tener una control ward en todo momento. La vision en late game vale mas que cualquier item.</li>
  <li>Si tenes Mikael's, QSS activo, o Zhonya's, usalo en el momento correcto. Un Mikael's que salva al ADC de un stun puede ganar la pelea.</li>
</ul>`,
          en: `<p>The late game is where <strong>one mistake can cost the game</strong>. Death timers are 40-60 seconds, and the enemy respawn might not come in time to defend.</p>
<p><strong>What changes in late game:</strong></p>
<ul>
  <li><strong>Death timers:</strong> Dying at 30+ minutes = 45-60 sec dead. That's enough time for the enemy to take Baron, inhib, and possibly the nexus.</li>
  <li><strong>Full build:</strong> Carries have 5-6 items. Damage is ENORMOUS. A full build ADC can kill a tank in 4-5 seconds.</li>
  <li><strong>One fight decides everything:</strong> If you win a 5v5 teamfight at 35 minutes with Baron, you've probably won the game.</li>
</ul>
<p><strong>How to play late game:</strong></p>
<ul>
  <li><strong>NEVER go alone.</strong> Going alone to ward, push a side lane, or scout the jungle can mean death and defeat.</li>
  <li><strong>Group as a team.</strong> Move together, push together, fight together.</li>
  <li><strong>Vision is EVERYTHING.</strong> The team with better vision wins. If you have vision of Baron and the enemy doesn't, you decide when to fight.</li>
  <li><strong>Play for picks:</strong> If you can catch an enemy alone out of position, it's an instant 5v4. A single pick can win the game.</li>
</ul>
<p><strong>For jungler in late game:</strong></p>
<ul>
  <li>Your Smite is the most valuable tool in the game. If the enemy jungler is alive, DON'T start Baron.</li>
  <li>If the fight breaks out, focus on peeling for your carry or executing the enemy carry (depends on your champion).</li>
  <li>Buy Elixir of Iron or Sorcery with your extra gold.</li>
</ul>
<p><strong>For support in late game:</strong></p>
<ul>
  <li>Your job is keeping the carry alive. If you're a tank, stand in front and absorb damage. If you're an enchanter, stay behind and heal/shield.</li>
  <li>Have a control ward at all times. Vision in late game is worth more than any item.</li>
  <li>If you have Mikael's, QSS active, or Zhonya's, use it at the right moment. A Mikael's that saves the ADC from a stun can win the fight.</li>
</ul>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 9. GOLD Y ECONOMIA (GOLD & ECONOMY)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gold-economy',
    title: { es: 'Gold y Economia', en: 'Gold & Economy' },
    icon: '\uD83D\uDCB0',
    topics: [
      {
        title: { es: 'Fuentes de oro pasivas y activas', en: 'Passive and active gold sources' },
        content: {
          es: `<p>Entender de donde viene el oro te ayuda a entender por que ciertas decisiones importan tanto.</p>
<p><strong>Oro pasivo:</strong></p>
<ul>
  <li><strong>2g por segundo</strong> empezando a las <strong>1:50</strong></li>
  <li>Esto es ~120g por minuto pasivamente. Sin hacer NADA.</li>
  <li>En 10 minutos de juego = ~1200g solo de oro pasivo</li>
</ul>
<p><strong>Oro de CS (minions):</strong></p>
<ul>
  <li>Una oleada sin cannon: ~105g (3 melee a 21g + 3 caster a 14g)</li>
  <li>Una oleada con cannon: ~165g</li>
  <li>Por minuto: ~2 oleadas = ~210-270g/min de CS</li>
  <li>CS perfecto a 10 min: ~107 CS = ~1800g solo de CS</li>
  <li>En realidad, nadie tiene CS perfecto. 80 CS a las 10 min es bueno en Silver/Gold. 90+ CS es bueno en Plat+.</li>
</ul>
<p><strong>Oro de kills:</strong></p>
<ul>
  <li><strong>Kill normal:</strong> 300g</li>
  <li><strong>First Blood (primera kill del juego):</strong> 400g</li>
  <li><strong>Assist:</strong> 150g</li>
  <li><strong>Killing Spree (racha):</strong> El valor de la kill AUMENTA: 300 → 450 → 600 → 700 → 800 → 900 → 1000g (maximo)</li>
  <li><strong>Feeder (muchas muertes seguidas):</strong> El valor de la kill BAJA: 300 → 274 → 220 → 176 → 140 → 112g (minimo)</li>
</ul>
<p><strong>Dato clave: 10 CS = 1 kill (~300g)</strong></p>
<p>Si perdes 10 minions es como si le hubieras dado una kill gratis al enemigo. Si farmeas 10 CS mas que tu rival, ya tenes ventaja de una kill en oro. Por eso el CS importa TANTO.</p>`,
          en: `<p>Understanding where gold comes from helps you understand why certain decisions matter so much.</p>
<p><strong>Passive gold:</strong></p>
<ul>
  <li><strong>2g per second</strong> starting at <strong>1:50</strong></li>
  <li>That's ~120g per minute passively. Without doing ANYTHING.</li>
  <li>In 10 minutes of game = ~1200g just from passive gold</li>
</ul>
<p><strong>CS (minion) gold:</strong></p>
<ul>
  <li>A wave without cannon: ~105g (3 melee at 21g + 3 caster at 14g)</li>
  <li>A wave with cannon: ~165g</li>
  <li>Per minute: ~2 waves = ~210-270g/min from CS</li>
  <li>Perfect CS at 10 min: ~107 CS = ~1800g just from CS</li>
  <li>In reality, nobody has perfect CS. 80 CS at 10 min is good in Silver/Gold. 90+ CS is good in Plat+.</li>
</ul>
<p><strong>Kill gold:</strong></p>
<ul>
  <li><strong>Normal kill:</strong> 300g</li>
  <li><strong>First Blood (first kill of the game):</strong> 400g</li>
  <li><strong>Assist:</strong> 150g</li>
  <li><strong>Killing Spree:</strong> Kill value INCREASES: 300 → 450 → 600 → 700 → 800 → 900 → 1000g (maximum)</li>
  <li><strong>Feeder (many consecutive deaths):</strong> Kill value DECREASES: 300 → 274 → 220 → 176 → 140 → 112g (minimum)</li>
</ul>
<p><strong>Key fact: 10 CS = 1 kill (~300g)</strong></p>
<p>If you lose 10 minions, it's like giving the enemy a free kill. If you farm 10 CS more than your opponent, you already have a kill's worth of gold advantage. That's why CS matters SO MUCH.</p>`,
        },
      },
      {
        title: { es: 'Shutdowns y bounties de objetivos', en: 'Shutdowns and objective bounties' },
        content: {
          es: `<p><strong>Shutdown Bounties (recompensas por rachas):</strong></p>
<p>Un jugador que tiene una <strong>racha de kills</strong> acumula un <strong>shutdown bounty</strong>. Matar a un jugador con bounty te da ORO EXTRA encima de los 300g normales.</p>
<table>
  <tr><th>Racha de kills</th><th>Bounty extra</th><th>Total que obtenes</th></tr>
  <tr><td>2 kills (2-0-X)</td><td>+150g</td><td>450g</td></tr>
  <tr><td>3 kills</td><td>+300g</td><td>600g</td></tr>
  <tr><td>4 kills</td><td>+400g</td><td>700g</td></tr>
  <tr><td>5 kills</td><td>+500g</td><td>800g</td></tr>
  <tr><td>6 kills</td><td>+600g</td><td>900g</td></tr>
  <tr><td>7+ kills</td><td>+700g</td><td>1000g (max)</td></tr>
</table>
<p><strong>Nota:</strong> Las bounties tambien se acumulan por <strong>CS alto relativo al promedio del juego</strong>. Un jugador puede tener bounty sin haber matado a nadie, simplemente por farmear mucho.</p>
<p><strong>Objective Bounties (recompensas de objetivos):</strong></p>
<p>Cuando un equipo esta perdiendo, se activan <strong>bounties en los objetivos</strong> para ayudar al equipo que va perdiendo a recuperarse:</p>
<ul>
  <li>Torres dan <strong>250g extra</strong></li>
  <li>Dragon/Rift Herald da <strong>500g extra</strong></li>
  <li>Baron da <strong>500g extra</strong></li>
</ul>
<p>Estas bounties se <strong>activan automaticamente</strong> cuando la diferencia de oro entre equipos es grande. Se desactivan cuando la diferencia se cierra.</p>
<p><strong>Implicacion estrategica:</strong> Si tu equipo esta ganando por mucho, anda con cuidado. Dar un shutdown bounty de 1000g al enemigo puede revertir toda tu ventaja. Jugar "seguro" cuando liderás es TAN importante como hacer jugadas cuando perdes.</p>`,
          en: `<p><strong>Shutdown Bounties:</strong></p>
<p>A player on a <strong>killing spree</strong> accumulates a <strong>shutdown bounty</strong>. Killing a player with a bounty gives you EXTRA GOLD on top of the normal 300g.</p>
<table>
  <tr><th>Kill streak</th><th>Extra bounty</th><th>Total you get</th></tr>
  <tr><td>2 kills (2-0-X)</td><td>+150g</td><td>450g</td></tr>
  <tr><td>3 kills</td><td>+300g</td><td>600g</td></tr>
  <tr><td>4 kills</td><td>+400g</td><td>700g</td></tr>
  <tr><td>5 kills</td><td>+500g</td><td>800g</td></tr>
  <tr><td>6 kills</td><td>+600g</td><td>900g</td></tr>
  <tr><td>7+ kills</td><td>+700g</td><td>1000g (max)</td></tr>
</table>
<p><strong>Note:</strong> Bounties also accumulate from <strong>high CS relative to the game average</strong>. A player can have a bounty without having killed anyone, simply from farming a lot.</p>
<p><strong>Objective Bounties:</strong></p>
<p>When a team is losing, <strong>bounties on objectives</strong> are activated to help the losing team recover:</p>
<ul>
  <li>Towers give <strong>250g extra</strong></li>
  <li>Dragon/Rift Herald gives <strong>500g extra</strong></li>
  <li>Baron gives <strong>500g extra</strong></li>
</ul>
<p>These bounties <strong>activate automatically</strong> when the gold difference between teams is large. They deactivate when the gap closes.</p>
<p><strong>Strategic implication:</strong> If your team is winning by a lot, be careful. Giving a 1000g shutdown bounty to the enemy can reverse your entire lead. Playing "safe" when ahead is AS important as making plays when behind.</p>`,
        },
      },
      {
        title: { es: 'Eficiencia de oro (Gold efficiency)', en: 'Gold efficiency' },
        content: {
          es: `<p>La <strong>eficiencia de oro</strong> es una forma de evaluar si un item vale lo que cuesta. Se compara el valor de las stats del item contra los items basicos mas baratos.</p>
<p><strong>Valores de referencia (cuanto cuesta cada stat):</strong></p>
<table>
  <tr><th>Stat</th><th>Oro por unidad</th><th>Item de referencia</th></tr>
  <tr><td>1 AD</td><td>35g</td><td>Long Sword (10 AD = 350g)</td></tr>
  <tr><td>1 AP</td><td>21.75g</td><td>Amplifying Tome (20 AP = 435g)</td></tr>
  <tr><td>1% AS</td><td>25g</td><td>Dagger (12% AS = 300g)</td></tr>
  <tr><td>1% Crit</td><td>40g</td><td>Cloak of Agility (15% = 600g)</td></tr>
  <tr><td>1 HP</td><td>2.67g</td><td>Ruby Crystal (150 HP = 400g)</td></tr>
  <tr><td>1 Armor</td><td>20g</td><td>Cloth Armor (15 Armor = 300g)</td></tr>
  <tr><td>1 MR</td><td>18g</td><td>Null-Magic Mantle (25 MR = 450g)</td></tr>
  <tr><td>1 AH</td><td>26.67g</td><td>Estimado</td></tr>
</table>
<p><strong>Que significa "gold efficient":</strong></p>
<ul>
  <li>Un item es <strong>100% gold efficient</strong> si el valor de sus stats en oro es igual a su costo</li>
  <li>Un item es <strong>>100% gold efficient</strong> si el valor de sus stats supera su costo (buen deal)</li>
  <li>La mayoria de los items completos son >100% eficientes porque ademas dan un <strong>pasivo o activo</strong> que no se cuenta en el calculo</li>
</ul>
<p><strong>Ejemplo:</strong> Infinity Edge cuesta 3400g y da 70 AD + 25% Crit. El valor en oro de las stats:</p>
<ul>
  <li>70 AD x 35g = 2450g</li>
  <li>25% Crit x 40g = 1000g</li>
  <li>Total stats = 3450g → Eficiencia: 3450/3400 = <strong>101.5%</strong> (sin contar la pasiva de crit mejorado)</li>
</ul>
<p><strong>Por que importa:</strong> Cuando decidis que comprar, pensa en cuanto te dan las stats por el oro invertido. Los items de componentes (Long Sword, Cloth Armor) son 100% eficientes. Por eso a veces es mejor comprar un componente chico que sentarte en 1000g sin gastar.</p>`,
          en: `<p><strong>Gold efficiency</strong> is a way to evaluate whether an item is worth its cost. It compares the value of an item's stats against the cheapest basic items.</p>
<p><strong>Reference values (how much each stat costs):</strong></p>
<table>
  <tr><th>Stat</th><th>Gold per unit</th><th>Reference item</th></tr>
  <tr><td>1 AD</td><td>35g</td><td>Long Sword (10 AD = 350g)</td></tr>
  <tr><td>1 AP</td><td>21.75g</td><td>Amplifying Tome (20 AP = 435g)</td></tr>
  <tr><td>1% AS</td><td>25g</td><td>Dagger (12% AS = 300g)</td></tr>
  <tr><td>1% Crit</td><td>40g</td><td>Cloak of Agility (15% = 600g)</td></tr>
  <tr><td>1 HP</td><td>2.67g</td><td>Ruby Crystal (150 HP = 400g)</td></tr>
  <tr><td>1 Armor</td><td>20g</td><td>Cloth Armor (15 Armor = 300g)</td></tr>
  <tr><td>1 MR</td><td>18g</td><td>Null-Magic Mantle (25 MR = 450g)</td></tr>
  <tr><td>1 AH</td><td>26.67g</td><td>Estimated</td></tr>
</table>
<p><strong>What "gold efficient" means:</strong></p>
<ul>
  <li>An item is <strong>100% gold efficient</strong> if the gold value of its stats equals its cost</li>
  <li>An item is <strong>>100% gold efficient</strong> if the stat value exceeds its cost (good deal)</li>
  <li>Most completed items are >100% efficient because they also give a <strong>passive or active</strong> that isn't counted in the calculation</li>
</ul>
<p><strong>Example:</strong> Infinity Edge costs 3400g and gives 70 AD + 25% Crit. The gold value of stats:</p>
<ul>
  <li>70 AD x 35g = 2450g</li>
  <li>25% Crit x 40g = 1000g</li>
  <li>Total stats = 3450g → Efficiency: 3450/3400 = <strong>101.5%</strong> (not counting the improved crit passive)</li>
</ul>
<p><strong>Why it matters:</strong> When deciding what to buy, think about how much you get for the gold invested. Component items (Long Sword, Cloth Armor) are 100% efficient. That's why sometimes it's better to buy a small component than sit on 1000g unspent.</p>`,
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 10. TEAMFIGHTS (PELEAS DE EQUIPO)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'teamfights',
    title: { es: 'Teamfights (Peleas de Equipo)', en: 'Teamfights' },
    icon: '\uD83D\uDDE1\uFE0F',
    topics: [
      {
        title: { es: 'Posicionamiento por rol', en: 'Positioning by role' },
        content: {
          es: `<p>El posicionamiento en teamfights es <strong>la diferencia mas grande entre elos bajos y altos</strong>. Cada rol tiene un lugar especifico:</p>
<p><strong>Frontline (Tanques/Bruisers): Sett, Malphite, Nautilus, Leona</strong></p>
<ul>
  <li>Parate <strong>al frente del equipo</strong>, entre el enemigo y tus carries</li>
  <li>Tu trabajo: <strong>absorber dano, CC a los carries enemigos, crear espacio</strong></li>
  <li>Buscar engages: Flash + R de Malphite, Hook de Nautilus, R de Sett</li>
  <li>Si no hay un buen engage, <strong>pelea al lado de tu carry y protegelo</strong> (peel)</li>
</ul>
<p><strong>Backline (ADC/Mago): Jinx, Kaisa, Viktor, Syndra</strong></p>
<ul>
  <li>Parate <strong>DETRAS de tus tanques</strong>. Nunca al frente.</li>
  <li>Tu trabajo: <strong>atacar al enemigo MAS CERCANO que sea seguro de atacar</strong></li>
  <li><strong>NO corras hacia el carry enemigo.</strong> Si tenes que caminar a traves del equipo enemigo para pegarle al ADC, estas MAL posicionado y te van a matar.</li>
  <li>Ataca al tanque si es lo unico que podes pegar sin arriesgarte. Un ADC full build mata tanques en 4-5 seg. No es desperdicio.</li>
</ul>
<p><strong>Asesinos: Zed, Talon, Kha'Zix, Evelynn</strong></p>
<ul>
  <li><strong>Flankea.</strong> No pelees de frente. Busca un angulo lateral o trasero.</li>
  <li>Espera a que la pelea empiece y <strong>los cooldowns clave se gasten</strong> (Zhonya's, escudos, exhausts)</li>
  <li>Entonces entra y <strong>revienta al carry enemigo</strong></li>
  <li>Si el carry enemigo tiene Zhonya's o escudo de Lulu, necesitas esperar a que lo use en otra cosa</li>
</ul>
<p><strong>Support: Nautilus, Lulu, Janna, Thresh</strong></p>
<ul>
  <li>Tu posicion depende de tu tipo de support:</li>
  <li><strong>Tank support (Nautilus, Leona):</strong> Podes estar al frente buscando engage O al lado de tu ADC haciendo peel. Depende de si tu equipo necesita engage o proteccion.</li>
  <li><strong>Enchanter support (Lulu, Janna, Nami):</strong> <strong>SIEMPRE al lado de tu carry.</strong> Tu trabajo es mantenerlo vivo con escudos, curaciones, y CC defensivo.</li>
</ul>`,
          en: `<p>Teamfight positioning is <strong>the biggest difference between low and high elo</strong>. Each role has a specific place:</p>
<p><strong>Frontline (Tanks/Bruisers): Sett, Malphite, Nautilus, Leona</strong></p>
<ul>
  <li>Stand <strong>in front of your team</strong>, between the enemy and your carries</li>
  <li>Your job: <strong>absorb damage, CC enemy carries, create space</strong></li>
  <li>Look for engages: Flash + R on Malphite, Nautilus Hook, Sett R</li>
  <li>If there's no good engage, <strong>fight next to your carry and protect them</strong> (peel)</li>
</ul>
<p><strong>Backline (ADC/Mage): Jinx, Kai'Sa, Viktor, Syndra</strong></p>
<ul>
  <li>Stand <strong>BEHIND your tanks</strong>. Never in front.</li>
  <li>Your job: <strong>attack the CLOSEST enemy that is safe to attack</strong></li>
  <li><strong>DO NOT run toward the enemy carry.</strong> If you have to walk through the enemy team to hit the ADC, you're badly positioned and you'll die.</li>
  <li>Attack the tank if it's the only safe target. A full build ADC kills tanks in 4-5 sec. It's not wasted.</li>
</ul>
<p><strong>Assassins: Zed, Talon, Kha'Zix, Evelynn</strong></p>
<ul>
  <li><strong>Flank.</strong> Don't fight head-on. Find a side or rear angle.</li>
  <li>Wait for the fight to start and for <strong>key cooldowns to be used</strong> (Zhonya's, shields, exhausts)</li>
  <li>Then go in and <strong>blow up the enemy carry</strong></li>
  <li>If the enemy carry has Zhonya's or Lulu shield, you need to wait for them to use it on something else</li>
</ul>
<p><strong>Support: Nautilus, Lulu, Janna, Thresh</strong></p>
<ul>
  <li>Your position depends on your support type:</li>
  <li><strong>Tank support (Nautilus, Leona):</strong> You can be in front looking for engage OR next to your ADC peeling. Depends on whether your team needs engage or protection.</li>
  <li><strong>Enchanter support (Lulu, Janna, Nami):</strong> <strong>ALWAYS next to your carry.</strong> Your job is keeping them alive with shields, heals, and defensive CC.</li>
</ul>`,
        },
      },
      {
        title: { es: 'A quien atacar (focus priority)', en: 'Who to attack (focus priority)' },
        content: {
          es: `<p>Uno de los <strong>mitos mas daninos</strong> del juego es "focus al ADC" o "focus al carry". La realidad es mucho mas matizada:</p>
<p><strong>Regla general: Atacá al enemigo mas cercano que sea seguro de atacar.</strong></p>
<p>Esto significa:</p>
<ul>
  <li>Si un Darius esta corriendo hacia vos, atacá al Darius. No intentes correr alrededor de el para pegarle al Jinx que esta a 2000 unidades de distancia.</li>
  <li>Si el tanque esta solo al frente y los carries estan atras, pega al tanque. No te suicides para llegar al carry.</li>
  <li>Si un asesino salta a tu backline, matalo primero. Es la amenaza inmediata.</li>
</ul>
<p><strong>Excepciones (cuando SI enfocas al carry):</strong></p>
<ul>
  <li>Si sos un <strong>asesino</strong> (Zed, Talon, Kha'Zix): tu trabajo literal es matar al carry. Pero flanquea, no vayas de frente.</li>
  <li>Si el carry enemigo <strong>esta fuera de posicion</strong> (adelante de su equipo sin proteccion): matalo rapido y la pelea es 5v4.</li>
  <li>Si tenes una habilidad de <strong>acceso directo</strong> al carry (Vi R, Malphite R, Camille R): podes ir directo porque tu kit lo permite.</li>
</ul>
<p><strong>Prioridad de amenaza real:</strong></p>
<ol>
  <li><strong>Quien te esta pegando a vos AHORA.</strong> Si alguien te ataca, esa es tu prioridad.</li>
  <li><strong>Quien puede matar a tu carry.</strong> Si un Rengar salta a tu ADC, ignorar todo y pelear al Rengar.</li>
  <li><strong>Quien esta haciendo mas dano.</strong> Si el enemigo tiene un Jinx 10/0, es prioridad si podes llegar a ella seguramente.</li>
  <li><strong>Quien esta mas facil de matar.</strong> Si un mago enemigo esta a 50% HP sin Zhonya's, es un target facil.</li>
</ol>
<p><strong>El error mas comun:</strong> El ADC que corre a traves de 3 enemigos para pegarle al ADC enemigo. Muere instantaneamente. La solucion: <strong>ataca al que tengas adelante</strong>, y si tus tanques crean espacio, avanzá gradualmente.</p>`,
          en: `<p>One of the <strong>most harmful myths</strong> in the game is "focus the ADC" or "focus the carry." The reality is much more nuanced:</p>
<p><strong>General rule: Attack the closest enemy that is safe to attack.</strong></p>
<p>This means:</p>
<ul>
  <li>If a Darius is running at you, attack the Darius. Don't try to run around him to hit the Jinx who's 2000 units away.</li>
  <li>If the tank is alone in front and carries are in back, hit the tank. Don't suicide to reach the carry.</li>
  <li>If an assassin jumps your backline, kill them first. They're the immediate threat.</li>
</ul>
<p><strong>Exceptions (when you SHOULD focus the carry):</strong></p>
<ul>
  <li>If you're an <strong>assassin</strong> (Zed, Talon, Kha'Zix): your literal job is to kill the carry. But flank, don't go head-on.</li>
  <li>If the enemy carry is <strong>out of position</strong> (in front of their team without protection): kill them quick and the fight is 5v4.</li>
  <li>If you have a <strong>direct access ability</strong> to the carry (Vi R, Malphite R, Camille R): you can go directly because your kit allows it.</li>
</ul>
<p><strong>Real threat priority:</strong></p>
<ol>
  <li><strong>Whoever is hitting YOU right now.</strong> If someone is attacking you, that's your priority.</li>
  <li><strong>Whoever can kill your carry.</strong> If a Rengar jumps your ADC, drop everything and fight the Rengar.</li>
  <li><strong>Whoever is dealing the most damage.</strong> If the enemy has a 10/0 Jinx, she's priority if you can reach her safely.</li>
  <li><strong>Whoever is easiest to kill.</strong> If an enemy mage is at 50% HP without Zhonya's, they're an easy target.</li>
</ol>
<p><strong>The most common mistake:</strong> The ADC who runs through 3 enemies to hit the enemy ADC. Dies instantly. The solution: <strong>attack whoever is in front of you</strong>, and if your tanks create space, advance gradually.</p>`,
        },
      },
      {
        title: { es: 'Cuando pelear vs cuando retirarse', en: 'When to fight vs when to disengage' },
        content: {
          es: `<p>Saber <strong>cuando pelear y cuando NO pelear</strong> es la habilidad macro mas importante del juego.</p>
<p><strong>PELEA cuando:</strong></p>
<ul>
  <li><strong>Ventaja numerica:</strong> 5v4 o 4v3. Si mataste a un enemigo o esta recalleando, forzar pelea.</li>
  <li><strong>Ventaja de items:</strong> Si tu equipo tiene items completados y el enemigo tiene componentes, peleas.</li>
  <li><strong>Cooldowns a favor:</strong> Si el Malphite enemigo no tiene R (180 seg CD), su engage es mucho mas debil. Forzá.</li>
  <li><strong>Posicion favorable:</strong> Si tenes vision del arbusto, estás en tu jungla, o el enemigo esta separado.</li>
  <li><strong>Power spike:</strong> Si tu equipo tiene un power spike claro (2 items de ADC, nivel 6 del midlaner).</li>
  <li><strong>Objetivo en juego:</strong> Si peleas por Baron/Dragon y tenes vision + ventaja de smite.</li>
</ul>
<p><strong>NO PELEES cuando:</strong></p>
<ul>
  <li><strong>Desventaja numerica:</strong> Si son 4v5, no peleés. Retrocede, espera que tu companero respawnee/vuelva.</li>
  <li><strong>Sin vision:</strong> Si no sabes donde estan todos los enemigos, pueden estar en un bush esperando emboscarte.</li>
  <li><strong>Tu ADC/carry no esta:</strong> Si tu fuente principal de dano esta en base comprando, no fuerces peleas.</li>
  <li><strong>Ults importantes en CD:</strong> Si tu Amumu no tiene R, tu engage es debil. Espera.</li>
  <li><strong>Bajo HP/mana:</strong> Si medio equipo esta a 50% HP, retrocede, cura, y volve con full HP.</li>
  <li><strong>Enemigo tiene Baron/Elder:</strong> Si el enemigo tiene Baron buff o Elder, evita peleas. Defiende bajo torre y espera que el buff se termine.</li>
</ul>
<p><strong>Saber desengagear es TAN importante como saber engagear.</strong> Si empezaste una pelea y va mal (perdieron al primer campeon en 2 seg), retirense. No se queden peleando 4v5 "por honor". Retrocedan, agrupen, y busquen la proxima pelea en mejor posicion.</p>`,
          en: `<p>Knowing <strong>when to fight and when NOT to fight</strong> is the most important macro skill in the game.</p>
<p><strong>FIGHT when:</strong></p>
<ul>
  <li><strong>Numbers advantage:</strong> 5v4 or 4v3. If you killed an enemy or they're recalling, force a fight.</li>
  <li><strong>Item advantage:</strong> If your team has completed items and the enemy has components, fight.</li>
  <li><strong>Cooldowns in your favor:</strong> If the enemy Malphite doesn't have R (180 sec CD), their engage is much weaker. Force it.</li>
  <li><strong>Favorable position:</strong> If you have bush vision, you're in your jungle, or the enemy is separated.</li>
  <li><strong>Power spike:</strong> If your team has a clear power spike (ADC 2 items, midlaner level 6).</li>
  <li><strong>Objective at stake:</strong> If fighting for Baron/Dragon with vision + smite advantage.</li>
</ul>
<p><strong>DON'T FIGHT when:</strong></p>
<ul>
  <li><strong>Numbers disadvantage:</strong> If it's 4v5, don't fight. Fall back, wait for your teammate to respawn/return.</li>
  <li><strong>No vision:</strong> If you don't know where all enemies are, they could be in a bush waiting to ambush you.</li>
  <li><strong>Your ADC/carry isn't there:</strong> If your main damage source is in base shopping, don't force fights.</li>
  <li><strong>Important ults on CD:</strong> If your Amumu doesn't have R, your engage is weak. Wait.</li>
  <li><strong>Low HP/mana:</strong> If half the team is at 50% HP, fall back, heal, and come back at full HP.</li>
  <li><strong>Enemy has Baron/Elder:</strong> If the enemy has Baron buff or Elder, avoid fights. Defend under tower and wait for the buff to expire.</li>
</ul>
<p><strong>Knowing when to disengage is AS important as knowing when to engage.</strong> If you started a fight and it's going badly (lost the first champion in 2 sec), retreat. Don't stay fighting 4v5 "for honor." Fall back, regroup, and look for the next fight in a better position.</p>`,
        },
      },
      {
        title: { es: 'Win conditions — Quien tiene que ganar para que ganen ustedes', en: 'Win conditions — Who needs to succeed for your team to win' },
        content: {
          es: `<p>La <strong>win condition</strong> es el camino mas probable por el cual tu equipo puede ganar la partida. Identificarla te dice <strong>alrededor de quien jugar</strong>.</p>
<p><strong>Como identificar la win condition:</strong></p>
<ol>
  <li>Mirá las composiciones. Si tu equipo tiene un Jinx (hypercarry late game) y un Lulu (enchanter), la win condition es <strong>proteger a Jinx y llegar al late game</strong>.</li>
  <li>Mirá quien esta fed. Si tu top Darius esta 4/0, la win condition puede ser <strong>jugar alrededor de Darius y dejarlo 1v5 en teamfights</strong>.</li>
  <li>Mirá los power spikes. Si tu equipo tiene un Renekton (fuerte early) y un Lee Sin (fuerte early), la win condition es <strong>ganar early y cerrar rapido antes de que el enemigo escale</strong>.</li>
</ol>
<p><strong>Ejemplos de win conditions:</strong></p>
<ul>
  <li><strong>"Protect the carry":</strong> Tu Kog'Maw/Jinx/Vayne es la unica fuente de dano. Todo el equipo juega alrededor de protegerlo. El jungler y support hacen peel, no engage.</li>
  <li><strong>"Splitpush":</strong> Tu top laner (Fiora, Jax, Tryndamere) gana 1v1 contra cualquiera. El plan es: el splitpusher empuja una side lane, el equipo presiona otro lado, el enemigo no puede cubrir ambos.</li>
  <li><strong>"Engage y burst":</strong> Tu equipo tiene Malphite + Orianna + Miss Fortune. La win condition es un engage de Malphite, Orianna pone la bola en el, y R combo. Si pegás R en 3+ enemigos, ganas la pelea.</li>
  <li><strong>"Poke y siege":</strong> Tu equipo tiene Jayce, Lux, Ezreal. No peleés 5v5 de frente. Pokeen de lejos, bajen HP al enemigo, y despues enganchen cuando esten bajos.</li>
</ul>
<p><strong>Como jungler/support: tu trabajo es FACILITAR la win condition, no ser la win condition.</strong></p>
<p>Si tu Jinx es la win condition: campea bot lane, dale kills, protegela en teamfights. No importa si vos terminas 0/2/15. Si Jinx termina 10/1, ganaste.</p>
<p>Si tu Fiora es la win condition: dale vision en side lanes, protegela de ganks, y pelea 4v4 en otro lado del mapa mientras ella splitpushea.</p>
<p><strong>El error mas grande en elos bajos</strong> es que todos quieren ser el carry. Si tu Jinx esta 8/0 y vos sos Nautilus, tu trabajo es pelar con la vida por esa Jinx. No intentes robar kills o hacer jugadas individualmente.</p>`,
          en: `<p>The <strong>win condition</strong> is the most likely path through which your team can win the game. Identifying it tells you <strong>who to play around</strong>.</p>
<p><strong>How to identify the win condition:</strong></p>
<ol>
  <li>Look at compositions. If your team has a Jinx (late game hypercarry) and a Lulu (enchanter), the win condition is <strong>protect Jinx and reach late game</strong>.</li>
  <li>Look at who's fed. If your top Darius is 4/0, the win condition might be <strong>play around Darius and let him 1v5 in teamfights</strong>.</li>
  <li>Look at power spikes. If your team has Renekton (strong early) and Lee Sin (strong early), the win condition is <strong>win early and close fast before the enemy scales</strong>.</li>
</ol>
<p><strong>Examples of win conditions:</strong></p>
<ul>
  <li><strong>"Protect the carry":</strong> Your Kog'Maw/Jinx/Vayne is the only damage source. The whole team plays around protecting them. Jungler and support peel, don't engage.</li>
  <li><strong>"Splitpush":</strong> Your top laner (Fiora, Jax, Tryndamere) wins 1v1 against anyone. The plan: the splitpusher pushes a side lane, the team pressures another side, the enemy can't cover both.</li>
  <li><strong>"Engage and burst":</strong> Your team has Malphite + Orianna + Miss Fortune. The win condition is a Malphite engage, Orianna puts the ball on him, and R combo. If you hit R on 3+ enemies, you win the fight.</li>
  <li><strong>"Poke and siege":</strong> Your team has Jayce, Lux, Ezreal. Don't fight 5v5 head-on. Poke from range, lower the enemy's HP, then engage when they're low.</li>
</ul>
<p><strong>As jungler/support: your job is to FACILITATE the win condition, not BE the win condition.</strong></p>
<p>If your Jinx is the win condition: camp bot lane, give her kills, protect her in teamfights. It doesn't matter if you end up 0/2/15. If Jinx ends up 10/1, you won.</p>
<p>If your Fiora is the win condition: give her vision in side lanes, protect her from ganks, and fight 4v4 on the other side of the map while she splitpushes.</p>
<p><strong>The biggest mistake in low elo</strong> is that everyone wants to be the carry. If your Jinx is 8/0 and you're Nautilus, your job is to peel for that Jinx with your life. Don't try to steal kills or make individual plays.</p>`,
        },
      },
    ],
  },
]
