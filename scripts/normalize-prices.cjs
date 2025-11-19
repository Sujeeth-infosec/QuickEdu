const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'courses.json');

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

try {
  const raw = fs.readFileSync(file, 'utf8');
  const courses = JSON.parse(raw);

  const prices = courses.map(c => Number(c.price) || 0);
  const minOld = Math.min(...prices);
  const maxOld = Math.max(...prices);

  const minTarget = 4000;
  const maxTarget = 65000;

  const scaled = courses.map(c => {
    const old = Number(c.price) || 0;
    let newPrice;
    if (maxOld === minOld) {
      newPrice = minTarget;
    } else {
      newPrice = Math.round(minTarget + (old - minOld) * (maxTarget - minTarget) / (maxOld - minOld));
    }
    newPrice = clamp(newPrice, minTarget, maxTarget);
    const newOriginal = clamp(Math.round(newPrice * 1.5), newPrice + 1000, maxTarget);
    return Object.assign({}, c, { price: newPrice, originalPrice: newOriginal });
  });

  fs.writeFileSync(file, JSON.stringify(scaled, null, 2) + '\n', 'utf8');
  console.log('Normalized', scaled.length, 'courses.');
} catch (err) {
  console.error('Error normalizing prices:', err.message);
  process.exit(1);
}
