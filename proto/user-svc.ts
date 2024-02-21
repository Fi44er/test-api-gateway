/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Any } from "./google/protobuf/any";

export const protobufPackage = "user";

export enum Role {
  USER = 0,
  ADMIN = 1,
  UNRECOGNIZED = -1,
}

export interface UserRes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export interface IdOrEmail {
  idOrEmail: string;
}

export interface JwtPayload {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface DeleteId {
  id: number;
}

export interface DeleteReq {
  DeleteId: DeleteId | undefined;
  JwtPayload: JwtPayload | undefined;
}

/** ----------------------------------- Auth -------------------------------------- // */
export interface Response {
  data: Any | undefined;
  metadata: { [key: string]: Any };
}

export interface Response_MetadataEntry {
  key: string;
  value: Any | undefined;
}

export interface Agent {
  agent: string;
}

export interface Token {
  token: string;
  exp: Date;
  userId: number;
  userAgent: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: Token | undefined;
}

/** ---------------------------- Register --------------------------- // */
export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface RegisterRes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export interface RefreshTokenReq {
  refreshToken: string;
  res: Response | undefined;
  agent: Agent | undefined;
}

export interface RegisterReq {
  dto: RegisterDTO | undefined;
}

export interface LoginReq {
  dto: LoginDTO | undefined;
  cookie: string;
  agent: string;
}

export interface LogoutReq {
  refreshToken: RefreshToken | undefined;
  res: Response | undefined;
}

export interface RefreshTokenRes {
  refreshToken: RefreshToken | undefined;
  res: Response | undefined;
  agent: Agent | undefined;
}

export const USER_PACKAGE_NAME = "user";

export interface UserControllerClient {
  findOneUser(request: IdOrEmail): Observable<UserRes>;

  deleteUser(request: DeleteReq): Observable<DeleteId>;
}

export interface UserControllerController {
  findOneUser(request: IdOrEmail): Promise<UserRes> | Observable<UserRes> | UserRes;

  deleteUser(request: DeleteReq): Promise<DeleteId> | Observable<DeleteId> | DeleteId;
}

export function UserControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOneUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_CONTROLLER_SERVICE_NAME = "UserController";

export interface AuthControllerClient {
  register(request: RegisterReq): Observable<RegisterRes>;

  login(request: LoginReq): Observable<Tokens>;

  logout(request: LogoutReq): Observable<Response>;

  refreshToken(request: RefreshTokenReq): Observable<Response>;
}

export interface AuthControllerController {
  register(request: RegisterReq): Promise<RegisterRes> | Observable<RegisterRes> | RegisterRes;

  login(request: LoginReq): Promise<Tokens> | Observable<Tokens> | Tokens;

  logout(request: LogoutReq): Promise<Response> | Observable<Response> | Response;

  refreshToken(request: RefreshTokenReq): Promise<Response> | Observable<Response> | Response;
}

export function AuthControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "login", "logout", "refreshToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_CONTROLLER_SERVICE_NAME = "AuthController";
