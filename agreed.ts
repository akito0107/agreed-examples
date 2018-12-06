import {
  APIDef,
  GET,
  Capture,
  Success200,
  ResponseDef,
  convert,
  Error404
} from "agreed-typed";

/**
 * @summary User Greeting API
 * @description Userに挨拶を返すAPI
 * Errorパターン
 * - user not found
 *   - `id`が見つからなかった場合
 */
export type UserGetAPI = APIDef<
  GET, // HTTP Method
  ["user", Capture<":id">], // request path => /user/:id
  {}, // request header
  {}, // request query
  undefined, // request body
  {}, // response header
  | ResponseDef<Success200, { message: string }>
  | ResponseDef<Error404, { message: "user not found" }> // response
>;

const api: Array<UserGetAPI> = [
  {
    request: {
      path: ["user", "123"], // Capture<:id, number>として定義
      method: "GET",
      body: undefined
    },
    response: {
      status: 200,
      body: {
        message: "hello {:id}"
      }
    }
  },
  {
    request: {
      path: ["user", "999"],
      method: "GET",
      body: undefined
    },
    response: {
      status: 404,
      body: { message: "user not found" }
    }
  }
];

module.exports = convert(...api);
