// Import our custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

library.add(faStarFilled, faStarEmpty);

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
