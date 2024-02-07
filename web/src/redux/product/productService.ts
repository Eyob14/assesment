import http from "../../http-common";

const getFirstAPI = () => {
  return http.get("/main-banner/all");
};

const getSecondAPI = () => {
  return http.get("/main-shortcut/all");
};

const getThirdAPI = () => {
  return http.get("/", { params: { prearrangedDiscount: "" } });
};


const productService = {
  getFirstAPI,
  getSecondAPI,
  getThirdAPI,

};

export default productService;
