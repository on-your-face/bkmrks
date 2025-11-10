export function initYandexTime() {
   const svg = document.getElementById('clock');
   if (!svg) return;

   const tz = svg.getAttribute('tz') || 'UTC';

   const hourEl = document.getElementById('hourHand');
   const minuteEl = document.getElementById('minuteHand');
   const secondEl = document.getElementById('secondHand');

   const cx = 19,
      cy = 19;

   function getParts(now, tz) {
      const parts = new Intl.DateTimeFormat('en-US', {
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: false,
         timeZone: tz,
      }).formatToParts(now);

      const p = (t) => parseInt(parts.find((x) => x.type === t).value, 10);

      return {
         h: p('hour'),
         m: p('minute'),
         s: p('second'),
         ms: now.getMilliseconds(),
      };
   }

   function tick() {
      const now = new Date();
      const { h, m, s, ms } = getParts(now, tz);

      const sec = s + ms / 1000;
      const min = m + sec / 60;
      const hr = (h % 12) + min / 60;

      const secA = sec * 6;
      const minA = min * 6;
      const hourA = hr * 30;

      secondEl.setAttribute('transform', `rotate(${secA} ${cx} ${cy})`);
      minuteEl.setAttribute('transform', `rotate(${minA} ${cx} ${cy})`);
      hourEl.setAttribute('transform', `rotate(${hourA} ${cx} ${cy})`);

      requestAnimationFrame(tick);
   }

   requestAnimationFrame(tick);
}
