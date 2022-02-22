import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ1OTFkZDMxZWU3NzNlOTE1YTI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTMwNDA4NywiZXhwIjoxNjQ1NTYzMjg3fQ.GmauIPIYeEXDS-m3EwkGi29K8bOlrrDkN-VcfVLv-Kg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
