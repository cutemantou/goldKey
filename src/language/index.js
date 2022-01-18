import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './language_en'
import usLocal from './language_cn'
import { getStore } from '@/util/store'
Vue.use(VueI18n);
const messages = {
    en: {
        ...enLocale
    },
    cn: {
        ...usLocal
    }
}
const i18n = new VueI18n({
    locale: getStore({name:'language'})||'cn',
    messages,
});
 
export default i18n;