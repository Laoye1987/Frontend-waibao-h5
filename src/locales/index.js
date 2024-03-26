import { createI18n } from 'vue-i18n';

// 导入你自己创建的语言 js 文件
import zh from './lang/zh.js';
import en from './lang/en.js';
import ar from './lang/ar.js';
import de from './lang/de.js';
import fr from './lang/fr.js';
import ja from './lang/ja.js';
import ko from './lang/ko.js';
import ru from './lang/ru.js';
import th from './lang/th.js';


// 创建 i18n 对象
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    'zh': zh,
    'en': en,
    'ar': ar,
    'de': de,
    'fr': fr,
    'ja': ja,
    'ko': ko,
    'ru': ru,
    'th': th
  }
});

export default i18n;
