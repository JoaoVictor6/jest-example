import "core-js/stable";
import "regenerator-runtime/runtime";
import http from "./utils/axios";

async function sendHelloWorld(name) {
  const { data } = await http.get("/hello", {
    params: {name},
  })
  return data
}

export default sendHelloWorld