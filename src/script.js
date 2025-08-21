// scss
import './sass/reset.scss';
import './sass/base.scss';
import './sass/fonts.scss';
import './sass/main.scss';
import './sass/modal.scss';
import './sass/tags.scss';
import './sass/search.scss';
// scripts
import { preloadFonts } from './js/preload_font.js';
import { initNewTab } from './js/new_tab.js';
import { initModal } from './js/modal.js';
import { initCopySmall } from './js/copy_small.js';
import { initCopy } from './js/copy.js';
import { initSearch } from './js/search_tg_accounts.js';
// initScript
(initModal(), initNewTab(), initCopy(), initCopySmall(), preloadFonts(), initSearch());
