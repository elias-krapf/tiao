import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
const app = createApp(App);
app.use(router);

/* import default components */
import PanelPage from "@/components/view/panel/page/PanelPage";
app.component('panel-page', PanelPage);

/* import default mixins */
import {screenMixin} from "@/mixins/screenMixin";
app.mixin(screenMixin);

app.mount('#app')
