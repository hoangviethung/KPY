import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
});
