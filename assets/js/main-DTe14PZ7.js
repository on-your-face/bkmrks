(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=a(n);fetch(n.href,e)}})();async function u(){const s=["1rem OpenSans","1rem Lora-Regular"];await Promise.all(s.map(o=>document.fonts.load(o)))}function m(){document.querySelectorAll("a.new_tab").forEach(s=>{s.setAttribute("target","_blank"),s.setAttribute("rel","noopener noreferrer")})}function p(){const s=()=>{document.body.style.overflow="",document.body.style.paddingRight=""},o=()=>{document.querySelectorAll(".tags.content__wrapper").forEach(e=>e.classList.remove("open__tags")),document.querySelectorAll('a.anchor[href^="#"]').forEach(e=>e.style.opacity="")};document.querySelectorAll(".element[data-modal-id]").forEach(e=>e.addEventListener("click",()=>{const r=document.getElementById(e.dataset.modalId);if(!r)return;r.classList.add("open__main");const t=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${t}px`})),document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const r=document.querySelector(".modal.open__main");r&&(r.classList.remove("open__main"),s(),o())},{capture:!0}),document.querySelectorAll('a.anchor[href^="#"]').forEach(e=>e.addEventListener("click",r=>{r.preventDefault();const t=document.getElementById(e.getAttribute("href").slice(1));if(!t?.classList.contains("tags")||!t.classList.contains("content__wrapper"))return;const c=t.classList.contains("open__tags");o(),c||(t.classList.add("open__tags"),e.style.opacity="1")}));let a=0,i=!1;const n=()=>{const e=document.querySelector(".modal.open__main[data-swipe]");e&&delete e.dataset.swipe,i=!1};document.addEventListener("touchstart",e=>{const r=e.target.closest(".modal.open__main");r&&(a=e.touches[0].clientX,i=!0,r.dataset.swipe="1")}),document.addEventListener("touchmove",e=>{const r=document.querySelector(".modal.open__main[data-swipe]");!r||!i||a-e.touches[0].clientX>150&&(r.classList.remove("open__main"),s(),o(),n())}),document.addEventListener("touchend",n)}document.addEventListener("click",s=>{if(!s.target.closest(".new_tab"))return;const a=document.querySelector(".modal.open__main");a&&(a.classList.remove("open__main"),resetBody(),closeTags())});function f(){document.querySelectorAll("a.copy").forEach(s=>{s.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),history.pushState("",document.title,window.location.pathname+window.location.search);const a=s.getAttribute("href");a&&navigator.clipboard.writeText(a).catch(()=>{})})})}function y(){document.querySelectorAll(".copylong[data-href]").forEach(s=>{s.addEventListener("click",function(o){o.preventDefault();const a=this.getAttribute("data-href");if(a){const n={msword2007_templates:"%appdata%\\Microsoft\\Шаблоны",php_myadmin:"127.0.0.1/openserver/phpmyadmin/",stop_spooler:"net stop spooler",start_spooler:"net start spooler",new_branch:"создать новую ветку — git checkout -b имя_ветки",branch_global:"git config --global push.autoSetupRemote true",clear_spooler:'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',powershell_cd:'cd ""',cmd_cd:'cd /d ""',"cmd-start":'start "" "c:\\OSPanel\\Open Server Panel.exe"',"cmd-OSP-server-START":'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',"cmd-OSP-server-RESTART":'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',"cmd-OSP-server-STOP":'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',"cmd-OSP-domain":"http://test-wordpress/wp-admin/","git-delete (cmd)":"rmdir /s /q .git","git-push (3in1)":"git add . && git commit -m ok && git push","stop zapret":"sc stop WinDivert","regedit-autorun":"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run","close process (OSP promt)":'taskkill /IM "Open Server Panel.exe" /F',termux_iam_true:"git config --global --add safe.directory /storage/emulated/0/bookmarks","cd ~/storage/shared/bookmarks":"cd ~/storage/shared/bookmarks","termux_git-pull":"git pull origin main","block-ghost":'<div class="element ghost"></div>',waves_data:"C:\\Program Files\\Waves Central\\","directory-buttery-taskbar":"C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",gpt_galuni:`Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.

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

P.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.`}[a];if(n){const e=document.createElement("textarea");e.style.position="fixed",e.style.opacity="0",e.value=n,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}})})}function g(){const s=document.getElementById("searchToggle"),o=document.querySelector(".search__inner"),a=document.getElementById("search");if(!s||!o||!a)return;document.querySelectorAll(".tag.copy").forEach(t=>{const c=window.getComputedStyle(t).display;t.dataset.origDisplay=c!=="none"?c:"inline-block"});function i(){o.classList.remove("active"),a.value="",document.querySelectorAll(".tag.copy").forEach(t=>{t.style.display=t.dataset.origDisplay})}s.addEventListener("click",()=>{o.classList.contains("active")?i():(o.classList.add("active"),a.focus())}),document.addEventListener("click",t=>{!o.contains(t.target)&&t.target!==s&&i()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&i()});let n=0,e=0,r=!1;document.addEventListener("touchstart",t=>{o.classList.contains("active")&&(n=t.touches[0].clientX,r=!0,o.dataset.isSwiping="true")}),document.addEventListener("touchmove",t=>{const c=document.querySelector(".search__inner.active[data-is-swiping='true']");c&&r&&(e=t.touches[0].clientX,n-e>100&&(i(),r=!1,delete c.dataset.isSwiping))}),document.addEventListener("touchend",()=>{const t=document.querySelector(".search__inner.active[data-is-swiping='true']");t&&(r=!1,delete t.dataset.isSwiping)}),a.addEventListener("input",()=>{const t=a.value.trim().toLowerCase();document.querySelectorAll(".tag.copy").forEach(d=>{const l=d.getAttribute("data-search-tg-password");if(!l)return;l.toLowerCase().includes(t)?d.style.display=d.dataset.origDisplay:d.style.display="none"})})}p(),m(),y(),f(),u(),g();
