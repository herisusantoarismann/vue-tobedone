import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPlus,
  faAngleLeft,
  faPencil,
  faFloppyDisk,
  faTrashCan,
  faSort,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add([
  faPlus,
  faAngleLeft,
  faPencil,
  faFloppyDisk,
  faTrashCan,
  faSort,
  faXmark,
]);
import { router } from "./router/";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
  .use(router)
  .use(VueSweetalert2)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
