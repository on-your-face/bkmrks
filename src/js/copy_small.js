export function initCopySmall() {
   console.log('initCopySmall: скрипт инициализирован');

   document.querySelectorAll('a.copy').forEach((link) => {
      console.log('initCopySmall: найден элемент', link);

      link.addEventListener('click', (event) => {
         event.preventDefault();
         event.stopPropagation();

         // Убираем хэш, если он появился в URL
         history.pushState('', document.title, window.location.pathname + window.location.search);

         console.log('initCopySmall: клик по элементу', link);

         const href = link.getAttribute('href');
         if (!href) {
            console.warn('initCopySmall: href пустой');
            return;
         }

         navigator.clipboard
            .writeText(href)
            .then(() => {
               console.log(`initCopySmall: скопировано в буфер — ${href}`);
            })
            .catch((err) => {
               console.error('initCopySmall: ошибка копирования', err);
            });
      });
   });
}
