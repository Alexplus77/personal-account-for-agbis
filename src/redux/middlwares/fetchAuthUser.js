import jsSHA from "jssha";
import axios from "axios";

export const fetchAuthUser = (dataForm) => (dispatch) => {
  const shaObj = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
  shaObj.update(dataForm.pwd);
  dataForm.pwd = shaObj.getHash("HEX");
  const uri_encoded = encodeURIComponent(`${JSON.stringify(dataForm)}`);
  axios
    .get(`https://himinfo.net/cl/test/api/?ModernLogin=${uri_encoded}`)
    .then(({ data }) => console.log("data", data));
};
