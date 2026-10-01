'use strict';

/* ---------- Apufunktiot ---------- */

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randNZ = (min, max) => {
  let n;
  do { n = rand(min, max); } while (n === 0);
  return n;
};
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

/* ---------- Matematiikan muotoilu (HTML) ---------- */

const num = n => (n < 0 ? '−' + Math.abs(n) : String(n));
const par = n => (n < 0 ? `(${num(n)})` : num(n));
const V = name => `<var>${name}</var>`;
const pow = (base, e) => `${base}<sup>${e}</sup>`;
const sqrt = s => `√<span class="radicand">${s}</span>`;
const cbrt = s => `∛<span class="radicand">${s}</span>`;

const X = V('x');
const Y = V('y');
const X2 = pow(X, 2);
const X3 = pow(X, 3);

// Lauseke termeistä [kerroin, muuttuja-HTML]; tyhjä muuttuja = vakio.
function lin(terms) {
  let s = '';
  for (const [c, v] of terms) {
    if (c === 0) continue;
    const abs = Math.abs(c);
    const body = v ? (abs === 1 ? v : abs + v) : String(abs);
    s += s === '' ? (c < 0 ? '−' : '') + body : (c < 0 ? ' − ' : ' + ') + body;
  }
  return s || '0';
}

// Sijoitettu lauseke termeistä [kerroin, arvo|null, potenssi?], esim. "3 · (−2) + 5".
function subst(terms) {
  let s = '';
  for (const [c, v, p] of terms) {
    if (c === 0) continue;
    const abs = Math.abs(c);
    let body;
    if (v === null || v === undefined) {
      body = String(abs);
    } else {
      const base = p ? pow(par(v), p) : par(v);
      body = abs === 1 ? base : `${abs} · ${base}`;
    }
    s += s === '' ? (c < 0 ? '−' : '') + body : (c < 0 ? ' − ' : ' + ') + body;
  }
  return s || '0';
}

const system = (eq1, eq2) =>
  `<span class="system"><span class="eq"><span>${eq1}</span><span class="eqno">(1)</span></span>` +
  `<span class="eq"><span>${eq2}</span><span class="eqno">(2)</span></span></span>`;

// Yhtälön muokkausmerkintä rivin perään, esim. "3x + 5 = 17 | −5"
const op = (line, o) => `${line}<span class="op">| ${o}</span>`;
// Operaatio, joka poistaa termin n·U ("−5", "+3", "−2x")
const opSub = (n, U = '') => `${n > 0 ? '−' : '+'}${lin([[Math.abs(n), U]])}`;
const opDiv = A => `:${par(A)}`;

// Ratkaisee yhtälön A·U + B = C, missä U on tuntematon (x, y, x² ...).
function solveLinear(A, B, C, U) {
  const steps = [];
  let rhs = C;
  if (B !== 0) {
    rhs = C - B;
    steps.push({
      text: B > 0
        ? `Vähennetään molemmilta puolilta ${B}.`
        : `Lisätään molemmille puolille ${-B}.`,
      math: [
        op(`${lin([[A, U], [B, '']])} = ${num(C)}`, opSub(B)),
        `${lin([[A, U]])} = ${num(rhs)}`,
      ],
    });
  }
  if (A !== 1) {
    steps.push({
      text: `Jaetaan molemmat puolet luvulla ${num(A)}.`,
      math: [op(`${lin([[A, U]])} = ${num(rhs)}`, opDiv(A)), `${U} = ${num(rhs / A)}`],
    });
  }
  return { steps, value: rhs / A };
}

/* ---------- Tehtävägeneraattorit ---------- */

// 1. asteen yhtälö: ax + b = c
function linBasic() {
  const x = rand(-10, 10);
  const a = randNZ(-9, 9);
  const b = randNZ(-20, 20);
  const c = a * x + b;
  const eq = `${lin([[a, X], [b, '']])} = ${num(c)}`;
  const s = solveLinear(a, b, c, X);
  return {
    label: '1. asteen yhtälö',
    prompt: 'Ratkaise yhtälö.',
    problem: eq,
    answer: { type: 'single', label: `${X} =`, value: x },
    steps: [
      ...s.steps,
      {
        text: `Tarkistus: sijoitetaan x = ${num(x)} alkuperäiseen yhtälöön.`,
        math: [`${subst([[a, x], [b, null]])} = ${num(c)} ✓`],
      },
    ],
    final: `${X} = ${num(x)}`,
  };
}

// 1. asteen yhtälö, x molemmilla puolilla: ax + b = cx + d
function linBothSides() {
  const x = rand(-10, 10);
  let a, c;
  do { a = randNZ(-9, 9); c = randNZ(-9, 9); } while (a === c);
  const b = randNZ(-15, 15);
  const d = a * x + b - c * x;
  const A = a - c;
  const eq = `${lin([[a, X], [b, '']])} = ${lin([[c, X], [d, '']])}`;
  const s = solveLinear(A, b, d, X);
  return {
    label: '1. asteen yhtälö',
    prompt: 'Ratkaise yhtälö.',
    problem: eq,
    answer: { type: 'single', label: `${X} =`, value: x },
    steps: [
      {
        text: c > 0
          ? `Kerätään x:t vasemmalle: vähennetään molemmilta puolilta ${lin([[c, X]])}.`
          : `Kerätään x:t vasemmalle: lisätään molemmille puolille ${lin([[-c, X]])}.`,
        math: [
          op(eq, opSub(c, X)),
          `${lin([[a, X], [-c, X], [b, '']])} = ${num(d)}`,
          `${lin([[A, X], [b, '']])} = ${num(d)}`,
        ],
      },
      ...s.steps,
      {
        text: `Tarkistus: sijoitetaan x = ${num(x)} molemmille puolille.`,
        math: [
          `Vasen: ${subst([[a, x], [b, null]])} = ${num(a * x + b)}`,
          `Oikea: ${subst([[c, x], [d, null]])} = ${num(c * x + d)} ✓`,
        ],
      },
    ],
    final: `${X} = ${num(x)}`,
  };
}

