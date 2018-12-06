import {
  APIDef,
  Success201,
  ResponseDef,
  Error400,
  POST,
  PATCH,
  Capture
} from "agreed-typed";

/**
 * @description userの型定義
 */
type User = {
  /**
   * @description email
   * @pattern ^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
   */
  email: string;
  /**
   * @description 氏名
   */
  name: string;
  /**
   * @description パスワード(半角英字と半角数字それぞれ1文字以上含む8文字以上20文字以下の文字列)
   * @pattern ^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$
   */
  password: string;
  /**
   * @description 年齢
   * @TJS-type integer
   * @minimum 0
   * @maximum 100
   */
  age: number;
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

/**
 * @description error messages
 * 同じstatus codeのエラーmessageはunion typeで定義すると便利
 */
type errorMessages = "password too week" | "user already exists";
