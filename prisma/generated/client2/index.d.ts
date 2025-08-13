
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
 * Model CAMARAS
 * 
 */
export type CAMARAS = $Result.DefaultSelection<Prisma.$CAMARASPayload>
/**
 * Model FRIOS
 * 
 */
export type FRIOS = $Result.DefaultSelection<Prisma.$FRIOSPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CAMARAS
 * const cAMARAS = await prisma.cAMARAS.findMany()
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
   * // Fetch zero or more CAMARAS
   * const cAMARAS = await prisma.cAMARAS.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cAMARAS`: Exposes CRUD operations for the **CAMARAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CAMARAS
    * const cAMARAS = await prisma.cAMARAS.findMany()
    * ```
    */
  get cAMARAS(): Prisma.CAMARASDelegate<ExtArgs>;

  /**
   * `prisma.fRIOS`: Exposes CRUD operations for the **FRIOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRIOS
    * const fRIOS = await prisma.fRIOS.findMany()
    * ```
    */
  get fRIOS(): Prisma.FRIOSDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    CAMARAS: 'CAMARAS',
    FRIOS: 'FRIOS'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cAMARAS" | "fRIOS"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CAMARAS: {
        payload: Prisma.$CAMARASPayload<ExtArgs>
        fields: Prisma.CAMARASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CAMARASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CAMARASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          findFirst: {
            args: Prisma.CAMARASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CAMARASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          findMany: {
            args: Prisma.CAMARASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>[]
          }
          create: {
            args: Prisma.CAMARASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          createMany: {
            args: Prisma.CAMARASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CAMARASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          update: {
            args: Prisma.CAMARASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          deleteMany: {
            args: Prisma.CAMARASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CAMARASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CAMARASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CAMARASPayload>
          }
          aggregate: {
            args: Prisma.CAMARASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCAMARAS>
          }
          groupBy: {
            args: Prisma.CAMARASGroupByArgs<ExtArgs>
            result: $Utils.Optional<CAMARASGroupByOutputType>[]
          }
          count: {
            args: Prisma.CAMARASCountArgs<ExtArgs>
            result: $Utils.Optional<CAMARASCountAggregateOutputType> | number
          }
        }
      }
      FRIOS: {
        payload: Prisma.$FRIOSPayload<ExtArgs>
        fields: Prisma.FRIOSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRIOSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRIOSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          findFirst: {
            args: Prisma.FRIOSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRIOSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          findMany: {
            args: Prisma.FRIOSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>[]
          }
          create: {
            args: Prisma.FRIOSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          createMany: {
            args: Prisma.FRIOSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FRIOSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          update: {
            args: Prisma.FRIOSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          deleteMany: {
            args: Prisma.FRIOSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FRIOSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FRIOSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRIOSPayload>
          }
          aggregate: {
            args: Prisma.FRIOSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFRIOS>
          }
          groupBy: {
            args: Prisma.FRIOSGroupByArgs<ExtArgs>
            result: $Utils.Optional<FRIOSGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRIOSCountArgs<ExtArgs>
            result: $Utils.Optional<FRIOSCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Models
   */

  /**
   * Model CAMARAS
   */

  export type AggregateCAMARAS = {
    _count: CAMARASCountAggregateOutputType | null
    _avg: CAMARASAvgAggregateOutputType | null
    _sum: CAMARASSumAggregateOutputType | null
    _min: CAMARASMinAggregateOutputType | null
    _max: CAMARASMaxAggregateOutputType | null
  }

  export type CAMARASAvgAggregateOutputType = {
    BANDAS: number | null
    FILAS: number | null
    PISOS: number | null
  }

  export type CAMARASSumAggregateOutputType = {
    BANDAS: number | null
    FILAS: number | null
    PISOS: number | null
  }

  export type CAMARASMinAggregateOutputType = {
    COD_EMP: string | null
    COD_TEM: string | null
    COD_FRI: string | null
    COD_CAM: string | null
    DES_CAM: string | null
    TIPO_CAMARA: string | null
    BANDAS: number | null
    FILAS: number | null
    PISOS: number | null
    TUNEL: boolean | null
  }

  export type CAMARASMaxAggregateOutputType = {
    COD_EMP: string | null
    COD_TEM: string | null
    COD_FRI: string | null
    COD_CAM: string | null
    DES_CAM: string | null
    TIPO_CAMARA: string | null
    BANDAS: number | null
    FILAS: number | null
    PISOS: number | null
    TUNEL: boolean | null
  }

  export type CAMARASCountAggregateOutputType = {
    COD_EMP: number
    COD_TEM: number
    COD_FRI: number
    COD_CAM: number
    DES_CAM: number
    TIPO_CAMARA: number
    BANDAS: number
    FILAS: number
    PISOS: number
    TUNEL: number
    _all: number
  }


  export type CAMARASAvgAggregateInputType = {
    BANDAS?: true
    FILAS?: true
    PISOS?: true
  }

  export type CAMARASSumAggregateInputType = {
    BANDAS?: true
    FILAS?: true
    PISOS?: true
  }

  export type CAMARASMinAggregateInputType = {
    COD_EMP?: true
    COD_TEM?: true
    COD_FRI?: true
    COD_CAM?: true
    DES_CAM?: true
    TIPO_CAMARA?: true
    BANDAS?: true
    FILAS?: true
    PISOS?: true
    TUNEL?: true
  }

  export type CAMARASMaxAggregateInputType = {
    COD_EMP?: true
    COD_TEM?: true
    COD_FRI?: true
    COD_CAM?: true
    DES_CAM?: true
    TIPO_CAMARA?: true
    BANDAS?: true
    FILAS?: true
    PISOS?: true
    TUNEL?: true
  }

  export type CAMARASCountAggregateInputType = {
    COD_EMP?: true
    COD_TEM?: true
    COD_FRI?: true
    COD_CAM?: true
    DES_CAM?: true
    TIPO_CAMARA?: true
    BANDAS?: true
    FILAS?: true
    PISOS?: true
    TUNEL?: true
    _all?: true
  }

  export type CAMARASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CAMARAS to aggregate.
     */
    where?: CAMARASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAMARAS to fetch.
     */
    orderBy?: CAMARASOrderByWithRelationInput | CAMARASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CAMARASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAMARAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAMARAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CAMARAS
    **/
    _count?: true | CAMARASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CAMARASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CAMARASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CAMARASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CAMARASMaxAggregateInputType
  }

  export type GetCAMARASAggregateType<T extends CAMARASAggregateArgs> = {
        [P in keyof T & keyof AggregateCAMARAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCAMARAS[P]>
      : GetScalarType<T[P], AggregateCAMARAS[P]>
  }




  export type CAMARASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CAMARASWhereInput
    orderBy?: CAMARASOrderByWithAggregationInput | CAMARASOrderByWithAggregationInput[]
    by: CAMARASScalarFieldEnum[] | CAMARASScalarFieldEnum
    having?: CAMARASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CAMARASCountAggregateInputType | true
    _avg?: CAMARASAvgAggregateInputType
    _sum?: CAMARASSumAggregateInputType
    _min?: CAMARASMinAggregateInputType
    _max?: CAMARASMaxAggregateInputType
  }

  export type CAMARASGroupByOutputType = {
    COD_EMP: string
    COD_TEM: string
    COD_FRI: string
    COD_CAM: string
    DES_CAM: string | null
    TIPO_CAMARA: string | null
    BANDAS: number | null
    FILAS: number | null
    PISOS: number | null
    TUNEL: boolean
    _count: CAMARASCountAggregateOutputType | null
    _avg: CAMARASAvgAggregateOutputType | null
    _sum: CAMARASSumAggregateOutputType | null
    _min: CAMARASMinAggregateOutputType | null
    _max: CAMARASMaxAggregateOutputType | null
  }

  type GetCAMARASGroupByPayload<T extends CAMARASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CAMARASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CAMARASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CAMARASGroupByOutputType[P]>
            : GetScalarType<T[P], CAMARASGroupByOutputType[P]>
        }
      >
    >


  export type CAMARASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    COD_EMP?: boolean
    COD_TEM?: boolean
    COD_FRI?: boolean
    COD_CAM?: boolean
    DES_CAM?: boolean
    TIPO_CAMARA?: boolean
    BANDAS?: boolean
    FILAS?: boolean
    PISOS?: boolean
    TUNEL?: boolean
  }, ExtArgs["result"]["cAMARAS"]>


  export type CAMARASSelectScalar = {
    COD_EMP?: boolean
    COD_TEM?: boolean
    COD_FRI?: boolean
    COD_CAM?: boolean
    DES_CAM?: boolean
    TIPO_CAMARA?: boolean
    BANDAS?: boolean
    FILAS?: boolean
    PISOS?: boolean
    TUNEL?: boolean
  }


  export type $CAMARASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CAMARAS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      COD_EMP: string
      COD_TEM: string
      COD_FRI: string
      COD_CAM: string
      DES_CAM: string | null
      TIPO_CAMARA: string | null
      BANDAS: number | null
      FILAS: number | null
      PISOS: number | null
      TUNEL: boolean
    }, ExtArgs["result"]["cAMARAS"]>
    composites: {}
  }

  type CAMARASGetPayload<S extends boolean | null | undefined | CAMARASDefaultArgs> = $Result.GetResult<Prisma.$CAMARASPayload, S>

  type CAMARASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CAMARASFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CAMARASCountAggregateInputType | true
    }

  export interface CAMARASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CAMARAS'], meta: { name: 'CAMARAS' } }
    /**
     * Find zero or one CAMARAS that matches the filter.
     * @param {CAMARASFindUniqueArgs} args - Arguments to find a CAMARAS
     * @example
     * // Get one CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CAMARASFindUniqueArgs>(args: SelectSubset<T, CAMARASFindUniqueArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CAMARAS that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CAMARASFindUniqueOrThrowArgs} args - Arguments to find a CAMARAS
     * @example
     * // Get one CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CAMARASFindUniqueOrThrowArgs>(args: SelectSubset<T, CAMARASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CAMARAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASFindFirstArgs} args - Arguments to find a CAMARAS
     * @example
     * // Get one CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CAMARASFindFirstArgs>(args?: SelectSubset<T, CAMARASFindFirstArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CAMARAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASFindFirstOrThrowArgs} args - Arguments to find a CAMARAS
     * @example
     * // Get one CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CAMARASFindFirstOrThrowArgs>(args?: SelectSubset<T, CAMARASFindFirstOrThrowArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CAMARAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findMany()
     * 
     * // Get first 10 CAMARAS
     * const cAMARAS = await prisma.cAMARAS.findMany({ take: 10 })
     * 
     * // Only select the `COD_EMP`
     * const cAMARASWithCOD_EMPOnly = await prisma.cAMARAS.findMany({ select: { COD_EMP: true } })
     * 
     */
    findMany<T extends CAMARASFindManyArgs>(args?: SelectSubset<T, CAMARASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CAMARAS.
     * @param {CAMARASCreateArgs} args - Arguments to create a CAMARAS.
     * @example
     * // Create one CAMARAS
     * const CAMARAS = await prisma.cAMARAS.create({
     *   data: {
     *     // ... data to create a CAMARAS
     *   }
     * })
     * 
     */
    create<T extends CAMARASCreateArgs>(args: SelectSubset<T, CAMARASCreateArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CAMARAS.
     * @param {CAMARASCreateManyArgs} args - Arguments to create many CAMARAS.
     * @example
     * // Create many CAMARAS
     * const cAMARAS = await prisma.cAMARAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CAMARASCreateManyArgs>(args?: SelectSubset<T, CAMARASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CAMARAS.
     * @param {CAMARASDeleteArgs} args - Arguments to delete one CAMARAS.
     * @example
     * // Delete one CAMARAS
     * const CAMARAS = await prisma.cAMARAS.delete({
     *   where: {
     *     // ... filter to delete one CAMARAS
     *   }
     * })
     * 
     */
    delete<T extends CAMARASDeleteArgs>(args: SelectSubset<T, CAMARASDeleteArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CAMARAS.
     * @param {CAMARASUpdateArgs} args - Arguments to update one CAMARAS.
     * @example
     * // Update one CAMARAS
     * const cAMARAS = await prisma.cAMARAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CAMARASUpdateArgs>(args: SelectSubset<T, CAMARASUpdateArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CAMARAS.
     * @param {CAMARASDeleteManyArgs} args - Arguments to filter CAMARAS to delete.
     * @example
     * // Delete a few CAMARAS
     * const { count } = await prisma.cAMARAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CAMARASDeleteManyArgs>(args?: SelectSubset<T, CAMARASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CAMARAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CAMARAS
     * const cAMARAS = await prisma.cAMARAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CAMARASUpdateManyArgs>(args: SelectSubset<T, CAMARASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CAMARAS.
     * @param {CAMARASUpsertArgs} args - Arguments to update or create a CAMARAS.
     * @example
     * // Update or create a CAMARAS
     * const cAMARAS = await prisma.cAMARAS.upsert({
     *   create: {
     *     // ... data to create a CAMARAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CAMARAS we want to update
     *   }
     * })
     */
    upsert<T extends CAMARASUpsertArgs>(args: SelectSubset<T, CAMARASUpsertArgs<ExtArgs>>): Prisma__CAMARASClient<$Result.GetResult<Prisma.$CAMARASPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CAMARAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASCountArgs} args - Arguments to filter CAMARAS to count.
     * @example
     * // Count the number of CAMARAS
     * const count = await prisma.cAMARAS.count({
     *   where: {
     *     // ... the filter for the CAMARAS we want to count
     *   }
     * })
    **/
    count<T extends CAMARASCountArgs>(
      args?: Subset<T, CAMARASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CAMARASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CAMARAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CAMARASAggregateArgs>(args: Subset<T, CAMARASAggregateArgs>): Prisma.PrismaPromise<GetCAMARASAggregateType<T>>

    /**
     * Group by CAMARAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CAMARASGroupByArgs} args - Group by arguments.
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
      T extends CAMARASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CAMARASGroupByArgs['orderBy'] }
        : { orderBy?: CAMARASGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CAMARASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCAMARASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CAMARAS model
   */
  readonly fields: CAMARASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CAMARAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CAMARASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CAMARAS model
   */ 
  interface CAMARASFieldRefs {
    readonly COD_EMP: FieldRef<"CAMARAS", 'String'>
    readonly COD_TEM: FieldRef<"CAMARAS", 'String'>
    readonly COD_FRI: FieldRef<"CAMARAS", 'String'>
    readonly COD_CAM: FieldRef<"CAMARAS", 'String'>
    readonly DES_CAM: FieldRef<"CAMARAS", 'String'>
    readonly TIPO_CAMARA: FieldRef<"CAMARAS", 'String'>
    readonly BANDAS: FieldRef<"CAMARAS", 'Int'>
    readonly FILAS: FieldRef<"CAMARAS", 'Int'>
    readonly PISOS: FieldRef<"CAMARAS", 'Int'>
    readonly TUNEL: FieldRef<"CAMARAS", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CAMARAS findUnique
   */
  export type CAMARASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter, which CAMARAS to fetch.
     */
    where: CAMARASWhereUniqueInput
  }

  /**
   * CAMARAS findUniqueOrThrow
   */
  export type CAMARASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter, which CAMARAS to fetch.
     */
    where: CAMARASWhereUniqueInput
  }

  /**
   * CAMARAS findFirst
   */
  export type CAMARASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter, which CAMARAS to fetch.
     */
    where?: CAMARASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAMARAS to fetch.
     */
    orderBy?: CAMARASOrderByWithRelationInput | CAMARASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CAMARAS.
     */
    cursor?: CAMARASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAMARAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAMARAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CAMARAS.
     */
    distinct?: CAMARASScalarFieldEnum | CAMARASScalarFieldEnum[]
  }

  /**
   * CAMARAS findFirstOrThrow
   */
  export type CAMARASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter, which CAMARAS to fetch.
     */
    where?: CAMARASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAMARAS to fetch.
     */
    orderBy?: CAMARASOrderByWithRelationInput | CAMARASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CAMARAS.
     */
    cursor?: CAMARASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAMARAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAMARAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CAMARAS.
     */
    distinct?: CAMARASScalarFieldEnum | CAMARASScalarFieldEnum[]
  }

  /**
   * CAMARAS findMany
   */
  export type CAMARASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter, which CAMARAS to fetch.
     */
    where?: CAMARASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CAMARAS to fetch.
     */
    orderBy?: CAMARASOrderByWithRelationInput | CAMARASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CAMARAS.
     */
    cursor?: CAMARASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CAMARAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CAMARAS.
     */
    skip?: number
    distinct?: CAMARASScalarFieldEnum | CAMARASScalarFieldEnum[]
  }

  /**
   * CAMARAS create
   */
  export type CAMARASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * The data needed to create a CAMARAS.
     */
    data: XOR<CAMARASCreateInput, CAMARASUncheckedCreateInput>
  }

  /**
   * CAMARAS createMany
   */
  export type CAMARASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CAMARAS.
     */
    data: CAMARASCreateManyInput | CAMARASCreateManyInput[]
  }

  /**
   * CAMARAS update
   */
  export type CAMARASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * The data needed to update a CAMARAS.
     */
    data: XOR<CAMARASUpdateInput, CAMARASUncheckedUpdateInput>
    /**
     * Choose, which CAMARAS to update.
     */
    where: CAMARASWhereUniqueInput
  }

  /**
   * CAMARAS updateMany
   */
  export type CAMARASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CAMARAS.
     */
    data: XOR<CAMARASUpdateManyMutationInput, CAMARASUncheckedUpdateManyInput>
    /**
     * Filter which CAMARAS to update
     */
    where?: CAMARASWhereInput
  }

  /**
   * CAMARAS upsert
   */
  export type CAMARASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * The filter to search for the CAMARAS to update in case it exists.
     */
    where: CAMARASWhereUniqueInput
    /**
     * In case the CAMARAS found by the `where` argument doesn't exist, create a new CAMARAS with this data.
     */
    create: XOR<CAMARASCreateInput, CAMARASUncheckedCreateInput>
    /**
     * In case the CAMARAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CAMARASUpdateInput, CAMARASUncheckedUpdateInput>
  }

  /**
   * CAMARAS delete
   */
  export type CAMARASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
    /**
     * Filter which CAMARAS to delete.
     */
    where: CAMARASWhereUniqueInput
  }

  /**
   * CAMARAS deleteMany
   */
  export type CAMARASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CAMARAS to delete
     */
    where?: CAMARASWhereInput
  }

  /**
   * CAMARAS without action
   */
  export type CAMARASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CAMARAS
     */
    select?: CAMARASSelect<ExtArgs> | null
  }


  /**
   * Model FRIOS
   */

  export type AggregateFRIOS = {
    _count: FRIOSCountAggregateOutputType | null
    _avg: FRIOSAvgAggregateOutputType | null
    _sum: FRIOSSumAggregateOutputType | null
    _min: FRIOSMinAggregateOutputType | null
    _max: FRIOSMaxAggregateOutputType | null
  }

  export type FRIOSAvgAggregateOutputType = {
    COD_CENTROCOSTO: number | null
    COD_SUBCENTRO: number | null
  }

  export type FRIOSSumAggregateOutputType = {
    COD_CENTROCOSTO: number | null
    COD_SUBCENTRO: number | null
  }

  export type FRIOSMinAggregateOutputType = {
    COD_FRI: string | null
    COD_TEM: string | null
    COD_EMP: string | null
    COD_GRP_FRI: string | null
    NOM_FRI: string | null
    FDA: string | null
    PIN: string | null
    ZON: string | null
    DIRECCION: string | null
    COD_PROVC: string | null
    COD_COM: string | null
    RUT: string | null
    RAZON_SOCIAL: string | null
    COD_CENTROCOSTO: number | null
    COD_SUBCENTRO: number | null
    COD_EMP_CONT: string | null
    NOMBRELOGO: string | null
    IMAGEN: Buffer | null
    EMAIL: string | null
    TELEFONO: string | null
    FAX: string | null
    SW_INACTIVO: boolean | null
  }

  export type FRIOSMaxAggregateOutputType = {
    COD_FRI: string | null
    COD_TEM: string | null
    COD_EMP: string | null
    COD_GRP_FRI: string | null
    NOM_FRI: string | null
    FDA: string | null
    PIN: string | null
    ZON: string | null
    DIRECCION: string | null
    COD_PROVC: string | null
    COD_COM: string | null
    RUT: string | null
    RAZON_SOCIAL: string | null
    COD_CENTROCOSTO: number | null
    COD_SUBCENTRO: number | null
    COD_EMP_CONT: string | null
    NOMBRELOGO: string | null
    IMAGEN: Buffer | null
    EMAIL: string | null
    TELEFONO: string | null
    FAX: string | null
    SW_INACTIVO: boolean | null
  }

  export type FRIOSCountAggregateOutputType = {
    COD_FRI: number
    COD_TEM: number
    COD_EMP: number
    COD_GRP_FRI: number
    NOM_FRI: number
    FDA: number
    PIN: number
    ZON: number
    DIRECCION: number
    COD_PROVC: number
    COD_COM: number
    RUT: number
    RAZON_SOCIAL: number
    COD_CENTROCOSTO: number
    COD_SUBCENTRO: number
    COD_EMP_CONT: number
    NOMBRELOGO: number
    IMAGEN: number
    EMAIL: number
    TELEFONO: number
    FAX: number
    SW_INACTIVO: number
    _all: number
  }


  export type FRIOSAvgAggregateInputType = {
    COD_CENTROCOSTO?: true
    COD_SUBCENTRO?: true
  }

  export type FRIOSSumAggregateInputType = {
    COD_CENTROCOSTO?: true
    COD_SUBCENTRO?: true
  }

  export type FRIOSMinAggregateInputType = {
    COD_FRI?: true
    COD_TEM?: true
    COD_EMP?: true
    COD_GRP_FRI?: true
    NOM_FRI?: true
    FDA?: true
    PIN?: true
    ZON?: true
    DIRECCION?: true
    COD_PROVC?: true
    COD_COM?: true
    RUT?: true
    RAZON_SOCIAL?: true
    COD_CENTROCOSTO?: true
    COD_SUBCENTRO?: true
    COD_EMP_CONT?: true
    NOMBRELOGO?: true
    IMAGEN?: true
    EMAIL?: true
    TELEFONO?: true
    FAX?: true
    SW_INACTIVO?: true
  }

  export type FRIOSMaxAggregateInputType = {
    COD_FRI?: true
    COD_TEM?: true
    COD_EMP?: true
    COD_GRP_FRI?: true
    NOM_FRI?: true
    FDA?: true
    PIN?: true
    ZON?: true
    DIRECCION?: true
    COD_PROVC?: true
    COD_COM?: true
    RUT?: true
    RAZON_SOCIAL?: true
    COD_CENTROCOSTO?: true
    COD_SUBCENTRO?: true
    COD_EMP_CONT?: true
    NOMBRELOGO?: true
    IMAGEN?: true
    EMAIL?: true
    TELEFONO?: true
    FAX?: true
    SW_INACTIVO?: true
  }

  export type FRIOSCountAggregateInputType = {
    COD_FRI?: true
    COD_TEM?: true
    COD_EMP?: true
    COD_GRP_FRI?: true
    NOM_FRI?: true
    FDA?: true
    PIN?: true
    ZON?: true
    DIRECCION?: true
    COD_PROVC?: true
    COD_COM?: true
    RUT?: true
    RAZON_SOCIAL?: true
    COD_CENTROCOSTO?: true
    COD_SUBCENTRO?: true
    COD_EMP_CONT?: true
    NOMBRELOGO?: true
    IMAGEN?: true
    EMAIL?: true
    TELEFONO?: true
    FAX?: true
    SW_INACTIVO?: true
    _all?: true
  }

  export type FRIOSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRIOS to aggregate.
     */
    where?: FRIOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRIOS to fetch.
     */
    orderBy?: FRIOSOrderByWithRelationInput | FRIOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRIOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRIOS
    **/
    _count?: true | FRIOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRIOSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRIOSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRIOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRIOSMaxAggregateInputType
  }

  export type GetFRIOSAggregateType<T extends FRIOSAggregateArgs> = {
        [P in keyof T & keyof AggregateFRIOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRIOS[P]>
      : GetScalarType<T[P], AggregateFRIOS[P]>
  }




  export type FRIOSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRIOSWhereInput
    orderBy?: FRIOSOrderByWithAggregationInput | FRIOSOrderByWithAggregationInput[]
    by: FRIOSScalarFieldEnum[] | FRIOSScalarFieldEnum
    having?: FRIOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRIOSCountAggregateInputType | true
    _avg?: FRIOSAvgAggregateInputType
    _sum?: FRIOSSumAggregateInputType
    _min?: FRIOSMinAggregateInputType
    _max?: FRIOSMaxAggregateInputType
  }

  export type FRIOSGroupByOutputType = {
    COD_FRI: string
    COD_TEM: string
    COD_EMP: string
    COD_GRP_FRI: string | null
    NOM_FRI: string
    FDA: string | null
    PIN: string | null
    ZON: string | null
    DIRECCION: string | null
    COD_PROVC: string | null
    COD_COM: string | null
    RUT: string | null
    RAZON_SOCIAL: string | null
    COD_CENTROCOSTO: number | null
    COD_SUBCENTRO: number | null
    COD_EMP_CONT: string | null
    NOMBRELOGO: string | null
    IMAGEN: Buffer | null
    EMAIL: string | null
    TELEFONO: string | null
    FAX: string | null
    SW_INACTIVO: boolean | null
    _count: FRIOSCountAggregateOutputType | null
    _avg: FRIOSAvgAggregateOutputType | null
    _sum: FRIOSSumAggregateOutputType | null
    _min: FRIOSMinAggregateOutputType | null
    _max: FRIOSMaxAggregateOutputType | null
  }

  type GetFRIOSGroupByPayload<T extends FRIOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRIOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRIOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRIOSGroupByOutputType[P]>
            : GetScalarType<T[P], FRIOSGroupByOutputType[P]>
        }
      >
    >


  export type FRIOSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    COD_FRI?: boolean
    COD_TEM?: boolean
    COD_EMP?: boolean
    COD_GRP_FRI?: boolean
    NOM_FRI?: boolean
    FDA?: boolean
    PIN?: boolean
    ZON?: boolean
    DIRECCION?: boolean
    COD_PROVC?: boolean
    COD_COM?: boolean
    RUT?: boolean
    RAZON_SOCIAL?: boolean
    COD_CENTROCOSTO?: boolean
    COD_SUBCENTRO?: boolean
    COD_EMP_CONT?: boolean
    NOMBRELOGO?: boolean
    IMAGEN?: boolean
    EMAIL?: boolean
    TELEFONO?: boolean
    FAX?: boolean
    SW_INACTIVO?: boolean
  }, ExtArgs["result"]["fRIOS"]>


  export type FRIOSSelectScalar = {
    COD_FRI?: boolean
    COD_TEM?: boolean
    COD_EMP?: boolean
    COD_GRP_FRI?: boolean
    NOM_FRI?: boolean
    FDA?: boolean
    PIN?: boolean
    ZON?: boolean
    DIRECCION?: boolean
    COD_PROVC?: boolean
    COD_COM?: boolean
    RUT?: boolean
    RAZON_SOCIAL?: boolean
    COD_CENTROCOSTO?: boolean
    COD_SUBCENTRO?: boolean
    COD_EMP_CONT?: boolean
    NOMBRELOGO?: boolean
    IMAGEN?: boolean
    EMAIL?: boolean
    TELEFONO?: boolean
    FAX?: boolean
    SW_INACTIVO?: boolean
  }


  export type $FRIOSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRIOS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      COD_FRI: string
      COD_TEM: string
      COD_EMP: string
      COD_GRP_FRI: string | null
      NOM_FRI: string
      FDA: string | null
      PIN: string | null
      ZON: string | null
      DIRECCION: string | null
      COD_PROVC: string | null
      COD_COM: string | null
      RUT: string | null
      RAZON_SOCIAL: string | null
      COD_CENTROCOSTO: number | null
      COD_SUBCENTRO: number | null
      COD_EMP_CONT: string | null
      NOMBRELOGO: string | null
      IMAGEN: Buffer | null
      EMAIL: string | null
      TELEFONO: string | null
      FAX: string | null
      SW_INACTIVO: boolean | null
    }, ExtArgs["result"]["fRIOS"]>
    composites: {}
  }

  type FRIOSGetPayload<S extends boolean | null | undefined | FRIOSDefaultArgs> = $Result.GetResult<Prisma.$FRIOSPayload, S>

  type FRIOSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRIOSFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRIOSCountAggregateInputType | true
    }

  export interface FRIOSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRIOS'], meta: { name: 'FRIOS' } }
    /**
     * Find zero or one FRIOS that matches the filter.
     * @param {FRIOSFindUniqueArgs} args - Arguments to find a FRIOS
     * @example
     * // Get one FRIOS
     * const fRIOS = await prisma.fRIOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FRIOSFindUniqueArgs>(args: SelectSubset<T, FRIOSFindUniqueArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FRIOS that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FRIOSFindUniqueOrThrowArgs} args - Arguments to find a FRIOS
     * @example
     * // Get one FRIOS
     * const fRIOS = await prisma.fRIOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FRIOSFindUniqueOrThrowArgs>(args: SelectSubset<T, FRIOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FRIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSFindFirstArgs} args - Arguments to find a FRIOS
     * @example
     * // Get one FRIOS
     * const fRIOS = await prisma.fRIOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FRIOSFindFirstArgs>(args?: SelectSubset<T, FRIOSFindFirstArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FRIOS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSFindFirstOrThrowArgs} args - Arguments to find a FRIOS
     * @example
     * // Get one FRIOS
     * const fRIOS = await prisma.fRIOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FRIOSFindFirstOrThrowArgs>(args?: SelectSubset<T, FRIOSFindFirstOrThrowArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FRIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRIOS
     * const fRIOS = await prisma.fRIOS.findMany()
     * 
     * // Get first 10 FRIOS
     * const fRIOS = await prisma.fRIOS.findMany({ take: 10 })
     * 
     * // Only select the `COD_FRI`
     * const fRIOSWithCOD_FRIOnly = await prisma.fRIOS.findMany({ select: { COD_FRI: true } })
     * 
     */
    findMany<T extends FRIOSFindManyArgs>(args?: SelectSubset<T, FRIOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FRIOS.
     * @param {FRIOSCreateArgs} args - Arguments to create a FRIOS.
     * @example
     * // Create one FRIOS
     * const FRIOS = await prisma.fRIOS.create({
     *   data: {
     *     // ... data to create a FRIOS
     *   }
     * })
     * 
     */
    create<T extends FRIOSCreateArgs>(args: SelectSubset<T, FRIOSCreateArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FRIOS.
     * @param {FRIOSCreateManyArgs} args - Arguments to create many FRIOS.
     * @example
     * // Create many FRIOS
     * const fRIOS = await prisma.fRIOS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FRIOSCreateManyArgs>(args?: SelectSubset<T, FRIOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRIOS.
     * @param {FRIOSDeleteArgs} args - Arguments to delete one FRIOS.
     * @example
     * // Delete one FRIOS
     * const FRIOS = await prisma.fRIOS.delete({
     *   where: {
     *     // ... filter to delete one FRIOS
     *   }
     * })
     * 
     */
    delete<T extends FRIOSDeleteArgs>(args: SelectSubset<T, FRIOSDeleteArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FRIOS.
     * @param {FRIOSUpdateArgs} args - Arguments to update one FRIOS.
     * @example
     * // Update one FRIOS
     * const fRIOS = await prisma.fRIOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FRIOSUpdateArgs>(args: SelectSubset<T, FRIOSUpdateArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FRIOS.
     * @param {FRIOSDeleteManyArgs} args - Arguments to filter FRIOS to delete.
     * @example
     * // Delete a few FRIOS
     * const { count } = await prisma.fRIOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FRIOSDeleteManyArgs>(args?: SelectSubset<T, FRIOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRIOS
     * const fRIOS = await prisma.fRIOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FRIOSUpdateManyArgs>(args: SelectSubset<T, FRIOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRIOS.
     * @param {FRIOSUpsertArgs} args - Arguments to update or create a FRIOS.
     * @example
     * // Update or create a FRIOS
     * const fRIOS = await prisma.fRIOS.upsert({
     *   create: {
     *     // ... data to create a FRIOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRIOS we want to update
     *   }
     * })
     */
    upsert<T extends FRIOSUpsertArgs>(args: SelectSubset<T, FRIOSUpsertArgs<ExtArgs>>): Prisma__FRIOSClient<$Result.GetResult<Prisma.$FRIOSPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FRIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSCountArgs} args - Arguments to filter FRIOS to count.
     * @example
     * // Count the number of FRIOS
     * const count = await prisma.fRIOS.count({
     *   where: {
     *     // ... the filter for the FRIOS we want to count
     *   }
     * })
    **/
    count<T extends FRIOSCountArgs>(
      args?: Subset<T, FRIOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRIOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FRIOSAggregateArgs>(args: Subset<T, FRIOSAggregateArgs>): Prisma.PrismaPromise<GetFRIOSAggregateType<T>>

    /**
     * Group by FRIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRIOSGroupByArgs} args - Group by arguments.
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
      T extends FRIOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRIOSGroupByArgs['orderBy'] }
        : { orderBy?: FRIOSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FRIOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRIOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRIOS model
   */
  readonly fields: FRIOSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRIOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRIOSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FRIOS model
   */ 
  interface FRIOSFieldRefs {
    readonly COD_FRI: FieldRef<"FRIOS", 'String'>
    readonly COD_TEM: FieldRef<"FRIOS", 'String'>
    readonly COD_EMP: FieldRef<"FRIOS", 'String'>
    readonly COD_GRP_FRI: FieldRef<"FRIOS", 'String'>
    readonly NOM_FRI: FieldRef<"FRIOS", 'String'>
    readonly FDA: FieldRef<"FRIOS", 'String'>
    readonly PIN: FieldRef<"FRIOS", 'String'>
    readonly ZON: FieldRef<"FRIOS", 'String'>
    readonly DIRECCION: FieldRef<"FRIOS", 'String'>
    readonly COD_PROVC: FieldRef<"FRIOS", 'String'>
    readonly COD_COM: FieldRef<"FRIOS", 'String'>
    readonly RUT: FieldRef<"FRIOS", 'String'>
    readonly RAZON_SOCIAL: FieldRef<"FRIOS", 'String'>
    readonly COD_CENTROCOSTO: FieldRef<"FRIOS", 'Int'>
    readonly COD_SUBCENTRO: FieldRef<"FRIOS", 'Int'>
    readonly COD_EMP_CONT: FieldRef<"FRIOS", 'String'>
    readonly NOMBRELOGO: FieldRef<"FRIOS", 'String'>
    readonly IMAGEN: FieldRef<"FRIOS", 'Bytes'>
    readonly EMAIL: FieldRef<"FRIOS", 'String'>
    readonly TELEFONO: FieldRef<"FRIOS", 'String'>
    readonly FAX: FieldRef<"FRIOS", 'String'>
    readonly SW_INACTIVO: FieldRef<"FRIOS", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FRIOS findUnique
   */
  export type FRIOSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter, which FRIOS to fetch.
     */
    where: FRIOSWhereUniqueInput
  }

  /**
   * FRIOS findUniqueOrThrow
   */
  export type FRIOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter, which FRIOS to fetch.
     */
    where: FRIOSWhereUniqueInput
  }

  /**
   * FRIOS findFirst
   */
  export type FRIOSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter, which FRIOS to fetch.
     */
    where?: FRIOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRIOS to fetch.
     */
    orderBy?: FRIOSOrderByWithRelationInput | FRIOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRIOS.
     */
    cursor?: FRIOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRIOS.
     */
    distinct?: FRIOSScalarFieldEnum | FRIOSScalarFieldEnum[]
  }

  /**
   * FRIOS findFirstOrThrow
   */
  export type FRIOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter, which FRIOS to fetch.
     */
    where?: FRIOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRIOS to fetch.
     */
    orderBy?: FRIOSOrderByWithRelationInput | FRIOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRIOS.
     */
    cursor?: FRIOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRIOS.
     */
    distinct?: FRIOSScalarFieldEnum | FRIOSScalarFieldEnum[]
  }

  /**
   * FRIOS findMany
   */
  export type FRIOSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter, which FRIOS to fetch.
     */
    where?: FRIOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRIOS to fetch.
     */
    orderBy?: FRIOSOrderByWithRelationInput | FRIOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRIOS.
     */
    cursor?: FRIOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRIOS.
     */
    skip?: number
    distinct?: FRIOSScalarFieldEnum | FRIOSScalarFieldEnum[]
  }

  /**
   * FRIOS create
   */
  export type FRIOSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * The data needed to create a FRIOS.
     */
    data: XOR<FRIOSCreateInput, FRIOSUncheckedCreateInput>
  }

  /**
   * FRIOS createMany
   */
  export type FRIOSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRIOS.
     */
    data: FRIOSCreateManyInput | FRIOSCreateManyInput[]
  }

  /**
   * FRIOS update
   */
  export type FRIOSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * The data needed to update a FRIOS.
     */
    data: XOR<FRIOSUpdateInput, FRIOSUncheckedUpdateInput>
    /**
     * Choose, which FRIOS to update.
     */
    where: FRIOSWhereUniqueInput
  }

  /**
   * FRIOS updateMany
   */
  export type FRIOSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRIOS.
     */
    data: XOR<FRIOSUpdateManyMutationInput, FRIOSUncheckedUpdateManyInput>
    /**
     * Filter which FRIOS to update
     */
    where?: FRIOSWhereInput
  }

  /**
   * FRIOS upsert
   */
  export type FRIOSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * The filter to search for the FRIOS to update in case it exists.
     */
    where: FRIOSWhereUniqueInput
    /**
     * In case the FRIOS found by the `where` argument doesn't exist, create a new FRIOS with this data.
     */
    create: XOR<FRIOSCreateInput, FRIOSUncheckedCreateInput>
    /**
     * In case the FRIOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRIOSUpdateInput, FRIOSUncheckedUpdateInput>
  }

  /**
   * FRIOS delete
   */
  export type FRIOSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
    /**
     * Filter which FRIOS to delete.
     */
    where: FRIOSWhereUniqueInput
  }

  /**
   * FRIOS deleteMany
   */
  export type FRIOSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRIOS to delete
     */
    where?: FRIOSWhereInput
  }

  /**
   * FRIOS without action
   */
  export type FRIOSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRIOS
     */
    select?: FRIOSSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CAMARASScalarFieldEnum: {
    COD_EMP: 'COD_EMP',
    COD_TEM: 'COD_TEM',
    COD_FRI: 'COD_FRI',
    COD_CAM: 'COD_CAM',
    DES_CAM: 'DES_CAM',
    TIPO_CAMARA: 'TIPO_CAMARA',
    BANDAS: 'BANDAS',
    FILAS: 'FILAS',
    PISOS: 'PISOS',
    TUNEL: 'TUNEL'
  };

  export type CAMARASScalarFieldEnum = (typeof CAMARASScalarFieldEnum)[keyof typeof CAMARASScalarFieldEnum]


  export const FRIOSScalarFieldEnum: {
    COD_FRI: 'COD_FRI',
    COD_TEM: 'COD_TEM',
    COD_EMP: 'COD_EMP',
    COD_GRP_FRI: 'COD_GRP_FRI',
    NOM_FRI: 'NOM_FRI',
    FDA: 'FDA',
    PIN: 'PIN',
    ZON: 'ZON',
    DIRECCION: 'DIRECCION',
    COD_PROVC: 'COD_PROVC',
    COD_COM: 'COD_COM',
    RUT: 'RUT',
    RAZON_SOCIAL: 'RAZON_SOCIAL',
    COD_CENTROCOSTO: 'COD_CENTROCOSTO',
    COD_SUBCENTRO: 'COD_SUBCENTRO',
    COD_EMP_CONT: 'COD_EMP_CONT',
    NOMBRELOGO: 'NOMBRELOGO',
    IMAGEN: 'IMAGEN',
    EMAIL: 'EMAIL',
    TELEFONO: 'TELEFONO',
    FAX: 'FAX',
    SW_INACTIVO: 'SW_INACTIVO'
  };

  export type FRIOSScalarFieldEnum = (typeof FRIOSScalarFieldEnum)[keyof typeof FRIOSScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CAMARASWhereInput = {
    AND?: CAMARASWhereInput | CAMARASWhereInput[]
    OR?: CAMARASWhereInput[]
    NOT?: CAMARASWhereInput | CAMARASWhereInput[]
    COD_EMP?: StringFilter<"CAMARAS"> | string
    COD_TEM?: StringFilter<"CAMARAS"> | string
    COD_FRI?: StringFilter<"CAMARAS"> | string
    COD_CAM?: StringFilter<"CAMARAS"> | string
    DES_CAM?: StringNullableFilter<"CAMARAS"> | string | null
    TIPO_CAMARA?: StringNullableFilter<"CAMARAS"> | string | null
    BANDAS?: IntNullableFilter<"CAMARAS"> | number | null
    FILAS?: IntNullableFilter<"CAMARAS"> | number | null
    PISOS?: IntNullableFilter<"CAMARAS"> | number | null
    TUNEL?: BoolFilter<"CAMARAS"> | boolean
  }

  export type CAMARASOrderByWithRelationInput = {
    COD_EMP?: SortOrder
    COD_TEM?: SortOrder
    COD_FRI?: SortOrder
    COD_CAM?: SortOrder
    DES_CAM?: SortOrderInput | SortOrder
    TIPO_CAMARA?: SortOrderInput | SortOrder
    BANDAS?: SortOrderInput | SortOrder
    FILAS?: SortOrderInput | SortOrder
    PISOS?: SortOrderInput | SortOrder
    TUNEL?: SortOrder
  }

  export type CAMARASWhereUniqueInput = Prisma.AtLeast<{
    COD_EMP_COD_TEM_COD_FRI_COD_CAM?: CAMARASCOD_EMPCOD_TEMCOD_FRICOD_CAMCompoundUniqueInput
    AND?: CAMARASWhereInput | CAMARASWhereInput[]
    OR?: CAMARASWhereInput[]
    NOT?: CAMARASWhereInput | CAMARASWhereInput[]
    COD_EMP?: StringFilter<"CAMARAS"> | string
    COD_TEM?: StringFilter<"CAMARAS"> | string
    COD_FRI?: StringFilter<"CAMARAS"> | string
    COD_CAM?: StringFilter<"CAMARAS"> | string
    DES_CAM?: StringNullableFilter<"CAMARAS"> | string | null
    TIPO_CAMARA?: StringNullableFilter<"CAMARAS"> | string | null
    BANDAS?: IntNullableFilter<"CAMARAS"> | number | null
    FILAS?: IntNullableFilter<"CAMARAS"> | number | null
    PISOS?: IntNullableFilter<"CAMARAS"> | number | null
    TUNEL?: BoolFilter<"CAMARAS"> | boolean
  }, "COD_EMP_COD_TEM_COD_FRI_COD_CAM">

  export type CAMARASOrderByWithAggregationInput = {
    COD_EMP?: SortOrder
    COD_TEM?: SortOrder
    COD_FRI?: SortOrder
    COD_CAM?: SortOrder
    DES_CAM?: SortOrderInput | SortOrder
    TIPO_CAMARA?: SortOrderInput | SortOrder
    BANDAS?: SortOrderInput | SortOrder
    FILAS?: SortOrderInput | SortOrder
    PISOS?: SortOrderInput | SortOrder
    TUNEL?: SortOrder
    _count?: CAMARASCountOrderByAggregateInput
    _avg?: CAMARASAvgOrderByAggregateInput
    _max?: CAMARASMaxOrderByAggregateInput
    _min?: CAMARASMinOrderByAggregateInput
    _sum?: CAMARASSumOrderByAggregateInput
  }

  export type CAMARASScalarWhereWithAggregatesInput = {
    AND?: CAMARASScalarWhereWithAggregatesInput | CAMARASScalarWhereWithAggregatesInput[]
    OR?: CAMARASScalarWhereWithAggregatesInput[]
    NOT?: CAMARASScalarWhereWithAggregatesInput | CAMARASScalarWhereWithAggregatesInput[]
    COD_EMP?: StringWithAggregatesFilter<"CAMARAS"> | string
    COD_TEM?: StringWithAggregatesFilter<"CAMARAS"> | string
    COD_FRI?: StringWithAggregatesFilter<"CAMARAS"> | string
    COD_CAM?: StringWithAggregatesFilter<"CAMARAS"> | string
    DES_CAM?: StringNullableWithAggregatesFilter<"CAMARAS"> | string | null
    TIPO_CAMARA?: StringNullableWithAggregatesFilter<"CAMARAS"> | string | null
    BANDAS?: IntNullableWithAggregatesFilter<"CAMARAS"> | number | null
    FILAS?: IntNullableWithAggregatesFilter<"CAMARAS"> | number | null
    PISOS?: IntNullableWithAggregatesFilter<"CAMARAS"> | number | null
    TUNEL?: BoolWithAggregatesFilter<"CAMARAS"> | boolean
  }

  export type FRIOSWhereInput = {
    AND?: FRIOSWhereInput | FRIOSWhereInput[]
    OR?: FRIOSWhereInput[]
    NOT?: FRIOSWhereInput | FRIOSWhereInput[]
    COD_FRI?: StringFilter<"FRIOS"> | string
    COD_TEM?: StringFilter<"FRIOS"> | string
    COD_EMP?: StringFilter<"FRIOS"> | string
    COD_GRP_FRI?: StringNullableFilter<"FRIOS"> | string | null
    NOM_FRI?: StringFilter<"FRIOS"> | string
    FDA?: StringNullableFilter<"FRIOS"> | string | null
    PIN?: StringNullableFilter<"FRIOS"> | string | null
    ZON?: StringNullableFilter<"FRIOS"> | string | null
    DIRECCION?: StringNullableFilter<"FRIOS"> | string | null
    COD_PROVC?: StringNullableFilter<"FRIOS"> | string | null
    COD_COM?: StringNullableFilter<"FRIOS"> | string | null
    RUT?: StringNullableFilter<"FRIOS"> | string | null
    RAZON_SOCIAL?: StringNullableFilter<"FRIOS"> | string | null
    COD_CENTROCOSTO?: IntNullableFilter<"FRIOS"> | number | null
    COD_SUBCENTRO?: IntNullableFilter<"FRIOS"> | number | null
    COD_EMP_CONT?: StringNullableFilter<"FRIOS"> | string | null
    NOMBRELOGO?: StringNullableFilter<"FRIOS"> | string | null
    IMAGEN?: BytesNullableFilter<"FRIOS"> | Buffer | null
    EMAIL?: StringNullableFilter<"FRIOS"> | string | null
    TELEFONO?: StringNullableFilter<"FRIOS"> | string | null
    FAX?: StringNullableFilter<"FRIOS"> | string | null
    SW_INACTIVO?: BoolNullableFilter<"FRIOS"> | boolean | null
  }

  export type FRIOSOrderByWithRelationInput = {
    COD_FRI?: SortOrder
    COD_TEM?: SortOrder
    COD_EMP?: SortOrder
    COD_GRP_FRI?: SortOrderInput | SortOrder
    NOM_FRI?: SortOrder
    FDA?: SortOrderInput | SortOrder
    PIN?: SortOrderInput | SortOrder
    ZON?: SortOrderInput | SortOrder
    DIRECCION?: SortOrderInput | SortOrder
    COD_PROVC?: SortOrderInput | SortOrder
    COD_COM?: SortOrderInput | SortOrder
    RUT?: SortOrderInput | SortOrder
    RAZON_SOCIAL?: SortOrderInput | SortOrder
    COD_CENTROCOSTO?: SortOrderInput | SortOrder
    COD_SUBCENTRO?: SortOrderInput | SortOrder
    COD_EMP_CONT?: SortOrderInput | SortOrder
    NOMBRELOGO?: SortOrderInput | SortOrder
    IMAGEN?: SortOrderInput | SortOrder
    EMAIL?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    FAX?: SortOrderInput | SortOrder
    SW_INACTIVO?: SortOrderInput | SortOrder
  }

  export type FRIOSWhereUniqueInput = Prisma.AtLeast<{
    COD_FRI_COD_TEM_COD_EMP?: FRIOSCOD_FRICOD_TEMCOD_EMPCompoundUniqueInput
    AND?: FRIOSWhereInput | FRIOSWhereInput[]
    OR?: FRIOSWhereInput[]
    NOT?: FRIOSWhereInput | FRIOSWhereInput[]
    COD_FRI?: StringFilter<"FRIOS"> | string
    COD_TEM?: StringFilter<"FRIOS"> | string
    COD_EMP?: StringFilter<"FRIOS"> | string
    COD_GRP_FRI?: StringNullableFilter<"FRIOS"> | string | null
    NOM_FRI?: StringFilter<"FRIOS"> | string
    FDA?: StringNullableFilter<"FRIOS"> | string | null
    PIN?: StringNullableFilter<"FRIOS"> | string | null
    ZON?: StringNullableFilter<"FRIOS"> | string | null
    DIRECCION?: StringNullableFilter<"FRIOS"> | string | null
    COD_PROVC?: StringNullableFilter<"FRIOS"> | string | null
    COD_COM?: StringNullableFilter<"FRIOS"> | string | null
    RUT?: StringNullableFilter<"FRIOS"> | string | null
    RAZON_SOCIAL?: StringNullableFilter<"FRIOS"> | string | null
    COD_CENTROCOSTO?: IntNullableFilter<"FRIOS"> | number | null
    COD_SUBCENTRO?: IntNullableFilter<"FRIOS"> | number | null
    COD_EMP_CONT?: StringNullableFilter<"FRIOS"> | string | null
    NOMBRELOGO?: StringNullableFilter<"FRIOS"> | string | null
    IMAGEN?: BytesNullableFilter<"FRIOS"> | Buffer | null
    EMAIL?: StringNullableFilter<"FRIOS"> | string | null
    TELEFONO?: StringNullableFilter<"FRIOS"> | string | null
    FAX?: StringNullableFilter<"FRIOS"> | string | null
    SW_INACTIVO?: BoolNullableFilter<"FRIOS"> | boolean | null
  }, "COD_FRI_COD_TEM_COD_EMP">

  export type FRIOSOrderByWithAggregationInput = {
    COD_FRI?: SortOrder
    COD_TEM?: SortOrder
    COD_EMP?: SortOrder
    COD_GRP_FRI?: SortOrderInput | SortOrder
    NOM_FRI?: SortOrder
    FDA?: SortOrderInput | SortOrder
    PIN?: SortOrderInput | SortOrder
    ZON?: SortOrderInput | SortOrder
    DIRECCION?: SortOrderInput | SortOrder
    COD_PROVC?: SortOrderInput | SortOrder
    COD_COM?: SortOrderInput | SortOrder
    RUT?: SortOrderInput | SortOrder
    RAZON_SOCIAL?: SortOrderInput | SortOrder
    COD_CENTROCOSTO?: SortOrderInput | SortOrder
    COD_SUBCENTRO?: SortOrderInput | SortOrder
    COD_EMP_CONT?: SortOrderInput | SortOrder
    NOMBRELOGO?: SortOrderInput | SortOrder
    IMAGEN?: SortOrderInput | SortOrder
    EMAIL?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    FAX?: SortOrderInput | SortOrder
    SW_INACTIVO?: SortOrderInput | SortOrder
    _count?: FRIOSCountOrderByAggregateInput
    _avg?: FRIOSAvgOrderByAggregateInput
    _max?: FRIOSMaxOrderByAggregateInput
    _min?: FRIOSMinOrderByAggregateInput
    _sum?: FRIOSSumOrderByAggregateInput
  }

  export type FRIOSScalarWhereWithAggregatesInput = {
    AND?: FRIOSScalarWhereWithAggregatesInput | FRIOSScalarWhereWithAggregatesInput[]
    OR?: FRIOSScalarWhereWithAggregatesInput[]
    NOT?: FRIOSScalarWhereWithAggregatesInput | FRIOSScalarWhereWithAggregatesInput[]
    COD_FRI?: StringWithAggregatesFilter<"FRIOS"> | string
    COD_TEM?: StringWithAggregatesFilter<"FRIOS"> | string
    COD_EMP?: StringWithAggregatesFilter<"FRIOS"> | string
    COD_GRP_FRI?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    NOM_FRI?: StringWithAggregatesFilter<"FRIOS"> | string
    FDA?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    PIN?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    ZON?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    DIRECCION?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    COD_PROVC?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    COD_COM?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    RUT?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    RAZON_SOCIAL?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    COD_CENTROCOSTO?: IntNullableWithAggregatesFilter<"FRIOS"> | number | null
    COD_SUBCENTRO?: IntNullableWithAggregatesFilter<"FRIOS"> | number | null
    COD_EMP_CONT?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    NOMBRELOGO?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    IMAGEN?: BytesNullableWithAggregatesFilter<"FRIOS"> | Buffer | null
    EMAIL?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    TELEFONO?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    FAX?: StringNullableWithAggregatesFilter<"FRIOS"> | string | null
    SW_INACTIVO?: BoolNullableWithAggregatesFilter<"FRIOS"> | boolean | null
  }

  export type CAMARASCreateInput = {
    COD_EMP: string
    COD_TEM: string
    COD_FRI: string
    COD_CAM: string
    DES_CAM?: string | null
    TIPO_CAMARA?: string | null
    BANDAS?: number | null
    FILAS?: number | null
    PISOS?: number | null
    TUNEL?: boolean
  }

  export type CAMARASUncheckedCreateInput = {
    COD_EMP: string
    COD_TEM: string
    COD_FRI: string
    COD_CAM: string
    DES_CAM?: string | null
    TIPO_CAMARA?: string | null
    BANDAS?: number | null
    FILAS?: number | null
    PISOS?: number | null
    TUNEL?: boolean
  }

  export type CAMARASUpdateInput = {
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_CAM?: StringFieldUpdateOperationsInput | string
    DES_CAM?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO_CAMARA?: NullableStringFieldUpdateOperationsInput | string | null
    BANDAS?: NullableIntFieldUpdateOperationsInput | number | null
    FILAS?: NullableIntFieldUpdateOperationsInput | number | null
    PISOS?: NullableIntFieldUpdateOperationsInput | number | null
    TUNEL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CAMARASUncheckedUpdateInput = {
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_CAM?: StringFieldUpdateOperationsInput | string
    DES_CAM?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO_CAMARA?: NullableStringFieldUpdateOperationsInput | string | null
    BANDAS?: NullableIntFieldUpdateOperationsInput | number | null
    FILAS?: NullableIntFieldUpdateOperationsInput | number | null
    PISOS?: NullableIntFieldUpdateOperationsInput | number | null
    TUNEL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CAMARASCreateManyInput = {
    COD_EMP: string
    COD_TEM: string
    COD_FRI: string
    COD_CAM: string
    DES_CAM?: string | null
    TIPO_CAMARA?: string | null
    BANDAS?: number | null
    FILAS?: number | null
    PISOS?: number | null
    TUNEL?: boolean
  }

  export type CAMARASUpdateManyMutationInput = {
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_CAM?: StringFieldUpdateOperationsInput | string
    DES_CAM?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO_CAMARA?: NullableStringFieldUpdateOperationsInput | string | null
    BANDAS?: NullableIntFieldUpdateOperationsInput | number | null
    FILAS?: NullableIntFieldUpdateOperationsInput | number | null
    PISOS?: NullableIntFieldUpdateOperationsInput | number | null
    TUNEL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CAMARASUncheckedUpdateManyInput = {
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_CAM?: StringFieldUpdateOperationsInput | string
    DES_CAM?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO_CAMARA?: NullableStringFieldUpdateOperationsInput | string | null
    BANDAS?: NullableIntFieldUpdateOperationsInput | number | null
    FILAS?: NullableIntFieldUpdateOperationsInput | number | null
    PISOS?: NullableIntFieldUpdateOperationsInput | number | null
    TUNEL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FRIOSCreateInput = {
    COD_FRI: string
    COD_TEM: string
    COD_EMP: string
    COD_GRP_FRI?: string | null
    NOM_FRI: string
    FDA?: string | null
    PIN?: string | null
    ZON?: string | null
    DIRECCION?: string | null
    COD_PROVC?: string | null
    COD_COM?: string | null
    RUT?: string | null
    RAZON_SOCIAL?: string | null
    COD_CENTROCOSTO?: number | null
    COD_SUBCENTRO?: number | null
    COD_EMP_CONT?: string | null
    NOMBRELOGO?: string | null
    IMAGEN?: Buffer | null
    EMAIL?: string | null
    TELEFONO?: string | null
    FAX?: string | null
    SW_INACTIVO?: boolean | null
  }

  export type FRIOSUncheckedCreateInput = {
    COD_FRI: string
    COD_TEM: string
    COD_EMP: string
    COD_GRP_FRI?: string | null
    NOM_FRI: string
    FDA?: string | null
    PIN?: string | null
    ZON?: string | null
    DIRECCION?: string | null
    COD_PROVC?: string | null
    COD_COM?: string | null
    RUT?: string | null
    RAZON_SOCIAL?: string | null
    COD_CENTROCOSTO?: number | null
    COD_SUBCENTRO?: number | null
    COD_EMP_CONT?: string | null
    NOMBRELOGO?: string | null
    IMAGEN?: Buffer | null
    EMAIL?: string | null
    TELEFONO?: string | null
    FAX?: string | null
    SW_INACTIVO?: boolean | null
  }

  export type FRIOSUpdateInput = {
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_GRP_FRI?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FRI?: StringFieldUpdateOperationsInput | string
    FDA?: NullableStringFieldUpdateOperationsInput | string | null
    PIN?: NullableStringFieldUpdateOperationsInput | string | null
    ZON?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PROVC?: NullableStringFieldUpdateOperationsInput | string | null
    COD_COM?: NullableStringFieldUpdateOperationsInput | string | null
    RUT?: NullableStringFieldUpdateOperationsInput | string | null
    RAZON_SOCIAL?: NullableStringFieldUpdateOperationsInput | string | null
    COD_CENTROCOSTO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUBCENTRO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_EMP_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRELOGO?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGEN?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    FAX?: NullableStringFieldUpdateOperationsInput | string | null
    SW_INACTIVO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FRIOSUncheckedUpdateInput = {
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_GRP_FRI?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FRI?: StringFieldUpdateOperationsInput | string
    FDA?: NullableStringFieldUpdateOperationsInput | string | null
    PIN?: NullableStringFieldUpdateOperationsInput | string | null
    ZON?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PROVC?: NullableStringFieldUpdateOperationsInput | string | null
    COD_COM?: NullableStringFieldUpdateOperationsInput | string | null
    RUT?: NullableStringFieldUpdateOperationsInput | string | null
    RAZON_SOCIAL?: NullableStringFieldUpdateOperationsInput | string | null
    COD_CENTROCOSTO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUBCENTRO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_EMP_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRELOGO?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGEN?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    FAX?: NullableStringFieldUpdateOperationsInput | string | null
    SW_INACTIVO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FRIOSCreateManyInput = {
    COD_FRI: string
    COD_TEM: string
    COD_EMP: string
    COD_GRP_FRI?: string | null
    NOM_FRI: string
    FDA?: string | null
    PIN?: string | null
    ZON?: string | null
    DIRECCION?: string | null
    COD_PROVC?: string | null
    COD_COM?: string | null
    RUT?: string | null
    RAZON_SOCIAL?: string | null
    COD_CENTROCOSTO?: number | null
    COD_SUBCENTRO?: number | null
    COD_EMP_CONT?: string | null
    NOMBRELOGO?: string | null
    IMAGEN?: Buffer | null
    EMAIL?: string | null
    TELEFONO?: string | null
    FAX?: string | null
    SW_INACTIVO?: boolean | null
  }

  export type FRIOSUpdateManyMutationInput = {
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_GRP_FRI?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FRI?: StringFieldUpdateOperationsInput | string
    FDA?: NullableStringFieldUpdateOperationsInput | string | null
    PIN?: NullableStringFieldUpdateOperationsInput | string | null
    ZON?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PROVC?: NullableStringFieldUpdateOperationsInput | string | null
    COD_COM?: NullableStringFieldUpdateOperationsInput | string | null
    RUT?: NullableStringFieldUpdateOperationsInput | string | null
    RAZON_SOCIAL?: NullableStringFieldUpdateOperationsInput | string | null
    COD_CENTROCOSTO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUBCENTRO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_EMP_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRELOGO?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGEN?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    FAX?: NullableStringFieldUpdateOperationsInput | string | null
    SW_INACTIVO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FRIOSUncheckedUpdateManyInput = {
    COD_FRI?: StringFieldUpdateOperationsInput | string
    COD_TEM?: StringFieldUpdateOperationsInput | string
    COD_EMP?: StringFieldUpdateOperationsInput | string
    COD_GRP_FRI?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FRI?: StringFieldUpdateOperationsInput | string
    FDA?: NullableStringFieldUpdateOperationsInput | string | null
    PIN?: NullableStringFieldUpdateOperationsInput | string | null
    ZON?: NullableStringFieldUpdateOperationsInput | string | null
    DIRECCION?: NullableStringFieldUpdateOperationsInput | string | null
    COD_PROVC?: NullableStringFieldUpdateOperationsInput | string | null
    COD_COM?: NullableStringFieldUpdateOperationsInput | string | null
    RUT?: NullableStringFieldUpdateOperationsInput | string | null
    RAZON_SOCIAL?: NullableStringFieldUpdateOperationsInput | string | null
    COD_CENTROCOSTO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUBCENTRO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_EMP_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRELOGO?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGEN?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    FAX?: NullableStringFieldUpdateOperationsInput | string | null
    SW_INACTIVO?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CAMARASCOD_EMPCOD_TEMCOD_FRICOD_CAMCompoundUniqueInput = {
    COD_EMP: string
    COD_TEM: string
    COD_FRI: string
    COD_CAM: string
  }

  export type CAMARASCountOrderByAggregateInput = {
    COD_EMP?: SortOrder
    COD_TEM?: SortOrder
    COD_FRI?: SortOrder
    COD_CAM?: SortOrder
    DES_CAM?: SortOrder
    TIPO_CAMARA?: SortOrder
    BANDAS?: SortOrder
    FILAS?: SortOrder
    PISOS?: SortOrder
    TUNEL?: SortOrder
  }

  export type CAMARASAvgOrderByAggregateInput = {
    BANDAS?: SortOrder
    FILAS?: SortOrder
    PISOS?: SortOrder
  }

  export type CAMARASMaxOrderByAggregateInput = {
    COD_EMP?: SortOrder
    COD_TEM?: SortOrder
    COD_FRI?: SortOrder
    COD_CAM?: SortOrder
    DES_CAM?: SortOrder
    TIPO_CAMARA?: SortOrder
    BANDAS?: SortOrder
    FILAS?: SortOrder
    PISOS?: SortOrder
    TUNEL?: SortOrder
  }

  export type CAMARASMinOrderByAggregateInput = {
    COD_EMP?: SortOrder
    COD_TEM?: SortOrder
    COD_FRI?: SortOrder
    COD_CAM?: SortOrder
    DES_CAM?: SortOrder
    TIPO_CAMARA?: SortOrder
    BANDAS?: SortOrder
    FILAS?: SortOrder
    PISOS?: SortOrder
    TUNEL?: SortOrder
  }

  export type CAMARASSumOrderByAggregateInput = {
    BANDAS?: SortOrder
    FILAS?: SortOrder
    PISOS?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FRIOSCOD_FRICOD_TEMCOD_EMPCompoundUniqueInput = {
    COD_FRI: string
    COD_TEM: string
    COD_EMP: string
  }

  export type FRIOSCountOrderByAggregateInput = {
    COD_FRI?: SortOrder
    COD_TEM?: SortOrder
    COD_EMP?: SortOrder
    COD_GRP_FRI?: SortOrder
    NOM_FRI?: SortOrder
    FDA?: SortOrder
    PIN?: SortOrder
    ZON?: SortOrder
    DIRECCION?: SortOrder
    COD_PROVC?: SortOrder
    COD_COM?: SortOrder
    RUT?: SortOrder
    RAZON_SOCIAL?: SortOrder
    COD_CENTROCOSTO?: SortOrder
    COD_SUBCENTRO?: SortOrder
    COD_EMP_CONT?: SortOrder
    NOMBRELOGO?: SortOrder
    IMAGEN?: SortOrder
    EMAIL?: SortOrder
    TELEFONO?: SortOrder
    FAX?: SortOrder
    SW_INACTIVO?: SortOrder
  }

  export type FRIOSAvgOrderByAggregateInput = {
    COD_CENTROCOSTO?: SortOrder
    COD_SUBCENTRO?: SortOrder
  }

  export type FRIOSMaxOrderByAggregateInput = {
    COD_FRI?: SortOrder
    COD_TEM?: SortOrder
    COD_EMP?: SortOrder
    COD_GRP_FRI?: SortOrder
    NOM_FRI?: SortOrder
    FDA?: SortOrder
    PIN?: SortOrder
    ZON?: SortOrder
    DIRECCION?: SortOrder
    COD_PROVC?: SortOrder
    COD_COM?: SortOrder
    RUT?: SortOrder
    RAZON_SOCIAL?: SortOrder
    COD_CENTROCOSTO?: SortOrder
    COD_SUBCENTRO?: SortOrder
    COD_EMP_CONT?: SortOrder
    NOMBRELOGO?: SortOrder
    IMAGEN?: SortOrder
    EMAIL?: SortOrder
    TELEFONO?: SortOrder
    FAX?: SortOrder
    SW_INACTIVO?: SortOrder
  }

  export type FRIOSMinOrderByAggregateInput = {
    COD_FRI?: SortOrder
    COD_TEM?: SortOrder
    COD_EMP?: SortOrder
    COD_GRP_FRI?: SortOrder
    NOM_FRI?: SortOrder
    FDA?: SortOrder
    PIN?: SortOrder
    ZON?: SortOrder
    DIRECCION?: SortOrder
    COD_PROVC?: SortOrder
    COD_COM?: SortOrder
    RUT?: SortOrder
    RAZON_SOCIAL?: SortOrder
    COD_CENTROCOSTO?: SortOrder
    COD_SUBCENTRO?: SortOrder
    COD_EMP_CONT?: SortOrder
    NOMBRELOGO?: SortOrder
    IMAGEN?: SortOrder
    EMAIL?: SortOrder
    TELEFONO?: SortOrder
    FAX?: SortOrder
    SW_INACTIVO?: SortOrder
  }

  export type FRIOSSumOrderByAggregateInput = {
    COD_CENTROCOSTO?: SortOrder
    COD_SUBCENTRO?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CAMARASDefaultArgs instead
     */
    export type CAMARASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CAMARASDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRIOSDefaultArgs instead
     */
    export type FRIOSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRIOSDefaultArgs<ExtArgs>

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