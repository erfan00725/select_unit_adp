
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model SelectUnit
 * 
 */
export type SelectUnit = $Result.DefaultSelection<Prisma.$SelectUnitPayload>
/**
 * Model SelectedLesson
 * 
 */
export type SelectedLesson = $Result.DefaultSelection<Prisma.$SelectedLessonPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Field
 * 
 */
export type Field = $Result.DefaultSelection<Prisma.$FieldPayload>
/**
 * Model General
 * 
 */
export type General = $Result.DefaultSelection<Prisma.$GeneralPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Grade: {
  GRADE_7: 'GRADE_7',
  GRADE_8: 'GRADE_8',
  GRADE_9: 'GRADE_9',
  GRADE_10: 'GRADE_10',
  GRADE_11: 'GRADE_11',
  GRADE_12: 'GRADE_12'
};

export type Grade = (typeof Grade)[keyof typeof Grade]


export const LessonGrade: {
  GENERAL: 'GENERAL',
  GRADE_7: 'GRADE_7',
  GRADE_8: 'GRADE_8',
  GRADE_9: 'GRADE_9',
  GRADE_10: 'GRADE_10',
  GRADE_11: 'GRADE_11',
  GRADE_12: 'GRADE_12'
};

export type LessonGrade = (typeof LessonGrade)[keyof typeof LessonGrade]


export const UserType: {
  admin: 'admin',
  user: 'user'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const Period: {
  first: 'first',
  second: 'second',
  summer: 'summer'
};

export type Period = (typeof Period)[keyof typeof Period]

}

export type Grade = $Enums.Grade

export const Grade: typeof $Enums.Grade

export type LessonGrade = $Enums.LessonGrade

export const LessonGrade: typeof $Enums.LessonGrade

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type Period = $Enums.Period