// Arvon sijoittaminen lausekkeeseen
function substitution() {
  let terms, vals, prompt;
  if (Math.random() < 0.5) {
    const a = randNZ(-9, 9), b = randNZ(-20, 20), x = randNZ(-9, 9);
    terms = [[a, X, x], [b, '', null]];
    vals = `${X} = ${num(x)}`;
    prompt = `Laske lausekkeen arvo, kun ${vals}.`;
  } else {
    const a = randNZ(-6, 6), b = randNZ(-6, 6), c = rand(-10, 10);
    const x = randNZ(-8, 8), y = randNZ(-8, 8);
    terms = [[a, X, x], [b, Y, y], [c, '', null]];
    vals = `${X} = ${num(x)} ja ${Y} = ${num(y)}`;
    prompt = `Laske lausekkeen arvo, kun ${vals}.`;
  }
  const expr = lin(terms.map(([c, v]) => [c, v]));
  const products = terms.map(([c, , v]) => (v === null ? c : c * v));
  const result = products.reduce((s, n) => s + n, 0);
  return {
    label: 'Arvon sijoittaminen',
    prompt,
    problem: expr,
    answer: { type: 'single', label: 'Arvo =', value: result },
    steps: [
      {
        text: `Sijoitetaan ${vals} lausekkeeseen. Negatiiviset luvut kirjoitetaan sulkeisiin.`,
        math: [subst(terms.map(([c, , v]) => [c, v]))],
      },
      { text: 'Lasketaan ensin kertolaskut.', math: [lin(products.map(p => [p, '']))] },
      { text: 'Lasketaan yhteen.', math: [`= ${num(result)}`] },
    ],
    final: num(result),
  };
}

// x²-yhtälö: x² = k
function squareEq() {
  const r = rand(1, 12);
  const k = r * r;
  const eq = `${X2} = ${k}`;
  return {
    label: 'Toisen asteen potenssi',
    prompt: 'Ratkaise yhtälö.',
    problem: eq,
    answer: { type: 'set', label: `${X} =`, values: [r, -r] },
    steps: [
      {
        text: 'Otetaan neliöjuuri molemmilta puolilta. Ratkaisuja on kaksi, koska sekä positiivisen että negatiivisen luvun neliö on positiivinen.',
        math: [op(eq, '√'), `${X} = ±${sqrt(k)}`, `${X} = ±${r}`],
      },
      {
        text: 'Tarkistus: sijoitetaan molemmat ratkaisut yhtälöön.',
        math: [`${pow(par(r), 2)} = ${r} · ${r} = ${k} ✓`, `${pow(par(-r), 2)} = ${par(-r)} · ${par(-r)} = ${k} ✓`],
      },
    ],
    final: `${X} = ${r} &nbsp;tai&nbsp; ${X} = −${r}`,
  };
}

// x³-yhtälö: x³ = k
function cubeEq() {
  const r = randNZ(-6, 6);
  const k = r * r * r;
  const eq = `${X3} = ${num(k)}`;
  return {
    label: 'Kolmannen asteen potenssi',
    prompt: 'Ratkaise yhtälö.',
    problem: eq,
    answer: { type: 'single', label: `${X} =`, value: r },
    steps: [
      {
        text: 'Otetaan kuutiojuuri molemmilta puolilta. Ratkaisuja on vain yksi, ja negatiivisen luvun kuutiojuuri on negatiivinen.',
        math: [op(eq, '∛'), `${X} = ${cbrt(num(k))}`, `${X} = ${num(r)}`],
      },
      {
        text: 'Tarkistus: sijoitetaan ratkaisu yhtälöön.',
        math: [`${pow(par(r), 3)} = ${par(r)} · ${par(r)} · ${par(r)} = ${num(k)} ✓`],
      },
    ],
    final: `${X} = ${num(r)}`,
  };
}

// Yhtälöpari, jossa toinen muuttuja on annettu: y = mx + k, x = c (tai päinvastoin)
function systemKnown() {
  const x = rand(-9, 9), y0 = rand(-9, 9);
  const m = randNZ(-5, 5);
  const xGiven = Math.random() < 0.5;
  // given = tunnettu muuttuja, other = laskettava muuttuja
  const [G, O, g, gName] = xGiven ? [X, Y, x, 'x'] : [Y, X, y0, 'y'];
  const k = rand(-10, 10);
  const o = m * g + k;
  const vals = xGiven ? { x: g, y: o } : { x: o, y: g };
  const eqO = `${O} = ${lin([[m, G], [k, '']])}`;
  const eqG = `${G} = ${num(g)}`;
  const [eq1, eq2] = xGiven ? [eqO, eqG] : [eqG, eqO];
  const [nG, nO] = xGiven ? ['(2)', '(1)'] : ['(1)', '(2)'];
  const calc = [`${O} = ${subst([[m, g], [k, null]])}`];
  if (k !== 0) calc.push(`${O} = ${lin([[m * g, ''], [k, '']])}`);
  calc.push(`${O} = ${num(o)}`);
  const lines = calc.filter((l, i) => l !== calc[i - 1]);
  return {
    label: 'Yhtälöpari',
    prompt: 'Ratkaise yhtälöpari.',
    problem: system(eq1, eq2),
    answer: { type: 'pair', x: vals.x, y: vals.y },
    steps: [
      {
        text: `Yhtälöstä ${nG} näkee suoraan, että ${gName} = ${num(g)}. Kirjoitetaan ${num(g)} yhtälöön ${nO} ${gName}:n paikalle.`,
        math: [lines[0]],
      },
      ...(lines.length > 1 ? [{ text: 'Lasketaan.', math: lines.slice(1) }] : []),
    ],
    final: `${X} = ${num(vals.x)}, &nbsp;${Y} = ${num(vals.y)}`,
  };
}

