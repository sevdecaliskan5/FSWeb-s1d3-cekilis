function lottery(katilimcilar) {
  const kazananlar = katilimcilar.slice(0, 5);

  kazananlar.push(katilimcilar[9]);
  kazananlar.push(katilimcilar[19]);
  kazananlar.push(katilimcilar[29]);
  kazananlar.push(katilimcilar[39]);
  kazananlar.push(katilimcilar[49]);

  const kalanKatilimcilar = [];

  const rastgeleIndex = Math.floor(Math.random() * kalanKatilimcilar.length);
  kazananlar.push(kalanKatilimcilar[rastgeleIndex]);

  return kazananlar;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = lottery;
