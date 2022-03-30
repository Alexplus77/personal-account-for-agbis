import jsSHA from "jssha";
import axios from "axios";

export const fetchAuthUser = (dataForm) => (dispatch) => {
  const shaObj = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
  const phone = "+79000000001";
  shaObj.update(dataForm.password);
  const hash = shaObj.getHash("HEX");
  console.log(dataForm);
  const uri_encoded = encodeURIComponent(
    '{"phone":' + `"${dataForm.phone}"` + "," + '"pwd":' + `"${hash}"` + "}"
  );

  axios
    .get(`https://himinfo.net/cl/test/api/?ModernLogin=${uri_encoded}`)
    .then(({ data }) => console.log("data", data));
};