export const Period: typeof $Enums.Period

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.selectUnit`: Exposes CRUD operations for the **SelectUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SelectUnits
    * const selectUnits = await prisma.selectUnit.findMany()
    * ```
    */
  get selectUnit(): Prisma.SelectUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.selectedLesson`: Exposes CRUD operations for the **SelectedLesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SelectedLessons
    * const selectedLessons = await prisma.selectedLesson.findMany()
    * ```
    */
  get selectedLesson(): Prisma.SelectedLessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.FieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.general`: Exposes CRUD operations for the **General** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generals
    * const generals = await prisma.general.findMany()
    * ```
    */
  get general(): Prisma.GeneralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Student: 'Student',
    Lesson: 'Lesson',
    SelectUnit: 'SelectUnit',
    SelectedLesson: 'SelectedLesson',
    Payments: 'Payments',
    Field: 'Field',
    General: 'General',
    Teacher: 'Teacher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "student" | "lesson" | "selectUnit" | "selectedLesson" | "payments" | "field" | "general" | "teacher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      SelectUnit: {
        payload: Prisma.$SelectUnitPayload<ExtArgs>
        fields: Prisma.SelectUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelectUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelectUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          findFirst: {
            args: Prisma.SelectUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelectUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          findMany: {
            args: Prisma.SelectUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>[]
          }
          create: {
            args: Prisma.SelectUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          createMany: {
            args: Prisma.SelectUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SelectUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          update: {
            args: Prisma.SelectUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          deleteMany: {
            args: Prisma.SelectUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SelectUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SelectUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectUnitPayload>
          }
          aggregate: {
            args: Prisma.SelectUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelectUnit>
          }
          groupBy: {
            args: Prisma.SelectUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelectUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelectUnitCountArgs<ExtArgs>
            result: $Utils.Optional<SelectUnitCountAggregateOutputType> | number
          }
        }
      }
      SelectedLesson: {
        payload: Prisma.$SelectedLessonPayload<ExtArgs>
        fields: Prisma.SelectedLessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelectedLessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelectedLessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          findFirst: {
            args: Prisma.SelectedLessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelectedLessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          findMany: {
            args: Prisma.SelectedLessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>[]
          }
          create: {
            args: Prisma.SelectedLessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          createMany: {
            args: Prisma.SelectedLessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SelectedLessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          update: {
            args: Prisma.SelectedLessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          deleteMany: {
            args: Prisma.SelectedLessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SelectedLessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SelectedLessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelectedLessonPayload>
          }
          aggregate: {
            args: Prisma.SelectedLessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelectedLesson>
          }
          groupBy: {
            args: Prisma.SelectedLessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelectedLessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelectedLessonCountArgs<ExtArgs>
            result: $Utils.Optional<SelectedLessonCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Field: {
        payload: Prisma.$FieldPayload<ExtArgs>
        fields: Prisma.FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findFirst: {
            args: Prisma.FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findMany: {
            args: Prisma.FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          create: {
            args: Prisma.FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          createMany: {
            args: Prisma.FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          update: {
            args: Prisma.FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          deleteMany: {
            args: Prisma.FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      General: {
        payload: Prisma.$GeneralPayload<ExtArgs>
        fields: Prisma.GeneralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          findFirst: {
            args: Prisma.GeneralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          findMany: {
            args: Prisma.GeneralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>[]
          }
          create: {
            args: Prisma.GeneralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          createMany: {
            args: Prisma.GeneralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          update: {
            args: Prisma.GeneralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          deleteMany: {
            args: Prisma.GeneralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPayload>
          }
          aggregate: {
            args: Prisma.GeneralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneral>
          }
          groupBy: {
            args: Prisma.GeneralGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    student?: StudentOmit
    lesson?: LessonOmit
    selectUnit?: SelectUnitOmit
    selectedLesson?: SelectedLessonOmit
    payments?: PaymentsOmit
    field?: FieldOmit
    general?: GeneralOmit
    teacher?: TeacherOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Account: number
    Session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    selectUnits: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectUnits?: boolean | StudentCountOutputTypeCountSelectUnitsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSelectUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectUnitWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    requiredForLesson: number
    selectUnits: number
    SelectedLesson: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredForLesson?: boolean | LessonCountOutputTypeCountRequiredForLessonArgs
    selectUnits?: boolean | LessonCountOutputTypeCountSelectUnitsArgs
    SelectedLesson?: boolean | LessonCountOutputTypeCountSelectedLessonArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountRequiredForLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountSelectUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectUnitWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountSelectedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedLessonWhereInput
  }


  /**
   * Count Type SelectUnitCountOutputType
   */

  export type SelectUnitCountOutputType = {
    selectedLessons: number
    Payments: number
  }

  export type SelectUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectedLessons?: boolean | SelectUnitCountOutputTypeCountSelectedLessonsArgs
    Payments?: boolean | SelectUnitCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SelectUnitCountOutputType without action
   */
  export type SelectUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnitCountOutputType
     */
    select?: SelectUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SelectUnitCountOutputType without action
   */
  export type SelectUnitCountOutputTypeCountSelectedLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedLessonWhereInput
  }

  /**
   * SelectUnitCountOutputType without action
   */
  export type SelectUnitCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Count Type FieldCountOutputType
   */

  export type FieldCountOutputType = {
    students: number
    lessons: number
    teachers: number
  }

  export type FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | FieldCountOutputTypeCountStudentsArgs
    lessons?: boolean | FieldCountOutputTypeCountLessonsArgs
    teachers?: boolean | FieldCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCountOutputType
     */
    select?: FieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    lessons: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | TeacherCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    UserName: string | null
    Password: string | null
    Type: $Enums.UserType | null
    Created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    UserName: string | null
    Password: string | null
    Type: $Enums.UserType | null
    Created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    UserName: number
    Password: number
    Type: number
    Created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    UserName?: true
    Password?: true
    Type?: true
    Created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    UserName?: true
    Password?: true
    Type?: true
    Created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    UserName?: true
    Password?: true
    Type?: true
    Created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    UserName: string
    Password: string
    Type: $Enums.UserType | null
    Created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    UserName?: boolean
    Password?: boolean
    Type?: boolean
    Created_at?: boolean
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    UserName?: boolean
    Password?: boolean
    Type?: boolean
    Created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "UserName" | "Password" | "Type" | "Created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      UserName: string
      Password: string
      Type: $Enums.UserType | null
      Created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly UserName: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
    readonly Type: FieldRef<"User", 'UserType'>
    readonly Created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: bigint | null
    fieldId: bigint | null
  }

  export type StudentMinAggregateOutputType = {
    id: bigint | null
    FirstName: string | null
    LastName: string | null
    NationalCode: string | null
    Father: string | null
    Birth: Date | null
    Address: string | null
    HomeNumber: string | null
    PhoneNumber: string | null
    fieldId: bigint | null
    Grade: $Enums.Grade | null
    Gender: boolean | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: bigint | null
    FirstName: string | null
    LastName: string | null
    NationalCode: string | null
    Father: string | null
    Birth: Date | null
    Address: string | null
    HomeNumber: string | null
    PhoneNumber: string | null
    fieldId: bigint | null
    Grade: $Enums.Grade | null
    Gender: boolean | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    FirstName: number
    LastName: number
    NationalCode: number
    Father: number
    Birth: number
    Address: number
    HomeNumber: number
    PhoneNumber: number
    fieldId: number
    Grade: number
    Gender: number
    Updated_at: number
    Created_at: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    FirstName?: true
    LastName?: true
    NationalCode?: true
    Father?: true
    Birth?: true
    Address?: true
    HomeNumber?: true
    PhoneNumber?: true
    fieldId?: true
    Grade?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    FirstName?: true
    LastName?: true
    NationalCode?: true
    Father?: true
    Birth?: true
    Address?: true
    HomeNumber?: true
    PhoneNumber?: true
    fieldId?: true
    Grade?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    FirstName?: true
    LastName?: true
    NationalCode?: true
    Father?: true
    Birth?: true
    Address?: true
    HomeNumber?: true
    PhoneNumber?: true
    fieldId?: true
    Grade?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: bigint
    FirstName: string
    LastName: string
    NationalCode: string
    Father: string | null
    Birth: Date | null
    Address: string | null
    HomeNumber: string | null
    PhoneNumber: string | null
    fieldId: bigint
    Grade: $Enums.Grade
    Gender: boolean
    Updated_at: Date
    Created_at: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    FirstName?: boolean
    LastName?: boolean
    NationalCode?: boolean
    Father?: boolean
    Birth?: boolean
    Address?: boolean
    HomeNumber?: boolean
    PhoneNumber?: boolean
    fieldId?: boolean
    Grade?: boolean
    Gender?: boolean
    Updated_at?: boolean
    Created_at?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
    selectUnits?: boolean | Student$selectUnitsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    FirstName?: boolean
    LastName?: boolean
    NationalCode?: boolean
    Father?: boolean
    Birth?: boolean
    Address?: boolean
    HomeNumber?: boolean
    PhoneNumber?: boolean
    fieldId?: boolean
    Grade?: boolean
    Gender?: boolean
    Updated_at?: boolean
    Created_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "FirstName" | "LastName" | "NationalCode" | "Father" | "Birth" | "Address" | "HomeNumber" | "PhoneNumber" | "fieldId" | "Grade" | "Gender" | "Updated_at" | "Created_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
    selectUnits?: boolean | Student$selectUnitsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs>
      selectUnits: Prisma.$SelectUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      FirstName: string
      LastName: string
      NationalCode: string
      Father: string | null
      Birth: Date | null
      Address: string | null
      HomeNumber: string | null
      PhoneNumber: string | null
      fieldId: bigint
      Grade: $Enums.Grade
      Gender: boolean
      Updated_at: Date
      Created_at: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectUnits<T extends Student$selectUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Student$selectUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'BigInt'>
    readonly FirstName: FieldRef<"Student", 'String'>
    readonly LastName: FieldRef<"Student", 'String'>
    readonly NationalCode: FieldRef<"Student", 'String'>
    readonly Father: FieldRef<"Student", 'String'>
    readonly Birth: FieldRef<"Student", 'DateTime'>
    readonly Address: FieldRef<"Student", 'String'>
    readonly HomeNumber: FieldRef<"Student", 'String'>
    readonly PhoneNumber: FieldRef<"Student", 'String'>
    readonly fieldId: FieldRef<"Student", 'BigInt'>
    readonly Grade: FieldRef<"Student", 'Grade'>
    readonly Gender: FieldRef<"Student", 'Boolean'>
    readonly Updated_at: FieldRef<"Student", 'DateTime'>
    readonly Created_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.selectUnits
   */
  export type Student$selectUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    where?: SelectUnitWhereInput
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    cursor?: SelectUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectUnitScalarFieldEnum | SelectUnitScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    TeacherId: number | null
    PracticalUnit: number | null
    TheoriUnit: number | null
    fieldId: number | null
    PassCondition: number | null
    TheoriHours: number | null
    PracticalHours: number | null
    RequireLesson: number | null
    RequireUnit: number | null
    NotifCode: number | null
    PricePerUnit: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: bigint | null
    TeacherId: bigint | null
    PracticalUnit: number | null
    TheoriUnit: number | null
    fieldId: bigint | null
    PassCondition: number | null
    TheoriHours: number | null
    PracticalHours: number | null
    RequireLesson: bigint | null
    RequireUnit: number | null
    NotifCode: bigint | null
    PricePerUnit: bigint | null
  }

  export type LessonMinAggregateOutputType = {
    id: bigint | null
    TeacherId: bigint | null
    LessonName: string | null
    PracticalUnit: number | null
    TheoriUnit: number | null
    Grade: $Enums.LessonGrade | null
    fieldId: bigint | null
    PassCondition: number | null
    TheoriHours: number | null
    PracticalHours: number | null
    RequireLesson: bigint | null
    RequireUnit: number | null
    NotifCode: bigint | null
    ValidFrom: Date | null
    ValidTill: Date | null
    PricePerUnit: bigint | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: bigint | null
    TeacherId: bigint | null
    LessonName: string | null
    PracticalUnit: number | null
    TheoriUnit: number | null
    Grade: $Enums.LessonGrade | null
    fieldId: bigint | null
    PassCondition: number | null
    TheoriHours: number | null
    PracticalHours: number | null
    RequireLesson: bigint | null
    RequireUnit: number | null
    NotifCode: bigint | null
    ValidFrom: Date | null
    ValidTill: Date | null
    PricePerUnit: bigint | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    TeacherId: number
    LessonName: number
    PracticalUnit: number
    TheoriUnit: number
    Grade: number
    fieldId: number
    PassCondition: number
    TheoriHours: number
    PracticalHours: number
    RequireLesson: number
    RequireUnit: number
    NotifCode: number
    ValidFrom: number
    ValidTill: number
    PricePerUnit: number
    Created_at: number
    Updated_at: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    TeacherId?: true
    PracticalUnit?: true
    TheoriUnit?: true
    fieldId?: true
    PassCondition?: true
    TheoriHours?: true
    PracticalHours?: true
    RequireLesson?: true
    RequireUnit?: true
    NotifCode?: true
    PricePerUnit?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    TeacherId?: true
    PracticalUnit?: true
    TheoriUnit?: true
    fieldId?: true
    PassCondition?: true
    TheoriHours?: true
    PracticalHours?: true
    RequireLesson?: true
    RequireUnit?: true
    NotifCode?: true
    PricePerUnit?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    TeacherId?: true
    LessonName?: true
    PracticalUnit?: true
    TheoriUnit?: true
    Grade?: true
    fieldId?: true
    PassCondition?: true
    TheoriHours?: true
    PracticalHours?: true
    RequireLesson?: true
    RequireUnit?: true
    NotifCode?: true
    ValidFrom?: true
    ValidTill?: true
    PricePerUnit?: true
    Created_at?: true
    Updated_at?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    TeacherId?: true
    LessonName?: true
    PracticalUnit?: true
    TheoriUnit?: true
    Grade?: true
    fieldId?: true
    PassCondition?: true
    TheoriHours?: true
    PracticalHours?: true
    RequireLesson?: true
    RequireUnit?: true
    NotifCode?: true
    ValidFrom?: true
    ValidTill?: true
    PricePerUnit?: true
    Created_at?: true
    Updated_at?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    TeacherId?: true
    LessonName?: true
    PracticalUnit?: true
    TheoriUnit?: true
    Grade?: true
    fieldId?: true
    PassCondition?: true
    TheoriHours?: true
    PracticalHours?: true
    RequireLesson?: true
    RequireUnit?: true
    NotifCode?: true
    ValidFrom?: true
    ValidTill?: true
    PricePerUnit?: true
    Created_at?: true
    Updated_at?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: bigint
    TeacherId: bigint | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade: $Enums.LessonGrade | null
    fieldId: bigint | null
    PassCondition: number | null
    TheoriHours: number | null
    PracticalHours: number | null
    RequireLesson: bigint | null
    RequireUnit: number | null
    NotifCode: bigint | null
    ValidFrom: Date | null
    ValidTill: Date | null
    PricePerUnit: bigint | null
    Created_at: Date
    Updated_at: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    TeacherId?: boolean
    LessonName?: boolean
    PracticalUnit?: boolean
    TheoriUnit?: boolean
    Grade?: boolean
    fieldId?: boolean
    PassCondition?: boolean
    TheoriHours?: boolean
    PracticalHours?: boolean
    RequireLesson?: boolean
    RequireUnit?: boolean
    NotifCode?: boolean
    ValidFrom?: boolean
    ValidTill?: boolean
    PricePerUnit?: boolean
    Created_at?: boolean
    Updated_at?: boolean
    field?: boolean | Lesson$fieldArgs<ExtArgs>
    teacher?: boolean | Lesson$teacherArgs<ExtArgs>
    requiredForLesson?: boolean | Lesson$requiredForLessonArgs<ExtArgs>
    requiresLesson?: boolean | Lesson$requiresLessonArgs<ExtArgs>
    selectUnits?: boolean | Lesson$selectUnitsArgs<ExtArgs>
    SelectedLesson?: boolean | Lesson$SelectedLessonArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>



  export type LessonSelectScalar = {
    id?: boolean
    TeacherId?: boolean
    LessonName?: boolean
    PracticalUnit?: boolean
    TheoriUnit?: boolean
    Grade?: boolean
    fieldId?: boolean
    PassCondition?: boolean
    TheoriHours?: boolean
    PracticalHours?: boolean
    RequireLesson?: boolean
    RequireUnit?: boolean
    NotifCode?: boolean
    ValidFrom?: boolean
    ValidTill?: boolean
    PricePerUnit?: boolean
    Created_at?: boolean
    Updated_at?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "TeacherId" | "LessonName" | "PracticalUnit" | "TheoriUnit" | "Grade" | "fieldId" | "PassCondition" | "TheoriHours" | "PracticalHours" | "RequireLesson" | "RequireUnit" | "NotifCode" | "ValidFrom" | "ValidTill" | "PricePerUnit" | "Created_at" | "Updated_at", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | Lesson$fieldArgs<ExtArgs>
    teacher?: boolean | Lesson$teacherArgs<ExtArgs>
    requiredForLesson?: boolean | Lesson$requiredForLessonArgs<ExtArgs>
    requiresLesson?: boolean | Lesson$requiresLessonArgs<ExtArgs>
    selectUnits?: boolean | Lesson$selectUnitsArgs<ExtArgs>
    SelectedLesson?: boolean | Lesson$SelectedLessonArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs> | null
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      requiredForLesson: Prisma.$LessonPayload<ExtArgs>[]
      requiresLesson: Prisma.$LessonPayload<ExtArgs> | null
      selectUnits: Prisma.$SelectUnitPayload<ExtArgs>[]
      SelectedLesson: Prisma.$SelectedLessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      TeacherId: bigint | null
      LessonName: string
      PracticalUnit: number
      TheoriUnit: number
      Grade: $Enums.LessonGrade | null
      fieldId: bigint | null
      PassCondition: number | null
      TheoriHours: number | null
      PracticalHours: number | null
      RequireLesson: bigint | null
      RequireUnit: number | null
      NotifCode: bigint | null
      ValidFrom: Date | null
      ValidTill: Date | null
      PricePerUnit: bigint | null
      Created_at: Date
      Updated_at: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends Lesson$fieldArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$fieldArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teacher<T extends Lesson$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requiredForLesson<T extends Lesson$requiredForLessonArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$requiredForLessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requiresLesson<T extends Lesson$requiresLessonArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$requiresLessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    selectUnits<T extends Lesson$selectUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$selectUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SelectedLesson<T extends Lesson$SelectedLessonArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$SelectedLessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'BigInt'>
    readonly TeacherId: FieldRef<"Lesson", 'BigInt'>
    readonly LessonName: FieldRef<"Lesson", 'String'>
    readonly PracticalUnit: FieldRef<"Lesson", 'Int'>
    readonly TheoriUnit: FieldRef<"Lesson", 'Int'>
    readonly Grade: FieldRef<"Lesson", 'LessonGrade'>
    readonly fieldId: FieldRef<"Lesson", 'BigInt'>
    readonly PassCondition: FieldRef<"Lesson", 'Int'>
    readonly TheoriHours: FieldRef<"Lesson", 'Int'>
    readonly PracticalHours: FieldRef<"Lesson", 'Int'>
    readonly RequireLesson: FieldRef<"Lesson", 'BigInt'>
    readonly RequireUnit: FieldRef<"Lesson", 'Int'>
    readonly NotifCode: FieldRef<"Lesson", 'BigInt'>
    readonly ValidFrom: FieldRef<"Lesson", 'DateTime'>
    readonly ValidTill: FieldRef<"Lesson", 'DateTime'>
    readonly PricePerUnit: FieldRef<"Lesson", 'BigInt'>
    readonly Created_at: FieldRef<"Lesson", 'DateTime'>
    readonly Updated_at: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.field
   */
  export type Lesson$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
  }

  /**
   * Lesson.teacher
   */
  export type Lesson$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Lesson.requiredForLesson
   */
  export type Lesson$requiredForLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson.requiresLesson
   */
  export type Lesson$requiresLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * Lesson.selectUnits
   */
  export type Lesson$selectUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    where?: SelectUnitWhereInput
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    cursor?: SelectUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectUnitScalarFieldEnum | SelectUnitScalarFieldEnum[]
  }

  /**
   * Lesson.SelectedLesson
   */
  export type Lesson$SelectedLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    where?: SelectedLessonWhereInput
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    cursor?: SelectedLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectedLessonScalarFieldEnum | SelectedLessonScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model SelectUnit
   */

  export type AggregateSelectUnit = {
    _count: SelectUnitCountAggregateOutputType | null
    _avg: SelectUnitAvgAggregateOutputType | null
    _sum: SelectUnitSumAggregateOutputType | null
    _min: SelectUnitMinAggregateOutputType | null
    _max: SelectUnitMaxAggregateOutputType | null
  }

  export type SelectUnitAvgAggregateOutputType = {
    id: number | null
    StudentId: number | null
    Year: number | null
    ExtraFee: number | null
    FixedFee: number | null
    CertificateFee: number | null
    ExtraClassFee: number | null
    BooksFee: number | null
    Discount: number | null
    lessonId: number | null
  }

  export type SelectUnitSumAggregateOutputType = {
    id: bigint | null
    StudentId: bigint | null
    Year: number | null
    ExtraFee: bigint | null
    FixedFee: bigint | null
    CertificateFee: bigint | null
    ExtraClassFee: bigint | null
    BooksFee: bigint | null
    Discount: bigint | null
    lessonId: bigint | null
  }

  export type SelectUnitMinAggregateOutputType = {
    id: bigint | null
    StudentId: bigint | null
    Year: number | null
    Period: $Enums.Period | null
    ExtraFee: bigint | null
    FixedFee: bigint | null
    CertificateFee: bigint | null
    ExtraClassFee: bigint | null
    BooksFee: bigint | null
    Discount: bigint | null
    Paid: boolean | null
    Created_at: Date | null
    Updated_at: Date | null
    lessonId: bigint | null
  }

  export type SelectUnitMaxAggregateOutputType = {
    id: bigint | null
    StudentId: bigint | null
    Year: number | null
    Period: $Enums.Period | null
    ExtraFee: bigint | null
    FixedFee: bigint | null
    CertificateFee: bigint | null
    ExtraClassFee: bigint | null
    BooksFee: bigint | null
    Discount: bigint | null
    Paid: boolean | null
    Created_at: Date | null
    Updated_at: Date | null
    lessonId: bigint | null
  }

  export type SelectUnitCountAggregateOutputType = {
    id: number
    StudentId: number
    Year: number
    Period: number
    ExtraFee: number
    FixedFee: number
    CertificateFee: number
    ExtraClassFee: number
    BooksFee: number
    Discount: number
    Paid: number
    Created_at: number
    Updated_at: number
    lessonId: number
    _all: number
  }


  export type SelectUnitAvgAggregateInputType = {
    id?: true
    StudentId?: true
    Year?: true
    ExtraFee?: true
    FixedFee?: true
    CertificateFee?: true
    ExtraClassFee?: true
    BooksFee?: true
    Discount?: true
    lessonId?: true
  }

  export type SelectUnitSumAggregateInputType = {
    id?: true
    StudentId?: true
    Year?: true
    ExtraFee?: true
    FixedFee?: true
    CertificateFee?: true
    ExtraClassFee?: true
    BooksFee?: true
    Discount?: true
    lessonId?: true
  }

  export type SelectUnitMinAggregateInputType = {
    id?: true
    StudentId?: true
    Year?: true
    Period?: true
    ExtraFee?: true
    FixedFee?: true
    CertificateFee?: true
    ExtraClassFee?: true
    BooksFee?: true
    Discount?: true
    Paid?: true
    Created_at?: true
    Updated_at?: true
    lessonId?: true
  }

  export type SelectUnitMaxAggregateInputType = {
    id?: true
    StudentId?: true
    Year?: true
    Period?: true
    ExtraFee?: true
    FixedFee?: true
    CertificateFee?: true
    ExtraClassFee?: true
    BooksFee?: true
    Discount?: true
    Paid?: true
    Created_at?: true
    Updated_at?: true
    lessonId?: true
  }

  export type SelectUnitCountAggregateInputType = {
    id?: true
    StudentId?: true
    Year?: true
    Period?: true
    ExtraFee?: true
    FixedFee?: true
    CertificateFee?: true
    ExtraClassFee?: true
    BooksFee?: true
    Discount?: true
    Paid?: true
    Created_at?: true
    Updated_at?: true
    lessonId?: true
    _all?: true
  }

  export type SelectUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectUnit to aggregate.
     */
    where?: SelectUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectUnits to fetch.
     */
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelectUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SelectUnits
    **/
    _count?: true | SelectUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelectUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelectUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelectUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelectUnitMaxAggregateInputType
  }

  export type GetSelectUnitAggregateType<T extends SelectUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateSelectUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelectUnit[P]>
      : GetScalarType<T[P], AggregateSelectUnit[P]>
  }




  export type SelectUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectUnitWhereInput
    orderBy?: SelectUnitOrderByWithAggregationInput | SelectUnitOrderByWithAggregationInput[]
    by: SelectUnitScalarFieldEnum[] | SelectUnitScalarFieldEnum
    having?: SelectUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelectUnitCountAggregateInputType | true
    _avg?: SelectUnitAvgAggregateInputType
    _sum?: SelectUnitSumAggregateInputType
    _min?: SelectUnitMinAggregateInputType
    _max?: SelectUnitMaxAggregateInputType
  }

  export type SelectUnitGroupByOutputType = {
    id: bigint
    StudentId: bigint
    Year: number
    Period: $Enums.Period
    ExtraFee: bigint | null
    FixedFee: bigint | null
    CertificateFee: bigint | null
    ExtraClassFee: bigint | null
    BooksFee: bigint | null
    Discount: bigint | null
    Paid: boolean
    Created_at: Date
    Updated_at: Date
    lessonId: bigint | null
    _count: SelectUnitCountAggregateOutputType | null
    _avg: SelectUnitAvgAggregateOutputType | null
    _sum: SelectUnitSumAggregateOutputType | null
    _min: SelectUnitMinAggregateOutputType | null
    _max: SelectUnitMaxAggregateOutputType | null
  }

  type GetSelectUnitGroupByPayload<T extends SelectUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelectUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelectUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelectUnitGroupByOutputType[P]>
            : GetScalarType<T[P], SelectUnitGroupByOutputType[P]>
        }
      >
    >


  export type SelectUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StudentId?: boolean
    Year?: boolean
    Period?: boolean
    ExtraFee?: boolean
    FixedFee?: boolean
    CertificateFee?: boolean
    ExtraClassFee?: boolean
    BooksFee?: boolean
    Discount?: boolean
    Paid?: boolean
    Created_at?: boolean
    Updated_at?: boolean
    lessonId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    selectedLessons?: boolean | SelectUnit$selectedLessonsArgs<ExtArgs>
    Lesson?: boolean | SelectUnit$LessonArgs<ExtArgs>
    Payments?: boolean | SelectUnit$PaymentsArgs<ExtArgs>
    _count?: boolean | SelectUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selectUnit"]>



  export type SelectUnitSelectScalar = {
    id?: boolean
    StudentId?: boolean
    Year?: boolean
    Period?: boolean
    ExtraFee?: boolean
    FixedFee?: boolean
    CertificateFee?: boolean
    ExtraClassFee?: boolean
    BooksFee?: boolean
    Discount?: boolean
    Paid?: boolean
    Created_at?: boolean
    Updated_at?: boolean
    lessonId?: boolean
  }

  export type SelectUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "StudentId" | "Year" | "Period" | "ExtraFee" | "FixedFee" | "CertificateFee" | "ExtraClassFee" | "BooksFee" | "Discount" | "Paid" | "Created_at" | "Updated_at" | "lessonId", ExtArgs["result"]["selectUnit"]>
  export type SelectUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    selectedLessons?: boolean | SelectUnit$selectedLessonsArgs<ExtArgs>
    Lesson?: boolean | SelectUnit$LessonArgs<ExtArgs>
    Payments?: boolean | SelectUnit$PaymentsArgs<ExtArgs>
    _count?: boolean | SelectUnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SelectUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SelectUnit"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      selectedLessons: Prisma.$SelectedLessonPayload<ExtArgs>[]
      Lesson: Prisma.$LessonPayload<ExtArgs> | null
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      StudentId: bigint
      Year: number
      Period: $Enums.Period
      ExtraFee: bigint | null
      FixedFee: bigint | null
      CertificateFee: bigint | null
      ExtraClassFee: bigint | null
      BooksFee: bigint | null
      Discount: bigint | null
      Paid: boolean
      Created_at: Date
      Updated_at: Date
      lessonId: bigint | null
    }, ExtArgs["result"]["selectUnit"]>
    composites: {}
  }

  type SelectUnitGetPayload<S extends boolean | null | undefined | SelectUnitDefaultArgs> = $Result.GetResult<Prisma.$SelectUnitPayload, S>

  type SelectUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SelectUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SelectUnitCountAggregateInputType | true
    }

  export interface SelectUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SelectUnit'], meta: { name: 'SelectUnit' } }
    /**
     * Find zero or one SelectUnit that matches the filter.
     * @param {SelectUnitFindUniqueArgs} args - Arguments to find a SelectUnit
     * @example
     * // Get one SelectUnit
     * const selectUnit = await prisma.selectUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SelectUnitFindUniqueArgs>(args: SelectSubset<T, SelectUnitFindUniqueArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SelectUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SelectUnitFindUniqueOrThrowArgs} args - Arguments to find a SelectUnit
     * @example
     * // Get one SelectUnit
     * const selectUnit = await prisma.selectUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SelectUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, SelectUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitFindFirstArgs} args - Arguments to find a SelectUnit
     * @example
     * // Get one SelectUnit
     * const selectUnit = await prisma.selectUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SelectUnitFindFirstArgs>(args?: SelectSubset<T, SelectUnitFindFirstArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitFindFirstOrThrowArgs} args - Arguments to find a SelectUnit
     * @example
     * // Get one SelectUnit
     * const selectUnit = await prisma.selectUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SelectUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, SelectUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SelectUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SelectUnits
     * const selectUnits = await prisma.selectUnit.findMany()
     * 
     * // Get first 10 SelectUnits
     * const selectUnits = await prisma.selectUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selectUnitWithIdOnly = await prisma.selectUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SelectUnitFindManyArgs>(args?: SelectSubset<T, SelectUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SelectUnit.
     * @param {SelectUnitCreateArgs} args - Arguments to create a SelectUnit.
     * @example
     * // Create one SelectUnit
     * const SelectUnit = await prisma.selectUnit.create({
     *   data: {
     *     // ... data to create a SelectUnit
     *   }
     * })
     * 
     */
    create<T extends SelectUnitCreateArgs>(args: SelectSubset<T, SelectUnitCreateArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SelectUnits.
     * @param {SelectUnitCreateManyArgs} args - Arguments to create many SelectUnits.
     * @example
     * // Create many SelectUnits
     * const selectUnit = await prisma.selectUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SelectUnitCreateManyArgs>(args?: SelectSubset<T, SelectUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SelectUnit.
     * @param {SelectUnitDeleteArgs} args - Arguments to delete one SelectUnit.
     * @example
     * // Delete one SelectUnit
     * const SelectUnit = await prisma.selectUnit.delete({
     *   where: {
     *     // ... filter to delete one SelectUnit
     *   }
     * })
     * 
     */
    delete<T extends SelectUnitDeleteArgs>(args: SelectSubset<T, SelectUnitDeleteArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SelectUnit.
     * @param {SelectUnitUpdateArgs} args - Arguments to update one SelectUnit.
     * @example
     * // Update one SelectUnit
     * const selectUnit = await prisma.selectUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SelectUnitUpdateArgs>(args: SelectSubset<T, SelectUnitUpdateArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SelectUnits.
     * @param {SelectUnitDeleteManyArgs} args - Arguments to filter SelectUnits to delete.
     * @example
     * // Delete a few SelectUnits
     * const { count } = await prisma.selectUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SelectUnitDeleteManyArgs>(args?: SelectSubset<T, SelectUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelectUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SelectUnits
     * const selectUnit = await prisma.selectUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SelectUnitUpdateManyArgs>(args: SelectSubset<T, SelectUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SelectUnit.
     * @param {SelectUnitUpsertArgs} args - Arguments to update or create a SelectUnit.
     * @example
     * // Update or create a SelectUnit
     * const selectUnit = await prisma.selectUnit.upsert({
     *   create: {
     *     // ... data to create a SelectUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SelectUnit we want to update
     *   }
     * })
     */
    upsert<T extends SelectUnitUpsertArgs>(args: SelectSubset<T, SelectUnitUpsertArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SelectUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitCountArgs} args - Arguments to filter SelectUnits to count.
     * @example
     * // Count the number of SelectUnits
     * const count = await prisma.selectUnit.count({
     *   where: {
     *     // ... the filter for the SelectUnits we want to count
     *   }
     * })
    **/
    count<T extends SelectUnitCountArgs>(
      args?: Subset<T, SelectUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelectUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SelectUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SelectUnitAggregateArgs>(args: Subset<T, SelectUnitAggregateArgs>): Prisma.PrismaPromise<GetSelectUnitAggregateType<T>>

    /**
     * Group by SelectUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SelectUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelectUnitGroupByArgs['orderBy'] }
        : { orderBy?: SelectUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SelectUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SelectUnit model
   */
  readonly fields: SelectUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SelectUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelectUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedLessons<T extends SelectUnit$selectedLessonsArgs<ExtArgs> = {}>(args?: Subset<T, SelectUnit$selectedLessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Lesson<T extends SelectUnit$LessonArgs<ExtArgs> = {}>(args?: Subset<T, SelectUnit$LessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Payments<T extends SelectUnit$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, SelectUnit$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SelectUnit model
   */
  interface SelectUnitFieldRefs {
    readonly id: FieldRef<"SelectUnit", 'BigInt'>
    readonly StudentId: FieldRef<"SelectUnit", 'BigInt'>
    readonly Year: FieldRef<"SelectUnit", 'Int'>
    readonly Period: FieldRef<"SelectUnit", 'Period'>
    readonly ExtraFee: FieldRef<"SelectUnit", 'BigInt'>
    readonly FixedFee: FieldRef<"SelectUnit", 'BigInt'>
    readonly CertificateFee: FieldRef<"SelectUnit", 'BigInt'>
    readonly ExtraClassFee: FieldRef<"SelectUnit", 'BigInt'>
    readonly BooksFee: FieldRef<"SelectUnit", 'BigInt'>
    readonly Discount: FieldRef<"SelectUnit", 'BigInt'>
    readonly Paid: FieldRef<"SelectUnit", 'Boolean'>
    readonly Created_at: FieldRef<"SelectUnit", 'DateTime'>
    readonly Updated_at: FieldRef<"SelectUnit", 'DateTime'>
    readonly lessonId: FieldRef<"SelectUnit", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * SelectUnit findUnique
   */
  export type SelectUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter, which SelectUnit to fetch.
     */
    where: SelectUnitWhereUniqueInput
  }

  /**
   * SelectUnit findUniqueOrThrow
   */
  export type SelectUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter, which SelectUnit to fetch.
     */
    where: SelectUnitWhereUniqueInput
  }

  /**
   * SelectUnit findFirst
   */
  export type SelectUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter, which SelectUnit to fetch.
     */
    where?: SelectUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectUnits to fetch.
     */
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectUnits.
     */
    cursor?: SelectUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectUnits.
     */
    distinct?: SelectUnitScalarFieldEnum | SelectUnitScalarFieldEnum[]
  }

  /**
   * SelectUnit findFirstOrThrow
   */
  export type SelectUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter, which SelectUnit to fetch.
     */
    where?: SelectUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectUnits to fetch.
     */
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectUnits.
     */
    cursor?: SelectUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectUnits.
     */
    distinct?: SelectUnitScalarFieldEnum | SelectUnitScalarFieldEnum[]
  }

  /**
   * SelectUnit findMany
   */
  export type SelectUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter, which SelectUnits to fetch.
     */
    where?: SelectUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectUnits to fetch.
     */
    orderBy?: SelectUnitOrderByWithRelationInput | SelectUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SelectUnits.
     */
    cursor?: SelectUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectUnits.
     */
    skip?: number
    distinct?: SelectUnitScalarFieldEnum | SelectUnitScalarFieldEnum[]
  }

  /**
   * SelectUnit create
   */
  export type SelectUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a SelectUnit.
     */
    data: XOR<SelectUnitCreateInput, SelectUnitUncheckedCreateInput>
  }

  /**
   * SelectUnit createMany
   */
  export type SelectUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SelectUnits.
     */
    data: SelectUnitCreateManyInput | SelectUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SelectUnit update
   */
  export type SelectUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a SelectUnit.
     */
    data: XOR<SelectUnitUpdateInput, SelectUnitUncheckedUpdateInput>
    /**
     * Choose, which SelectUnit to update.
     */
    where: SelectUnitWhereUniqueInput
  }

  /**
   * SelectUnit updateMany
   */
  export type SelectUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SelectUnits.
     */
    data: XOR<SelectUnitUpdateManyMutationInput, SelectUnitUncheckedUpdateManyInput>
    /**
     * Filter which SelectUnits to update
     */
    where?: SelectUnitWhereInput
    /**
     * Limit how many SelectUnits to update.
     */
    limit?: number
  }

  /**
   * SelectUnit upsert
   */
  export type SelectUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the SelectUnit to update in case it exists.
     */
    where: SelectUnitWhereUniqueInput
    /**
     * In case the SelectUnit found by the `where` argument doesn't exist, create a new SelectUnit with this data.
     */
    create: XOR<SelectUnitCreateInput, SelectUnitUncheckedCreateInput>
    /**
     * In case the SelectUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelectUnitUpdateInput, SelectUnitUncheckedUpdateInput>
  }

  /**
   * SelectUnit delete
   */
  export type SelectUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
    /**
     * Filter which SelectUnit to delete.
     */
    where: SelectUnitWhereUniqueInput
  }

  /**
   * SelectUnit deleteMany
   */
  export type SelectUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectUnits to delete
     */
    where?: SelectUnitWhereInput
    /**
     * Limit how many SelectUnits to delete.
     */
    limit?: number
  }

  /**
   * SelectUnit.selectedLessons
   */
  export type SelectUnit$selectedLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    where?: SelectedLessonWhereInput
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    cursor?: SelectedLessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelectedLessonScalarFieldEnum | SelectedLessonScalarFieldEnum[]
  }

  /**
   * SelectUnit.Lesson
   */
  export type SelectUnit$LessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * SelectUnit.Payments
   */
  export type SelectUnit$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * SelectUnit without action
   */
  export type SelectUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectUnit
     */
    select?: SelectUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectUnit
     */
    omit?: SelectUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectUnitInclude<ExtArgs> | null
  }


  /**
   * Model SelectedLesson
   */

  export type AggregateSelectedLesson = {
    _count: SelectedLessonCountAggregateOutputType | null
    _avg: SelectedLessonAvgAggregateOutputType | null
    _sum: SelectedLessonSumAggregateOutputType | null
    _min: SelectedLessonMinAggregateOutputType | null
    _max: SelectedLessonMaxAggregateOutputType | null
  }

  export type SelectedLessonAvgAggregateOutputType = {
    id: number | null
    selectUnitId: number | null
    lessonId: number | null
  }

  export type SelectedLessonSumAggregateOutputType = {
    id: bigint | null
    selectUnitId: bigint | null
    lessonId: bigint | null
  }

  export type SelectedLessonMinAggregateOutputType = {
    id: bigint | null
    selectUnitId: bigint | null
    lessonId: bigint | null
  }

  export type SelectedLessonMaxAggregateOutputType = {
    id: bigint | null
    selectUnitId: bigint | null
    lessonId: bigint | null
  }

  export type SelectedLessonCountAggregateOutputType = {
    id: number
    selectUnitId: number
    lessonId: number
    _all: number
  }


  export type SelectedLessonAvgAggregateInputType = {
    id?: true
    selectUnitId?: true
    lessonId?: true
  }

  export type SelectedLessonSumAggregateInputType = {
    id?: true
    selectUnitId?: true
    lessonId?: true
  }

  export type SelectedLessonMinAggregateInputType = {
    id?: true
    selectUnitId?: true
    lessonId?: true
  }

  export type SelectedLessonMaxAggregateInputType = {
    id?: true
    selectUnitId?: true
    lessonId?: true
  }

  export type SelectedLessonCountAggregateInputType = {
    id?: true
    selectUnitId?: true
    lessonId?: true
    _all?: true
  }

  export type SelectedLessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectedLesson to aggregate.
     */
    where?: SelectedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedLessons to fetch.
     */
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelectedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SelectedLessons
    **/
    _count?: true | SelectedLessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelectedLessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelectedLessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelectedLessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelectedLessonMaxAggregateInputType
  }

  export type GetSelectedLessonAggregateType<T extends SelectedLessonAggregateArgs> = {
        [P in keyof T & keyof AggregateSelectedLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelectedLesson[P]>
      : GetScalarType<T[P], AggregateSelectedLesson[P]>
  }




  export type SelectedLessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectedLessonWhereInput
    orderBy?: SelectedLessonOrderByWithAggregationInput | SelectedLessonOrderByWithAggregationInput[]
    by: SelectedLessonScalarFieldEnum[] | SelectedLessonScalarFieldEnum
    having?: SelectedLessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelectedLessonCountAggregateInputType | true
    _avg?: SelectedLessonAvgAggregateInputType
    _sum?: SelectedLessonSumAggregateInputType
    _min?: SelectedLessonMinAggregateInputType
    _max?: SelectedLessonMaxAggregateInputType
  }

  export type SelectedLessonGroupByOutputType = {
    id: bigint
    selectUnitId: bigint
    lessonId: bigint
    _count: SelectedLessonCountAggregateOutputType | null
    _avg: SelectedLessonAvgAggregateOutputType | null
    _sum: SelectedLessonSumAggregateOutputType | null
    _min: SelectedLessonMinAggregateOutputType | null
    _max: SelectedLessonMaxAggregateOutputType | null
  }

  type GetSelectedLessonGroupByPayload<T extends SelectedLessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelectedLessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelectedLessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelectedLessonGroupByOutputType[P]>
            : GetScalarType<T[P], SelectedLessonGroupByOutputType[P]>
        }
      >
    >


  export type SelectedLessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectUnitId?: boolean
    lessonId?: boolean
    selectUnit?: boolean | SelectUnitDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selectedLesson"]>



  export type SelectedLessonSelectScalar = {
    id?: boolean
    selectUnitId?: boolean
    lessonId?: boolean
  }

  export type SelectedLessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "selectUnitId" | "lessonId", ExtArgs["result"]["selectedLesson"]>
  export type SelectedLessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectUnit?: boolean | SelectUnitDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $SelectedLessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SelectedLesson"
    objects: {
      selectUnit: Prisma.$SelectUnitPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      selectUnitId: bigint
      lessonId: bigint
    }, ExtArgs["result"]["selectedLesson"]>
    composites: {}
  }

  type SelectedLessonGetPayload<S extends boolean | null | undefined | SelectedLessonDefaultArgs> = $Result.GetResult<Prisma.$SelectedLessonPayload, S>

  type SelectedLessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SelectedLessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SelectedLessonCountAggregateInputType | true
    }

  export interface SelectedLessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SelectedLesson'], meta: { name: 'SelectedLesson' } }
    /**
     * Find zero or one SelectedLesson that matches the filter.
     * @param {SelectedLessonFindUniqueArgs} args - Arguments to find a SelectedLesson
     * @example
     * // Get one SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SelectedLessonFindUniqueArgs>(args: SelectSubset<T, SelectedLessonFindUniqueArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SelectedLesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SelectedLessonFindUniqueOrThrowArgs} args - Arguments to find a SelectedLesson
     * @example
     * // Get one SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SelectedLessonFindUniqueOrThrowArgs>(args: SelectSubset<T, SelectedLessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectedLesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonFindFirstArgs} args - Arguments to find a SelectedLesson
     * @example
     * // Get one SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SelectedLessonFindFirstArgs>(args?: SelectSubset<T, SelectedLessonFindFirstArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelectedLesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonFindFirstOrThrowArgs} args - Arguments to find a SelectedLesson
     * @example
     * // Get one SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SelectedLessonFindFirstOrThrowArgs>(args?: SelectSubset<T, SelectedLessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SelectedLessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SelectedLessons
     * const selectedLessons = await prisma.selectedLesson.findMany()
     * 
     * // Get first 10 SelectedLessons
     * const selectedLessons = await prisma.selectedLesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selectedLessonWithIdOnly = await prisma.selectedLesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SelectedLessonFindManyArgs>(args?: SelectSubset<T, SelectedLessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SelectedLesson.
     * @param {SelectedLessonCreateArgs} args - Arguments to create a SelectedLesson.
     * @example
     * // Create one SelectedLesson
     * const SelectedLesson = await prisma.selectedLesson.create({
     *   data: {
     *     // ... data to create a SelectedLesson
     *   }
     * })
     * 
     */
    create<T extends SelectedLessonCreateArgs>(args: SelectSubset<T, SelectedLessonCreateArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SelectedLessons.
     * @param {SelectedLessonCreateManyArgs} args - Arguments to create many SelectedLessons.
     * @example
     * // Create many SelectedLessons
     * const selectedLesson = await prisma.selectedLesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SelectedLessonCreateManyArgs>(args?: SelectSubset<T, SelectedLessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SelectedLesson.
     * @param {SelectedLessonDeleteArgs} args - Arguments to delete one SelectedLesson.
     * @example
     * // Delete one SelectedLesson
     * const SelectedLesson = await prisma.selectedLesson.delete({
     *   where: {
     *     // ... filter to delete one SelectedLesson
     *   }
     * })
     * 
     */
    delete<T extends SelectedLessonDeleteArgs>(args: SelectSubset<T, SelectedLessonDeleteArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SelectedLesson.
     * @param {SelectedLessonUpdateArgs} args - Arguments to update one SelectedLesson.
     * @example
     * // Update one SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SelectedLessonUpdateArgs>(args: SelectSubset<T, SelectedLessonUpdateArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SelectedLessons.
     * @param {SelectedLessonDeleteManyArgs} args - Arguments to filter SelectedLessons to delete.
     * @example
     * // Delete a few SelectedLessons
     * const { count } = await prisma.selectedLesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SelectedLessonDeleteManyArgs>(args?: SelectSubset<T, SelectedLessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelectedLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SelectedLessons
     * const selectedLesson = await prisma.selectedLesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SelectedLessonUpdateManyArgs>(args: SelectSubset<T, SelectedLessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SelectedLesson.
     * @param {SelectedLessonUpsertArgs} args - Arguments to update or create a SelectedLesson.
     * @example
     * // Update or create a SelectedLesson
     * const selectedLesson = await prisma.selectedLesson.upsert({
     *   create: {
     *     // ... data to create a SelectedLesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SelectedLesson we want to update
     *   }
     * })
     */
    upsert<T extends SelectedLessonUpsertArgs>(args: SelectSubset<T, SelectedLessonUpsertArgs<ExtArgs>>): Prisma__SelectedLessonClient<$Result.GetResult<Prisma.$SelectedLessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SelectedLessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonCountArgs} args - Arguments to filter SelectedLessons to count.
     * @example
     * // Count the number of SelectedLessons
     * const count = await prisma.selectedLesson.count({
     *   where: {
     *     // ... the filter for the SelectedLessons we want to count
     *   }
     * })
    **/
    count<T extends SelectedLessonCountArgs>(
      args?: Subset<T, SelectedLessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelectedLessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SelectedLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SelectedLessonAggregateArgs>(args: Subset<T, SelectedLessonAggregateArgs>): Prisma.PrismaPromise<GetSelectedLessonAggregateType<T>>

    /**
     * Group by SelectedLesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectedLessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SelectedLessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelectedLessonGroupByArgs['orderBy'] }
        : { orderBy?: SelectedLessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SelectedLessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectedLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SelectedLesson model
   */
  readonly fields: SelectedLessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SelectedLesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelectedLessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    selectUnit<T extends SelectUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SelectUnitDefaultArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SelectedLesson model
   */
  interface SelectedLessonFieldRefs {
    readonly id: FieldRef<"SelectedLesson", 'BigInt'>
    readonly selectUnitId: FieldRef<"SelectedLesson", 'BigInt'>
    readonly lessonId: FieldRef<"SelectedLesson", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * SelectedLesson findUnique
   */
  export type SelectedLessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter, which SelectedLesson to fetch.
     */
    where: SelectedLessonWhereUniqueInput
  }

  /**
   * SelectedLesson findUniqueOrThrow
   */
  export type SelectedLessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter, which SelectedLesson to fetch.
     */
    where: SelectedLessonWhereUniqueInput
  }

  /**
   * SelectedLesson findFirst
   */
  export type SelectedLessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter, which SelectedLesson to fetch.
     */
    where?: SelectedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedLessons to fetch.
     */
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectedLessons.
     */
    cursor?: SelectedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectedLessons.
     */
    distinct?: SelectedLessonScalarFieldEnum | SelectedLessonScalarFieldEnum[]
  }

  /**
   * SelectedLesson findFirstOrThrow
   */
  export type SelectedLessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter, which SelectedLesson to fetch.
     */
    where?: SelectedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedLessons to fetch.
     */
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelectedLessons.
     */
    cursor?: SelectedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedLessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelectedLessons.
     */
    distinct?: SelectedLessonScalarFieldEnum | SelectedLessonScalarFieldEnum[]
  }

  /**
   * SelectedLesson findMany
   */
  export type SelectedLessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter, which SelectedLessons to fetch.
     */
    where?: SelectedLessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelectedLessons to fetch.
     */
    orderBy?: SelectedLessonOrderByWithRelationInput | SelectedLessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SelectedLessons.
     */
    cursor?: SelectedLessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelectedLessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelectedLessons.
     */
    skip?: number
    distinct?: SelectedLessonScalarFieldEnum | SelectedLessonScalarFieldEnum[]
  }

  /**
   * SelectedLesson create
   */
  export type SelectedLessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * The data needed to create a SelectedLesson.
     */
    data: XOR<SelectedLessonCreateInput, SelectedLessonUncheckedCreateInput>
  }

  /**
   * SelectedLesson createMany
   */
  export type SelectedLessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SelectedLessons.
     */
    data: SelectedLessonCreateManyInput | SelectedLessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SelectedLesson update
   */
  export type SelectedLessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * The data needed to update a SelectedLesson.
     */
    data: XOR<SelectedLessonUpdateInput, SelectedLessonUncheckedUpdateInput>
    /**
     * Choose, which SelectedLesson to update.
     */
    where: SelectedLessonWhereUniqueInput
  }

  /**
   * SelectedLesson updateMany
   */
  export type SelectedLessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SelectedLessons.
     */
    data: XOR<SelectedLessonUpdateManyMutationInput, SelectedLessonUncheckedUpdateManyInput>
    /**
     * Filter which SelectedLessons to update
     */
    where?: SelectedLessonWhereInput
    /**
     * Limit how many SelectedLessons to update.
     */
    limit?: number
  }

  /**
   * SelectedLesson upsert
   */
  export type SelectedLessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * The filter to search for the SelectedLesson to update in case it exists.
     */
    where: SelectedLessonWhereUniqueInput
    /**
     * In case the SelectedLesson found by the `where` argument doesn't exist, create a new SelectedLesson with this data.
     */
    create: XOR<SelectedLessonCreateInput, SelectedLessonUncheckedCreateInput>
    /**
     * In case the SelectedLesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelectedLessonUpdateInput, SelectedLessonUncheckedUpdateInput>
  }

  /**
   * SelectedLesson delete
   */
  export type SelectedLessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
    /**
     * Filter which SelectedLesson to delete.
     */
    where: SelectedLessonWhereUniqueInput
  }

  /**
   * SelectedLesson deleteMany
   */
  export type SelectedLessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelectedLessons to delete
     */
    where?: SelectedLessonWhereInput
    /**
     * Limit how many SelectedLessons to delete.
     */
    limit?: number
  }

  /**
   * SelectedLesson without action
   */
  export type SelectedLessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelectedLesson
     */
    select?: SelectedLessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelectedLesson
     */
    omit?: SelectedLessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelectedLessonInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    Amount: number | null
    selectUnitId: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: bigint | null
    Amount: bigint | null
    selectUnitId: bigint | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: bigint | null
    Check: string | null
    BankName: string | null
    BranchCode: string | null
    Branch: string | null
    Amount: bigint | null
    selectUnitId: bigint | null
    PaymentDate: Date | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: bigint | null
    Check: string | null
    BankName: string | null
    BranchCode: string | null
    Branch: string | null
    Amount: bigint | null
    selectUnitId: bigint | null
    PaymentDate: Date | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    Check: number
    BankName: number
    BranchCode: number
    Branch: number
    Amount: number
    selectUnitId: number
    PaymentDate: number
    Created_at: number
    Updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    Amount?: true
    selectUnitId?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    Amount?: true
    selectUnitId?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    Check?: true
    BankName?: true
    BranchCode?: true
    Branch?: true
    Amount?: true
    selectUnitId?: true
    PaymentDate?: true
    Created_at?: true
    Updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    Check?: true
    BankName?: true
    BranchCode?: true
    Branch?: true
    Amount?: true
    selectUnitId?: true
    PaymentDate?: true
    Created_at?: true
    Updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    Check?: true
    BankName?: true
    BranchCode?: true
    Branch?: true
    Amount?: true
    selectUnitId?: true
    PaymentDate?: true
    Created_at?: true
    Updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: bigint
    Check: string | null
    BankName: string | null
    BranchCode: string | null
    Branch: string | null
    Amount: bigint
    selectUnitId: bigint
    PaymentDate: Date | null
    Created_at: Date
    Updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Check?: boolean
    BankName?: boolean
    BranchCode?: boolean
    Branch?: boolean
    Amount?: boolean
    selectUnitId?: boolean
    PaymentDate?: boolean
    Created_at?: boolean
    Updated_at?: boolean
    selectUnit?: boolean | SelectUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type PaymentsSelectScalar = {
    id?: boolean
    Check?: boolean
    BankName?: boolean
    BranchCode?: boolean
    Branch?: boolean
    Amount?: boolean
    selectUnitId?: boolean
    PaymentDate?: boolean
    Created_at?: boolean
    Updated_at?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Check" | "BankName" | "BranchCode" | "Branch" | "Amount" | "selectUnitId" | "PaymentDate" | "Created_at" | "Updated_at", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectUnit?: boolean | SelectUnitDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      selectUnit: Prisma.$SelectUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      Check: string | null
      BankName: string | null
      BranchCode: string | null
      Branch: string | null
      Amount: bigint
      selectUnitId: bigint
      PaymentDate: Date | null
      Created_at: Date
      Updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    selectUnit<T extends SelectUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SelectUnitDefaultArgs<ExtArgs>>): Prisma__SelectUnitClient<$Result.GetResult<Prisma.$SelectUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'BigInt'>
    readonly Check: FieldRef<"Payments", 'String'>
    readonly BankName: FieldRef<"Payments", 'String'>
    readonly BranchCode: FieldRef<"Payments", 'String'>
    readonly Branch: FieldRef<"Payments", 'String'>
    readonly Amount: FieldRef<"Payments", 'BigInt'>
    readonly selectUnitId: FieldRef<"Payments", 'BigInt'>
    readonly PaymentDate: FieldRef<"Payments", 'DateTime'>
    readonly Created_at: FieldRef<"Payments", 'DateTime'>
    readonly Updated_at: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldAvgAggregateOutputType = {
    id: number | null
    FixedFee: number | null
  }

  export type FieldSumAggregateOutputType = {
    id: bigint | null
    FixedFee: bigint | null
  }

  export type FieldMinAggregateOutputType = {
    id: bigint | null
    Name: string | null
    FixedFee: bigint | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type FieldMaxAggregateOutputType = {
    id: bigint | null
    Name: string | null
    FixedFee: bigint | null
    Created_at: Date | null
    Updated_at: Date | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    Name: number
    FixedFee: number
    Created_at: number
    Updated_at: number
    _all: number
  }


  export type FieldAvgAggregateInputType = {
    id?: true
    FixedFee?: true
  }

  export type FieldSumAggregateInputType = {
    id?: true
    FixedFee?: true
  }

  export type FieldMinAggregateInputType = {
    id?: true
    Name?: true
    FixedFee?: true
    Created_at?: true
    Updated_at?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    Name?: true
    FixedFee?: true
    Created_at?: true
    Updated_at?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    Name?: true
    FixedFee?: true
    Created_at?: true
    Updated_at?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Field to aggregate.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithAggregationInput | FieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _avg?: FieldAvgAggregateInputType
    _sum?: FieldSumAggregateInputType
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: bigint
    Name: string
    FixedFee: bigint | null
    Created_at: Date
    Updated_at: Date
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    FixedFee?: boolean
    Created_at?: boolean
    Updated_at?: boolean
    students?: boolean | Field$studentsArgs<ExtArgs>
    lessons?: boolean | Field$lessonsArgs<ExtArgs>
    teachers?: boolean | Field$teachersArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>



  export type FieldSelectScalar = {
    id?: boolean
    Name?: boolean
    FixedFee?: boolean
    Created_at?: boolean
    Updated_at?: boolean
  }

  export type FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "FixedFee" | "Created_at" | "Updated_at", ExtArgs["result"]["field"]>
  export type FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Field$studentsArgs<ExtArgs>
    lessons?: boolean | Field$lessonsArgs<ExtArgs>
    teachers?: boolean | Field$teachersArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Field"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      teachers: Prisma.$TeacherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      Name: string
      FixedFee: bigint | null
      Created_at: Date
      Updated_at: Date
    }, ExtArgs["result"]["field"]>
    composites: {}
  }

  type FieldGetPayload<S extends boolean | null | undefined | FieldDefaultArgs> = $Result.GetResult<Prisma.$FieldPayload, S>

  type FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCountAggregateInputType | true
    }

  export interface FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Field'], meta: { name: 'Field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {FieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldFindUniqueArgs>(args: SelectSubset<T, FieldFindUniqueArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldFindFirstArgs>(args?: SelectSubset<T, FieldFindFirstArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldFindManyArgs>(args?: SelectSubset<T, FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Field.
     * @param {FieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
     */
    create<T extends FieldCreateArgs>(args: SelectSubset<T, FieldCreateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {FieldCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldCreateManyArgs>(args?: SelectSubset<T, FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Field.
     * @param {FieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
     */
    delete<T extends FieldDeleteArgs>(args: SelectSubset<T, FieldDeleteArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Field.
     * @param {FieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldUpdateArgs>(args: SelectSubset<T, FieldUpdateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {FieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldDeleteManyArgs>(args?: SelectSubset<T, FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldUpdateManyArgs>(args: SelectSubset<T, FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Field.
     * @param {FieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
     */
    upsert<T extends FieldUpsertArgs>(args: SelectSubset<T, FieldUpsertArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends FieldCountArgs>(
      args?: Subset<T, FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldGroupByArgs['orderBy'] }
        : { orderBy?: FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Field model
   */
  readonly fields: FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Field$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Field$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessons<T extends Field$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Field$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Field$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Field$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Field model
   */
  interface FieldFieldRefs {
    readonly id: FieldRef<"Field", 'BigInt'>
    readonly Name: FieldRef<"Field", 'String'>
    readonly FixedFee: FieldRef<"Field", 'BigInt'>
    readonly Created_at: FieldRef<"Field", 'DateTime'>
    readonly Updated_at: FieldRef<"Field", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Field findUnique
   */
  export type FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findUniqueOrThrow
   */
  export type FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findFirst
   */
  export type FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findFirstOrThrow
   */
  export type FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findMany
   */
  export type FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Fields to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field create
   */
  export type FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Field.
     */
    data: XOR<FieldCreateInput, FieldUncheckedCreateInput>
  }

  /**
   * Field createMany
   */
  export type FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Field update
   */
  export type FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Field.
     */
    data: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
    /**
     * Choose, which Field to update.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field updateMany
   */
  export type FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
  }

  /**
   * Field upsert
   */
  export type FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Field to update in case it exists.
     */
    where: FieldWhereUniqueInput
    /**
     * In case the Field found by the `where` argument doesn't exist, create a new Field with this data.
     */
    create: XOR<FieldCreateInput, FieldUncheckedCreateInput>
    /**
     * In case the Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
  }

  /**
   * Field delete
   */
  export type FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter which Field to delete.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field deleteMany
   */
  export type FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fields to delete
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to delete.
     */
    limit?: number
  }

  /**
   * Field.students
   */
  export type Field$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Field.lessons
   */
  export type Field$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Field.teachers
   */
  export type Field$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Field without action
   */
  export type FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
  }


  /**
   * Model General
   */

  export type AggregateGeneral = {
    _count: GeneralCountAggregateOutputType | null
    _min: GeneralMinAggregateOutputType | null
    _max: GeneralMaxAggregateOutputType | null
  }

  export type GeneralMinAggregateOutputType = {
    Key: string | null
    Value: string | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type GeneralMaxAggregateOutputType = {
    Key: string | null
    Value: string | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type GeneralCountAggregateOutputType = {
    Key: number
    Value: number
    Updated_at: number
    Created_at: number
    _all: number
  }


  export type GeneralMinAggregateInputType = {
    Key?: true
    Value?: true
    Updated_at?: true
    Created_at?: true
  }

  export type GeneralMaxAggregateInputType = {
    Key?: true
    Value?: true
    Updated_at?: true
    Created_at?: true
  }

  export type GeneralCountAggregateInputType = {
    Key?: true
    Value?: true
    Updated_at?: true
    Created_at?: true
    _all?: true
  }

  export type GeneralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which General to aggregate.
     */
    where?: GeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generals to fetch.
     */
    orderBy?: GeneralOrderByWithRelationInput | GeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generals
    **/
    _count?: true | GeneralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralMaxAggregateInputType
  }

  export type GetGeneralAggregateType<T extends GeneralAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneral[P]>
      : GetScalarType<T[P], AggregateGeneral[P]>
  }




  export type GeneralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralWhereInput
    orderBy?: GeneralOrderByWithAggregationInput | GeneralOrderByWithAggregationInput[]
    by: GeneralScalarFieldEnum[] | GeneralScalarFieldEnum
    having?: GeneralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralCountAggregateInputType | true
    _min?: GeneralMinAggregateInputType
    _max?: GeneralMaxAggregateInputType
  }

  export type GeneralGroupByOutputType = {
    Key: string
    Value: string
    Updated_at: Date
    Created_at: Date
    _count: GeneralCountAggregateOutputType | null
    _min: GeneralMinAggregateOutputType | null
    _max: GeneralMaxAggregateOutputType | null
  }

  type GetGeneralGroupByPayload<T extends GeneralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralGroupByOutputType[P]>
        }
      >
    >


  export type GeneralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Key?: boolean
    Value?: boolean
    Updated_at?: boolean
    Created_at?: boolean
  }, ExtArgs["result"]["general"]>



  export type GeneralSelectScalar = {
    Key?: boolean
    Value?: boolean
    Updated_at?: boolean
    Created_at?: boolean
  }

  export type GeneralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Key" | "Value" | "Updated_at" | "Created_at", ExtArgs["result"]["general"]>

  export type $GeneralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "General"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Key: string
      Value: string
      Updated_at: Date
      Created_at: Date
    }, ExtArgs["result"]["general"]>
    composites: {}
  }

  type GeneralGetPayload<S extends boolean | null | undefined | GeneralDefaultArgs> = $Result.GetResult<Prisma.$GeneralPayload, S>

  type GeneralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralCountAggregateInputType | true
    }

  export interface GeneralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['General'], meta: { name: 'General' } }
    /**
     * Find zero or one General that matches the filter.
     * @param {GeneralFindUniqueArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralFindUniqueArgs>(args: SelectSubset<T, GeneralFindUniqueArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one General that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralFindUniqueOrThrowArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first General that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralFindFirstArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralFindFirstArgs>(args?: SelectSubset<T, GeneralFindFirstArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first General that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralFindFirstOrThrowArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generals
     * const generals = await prisma.general.findMany()
     * 
     * // Get first 10 Generals
     * const generals = await prisma.general.findMany({ take: 10 })
     * 
     * // Only select the `Key`
     * const generalWithKeyOnly = await prisma.general.findMany({ select: { Key: true } })
     * 
     */
    findMany<T extends GeneralFindManyArgs>(args?: SelectSubset<T, GeneralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a General.
     * @param {GeneralCreateArgs} args - Arguments to create a General.
     * @example
     * // Create one General
     * const General = await prisma.general.create({
     *   data: {
     *     // ... data to create a General
     *   }
     * })
     * 
     */
    create<T extends GeneralCreateArgs>(args: SelectSubset<T, GeneralCreateArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generals.
     * @param {GeneralCreateManyArgs} args - Arguments to create many Generals.
     * @example
     * // Create many Generals
     * const general = await prisma.general.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralCreateManyArgs>(args?: SelectSubset<T, GeneralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a General.
     * @param {GeneralDeleteArgs} args - Arguments to delete one General.
     * @example
     * // Delete one General
     * const General = await prisma.general.delete({
     *   where: {
     *     // ... filter to delete one General
     *   }
     * })
     * 
     */
    delete<T extends GeneralDeleteArgs>(args: SelectSubset<T, GeneralDeleteArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one General.
     * @param {GeneralUpdateArgs} args - Arguments to update one General.
     * @example
     * // Update one General
     * const general = await prisma.general.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralUpdateArgs>(args: SelectSubset<T, GeneralUpdateArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generals.
     * @param {GeneralDeleteManyArgs} args - Arguments to filter Generals to delete.
     * @example
     * // Delete a few Generals
     * const { count } = await prisma.general.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralDeleteManyArgs>(args?: SelectSubset<T, GeneralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generals
     * const general = await prisma.general.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralUpdateManyArgs>(args: SelectSubset<T, GeneralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one General.
     * @param {GeneralUpsertArgs} args - Arguments to update or create a General.
     * @example
     * // Update or create a General
     * const general = await prisma.general.upsert({
     *   create: {
     *     // ... data to create a General
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the General we want to update
     *   }
     * })
     */
    upsert<T extends GeneralUpsertArgs>(args: SelectSubset<T, GeneralUpsertArgs<ExtArgs>>): Prisma__GeneralClient<$Result.GetResult<Prisma.$GeneralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralCountArgs} args - Arguments to filter Generals to count.
     * @example
     * // Count the number of Generals
     * const count = await prisma.general.count({
     *   where: {
     *     // ... the filter for the Generals we want to count
     *   }
     * })
    **/
    count<T extends GeneralCountArgs>(
      args?: Subset<T, GeneralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a General.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneralAggregateArgs>(args: Subset<T, GeneralAggregateArgs>): Prisma.PrismaPromise<GetGeneralAggregateType<T>>

    /**
     * Group by General.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralGroupByArgs['orderBy'] }
        : { orderBy?: GeneralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the General model
   */
  readonly fields: GeneralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for General.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the General model
   */
  interface GeneralFieldRefs {
    readonly Key: FieldRef<"General", 'String'>
    readonly Value: FieldRef<"General", 'String'>
    readonly Updated_at: FieldRef<"General", 'DateTime'>
    readonly Created_at: FieldRef<"General", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * General findUnique
   */
  export type GeneralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter, which General to fetch.
     */
    where: GeneralWhereUniqueInput
  }

  /**
   * General findUniqueOrThrow
   */
  export type GeneralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter, which General to fetch.
     */
    where: GeneralWhereUniqueInput
  }

  /**
   * General findFirst
   */
  export type GeneralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter, which General to fetch.
     */
    where?: GeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generals to fetch.
     */
    orderBy?: GeneralOrderByWithRelationInput | GeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generals.
     */
    cursor?: GeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generals.
     */
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }

  /**
   * General findFirstOrThrow
   */
  export type GeneralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter, which General to fetch.
     */
    where?: GeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generals to fetch.
     */
    orderBy?: GeneralOrderByWithRelationInput | GeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generals.
     */
    cursor?: GeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generals.
     */
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }

  /**
   * General findMany
   */
  export type GeneralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter, which Generals to fetch.
     */
    where?: GeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generals to fetch.
     */
    orderBy?: GeneralOrderByWithRelationInput | GeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generals.
     */
    cursor?: GeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generals.
     */
    skip?: number
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }

  /**
   * General create
   */
  export type GeneralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * The data needed to create a General.
     */
    data: XOR<GeneralCreateInput, GeneralUncheckedCreateInput>
  }

  /**
   * General createMany
   */
  export type GeneralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generals.
     */
    data: GeneralCreateManyInput | GeneralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * General update
   */
  export type GeneralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * The data needed to update a General.
     */
    data: XOR<GeneralUpdateInput, GeneralUncheckedUpdateInput>
    /**
     * Choose, which General to update.
     */
    where: GeneralWhereUniqueInput
  }

  /**
   * General updateMany
   */
  export type GeneralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generals.
     */
    data: XOR<GeneralUpdateManyMutationInput, GeneralUncheckedUpdateManyInput>
    /**
     * Filter which Generals to update
     */
    where?: GeneralWhereInput
    /**
     * Limit how many Generals to update.
     */
    limit?: number
  }

  /**
   * General upsert
   */
  export type GeneralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * The filter to search for the General to update in case it exists.
     */
    where: GeneralWhereUniqueInput
    /**
     * In case the General found by the `where` argument doesn't exist, create a new General with this data.
     */
    create: XOR<GeneralCreateInput, GeneralUncheckedCreateInput>
    /**
     * In case the General was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralUpdateInput, GeneralUncheckedUpdateInput>
  }

  /**
   * General delete
   */
  export type GeneralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
    /**
     * Filter which General to delete.
     */
    where: GeneralWhereUniqueInput
  }

  /**
   * General deleteMany
   */
  export type GeneralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generals to delete
     */
    where?: GeneralWhereInput
    /**
     * Limit how many Generals to delete.
     */
    limit?: number
  }

  /**
   * General without action
   */
  export type GeneralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the General
     */
    select?: GeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the General
     */
    omit?: GeneralOmit<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: bigint | null
    fieldId: bigint | null
  }

  export type TeacherMinAggregateOutputType = {
    id: bigint | null
    NationalCode: string | null
    FirstName: string | null
    LastName: string | null
    PhoneNumber: string | null
    fieldId: bigint | null
    Birth: Date | null
    Gender: boolean | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: bigint | null
    NationalCode: string | null
    FirstName: string | null
    LastName: string | null
    PhoneNumber: string | null
    fieldId: bigint | null
    Birth: Date | null
    Gender: boolean | null
    Updated_at: Date | null
    Created_at: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    NationalCode: number
    FirstName: number
    LastName: number
    PhoneNumber: number
    fieldId: number
    Birth: number
    Gender: number
    Updated_at: number
    Created_at: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    NationalCode?: true
    FirstName?: true
    LastName?: true
    PhoneNumber?: true
    fieldId?: true
    Birth?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    NationalCode?: true
    FirstName?: true
    LastName?: true
    PhoneNumber?: true
    fieldId?: true
    Birth?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    NationalCode?: true
    FirstName?: true
    LastName?: true
    PhoneNumber?: true
    fieldId?: true
    Birth?: true
    Gender?: true
    Updated_at?: true
    Created_at?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: bigint
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    fieldId: bigint | null
    Birth: Date | null
    Gender: boolean
    Updated_at: Date
    Created_at: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NationalCode?: boolean
    FirstName?: boolean
    LastName?: boolean
    PhoneNumber?: boolean
    fieldId?: boolean
    Birth?: boolean
    Gender?: boolean
    Updated_at?: boolean
    Created_at?: boolean
    field?: boolean | Teacher$fieldArgs<ExtArgs>
    lessons?: boolean | Teacher$lessonsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    id?: boolean
    NationalCode?: boolean
    FirstName?: boolean
    LastName?: boolean
    PhoneNumber?: boolean
    fieldId?: boolean
    Birth?: boolean
    Gender?: boolean
    Updated_at?: boolean
    Created_at?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "NationalCode" | "FirstName" | "LastName" | "PhoneNumber" | "fieldId" | "Birth" | "Gender" | "Updated_at" | "Created_at", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | Teacher$fieldArgs<ExtArgs>
    lessons?: boolean | Teacher$lessonsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs> | null
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      NationalCode: string
      FirstName: string
      LastName: string
      PhoneNumber: string
      fieldId: bigint | null
      Birth: Date | null
      Gender: boolean
      Updated_at: Date
      Created_at: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends Teacher$fieldArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$fieldArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Teacher$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'BigInt'>
    readonly NationalCode: FieldRef<"Teacher", 'String'>
    readonly FirstName: FieldRef<"Teacher", 'String'>
    readonly LastName: FieldRef<"Teacher", 'String'>
    readonly PhoneNumber: FieldRef<"Teacher", 'String'>
    readonly fieldId: FieldRef<"Teacher", 'BigInt'>
    readonly Birth: FieldRef<"Teacher", 'DateTime'>
    readonly Gender: FieldRef<"Teacher", 'Boolean'>
    readonly Updated_at: FieldRef<"Teacher", 'DateTime'>
    readonly Created_at: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.field
   */
  export type Teacher$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
  }

  /**
   * Teacher.lessons
   */
  export type Teacher$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    UserName: 'UserName',
    Password: 'Password',
    Type: 'Type',
    Created_at: 'Created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    FirstName: 'FirstName',
    LastName: 'LastName',
    NationalCode: 'NationalCode',
    Father: 'Father',
    Birth: 'Birth',
    Address: 'Address',
    HomeNumber: 'HomeNumber',
    PhoneNumber: 'PhoneNumber',
    fieldId: 'fieldId',
    Grade: 'Grade',
    Gender: 'Gender',
    Updated_at: 'Updated_at',
    Created_at: 'Created_at'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    TeacherId: 'TeacherId',
    LessonName: 'LessonName',
    PracticalUnit: 'PracticalUnit',
    TheoriUnit: 'TheoriUnit',
    Grade: 'Grade',
    fieldId: 'fieldId',
    PassCondition: 'PassCondition',
    TheoriHours: 'TheoriHours',
    PracticalHours: 'PracticalHours',
    RequireLesson: 'RequireLesson',
    RequireUnit: 'RequireUnit',
    NotifCode: 'NotifCode',
    ValidFrom: 'ValidFrom',
    ValidTill: 'ValidTill',
    PricePerUnit: 'PricePerUnit',
    Created_at: 'Created_at',
    Updated_at: 'Updated_at'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const SelectUnitScalarFieldEnum: {
    id: 'id',
    StudentId: 'StudentId',
    Year: 'Year',
    Period: 'Period',
    ExtraFee: 'ExtraFee',
    FixedFee: 'FixedFee',
    CertificateFee: 'CertificateFee',
    ExtraClassFee: 'ExtraClassFee',
    BooksFee: 'BooksFee',
    Discount: 'Discount',
    Paid: 'Paid',
    Created_at: 'Created_at',
    Updated_at: 'Updated_at',
    lessonId: 'lessonId'
  };

  export type SelectUnitScalarFieldEnum = (typeof SelectUnitScalarFieldEnum)[keyof typeof SelectUnitScalarFieldEnum]


  export const SelectedLessonScalarFieldEnum: {
    id: 'id',
    selectUnitId: 'selectUnitId',
    lessonId: 'lessonId'
  };

  export type SelectedLessonScalarFieldEnum = (typeof SelectedLessonScalarFieldEnum)[keyof typeof SelectedLessonScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    Check: 'Check',
    BankName: 'BankName',
    BranchCode: 'BranchCode',
    Branch: 'Branch',
    Amount: 'Amount',
    selectUnitId: 'selectUnitId',
    PaymentDate: 'PaymentDate',
    Created_at: 'Created_at',
    Updated_at: 'Updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    FixedFee: 'FixedFee',
    Created_at: 'Created_at',
    Updated_at: 'Updated_at'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const GeneralScalarFieldEnum: {
    Key: 'Key',
    Value: 'Value',
    Updated_at: 'Updated_at',
    Created_at: 'Created_at'
  };

  export type GeneralScalarFieldEnum = (typeof GeneralScalarFieldEnum)[keyof typeof GeneralScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    NationalCode: 'NationalCode',
    FirstName: 'FirstName',
    LastName: 'LastName',
    PhoneNumber: 'PhoneNumber',
    fieldId: 'fieldId',
    Birth: 'Birth',
    Gender: 'Gender',
    Updated_at: 'Updated_at',
    Created_at: 'Created_at'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    UserName: 'UserName',
    Password: 'Password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    FirstName: 'FirstName',
    LastName: 'LastName',
    NationalCode: 'NationalCode',
    Father: 'Father',
    Address: 'Address',
    HomeNumber: 'HomeNumber',
    PhoneNumber: 'PhoneNumber'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const LessonOrderByRelevanceFieldEnum: {
    LessonName: 'LessonName'
  };

  export type LessonOrderByRelevanceFieldEnum = (typeof LessonOrderByRelevanceFieldEnum)[keyof typeof LessonOrderByRelevanceFieldEnum]


  export const PaymentsOrderByRelevanceFieldEnum: {
    Check: 'Check',
    BankName: 'BankName',
    BranchCode: 'BranchCode',
    Branch: 'Branch'
  };

  export type PaymentsOrderByRelevanceFieldEnum = (typeof PaymentsOrderByRelevanceFieldEnum)[keyof typeof PaymentsOrderByRelevanceFieldEnum]


  export const FieldOrderByRelevanceFieldEnum: {
    Name: 'Name'
  };

  export type FieldOrderByRelevanceFieldEnum = (typeof FieldOrderByRelevanceFieldEnum)[keyof typeof FieldOrderByRelevanceFieldEnum]


  export const GeneralOrderByRelevanceFieldEnum: {
    Key: 'Key',
    Value: 'Value'
  };

  export type GeneralOrderByRelevanceFieldEnum = (typeof GeneralOrderByRelevanceFieldEnum)[keyof typeof GeneralOrderByRelevanceFieldEnum]


  export const TeacherOrderByRelevanceFieldEnum: {
    NationalCode: 'NationalCode',
    FirstName: 'FirstName',
    LastName: 'LastName',
    PhoneNumber: 'PhoneNumber'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Grade'
   */
  export type EnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LessonGrade'
   */
  export type EnumLessonGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonGrade'>
    


  /**
   * Reference to a field of type 'Period'
   */
  export type EnumPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Period'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    UserName?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Type?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    Created_at?: DateTimeFilter<"User"> | Date | string
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Type?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Account?: AccountOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    UserName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Password?: StringFilter<"User"> | string
    Type?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    Created_at?: DateTimeFilter<"User"> | Date | string
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
  }, "id" | "UserName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Type?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    UserName?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
    Type?: EnumUserTypeNullableWithAggregatesFilter<"User"> | $Enums.UserType | null
    Created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: BigIntFilter<"Student"> | bigint | number
    FirstName?: StringFilter<"Student"> | string
    LastName?: StringFilter<"Student"> | string
    NationalCode?: StringFilter<"Student"> | string
    Father?: StringNullableFilter<"Student"> | string | null
    Birth?: DateTimeNullableFilter<"Student"> | Date | string | null
    Address?: StringNullableFilter<"Student"> | string | null
    HomeNumber?: StringNullableFilter<"Student"> | string | null
    PhoneNumber?: StringNullableFilter<"Student"> | string | null
    fieldId?: BigIntFilter<"Student"> | bigint | number
    Grade?: EnumGradeFilter<"Student"> | $Enums.Grade
    Gender?: BoolFilter<"Student"> | boolean
    Updated_at?: DateTimeFilter<"Student"> | Date | string
    Created_at?: DateTimeFilter<"Student"> | Date | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    selectUnits?: SelectUnitListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    NationalCode?: SortOrder
    Father?: SortOrderInput | SortOrder
    Birth?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    HomeNumber?: SortOrderInput | SortOrder
    PhoneNumber?: SortOrderInput | SortOrder
    fieldId?: SortOrder
    Grade?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    field?: FieldOrderByWithRelationInput
    selectUnits?: SelectUnitOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    NationalCode?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    FirstName?: StringFilter<"Student"> | string
    LastName?: StringFilter<"Student"> | string
    Father?: StringNullableFilter<"Student"> | string | null
    Birth?: DateTimeNullableFilter<"Student"> | Date | string | null
    Address?: StringNullableFilter<"Student"> | string | null
    HomeNumber?: StringNullableFilter<"Student"> | string | null
    PhoneNumber?: StringNullableFilter<"Student"> | string | null
    fieldId?: BigIntFilter<"Student"> | bigint | number
    Grade?: EnumGradeFilter<"Student"> | $Enums.Grade
    Gender?: BoolFilter<"Student"> | boolean
    Updated_at?: DateTimeFilter<"Student"> | Date | string
    Created_at?: DateTimeFilter<"Student"> | Date | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    selectUnits?: SelectUnitListRelationFilter
  }, "id" | "NationalCode">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    NationalCode?: SortOrder
    Father?: SortOrderInput | SortOrder
    Birth?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    HomeNumber?: SortOrderInput | SortOrder
    PhoneNumber?: SortOrderInput | SortOrder
    fieldId?: SortOrder
    Grade?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Student"> | bigint | number
    FirstName?: StringWithAggregatesFilter<"Student"> | string
    LastName?: StringWithAggregatesFilter<"Student"> | string
    NationalCode?: StringWithAggregatesFilter<"Student"> | string
    Father?: StringNullableWithAggregatesFilter<"Student"> | string | null
    Birth?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"Student"> | string | null
    HomeNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    PhoneNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    fieldId?: BigIntWithAggregatesFilter<"Student"> | bigint | number
    Grade?: EnumGradeWithAggregatesFilter<"Student"> | $Enums.Grade
    Gender?: BoolWithAggregatesFilter<"Student"> | boolean
    Updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    Created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: BigIntFilter<"Lesson"> | bigint | number
    TeacherId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    LessonName?: StringFilter<"Lesson"> | string
    PracticalUnit?: IntFilter<"Lesson"> | number
    TheoriUnit?: IntFilter<"Lesson"> | number
    Grade?: EnumLessonGradeNullableFilter<"Lesson"> | $Enums.LessonGrade | null
    fieldId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    PassCondition?: IntNullableFilter<"Lesson"> | number | null
    TheoriHours?: IntNullableFilter<"Lesson"> | number | null
    PracticalHours?: IntNullableFilter<"Lesson"> | number | null
    RequireLesson?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    RequireUnit?: IntNullableFilter<"Lesson"> | number | null
    NotifCode?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    ValidFrom?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    ValidTill?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    PricePerUnit?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    Created_at?: DateTimeFilter<"Lesson"> | Date | string
    Updated_at?: DateTimeFilter<"Lesson"> | Date | string
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    requiredForLesson?: LessonListRelationFilter
    requiresLesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    selectUnits?: SelectUnitListRelationFilter
    SelectedLesson?: SelectedLessonListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    TeacherId?: SortOrderInput | SortOrder
    LessonName?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    Grade?: SortOrderInput | SortOrder
    fieldId?: SortOrderInput | SortOrder
    PassCondition?: SortOrderInput | SortOrder
    TheoriHours?: SortOrderInput | SortOrder
    PracticalHours?: SortOrderInput | SortOrder
    RequireLesson?: SortOrderInput | SortOrder
    RequireUnit?: SortOrderInput | SortOrder
    NotifCode?: SortOrderInput | SortOrder
    ValidFrom?: SortOrderInput | SortOrder
    ValidTill?: SortOrderInput | SortOrder
    PricePerUnit?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    field?: FieldOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    requiredForLesson?: LessonOrderByRelationAggregateInput
    requiresLesson?: LessonOrderByWithRelationInput
    selectUnits?: SelectUnitOrderByRelationAggregateInput
    SelectedLesson?: SelectedLessonOrderByRelationAggregateInput
    _relevance?: LessonOrderByRelevanceInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    TeacherId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    LessonName?: StringFilter<"Lesson"> | string
    PracticalUnit?: IntFilter<"Lesson"> | number
    TheoriUnit?: IntFilter<"Lesson"> | number
    Grade?: EnumLessonGradeNullableFilter<"Lesson"> | $Enums.LessonGrade | null
    fieldId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    PassCondition?: IntNullableFilter<"Lesson"> | number | null
    TheoriHours?: IntNullableFilter<"Lesson"> | number | null
    PracticalHours?: IntNullableFilter<"Lesson"> | number | null
    RequireLesson?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    RequireUnit?: IntNullableFilter<"Lesson"> | number | null
    NotifCode?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    ValidFrom?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    ValidTill?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    PricePerUnit?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    Created_at?: DateTimeFilter<"Lesson"> | Date | string
    Updated_at?: DateTimeFilter<"Lesson"> | Date | string
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    requiredForLesson?: LessonListRelationFilter
    requiresLesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    selectUnits?: SelectUnitListRelationFilter
    SelectedLesson?: SelectedLessonListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    TeacherId?: SortOrderInput | SortOrder
    LessonName?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    Grade?: SortOrderInput | SortOrder
    fieldId?: SortOrderInput | SortOrder
    PassCondition?: SortOrderInput | SortOrder
    TheoriHours?: SortOrderInput | SortOrder
    PracticalHours?: SortOrderInput | SortOrder
    RequireLesson?: SortOrderInput | SortOrder
    RequireUnit?: SortOrderInput | SortOrder
    NotifCode?: SortOrderInput | SortOrder
    ValidFrom?: SortOrderInput | SortOrder
    ValidTill?: SortOrderInput | SortOrder
    PricePerUnit?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Lesson"> | bigint | number
    TeacherId?: BigIntNullableWithAggregatesFilter<"Lesson"> | bigint | number | null
    LessonName?: StringWithAggregatesFilter<"Lesson"> | string
    PracticalUnit?: IntWithAggregatesFilter<"Lesson"> | number
    TheoriUnit?: IntWithAggregatesFilter<"Lesson"> | number
    Grade?: EnumLessonGradeNullableWithAggregatesFilter<"Lesson"> | $Enums.LessonGrade | null
    fieldId?: BigIntNullableWithAggregatesFilter<"Lesson"> | bigint | number | null
    PassCondition?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    TheoriHours?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    PracticalHours?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    RequireLesson?: BigIntNullableWithAggregatesFilter<"Lesson"> | bigint | number | null
    RequireUnit?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    NotifCode?: BigIntNullableWithAggregatesFilter<"Lesson"> | bigint | number | null
    ValidFrom?: DateTimeNullableWithAggregatesFilter<"Lesson"> | Date | string | null
    ValidTill?: DateTimeNullableWithAggregatesFilter<"Lesson"> | Date | string | null
    PricePerUnit?: BigIntNullableWithAggregatesFilter<"Lesson"> | bigint | number | null
    Created_at?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    Updated_at?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type SelectUnitWhereInput = {
    AND?: SelectUnitWhereInput | SelectUnitWhereInput[]
    OR?: SelectUnitWhereInput[]
    NOT?: SelectUnitWhereInput | SelectUnitWhereInput[]
    id?: BigIntFilter<"SelectUnit"> | bigint | number
    StudentId?: BigIntFilter<"SelectUnit"> | bigint | number
    Year?: IntFilter<"SelectUnit"> | number
    Period?: EnumPeriodFilter<"SelectUnit"> | $Enums.Period
    ExtraFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    FixedFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    CertificateFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    ExtraClassFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    BooksFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Discount?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Paid?: BoolFilter<"SelectUnit"> | boolean
    Created_at?: DateTimeFilter<"SelectUnit"> | Date | string
    Updated_at?: DateTimeFilter<"SelectUnit"> | Date | string
    lessonId?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    selectedLessons?: SelectedLessonListRelationFilter
    Lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    Payments?: PaymentsListRelationFilter
  }

  export type SelectUnitOrderByWithRelationInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    Period?: SortOrder
    ExtraFee?: SortOrderInput | SortOrder
    FixedFee?: SortOrderInput | SortOrder
    CertificateFee?: SortOrderInput | SortOrder
    ExtraClassFee?: SortOrderInput | SortOrder
    BooksFee?: SortOrderInput | SortOrder
    Discount?: SortOrderInput | SortOrder
    Paid?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    selectedLessons?: SelectedLessonOrderByRelationAggregateInput
    Lesson?: LessonOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
  }

  export type SelectUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    StudentId_Year_Period?: SelectUnitStudentIdYearPeriodCompoundUniqueInput
    AND?: SelectUnitWhereInput | SelectUnitWhereInput[]
    OR?: SelectUnitWhereInput[]
    NOT?: SelectUnitWhereInput | SelectUnitWhereInput[]
    StudentId?: BigIntFilter<"SelectUnit"> | bigint | number
    Year?: IntFilter<"SelectUnit"> | number
    Period?: EnumPeriodFilter<"SelectUnit"> | $Enums.Period
    ExtraFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    FixedFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    CertificateFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    ExtraClassFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    BooksFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Discount?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Paid?: BoolFilter<"SelectUnit"> | boolean
    Created_at?: DateTimeFilter<"SelectUnit"> | Date | string
    Updated_at?: DateTimeFilter<"SelectUnit"> | Date | string
    lessonId?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    selectedLessons?: SelectedLessonListRelationFilter
    Lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    Payments?: PaymentsListRelationFilter
  }, "id" | "StudentId_Year_Period">

  export type SelectUnitOrderByWithAggregationInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    Period?: SortOrder
    ExtraFee?: SortOrderInput | SortOrder
    FixedFee?: SortOrderInput | SortOrder
    CertificateFee?: SortOrderInput | SortOrder
    ExtraClassFee?: SortOrderInput | SortOrder
    BooksFee?: SortOrderInput | SortOrder
    Discount?: SortOrderInput | SortOrder
    Paid?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    _count?: SelectUnitCountOrderByAggregateInput
    _avg?: SelectUnitAvgOrderByAggregateInput
    _max?: SelectUnitMaxOrderByAggregateInput
    _min?: SelectUnitMinOrderByAggregateInput
    _sum?: SelectUnitSumOrderByAggregateInput
  }

  export type SelectUnitScalarWhereWithAggregatesInput = {
    AND?: SelectUnitScalarWhereWithAggregatesInput | SelectUnitScalarWhereWithAggregatesInput[]
    OR?: SelectUnitScalarWhereWithAggregatesInput[]
    NOT?: SelectUnitScalarWhereWithAggregatesInput | SelectUnitScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SelectUnit"> | bigint | number
    StudentId?: BigIntWithAggregatesFilter<"SelectUnit"> | bigint | number
    Year?: IntWithAggregatesFilter<"SelectUnit"> | number
    Period?: EnumPeriodWithAggregatesFilter<"SelectUnit"> | $Enums.Period
    ExtraFee?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    FixedFee?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    CertificateFee?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    ExtraClassFee?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    BooksFee?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    Discount?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
    Paid?: BoolWithAggregatesFilter<"SelectUnit"> | boolean
    Created_at?: DateTimeWithAggregatesFilter<"SelectUnit"> | Date | string
    Updated_at?: DateTimeWithAggregatesFilter<"SelectUnit"> | Date | string
    lessonId?: BigIntNullableWithAggregatesFilter<"SelectUnit"> | bigint | number | null
  }

  export type SelectedLessonWhereInput = {
    AND?: SelectedLessonWhereInput | SelectedLessonWhereInput[]
    OR?: SelectedLessonWhereInput[]
    NOT?: SelectedLessonWhereInput | SelectedLessonWhereInput[]
    id?: BigIntFilter<"SelectedLesson"> | bigint | number
    selectUnitId?: BigIntFilter<"SelectedLesson"> | bigint | number
    lessonId?: BigIntFilter<"SelectedLesson"> | bigint | number
    selectUnit?: XOR<SelectUnitScalarRelationFilter, SelectUnitWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type SelectedLessonOrderByWithRelationInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
    selectUnit?: SelectUnitOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type SelectedLessonWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    selectUnitId_lessonId?: SelectedLessonSelectUnitIdLessonIdCompoundUniqueInput
    AND?: SelectedLessonWhereInput | SelectedLessonWhereInput[]
    OR?: SelectedLessonWhereInput[]
    NOT?: SelectedLessonWhereInput | SelectedLessonWhereInput[]
    selectUnitId?: BigIntFilter<"SelectedLesson"> | bigint | number
    lessonId?: BigIntFilter<"SelectedLesson"> | bigint | number
    selectUnit?: XOR<SelectUnitScalarRelationFilter, SelectUnitWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "selectUnitId_lessonId">

  export type SelectedLessonOrderByWithAggregationInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
    _count?: SelectedLessonCountOrderByAggregateInput
    _avg?: SelectedLessonAvgOrderByAggregateInput
    _max?: SelectedLessonMaxOrderByAggregateInput
    _min?: SelectedLessonMinOrderByAggregateInput
    _sum?: SelectedLessonSumOrderByAggregateInput
  }

  export type SelectedLessonScalarWhereWithAggregatesInput = {
    AND?: SelectedLessonScalarWhereWithAggregatesInput | SelectedLessonScalarWhereWithAggregatesInput[]
    OR?: SelectedLessonScalarWhereWithAggregatesInput[]
    NOT?: SelectedLessonScalarWhereWithAggregatesInput | SelectedLessonScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SelectedLesson"> | bigint | number
    selectUnitId?: BigIntWithAggregatesFilter<"SelectedLesson"> | bigint | number
    lessonId?: BigIntWithAggregatesFilter<"SelectedLesson"> | bigint | number
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: BigIntFilter<"Payments"> | bigint | number
    Check?: StringNullableFilter<"Payments"> | string | null
    BankName?: StringNullableFilter<"Payments"> | string | null
    BranchCode?: StringNullableFilter<"Payments"> | string | null
    Branch?: StringNullableFilter<"Payments"> | string | null
    Amount?: BigIntFilter<"Payments"> | bigint | number
    selectUnitId?: BigIntFilter<"Payments"> | bigint | number
    PaymentDate?: DateTimeNullableFilter<"Payments"> | Date | string | null
    Created_at?: DateTimeFilter<"Payments"> | Date | string
    Updated_at?: DateTimeFilter<"Payments"> | Date | string
    selectUnit?: XOR<SelectUnitScalarRelationFilter, SelectUnitWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    Check?: SortOrderInput | SortOrder
    BankName?: SortOrderInput | SortOrder
    BranchCode?: SortOrderInput | SortOrder
    Branch?: SortOrderInput | SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    selectUnit?: SelectUnitOrderByWithRelationInput
    _relevance?: PaymentsOrderByRelevanceInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    Check?: StringNullableFilter<"Payments"> | string | null
    BankName?: StringNullableFilter<"Payments"> | string | null
    BranchCode?: StringNullableFilter<"Payments"> | string | null
    Branch?: StringNullableFilter<"Payments"> | string | null
    Amount?: BigIntFilter<"Payments"> | bigint | number
    selectUnitId?: BigIntFilter<"Payments"> | bigint | number
    PaymentDate?: DateTimeNullableFilter<"Payments"> | Date | string | null
    Created_at?: DateTimeFilter<"Payments"> | Date | string
    Updated_at?: DateTimeFilter<"Payments"> | Date | string
    selectUnit?: XOR<SelectUnitScalarRelationFilter, SelectUnitWhereInput>
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    Check?: SortOrderInput | SortOrder
    BankName?: SortOrderInput | SortOrder
    BranchCode?: SortOrderInput | SortOrder
    Branch?: SortOrderInput | SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
    PaymentDate?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Payments"> | bigint | number
    Check?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    BankName?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    BranchCode?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    Branch?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    Amount?: BigIntWithAggregatesFilter<"Payments"> | bigint | number
    selectUnitId?: BigIntWithAggregatesFilter<"Payments"> | bigint | number
    PaymentDate?: DateTimeNullableWithAggregatesFilter<"Payments"> | Date | string | null
    Created_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    Updated_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type FieldWhereInput = {
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    id?: BigIntFilter<"Field"> | bigint | number
    Name?: StringFilter<"Field"> | string
    FixedFee?: BigIntNullableFilter<"Field"> | bigint | number | null
    Created_at?: DateTimeFilter<"Field"> | Date | string
    Updated_at?: DateTimeFilter<"Field"> | Date | string
    students?: StudentListRelationFilter
    lessons?: LessonListRelationFilter
    teachers?: TeacherListRelationFilter
  }

  export type FieldOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    FixedFee?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    lessons?: LessonOrderByRelationAggregateInput
    teachers?: TeacherOrderByRelationAggregateInput
    _relevance?: FieldOrderByRelevanceInput
  }

  export type FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    Name?: StringFilter<"Field"> | string
    FixedFee?: BigIntNullableFilter<"Field"> | bigint | number | null
    Created_at?: DateTimeFilter<"Field"> | Date | string
    Updated_at?: DateTimeFilter<"Field"> | Date | string
    students?: StudentListRelationFilter
    lessons?: LessonListRelationFilter
    teachers?: TeacherListRelationFilter
  }, "id">

  export type FieldOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    FixedFee?: SortOrderInput | SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    _count?: FieldCountOrderByAggregateInput
    _avg?: FieldAvgOrderByAggregateInput
    _max?: FieldMaxOrderByAggregateInput
    _min?: FieldMinOrderByAggregateInput
    _sum?: FieldSumOrderByAggregateInput
  }

  export type FieldScalarWhereWithAggregatesInput = {
    AND?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    OR?: FieldScalarWhereWithAggregatesInput[]
    NOT?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Field"> | bigint | number
    Name?: StringWithAggregatesFilter<"Field"> | string
    FixedFee?: BigIntNullableWithAggregatesFilter<"Field"> | bigint | number | null
    Created_at?: DateTimeWithAggregatesFilter<"Field"> | Date | string
    Updated_at?: DateTimeWithAggregatesFilter<"Field"> | Date | string
  }

  export type GeneralWhereInput = {
    AND?: GeneralWhereInput | GeneralWhereInput[]
    OR?: GeneralWhereInput[]
    NOT?: GeneralWhereInput | GeneralWhereInput[]
    Key?: StringFilter<"General"> | string
    Value?: StringFilter<"General"> | string
    Updated_at?: DateTimeFilter<"General"> | Date | string
    Created_at?: DateTimeFilter<"General"> | Date | string
  }

  export type GeneralOrderByWithRelationInput = {
    Key?: SortOrder
    Value?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    _relevance?: GeneralOrderByRelevanceInput
  }

  export type GeneralWhereUniqueInput = Prisma.AtLeast<{
    Key?: string
    AND?: GeneralWhereInput | GeneralWhereInput[]
    OR?: GeneralWhereInput[]
    NOT?: GeneralWhereInput | GeneralWhereInput[]
    Value?: StringFilter<"General"> | string
    Updated_at?: DateTimeFilter<"General"> | Date | string
    Created_at?: DateTimeFilter<"General"> | Date | string
  }, "Key">

  export type GeneralOrderByWithAggregationInput = {
    Key?: SortOrder
    Value?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    _count?: GeneralCountOrderByAggregateInput
    _max?: GeneralMaxOrderByAggregateInput
    _min?: GeneralMinOrderByAggregateInput
  }

  export type GeneralScalarWhereWithAggregatesInput = {
    AND?: GeneralScalarWhereWithAggregatesInput | GeneralScalarWhereWithAggregatesInput[]
    OR?: GeneralScalarWhereWithAggregatesInput[]
    NOT?: GeneralScalarWhereWithAggregatesInput | GeneralScalarWhereWithAggregatesInput[]
    Key?: StringWithAggregatesFilter<"General"> | string
    Value?: StringWithAggregatesFilter<"General"> | string
    Updated_at?: DateTimeWithAggregatesFilter<"General"> | Date | string
    Created_at?: DateTimeWithAggregatesFilter<"General"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: BigIntFilter<"Teacher"> | bigint | number
    NationalCode?: StringFilter<"Teacher"> | string
    FirstName?: StringFilter<"Teacher"> | string
    LastName?: StringFilter<"Teacher"> | string
    PhoneNumber?: StringFilter<"Teacher"> | string
    fieldId?: BigIntNullableFilter<"Teacher"> | bigint | number | null
    Birth?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    Gender?: BoolFilter<"Teacher"> | boolean
    Updated_at?: DateTimeFilter<"Teacher"> | Date | string
    Created_at?: DateTimeFilter<"Teacher"> | Date | string
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
    lessons?: LessonListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    NationalCode?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    Birth?: SortOrderInput | SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    field?: FieldOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    NationalCode?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    FirstName?: StringFilter<"Teacher"> | string
    LastName?: StringFilter<"Teacher"> | string
    PhoneNumber?: StringFilter<"Teacher"> | string
    fieldId?: BigIntNullableFilter<"Teacher"> | bigint | number | null
    Birth?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    Gender?: BoolFilter<"Teacher"> | boolean
    Updated_at?: DateTimeFilter<"Teacher"> | Date | string
    Created_at?: DateTimeFilter<"Teacher"> | Date | string
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
    lessons?: LessonListRelationFilter
  }, "id" | "NationalCode">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    NationalCode?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    Birth?: SortOrderInput | SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Teacher"> | bigint | number
    NationalCode?: StringWithAggregatesFilter<"Teacher"> | string
    FirstName?: StringWithAggregatesFilter<"Teacher"> | string
    LastName?: StringWithAggregatesFilter<"Teacher"> | string
    PhoneNumber?: StringWithAggregatesFilter<"Teacher"> | string
    fieldId?: BigIntNullableWithAggregatesFilter<"Teacher"> | bigint | number | null
    Birth?: DateTimeNullableWithAggregatesFilter<"Teacher"> | Date | string | null
    Gender?: BoolWithAggregatesFilter<"Teacher"> | boolean
    Updated_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    Created_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    field: FieldCreateNestedOneWithoutStudentsInput
    selectUnits?: SelectUnitCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    fieldId: bigint | number
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutStudentsNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: BigIntFieldUpdateOperationsInput | bigint | number
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    fieldId: bigint | number
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: BigIntFieldUpdateOperationsInput | bigint | number
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectUnitCreateInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    student: StudentCreateNestedOneWithoutSelectUnitsInput
    selectedLessons?: SelectedLessonCreateNestedManyWithoutSelectUnitInput
    Lesson?: LessonCreateNestedOneWithoutSelectUnitsInput
    Payments?: PaymentsCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitUncheckedCreateInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
    selectedLessons?: SelectedLessonUncheckedCreateNestedManyWithoutSelectUnitInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSelectUnitsNestedInput
    selectedLessons?: SelectedLessonUpdateManyWithoutSelectUnitNestedInput
    Lesson?: LessonUpdateOneWithoutSelectUnitsNestedInput
    Payments?: PaymentsUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    selectedLessons?: SelectedLessonUncheckedUpdateManyWithoutSelectUnitNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitCreateManyInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
  }

  export type SelectUnitUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectUnitUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SelectedLessonCreateInput = {
    id?: bigint | number
    selectUnit: SelectUnitCreateNestedOneWithoutSelectedLessonsInput
    lesson: LessonCreateNestedOneWithoutSelectedLessonInput
  }

  export type SelectedLessonUncheckedCreateInput = {
    id?: bigint | number
    selectUnitId: bigint | number
    lessonId: bigint | number
  }

  export type SelectedLessonUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnit?: SelectUnitUpdateOneRequiredWithoutSelectedLessonsNestedInput
    lesson?: LessonUpdateOneRequiredWithoutSelectedLessonNestedInput
  }

  export type SelectedLessonUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
    lessonId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SelectedLessonCreateManyInput = {
    id?: bigint | number
    selectUnitId: bigint | number
    lessonId: bigint | number
  }

  export type SelectedLessonUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SelectedLessonUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
    lessonId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentsCreateInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
    selectUnit: SelectUnitCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    selectUnitId: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type PaymentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectUnit?: SelectUnitUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    selectUnitId: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCreateInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentCreateNestedManyWithoutFieldInput
    lessons?: LessonCreateNestedManyWithoutFieldInput
    teachers?: TeacherCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutFieldInput
    lessons?: LessonUncheckedCreateNestedManyWithoutFieldInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutFieldNestedInput
    lessons?: LessonUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutFieldNestedInput
    lessons?: LessonUncheckedUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCreateManyInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type FieldUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralCreateInput = {
    Key: string
    Value: string
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type GeneralUncheckedCreateInput = {
    Key: string
    Value: string
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type GeneralUpdateInput = {
    Key?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralUncheckedUpdateInput = {
    Key?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralCreateManyInput = {
    Key: string
    Value: string
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type GeneralUpdateManyMutationInput = {
    Key?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralUncheckedUpdateManyInput = {
    Key?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    field?: FieldCreateNestedOneWithoutTeachersInput
    lessons?: LessonCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    fieldId?: bigint | number | null
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutTeachersNestedInput
    lessons?: LessonUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    fieldId?: bigint | number | null
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | null
    notIn?: $Enums.UserType[] | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | null
    notIn?: $Enums.UserType[] | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FieldScalarRelationFilter = {
    is?: FieldWhereInput
    isNot?: FieldWhereInput
  }

  export type SelectUnitListRelationFilter = {
    every?: SelectUnitWhereInput
    some?: SelectUnitWhereInput
    none?: SelectUnitWhereInput
  }

  export type SelectUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    NationalCode?: SortOrder
    Father?: SortOrder
    Birth?: SortOrder
    Address?: SortOrder
    HomeNumber?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Grade?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    NationalCode?: SortOrder
    Father?: SortOrder
    Birth?: SortOrder
    Address?: SortOrder
    HomeNumber?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Grade?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    NationalCode?: SortOrder
    Father?: SortOrder
    Birth?: SortOrder
    Address?: SortOrder
    HomeNumber?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Grade?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumLessonGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonGrade | EnumLessonGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LessonGrade[] | null
    notIn?: $Enums.LessonGrade[] | null
    not?: NestedEnumLessonGradeNullableFilter<$PrismaModel> | $Enums.LessonGrade | null
  }

  export type FieldNullableScalarRelationFilter = {
    is?: FieldWhereInput | null
    isNot?: FieldWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonNullableScalarRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type SelectedLessonListRelationFilter = {
    every?: SelectedLessonWhereInput
    some?: SelectedLessonWhereInput
    none?: SelectedLessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SelectedLessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonOrderByRelevanceInput = {
    fields: LessonOrderByRelevanceFieldEnum | LessonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    TeacherId?: SortOrder
    LessonName?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    Grade?: SortOrder
    fieldId?: SortOrder
    PassCondition?: SortOrder
    TheoriHours?: SortOrder
    PracticalHours?: SortOrder
    RequireLesson?: SortOrder
    RequireUnit?: SortOrder
    NotifCode?: SortOrder
    ValidFrom?: SortOrder
    ValidTill?: SortOrder
    PricePerUnit?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    TeacherId?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    fieldId?: SortOrder
    PassCondition?: SortOrder
    TheoriHours?: SortOrder
    PracticalHours?: SortOrder
    RequireLesson?: SortOrder
    RequireUnit?: SortOrder
    NotifCode?: SortOrder
    PricePerUnit?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    TeacherId?: SortOrder
    LessonName?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    Grade?: SortOrder
    fieldId?: SortOrder
    PassCondition?: SortOrder
    TheoriHours?: SortOrder
    PracticalHours?: SortOrder
    RequireLesson?: SortOrder
    RequireUnit?: SortOrder
    NotifCode?: SortOrder
    ValidFrom?: SortOrder
    ValidTill?: SortOrder
    PricePerUnit?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    TeacherId?: SortOrder
    LessonName?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    Grade?: SortOrder
    fieldId?: SortOrder
    PassCondition?: SortOrder
    TheoriHours?: SortOrder
    PracticalHours?: SortOrder
    RequireLesson?: SortOrder
    RequireUnit?: SortOrder
    NotifCode?: SortOrder
    ValidFrom?: SortOrder
    ValidTill?: SortOrder
    PricePerUnit?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    TeacherId?: SortOrder
    PracticalUnit?: SortOrder
    TheoriUnit?: SortOrder
    fieldId?: SortOrder
    PassCondition?: SortOrder
    TheoriHours?: SortOrder
    PracticalHours?: SortOrder
    RequireLesson?: SortOrder
    RequireUnit?: SortOrder
    NotifCode?: SortOrder
    PricePerUnit?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumLessonGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonGrade | EnumLessonGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LessonGrade[] | null
    notIn?: $Enums.LessonGrade[] | null
    not?: NestedEnumLessonGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LessonGrade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLessonGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumLessonGradeNullableFilter<$PrismaModel>
  }

  export type EnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SelectUnitStudentIdYearPeriodCompoundUniqueInput = {
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
  }

  export type SelectUnitCountOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    Period?: SortOrder
    ExtraFee?: SortOrder
    FixedFee?: SortOrder
    CertificateFee?: SortOrder
    ExtraClassFee?: SortOrder
    BooksFee?: SortOrder
    Discount?: SortOrder
    Paid?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectUnitAvgOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    ExtraFee?: SortOrder
    FixedFee?: SortOrder
    CertificateFee?: SortOrder
    ExtraClassFee?: SortOrder
    BooksFee?: SortOrder
    Discount?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    Period?: SortOrder
    ExtraFee?: SortOrder
    FixedFee?: SortOrder
    CertificateFee?: SortOrder
    ExtraClassFee?: SortOrder
    BooksFee?: SortOrder
    Discount?: SortOrder
    Paid?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectUnitMinOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    Period?: SortOrder
    ExtraFee?: SortOrder
    FixedFee?: SortOrder
    CertificateFee?: SortOrder
    ExtraClassFee?: SortOrder
    BooksFee?: SortOrder
    Discount?: SortOrder
    Paid?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectUnitSumOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    Year?: SortOrder
    ExtraFee?: SortOrder
    FixedFee?: SortOrder
    CertificateFee?: SortOrder
    ExtraClassFee?: SortOrder
    BooksFee?: SortOrder
    Discount?: SortOrder
    lessonId?: SortOrder
  }

  export type EnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type SelectUnitScalarRelationFilter = {
    is?: SelectUnitWhereInput
    isNot?: SelectUnitWhereInput
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type SelectedLessonSelectUnitIdLessonIdCompoundUniqueInput = {
    selectUnitId: bigint | number
    lessonId: bigint | number
  }

  export type SelectedLessonCountOrderByAggregateInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectedLessonAvgOrderByAggregateInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectedLessonMaxOrderByAggregateInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectedLessonMinOrderByAggregateInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
  }

  export type SelectedLessonSumOrderByAggregateInput = {
    id?: SortOrder
    selectUnitId?: SortOrder
    lessonId?: SortOrder
  }

  export type PaymentsOrderByRelevanceInput = {
    fields: PaymentsOrderByRelevanceFieldEnum | PaymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    Check?: SortOrder
    BankName?: SortOrder
    BranchCode?: SortOrder
    Branch?: SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
    PaymentDate?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    Check?: SortOrder
    BankName?: SortOrder
    BranchCode?: SortOrder
    Branch?: SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
    PaymentDate?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    Check?: SortOrder
    BankName?: SortOrder
    BranchCode?: SortOrder
    Branch?: SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
    PaymentDate?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    Amount?: SortOrder
    selectUnitId?: SortOrder
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldOrderByRelevanceInput = {
    fields: FieldOrderByRelevanceFieldEnum | FieldOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FieldCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    FixedFee?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type FieldAvgOrderByAggregateInput = {
    id?: SortOrder
    FixedFee?: SortOrder
  }

  export type FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    FixedFee?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type FieldMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    FixedFee?: SortOrder
    Created_at?: SortOrder
    Updated_at?: SortOrder
  }

  export type FieldSumOrderByAggregateInput = {
    id?: SortOrder
    FixedFee?: SortOrder
  }

  export type GeneralOrderByRelevanceInput = {
    fields: GeneralOrderByRelevanceFieldEnum | GeneralOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneralCountOrderByAggregateInput = {
    Key?: SortOrder
    Value?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type GeneralMaxOrderByAggregateInput = {
    Key?: SortOrder
    Value?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type GeneralMinOrderByAggregateInput = {
    Key?: SortOrder
    Value?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    NationalCode?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Birth?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    NationalCode?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Birth?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    NationalCode?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    PhoneNumber?: SortOrder
    fieldId?: SortOrder
    Birth?: SortOrder
    Gender?: SortOrder
    Updated_at?: SortOrder
    Created_at?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type FieldCreateNestedOneWithoutStudentsInput = {
    create?: XOR<FieldCreateWithoutStudentsInput, FieldUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutStudentsInput
    connect?: FieldWhereUniqueInput
  }

  export type SelectUnitCreateNestedManyWithoutStudentInput = {
    create?: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput> | SelectUnitCreateWithoutStudentInput[] | SelectUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutStudentInput | SelectUnitCreateOrConnectWithoutStudentInput[]
    createMany?: SelectUnitCreateManyStudentInputEnvelope
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
  }

  export type SelectUnitUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput> | SelectUnitCreateWithoutStudentInput[] | SelectUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutStudentInput | SelectUnitCreateOrConnectWithoutStudentInput[]
    createMany?: SelectUnitCreateManyStudentInputEnvelope
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumGradeFieldUpdateOperationsInput = {
    set?: $Enums.Grade
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FieldUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<FieldCreateWithoutStudentsInput, FieldUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutStudentsInput
    upsert?: FieldUpsertWithoutStudentsInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutStudentsInput, FieldUpdateWithoutStudentsInput>, FieldUncheckedUpdateWithoutStudentsInput>
  }

  export type SelectUnitUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput> | SelectUnitCreateWithoutStudentInput[] | SelectUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutStudentInput | SelectUnitCreateOrConnectWithoutStudentInput[]
    upsert?: SelectUnitUpsertWithWhereUniqueWithoutStudentInput | SelectUnitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SelectUnitCreateManyStudentInputEnvelope
    set?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    disconnect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    delete?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    update?: SelectUnitUpdateWithWhereUniqueWithoutStudentInput | SelectUnitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SelectUnitUpdateManyWithWhereWithoutStudentInput | SelectUnitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
  }

  export type SelectUnitUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput> | SelectUnitCreateWithoutStudentInput[] | SelectUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutStudentInput | SelectUnitCreateOrConnectWithoutStudentInput[]
    upsert?: SelectUnitUpsertWithWhereUniqueWithoutStudentInput | SelectUnitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SelectUnitCreateManyStudentInputEnvelope
    set?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    disconnect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    delete?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    update?: SelectUnitUpdateWithWhereUniqueWithoutStudentInput | SelectUnitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SelectUnitUpdateManyWithWhereWithoutStudentInput | SelectUnitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutLessonsInput = {
    create?: XOR<FieldCreateWithoutLessonsInput, FieldUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutLessonsInput
    connect?: FieldWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutLessonsInput = {
    create?: XOR<TeacherCreateWithoutLessonsInput, TeacherUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutLessonsInput
    connect?: TeacherWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutRequiresLessonInput = {
    create?: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput> | LessonCreateWithoutRequiresLessonInput[] | LessonUncheckedCreateWithoutRequiresLessonInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutRequiresLessonInput | LessonCreateOrConnectWithoutRequiresLessonInput[]
    createMany?: LessonCreateManyRequiresLessonInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonCreateNestedOneWithoutRequiredForLessonInput = {
    create?: XOR<LessonCreateWithoutRequiredForLessonInput, LessonUncheckedCreateWithoutRequiredForLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutRequiredForLessonInput
    connect?: LessonWhereUniqueInput
  }

  export type SelectUnitCreateNestedManyWithoutLessonInput = {
    create?: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput> | SelectUnitCreateWithoutLessonInput[] | SelectUnitUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutLessonInput | SelectUnitCreateOrConnectWithoutLessonInput[]
    createMany?: SelectUnitCreateManyLessonInputEnvelope
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
  }

  export type SelectedLessonCreateNestedManyWithoutLessonInput = {
    create?: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput> | SelectedLessonCreateWithoutLessonInput[] | SelectedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutLessonInput | SelectedLessonCreateOrConnectWithoutLessonInput[]
    createMany?: SelectedLessonCreateManyLessonInputEnvelope
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutRequiresLessonInput = {
    create?: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput> | LessonCreateWithoutRequiresLessonInput[] | LessonUncheckedCreateWithoutRequiresLessonInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutRequiresLessonInput | LessonCreateOrConnectWithoutRequiresLessonInput[]
    createMany?: LessonCreateManyRequiresLessonInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type SelectUnitUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput> | SelectUnitCreateWithoutLessonInput[] | SelectUnitUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutLessonInput | SelectUnitCreateOrConnectWithoutLessonInput[]
    createMany?: SelectUnitCreateManyLessonInputEnvelope
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
  }

  export type SelectedLessonUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput> | SelectedLessonCreateWithoutLessonInput[] | SelectedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutLessonInput | SelectedLessonCreateOrConnectWithoutLessonInput[]
    createMany?: SelectedLessonCreateManyLessonInputEnvelope
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumLessonGradeFieldUpdateOperationsInput = {
    set?: $Enums.LessonGrade | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FieldUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<FieldCreateWithoutLessonsInput, FieldUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutLessonsInput
    upsert?: FieldUpsertWithoutLessonsInput
    disconnect?: FieldWhereInput | boolean
    delete?: FieldWhereInput | boolean
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutLessonsInput, FieldUpdateWithoutLessonsInput>, FieldUncheckedUpdateWithoutLessonsInput>
  }

  export type TeacherUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<TeacherCreateWithoutLessonsInput, TeacherUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutLessonsInput
    upsert?: TeacherUpsertWithoutLessonsInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutLessonsInput, TeacherUpdateWithoutLessonsInput>, TeacherUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonUpdateManyWithoutRequiresLessonNestedInput = {
    create?: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput> | LessonCreateWithoutRequiresLessonInput[] | LessonUncheckedCreateWithoutRequiresLessonInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutRequiresLessonInput | LessonCreateOrConnectWithoutRequiresLessonInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutRequiresLessonInput | LessonUpsertWithWhereUniqueWithoutRequiresLessonInput[]
    createMany?: LessonCreateManyRequiresLessonInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutRequiresLessonInput | LessonUpdateWithWhereUniqueWithoutRequiresLessonInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutRequiresLessonInput | LessonUpdateManyWithWhereWithoutRequiresLessonInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUpdateOneWithoutRequiredForLessonNestedInput = {
    create?: XOR<LessonCreateWithoutRequiredForLessonInput, LessonUncheckedCreateWithoutRequiredForLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutRequiredForLessonInput
    upsert?: LessonUpsertWithoutRequiredForLessonInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutRequiredForLessonInput, LessonUpdateWithoutRequiredForLessonInput>, LessonUncheckedUpdateWithoutRequiredForLessonInput>
  }

  export type SelectUnitUpdateManyWithoutLessonNestedInput = {
    create?: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput> | SelectUnitCreateWithoutLessonInput[] | SelectUnitUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutLessonInput | SelectUnitCreateOrConnectWithoutLessonInput[]
    upsert?: SelectUnitUpsertWithWhereUniqueWithoutLessonInput | SelectUnitUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: SelectUnitCreateManyLessonInputEnvelope
    set?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    disconnect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    delete?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    update?: SelectUnitUpdateWithWhereUniqueWithoutLessonInput | SelectUnitUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: SelectUnitUpdateManyWithWhereWithoutLessonInput | SelectUnitUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
  }

  export type SelectedLessonUpdateManyWithoutLessonNestedInput = {
    create?: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput> | SelectedLessonCreateWithoutLessonInput[] | SelectedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutLessonInput | SelectedLessonCreateOrConnectWithoutLessonInput[]
    upsert?: SelectedLessonUpsertWithWhereUniqueWithoutLessonInput | SelectedLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: SelectedLessonCreateManyLessonInputEnvelope
    set?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    disconnect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    delete?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    update?: SelectedLessonUpdateWithWhereUniqueWithoutLessonInput | SelectedLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: SelectedLessonUpdateManyWithWhereWithoutLessonInput | SelectedLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput = {
    create?: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput> | LessonCreateWithoutRequiresLessonInput[] | LessonUncheckedCreateWithoutRequiresLessonInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutRequiresLessonInput | LessonCreateOrConnectWithoutRequiresLessonInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutRequiresLessonInput | LessonUpsertWithWhereUniqueWithoutRequiresLessonInput[]
    createMany?: LessonCreateManyRequiresLessonInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutRequiresLessonInput | LessonUpdateWithWhereUniqueWithoutRequiresLessonInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutRequiresLessonInput | LessonUpdateManyWithWhereWithoutRequiresLessonInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type SelectUnitUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput> | SelectUnitCreateWithoutLessonInput[] | SelectUnitUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectUnitCreateOrConnectWithoutLessonInput | SelectUnitCreateOrConnectWithoutLessonInput[]
    upsert?: SelectUnitUpsertWithWhereUniqueWithoutLessonInput | SelectUnitUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: SelectUnitCreateManyLessonInputEnvelope
    set?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    disconnect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    delete?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    connect?: SelectUnitWhereUniqueInput | SelectUnitWhereUniqueInput[]
    update?: SelectUnitUpdateWithWhereUniqueWithoutLessonInput | SelectUnitUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: SelectUnitUpdateManyWithWhereWithoutLessonInput | SelectUnitUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
  }

  export type SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput> | SelectedLessonCreateWithoutLessonInput[] | SelectedLessonUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutLessonInput | SelectedLessonCreateOrConnectWithoutLessonInput[]
    upsert?: SelectedLessonUpsertWithWhereUniqueWithoutLessonInput | SelectedLessonUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: SelectedLessonCreateManyLessonInputEnvelope
    set?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    disconnect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    delete?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    update?: SelectedLessonUpdateWithWhereUniqueWithoutLessonInput | SelectedLessonUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: SelectedLessonUpdateManyWithWhereWithoutLessonInput | SelectedLessonUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSelectUnitsInput = {
    create?: XOR<StudentCreateWithoutSelectUnitsInput, StudentUncheckedCreateWithoutSelectUnitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSelectUnitsInput
    connect?: StudentWhereUniqueInput
  }

  export type SelectedLessonCreateNestedManyWithoutSelectUnitInput = {
    create?: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput> | SelectedLessonCreateWithoutSelectUnitInput[] | SelectedLessonUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutSelectUnitInput | SelectedLessonCreateOrConnectWithoutSelectUnitInput[]
    createMany?: SelectedLessonCreateManySelectUnitInputEnvelope
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
  }

  export type LessonCreateNestedOneWithoutSelectUnitsInput = {
    create?: XOR<LessonCreateWithoutSelectUnitsInput, LessonUncheckedCreateWithoutSelectUnitsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutSelectUnitsInput
    connect?: LessonWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutSelectUnitInput = {
    create?: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput> | PaymentsCreateWithoutSelectUnitInput[] | PaymentsUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSelectUnitInput | PaymentsCreateOrConnectWithoutSelectUnitInput[]
    createMany?: PaymentsCreateManySelectUnitInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type SelectedLessonUncheckedCreateNestedManyWithoutSelectUnitInput = {
    create?: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput> | SelectedLessonCreateWithoutSelectUnitInput[] | SelectedLessonUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutSelectUnitInput | SelectedLessonCreateOrConnectWithoutSelectUnitInput[]
    createMany?: SelectedLessonCreateManySelectUnitInputEnvelope
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutSelectUnitInput = {
    create?: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput> | PaymentsCreateWithoutSelectUnitInput[] | PaymentsUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSelectUnitInput | PaymentsCreateOrConnectWithoutSelectUnitInput[]
    createMany?: PaymentsCreateManySelectUnitInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type EnumPeriodFieldUpdateOperationsInput = {
    set?: $Enums.Period
  }

  export type StudentUpdateOneRequiredWithoutSelectUnitsNestedInput = {
    create?: XOR<StudentCreateWithoutSelectUnitsInput, StudentUncheckedCreateWithoutSelectUnitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSelectUnitsInput
    upsert?: StudentUpsertWithoutSelectUnitsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSelectUnitsInput, StudentUpdateWithoutSelectUnitsInput>, StudentUncheckedUpdateWithoutSelectUnitsInput>
  }

  export type SelectedLessonUpdateManyWithoutSelectUnitNestedInput = {
    create?: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput> | SelectedLessonCreateWithoutSelectUnitInput[] | SelectedLessonUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutSelectUnitInput | SelectedLessonCreateOrConnectWithoutSelectUnitInput[]
    upsert?: SelectedLessonUpsertWithWhereUniqueWithoutSelectUnitInput | SelectedLessonUpsertWithWhereUniqueWithoutSelectUnitInput[]
    createMany?: SelectedLessonCreateManySelectUnitInputEnvelope
    set?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    disconnect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    delete?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    update?: SelectedLessonUpdateWithWhereUniqueWithoutSelectUnitInput | SelectedLessonUpdateWithWhereUniqueWithoutSelectUnitInput[]
    updateMany?: SelectedLessonUpdateManyWithWhereWithoutSelectUnitInput | SelectedLessonUpdateManyWithWhereWithoutSelectUnitInput[]
    deleteMany?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
  }

  export type LessonUpdateOneWithoutSelectUnitsNestedInput = {
    create?: XOR<LessonCreateWithoutSelectUnitsInput, LessonUncheckedCreateWithoutSelectUnitsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutSelectUnitsInput
    upsert?: LessonUpsertWithoutSelectUnitsInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutSelectUnitsInput, LessonUpdateWithoutSelectUnitsInput>, LessonUncheckedUpdateWithoutSelectUnitsInput>
  }

  export type PaymentsUpdateManyWithoutSelectUnitNestedInput = {
    create?: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput> | PaymentsCreateWithoutSelectUnitInput[] | PaymentsUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSelectUnitInput | PaymentsCreateOrConnectWithoutSelectUnitInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSelectUnitInput | PaymentsUpsertWithWhereUniqueWithoutSelectUnitInput[]
    createMany?: PaymentsCreateManySelectUnitInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSelectUnitInput | PaymentsUpdateWithWhereUniqueWithoutSelectUnitInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSelectUnitInput | PaymentsUpdateManyWithWhereWithoutSelectUnitInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type SelectedLessonUncheckedUpdateManyWithoutSelectUnitNestedInput = {
    create?: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput> | SelectedLessonCreateWithoutSelectUnitInput[] | SelectedLessonUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: SelectedLessonCreateOrConnectWithoutSelectUnitInput | SelectedLessonCreateOrConnectWithoutSelectUnitInput[]
    upsert?: SelectedLessonUpsertWithWhereUniqueWithoutSelectUnitInput | SelectedLessonUpsertWithWhereUniqueWithoutSelectUnitInput[]
    createMany?: SelectedLessonCreateManySelectUnitInputEnvelope
    set?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    disconnect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    delete?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    connect?: SelectedLessonWhereUniqueInput | SelectedLessonWhereUniqueInput[]
    update?: SelectedLessonUpdateWithWhereUniqueWithoutSelectUnitInput | SelectedLessonUpdateWithWhereUniqueWithoutSelectUnitInput[]
    updateMany?: SelectedLessonUpdateManyWithWhereWithoutSelectUnitInput | SelectedLessonUpdateManyWithWhereWithoutSelectUnitInput[]
    deleteMany?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutSelectUnitNestedInput = {
    create?: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput> | PaymentsCreateWithoutSelectUnitInput[] | PaymentsUncheckedCreateWithoutSelectUnitInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSelectUnitInput | PaymentsCreateOrConnectWithoutSelectUnitInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSelectUnitInput | PaymentsUpsertWithWhereUniqueWithoutSelectUnitInput[]
    createMany?: PaymentsCreateManySelectUnitInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSelectUnitInput | PaymentsUpdateWithWhereUniqueWithoutSelectUnitInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSelectUnitInput | PaymentsUpdateManyWithWhereWithoutSelectUnitInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type SelectUnitCreateNestedOneWithoutSelectedLessonsInput = {
    create?: XOR<SelectUnitCreateWithoutSelectedLessonsInput, SelectUnitUncheckedCreateWithoutSelectedLessonsInput>
    connectOrCreate?: SelectUnitCreateOrConnectWithoutSelectedLessonsInput
    connect?: SelectUnitWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutSelectedLessonInput = {
    create?: XOR<LessonCreateWithoutSelectedLessonInput, LessonUncheckedCreateWithoutSelectedLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutSelectedLessonInput
    connect?: LessonWhereUniqueInput
  }

  export type SelectUnitUpdateOneRequiredWithoutSelectedLessonsNestedInput = {
    create?: XOR<SelectUnitCreateWithoutSelectedLessonsInput, SelectUnitUncheckedCreateWithoutSelectedLessonsInput>
    connectOrCreate?: SelectUnitCreateOrConnectWithoutSelectedLessonsInput
    upsert?: SelectUnitUpsertWithoutSelectedLessonsInput
    connect?: SelectUnitWhereUniqueInput
    update?: XOR<XOR<SelectUnitUpdateToOneWithWhereWithoutSelectedLessonsInput, SelectUnitUpdateWithoutSelectedLessonsInput>, SelectUnitUncheckedUpdateWithoutSelectedLessonsInput>
  }

  export type LessonUpdateOneRequiredWithoutSelectedLessonNestedInput = {
    create?: XOR<LessonCreateWithoutSelectedLessonInput, LessonUncheckedCreateWithoutSelectedLessonInput>
    connectOrCreate?: LessonCreateOrConnectWithoutSelectedLessonInput
    upsert?: LessonUpsertWithoutSelectedLessonInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutSelectedLessonInput, LessonUpdateWithoutSelectedLessonInput>, LessonUncheckedUpdateWithoutSelectedLessonInput>
  }

  export type SelectUnitCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SelectUnitCreateWithoutPaymentsInput, SelectUnitUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SelectUnitCreateOrConnectWithoutPaymentsInput
    connect?: SelectUnitWhereUniqueInput
  }

  export type SelectUnitUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SelectUnitCreateWithoutPaymentsInput, SelectUnitUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SelectUnitCreateOrConnectWithoutPaymentsInput
    upsert?: SelectUnitUpsertWithoutPaymentsInput
    connect?: SelectUnitWhereUniqueInput
    update?: XOR<XOR<SelectUnitUpdateToOneWithWhereWithoutPaymentsInput, SelectUnitUpdateWithoutPaymentsInput>, SelectUnitUncheckedUpdateWithoutPaymentsInput>
  }

  export type StudentCreateNestedManyWithoutFieldInput = {
    create?: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput> | StudentCreateWithoutFieldInput[] | StudentUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFieldInput | StudentCreateOrConnectWithoutFieldInput[]
    createMany?: StudentCreateManyFieldInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LessonCreateNestedManyWithoutFieldInput = {
    create?: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput> | LessonCreateWithoutFieldInput[] | LessonUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutFieldInput | LessonCreateOrConnectWithoutFieldInput[]
    createMany?: LessonCreateManyFieldInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type TeacherCreateNestedManyWithoutFieldInput = {
    create?: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput> | TeacherCreateWithoutFieldInput[] | TeacherUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutFieldInput | TeacherCreateOrConnectWithoutFieldInput[]
    createMany?: TeacherCreateManyFieldInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput> | StudentCreateWithoutFieldInput[] | StudentUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFieldInput | StudentCreateOrConnectWithoutFieldInput[]
    createMany?: StudentCreateManyFieldInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput> | LessonCreateWithoutFieldInput[] | LessonUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutFieldInput | LessonCreateOrConnectWithoutFieldInput[]
    createMany?: LessonCreateManyFieldInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput> | TeacherCreateWithoutFieldInput[] | TeacherUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutFieldInput | TeacherCreateOrConnectWithoutFieldInput[]
    createMany?: TeacherCreateManyFieldInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutFieldNestedInput = {
    create?: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput> | StudentCreateWithoutFieldInput[] | StudentUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFieldInput | StudentCreateOrConnectWithoutFieldInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutFieldInput | StudentUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: StudentCreateManyFieldInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutFieldInput | StudentUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutFieldInput | StudentUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LessonUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput> | LessonCreateWithoutFieldInput[] | LessonUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutFieldInput | LessonCreateOrConnectWithoutFieldInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutFieldInput | LessonUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LessonCreateManyFieldInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutFieldInput | LessonUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutFieldInput | LessonUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type TeacherUpdateManyWithoutFieldNestedInput = {
    create?: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput> | TeacherCreateWithoutFieldInput[] | TeacherUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutFieldInput | TeacherCreateOrConnectWithoutFieldInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutFieldInput | TeacherUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: TeacherCreateManyFieldInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutFieldInput | TeacherUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutFieldInput | TeacherUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput> | StudentCreateWithoutFieldInput[] | StudentUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFieldInput | StudentCreateOrConnectWithoutFieldInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutFieldInput | StudentUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: StudentCreateManyFieldInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutFieldInput | StudentUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutFieldInput | StudentUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput> | LessonCreateWithoutFieldInput[] | LessonUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutFieldInput | LessonCreateOrConnectWithoutFieldInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutFieldInput | LessonUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LessonCreateManyFieldInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutFieldInput | LessonUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutFieldInput | LessonUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput> | TeacherCreateWithoutFieldInput[] | TeacherUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutFieldInput | TeacherCreateOrConnectWithoutFieldInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutFieldInput | TeacherUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: TeacherCreateManyFieldInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutFieldInput | TeacherUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutFieldInput | TeacherUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutTeachersInput = {
    create?: XOR<FieldCreateWithoutTeachersInput, FieldUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutTeachersInput
    connect?: FieldWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutTeacherInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type FieldUpdateOneWithoutTeachersNestedInput = {
    create?: XOR<FieldCreateWithoutTeachersInput, FieldUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutTeachersInput
    upsert?: FieldUpsertWithoutTeachersInput
    disconnect?: FieldWhereInput | boolean
    delete?: FieldWhereInput | boolean
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutTeachersInput, FieldUpdateWithoutTeachersInput>, FieldUncheckedUpdateWithoutTeachersInput>
  }

  export type LessonUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutTeacherInput | LessonUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutTeacherInput | LessonUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutTeacherInput | LessonUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutTeacherInput | LessonUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutTeacherInput | LessonUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutTeacherInput | LessonUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | null
    notIn?: $Enums.UserType[] | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | null
    notIn?: $Enums.UserType[] | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[]
    notIn?: $Enums.Grade[]
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumLessonGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonGrade | EnumLessonGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LessonGrade[] | null
    notIn?: $Enums.LessonGrade[] | null
    not?: NestedEnumLessonGradeNullableFilter<$PrismaModel> | $Enums.LessonGrade | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumLessonGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonGrade | EnumLessonGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LessonGrade[] | null
    notIn?: $Enums.LessonGrade[] | null
    not?: NestedEnumLessonGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LessonGrade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLessonGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumLessonGradeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type NestedEnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Account?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    UserName: string
    Password: string
    Type?: $Enums.UserType | null
    Created_at?: Date | string
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FieldCreateWithoutStudentsInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    lessons?: LessonCreateNestedManyWithoutFieldInput
    teachers?: TeacherCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutStudentsInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutFieldInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutStudentsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutStudentsInput, FieldUncheckedCreateWithoutStudentsInput>
  }

  export type SelectUnitCreateWithoutStudentInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    selectedLessons?: SelectedLessonCreateNestedManyWithoutSelectUnitInput
    Lesson?: LessonCreateNestedOneWithoutSelectUnitsInput
    Payments?: PaymentsCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitUncheckedCreateWithoutStudentInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
    selectedLessons?: SelectedLessonUncheckedCreateNestedManyWithoutSelectUnitInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitCreateOrConnectWithoutStudentInput = {
    where: SelectUnitWhereUniqueInput
    create: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput>
  }

  export type SelectUnitCreateManyStudentInputEnvelope = {
    data: SelectUnitCreateManyStudentInput | SelectUnitCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FieldUpsertWithoutStudentsInput = {
    update: XOR<FieldUpdateWithoutStudentsInput, FieldUncheckedUpdateWithoutStudentsInput>
    create: XOR<FieldCreateWithoutStudentsInput, FieldUncheckedCreateWithoutStudentsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutStudentsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutStudentsInput, FieldUncheckedUpdateWithoutStudentsInput>
  }

  export type FieldUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type SelectUnitUpsertWithWhereUniqueWithoutStudentInput = {
    where: SelectUnitWhereUniqueInput
    update: XOR<SelectUnitUpdateWithoutStudentInput, SelectUnitUncheckedUpdateWithoutStudentInput>
    create: XOR<SelectUnitCreateWithoutStudentInput, SelectUnitUncheckedCreateWithoutStudentInput>
  }

  export type SelectUnitUpdateWithWhereUniqueWithoutStudentInput = {
    where: SelectUnitWhereUniqueInput
    data: XOR<SelectUnitUpdateWithoutStudentInput, SelectUnitUncheckedUpdateWithoutStudentInput>
  }

  export type SelectUnitUpdateManyWithWhereWithoutStudentInput = {
    where: SelectUnitScalarWhereInput
    data: XOR<SelectUnitUpdateManyMutationInput, SelectUnitUncheckedUpdateManyWithoutStudentInput>
  }

  export type SelectUnitScalarWhereInput = {
    AND?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
    OR?: SelectUnitScalarWhereInput[]
    NOT?: SelectUnitScalarWhereInput | SelectUnitScalarWhereInput[]
    id?: BigIntFilter<"SelectUnit"> | bigint | number
    StudentId?: BigIntFilter<"SelectUnit"> | bigint | number
    Year?: IntFilter<"SelectUnit"> | number
    Period?: EnumPeriodFilter<"SelectUnit"> | $Enums.Period
    ExtraFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    FixedFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    CertificateFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    ExtraClassFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    BooksFee?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Discount?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
    Paid?: BoolFilter<"SelectUnit"> | boolean
    Created_at?: DateTimeFilter<"SelectUnit"> | Date | string
    Updated_at?: DateTimeFilter<"SelectUnit"> | Date | string
    lessonId?: BigIntNullableFilter<"SelectUnit"> | bigint | number | null
  }

  export type FieldCreateWithoutLessonsInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentCreateNestedManyWithoutFieldInput
    teachers?: TeacherCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutLessonsInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutFieldInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutLessonsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutLessonsInput, FieldUncheckedCreateWithoutLessonsInput>
  }

  export type TeacherCreateWithoutLessonsInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    field?: FieldCreateNestedOneWithoutTeachersInput
  }

  export type TeacherUncheckedCreateWithoutLessonsInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    fieldId?: bigint | number | null
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type TeacherCreateOrConnectWithoutLessonsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutLessonsInput, TeacherUncheckedCreateWithoutLessonsInput>
  }

  export type LessonCreateWithoutRequiresLessonInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutRequiresLessonInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutRequiresLessonInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput>
  }

  export type LessonCreateManyRequiresLessonInputEnvelope = {
    data: LessonCreateManyRequiresLessonInput | LessonCreateManyRequiresLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonCreateWithoutRequiredForLessonInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutRequiredForLessonInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutRequiredForLessonInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutRequiredForLessonInput, LessonUncheckedCreateWithoutRequiredForLessonInput>
  }

  export type SelectUnitCreateWithoutLessonInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    student: StudentCreateNestedOneWithoutSelectUnitsInput
    selectedLessons?: SelectedLessonCreateNestedManyWithoutSelectUnitInput
    Payments?: PaymentsCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitUncheckedCreateWithoutLessonInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    selectedLessons?: SelectedLessonUncheckedCreateNestedManyWithoutSelectUnitInput
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitCreateOrConnectWithoutLessonInput = {
    where: SelectUnitWhereUniqueInput
    create: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput>
  }

  export type SelectUnitCreateManyLessonInputEnvelope = {
    data: SelectUnitCreateManyLessonInput | SelectUnitCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type SelectedLessonCreateWithoutLessonInput = {
    id?: bigint | number
    selectUnit: SelectUnitCreateNestedOneWithoutSelectedLessonsInput
  }

  export type SelectedLessonUncheckedCreateWithoutLessonInput = {
    id?: bigint | number
    selectUnitId: bigint | number
  }

  export type SelectedLessonCreateOrConnectWithoutLessonInput = {
    where: SelectedLessonWhereUniqueInput
    create: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput>
  }

  export type SelectedLessonCreateManyLessonInputEnvelope = {
    data: SelectedLessonCreateManyLessonInput | SelectedLessonCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type FieldUpsertWithoutLessonsInput = {
    update: XOR<FieldUpdateWithoutLessonsInput, FieldUncheckedUpdateWithoutLessonsInput>
    create: XOR<FieldCreateWithoutLessonsInput, FieldUncheckedCreateWithoutLessonsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutLessonsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutLessonsInput, FieldUncheckedUpdateWithoutLessonsInput>
  }

  export type FieldUpdateWithoutLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutFieldNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type TeacherUpsertWithoutLessonsInput = {
    update: XOR<TeacherUpdateWithoutLessonsInput, TeacherUncheckedUpdateWithoutLessonsInput>
    create: XOR<TeacherCreateWithoutLessonsInput, TeacherUncheckedCreateWithoutLessonsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutLessonsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutLessonsInput, TeacherUncheckedUpdateWithoutLessonsInput>
  }

  export type TeacherUpdateWithoutLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutRequiresLessonInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutRequiresLessonInput, LessonUncheckedUpdateWithoutRequiresLessonInput>
    create: XOR<LessonCreateWithoutRequiresLessonInput, LessonUncheckedCreateWithoutRequiresLessonInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutRequiresLessonInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutRequiresLessonInput, LessonUncheckedUpdateWithoutRequiresLessonInput>
  }

  export type LessonUpdateManyWithWhereWithoutRequiresLessonInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutRequiresLessonInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: BigIntFilter<"Lesson"> | bigint | number
    TeacherId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    LessonName?: StringFilter<"Lesson"> | string
    PracticalUnit?: IntFilter<"Lesson"> | number
    TheoriUnit?: IntFilter<"Lesson"> | number
    Grade?: EnumLessonGradeNullableFilter<"Lesson"> | $Enums.LessonGrade | null
    fieldId?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    PassCondition?: IntNullableFilter<"Lesson"> | number | null
    TheoriHours?: IntNullableFilter<"Lesson"> | number | null
    PracticalHours?: IntNullableFilter<"Lesson"> | number | null
    RequireLesson?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    RequireUnit?: IntNullableFilter<"Lesson"> | number | null
    NotifCode?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    ValidFrom?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    ValidTill?: DateTimeNullableFilter<"Lesson"> | Date | string | null
    PricePerUnit?: BigIntNullableFilter<"Lesson"> | bigint | number | null
    Created_at?: DateTimeFilter<"Lesson"> | Date | string
    Updated_at?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type LessonUpsertWithoutRequiredForLessonInput = {
    update: XOR<LessonUpdateWithoutRequiredForLessonInput, LessonUncheckedUpdateWithoutRequiredForLessonInput>
    create: XOR<LessonCreateWithoutRequiredForLessonInput, LessonUncheckedCreateWithoutRequiredForLessonInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutRequiredForLessonInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutRequiredForLessonInput, LessonUncheckedUpdateWithoutRequiredForLessonInput>
  }

  export type LessonUpdateWithoutRequiredForLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutRequiredForLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type SelectUnitUpsertWithWhereUniqueWithoutLessonInput = {
    where: SelectUnitWhereUniqueInput
    update: XOR<SelectUnitUpdateWithoutLessonInput, SelectUnitUncheckedUpdateWithoutLessonInput>
    create: XOR<SelectUnitCreateWithoutLessonInput, SelectUnitUncheckedCreateWithoutLessonInput>
  }

  export type SelectUnitUpdateWithWhereUniqueWithoutLessonInput = {
    where: SelectUnitWhereUniqueInput
    data: XOR<SelectUnitUpdateWithoutLessonInput, SelectUnitUncheckedUpdateWithoutLessonInput>
  }

  export type SelectUnitUpdateManyWithWhereWithoutLessonInput = {
    where: SelectUnitScalarWhereInput
    data: XOR<SelectUnitUpdateManyMutationInput, SelectUnitUncheckedUpdateManyWithoutLessonInput>
  }

  export type SelectedLessonUpsertWithWhereUniqueWithoutLessonInput = {
    where: SelectedLessonWhereUniqueInput
    update: XOR<SelectedLessonUpdateWithoutLessonInput, SelectedLessonUncheckedUpdateWithoutLessonInput>
    create: XOR<SelectedLessonCreateWithoutLessonInput, SelectedLessonUncheckedCreateWithoutLessonInput>
  }

  export type SelectedLessonUpdateWithWhereUniqueWithoutLessonInput = {
    where: SelectedLessonWhereUniqueInput
    data: XOR<SelectedLessonUpdateWithoutLessonInput, SelectedLessonUncheckedUpdateWithoutLessonInput>
  }

  export type SelectedLessonUpdateManyWithWhereWithoutLessonInput = {
    where: SelectedLessonScalarWhereInput
    data: XOR<SelectedLessonUpdateManyMutationInput, SelectedLessonUncheckedUpdateManyWithoutLessonInput>
  }

  export type SelectedLessonScalarWhereInput = {
    AND?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
    OR?: SelectedLessonScalarWhereInput[]
    NOT?: SelectedLessonScalarWhereInput | SelectedLessonScalarWhereInput[]
    id?: BigIntFilter<"SelectedLesson"> | bigint | number
    selectUnitId?: BigIntFilter<"SelectedLesson"> | bigint | number
    lessonId?: BigIntFilter<"SelectedLesson"> | bigint | number
  }

  export type StudentCreateWithoutSelectUnitsInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    field: FieldCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutSelectUnitsInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    fieldId: bigint | number
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type StudentCreateOrConnectWithoutSelectUnitsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSelectUnitsInput, StudentUncheckedCreateWithoutSelectUnitsInput>
  }

  export type SelectedLessonCreateWithoutSelectUnitInput = {
    id?: bigint | number
    lesson: LessonCreateNestedOneWithoutSelectedLessonInput
  }

  export type SelectedLessonUncheckedCreateWithoutSelectUnitInput = {
    id?: bigint | number
    lessonId: bigint | number
  }

  export type SelectedLessonCreateOrConnectWithoutSelectUnitInput = {
    where: SelectedLessonWhereUniqueInput
    create: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput>
  }

  export type SelectedLessonCreateManySelectUnitInputEnvelope = {
    data: SelectedLessonCreateManySelectUnitInput | SelectedLessonCreateManySelectUnitInput[]
    skipDuplicates?: boolean
  }

  export type LessonCreateWithoutSelectUnitsInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutSelectUnitsInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutSelectUnitsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutSelectUnitsInput, LessonUncheckedCreateWithoutSelectUnitsInput>
  }

  export type PaymentsCreateWithoutSelectUnitInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutSelectUnitInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutSelectUnitInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput>
  }

  export type PaymentsCreateManySelectUnitInputEnvelope = {
    data: PaymentsCreateManySelectUnitInput | PaymentsCreateManySelectUnitInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutSelectUnitsInput = {
    update: XOR<StudentUpdateWithoutSelectUnitsInput, StudentUncheckedUpdateWithoutSelectUnitsInput>
    create: XOR<StudentCreateWithoutSelectUnitsInput, StudentUncheckedCreateWithoutSelectUnitsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSelectUnitsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSelectUnitsInput, StudentUncheckedUpdateWithoutSelectUnitsInput>
  }

  export type StudentUpdateWithoutSelectUnitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutSelectUnitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: BigIntFieldUpdateOperationsInput | bigint | number
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectedLessonUpsertWithWhereUniqueWithoutSelectUnitInput = {
    where: SelectedLessonWhereUniqueInput
    update: XOR<SelectedLessonUpdateWithoutSelectUnitInput, SelectedLessonUncheckedUpdateWithoutSelectUnitInput>
    create: XOR<SelectedLessonCreateWithoutSelectUnitInput, SelectedLessonUncheckedCreateWithoutSelectUnitInput>
  }

  export type SelectedLessonUpdateWithWhereUniqueWithoutSelectUnitInput = {
    where: SelectedLessonWhereUniqueInput
    data: XOR<SelectedLessonUpdateWithoutSelectUnitInput, SelectedLessonUncheckedUpdateWithoutSelectUnitInput>
  }

  export type SelectedLessonUpdateManyWithWhereWithoutSelectUnitInput = {
    where: SelectedLessonScalarWhereInput
    data: XOR<SelectedLessonUpdateManyMutationInput, SelectedLessonUncheckedUpdateManyWithoutSelectUnitInput>
  }

  export type LessonUpsertWithoutSelectUnitsInput = {
    update: XOR<LessonUpdateWithoutSelectUnitsInput, LessonUncheckedUpdateWithoutSelectUnitsInput>
    create: XOR<LessonCreateWithoutSelectUnitsInput, LessonUncheckedCreateWithoutSelectUnitsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutSelectUnitsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutSelectUnitsInput, LessonUncheckedUpdateWithoutSelectUnitsInput>
  }

  export type LessonUpdateWithoutSelectUnitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutSelectUnitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutSelectUnitInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutSelectUnitInput, PaymentsUncheckedUpdateWithoutSelectUnitInput>
    create: XOR<PaymentsCreateWithoutSelectUnitInput, PaymentsUncheckedCreateWithoutSelectUnitInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutSelectUnitInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutSelectUnitInput, PaymentsUncheckedUpdateWithoutSelectUnitInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutSelectUnitInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutSelectUnitInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: BigIntFilter<"Payments"> | bigint | number
    Check?: StringNullableFilter<"Payments"> | string | null
    BankName?: StringNullableFilter<"Payments"> | string | null
    BranchCode?: StringNullableFilter<"Payments"> | string | null
    Branch?: StringNullableFilter<"Payments"> | string | null
    Amount?: BigIntFilter<"Payments"> | bigint | number
    selectUnitId?: BigIntFilter<"Payments"> | bigint | number
    PaymentDate?: DateTimeNullableFilter<"Payments"> | Date | string | null
    Created_at?: DateTimeFilter<"Payments"> | Date | string
    Updated_at?: DateTimeFilter<"Payments"> | Date | string
  }

  export type SelectUnitCreateWithoutSelectedLessonsInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    student: StudentCreateNestedOneWithoutSelectUnitsInput
    Lesson?: LessonCreateNestedOneWithoutSelectUnitsInput
    Payments?: PaymentsCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitUncheckedCreateWithoutSelectedLessonsInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitCreateOrConnectWithoutSelectedLessonsInput = {
    where: SelectUnitWhereUniqueInput
    create: XOR<SelectUnitCreateWithoutSelectedLessonsInput, SelectUnitUncheckedCreateWithoutSelectedLessonsInput>
  }

  export type LessonCreateWithoutSelectedLessonInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutSelectedLessonInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutSelectedLessonInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutSelectedLessonInput, LessonUncheckedCreateWithoutSelectedLessonInput>
  }

  export type SelectUnitUpsertWithoutSelectedLessonsInput = {
    update: XOR<SelectUnitUpdateWithoutSelectedLessonsInput, SelectUnitUncheckedUpdateWithoutSelectedLessonsInput>
    create: XOR<SelectUnitCreateWithoutSelectedLessonsInput, SelectUnitUncheckedCreateWithoutSelectedLessonsInput>
    where?: SelectUnitWhereInput
  }

  export type SelectUnitUpdateToOneWithWhereWithoutSelectedLessonsInput = {
    where?: SelectUnitWhereInput
    data: XOR<SelectUnitUpdateWithoutSelectedLessonsInput, SelectUnitUncheckedUpdateWithoutSelectedLessonsInput>
  }

  export type SelectUnitUpdateWithoutSelectedLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSelectUnitsNestedInput
    Lesson?: LessonUpdateOneWithoutSelectUnitsNestedInput
    Payments?: PaymentsUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateWithoutSelectedLessonsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Payments?: PaymentsUncheckedUpdateManyWithoutSelectUnitNestedInput
  }

  export type LessonUpsertWithoutSelectedLessonInput = {
    update: XOR<LessonUpdateWithoutSelectedLessonInput, LessonUncheckedUpdateWithoutSelectedLessonInput>
    create: XOR<LessonCreateWithoutSelectedLessonInput, LessonUncheckedCreateWithoutSelectedLessonInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutSelectedLessonInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutSelectedLessonInput, LessonUncheckedUpdateWithoutSelectedLessonInput>
  }

  export type LessonUpdateWithoutSelectedLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutSelectedLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type SelectUnitCreateWithoutPaymentsInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    student: StudentCreateNestedOneWithoutSelectUnitsInput
    selectedLessons?: SelectedLessonCreateNestedManyWithoutSelectUnitInput
    Lesson?: LessonCreateNestedOneWithoutSelectUnitsInput
  }

  export type SelectUnitUncheckedCreateWithoutPaymentsInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
    selectedLessons?: SelectedLessonUncheckedCreateNestedManyWithoutSelectUnitInput
  }

  export type SelectUnitCreateOrConnectWithoutPaymentsInput = {
    where: SelectUnitWhereUniqueInput
    create: XOR<SelectUnitCreateWithoutPaymentsInput, SelectUnitUncheckedCreateWithoutPaymentsInput>
  }

  export type SelectUnitUpsertWithoutPaymentsInput = {
    update: XOR<SelectUnitUpdateWithoutPaymentsInput, SelectUnitUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SelectUnitCreateWithoutPaymentsInput, SelectUnitUncheckedCreateWithoutPaymentsInput>
    where?: SelectUnitWhereInput
  }

  export type SelectUnitUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SelectUnitWhereInput
    data: XOR<SelectUnitUpdateWithoutPaymentsInput, SelectUnitUncheckedUpdateWithoutPaymentsInput>
  }

  export type SelectUnitUpdateWithoutPaymentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSelectUnitsNestedInput
    selectedLessons?: SelectedLessonUpdateManyWithoutSelectUnitNestedInput
    Lesson?: LessonUpdateOneWithoutSelectUnitsNestedInput
  }

  export type SelectUnitUncheckedUpdateWithoutPaymentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    selectedLessons?: SelectedLessonUncheckedUpdateManyWithoutSelectUnitNestedInput
  }

  export type StudentCreateWithoutFieldInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    selectUnits?: SelectUnitCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFieldInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFieldInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput>
  }

  export type StudentCreateManyFieldInputEnvelope = {
    data: StudentCreateManyFieldInput | StudentCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type LessonCreateWithoutFieldInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    teacher?: TeacherCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutFieldInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutFieldInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput>
  }

  export type LessonCreateManyFieldInputEnvelope = {
    data: LessonCreateManyFieldInput | LessonCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutFieldInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    lessons?: LessonCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutFieldInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutFieldInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput>
  }

  export type TeacherCreateManyFieldInputEnvelope = {
    data: TeacherCreateManyFieldInput | TeacherCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutFieldInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutFieldInput, StudentUncheckedUpdateWithoutFieldInput>
    create: XOR<StudentCreateWithoutFieldInput, StudentUncheckedCreateWithoutFieldInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutFieldInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutFieldInput, StudentUncheckedUpdateWithoutFieldInput>
  }

  export type StudentUpdateManyWithWhereWithoutFieldInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutFieldInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: BigIntFilter<"Student"> | bigint | number
    FirstName?: StringFilter<"Student"> | string
    LastName?: StringFilter<"Student"> | string
    NationalCode?: StringFilter<"Student"> | string
    Father?: StringNullableFilter<"Student"> | string | null
    Birth?: DateTimeNullableFilter<"Student"> | Date | string | null
    Address?: StringNullableFilter<"Student"> | string | null
    HomeNumber?: StringNullableFilter<"Student"> | string | null
    PhoneNumber?: StringNullableFilter<"Student"> | string | null
    fieldId?: BigIntFilter<"Student"> | bigint | number
    Grade?: EnumGradeFilter<"Student"> | $Enums.Grade
    Gender?: BoolFilter<"Student"> | boolean
    Updated_at?: DateTimeFilter<"Student"> | Date | string
    Created_at?: DateTimeFilter<"Student"> | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutFieldInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutFieldInput, LessonUncheckedUpdateWithoutFieldInput>
    create: XOR<LessonCreateWithoutFieldInput, LessonUncheckedCreateWithoutFieldInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutFieldInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutFieldInput, LessonUncheckedUpdateWithoutFieldInput>
  }

  export type LessonUpdateManyWithWhereWithoutFieldInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutFieldInput>
  }

  export type TeacherUpsertWithWhereUniqueWithoutFieldInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutFieldInput, TeacherUncheckedUpdateWithoutFieldInput>
    create: XOR<TeacherCreateWithoutFieldInput, TeacherUncheckedCreateWithoutFieldInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutFieldInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutFieldInput, TeacherUncheckedUpdateWithoutFieldInput>
  }

  export type TeacherUpdateManyWithWhereWithoutFieldInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutFieldInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: BigIntFilter<"Teacher"> | bigint | number
    NationalCode?: StringFilter<"Teacher"> | string
    FirstName?: StringFilter<"Teacher"> | string
    LastName?: StringFilter<"Teacher"> | string
    PhoneNumber?: StringFilter<"Teacher"> | string
    fieldId?: BigIntNullableFilter<"Teacher"> | bigint | number | null
    Birth?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    Gender?: BoolFilter<"Teacher"> | boolean
    Updated_at?: DateTimeFilter<"Teacher"> | Date | string
    Created_at?: DateTimeFilter<"Teacher"> | Date | string
  }

  export type FieldCreateWithoutTeachersInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentCreateNestedManyWithoutFieldInput
    lessons?: LessonCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutTeachersInput = {
    id?: bigint | number
    Name: string
    FixedFee?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutFieldInput
    lessons?: LessonUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutTeachersInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutTeachersInput, FieldUncheckedCreateWithoutTeachersInput>
  }

  export type LessonCreateWithoutTeacherInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    field?: FieldCreateNestedOneWithoutLessonsInput
    requiredForLesson?: LessonCreateNestedManyWithoutRequiresLessonInput
    requiresLesson?: LessonCreateNestedOneWithoutRequiredForLessonInput
    selectUnits?: SelectUnitCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutTeacherInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
    requiredForLesson?: LessonUncheckedCreateNestedManyWithoutRequiresLessonInput
    selectUnits?: SelectUnitUncheckedCreateNestedManyWithoutLessonInput
    SelectedLesson?: SelectedLessonUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput>
  }

  export type LessonCreateManyTeacherInputEnvelope = {
    data: LessonCreateManyTeacherInput | LessonCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type FieldUpsertWithoutTeachersInput = {
    update: XOR<FieldUpdateWithoutTeachersInput, FieldUncheckedUpdateWithoutTeachersInput>
    create: XOR<FieldCreateWithoutTeachersInput, FieldUncheckedCreateWithoutTeachersInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutTeachersInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutTeachersInput, FieldUncheckedUpdateWithoutTeachersInput>
  }

  export type FieldUpdateWithoutTeachersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutFieldNestedInput
    lessons?: LessonUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutTeachersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutFieldNestedInput
    lessons?: LessonUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutTeacherInput, LessonUncheckedUpdateWithoutTeacherInput>
    create: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutTeacherInput, LessonUncheckedUpdateWithoutTeacherInput>
  }

  export type LessonUpdateManyWithWhereWithoutTeacherInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectUnitCreateManyStudentInput = {
    id?: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
    lessonId?: bigint | number | null
  }

  export type SelectUnitUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedLessons?: SelectedLessonUpdateManyWithoutSelectUnitNestedInput
    Lesson?: LessonUpdateOneWithoutSelectUnitsNestedInput
    Payments?: PaymentsUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    selectedLessons?: SelectedLessonUncheckedUpdateManyWithoutSelectUnitNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateManyWithoutStudentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type LessonCreateManyRequiresLessonInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type SelectUnitCreateManyLessonInput = {
    id?: bigint | number
    StudentId: bigint | number
    Year: number
    Period: $Enums.Period
    ExtraFee?: bigint | number | null
    FixedFee?: bigint | number | null
    CertificateFee?: bigint | number | null
    ExtraClassFee?: bigint | number | null
    BooksFee?: bigint | number | null
    Discount?: bigint | number | null
    Paid?: boolean
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type SelectedLessonCreateManyLessonInput = {
    id?: bigint | number
    selectUnitId: bigint | number
  }

  export type LessonUpdateWithoutRequiresLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutRequiresLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutRequiresLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectUnitUpdateWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSelectUnitsNestedInput
    selectedLessons?: SelectedLessonUpdateManyWithoutSelectUnitNestedInput
    Payments?: PaymentsUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedLessons?: SelectedLessonUncheckedUpdateManyWithoutSelectUnitNestedInput
    Payments?: PaymentsUncheckedUpdateManyWithoutSelectUnitNestedInput
  }

  export type SelectUnitUncheckedUpdateManyWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Year?: IntFieldUpdateOperationsInput | number
    Period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    ExtraFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    FixedFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    CertificateFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ExtraClassFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BooksFee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Discount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectedLessonUpdateWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnit?: SelectUnitUpdateOneRequiredWithoutSelectedLessonsNestedInput
  }

  export type SelectedLessonUncheckedUpdateWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SelectedLessonUncheckedUpdateManyWithoutLessonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    selectUnitId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SelectedLessonCreateManySelectUnitInput = {
    id?: bigint | number
    lessonId: bigint | number
  }

  export type PaymentsCreateManySelectUnitInput = {
    id?: bigint | number
    Check?: string | null
    BankName?: string | null
    BranchCode?: string | null
    Branch?: string | null
    Amount: bigint | number
    PaymentDate?: Date | string | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type SelectedLessonUpdateWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lesson?: LessonUpdateOneRequiredWithoutSelectedLessonNestedInput
  }

  export type SelectedLessonUncheckedUpdateWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lessonId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SelectedLessonUncheckedUpdateManyWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lessonId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentsUpdateWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutSelectUnitInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    Check?: NullableStringFieldUpdateOperationsInput | string | null
    BankName?: NullableStringFieldUpdateOperationsInput | string | null
    BranchCode?: NullableStringFieldUpdateOperationsInput | string | null
    Branch?: NullableStringFieldUpdateOperationsInput | string | null
    Amount?: BigIntFieldUpdateOperationsInput | bigint | number
    PaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyFieldInput = {
    id?: bigint | number
    FirstName: string
    LastName: string
    NationalCode: string
    Father?: string | null
    Birth?: Date | string | null
    Address?: string | null
    HomeNumber?: string | null
    PhoneNumber?: string | null
    Grade?: $Enums.Grade
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type LessonCreateManyFieldInput = {
    id?: bigint | number
    TeacherId?: bigint | number | null
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type TeacherCreateManyFieldInput = {
    id?: bigint | number
    NationalCode: string
    FirstName: string
    LastName: string
    PhoneNumber: string
    Birth?: Date | string | null
    Gender?: boolean
    Updated_at?: Date | string
    Created_at?: Date | string
  }

  export type StudentUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectUnits?: SelectUnitUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    NationalCode?: StringFieldUpdateOperationsInput | string
    Father?: NullableStringFieldUpdateOperationsInput | string | null
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    HomeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    TeacherId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateManyWithoutFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    NationalCode?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    PhoneNumber?: StringFieldUpdateOperationsInput | string
    Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Gender?: BoolFieldUpdateOperationsInput | boolean
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyTeacherInput = {
    id?: bigint | number
    LessonName: string
    PracticalUnit: number
    TheoriUnit: number
    Grade?: $Enums.LessonGrade | null
    fieldId?: bigint | number | null
    PassCondition?: number | null
    TheoriHours?: number | null
    PracticalHours?: number | null
    RequireLesson?: bigint | number | null
    RequireUnit?: number | null
    NotifCode?: bigint | number | null
    ValidFrom?: Date | string | null
    ValidTill?: Date | string | null
    PricePerUnit?: bigint | number | null
    Created_at?: Date | string
    Updated_at?: Date | string
  }

  export type LessonUpdateWithoutTeacherInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneWithoutLessonsNestedInput
    requiredForLesson?: LessonUpdateManyWithoutRequiresLessonNestedInput
    requiresLesson?: LessonUpdateOneWithoutRequiredForLessonNestedInput
    selectUnits?: SelectUnitUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutTeacherInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredForLesson?: LessonUncheckedUpdateManyWithoutRequiresLessonNestedInput
    selectUnits?: SelectUnitUncheckedUpdateManyWithoutLessonNestedInput
    SelectedLesson?: SelectedLessonUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutTeacherInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    LessonName?: StringFieldUpdateOperationsInput | string
    PracticalUnit?: IntFieldUpdateOperationsInput | number
    TheoriUnit?: IntFieldUpdateOperationsInput | number
    Grade?: NullableEnumLessonGradeFieldUpdateOperationsInput | $Enums.LessonGrade | null
    fieldId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PassCondition?: NullableIntFieldUpdateOperationsInput | number | null
    TheoriHours?: NullableIntFieldUpdateOperationsInput | number | null
    PracticalHours?: NullableIntFieldUpdateOperationsInput | number | null
    RequireLesson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    RequireUnit?: NullableIntFieldUpdateOperationsInput | number | null
    NotifCode?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ValidFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ValidTill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PricePerUnit?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}