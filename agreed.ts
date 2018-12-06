import {
  APIDef,
  GET,
  Capture,
  Success200,
  ResponseDef,
  convert
} from "agreed-typed";

type UserGetAPI = APIDef<
  GET, // HTTP Method
  ["user", Capture<":id">], // request path => /user/:id
  {}, // request header
  {}, // request query
  undefined, // request body
  {}, // response header
  ResponseDef<Success200, { message: string }> // response
>;

const api: Array<UserGetAPI> = [
  {
    request: {
      path: ["user", ":id"],
      method: "GET",
      body: undefined
    },
    response: {
      status: 200,
      body: { message: "hello {:id}" }
    }
  }
];

module.exports = convert(...api);