// Yhtälöpari muodossa y = mx + k, x = ±y + p
function systemXY() {
  const x = rand(-8, 8), y = rand(-8, 8);
  let m, n;
  do { m = randNZ(-4, 4); n = Math.random() < 0.7 ? 1 : -1; } while (1 - n * m === 0);
  const k = y - m * x;
  const p = x - n * y;
  const eq1 = `${Y} = ${lin([[m, X], [k, '']])}`;
  const eq2 = `${X} = ${lin([[n, Y], [p, '']])}`;
  const A = 1 - n * m;
  const C = n * k + p;
  const pPart = p === 0 ? '' : (p < 0 ? ' − ' : ' + ') + Math.abs(p);

  const steps = [];
  if (n === 1) {
    steps.push({
      text: 'Yhtälö (1) kertoo, mitä y on. Kirjoitetaan se yhtälöön (2) y:n paikalle.',
      math: [`${X} = ${lin([[m, X], [k, ''], [p, '']])}`],
    });
  } else {
    steps.push({
      text: 'Yhtälö (1) kertoo, mitä y on. Kirjoitetaan se sulkeisiin yhtälöön (2) y:n paikalle.',
      math: [`${X} = −(${lin([[m, X], [k, '']])})${pPart}`],
    });
    steps.push({
      text: 'Avataan sulkeet. Miinus sulkeiden edessä vaihtaa jokaisen merkin.',
      math: [`${X} = ${lin([[-m, X], [-k, ''], [p, '']])}`],
    });
  }
  if (k !== 0 && p !== 0) {
    steps.push({ text: 'Lasketaan luvut yhteen.', math: [`${X} = ${lin([[n * m, X], [C, '']])}`] });
  }
  const nm = n * m;
  steps.push({
    text: nm > 0
      ? `Vähennetään molemmilta puolilta ${lin([[nm, X]])}, jotta kaikki x:t ovat vasemmalla.`
      : `Lisätään molemmille puolille ${lin([[-nm, X]])}, jotta kaikki x:t ovat vasemmalla.`,
    math: [
      op(`${X} = ${lin([[nm, X], [C, '']])}`, opSub(nm, X)),
      `${lin([[1, X], [-nm, X]])} = ${num(C)}`,
      `${lin([[A, X]])} = ${num(C)}`,
    ],
  });
  steps.push(...solveLinear(A, 0, C, X).steps);
  const yCalc = [`${Y} = ${subst([[m, x], [k, null]])}`];
  if (k !== 0) yCalc.push(`${Y} = ${lin([[m * x, ''], [k, '']])}`);
  yCalc.push(`${Y} = ${num(y)}`);
  steps.push({
    text: `Nyt tiedetään, että x = ${num(x)}. Kirjoitetaan se yhtälöön (1).`,
    math: yCalc.filter((l, i) => l !== yCalc[i - 1]),
  });
  steps.push({
    text: 'Tarkistus yhtälöön (2).',
    math: [`${num(x)} = ${subst([[n, y], [p, null]])} ✓`],
  });

  return {
    label: 'Yhtälöpari',
    prompt: 'Ratkaise yhtälöpari.',
    problem: system(eq1, eq2),
    answer: { type: 'pair', x, y },
    steps,
    final: `${X} = ${num(x)}, &nbsp;${Y} = ${num(y)}`,
  };
}

// Vaikeammat yhtälöparit (eivät vielä käytössä)
// Yhtälöpari sijoitusmenetelmällä: y = mx + k, ax + by = c
function systemSubst() {
  const x = rand(-6, 6), y = rand(-6, 6);
  let m, a, b;
  do { m = randNZ(-4, 4); a = randNZ(-6, 6); b = randNZ(-6, 6); } while (a + b * m === 0);
  const k = y - m * x;
  const c = a * x + b * y;
  const eq1 = `${Y} = ${lin([[m, X], [k, '']])}`;
  const eq2 = `${lin([[a, X], [b, Y]])} = ${num(c)}`;
  const A = a + b * m;
  const B = b * k;
  const s = solveLinear(A, B, c, X);
  const bAbs = Math.abs(b);
  const substituted =
    `${lin([[a, X]])} ${b < 0 ? '−' : '+'} ${bAbs === 1 ? '' : bAbs}(${lin([[m, X], [k, '']])}) = ${num(c)}`;
  return {
    label: 'Yhtälöpari · sijoitusmenetelmä',
    prompt: 'Ratkaise yhtälöpari.',
    problem: system(eq1, eq2),
    answer: { type: 'pair', x, y },
    steps: [
      {
        text: 'Yhtälö (1) kertoo suoraan, mitä y on. Sijoitetaan sen lauseke yhtälöön (2) y:n paikalle.',
        math: [substituted],
      },
      {
        text: b < 0 ? 'Avataan sulkeet. Huomaa, että miinus sulkeiden edessä vaihtaa merkit.' : 'Avataan sulkeet.',
        math: [`${lin([[a, X], [b * m, X], [B, '']])} = ${num(c)}`],
      },
      { text: 'Yhdistetään x-termit.', math: [`${lin([[A, X], [B, '']])} = ${num(c)}`] },
      ...s.steps,
      {
        text: `Sijoitetaan x = ${num(x)} yhtälöön (1), jolloin saadaan y.`,
        math: [`${Y} = ${subst([[m, x], [k, null]])}`, `${Y} = ${num(y)}`],
      },
      {
        text: 'Tarkistus yhtälöön (2).',
        math: [`${subst([[a, x], [b, y]])} = ${num(c)} ✓`],
      },
    ],
    final: `${X} = ${num(x)}, &nbsp;${Y} = ${num(y)}`,
  };
}

