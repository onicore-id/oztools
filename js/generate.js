function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pick(arr, n) {
  return shuffle([...arr]).slice(0, n);
}

function generateBBFS(n) {
  const digits = shuffle([0,1,2,3,4,5,6,7,8,9]);
  return digits.slice(0, n).map(String).join('');
}

function generatePrediksi(bbfsStr) {
  const d = bbfsStr.split('').map(Number);
  const n = d.length;

  // AI: 4 digit dari bbfs
  const ai = pick(d, 4).join('');

  // CB: 2 angka
  const cb = pick(d, 2);
  const cbStr = cb[0] + ' & ' + cb[1];

  // CM: 3 pasang xx.xx.xx
  const cmDigits = pick(d, 6);
  const cm = cmDigits[0]+''+cmDigits[1]+'.'+cmDigits[2]+''+cmDigits[3]+'.'+cmDigits[4]+''+cmDigits[5];

  // 4D BB: 4 kombinasi
  const bb4 = [];
  for (let i = 0; i < 4; i++) {
    bb4.push(pick(d, 4).join(''));
  }

  // 3D BB: 7 kombinasi
  const bb3 = [];
  for (let i = 0; i < 7; i++) {
    bb3.push(pick(d, 3).join(''));
  }

  // 2D BB: 10 kombinasi
  const bb2 = [];
  for (let i = 0; i < 10; i++) {
    bb2.push(pick(d, 2).join(''));
  }

  // Shio: 2 dari daftar
  const shios = pick(CONFIG.shio, 2).map(s => s.name);

  // Twin: 2 angka kembar dari bbfs
  const twins = pick(d, 2).map(x => String(x)+String(x));

  // Angka Panas: 1 digit
  const panas = d[Math.floor(Math.random() * d.length)];

  return { bbfs: bbfsStr, ai, cb: cbStr, cm, bb4, bb3, bb2, shio: shios, twin: twins, panas };
}

function getDateOptions(days) {
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const options = [];
  for (let i = 1; i <= days; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const label = hari[d.getDay()] + ' | ' + d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
    options.push({ value: d.toISOString().split('T')[0], label });
  }
  return options;
}
