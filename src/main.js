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

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