// Yhtälöpari yhteenlaskumenetelmällä: a1x + b1y = c1, a2x + b2y = c2
function systemElim() {
  const x = rand(-6, 6), y = rand(-6, 6);
  let a1, b1, a2, b2;
  do {
    a1 = randNZ(-5, 5); b1 = randNZ(-5, 5); a2 = randNZ(-5, 5); b2 = randNZ(-5, 5);
  } while (a1 * b2 - a2 * b1 === 0);
  const c1 = a1 * x + b1 * y;
  const c2 = a2 * x + b2 * y;
  const eq1 = `${lin([[a1, X], [b1, Y]])} = ${num(c1)}`;
  const eq2 = `${lin([[a2, X], [b2, Y]])} = ${num(c2)}`;

  // Kertoimet, joilla y-termeistä tulee vastalukuja
  const L = lcm(b1, b2);
  const k1 = L / Math.abs(b1);
  const k2 = (L / Math.abs(b2)) * (Math.sign(b1) === Math.sign(b2) ? -1 : 1);
  const A = k1 * a1 + k2 * a2;
  const C = k1 * c1 + k2 * c2;

  const steps = [
    {
      text: 'Käytetään yhteenlaskumenetelmää: muokataan yhtälöt niin, että y-termien kertoimet ovat toistensa vastalukuja.',
      math: [system(eq1, eq2)],
    },
  ];
  if (k1 !== 1 || k2 !== 1) {
    const parts = [];
    if (k1 !== 1) parts.push(`yhtälö (1) luvulla ${num(k1)}`);
    if (k2 !== 1) parts.push(`yhtälö (2) luvulla ${num(k2)}`);
    steps.push({
      text: `Kerrotaan ${parts.join(' ja ')}.`,
      math: [system(
        `${lin([[k1 * a1, X], [k1 * b1, Y]])} = ${num(k1 * c1)}`,
        `${lin([[k2 * a2, X], [k2 * b2, Y]])} = ${num(k2 * c2)}`,
      )],
    });
  }
  steps.push({
    text: 'Lasketaan yhtälöt puolittain yhteen. y-termit kumoutuvat.',
    math: [`${lin([[A, X]])} = ${num(C)}`],
  });
  steps.push(...solveLinear(A, 0, C, X).steps);
  steps.push({
    text: `Sijoitetaan x = ${num(x)} yhtälöön (1).`,
    math: [
      `${subst([[a1, x]])} ${b1 < 0 ? '−' : '+'} ${lin([[Math.abs(b1), Y]])} = ${num(c1)}`,
      `${lin([[a1 * x, ''], [b1, Y]])} = ${num(c1)}`,
    ],
  });
  steps.push(...solveLinear(b1, a1 * x, c1, Y).steps);
  steps.push({
    text: 'Tarkistus yhtälöön (2).',
    math: [`${subst([[a2, x], [b2, y]])} = ${num(c2)} ✓`],
  });

  return {
    label: 'Yhtälöpari · yhteenlaskumenetelmä',
    prompt: 'Ratkaise yhtälöpari.',
    problem: system(eq1, eq2),
    answer: { type: 'pair', x, y },
    steps,
    final: `${X} = ${num(x)}, &nbsp;${Y} = ${num(y)}`,
  };
}

/* ---------- Prosentit ---------- */

const pick = arr => arr[Math.floor(Math.random() * arr.length)];
// Desimaaliluku suomalaisittain: 2.2 -> "2,2"
const dec = (n, digits) => (digits === undefined ? String(n) : n.toFixed(digits)).replace('.', ',').replace('-', '−');
// Sentit euroiksi: 220 -> "2,20 €", 7000 -> "70 €"
const eur = cents => (cents % 100 === 0 ? `${cents / 100} €` : `${dec(cents / 100, 2)} €`);

// Arpoo hinnan (sentteinä) ja prosentin niin, että muutos on tasasentteinä.
function pickPrice(prices, percents) {
  let price, p;
  do { price = Math.round(pick(prices) * 100); p = pick(percents); } while ((price * p) % 100 !== 0);
  return [price, p];
}

const DISCOUNT_ITEMS = [
  ['Takki', [60, 80, 100, 120, 150, 200]],
  ['Huppari', [30, 40, 50, 60]],
  ['Reppu', [20, 40, 50, 60]],
  ['Lenkkarit', [60, 80, 90, 100, 120]],
  ['Pelikonsoli', [200, 300, 400, 500]],
  ['Polkupyörä', [200, 300, 400, 500, 600]],
  ['Puhelin', [200, 300, 400, 500, 800]],
  ['Lippis', [20, 25, 30]],
];

const INCREASE_ITEMS = [
  ['Bensalitra', [2]],
  ['Bussilippu', [2, 3, 4]],
  ['Elokuvalippu', [10, 12, 15]],
  ['Pizza', [10, 12, 15]],
  ['Jäätelö', [2, 3, 4]],
  ['Kuukausikortti', [40, 50, 60]],
  ['Kahvikuppi', [2, 3, 4]],
];

// Alennus: hinta − p %
function percentDiscount() {
  const [item, prices] = pick(DISCOUNT_ITEMS);
  const plural = item === 'Lenkkarit';
  const [price, p] = pickPrice(prices, [10, 20, 25, 30, 40, 50]);
  const change = (price * p) / 100;
  const result = price - change;
  return {
    label: 'Prosentit · alennus',
    prompt: `${item} ${plural ? 'maksavat' : 'maksaa'} ${eur(price)}. Alennus on ${p} %. Mikä on alennettu hinta?`,
    problem: '',
    answer: { type: 'single', label: 'Hinta =', unit: '€', decimal: true, value: result / 100 },
    steps: [
      {
        text: `Lasketaan alennus euroina. ${p} % tarkoittaa ${p} sadasosaa eli ${dec(p / 100, 2)}.`,
        math: [`${p} % · ${eur(price)} = ${dec(p / 100, 2)} · ${eur(price)} = ${eur(change)}`],
      },
      {
        text: 'Vähennetään alennus alkuperäisestä hinnasta.',
        math: [`${eur(price)} − ${eur(change)} = ${eur(result)}`],
      },
      {
        text: `Tarkistus toisella tavalla: alennuksen jälkeen jäljelle jää 100 % − ${p} % = ${100 - p} % hinnasta.`,
        math: [`${dec((100 - p) / 100, 2)} · ${eur(price)} = ${eur(result)} ✓`],
      },
    ],
    final: eur(result),
  };
}

