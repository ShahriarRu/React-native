import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ZvHe4VloN3DNcaACDmWNpVmSP0r3wpbos194ZqxsJ_DlYAcUh7m1sqnHQNcOtj5b58N8SYRwS2MzgBwx4lUOjBlJb5Deb--AGEWmaher7vbrtaYTU1awx0ln65D7YXYx",
  },
});
