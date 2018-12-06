import {
  APIDef,
  Success201,
  ResponseDef,
  Error400,
  POST,
  PATCH,
  Capture
} from "agreed-typed";

type User = {
  email: string;
  name: string;
  password: string;
};

/**
 * @summary User Createg API
 * @description User作成API
 * Errorパターン
 * - user already exists
 *   - emailが重複している場合
 * - password too week
 *   - passwordが弱すぎる場合
 */
export type UserPOSTAPI = APIDef<
  POST, // HTTP Method
  ["user"], // request path => /user/:id
  {}, // request header
  {}, // request query
  User,
  {}, // response header
  | ResponseDef<Success201, { id: number }>
  | ResponseDef<Error400, { message: errorMessages }> // response
>;

export type UserPatchAPI = APIDef<
  PATCH,
  ["user", Capture<":id">],
  {},
  {},
  Partial<User>,
  {},
  | ResponseDef<Success201, { id: number }>
  | ResponseDef<Error400, { message: errorMessages }> // response
>;

/**
 * @description error messages
 * 同じstatus codeのエラーmessageはunion typeで定義すると便利
 */
type errorMessages = "password too week" | "user already exists";