// Korotus: hinta + p %
function percentIncrease() {
  const [item, prices] = pick(INCREASE_ITEMS);
  const [price, p] = pickPrice(prices, [5, 10, 20, 25, 50]);
  const change = (price * p) / 100;
  const result = price + change;
  return {
    label: 'Prosentit · korotus',
    prompt: `${item} maksaa ${eur(price)}. Hinta nousee ${p} %. Mikä on korotettu hinta?`,
    problem: '',
    answer: { type: 'single', label: 'Hinta =', unit: '€', decimal: true, value: result / 100 },
    steps: [
      {
        text: `Lasketaan korotus euroina. ${p} % tarkoittaa ${p} sadasosaa eli ${dec(p / 100, 2)}.`,
        math: [`${p} % · ${eur(price)} = ${dec(p / 100, 2)} · ${eur(price)} = ${eur(change)}`],
      },
      {
        text: 'Lisätään korotus alkuperäiseen hintaan.',
        math: [`${eur(price)} + ${eur(change)} = ${eur(result)}`],
      },
      {
        text: `Tarkistus toisella tavalla: uusi hinta on 100 % + ${p} % = ${100 + p} % vanhasta hinnasta.`,
        math: [`${dec((100 + p) / 100, 2)} · ${eur(price)} = ${eur(result)} ✓`],
      },
    ],
    final: eur(result),
  };
}

// Korkoa korolle: pääoma kasvaa p % vuodessa n vuoden ajan
function percentCompound() {
  let start, p, n, years;
  do {
    start = pick([100, 200, 400, 500, 1000, 2000]) * 100;
    p = pick([2, 5, 10, 20]);
    n = pick([2, 2, 3]);
    years = [start];
    for (let i = 0; i < n; i++) years.push((years[i] * (100 + p)) / 100);
  } while (!years.every(Number.isInteger)); // vain tasasentit
  const result = years[n];
  const k = dec((100 + p) / 100, 2);
  return {
    label: 'Prosentit · korkoa korolle',
    prompt: `Tilille talletetaan ${eur(start)}. Vuotuinen korko on ${p}\u00a0% ja korko lisätään tilille aina vuoden lopussa. Paljonko tilillä on rahaa ${n} vuoden kuluttua?`,
    problem: '',
    answer: { type: 'single', label: 'Pääoma =', unit: '€', decimal: true, value: result / 100 },
    steps: [
      {
        text: `Korko ${p}\u00a0% lisätään pääomaan, joten uusi pääoma on 100\u00a0% + ${p}\u00a0% = ${100 + p}\u00a0% edellisestä. Kerroin on siis ${k}.`,
        math: [`${100 + p}\u00a0% = ${k}`],
      },
      {
        text: 'Kerrotaan pääoma kertoimella joka vuosi. Seuraavan vuoden korko lasketaan jo kasvaneesta summasta (korkoa korolle).',
        math: years.slice(1).map((c, i) => `${i + 1}. vuosi: ${eur(years[i])} · ${k} = ${eur(c)}`),
      },
      {
        text: `Tarkistus yhdellä laskulla: kerrotaan ${n} kertaa kertoimella ${k}.`,
        math: [`${eur(start)} · ${pow(k, n)} = ${eur(result)} ✓`],
      },
    ],
    final: eur(result),
  };
}

// Kuinka monta prosenttia pienempi luku on suuremmasta, ja kuinka monta prosenttia se on pienempi.
// Jokainen tilanne: [isot luvut, prosentit, yksikkö, tarina, kysymys a, kysymys b]
const RATIO_STORIES = [
  [[20, 40, 50, 60, 80, 100], [50, 60, 70, 75, 80, 90], '€',
    (B, S) => `Pelin normaalihinta on ${B}, mutta alennusmyynnissä se maksaa ${S}.`,
    'Kuinka monta prosenttia alennushinta on normaalihinnasta?',
    'Kuinka monta prosenttia alennushinta on normaalihintaa halvempi?'],
  [[20, 30, 40, 50], [50, 60, 70, 75, 80, 90], '€',
    (B, S) => `Vanha puhelinliittymä maksoi ${B} kuukaudessa. Uusi liittymä maksaa ${S} kuukaudessa.`,
    'Kuinka monta prosenttia uuden liittymän hinta on vanhan hinnasta?',
    'Kuinka monta prosenttia uusi liittymä on vanhaa halvempi?'],
  [[160, 180, 200], [50, 60, 70, 75, 80, 90], 'cm',
    (B, S) => `Isä on ${B} pitkä ja hänen tyttärensä on ${S} pitkä.`,
    'Kuinka monta prosenttia tyttären pituus on isän pituudesta?',
    'Kuinka monta prosenttia tytär on isää lyhyempi?'],
  [[20, 25, 30, 40], [10, 20, 25, 40, 50], 'kg',
    (B, S) => `Koira painaa ${B} ja kissa ${S}.`,
    'Kuinka monta prosenttia kissan paino on koiran painosta?',
    'Kuinka monta prosenttia kissa on koiraa kevyempi?'],
  [[10, 20, 40], [25, 50, 60, 75, 80, 90], 'km',
    (B, S) => `Emma pyöräili ${B} ja Leo pyöräili ${S}.`,
    'Kuinka monta prosenttia Leon matka on Emman matkasta?',
    'Kuinka monta prosenttia Leon matka on Emman matkaa lyhyempi?'],
  [[200, 300, 400, 500], [75, 80, 90, 95], 'oppilasta',
    (B, S) => `Koulussa oli viime vuonna ${B}. Tänä vuonna koulussa on ${S}.`,
    'Kuinka monta prosenttia tämän vuoden oppilasmäärä on viime vuoden määrästä?',
    'Kuinka monta prosenttia oppilaita on nyt vähemmän?'],
  [[50, 60, 80, 100], [25, 40, 50, 60, 75], 'min',
    (B, S) => `Matka kouluun kestää kävellen ${B} ja bussilla ${S}.`,
    'Kuinka monta prosenttia bussimatkan kesto on kävelymatkan kestosta?',
    'Kuinka monta prosenttia bussimatka on kävelyä lyhyempi?'],
];

