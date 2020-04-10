import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
 
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
