(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();async function _(){const a=["1rem OpenSans","1rem Lora-Regular"];await Promise.all(a.map(n=>document.fonts.load(n)))}function v(){document.querySelectorAll("a.new_tab").forEach(a=>{a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer")})}function w(){const a=()=>{document.body.style.overflow="",document.body.style.paddingRight=""},n=()=>{document.querySelectorAll(".tags.content__wrapper").forEach(e=>e.classList.remove("open__tags")),document.querySelectorAll('a.anchor[href^="#"]').forEach(e=>e.style.opacity="")};document.querySelectorAll(".element[data-modal-id]").forEach(e=>e.addEventListener("click",()=>{const r=document.getElementById(e.dataset.modalId);if(!r)return;r.classList.add("open__main");const t=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${t}px`})),document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const r=document.querySelector(".modal.open__main");r&&(r.classList.remove("open__main"),a(),n())},{capture:!0}),document.querySelectorAll('a.anchor[href^="#"]').forEach(e=>e.addEventListener("click",r=>{r.preventDefault();const t=document.getElementById(e.getAttribute("href").slice(1));if(!t?.classList.contains("tags")||!t.classList.contains("content__wrapper"))return;const i=t.classList.contains("open__tags");n(),i||(t.classList.add("open__tags"),e.style.opacity="1")}));let s=0,c=!1;const o=()=>{const e=document.querySelector(".modal.open__main[data-swipe]");e&&delete e.dataset.swipe,c=!1};document.addEventListener("touchstart",e=>{const r=e.target.closest(".modal.open__main");r&&(s=e.touches[0].clientX,c=!0,r.dataset.swipe="1")}),document.addEventListener("touchmove",e=>{const r=document.querySelector(".modal.open__main[data-swipe]");!r||!c||s-e.touches[0].clientX>150&&(r.classList.remove("open__main"),a(),n(),o())}),document.addEventListener("touchend",o)}document.addEventListener("click",a=>{if(!a.target.closest(".new_tab"))return;const s=document.querySelector(".modal.open__main"),c=document.querySelector(".open__tags");s&&s.classList.remove("open__main"),c&&c.classList.remove("open__tags"),resetBody(),closeTags()});function L(){document.querySelectorAll("a.copy").forEach(a=>{a.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),history.pushState("",document.title,window.location.pathname+window.location.search);const s=a.getAttribute("href");s&&navigator.clipboard.writeText(s).catch(()=>{})})})}function E(){document.querySelectorAll(".copylong[data-href]").forEach(a=>{a.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("data-href");if(s){const o={msword2007_templates:"%appdata%\\Microsoft\\Шаблоны",php_myadmin:"127.0.0.1/openserver/phpmyadmin/",stop_spooler:"net stop spooler",start_spooler:"net start spooler",new_branch:"создать новую ветку — git checkout -b имя_ветки",branch_global:"git config --global push.autoSetupRemote true",clear_spooler:'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',powershell_cd:'cd ""',cmd_cd:'cd /d ""',"cmd-start":'start "" "c:\\OSPanel\\Open Server Panel.exe"',"cmd-OSP-server-START":'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',"cmd-OSP-server-RESTART":'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',"cmd-OSP-server-STOP":'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',"cmd-OSP-domain":"http://test-wordpress/wp-admin/","git-delete (cmd)":"rmdir /s /q .git","git-push (3in1)":"git add . && git commit -m ok && git push","stop zapret":"sc stop WinDivert","regedit-autorun":"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run","close process (OSP promt)":'taskkill /IM "Open Server Panel.exe" /F',termux_iam_true:"git config --global --add safe.directory /storage/emulated/0/bookmarks","cd ~/storage/shared/bookmarks":"cd ~/storage/shared/bookmarks","termux_git-pull":"git pull origin main","block-ghost":'<div class="element ghost"></div>',waves_data:"C:\\Program Files\\Waves Central\\","directory-buttery-taskbar":"C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",gpt_galuni:`Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.

1. Поведение при недостатке информации:

Если в ответе отсутствуют данные, ты не дополняешь их предположениями.

Вместо этого используешь одну из формулировок:

«У меня нет подтверждённой информации по этому вопросу.»

«Не могу проверить это без доступа к источнику/данным.»

«Данных недостаточно для достоверного вывода.»

2. Явное разграничение утверждений:

При генерации любого ответа чётко отмечай:

Что известно на основе подтверждённых данных.

Что является обоснованным предположением.

Где присутствует неопределённость или потенциальная ошибка.

Шаблон:

[Факт]: …

[Предположение]: …

[Неуверенность/недостаток данных]: …

3. Условия остановки:

Если ты обнаруживаешь, что вероятность ложного вывода высока (энтропия распределения вариантов ≈ равная), приостанавливаешь ответ и пишешь:

«Высокая неопределённость. Требуются уточняющие данные или проверка.»

4. Самопроверка перед выводом:

Перед завершением ответа:

Проверь согласованность с обученной базой и известными источниками.

Зафиксируй наличие внутренних противоречий.

Отметь признаки неуверенности.

5. Поведение при сомнительных утверждениях:

Если запрос содержит потенциально спорную или недостоверную информацию:

«Этот факт требует дополнительной проверки. У меня нет достоверного подтверждения.»

6. Обработка нестабильных участков генерации:

Если замечаешь:

Резкие смысловые переходы,

Неоднозначности,

Аномальные паттерны —

Остановись и используй:

«Существует семантический разрыв. Возможна ошибка в интерпретации.»

7. Принцип: отказ лучше вымысла:

Отказ от ответа допустим. Главное — не выдумывать.

8. Источник и логическая верификация:

> Основывайся на подтверждённых знаниях из обученной базы.

P.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.`}[s];if(o){const e=document.createElement("textarea");e.style.position="fixed",e.style.opacity="0",e.value=o,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}})})}function b(){const a=document.getElementById("searchToggle"),n=document.querySelector(".search__inner"),s=document.getElementById("search");if(!a||!n||!s)return;document.querySelectorAll(".tag.copy").forEach(t=>{const i=window.getComputedStyle(t).display;t.dataset.origDisplay=i!=="none"?i:"inline-block"});function c(){n.classList.remove("active"),s.value="",document.querySelectorAll(".tag.copy").forEach(t=>{t.style.display=t.dataset.origDisplay})}a.addEventListener("click",()=>{n.classList.contains("active")?c():(n.classList.add("active"),s.focus())}),document.addEventListener("click",t=>{!n.contains(t.target)&&t.target!==a&&c()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&c()});let o=0,e=0,r=!1;document.addEventListener("touchstart",t=>{n.classList.contains("active")&&(o=t.touches[0].clientX,r=!0,n.dataset.isSwiping="true")}),document.addEventListener("touchmove",t=>{const i=document.querySelector(".search__inner.active[data-is-swiping='true']");i&&r&&(e=t.touches[0].clientX,o-e>100&&(c(),r=!1,delete i.dataset.isSwiping))}),document.addEventListener("touchend",()=>{const t=document.querySelector(".search__inner.active[data-is-swiping='true']");t&&(r=!1,delete t.dataset.isSwiping)}),s.addEventListener("input",()=>{const t=s.value.trim().toLowerCase();document.querySelectorAll(".tag.copy").forEach(l=>{const d=l.getAttribute("data-search-tg-password");if(!d)return;d.toLowerCase().includes(t)?l.style.display=l.dataset.origDisplay:l.style.display="none"})})}function A(){document.querySelectorAll("#yandexTimeClock").forEach(n=>{const s=n.getAttribute("tz")||"UTC",c=n.querySelector("#hourHand"),o=n.querySelector("#minuteHand"),e=n.querySelector("#secondHand");function r(i){const l=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1,timeZone:s}).formatToParts(i),d=u=>+l.find(m=>m.type===u).value;return{h:d("hour"),m:d("minute"),s:d("second"),ms:d("fractionalSecond")}}function t(){const i=new Date,{h:l,m:d,s:u,ms:m}=r(i),p=u+m/1e3,f=d+p/60,y=l%12+f/60,g=p*6,h=f*6,S=y*30;e.setAttribute("transform",`translate(25 25) rotate(${g})`),o.setAttribute("transform",`translate(25 25) rotate(${h})`),c.setAttribute("transform",`translate(25 25) rotate(${S})`),requestAnimationFrame(t)}t()})}w(),v(),E(),L(),_(),b(),A();