function percentRatio() {
  const [bigs, pcts, unit, story, qa, qb] = pick(RATIO_STORIES);
  let B, p;
  do { B = pick(bigs); p = pick(pcts); } while ((B * p) % 100 !== 0);
  const S = (B * p) / 100;
  const D = B - S;
  const u = n => `${n}\u00a0${unit}`;
  const pa = p, pb = 100 - p;
  return {
    label: 'Prosentit · prosenttiosuus',
    prompt: `${story(u(B), u(S))}<span class="q">a) ${qa}</span><span class="q">b) ${qb}</span>`,
    problem: '',
    answer: {
      type: 'parts',
      parts: [
        { id: 'a', label: 'a)', unit: '%', value: pa },
        { id: 'b', label: 'b)', unit: '%', value: pb },
      ],
    },
    steps: [
      {
        text: `a) Osuus lasketaan jakamalla osa kokonaisuudella. Vertailukohta on ${u(B)}, joten jaetaan sillä. Lopuksi muutetaan desimaaliluku prosenteiksi (kerrotaan 100:lla).`,
        math: [`${u(S)} : ${u(B)} = ${dec(pa / 100)} = ${pa}\u00a0%`],
      },
      {
        text: `b) Lasketaan ensin erotus, eli kuinka paljon pienempi luku on.`,
        math: [`${u(B)} − ${u(S)} = ${u(D)}`],
      },
      {
        text: `Verrataan erotusta samaan vertailukohtaan ${u(B)}.`,
        math: [`${u(D)} : ${u(B)} = ${dec(pb / 100)} = ${pb}\u00a0%`],
      },
      {
        text: 'Tarkistus: a- ja b-kohdan prosenttien summa on 100 %.',
        math: [`100\u00a0% − ${pa}\u00a0% = ${pb}\u00a0% ✓`],
      },
    ],
    final: `a) ${pa}\u00a0% &nbsp; b) ${pb}\u00a0%`,
  };
}

/* ---------- Kategoriat ---------- */

const CATEGORIES = [
  { id: 'sijoitus', name: 'Sijoitus', short: 'Sijoitus', gens: [[substitution, 1]] },
  { id: 'yhtalot', name: 'Yhtälön ratkaisu', short: 'Yhtälöt', gens: [[linBasic, 3], [linBothSides, 2]] },
  { id: 'potenssit', name: 'x² ja x³ -yhtälöt', short: 'x² ja x³', gens: [[squareEq, 1], [cubeEq, 1]] },
  { id: 'yhtaloparit', name: 'Yhtälöparit', short: 'Parit', gens: [[systemKnown, 1], [systemXY, 2]] },
  {
    id: 'prosentit', name: 'Prosentit', short: 'Prosentit',
    subs: [
      { id: 'alennus', name: 'Alennus', short: 'Alennus', gens: [[percentDiscount, 1]] },
      { id: 'korotus', name: 'Korotus', short: 'Korotus', gens: [[percentIncrease, 1]] },
      { id: 'korko', name: 'Korkoa korolle', short: 'Korko', gens: [[percentCompound, 1]] },
      { id: 'osuus', name: 'Prosenttiosuus', short: 'Osuus', gens: [[percentRatio, 1]] },
    ],
  },
];

// cat voi olla kategoria tai alakategoria; molemmissa on gens.
function generate(cat) {
  const total = cat.gens.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [gen, w] of cat.gens) {
    if ((r -= w) < 0) return gen();
  }
  return cat.gens[0][0]();
}

/* ---------- Vastauksen tulkinta ---------- */

function parseNumber(str) {
  const s = str.trim().replace(/[−–]/g, '-').replace(',', '.').replace(/\s+/g, '');
  if (s === '' || !/^[+-]?\d+(\.\d+)?$/.test(s)) return null;
  return Number(s);
}

function parseSet(str) {
  const s = str.replace(/[−–]/g, '-');
  const tokens = s.match(/±\s*\d+(?:\.\d+)?|[+-]?\s*\d+(?:\.\d+)?/g);
  if (!tokens) return null;
  const out = [];
  for (const t of tokens) {
    const clean = t.replace(/\s+/g, '');
    if (clean.startsWith('±')) {
      const n = Number(clean.slice(1));
      out.push(n, -n);
    } else {
      out.push(Number(clean));
    }
  }
  return [...new Set(out)].sort((a, b) => a - b);
}

if (typeof module !== 'undefined') {
  module.exports = { CATEGORIES, percentRatio, percentCompound, percentDiscount, percentIncrease, systemKnown, systemXY, linBasic, linBothSides, substitution, squareEq, cubeEq, systemSubst, systemElim, parseNumber, parseSet };
}


/* ---------- Käyttöliittymä ---------- */

if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  const els = {
    cats: $('cats'), subcats: $('subcats'), score: $('score'), badge: $('badge'), prompt: $('prompt'), problem: $('problem'),
    inputs: $('inputs'), feedback: $('feedback'), keypad: $('keypad'),
    keyCheck: $('key-check'), extra1: $('key-extra1'), extra2: $('key-extra2'),
    solution: $('solution'), steps: $('steps'), final: $('final'),
  };

  const state = {
    cat: CATEGORIES[0], sub: null, task: null, scored: false, solved: false, correct: 0, total: 0,
    fields: [], values: {}, active: null, hint: '',
  };

  els.cats.innerHTML = CATEGORIES.map(c =>
    `<a href="#${c.id}" data-id="${c.id}"><span class="long">${c.name}</span><span class="short">${c.short}</span></a>`
  ).join('');

  function setExtraKey(btn, key, label, ariaLabel) {
    btn.dataset.key = key || '';
    btn.innerHTML = label || '';
    btn.classList.toggle('key-hidden', !key);
    btn.disabled = !key;
    btn.setAttribute('aria-label', ariaLabel || '');
  }

  function renderInputs(answer) {
    if (answer.type === 'pair') state.fields = [['x', `${X} =`], ['y', `${Y} =`]];
    else if (answer.type === 'parts') state.fields = answer.parts.map(p => [p.id, p.label, p.unit]);
    else state.fields = [['ans', answer.label, answer.unit]];
    state.values = Object.fromEntries(state.fields.map(([id]) => [id, '']));
    state.active = state.fields[0][0];
    els.inputs.innerHTML = state.fields.map(([id, label, unit]) =>
      `<div class="field math"><span class="field-label">${label}</span>` +
      `<button type="button" class="field-box${answer.type === 'set' ? ' wide' : ''}" data-field="${id}" aria-label="Vastauskenttä ${id}"></button>` +
      (unit ? `<span class="field-unit">${unit}</span>` : '') + '</div>'
    ).join('');

    if (answer.type === 'set') {
      setExtraKey(els.extra1, 'pm', '±', 'Plus-miinus');
      setExtraKey(els.extra2, 'comma', ',', 'Pilkku');
      state.hint = 'Useampi ratkaisu: esim. 3, −3 tai ±3';
    } else if (answer.type === 'pair') {
      setExtraKey(els.extra1, 'x', `<var>x</var>`, 'Valitse x-kenttä');
      setExtraKey(els.extra2, 'y', `<var>y</var>`, 'Valitse y-kenttä');
      state.hint = 'Vaihda kenttää napauttamalla sitä.';
    } else if (answer.type === 'parts') {
      setExtraKey(els.extra1, 'a', 'a)', 'Valitse a-kohta');
      setExtraKey(els.extra2, 'b', 'b)', 'Valitse b-kohta');
      state.hint = 'Vastaa molempiin kohtiin.';
    } else {
      setExtraKey(els.extra1, 'clear', 'C', 'Tyhjennä');
      if (answer.decimal) setExtraKey(els.extra2, 'dec', ',', 'Desimaalipilkku');
      else setExtraKey(els.extra2, null);
      state.hint = '';
    }
    paintFields();
  }

  function paintFields() {
    for (const box of els.inputs.querySelectorAll('.field-box')) {
      const id = box.dataset.field;
      box.textContent = state.values[id];
      box.classList.toggle('active', id === state.active && !state.solved);
    }
  }

  // Ilman palautetta paikalla näytetään vihje, jotta tila ei mene hukkaan.
  function clearFeedback() {
    els.feedback.textContent = state.hint;
    els.feedback.className = 'feedback';
  }

  function setFeedback(ok, msg) {
    els.feedback.className = 'feedback ' + (ok ? 'ok' : 'bad');
    els.feedback.textContent = msg;
  }

  function newTask() {
    const t = generate(state.sub || state.cat);
    state.task = t;
    state.scored = false;
    state.solved = false;
    els.badge.textContent = t.label;
    els.prompt.innerHTML = t.prompt;
    els.problem.innerHTML = t.problem;
    renderInputs(t.answer);
    clearFeedback();
    els.keyCheck.textContent = 'Tarkista';
    els.solution.hidden = true;
    els.steps.innerHTML = t.steps.map(s =>
      `<li><p>${s.text}</p><div class="math">${s.math.map(m => `<div>${m}</div>`).join('')}</div></li>`
    ).join('');
    els.final.innerHTML = t.final;
    window.scrollTo({ top: 0 });
  }

  function check() {
    const a = state.task.answer;
    let ok;
    let msg = null;

    if (a.type === 'single') {
      const v = parseNumber(state.values.ans);
      if (v === null) return setFeedback(false, 'Kirjoita vastaus ensin.');
      ok = Math.abs(v - a.value) < 1e-9;
    } else if (a.type === 'set') {
      const vals = parseSet(state.values.ans);
      if (!vals) return setFeedback(false, 'Kirjoita vastaus ensin, esim. 3, −3 tai ±3.');
      const want = [...a.values].sort((p, q) => p - q);
      ok = vals.length === want.length && vals.every((v, i) => v === want[i]);
      if (!ok && vals.length < want.length && vals.every(v => want.includes(v))) {
        msg = 'Melkein! Yhtälöllä on useampi kuin yksi ratkaisu.';
      }
    } else if (a.type === 'parts') {
      const vals = a.parts.map(p => parseNumber(state.values[p.id]));
      if (vals.some(v => v === null)) return setFeedback(false, 'Vastaa kaikkiin kohtiin.');
      const right = a.parts.map((p, i) => Math.abs(vals[i] - p.value) < 1e-9);
      ok = right.every(Boolean);
      if (!ok && right.some(Boolean)) {
        msg = a.parts.map((p, i) => `${p.label} ${right[i] ? 'oikein' : 'ei vielä'}`).join(', ') + '.';
      }
    } else {
      const vx = parseNumber(state.values.x);
      const vy = parseNumber(state.values.y);
      if (vx === null || vy === null) return setFeedback(false, 'Kirjoita sekä x että y.');
      ok = vx === a.x && vy === a.y;
      if (!ok && (vx === a.x || vy === a.y)) {
        msg = vx === a.x ? 'x on oikein, mutta y ei vielä.' : 'y on oikein, mutta x ei vielä.';
      }
    }

    if (!state.scored) {
      state.scored = true;
      state.total++;
      if (ok) state.correct++;
      els.score.textContent = `Oikein ${state.correct} / ${state.total}`;
    }

    if (ok) {
      state.solved = true;
      els.keyCheck.textContent = 'Seuraava →';
      paintFields();
      setFeedback(true, 'Oikein! Hienoa!');
    } else {
      setFeedback(false, msg || 'Ei aivan. Yritä uudelleen tai katso ratkaisu.');
    }
  }

  const isSign = ch => ch === '−' || ch === '±';

  // Vaihtaa viimeisen luvun etumerkin (− tai ±), painettiinpa merkki ennen lukua tai sen jälkeen.
  function toggleSign(v, sign) {
    const cut = v.lastIndexOf(', ') + 1;
    const head = cut > 0 ? v.slice(0, cut + 1) : '';
    let seg = v.slice(head.length);
    if (isSign(seg[0])) seg = (seg[0] === sign ? '' : sign) + seg.slice(1);
    else seg = sign + seg;
    return head + seg;
  }

  function press(key) {
    if (key === 'check') return state.solved ? newTask() : check();
    if (state.solved) return;
    if (state.fields.some(([id]) => id === key)) {
      state.active = key;
      return paintFields();
    }

    let v = state.values[state.active];
    if (/^\d$/.test(key)) {
      if (v.length < 14) v += key;
    } else if (key === 'back') {
      v = v.endsWith(', ') ? v.slice(0, -2) : v.slice(0, -1);
    } else if (key === 'clear') {
      v = '';
    } else if (key === 'minus' || key === 'pm') {
      v = toggleSign(v, key === 'minus' ? '−' : '±');
    } else if (key === 'dec') {
      if (!v.includes(',')) v += /\d$/.test(v) ? ',' : '0,';
    } else if (key === 'comma') {
      if (v && !v.endsWith(', ') && !isSign(v.slice(-1))) v += ', ';
    } else {
      return;
    }
    state.values[state.active] = v;
    clearFeedback();
    paintFields();
  }

  els.keypad.addEventListener('click', e => {
    const btn = e.target.closest('button[data-key]');
    if (btn && btn.dataset.key) press(btn.dataset.key);
  });

  els.inputs.addEventListener('click', e => {
    const box = e.target.closest('.field-box');
    if (box && !state.solved) {
      state.active = box.dataset.field;
      paintFields();
    }
  });

  // Fyysinen näppäimistö (tietokoneella)
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const focused = document.activeElement;
    if (e.key === 'Enter' && focused && focused.matches('a, button:not(.field-box)')) return;
    const type = state.task.answer.type;
    let key = null;
    if (/^\d$/.test(e.key)) key = e.key;
    else if (e.key === '-') key = 'minus';
    else if (e.key === 'Backspace') key = 'back';
    else if (e.key === 'Escape' || e.key === 'Delete') key = 'clear';
    else if (e.key === 'Enter') key = 'check';
    else if (type === 'set' && (e.key === ',' || e.key === ' ')) key = 'comma';
    else if (state.task.answer.decimal && (e.key === ',' || e.key === '.')) key = 'dec';
    else if (type === 'set' && e.key === '+') key = 'pm';
    else if (e.key === 'Tab' && state.fields.length > 1) {
      const i = state.fields.findIndex(([id]) => id === state.active);
      key = state.fields[(i + 1) % state.fields.length][0];
    }
    if (!key) return;
    e.preventDefault();
    press(key);
  });

  function showSolution() {
    els.solution.hidden = false;
    els.solution.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const markCurrent = (nav, id) => {
    for (const a of nav.querySelectorAll('a')) {
      if (a.dataset.id === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    }
  };

  // Osoite on muotoa #kategoria tai #kategoria/alakategoria
  function selectFromHash() {
    const [catId, subId] = location.hash.slice(1).split('/');
    state.cat = CATEGORIES.find(c => c.id === catId) || CATEGORIES[0];
    state.sub = state.cat.subs ? state.cat.subs.find(s => s.id === subId) || state.cat.subs[0] : null;
    markCurrent(els.cats, state.cat.id);

    els.subcats.hidden = !state.sub;
    if (state.sub) {
      els.subcats.innerHTML = state.cat.subs.map(s =>
        `<a href="#${state.cat.id}/${s.id}" data-id="${s.id}"><span class="long">${s.name}</span><span class="short">${s.short}</span></a>`
      ).join('');
      markCurrent(els.subcats, state.sub.id);
    }
    newTask();
  }

  $('btn-new').addEventListener('click', newTask);
  $('btn-new-2').addEventListener('click', newTask);
  $('btn-solution').addEventListener('click', showSolution);
  window.addEventListener('hashchange', selectFromHash);

  selectFromHash();

  /* ---------- Päivitykset ---------- */

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // iPhone pitää sovelluksen auki taustalla eikä lataa sivua uudelleen.
  // Kun sovellukseen palataan, tarkistetaan onko julkaistu uusi versio
  // (GitHub Pagesin ETag muuttuu jokaisessa julkaisussa) ja ladataan se.
  const siteVersion = () =>
    fetch(location.pathname, { method: 'HEAD', cache: 'no-store' })
      .then(r => r.headers.get('etag') || r.headers.get('last-modified'))
      .catch(() => null);

  let loadedVersion = null;
  siteVersion().then(v => { loadedVersion = v; });

  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState !== 'visible' || !loadedVersion) return;
    const v = await siteVersion();
    if (v && v !== loadedVersion) location.reload();
  });
}
