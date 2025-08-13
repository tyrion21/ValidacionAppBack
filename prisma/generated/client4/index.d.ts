
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
 * Model validaciones
 * 
 */
export type validaciones = $Result.DefaultSelection<Prisma.$validacionesPayload>
/**
 * Model dm_motivo_rechazo
 * 
 */
export type dm_motivo_rechazo = $Result.DefaultSelection<Prisma.$dm_motivo_rechazoPayload>
/**
 * Model rechazados
 * 
 */
export type rechazados = $Result.DefaultSelection<Prisma.$rechazadosPayload>
/**
 * Model v_cajas_packing
 * 
 */
export type v_cajas_packing = $Result.DefaultSelection<Prisma.$v_cajas_packingPayload>
/**
 * Model v_cajas_validadas
 * 
 */
export type v_cajas_validadas = $Result.DefaultSelection<Prisma.$v_cajas_validadasPayload>
/**
 * Model v_cajas_rechazadas
 * 
 */
export type v_cajas_rechazadas = $Result.DefaultSelection<Prisma.$v_cajas_rechazadasPayload>
/**
 * Model v_informe_diario
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type v_informe_diario = $Result.DefaultSelection<Prisma.$v_informe_diarioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Validaciones
 * const validaciones = await prisma.validaciones.findMany()
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
   * // Fetch zero or more Validaciones
   * const validaciones = await prisma.validaciones.findMany()
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
   * `prisma.validaciones`: Exposes CRUD operations for the **validaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Validaciones
    * const validaciones = await prisma.validaciones.findMany()
    * ```
    */
  get validaciones(): Prisma.validacionesDelegate<ExtArgs>;

  /**
   * `prisma.dm_motivo_rechazo`: Exposes CRUD operations for the **dm_motivo_rechazo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dm_motivo_rechazos
    * const dm_motivo_rechazos = await prisma.dm_motivo_rechazo.findMany()
    * ```
    */
  get dm_motivo_rechazo(): Prisma.dm_motivo_rechazoDelegate<ExtArgs>;

  /**
   * `prisma.rechazados`: Exposes CRUD operations for the **rechazados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rechazados
    * const rechazados = await prisma.rechazados.findMany()
    * ```
    */
  get rechazados(): Prisma.rechazadosDelegate<ExtArgs>;

  /**
   * `prisma.v_cajas_packing`: Exposes CRUD operations for the **v_cajas_packing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_cajas_packings
    * const v_cajas_packings = await prisma.v_cajas_packing.findMany()
    * ```
    */
  get v_cajas_packing(): Prisma.v_cajas_packingDelegate<ExtArgs>;

  /**
   * `prisma.v_cajas_validadas`: Exposes CRUD operations for the **v_cajas_validadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_cajas_validadas
    * const v_cajas_validadas = await prisma.v_cajas_validadas.findMany()
    * ```
    */
  get v_cajas_validadas(): Prisma.v_cajas_validadasDelegate<ExtArgs>;

  /**
   * `prisma.v_cajas_rechazadas`: Exposes CRUD operations for the **v_cajas_rechazadas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_cajas_rechazadas
    * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findMany()
    * ```
    */
  get v_cajas_rechazadas(): Prisma.v_cajas_rechazadasDelegate<ExtArgs>;

  /**
   * `prisma.v_informe_diario`: Exposes CRUD operations for the **v_informe_diario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_informe_diarios
    * const v_informe_diarios = await prisma.v_informe_diario.findMany()
    * ```
    */
  get v_informe_diario(): Prisma.v_informe_diarioDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    validaciones: 'validaciones',
    dm_motivo_rechazo: 'dm_motivo_rechazo',
    rechazados: 'rechazados',
    v_cajas_packing: 'v_cajas_packing',
    v_cajas_validadas: 'v_cajas_validadas',
    v_cajas_rechazadas: 'v_cajas_rechazadas',
    v_informe_diario: 'v_informe_diario'
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
      modelProps: "validaciones" | "dm_motivo_rechazo" | "rechazados" | "v_cajas_packing" | "v_cajas_validadas" | "v_cajas_rechazadas" | "v_informe_diario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      validaciones: {
        payload: Prisma.$validacionesPayload<ExtArgs>
        fields: Prisma.validacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.validacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.validacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          findFirst: {
            args: Prisma.validacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.validacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          findMany: {
            args: Prisma.validacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>[]
          }
          create: {
            args: Prisma.validacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          createMany: {
            args: Prisma.validacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.validacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          update: {
            args: Prisma.validacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          deleteMany: {
            args: Prisma.validacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.validacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.validacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$validacionesPayload>
          }
          aggregate: {
            args: Prisma.ValidacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValidaciones>
          }
          groupBy: {
            args: Prisma.validacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValidacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.validacionesCountArgs<ExtArgs>
            result: $Utils.Optional<ValidacionesCountAggregateOutputType> | number
          }
        }
      }
      dm_motivo_rechazo: {
        payload: Prisma.$dm_motivo_rechazoPayload<ExtArgs>
        fields: Prisma.dm_motivo_rechazoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dm_motivo_rechazoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dm_motivo_rechazoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          findFirst: {
            args: Prisma.dm_motivo_rechazoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dm_motivo_rechazoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          findMany: {
            args: Prisma.dm_motivo_rechazoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>[]
          }
          create: {
            args: Prisma.dm_motivo_rechazoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          createMany: {
            args: Prisma.dm_motivo_rechazoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dm_motivo_rechazoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          update: {
            args: Prisma.dm_motivo_rechazoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          deleteMany: {
            args: Prisma.dm_motivo_rechazoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dm_motivo_rechazoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dm_motivo_rechazoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dm_motivo_rechazoPayload>
          }
          aggregate: {
            args: Prisma.Dm_motivo_rechazoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDm_motivo_rechazo>
          }
          groupBy: {
            args: Prisma.dm_motivo_rechazoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dm_motivo_rechazoGroupByOutputType>[]
          }
          count: {
            args: Prisma.dm_motivo_rechazoCountArgs<ExtArgs>
            result: $Utils.Optional<Dm_motivo_rechazoCountAggregateOutputType> | number
          }
        }
      }
      rechazados: {
        payload: Prisma.$rechazadosPayload<ExtArgs>
        fields: Prisma.rechazadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rechazadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rechazadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          findFirst: {
            args: Prisma.rechazadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rechazadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          findMany: {
            args: Prisma.rechazadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>[]
          }
          create: {
            args: Prisma.rechazadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          createMany: {
            args: Prisma.rechazadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rechazadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          update: {
            args: Prisma.rechazadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          deleteMany: {
            args: Prisma.rechazadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rechazadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rechazadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rechazadosPayload>
          }
          aggregate: {
            args: Prisma.RechazadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRechazados>
          }
          groupBy: {
            args: Prisma.rechazadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RechazadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.rechazadosCountArgs<ExtArgs>
            result: $Utils.Optional<RechazadosCountAggregateOutputType> | number
          }
        }
      }
      v_cajas_packing: {
        payload: Prisma.$v_cajas_packingPayload<ExtArgs>
        fields: Prisma.v_cajas_packingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.v_cajas_packingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.v_cajas_packingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          findFirst: {
            args: Prisma.v_cajas_packingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.v_cajas_packingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          findMany: {
            args: Prisma.v_cajas_packingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>[]
          }
          create: {
            args: Prisma.v_cajas_packingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          createMany: {
            args: Prisma.v_cajas_packingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.v_cajas_packingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          update: {
            args: Prisma.v_cajas_packingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          deleteMany: {
            args: Prisma.v_cajas_packingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.v_cajas_packingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.v_cajas_packingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_packingPayload>
          }
          aggregate: {
            args: Prisma.V_cajas_packingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateV_cajas_packing>
          }
          groupBy: {
            args: Prisma.v_cajas_packingGroupByArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_packingGroupByOutputType>[]
          }
          count: {
            args: Prisma.v_cajas_packingCountArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_packingCountAggregateOutputType> | number
          }
        }
      }
      v_cajas_validadas: {
        payload: Prisma.$v_cajas_validadasPayload<ExtArgs>
        fields: Prisma.v_cajas_validadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.v_cajas_validadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.v_cajas_validadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          findFirst: {
            args: Prisma.v_cajas_validadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.v_cajas_validadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          findMany: {
            args: Prisma.v_cajas_validadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>[]
          }
          create: {
            args: Prisma.v_cajas_validadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          createMany: {
            args: Prisma.v_cajas_validadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.v_cajas_validadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          update: {
            args: Prisma.v_cajas_validadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          deleteMany: {
            args: Prisma.v_cajas_validadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.v_cajas_validadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.v_cajas_validadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_validadasPayload>
          }
          aggregate: {
            args: Prisma.V_cajas_validadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateV_cajas_validadas>
          }
          groupBy: {
            args: Prisma.v_cajas_validadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_validadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.v_cajas_validadasCountArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_validadasCountAggregateOutputType> | number
          }
        }
      }
      v_cajas_rechazadas: {
        payload: Prisma.$v_cajas_rechazadasPayload<ExtArgs>
        fields: Prisma.v_cajas_rechazadasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.v_cajas_rechazadasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.v_cajas_rechazadasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          findFirst: {
            args: Prisma.v_cajas_rechazadasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.v_cajas_rechazadasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          findMany: {
            args: Prisma.v_cajas_rechazadasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>[]
          }
          create: {
            args: Prisma.v_cajas_rechazadasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          createMany: {
            args: Prisma.v_cajas_rechazadasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.v_cajas_rechazadasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          update: {
            args: Prisma.v_cajas_rechazadasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          deleteMany: {
            args: Prisma.v_cajas_rechazadasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.v_cajas_rechazadasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.v_cajas_rechazadasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_cajas_rechazadasPayload>
          }
          aggregate: {
            args: Prisma.V_cajas_rechazadasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateV_cajas_rechazadas>
          }
          groupBy: {
            args: Prisma.v_cajas_rechazadasGroupByArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_rechazadasGroupByOutputType>[]
          }
          count: {
            args: Prisma.v_cajas_rechazadasCountArgs<ExtArgs>
            result: $Utils.Optional<V_cajas_rechazadasCountAggregateOutputType> | number
          }
        }
      }
      v_informe_diario: {
        payload: Prisma.$v_informe_diarioPayload<ExtArgs>
        fields: Prisma.v_informe_diarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.v_informe_diarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.v_informe_diarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          findFirst: {
            args: Prisma.v_informe_diarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.v_informe_diarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          findMany: {
            args: Prisma.v_informe_diarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>[]
          }
          create: {
            args: Prisma.v_informe_diarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          createMany: {
            args: Prisma.v_informe_diarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.v_informe_diarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          update: {
            args: Prisma.v_informe_diarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          deleteMany: {
            args: Prisma.v_informe_diarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.v_informe_diarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.v_informe_diarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$v_informe_diarioPayload>
          }
          aggregate: {
            args: Prisma.V_informe_diarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateV_informe_diario>
          }
          groupBy: {
            args: Prisma.v_informe_diarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<V_informe_diarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.v_informe_diarioCountArgs<ExtArgs>
            result: $Utils.Optional<V_informe_diarioCountAggregateOutputType> | number
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
   * Count Type Dm_motivo_rechazoCountOutputType
   */

  export type Dm_motivo_rechazoCountOutputType = {
    rechazados: number
  }

  export type Dm_motivo_rechazoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rechazados?: boolean | Dm_motivo_rechazoCountOutputTypeCountRechazadosArgs
  }

  // Custom InputTypes
  /**
   * Dm_motivo_rechazoCountOutputType without action
   */
  export type Dm_motivo_rechazoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dm_motivo_rechazoCountOutputType
     */
    select?: Dm_motivo_rechazoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dm_motivo_rechazoCountOutputType without action
   */
  export type Dm_motivo_rechazoCountOutputTypeCountRechazadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rechazadosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model validaciones
   */

  export type AggregateValidaciones = {
    _count: ValidacionesCountAggregateOutputType | null
    _avg: ValidacionesAvgAggregateOutputType | null
    _sum: ValidacionesSumAggregateOutputType | null
    _min: ValidacionesMinAggregateOutputType | null
    _max: ValidacionesMaxAggregateOutputType | null
  }

  export type ValidacionesAvgAggregateOutputType = {
    id: number | null
    Cajas: number | null
  }

  export type ValidacionesSumAggregateOutputType = {
    id: number | null
    Cajas: number | null
  }

  export type ValidacionesMinAggregateOutputType = {
    id: number | null
    Folio: string | null
    Cajas: number | null
    Especie: string | null
    Estado: boolean | null
    Camara: string | null
    Usuario: string | null
    Packing: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidacionesMaxAggregateOutputType = {
    id: number | null
    Folio: string | null
    Cajas: number | null
    Especie: string | null
    Estado: boolean | null
    Camara: string | null
    Usuario: string | null
    Packing: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidacionesCountAggregateOutputType = {
    id: number
    Folio: number
    Cajas: number
    Especie: number
    Estado: number
    Camara: number
    Usuario: number
    Packing: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ValidacionesAvgAggregateInputType = {
    id?: true
    Cajas?: true
  }

  export type ValidacionesSumAggregateInputType = {
    id?: true
    Cajas?: true
  }

  export type ValidacionesMinAggregateInputType = {
    id?: true
    Folio?: true
    Cajas?: true
    Especie?: true
    Estado?: true
    Camara?: true
    Usuario?: true
    Packing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidacionesMaxAggregateInputType = {
    id?: true
    Folio?: true
    Cajas?: true
    Especie?: true
    Estado?: true
    Camara?: true
    Usuario?: true
    Packing?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidacionesCountAggregateInputType = {
    id?: true
    Folio?: true
    Cajas?: true
    Especie?: true
    Estado?: true
    Camara?: true
    Usuario?: true
    Packing?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ValidacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which validaciones to aggregate.
     */
    where?: validacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of validaciones to fetch.
     */
    orderBy?: validacionesOrderByWithRelationInput | validacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: validacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` validaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` validaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned validaciones
    **/
    _count?: true | ValidacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValidacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValidacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidacionesMaxAggregateInputType
  }

  export type GetValidacionesAggregateType<T extends ValidacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateValidaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidaciones[P]>
      : GetScalarType<T[P], AggregateValidaciones[P]>
  }




  export type validacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: validacionesWhereInput
    orderBy?: validacionesOrderByWithAggregationInput | validacionesOrderByWithAggregationInput[]
    by: ValidacionesScalarFieldEnum[] | ValidacionesScalarFieldEnum
    having?: validacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidacionesCountAggregateInputType | true
    _avg?: ValidacionesAvgAggregateInputType
    _sum?: ValidacionesSumAggregateInputType
    _min?: ValidacionesMinAggregateInputType
    _max?: ValidacionesMaxAggregateInputType
  }

  export type ValidacionesGroupByOutputType = {
    id: number
    Folio: string
    Cajas: number
    Especie: string
    Estado: boolean
    Camara: string
    Usuario: string
    Packing: string
    createdAt: Date
    updatedAt: Date
    _count: ValidacionesCountAggregateOutputType | null
    _avg: ValidacionesAvgAggregateOutputType | null
    _sum: ValidacionesSumAggregateOutputType | null
    _min: ValidacionesMinAggregateOutputType | null
    _max: ValidacionesMaxAggregateOutputType | null
  }

  type GetValidacionesGroupByPayload<T extends validacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValidacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidacionesGroupByOutputType[P]>
            : GetScalarType<T[P], ValidacionesGroupByOutputType[P]>
        }
      >
    >


  export type validacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Folio?: boolean
    Cajas?: boolean
    Especie?: boolean
    Estado?: boolean
    Camara?: boolean
    Usuario?: boolean
    Packing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["validaciones"]>


  export type validacionesSelectScalar = {
    id?: boolean
    Folio?: boolean
    Cajas?: boolean
    Especie?: boolean
    Estado?: boolean
    Camara?: boolean
    Usuario?: boolean
    Packing?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $validacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "validaciones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Folio: string
      Cajas: number
      Especie: string
      Estado: boolean
      Camara: string
      Usuario: string
      Packing: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["validaciones"]>
    composites: {}
  }

  type validacionesGetPayload<S extends boolean | null | undefined | validacionesDefaultArgs> = $Result.GetResult<Prisma.$validacionesPayload, S>

  type validacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<validacionesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ValidacionesCountAggregateInputType | true
    }

  export interface validacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['validaciones'], meta: { name: 'validaciones' } }
    /**
     * Find zero or one Validaciones that matches the filter.
     * @param {validacionesFindUniqueArgs} args - Arguments to find a Validaciones
     * @example
     * // Get one Validaciones
     * const validaciones = await prisma.validaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends validacionesFindUniqueArgs>(args: SelectSubset<T, validacionesFindUniqueArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Validaciones that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {validacionesFindUniqueOrThrowArgs} args - Arguments to find a Validaciones
     * @example
     * // Get one Validaciones
     * const validaciones = await prisma.validaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends validacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, validacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Validaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesFindFirstArgs} args - Arguments to find a Validaciones
     * @example
     * // Get one Validaciones
     * const validaciones = await prisma.validaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends validacionesFindFirstArgs>(args?: SelectSubset<T, validacionesFindFirstArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Validaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesFindFirstOrThrowArgs} args - Arguments to find a Validaciones
     * @example
     * // Get one Validaciones
     * const validaciones = await prisma.validaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends validacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, validacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Validaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Validaciones
     * const validaciones = await prisma.validaciones.findMany()
     * 
     * // Get first 10 Validaciones
     * const validaciones = await prisma.validaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const validacionesWithIdOnly = await prisma.validaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends validacionesFindManyArgs>(args?: SelectSubset<T, validacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Validaciones.
     * @param {validacionesCreateArgs} args - Arguments to create a Validaciones.
     * @example
     * // Create one Validaciones
     * const Validaciones = await prisma.validaciones.create({
     *   data: {
     *     // ... data to create a Validaciones
     *   }
     * })
     * 
     */
    create<T extends validacionesCreateArgs>(args: SelectSubset<T, validacionesCreateArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Validaciones.
     * @param {validacionesCreateManyArgs} args - Arguments to create many Validaciones.
     * @example
     * // Create many Validaciones
     * const validaciones = await prisma.validaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends validacionesCreateManyArgs>(args?: SelectSubset<T, validacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Validaciones.
     * @param {validacionesDeleteArgs} args - Arguments to delete one Validaciones.
     * @example
     * // Delete one Validaciones
     * const Validaciones = await prisma.validaciones.delete({
     *   where: {
     *     // ... filter to delete one Validaciones
     *   }
     * })
     * 
     */
    delete<T extends validacionesDeleteArgs>(args: SelectSubset<T, validacionesDeleteArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Validaciones.
     * @param {validacionesUpdateArgs} args - Arguments to update one Validaciones.
     * @example
     * // Update one Validaciones
     * const validaciones = await prisma.validaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends validacionesUpdateArgs>(args: SelectSubset<T, validacionesUpdateArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Validaciones.
     * @param {validacionesDeleteManyArgs} args - Arguments to filter Validaciones to delete.
     * @example
     * // Delete a few Validaciones
     * const { count } = await prisma.validaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends validacionesDeleteManyArgs>(args?: SelectSubset<T, validacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Validaciones
     * const validaciones = await prisma.validaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends validacionesUpdateManyArgs>(args: SelectSubset<T, validacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Validaciones.
     * @param {validacionesUpsertArgs} args - Arguments to update or create a Validaciones.
     * @example
     * // Update or create a Validaciones
     * const validaciones = await prisma.validaciones.upsert({
     *   create: {
     *     // ... data to create a Validaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Validaciones we want to update
     *   }
     * })
     */
    upsert<T extends validacionesUpsertArgs>(args: SelectSubset<T, validacionesUpsertArgs<ExtArgs>>): Prisma__validacionesClient<$Result.GetResult<Prisma.$validacionesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Validaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesCountArgs} args - Arguments to filter Validaciones to count.
     * @example
     * // Count the number of Validaciones
     * const count = await prisma.validaciones.count({
     *   where: {
     *     // ... the filter for the Validaciones we want to count
     *   }
     * })
    **/
    count<T extends validacionesCountArgs>(
      args?: Subset<T, validacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Validaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValidacionesAggregateArgs>(args: Subset<T, ValidacionesAggregateArgs>): Prisma.PrismaPromise<GetValidacionesAggregateType<T>>

    /**
     * Group by Validaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {validacionesGroupByArgs} args - Group by arguments.
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
      T extends validacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: validacionesGroupByArgs['orderBy'] }
        : { orderBy?: validacionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, validacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the validaciones model
   */
  readonly fields: validacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for validaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__validacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the validaciones model
   */ 
  interface validacionesFieldRefs {
    readonly id: FieldRef<"validaciones", 'Int'>
    readonly Folio: FieldRef<"validaciones", 'String'>
    readonly Cajas: FieldRef<"validaciones", 'Int'>
    readonly Especie: FieldRef<"validaciones", 'String'>
    readonly Estado: FieldRef<"validaciones", 'Boolean'>
    readonly Camara: FieldRef<"validaciones", 'String'>
    readonly Usuario: FieldRef<"validaciones", 'String'>
    readonly Packing: FieldRef<"validaciones", 'String'>
    readonly createdAt: FieldRef<"validaciones", 'DateTime'>
    readonly updatedAt: FieldRef<"validaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * validaciones findUnique
   */
  export type validacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter, which validaciones to fetch.
     */
    where: validacionesWhereUniqueInput
  }

  /**
   * validaciones findUniqueOrThrow
   */
  export type validacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter, which validaciones to fetch.
     */
    where: validacionesWhereUniqueInput
  }

  /**
   * validaciones findFirst
   */
  export type validacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter, which validaciones to fetch.
     */
    where?: validacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of validaciones to fetch.
     */
    orderBy?: validacionesOrderByWithRelationInput | validacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for validaciones.
     */
    cursor?: validacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` validaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` validaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of validaciones.
     */
    distinct?: ValidacionesScalarFieldEnum | ValidacionesScalarFieldEnum[]
  }

  /**
   * validaciones findFirstOrThrow
   */
  export type validacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter, which validaciones to fetch.
     */
    where?: validacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of validaciones to fetch.
     */
    orderBy?: validacionesOrderByWithRelationInput | validacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for validaciones.
     */
    cursor?: validacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` validaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` validaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of validaciones.
     */
    distinct?: ValidacionesScalarFieldEnum | ValidacionesScalarFieldEnum[]
  }

  /**
   * validaciones findMany
   */
  export type validacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter, which validaciones to fetch.
     */
    where?: validacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of validaciones to fetch.
     */
    orderBy?: validacionesOrderByWithRelationInput | validacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing validaciones.
     */
    cursor?: validacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` validaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` validaciones.
     */
    skip?: number
    distinct?: ValidacionesScalarFieldEnum | ValidacionesScalarFieldEnum[]
  }

  /**
   * validaciones create
   */
  export type validacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * The data needed to create a validaciones.
     */
    data: XOR<validacionesCreateInput, validacionesUncheckedCreateInput>
  }

  /**
   * validaciones createMany
   */
  export type validacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many validaciones.
     */
    data: validacionesCreateManyInput | validacionesCreateManyInput[]
  }

  /**
   * validaciones update
   */
  export type validacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * The data needed to update a validaciones.
     */
    data: XOR<validacionesUpdateInput, validacionesUncheckedUpdateInput>
    /**
     * Choose, which validaciones to update.
     */
    where: validacionesWhereUniqueInput
  }

  /**
   * validaciones updateMany
   */
  export type validacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update validaciones.
     */
    data: XOR<validacionesUpdateManyMutationInput, validacionesUncheckedUpdateManyInput>
    /**
     * Filter which validaciones to update
     */
    where?: validacionesWhereInput
  }

  /**
   * validaciones upsert
   */
  export type validacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * The filter to search for the validaciones to update in case it exists.
     */
    where: validacionesWhereUniqueInput
    /**
     * In case the validaciones found by the `where` argument doesn't exist, create a new validaciones with this data.
     */
    create: XOR<validacionesCreateInput, validacionesUncheckedCreateInput>
    /**
     * In case the validaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<validacionesUpdateInput, validacionesUncheckedUpdateInput>
  }

  /**
   * validaciones delete
   */
  export type validacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
    /**
     * Filter which validaciones to delete.
     */
    where: validacionesWhereUniqueInput
  }

  /**
   * validaciones deleteMany
   */
  export type validacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which validaciones to delete
     */
    where?: validacionesWhereInput
  }

  /**
   * validaciones without action
   */
  export type validacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the validaciones
     */
    select?: validacionesSelect<ExtArgs> | null
  }


  /**
   * Model dm_motivo_rechazo
   */

  export type AggregateDm_motivo_rechazo = {
    _count: Dm_motivo_rechazoCountAggregateOutputType | null
    _avg: Dm_motivo_rechazoAvgAggregateOutputType | null
    _sum: Dm_motivo_rechazoSumAggregateOutputType | null
    _min: Dm_motivo_rechazoMinAggregateOutputType | null
    _max: Dm_motivo_rechazoMaxAggregateOutputType | null
  }

  export type Dm_motivo_rechazoAvgAggregateOutputType = {
    id_motivo: number | null
  }

  export type Dm_motivo_rechazoSumAggregateOutputType = {
    id_motivo: number | null
  }

  export type Dm_motivo_rechazoMinAggregateOutputType = {
    id_motivo: number | null
    nombre_motivo: string | null
    estado_motivo: boolean | null
  }

  export type Dm_motivo_rechazoMaxAggregateOutputType = {
    id_motivo: number | null
    nombre_motivo: string | null
    estado_motivo: boolean | null
  }

  export type Dm_motivo_rechazoCountAggregateOutputType = {
    id_motivo: number
    nombre_motivo: number
    estado_motivo: number
    _all: number
  }


  export type Dm_motivo_rechazoAvgAggregateInputType = {
    id_motivo?: true
  }

  export type Dm_motivo_rechazoSumAggregateInputType = {
    id_motivo?: true
  }

  export type Dm_motivo_rechazoMinAggregateInputType = {
    id_motivo?: true
    nombre_motivo?: true
    estado_motivo?: true
  }

  export type Dm_motivo_rechazoMaxAggregateInputType = {
    id_motivo?: true
    nombre_motivo?: true
    estado_motivo?: true
  }

  export type Dm_motivo_rechazoCountAggregateInputType = {
    id_motivo?: true
    nombre_motivo?: true
    estado_motivo?: true
    _all?: true
  }

  export type Dm_motivo_rechazoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dm_motivo_rechazo to aggregate.
     */
    where?: dm_motivo_rechazoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_motivo_rechazos to fetch.
     */
    orderBy?: dm_motivo_rechazoOrderByWithRelationInput | dm_motivo_rechazoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dm_motivo_rechazoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_motivo_rechazos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_motivo_rechazos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dm_motivo_rechazos
    **/
    _count?: true | Dm_motivo_rechazoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dm_motivo_rechazoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dm_motivo_rechazoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dm_motivo_rechazoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dm_motivo_rechazoMaxAggregateInputType
  }

  export type GetDm_motivo_rechazoAggregateType<T extends Dm_motivo_rechazoAggregateArgs> = {
        [P in keyof T & keyof AggregateDm_motivo_rechazo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDm_motivo_rechazo[P]>
      : GetScalarType<T[P], AggregateDm_motivo_rechazo[P]>
  }




  export type dm_motivo_rechazoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dm_motivo_rechazoWhereInput
    orderBy?: dm_motivo_rechazoOrderByWithAggregationInput | dm_motivo_rechazoOrderByWithAggregationInput[]
    by: Dm_motivo_rechazoScalarFieldEnum[] | Dm_motivo_rechazoScalarFieldEnum
    having?: dm_motivo_rechazoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dm_motivo_rechazoCountAggregateInputType | true
    _avg?: Dm_motivo_rechazoAvgAggregateInputType
    _sum?: Dm_motivo_rechazoSumAggregateInputType
    _min?: Dm_motivo_rechazoMinAggregateInputType
    _max?: Dm_motivo_rechazoMaxAggregateInputType
  }

  export type Dm_motivo_rechazoGroupByOutputType = {
    id_motivo: number
    nombre_motivo: string | null
    estado_motivo: boolean | null
    _count: Dm_motivo_rechazoCountAggregateOutputType | null
    _avg: Dm_motivo_rechazoAvgAggregateOutputType | null
    _sum: Dm_motivo_rechazoSumAggregateOutputType | null
    _min: Dm_motivo_rechazoMinAggregateOutputType | null
    _max: Dm_motivo_rechazoMaxAggregateOutputType | null
  }

  type GetDm_motivo_rechazoGroupByPayload<T extends dm_motivo_rechazoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dm_motivo_rechazoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dm_motivo_rechazoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dm_motivo_rechazoGroupByOutputType[P]>
            : GetScalarType<T[P], Dm_motivo_rechazoGroupByOutputType[P]>
        }
      >
    >


  export type dm_motivo_rechazoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_motivo?: boolean
    nombre_motivo?: boolean
    estado_motivo?: boolean
    rechazados?: boolean | dm_motivo_rechazo$rechazadosArgs<ExtArgs>
    _count?: boolean | Dm_motivo_rechazoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dm_motivo_rechazo"]>


  export type dm_motivo_rechazoSelectScalar = {
    id_motivo?: boolean
    nombre_motivo?: boolean
    estado_motivo?: boolean
  }

  export type dm_motivo_rechazoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rechazados?: boolean | dm_motivo_rechazo$rechazadosArgs<ExtArgs>
    _count?: boolean | Dm_motivo_rechazoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $dm_motivo_rechazoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dm_motivo_rechazo"
    objects: {
      rechazados: Prisma.$rechazadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_motivo: number
      nombre_motivo: string | null
      estado_motivo: boolean | null
    }, ExtArgs["result"]["dm_motivo_rechazo"]>
    composites: {}
  }

  type dm_motivo_rechazoGetPayload<S extends boolean | null | undefined | dm_motivo_rechazoDefaultArgs> = $Result.GetResult<Prisma.$dm_motivo_rechazoPayload, S>

  type dm_motivo_rechazoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dm_motivo_rechazoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Dm_motivo_rechazoCountAggregateInputType | true
    }

  export interface dm_motivo_rechazoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dm_motivo_rechazo'], meta: { name: 'dm_motivo_rechazo' } }
    /**
     * Find zero or one Dm_motivo_rechazo that matches the filter.
     * @param {dm_motivo_rechazoFindUniqueArgs} args - Arguments to find a Dm_motivo_rechazo
     * @example
     * // Get one Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dm_motivo_rechazoFindUniqueArgs>(args: SelectSubset<T, dm_motivo_rechazoFindUniqueArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dm_motivo_rechazo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dm_motivo_rechazoFindUniqueOrThrowArgs} args - Arguments to find a Dm_motivo_rechazo
     * @example
     * // Get one Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dm_motivo_rechazoFindUniqueOrThrowArgs>(args: SelectSubset<T, dm_motivo_rechazoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dm_motivo_rechazo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoFindFirstArgs} args - Arguments to find a Dm_motivo_rechazo
     * @example
     * // Get one Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dm_motivo_rechazoFindFirstArgs>(args?: SelectSubset<T, dm_motivo_rechazoFindFirstArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dm_motivo_rechazo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoFindFirstOrThrowArgs} args - Arguments to find a Dm_motivo_rechazo
     * @example
     * // Get one Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dm_motivo_rechazoFindFirstOrThrowArgs>(args?: SelectSubset<T, dm_motivo_rechazoFindFirstOrThrowArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dm_motivo_rechazos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dm_motivo_rechazos
     * const dm_motivo_rechazos = await prisma.dm_motivo_rechazo.findMany()
     * 
     * // Get first 10 Dm_motivo_rechazos
     * const dm_motivo_rechazos = await prisma.dm_motivo_rechazo.findMany({ take: 10 })
     * 
     * // Only select the `id_motivo`
     * const dm_motivo_rechazoWithId_motivoOnly = await prisma.dm_motivo_rechazo.findMany({ select: { id_motivo: true } })
     * 
     */
    findMany<T extends dm_motivo_rechazoFindManyArgs>(args?: SelectSubset<T, dm_motivo_rechazoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dm_motivo_rechazo.
     * @param {dm_motivo_rechazoCreateArgs} args - Arguments to create a Dm_motivo_rechazo.
     * @example
     * // Create one Dm_motivo_rechazo
     * const Dm_motivo_rechazo = await prisma.dm_motivo_rechazo.create({
     *   data: {
     *     // ... data to create a Dm_motivo_rechazo
     *   }
     * })
     * 
     */
    create<T extends dm_motivo_rechazoCreateArgs>(args: SelectSubset<T, dm_motivo_rechazoCreateArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dm_motivo_rechazos.
     * @param {dm_motivo_rechazoCreateManyArgs} args - Arguments to create many Dm_motivo_rechazos.
     * @example
     * // Create many Dm_motivo_rechazos
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dm_motivo_rechazoCreateManyArgs>(args?: SelectSubset<T, dm_motivo_rechazoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dm_motivo_rechazo.
     * @param {dm_motivo_rechazoDeleteArgs} args - Arguments to delete one Dm_motivo_rechazo.
     * @example
     * // Delete one Dm_motivo_rechazo
     * const Dm_motivo_rechazo = await prisma.dm_motivo_rechazo.delete({
     *   where: {
     *     // ... filter to delete one Dm_motivo_rechazo
     *   }
     * })
     * 
     */
    delete<T extends dm_motivo_rechazoDeleteArgs>(args: SelectSubset<T, dm_motivo_rechazoDeleteArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dm_motivo_rechazo.
     * @param {dm_motivo_rechazoUpdateArgs} args - Arguments to update one Dm_motivo_rechazo.
     * @example
     * // Update one Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dm_motivo_rechazoUpdateArgs>(args: SelectSubset<T, dm_motivo_rechazoUpdateArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dm_motivo_rechazos.
     * @param {dm_motivo_rechazoDeleteManyArgs} args - Arguments to filter Dm_motivo_rechazos to delete.
     * @example
     * // Delete a few Dm_motivo_rechazos
     * const { count } = await prisma.dm_motivo_rechazo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dm_motivo_rechazoDeleteManyArgs>(args?: SelectSubset<T, dm_motivo_rechazoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dm_motivo_rechazos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dm_motivo_rechazos
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dm_motivo_rechazoUpdateManyArgs>(args: SelectSubset<T, dm_motivo_rechazoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dm_motivo_rechazo.
     * @param {dm_motivo_rechazoUpsertArgs} args - Arguments to update or create a Dm_motivo_rechazo.
     * @example
     * // Update or create a Dm_motivo_rechazo
     * const dm_motivo_rechazo = await prisma.dm_motivo_rechazo.upsert({
     *   create: {
     *     // ... data to create a Dm_motivo_rechazo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dm_motivo_rechazo we want to update
     *   }
     * })
     */
    upsert<T extends dm_motivo_rechazoUpsertArgs>(args: SelectSubset<T, dm_motivo_rechazoUpsertArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dm_motivo_rechazos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoCountArgs} args - Arguments to filter Dm_motivo_rechazos to count.
     * @example
     * // Count the number of Dm_motivo_rechazos
     * const count = await prisma.dm_motivo_rechazo.count({
     *   where: {
     *     // ... the filter for the Dm_motivo_rechazos we want to count
     *   }
     * })
    **/
    count<T extends dm_motivo_rechazoCountArgs>(
      args?: Subset<T, dm_motivo_rechazoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dm_motivo_rechazoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dm_motivo_rechazo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dm_motivo_rechazoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dm_motivo_rechazoAggregateArgs>(args: Subset<T, Dm_motivo_rechazoAggregateArgs>): Prisma.PrismaPromise<GetDm_motivo_rechazoAggregateType<T>>

    /**
     * Group by Dm_motivo_rechazo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_motivo_rechazoGroupByArgs} args - Group by arguments.
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
      T extends dm_motivo_rechazoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dm_motivo_rechazoGroupByArgs['orderBy'] }
        : { orderBy?: dm_motivo_rechazoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dm_motivo_rechazoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDm_motivo_rechazoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dm_motivo_rechazo model
   */
  readonly fields: dm_motivo_rechazoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dm_motivo_rechazo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dm_motivo_rechazoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rechazados<T extends dm_motivo_rechazo$rechazadosArgs<ExtArgs> = {}>(args?: Subset<T, dm_motivo_rechazo$rechazadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the dm_motivo_rechazo model
   */ 
  interface dm_motivo_rechazoFieldRefs {
    readonly id_motivo: FieldRef<"dm_motivo_rechazo", 'Int'>
    readonly nombre_motivo: FieldRef<"dm_motivo_rechazo", 'String'>
    readonly estado_motivo: FieldRef<"dm_motivo_rechazo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * dm_motivo_rechazo findUnique
   */
  export type dm_motivo_rechazoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter, which dm_motivo_rechazo to fetch.
     */
    where: dm_motivo_rechazoWhereUniqueInput
  }

  /**
   * dm_motivo_rechazo findUniqueOrThrow
   */
  export type dm_motivo_rechazoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter, which dm_motivo_rechazo to fetch.
     */
    where: dm_motivo_rechazoWhereUniqueInput
  }

  /**
   * dm_motivo_rechazo findFirst
   */
  export type dm_motivo_rechazoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter, which dm_motivo_rechazo to fetch.
     */
    where?: dm_motivo_rechazoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_motivo_rechazos to fetch.
     */
    orderBy?: dm_motivo_rechazoOrderByWithRelationInput | dm_motivo_rechazoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dm_motivo_rechazos.
     */
    cursor?: dm_motivo_rechazoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_motivo_rechazos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_motivo_rechazos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dm_motivo_rechazos.
     */
    distinct?: Dm_motivo_rechazoScalarFieldEnum | Dm_motivo_rechazoScalarFieldEnum[]
  }

  /**
   * dm_motivo_rechazo findFirstOrThrow
   */
  export type dm_motivo_rechazoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter, which dm_motivo_rechazo to fetch.
     */
    where?: dm_motivo_rechazoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_motivo_rechazos to fetch.
     */
    orderBy?: dm_motivo_rechazoOrderByWithRelationInput | dm_motivo_rechazoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dm_motivo_rechazos.
     */
    cursor?: dm_motivo_rechazoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_motivo_rechazos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_motivo_rechazos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dm_motivo_rechazos.
     */
    distinct?: Dm_motivo_rechazoScalarFieldEnum | Dm_motivo_rechazoScalarFieldEnum[]
  }

  /**
   * dm_motivo_rechazo findMany
   */
  export type dm_motivo_rechazoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter, which dm_motivo_rechazos to fetch.
     */
    where?: dm_motivo_rechazoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_motivo_rechazos to fetch.
     */
    orderBy?: dm_motivo_rechazoOrderByWithRelationInput | dm_motivo_rechazoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dm_motivo_rechazos.
     */
    cursor?: dm_motivo_rechazoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_motivo_rechazos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_motivo_rechazos.
     */
    skip?: number
    distinct?: Dm_motivo_rechazoScalarFieldEnum | Dm_motivo_rechazoScalarFieldEnum[]
  }

  /**
   * dm_motivo_rechazo create
   */
  export type dm_motivo_rechazoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * The data needed to create a dm_motivo_rechazo.
     */
    data?: XOR<dm_motivo_rechazoCreateInput, dm_motivo_rechazoUncheckedCreateInput>
  }

  /**
   * dm_motivo_rechazo createMany
   */
  export type dm_motivo_rechazoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dm_motivo_rechazos.
     */
    data: dm_motivo_rechazoCreateManyInput | dm_motivo_rechazoCreateManyInput[]
  }

  /**
   * dm_motivo_rechazo update
   */
  export type dm_motivo_rechazoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * The data needed to update a dm_motivo_rechazo.
     */
    data: XOR<dm_motivo_rechazoUpdateInput, dm_motivo_rechazoUncheckedUpdateInput>
    /**
     * Choose, which dm_motivo_rechazo to update.
     */
    where: dm_motivo_rechazoWhereUniqueInput
  }

  /**
   * dm_motivo_rechazo updateMany
   */
  export type dm_motivo_rechazoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dm_motivo_rechazos.
     */
    data: XOR<dm_motivo_rechazoUpdateManyMutationInput, dm_motivo_rechazoUncheckedUpdateManyInput>
    /**
     * Filter which dm_motivo_rechazos to update
     */
    where?: dm_motivo_rechazoWhereInput
  }

  /**
   * dm_motivo_rechazo upsert
   */
  export type dm_motivo_rechazoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * The filter to search for the dm_motivo_rechazo to update in case it exists.
     */
    where: dm_motivo_rechazoWhereUniqueInput
    /**
     * In case the dm_motivo_rechazo found by the `where` argument doesn't exist, create a new dm_motivo_rechazo with this data.
     */
    create: XOR<dm_motivo_rechazoCreateInput, dm_motivo_rechazoUncheckedCreateInput>
    /**
     * In case the dm_motivo_rechazo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dm_motivo_rechazoUpdateInput, dm_motivo_rechazoUncheckedUpdateInput>
  }

  /**
   * dm_motivo_rechazo delete
   */
  export type dm_motivo_rechazoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    /**
     * Filter which dm_motivo_rechazo to delete.
     */
    where: dm_motivo_rechazoWhereUniqueInput
  }

  /**
   * dm_motivo_rechazo deleteMany
   */
  export type dm_motivo_rechazoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dm_motivo_rechazos to delete
     */
    where?: dm_motivo_rechazoWhereInput
  }

  /**
   * dm_motivo_rechazo.rechazados
   */
  export type dm_motivo_rechazo$rechazadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    where?: rechazadosWhereInput
    orderBy?: rechazadosOrderByWithRelationInput | rechazadosOrderByWithRelationInput[]
    cursor?: rechazadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RechazadosScalarFieldEnum | RechazadosScalarFieldEnum[]
  }

  /**
   * dm_motivo_rechazo without action
   */
  export type dm_motivo_rechazoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
  }


  /**
   * Model rechazados
   */

  export type AggregateRechazados = {
    _count: RechazadosCountAggregateOutputType | null
    _avg: RechazadosAvgAggregateOutputType | null
    _sum: RechazadosSumAggregateOutputType | null
    _min: RechazadosMinAggregateOutputType | null
    _max: RechazadosMaxAggregateOutputType | null
  }

  export type RechazadosAvgAggregateOutputType = {
    id_rechazado: number | null
    id_motivo_rechazo_fk: number | null
    cajas: number | null
  }

  export type RechazadosSumAggregateOutputType = {
    id_rechazado: number | null
    id_motivo_rechazo_fk: number | null
    cajas: number | null
  }

  export type RechazadosMinAggregateOutputType = {
    id_rechazado: number | null
    folio_rechazado: string | null
    id_motivo_rechazo_fk: number | null
    fecha_rechazado: Date | null
    usuario: string | null
    cajas: number | null
    camara: string | null
    nombre_estado: string | null
    estado: boolean | null
    packing: string | null
    especie: string | null
  }

  export type RechazadosMaxAggregateOutputType = {
    id_rechazado: number | null
    folio_rechazado: string | null
    id_motivo_rechazo_fk: number | null
    fecha_rechazado: Date | null
    usuario: string | null
    cajas: number | null
    camara: string | null
    nombre_estado: string | null
    estado: boolean | null
    packing: string | null
    especie: string | null
  }

  export type RechazadosCountAggregateOutputType = {
    id_rechazado: number
    folio_rechazado: number
    id_motivo_rechazo_fk: number
    fecha_rechazado: number
    usuario: number
    cajas: number
    camara: number
    nombre_estado: number
    estado: number
    packing: number
    especie: number
    _all: number
  }


  export type RechazadosAvgAggregateInputType = {
    id_rechazado?: true
    id_motivo_rechazo_fk?: true
    cajas?: true
  }

  export type RechazadosSumAggregateInputType = {
    id_rechazado?: true
    id_motivo_rechazo_fk?: true
    cajas?: true
  }

  export type RechazadosMinAggregateInputType = {
    id_rechazado?: true
    folio_rechazado?: true
    id_motivo_rechazo_fk?: true
    fecha_rechazado?: true
    usuario?: true
    cajas?: true
    camara?: true
    nombre_estado?: true
    estado?: true
    packing?: true
    especie?: true
  }

  export type RechazadosMaxAggregateInputType = {
    id_rechazado?: true
    folio_rechazado?: true
    id_motivo_rechazo_fk?: true
    fecha_rechazado?: true
    usuario?: true
    cajas?: true
    camara?: true
    nombre_estado?: true
    estado?: true
    packing?: true
    especie?: true
  }

  export type RechazadosCountAggregateInputType = {
    id_rechazado?: true
    folio_rechazado?: true
    id_motivo_rechazo_fk?: true
    fecha_rechazado?: true
    usuario?: true
    cajas?: true
    camara?: true
    nombre_estado?: true
    estado?: true
    packing?: true
    especie?: true
    _all?: true
  }

  export type RechazadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rechazados to aggregate.
     */
    where?: rechazadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rechazados to fetch.
     */
    orderBy?: rechazadosOrderByWithRelationInput | rechazadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rechazadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rechazados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rechazados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rechazados
    **/
    _count?: true | RechazadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RechazadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RechazadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RechazadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RechazadosMaxAggregateInputType
  }

  export type GetRechazadosAggregateType<T extends RechazadosAggregateArgs> = {
        [P in keyof T & keyof AggregateRechazados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRechazados[P]>
      : GetScalarType<T[P], AggregateRechazados[P]>
  }




  export type rechazadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rechazadosWhereInput
    orderBy?: rechazadosOrderByWithAggregationInput | rechazadosOrderByWithAggregationInput[]
    by: RechazadosScalarFieldEnum[] | RechazadosScalarFieldEnum
    having?: rechazadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RechazadosCountAggregateInputType | true
    _avg?: RechazadosAvgAggregateInputType
    _sum?: RechazadosSumAggregateInputType
    _min?: RechazadosMinAggregateInputType
    _max?: RechazadosMaxAggregateInputType
  }

  export type RechazadosGroupByOutputType = {
    id_rechazado: number
    folio_rechazado: string | null
    id_motivo_rechazo_fk: number | null
    fecha_rechazado: Date | null
    usuario: string | null
    cajas: number | null
    camara: string | null
    nombre_estado: string | null
    estado: boolean | null
    packing: string | null
    especie: string | null
    _count: RechazadosCountAggregateOutputType | null
    _avg: RechazadosAvgAggregateOutputType | null
    _sum: RechazadosSumAggregateOutputType | null
    _min: RechazadosMinAggregateOutputType | null
    _max: RechazadosMaxAggregateOutputType | null
  }

  type GetRechazadosGroupByPayload<T extends rechazadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RechazadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RechazadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RechazadosGroupByOutputType[P]>
            : GetScalarType<T[P], RechazadosGroupByOutputType[P]>
        }
      >
    >


  export type rechazadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rechazado?: boolean
    folio_rechazado?: boolean
    id_motivo_rechazo_fk?: boolean
    fecha_rechazado?: boolean
    usuario?: boolean
    cajas?: boolean
    camara?: boolean
    nombre_estado?: boolean
    estado?: boolean
    packing?: boolean
    especie?: boolean
    dm_motivo_rechazo?: boolean | rechazados$dm_motivo_rechazoArgs<ExtArgs>
  }, ExtArgs["result"]["rechazados"]>


  export type rechazadosSelectScalar = {
    id_rechazado?: boolean
    folio_rechazado?: boolean
    id_motivo_rechazo_fk?: boolean
    fecha_rechazado?: boolean
    usuario?: boolean
    cajas?: boolean
    camara?: boolean
    nombre_estado?: boolean
    estado?: boolean
    packing?: boolean
    especie?: boolean
  }

  export type rechazadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dm_motivo_rechazo?: boolean | rechazados$dm_motivo_rechazoArgs<ExtArgs>
  }

  export type $rechazadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rechazados"
    objects: {
      dm_motivo_rechazo: Prisma.$dm_motivo_rechazoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rechazado: number
      folio_rechazado: string | null
      id_motivo_rechazo_fk: number | null
      fecha_rechazado: Date | null
      usuario: string | null
      cajas: number | null
      camara: string | null
      nombre_estado: string | null
      estado: boolean | null
      packing: string | null
      especie: string | null
    }, ExtArgs["result"]["rechazados"]>
    composites: {}
  }

  type rechazadosGetPayload<S extends boolean | null | undefined | rechazadosDefaultArgs> = $Result.GetResult<Prisma.$rechazadosPayload, S>

  type rechazadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rechazadosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RechazadosCountAggregateInputType | true
    }

  export interface rechazadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rechazados'], meta: { name: 'rechazados' } }
    /**
     * Find zero or one Rechazados that matches the filter.
     * @param {rechazadosFindUniqueArgs} args - Arguments to find a Rechazados
     * @example
     * // Get one Rechazados
     * const rechazados = await prisma.rechazados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rechazadosFindUniqueArgs>(args: SelectSubset<T, rechazadosFindUniqueArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rechazados that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rechazadosFindUniqueOrThrowArgs} args - Arguments to find a Rechazados
     * @example
     * // Get one Rechazados
     * const rechazados = await prisma.rechazados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rechazadosFindUniqueOrThrowArgs>(args: SelectSubset<T, rechazadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rechazados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosFindFirstArgs} args - Arguments to find a Rechazados
     * @example
     * // Get one Rechazados
     * const rechazados = await prisma.rechazados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rechazadosFindFirstArgs>(args?: SelectSubset<T, rechazadosFindFirstArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rechazados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosFindFirstOrThrowArgs} args - Arguments to find a Rechazados
     * @example
     * // Get one Rechazados
     * const rechazados = await prisma.rechazados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rechazadosFindFirstOrThrowArgs>(args?: SelectSubset<T, rechazadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rechazados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rechazados
     * const rechazados = await prisma.rechazados.findMany()
     * 
     * // Get first 10 Rechazados
     * const rechazados = await prisma.rechazados.findMany({ take: 10 })
     * 
     * // Only select the `id_rechazado`
     * const rechazadosWithId_rechazadoOnly = await prisma.rechazados.findMany({ select: { id_rechazado: true } })
     * 
     */
    findMany<T extends rechazadosFindManyArgs>(args?: SelectSubset<T, rechazadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rechazados.
     * @param {rechazadosCreateArgs} args - Arguments to create a Rechazados.
     * @example
     * // Create one Rechazados
     * const Rechazados = await prisma.rechazados.create({
     *   data: {
     *     // ... data to create a Rechazados
     *   }
     * })
     * 
     */
    create<T extends rechazadosCreateArgs>(args: SelectSubset<T, rechazadosCreateArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rechazados.
     * @param {rechazadosCreateManyArgs} args - Arguments to create many Rechazados.
     * @example
     * // Create many Rechazados
     * const rechazados = await prisma.rechazados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rechazadosCreateManyArgs>(args?: SelectSubset<T, rechazadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rechazados.
     * @param {rechazadosDeleteArgs} args - Arguments to delete one Rechazados.
     * @example
     * // Delete one Rechazados
     * const Rechazados = await prisma.rechazados.delete({
     *   where: {
     *     // ... filter to delete one Rechazados
     *   }
     * })
     * 
     */
    delete<T extends rechazadosDeleteArgs>(args: SelectSubset<T, rechazadosDeleteArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rechazados.
     * @param {rechazadosUpdateArgs} args - Arguments to update one Rechazados.
     * @example
     * // Update one Rechazados
     * const rechazados = await prisma.rechazados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rechazadosUpdateArgs>(args: SelectSubset<T, rechazadosUpdateArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rechazados.
     * @param {rechazadosDeleteManyArgs} args - Arguments to filter Rechazados to delete.
     * @example
     * // Delete a few Rechazados
     * const { count } = await prisma.rechazados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rechazadosDeleteManyArgs>(args?: SelectSubset<T, rechazadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rechazados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rechazados
     * const rechazados = await prisma.rechazados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rechazadosUpdateManyArgs>(args: SelectSubset<T, rechazadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rechazados.
     * @param {rechazadosUpsertArgs} args - Arguments to update or create a Rechazados.
     * @example
     * // Update or create a Rechazados
     * const rechazados = await prisma.rechazados.upsert({
     *   create: {
     *     // ... data to create a Rechazados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rechazados we want to update
     *   }
     * })
     */
    upsert<T extends rechazadosUpsertArgs>(args: SelectSubset<T, rechazadosUpsertArgs<ExtArgs>>): Prisma__rechazadosClient<$Result.GetResult<Prisma.$rechazadosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rechazados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosCountArgs} args - Arguments to filter Rechazados to count.
     * @example
     * // Count the number of Rechazados
     * const count = await prisma.rechazados.count({
     *   where: {
     *     // ... the filter for the Rechazados we want to count
     *   }
     * })
    **/
    count<T extends rechazadosCountArgs>(
      args?: Subset<T, rechazadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RechazadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rechazados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RechazadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RechazadosAggregateArgs>(args: Subset<T, RechazadosAggregateArgs>): Prisma.PrismaPromise<GetRechazadosAggregateType<T>>

    /**
     * Group by Rechazados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rechazadosGroupByArgs} args - Group by arguments.
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
      T extends rechazadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rechazadosGroupByArgs['orderBy'] }
        : { orderBy?: rechazadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rechazadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRechazadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rechazados model
   */
  readonly fields: rechazadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rechazados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rechazadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dm_motivo_rechazo<T extends rechazados$dm_motivo_rechazoArgs<ExtArgs> = {}>(args?: Subset<T, rechazados$dm_motivo_rechazoArgs<ExtArgs>>): Prisma__dm_motivo_rechazoClient<$Result.GetResult<Prisma.$dm_motivo_rechazoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the rechazados model
   */ 
  interface rechazadosFieldRefs {
    readonly id_rechazado: FieldRef<"rechazados", 'Int'>
    readonly folio_rechazado: FieldRef<"rechazados", 'String'>
    readonly id_motivo_rechazo_fk: FieldRef<"rechazados", 'Int'>
    readonly fecha_rechazado: FieldRef<"rechazados", 'DateTime'>
    readonly usuario: FieldRef<"rechazados", 'String'>
    readonly cajas: FieldRef<"rechazados", 'Int'>
    readonly camara: FieldRef<"rechazados", 'String'>
    readonly nombre_estado: FieldRef<"rechazados", 'String'>
    readonly estado: FieldRef<"rechazados", 'Boolean'>
    readonly packing: FieldRef<"rechazados", 'String'>
    readonly especie: FieldRef<"rechazados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rechazados findUnique
   */
  export type rechazadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter, which rechazados to fetch.
     */
    where: rechazadosWhereUniqueInput
  }

  /**
   * rechazados findUniqueOrThrow
   */
  export type rechazadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter, which rechazados to fetch.
     */
    where: rechazadosWhereUniqueInput
  }

  /**
   * rechazados findFirst
   */
  export type rechazadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter, which rechazados to fetch.
     */
    where?: rechazadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rechazados to fetch.
     */
    orderBy?: rechazadosOrderByWithRelationInput | rechazadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rechazados.
     */
    cursor?: rechazadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rechazados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rechazados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rechazados.
     */
    distinct?: RechazadosScalarFieldEnum | RechazadosScalarFieldEnum[]
  }

  /**
   * rechazados findFirstOrThrow
   */
  export type rechazadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter, which rechazados to fetch.
     */
    where?: rechazadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rechazados to fetch.
     */
    orderBy?: rechazadosOrderByWithRelationInput | rechazadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rechazados.
     */
    cursor?: rechazadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rechazados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rechazados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rechazados.
     */
    distinct?: RechazadosScalarFieldEnum | RechazadosScalarFieldEnum[]
  }

  /**
   * rechazados findMany
   */
  export type rechazadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter, which rechazados to fetch.
     */
    where?: rechazadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rechazados to fetch.
     */
    orderBy?: rechazadosOrderByWithRelationInput | rechazadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rechazados.
     */
    cursor?: rechazadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rechazados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rechazados.
     */
    skip?: number
    distinct?: RechazadosScalarFieldEnum | RechazadosScalarFieldEnum[]
  }

  /**
   * rechazados create
   */
  export type rechazadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * The data needed to create a rechazados.
     */
    data: XOR<rechazadosCreateInput, rechazadosUncheckedCreateInput>
  }

  /**
   * rechazados createMany
   */
  export type rechazadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rechazados.
     */
    data: rechazadosCreateManyInput | rechazadosCreateManyInput[]
  }

  /**
   * rechazados update
   */
  export type rechazadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * The data needed to update a rechazados.
     */
    data: XOR<rechazadosUpdateInput, rechazadosUncheckedUpdateInput>
    /**
     * Choose, which rechazados to update.
     */
    where: rechazadosWhereUniqueInput
  }

  /**
   * rechazados updateMany
   */
  export type rechazadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rechazados.
     */
    data: XOR<rechazadosUpdateManyMutationInput, rechazadosUncheckedUpdateManyInput>
    /**
     * Filter which rechazados to update
     */
    where?: rechazadosWhereInput
  }

  /**
   * rechazados upsert
   */
  export type rechazadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * The filter to search for the rechazados to update in case it exists.
     */
    where: rechazadosWhereUniqueInput
    /**
     * In case the rechazados found by the `where` argument doesn't exist, create a new rechazados with this data.
     */
    create: XOR<rechazadosCreateInput, rechazadosUncheckedCreateInput>
    /**
     * In case the rechazados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rechazadosUpdateInput, rechazadosUncheckedUpdateInput>
  }

  /**
   * rechazados delete
   */
  export type rechazadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
    /**
     * Filter which rechazados to delete.
     */
    where: rechazadosWhereUniqueInput
  }

  /**
   * rechazados deleteMany
   */
  export type rechazadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rechazados to delete
     */
    where?: rechazadosWhereInput
  }

  /**
   * rechazados.dm_motivo_rechazo
   */
  export type rechazados$dm_motivo_rechazoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dm_motivo_rechazo
     */
    select?: dm_motivo_rechazoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dm_motivo_rechazoInclude<ExtArgs> | null
    where?: dm_motivo_rechazoWhereInput
  }

  /**
   * rechazados without action
   */
  export type rechazadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rechazados
     */
    select?: rechazadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rechazadosInclude<ExtArgs> | null
  }


  /**
   * Model v_cajas_packing
   */

  export type AggregateV_cajas_packing = {
    _count: V_cajas_packingCountAggregateOutputType | null
    _avg: V_cajas_packingAvgAggregateOutputType | null
    _sum: V_cajas_packingSumAggregateOutputType | null
    _min: V_cajas_packingMinAggregateOutputType | null
    _max: V_cajas_packingMaxAggregateOutputType | null
  }

  export type V_cajas_packingAvgAggregateOutputType = {
    Cajas: number | null
  }

  export type V_cajas_packingSumAggregateOutputType = {
    Cajas: number | null
  }

  export type V_cajas_packingMinAggregateOutputType = {
    Folio: string | null
    Especie: string | null
    Fecha_packing: string | null
    Cajas: number | null
    LINEA: string | null
  }

  export type V_cajas_packingMaxAggregateOutputType = {
    Folio: string | null
    Especie: string | null
    Fecha_packing: string | null
    Cajas: number | null
    LINEA: string | null
  }

  export type V_cajas_packingCountAggregateOutputType = {
    Folio: number
    Especie: number
    Fecha_packing: number
    Cajas: number
    LINEA: number
    _all: number
  }


  export type V_cajas_packingAvgAggregateInputType = {
    Cajas?: true
  }

  export type V_cajas_packingSumAggregateInputType = {
    Cajas?: true
  }

  export type V_cajas_packingMinAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
  }

  export type V_cajas_packingMaxAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
  }

  export type V_cajas_packingCountAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
    _all?: true
  }

  export type V_cajas_packingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_packing to aggregate.
     */
    where?: v_cajas_packingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_packings to fetch.
     */
    orderBy?: v_cajas_packingOrderByWithRelationInput | v_cajas_packingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: v_cajas_packingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_packings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_packings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned v_cajas_packings
    **/
    _count?: true | V_cajas_packingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_cajas_packingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_cajas_packingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_cajas_packingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_cajas_packingMaxAggregateInputType
  }

  export type GetV_cajas_packingAggregateType<T extends V_cajas_packingAggregateArgs> = {
        [P in keyof T & keyof AggregateV_cajas_packing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_cajas_packing[P]>
      : GetScalarType<T[P], AggregateV_cajas_packing[P]>
  }




  export type v_cajas_packingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: v_cajas_packingWhereInput
    orderBy?: v_cajas_packingOrderByWithAggregationInput | v_cajas_packingOrderByWithAggregationInput[]
    by: V_cajas_packingScalarFieldEnum[] | V_cajas_packingScalarFieldEnum
    having?: v_cajas_packingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_cajas_packingCountAggregateInputType | true
    _avg?: V_cajas_packingAvgAggregateInputType
    _sum?: V_cajas_packingSumAggregateInputType
    _min?: V_cajas_packingMinAggregateInputType
    _max?: V_cajas_packingMaxAggregateInputType
  }

  export type V_cajas_packingGroupByOutputType = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA: string | null
    _count: V_cajas_packingCountAggregateOutputType | null
    _avg: V_cajas_packingAvgAggregateOutputType | null
    _sum: V_cajas_packingSumAggregateOutputType | null
    _min: V_cajas_packingMinAggregateOutputType | null
    _max: V_cajas_packingMaxAggregateOutputType | null
  }

  type GetV_cajas_packingGroupByPayload<T extends v_cajas_packingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_cajas_packingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_cajas_packingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_cajas_packingGroupByOutputType[P]>
            : GetScalarType<T[P], V_cajas_packingGroupByOutputType[P]>
        }
      >
    >


  export type v_cajas_packingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Folio?: boolean
    Especie?: boolean
    Fecha_packing?: boolean
    Cajas?: boolean
    LINEA?: boolean
  }, ExtArgs["result"]["v_cajas_packing"]>


  export type v_cajas_packingSelectScalar = {
    Folio?: boolean
    Especie?: boolean
    Fecha_packing?: boolean
    Cajas?: boolean
    LINEA?: boolean
  }


  export type $v_cajas_packingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "v_cajas_packing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Folio: string
      Especie: string
      Fecha_packing: string
      Cajas: number
      LINEA: string | null
    }, ExtArgs["result"]["v_cajas_packing"]>
    composites: {}
  }

  type v_cajas_packingGetPayload<S extends boolean | null | undefined | v_cajas_packingDefaultArgs> = $Result.GetResult<Prisma.$v_cajas_packingPayload, S>

  type v_cajas_packingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<v_cajas_packingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_cajas_packingCountAggregateInputType | true
    }

  export interface v_cajas_packingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['v_cajas_packing'], meta: { name: 'v_cajas_packing' } }
    /**
     * Find zero or one V_cajas_packing that matches the filter.
     * @param {v_cajas_packingFindUniqueArgs} args - Arguments to find a V_cajas_packing
     * @example
     * // Get one V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends v_cajas_packingFindUniqueArgs>(args: SelectSubset<T, v_cajas_packingFindUniqueArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one V_cajas_packing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {v_cajas_packingFindUniqueOrThrowArgs} args - Arguments to find a V_cajas_packing
     * @example
     * // Get one V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends v_cajas_packingFindUniqueOrThrowArgs>(args: SelectSubset<T, v_cajas_packingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first V_cajas_packing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingFindFirstArgs} args - Arguments to find a V_cajas_packing
     * @example
     * // Get one V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends v_cajas_packingFindFirstArgs>(args?: SelectSubset<T, v_cajas_packingFindFirstArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first V_cajas_packing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingFindFirstOrThrowArgs} args - Arguments to find a V_cajas_packing
     * @example
     * // Get one V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends v_cajas_packingFindFirstOrThrowArgs>(args?: SelectSubset<T, v_cajas_packingFindFirstOrThrowArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more V_cajas_packings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_cajas_packings
     * const v_cajas_packings = await prisma.v_cajas_packing.findMany()
     * 
     * // Get first 10 V_cajas_packings
     * const v_cajas_packings = await prisma.v_cajas_packing.findMany({ take: 10 })
     * 
     * // Only select the `Folio`
     * const v_cajas_packingWithFolioOnly = await prisma.v_cajas_packing.findMany({ select: { Folio: true } })
     * 
     */
    findMany<T extends v_cajas_packingFindManyArgs>(args?: SelectSubset<T, v_cajas_packingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a V_cajas_packing.
     * @param {v_cajas_packingCreateArgs} args - Arguments to create a V_cajas_packing.
     * @example
     * // Create one V_cajas_packing
     * const V_cajas_packing = await prisma.v_cajas_packing.create({
     *   data: {
     *     // ... data to create a V_cajas_packing
     *   }
     * })
     * 
     */
    create<T extends v_cajas_packingCreateArgs>(args: SelectSubset<T, v_cajas_packingCreateArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many V_cajas_packings.
     * @param {v_cajas_packingCreateManyArgs} args - Arguments to create many V_cajas_packings.
     * @example
     * // Create many V_cajas_packings
     * const v_cajas_packing = await prisma.v_cajas_packing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends v_cajas_packingCreateManyArgs>(args?: SelectSubset<T, v_cajas_packingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_cajas_packing.
     * @param {v_cajas_packingDeleteArgs} args - Arguments to delete one V_cajas_packing.
     * @example
     * // Delete one V_cajas_packing
     * const V_cajas_packing = await prisma.v_cajas_packing.delete({
     *   where: {
     *     // ... filter to delete one V_cajas_packing
     *   }
     * })
     * 
     */
    delete<T extends v_cajas_packingDeleteArgs>(args: SelectSubset<T, v_cajas_packingDeleteArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one V_cajas_packing.
     * @param {v_cajas_packingUpdateArgs} args - Arguments to update one V_cajas_packing.
     * @example
     * // Update one V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends v_cajas_packingUpdateArgs>(args: SelectSubset<T, v_cajas_packingUpdateArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more V_cajas_packings.
     * @param {v_cajas_packingDeleteManyArgs} args - Arguments to filter V_cajas_packings to delete.
     * @example
     * // Delete a few V_cajas_packings
     * const { count } = await prisma.v_cajas_packing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends v_cajas_packingDeleteManyArgs>(args?: SelectSubset<T, v_cajas_packingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_cajas_packings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_cajas_packings
     * const v_cajas_packing = await prisma.v_cajas_packing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends v_cajas_packingUpdateManyArgs>(args: SelectSubset<T, v_cajas_packingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_cajas_packing.
     * @param {v_cajas_packingUpsertArgs} args - Arguments to update or create a V_cajas_packing.
     * @example
     * // Update or create a V_cajas_packing
     * const v_cajas_packing = await prisma.v_cajas_packing.upsert({
     *   create: {
     *     // ... data to create a V_cajas_packing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_cajas_packing we want to update
     *   }
     * })
     */
    upsert<T extends v_cajas_packingUpsertArgs>(args: SelectSubset<T, v_cajas_packingUpsertArgs<ExtArgs>>): Prisma__v_cajas_packingClient<$Result.GetResult<Prisma.$v_cajas_packingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of V_cajas_packings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingCountArgs} args - Arguments to filter V_cajas_packings to count.
     * @example
     * // Count the number of V_cajas_packings
     * const count = await prisma.v_cajas_packing.count({
     *   where: {
     *     // ... the filter for the V_cajas_packings we want to count
     *   }
     * })
    **/
    count<T extends v_cajas_packingCountArgs>(
      args?: Subset<T, v_cajas_packingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_cajas_packingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_cajas_packing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_cajas_packingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_cajas_packingAggregateArgs>(args: Subset<T, V_cajas_packingAggregateArgs>): Prisma.PrismaPromise<GetV_cajas_packingAggregateType<T>>

    /**
     * Group by V_cajas_packing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_packingGroupByArgs} args - Group by arguments.
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
      T extends v_cajas_packingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: v_cajas_packingGroupByArgs['orderBy'] }
        : { orderBy?: v_cajas_packingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, v_cajas_packingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_cajas_packingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the v_cajas_packing model
   */
  readonly fields: v_cajas_packingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for v_cajas_packing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__v_cajas_packingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the v_cajas_packing model
   */ 
  interface v_cajas_packingFieldRefs {
    readonly Folio: FieldRef<"v_cajas_packing", 'String'>
    readonly Especie: FieldRef<"v_cajas_packing", 'String'>
    readonly Fecha_packing: FieldRef<"v_cajas_packing", 'String'>
    readonly Cajas: FieldRef<"v_cajas_packing", 'Int'>
    readonly LINEA: FieldRef<"v_cajas_packing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * v_cajas_packing findUnique
   */
  export type v_cajas_packingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_packing to fetch.
     */
    where: v_cajas_packingWhereUniqueInput
  }

  /**
   * v_cajas_packing findUniqueOrThrow
   */
  export type v_cajas_packingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_packing to fetch.
     */
    where: v_cajas_packingWhereUniqueInput
  }

  /**
   * v_cajas_packing findFirst
   */
  export type v_cajas_packingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_packing to fetch.
     */
    where?: v_cajas_packingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_packings to fetch.
     */
    orderBy?: v_cajas_packingOrderByWithRelationInput | v_cajas_packingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_packings.
     */
    cursor?: v_cajas_packingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_packings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_packings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_packings.
     */
    distinct?: V_cajas_packingScalarFieldEnum | V_cajas_packingScalarFieldEnum[]
  }

  /**
   * v_cajas_packing findFirstOrThrow
   */
  export type v_cajas_packingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_packing to fetch.
     */
    where?: v_cajas_packingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_packings to fetch.
     */
    orderBy?: v_cajas_packingOrderByWithRelationInput | v_cajas_packingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_packings.
     */
    cursor?: v_cajas_packingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_packings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_packings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_packings.
     */
    distinct?: V_cajas_packingScalarFieldEnum | V_cajas_packingScalarFieldEnum[]
  }

  /**
   * v_cajas_packing findMany
   */
  export type v_cajas_packingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_packings to fetch.
     */
    where?: v_cajas_packingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_packings to fetch.
     */
    orderBy?: v_cajas_packingOrderByWithRelationInput | v_cajas_packingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing v_cajas_packings.
     */
    cursor?: v_cajas_packingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_packings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_packings.
     */
    skip?: number
    distinct?: V_cajas_packingScalarFieldEnum | V_cajas_packingScalarFieldEnum[]
  }

  /**
   * v_cajas_packing create
   */
  export type v_cajas_packingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * The data needed to create a v_cajas_packing.
     */
    data: XOR<v_cajas_packingCreateInput, v_cajas_packingUncheckedCreateInput>
  }

  /**
   * v_cajas_packing createMany
   */
  export type v_cajas_packingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many v_cajas_packings.
     */
    data: v_cajas_packingCreateManyInput | v_cajas_packingCreateManyInput[]
  }

  /**
   * v_cajas_packing update
   */
  export type v_cajas_packingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * The data needed to update a v_cajas_packing.
     */
    data: XOR<v_cajas_packingUpdateInput, v_cajas_packingUncheckedUpdateInput>
    /**
     * Choose, which v_cajas_packing to update.
     */
    where: v_cajas_packingWhereUniqueInput
  }

  /**
   * v_cajas_packing updateMany
   */
  export type v_cajas_packingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update v_cajas_packings.
     */
    data: XOR<v_cajas_packingUpdateManyMutationInput, v_cajas_packingUncheckedUpdateManyInput>
    /**
     * Filter which v_cajas_packings to update
     */
    where?: v_cajas_packingWhereInput
  }

  /**
   * v_cajas_packing upsert
   */
  export type v_cajas_packingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * The filter to search for the v_cajas_packing to update in case it exists.
     */
    where: v_cajas_packingWhereUniqueInput
    /**
     * In case the v_cajas_packing found by the `where` argument doesn't exist, create a new v_cajas_packing with this data.
     */
    create: XOR<v_cajas_packingCreateInput, v_cajas_packingUncheckedCreateInput>
    /**
     * In case the v_cajas_packing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<v_cajas_packingUpdateInput, v_cajas_packingUncheckedUpdateInput>
  }

  /**
   * v_cajas_packing delete
   */
  export type v_cajas_packingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
    /**
     * Filter which v_cajas_packing to delete.
     */
    where: v_cajas_packingWhereUniqueInput
  }

  /**
   * v_cajas_packing deleteMany
   */
  export type v_cajas_packingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_packings to delete
     */
    where?: v_cajas_packingWhereInput
  }

  /**
   * v_cajas_packing without action
   */
  export type v_cajas_packingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_packing
     */
    select?: v_cajas_packingSelect<ExtArgs> | null
  }


  /**
   * Model v_cajas_validadas
   */

  export type AggregateV_cajas_validadas = {
    _count: V_cajas_validadasCountAggregateOutputType | null
    _avg: V_cajas_validadasAvgAggregateOutputType | null
    _sum: V_cajas_validadasSumAggregateOutputType | null
    _min: V_cajas_validadasMinAggregateOutputType | null
    _max: V_cajas_validadasMaxAggregateOutputType | null
  }

  export type V_cajas_validadasAvgAggregateOutputType = {
    Cajas: number | null
  }

  export type V_cajas_validadasSumAggregateOutputType = {
    Cajas: number | null
  }

  export type V_cajas_validadasMinAggregateOutputType = {
    Especie: string | null
    Fecha_packing: string | null
    Folio: string | null
    Cajas: number | null
    Camara: string | null
  }

  export type V_cajas_validadasMaxAggregateOutputType = {
    Especie: string | null
    Fecha_packing: string | null
    Folio: string | null
    Cajas: number | null
    Camara: string | null
  }

  export type V_cajas_validadasCountAggregateOutputType = {
    Especie: number
    Fecha_packing: number
    Folio: number
    Cajas: number
    Camara: number
    _all: number
  }


  export type V_cajas_validadasAvgAggregateInputType = {
    Cajas?: true
  }

  export type V_cajas_validadasSumAggregateInputType = {
    Cajas?: true
  }

  export type V_cajas_validadasMinAggregateInputType = {
    Especie?: true
    Fecha_packing?: true
    Folio?: true
    Cajas?: true
    Camara?: true
  }

  export type V_cajas_validadasMaxAggregateInputType = {
    Especie?: true
    Fecha_packing?: true
    Folio?: true
    Cajas?: true
    Camara?: true
  }

  export type V_cajas_validadasCountAggregateInputType = {
    Especie?: true
    Fecha_packing?: true
    Folio?: true
    Cajas?: true
    Camara?: true
    _all?: true
  }

  export type V_cajas_validadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_validadas to aggregate.
     */
    where?: v_cajas_validadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_validadas to fetch.
     */
    orderBy?: v_cajas_validadasOrderByWithRelationInput | v_cajas_validadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: v_cajas_validadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_validadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_validadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned v_cajas_validadas
    **/
    _count?: true | V_cajas_validadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_cajas_validadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_cajas_validadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_cajas_validadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_cajas_validadasMaxAggregateInputType
  }

  export type GetV_cajas_validadasAggregateType<T extends V_cajas_validadasAggregateArgs> = {
        [P in keyof T & keyof AggregateV_cajas_validadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_cajas_validadas[P]>
      : GetScalarType<T[P], AggregateV_cajas_validadas[P]>
  }




  export type v_cajas_validadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: v_cajas_validadasWhereInput
    orderBy?: v_cajas_validadasOrderByWithAggregationInput | v_cajas_validadasOrderByWithAggregationInput[]
    by: V_cajas_validadasScalarFieldEnum[] | V_cajas_validadasScalarFieldEnum
    having?: v_cajas_validadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_cajas_validadasCountAggregateInputType | true
    _avg?: V_cajas_validadasAvgAggregateInputType
    _sum?: V_cajas_validadasSumAggregateInputType
    _min?: V_cajas_validadasMinAggregateInputType
    _max?: V_cajas_validadasMaxAggregateInputType
  }

  export type V_cajas_validadasGroupByOutputType = {
    Especie: string
    Fecha_packing: string
    Folio: string
    Cajas: number
    Camara: string
    _count: V_cajas_validadasCountAggregateOutputType | null
    _avg: V_cajas_validadasAvgAggregateOutputType | null
    _sum: V_cajas_validadasSumAggregateOutputType | null
    _min: V_cajas_validadasMinAggregateOutputType | null
    _max: V_cajas_validadasMaxAggregateOutputType | null
  }

  type GetV_cajas_validadasGroupByPayload<T extends v_cajas_validadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_cajas_validadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_cajas_validadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_cajas_validadasGroupByOutputType[P]>
            : GetScalarType<T[P], V_cajas_validadasGroupByOutputType[P]>
        }
      >
    >


  export type v_cajas_validadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Especie?: boolean
    Fecha_packing?: boolean
    Folio?: boolean
    Cajas?: boolean
    Camara?: boolean
  }, ExtArgs["result"]["v_cajas_validadas"]>


  export type v_cajas_validadasSelectScalar = {
    Especie?: boolean
    Fecha_packing?: boolean
    Folio?: boolean
    Cajas?: boolean
    Camara?: boolean
  }


  export type $v_cajas_validadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "v_cajas_validadas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Especie: string
      Fecha_packing: string
      Folio: string
      Cajas: number
      Camara: string
    }, ExtArgs["result"]["v_cajas_validadas"]>
    composites: {}
  }

  type v_cajas_validadasGetPayload<S extends boolean | null | undefined | v_cajas_validadasDefaultArgs> = $Result.GetResult<Prisma.$v_cajas_validadasPayload, S>

  type v_cajas_validadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<v_cajas_validadasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_cajas_validadasCountAggregateInputType | true
    }

  export interface v_cajas_validadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['v_cajas_validadas'], meta: { name: 'v_cajas_validadas' } }
    /**
     * Find zero or one V_cajas_validadas that matches the filter.
     * @param {v_cajas_validadasFindUniqueArgs} args - Arguments to find a V_cajas_validadas
     * @example
     * // Get one V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends v_cajas_validadasFindUniqueArgs>(args: SelectSubset<T, v_cajas_validadasFindUniqueArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one V_cajas_validadas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {v_cajas_validadasFindUniqueOrThrowArgs} args - Arguments to find a V_cajas_validadas
     * @example
     * // Get one V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends v_cajas_validadasFindUniqueOrThrowArgs>(args: SelectSubset<T, v_cajas_validadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first V_cajas_validadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasFindFirstArgs} args - Arguments to find a V_cajas_validadas
     * @example
     * // Get one V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends v_cajas_validadasFindFirstArgs>(args?: SelectSubset<T, v_cajas_validadasFindFirstArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first V_cajas_validadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasFindFirstOrThrowArgs} args - Arguments to find a V_cajas_validadas
     * @example
     * // Get one V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends v_cajas_validadasFindFirstOrThrowArgs>(args?: SelectSubset<T, v_cajas_validadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more V_cajas_validadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findMany()
     * 
     * // Get first 10 V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.findMany({ take: 10 })
     * 
     * // Only select the `Especie`
     * const v_cajas_validadasWithEspecieOnly = await prisma.v_cajas_validadas.findMany({ select: { Especie: true } })
     * 
     */
    findMany<T extends v_cajas_validadasFindManyArgs>(args?: SelectSubset<T, v_cajas_validadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a V_cajas_validadas.
     * @param {v_cajas_validadasCreateArgs} args - Arguments to create a V_cajas_validadas.
     * @example
     * // Create one V_cajas_validadas
     * const V_cajas_validadas = await prisma.v_cajas_validadas.create({
     *   data: {
     *     // ... data to create a V_cajas_validadas
     *   }
     * })
     * 
     */
    create<T extends v_cajas_validadasCreateArgs>(args: SelectSubset<T, v_cajas_validadasCreateArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many V_cajas_validadas.
     * @param {v_cajas_validadasCreateManyArgs} args - Arguments to create many V_cajas_validadas.
     * @example
     * // Create many V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends v_cajas_validadasCreateManyArgs>(args?: SelectSubset<T, v_cajas_validadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_cajas_validadas.
     * @param {v_cajas_validadasDeleteArgs} args - Arguments to delete one V_cajas_validadas.
     * @example
     * // Delete one V_cajas_validadas
     * const V_cajas_validadas = await prisma.v_cajas_validadas.delete({
     *   where: {
     *     // ... filter to delete one V_cajas_validadas
     *   }
     * })
     * 
     */
    delete<T extends v_cajas_validadasDeleteArgs>(args: SelectSubset<T, v_cajas_validadasDeleteArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one V_cajas_validadas.
     * @param {v_cajas_validadasUpdateArgs} args - Arguments to update one V_cajas_validadas.
     * @example
     * // Update one V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends v_cajas_validadasUpdateArgs>(args: SelectSubset<T, v_cajas_validadasUpdateArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more V_cajas_validadas.
     * @param {v_cajas_validadasDeleteManyArgs} args - Arguments to filter V_cajas_validadas to delete.
     * @example
     * // Delete a few V_cajas_validadas
     * const { count } = await prisma.v_cajas_validadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends v_cajas_validadasDeleteManyArgs>(args?: SelectSubset<T, v_cajas_validadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_cajas_validadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends v_cajas_validadasUpdateManyArgs>(args: SelectSubset<T, v_cajas_validadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_cajas_validadas.
     * @param {v_cajas_validadasUpsertArgs} args - Arguments to update or create a V_cajas_validadas.
     * @example
     * // Update or create a V_cajas_validadas
     * const v_cajas_validadas = await prisma.v_cajas_validadas.upsert({
     *   create: {
     *     // ... data to create a V_cajas_validadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_cajas_validadas we want to update
     *   }
     * })
     */
    upsert<T extends v_cajas_validadasUpsertArgs>(args: SelectSubset<T, v_cajas_validadasUpsertArgs<ExtArgs>>): Prisma__v_cajas_validadasClient<$Result.GetResult<Prisma.$v_cajas_validadasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of V_cajas_validadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasCountArgs} args - Arguments to filter V_cajas_validadas to count.
     * @example
     * // Count the number of V_cajas_validadas
     * const count = await prisma.v_cajas_validadas.count({
     *   where: {
     *     // ... the filter for the V_cajas_validadas we want to count
     *   }
     * })
    **/
    count<T extends v_cajas_validadasCountArgs>(
      args?: Subset<T, v_cajas_validadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_cajas_validadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_cajas_validadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_cajas_validadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_cajas_validadasAggregateArgs>(args: Subset<T, V_cajas_validadasAggregateArgs>): Prisma.PrismaPromise<GetV_cajas_validadasAggregateType<T>>

    /**
     * Group by V_cajas_validadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_validadasGroupByArgs} args - Group by arguments.
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
      T extends v_cajas_validadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: v_cajas_validadasGroupByArgs['orderBy'] }
        : { orderBy?: v_cajas_validadasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, v_cajas_validadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_cajas_validadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the v_cajas_validadas model
   */
  readonly fields: v_cajas_validadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for v_cajas_validadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__v_cajas_validadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the v_cajas_validadas model
   */ 
  interface v_cajas_validadasFieldRefs {
    readonly Especie: FieldRef<"v_cajas_validadas", 'String'>
    readonly Fecha_packing: FieldRef<"v_cajas_validadas", 'String'>
    readonly Folio: FieldRef<"v_cajas_validadas", 'String'>
    readonly Cajas: FieldRef<"v_cajas_validadas", 'Int'>
    readonly Camara: FieldRef<"v_cajas_validadas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * v_cajas_validadas findUnique
   */
  export type v_cajas_validadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_validadas to fetch.
     */
    where: v_cajas_validadasWhereUniqueInput
  }

  /**
   * v_cajas_validadas findUniqueOrThrow
   */
  export type v_cajas_validadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_validadas to fetch.
     */
    where: v_cajas_validadasWhereUniqueInput
  }

  /**
   * v_cajas_validadas findFirst
   */
  export type v_cajas_validadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_validadas to fetch.
     */
    where?: v_cajas_validadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_validadas to fetch.
     */
    orderBy?: v_cajas_validadasOrderByWithRelationInput | v_cajas_validadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_validadas.
     */
    cursor?: v_cajas_validadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_validadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_validadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_validadas.
     */
    distinct?: V_cajas_validadasScalarFieldEnum | V_cajas_validadasScalarFieldEnum[]
  }

  /**
   * v_cajas_validadas findFirstOrThrow
   */
  export type v_cajas_validadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_validadas to fetch.
     */
    where?: v_cajas_validadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_validadas to fetch.
     */
    orderBy?: v_cajas_validadasOrderByWithRelationInput | v_cajas_validadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_validadas.
     */
    cursor?: v_cajas_validadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_validadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_validadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_validadas.
     */
    distinct?: V_cajas_validadasScalarFieldEnum | V_cajas_validadasScalarFieldEnum[]
  }

  /**
   * v_cajas_validadas findMany
   */
  export type v_cajas_validadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_validadas to fetch.
     */
    where?: v_cajas_validadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_validadas to fetch.
     */
    orderBy?: v_cajas_validadasOrderByWithRelationInput | v_cajas_validadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing v_cajas_validadas.
     */
    cursor?: v_cajas_validadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_validadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_validadas.
     */
    skip?: number
    distinct?: V_cajas_validadasScalarFieldEnum | V_cajas_validadasScalarFieldEnum[]
  }

  /**
   * v_cajas_validadas create
   */
  export type v_cajas_validadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * The data needed to create a v_cajas_validadas.
     */
    data: XOR<v_cajas_validadasCreateInput, v_cajas_validadasUncheckedCreateInput>
  }

  /**
   * v_cajas_validadas createMany
   */
  export type v_cajas_validadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many v_cajas_validadas.
     */
    data: v_cajas_validadasCreateManyInput | v_cajas_validadasCreateManyInput[]
  }

  /**
   * v_cajas_validadas update
   */
  export type v_cajas_validadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * The data needed to update a v_cajas_validadas.
     */
    data: XOR<v_cajas_validadasUpdateInput, v_cajas_validadasUncheckedUpdateInput>
    /**
     * Choose, which v_cajas_validadas to update.
     */
    where: v_cajas_validadasWhereUniqueInput
  }

  /**
   * v_cajas_validadas updateMany
   */
  export type v_cajas_validadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update v_cajas_validadas.
     */
    data: XOR<v_cajas_validadasUpdateManyMutationInput, v_cajas_validadasUncheckedUpdateManyInput>
    /**
     * Filter which v_cajas_validadas to update
     */
    where?: v_cajas_validadasWhereInput
  }

  /**
   * v_cajas_validadas upsert
   */
  export type v_cajas_validadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * The filter to search for the v_cajas_validadas to update in case it exists.
     */
    where: v_cajas_validadasWhereUniqueInput
    /**
     * In case the v_cajas_validadas found by the `where` argument doesn't exist, create a new v_cajas_validadas with this data.
     */
    create: XOR<v_cajas_validadasCreateInput, v_cajas_validadasUncheckedCreateInput>
    /**
     * In case the v_cajas_validadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<v_cajas_validadasUpdateInput, v_cajas_validadasUncheckedUpdateInput>
  }

  /**
   * v_cajas_validadas delete
   */
  export type v_cajas_validadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
    /**
     * Filter which v_cajas_validadas to delete.
     */
    where: v_cajas_validadasWhereUniqueInput
  }

  /**
   * v_cajas_validadas deleteMany
   */
  export type v_cajas_validadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_validadas to delete
     */
    where?: v_cajas_validadasWhereInput
  }

  /**
   * v_cajas_validadas without action
   */
  export type v_cajas_validadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_validadas
     */
    select?: v_cajas_validadasSelect<ExtArgs> | null
  }


  /**
   * Model v_cajas_rechazadas
   */

  export type AggregateV_cajas_rechazadas = {
    _count: V_cajas_rechazadasCountAggregateOutputType | null
    _avg: V_cajas_rechazadasAvgAggregateOutputType | null
    _sum: V_cajas_rechazadasSumAggregateOutputType | null
    _min: V_cajas_rechazadasMinAggregateOutputType | null
    _max: V_cajas_rechazadasMaxAggregateOutputType | null
  }

  export type V_cajas_rechazadasAvgAggregateOutputType = {
    cajas: number | null
  }

  export type V_cajas_rechazadasSumAggregateOutputType = {
    cajas: number | null
  }

  export type V_cajas_rechazadasMinAggregateOutputType = {
    folio_rechazado: string | null
    especie: string | null
    Fecha_packing: string | null
    cajas: number | null
    camara: string | null
  }

  export type V_cajas_rechazadasMaxAggregateOutputType = {
    folio_rechazado: string | null
    especie: string | null
    Fecha_packing: string | null
    cajas: number | null
    camara: string | null
  }

  export type V_cajas_rechazadasCountAggregateOutputType = {
    folio_rechazado: number
    especie: number
    Fecha_packing: number
    cajas: number
    camara: number
    _all: number
  }


  export type V_cajas_rechazadasAvgAggregateInputType = {
    cajas?: true
  }

  export type V_cajas_rechazadasSumAggregateInputType = {
    cajas?: true
  }

  export type V_cajas_rechazadasMinAggregateInputType = {
    folio_rechazado?: true
    especie?: true
    Fecha_packing?: true
    cajas?: true
    camara?: true
  }

  export type V_cajas_rechazadasMaxAggregateInputType = {
    folio_rechazado?: true
    especie?: true
    Fecha_packing?: true
    cajas?: true
    camara?: true
  }

  export type V_cajas_rechazadasCountAggregateInputType = {
    folio_rechazado?: true
    especie?: true
    Fecha_packing?: true
    cajas?: true
    camara?: true
    _all?: true
  }

  export type V_cajas_rechazadasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_rechazadas to aggregate.
     */
    where?: v_cajas_rechazadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_rechazadas to fetch.
     */
    orderBy?: v_cajas_rechazadasOrderByWithRelationInput | v_cajas_rechazadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: v_cajas_rechazadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_rechazadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_rechazadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned v_cajas_rechazadas
    **/
    _count?: true | V_cajas_rechazadasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_cajas_rechazadasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_cajas_rechazadasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_cajas_rechazadasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_cajas_rechazadasMaxAggregateInputType
  }

  export type GetV_cajas_rechazadasAggregateType<T extends V_cajas_rechazadasAggregateArgs> = {
        [P in keyof T & keyof AggregateV_cajas_rechazadas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_cajas_rechazadas[P]>
      : GetScalarType<T[P], AggregateV_cajas_rechazadas[P]>
  }




  export type v_cajas_rechazadasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: v_cajas_rechazadasWhereInput
    orderBy?: v_cajas_rechazadasOrderByWithAggregationInput | v_cajas_rechazadasOrderByWithAggregationInput[]
    by: V_cajas_rechazadasScalarFieldEnum[] | V_cajas_rechazadasScalarFieldEnum
    having?: v_cajas_rechazadasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_cajas_rechazadasCountAggregateInputType | true
    _avg?: V_cajas_rechazadasAvgAggregateInputType
    _sum?: V_cajas_rechazadasSumAggregateInputType
    _min?: V_cajas_rechazadasMinAggregateInputType
    _max?: V_cajas_rechazadasMaxAggregateInputType
  }

  export type V_cajas_rechazadasGroupByOutputType = {
    folio_rechazado: string
    especie: string
    Fecha_packing: string
    cajas: number | null
    camara: string | null
    _count: V_cajas_rechazadasCountAggregateOutputType | null
    _avg: V_cajas_rechazadasAvgAggregateOutputType | null
    _sum: V_cajas_rechazadasSumAggregateOutputType | null
    _min: V_cajas_rechazadasMinAggregateOutputType | null
    _max: V_cajas_rechazadasMaxAggregateOutputType | null
  }

  type GetV_cajas_rechazadasGroupByPayload<T extends v_cajas_rechazadasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_cajas_rechazadasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_cajas_rechazadasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_cajas_rechazadasGroupByOutputType[P]>
            : GetScalarType<T[P], V_cajas_rechazadasGroupByOutputType[P]>
        }
      >
    >


  export type v_cajas_rechazadasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio_rechazado?: boolean
    especie?: boolean
    Fecha_packing?: boolean
    cajas?: boolean
    camara?: boolean
  }, ExtArgs["result"]["v_cajas_rechazadas"]>


  export type v_cajas_rechazadasSelectScalar = {
    folio_rechazado?: boolean
    especie?: boolean
    Fecha_packing?: boolean
    cajas?: boolean
    camara?: boolean
  }


  export type $v_cajas_rechazadasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "v_cajas_rechazadas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      folio_rechazado: string
      especie: string
      Fecha_packing: string
      cajas: number | null
      camara: string | null
    }, ExtArgs["result"]["v_cajas_rechazadas"]>
    composites: {}
  }

  type v_cajas_rechazadasGetPayload<S extends boolean | null | undefined | v_cajas_rechazadasDefaultArgs> = $Result.GetResult<Prisma.$v_cajas_rechazadasPayload, S>

  type v_cajas_rechazadasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<v_cajas_rechazadasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_cajas_rechazadasCountAggregateInputType | true
    }

  export interface v_cajas_rechazadasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['v_cajas_rechazadas'], meta: { name: 'v_cajas_rechazadas' } }
    /**
     * Find zero or one V_cajas_rechazadas that matches the filter.
     * @param {v_cajas_rechazadasFindUniqueArgs} args - Arguments to find a V_cajas_rechazadas
     * @example
     * // Get one V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends v_cajas_rechazadasFindUniqueArgs>(args: SelectSubset<T, v_cajas_rechazadasFindUniqueArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one V_cajas_rechazadas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {v_cajas_rechazadasFindUniqueOrThrowArgs} args - Arguments to find a V_cajas_rechazadas
     * @example
     * // Get one V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends v_cajas_rechazadasFindUniqueOrThrowArgs>(args: SelectSubset<T, v_cajas_rechazadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first V_cajas_rechazadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasFindFirstArgs} args - Arguments to find a V_cajas_rechazadas
     * @example
     * // Get one V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends v_cajas_rechazadasFindFirstArgs>(args?: SelectSubset<T, v_cajas_rechazadasFindFirstArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first V_cajas_rechazadas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasFindFirstOrThrowArgs} args - Arguments to find a V_cajas_rechazadas
     * @example
     * // Get one V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends v_cajas_rechazadasFindFirstOrThrowArgs>(args?: SelectSubset<T, v_cajas_rechazadasFindFirstOrThrowArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more V_cajas_rechazadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findMany()
     * 
     * // Get first 10 V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.findMany({ take: 10 })
     * 
     * // Only select the `folio_rechazado`
     * const v_cajas_rechazadasWithFolio_rechazadoOnly = await prisma.v_cajas_rechazadas.findMany({ select: { folio_rechazado: true } })
     * 
     */
    findMany<T extends v_cajas_rechazadasFindManyArgs>(args?: SelectSubset<T, v_cajas_rechazadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a V_cajas_rechazadas.
     * @param {v_cajas_rechazadasCreateArgs} args - Arguments to create a V_cajas_rechazadas.
     * @example
     * // Create one V_cajas_rechazadas
     * const V_cajas_rechazadas = await prisma.v_cajas_rechazadas.create({
     *   data: {
     *     // ... data to create a V_cajas_rechazadas
     *   }
     * })
     * 
     */
    create<T extends v_cajas_rechazadasCreateArgs>(args: SelectSubset<T, v_cajas_rechazadasCreateArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many V_cajas_rechazadas.
     * @param {v_cajas_rechazadasCreateManyArgs} args - Arguments to create many V_cajas_rechazadas.
     * @example
     * // Create many V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends v_cajas_rechazadasCreateManyArgs>(args?: SelectSubset<T, v_cajas_rechazadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_cajas_rechazadas.
     * @param {v_cajas_rechazadasDeleteArgs} args - Arguments to delete one V_cajas_rechazadas.
     * @example
     * // Delete one V_cajas_rechazadas
     * const V_cajas_rechazadas = await prisma.v_cajas_rechazadas.delete({
     *   where: {
     *     // ... filter to delete one V_cajas_rechazadas
     *   }
     * })
     * 
     */
    delete<T extends v_cajas_rechazadasDeleteArgs>(args: SelectSubset<T, v_cajas_rechazadasDeleteArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one V_cajas_rechazadas.
     * @param {v_cajas_rechazadasUpdateArgs} args - Arguments to update one V_cajas_rechazadas.
     * @example
     * // Update one V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends v_cajas_rechazadasUpdateArgs>(args: SelectSubset<T, v_cajas_rechazadasUpdateArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more V_cajas_rechazadas.
     * @param {v_cajas_rechazadasDeleteManyArgs} args - Arguments to filter V_cajas_rechazadas to delete.
     * @example
     * // Delete a few V_cajas_rechazadas
     * const { count } = await prisma.v_cajas_rechazadas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends v_cajas_rechazadasDeleteManyArgs>(args?: SelectSubset<T, v_cajas_rechazadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_cajas_rechazadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends v_cajas_rechazadasUpdateManyArgs>(args: SelectSubset<T, v_cajas_rechazadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_cajas_rechazadas.
     * @param {v_cajas_rechazadasUpsertArgs} args - Arguments to update or create a V_cajas_rechazadas.
     * @example
     * // Update or create a V_cajas_rechazadas
     * const v_cajas_rechazadas = await prisma.v_cajas_rechazadas.upsert({
     *   create: {
     *     // ... data to create a V_cajas_rechazadas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_cajas_rechazadas we want to update
     *   }
     * })
     */
    upsert<T extends v_cajas_rechazadasUpsertArgs>(args: SelectSubset<T, v_cajas_rechazadasUpsertArgs<ExtArgs>>): Prisma__v_cajas_rechazadasClient<$Result.GetResult<Prisma.$v_cajas_rechazadasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of V_cajas_rechazadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasCountArgs} args - Arguments to filter V_cajas_rechazadas to count.
     * @example
     * // Count the number of V_cajas_rechazadas
     * const count = await prisma.v_cajas_rechazadas.count({
     *   where: {
     *     // ... the filter for the V_cajas_rechazadas we want to count
     *   }
     * })
    **/
    count<T extends v_cajas_rechazadasCountArgs>(
      args?: Subset<T, v_cajas_rechazadasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_cajas_rechazadasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_cajas_rechazadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_cajas_rechazadasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_cajas_rechazadasAggregateArgs>(args: Subset<T, V_cajas_rechazadasAggregateArgs>): Prisma.PrismaPromise<GetV_cajas_rechazadasAggregateType<T>>

    /**
     * Group by V_cajas_rechazadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_cajas_rechazadasGroupByArgs} args - Group by arguments.
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
      T extends v_cajas_rechazadasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: v_cajas_rechazadasGroupByArgs['orderBy'] }
        : { orderBy?: v_cajas_rechazadasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, v_cajas_rechazadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_cajas_rechazadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the v_cajas_rechazadas model
   */
  readonly fields: v_cajas_rechazadasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for v_cajas_rechazadas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__v_cajas_rechazadasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the v_cajas_rechazadas model
   */ 
  interface v_cajas_rechazadasFieldRefs {
    readonly folio_rechazado: FieldRef<"v_cajas_rechazadas", 'String'>
    readonly especie: FieldRef<"v_cajas_rechazadas", 'String'>
    readonly Fecha_packing: FieldRef<"v_cajas_rechazadas", 'String'>
    readonly cajas: FieldRef<"v_cajas_rechazadas", 'Int'>
    readonly camara: FieldRef<"v_cajas_rechazadas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * v_cajas_rechazadas findUnique
   */
  export type v_cajas_rechazadasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_rechazadas to fetch.
     */
    where: v_cajas_rechazadasWhereUniqueInput
  }

  /**
   * v_cajas_rechazadas findUniqueOrThrow
   */
  export type v_cajas_rechazadasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_rechazadas to fetch.
     */
    where: v_cajas_rechazadasWhereUniqueInput
  }

  /**
   * v_cajas_rechazadas findFirst
   */
  export type v_cajas_rechazadasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_rechazadas to fetch.
     */
    where?: v_cajas_rechazadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_rechazadas to fetch.
     */
    orderBy?: v_cajas_rechazadasOrderByWithRelationInput | v_cajas_rechazadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_rechazadas.
     */
    cursor?: v_cajas_rechazadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_rechazadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_rechazadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_rechazadas.
     */
    distinct?: V_cajas_rechazadasScalarFieldEnum | V_cajas_rechazadasScalarFieldEnum[]
  }

  /**
   * v_cajas_rechazadas findFirstOrThrow
   */
  export type v_cajas_rechazadasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_rechazadas to fetch.
     */
    where?: v_cajas_rechazadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_rechazadas to fetch.
     */
    orderBy?: v_cajas_rechazadasOrderByWithRelationInput | v_cajas_rechazadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_cajas_rechazadas.
     */
    cursor?: v_cajas_rechazadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_rechazadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_rechazadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_cajas_rechazadas.
     */
    distinct?: V_cajas_rechazadasScalarFieldEnum | V_cajas_rechazadasScalarFieldEnum[]
  }

  /**
   * v_cajas_rechazadas findMany
   */
  export type v_cajas_rechazadasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter, which v_cajas_rechazadas to fetch.
     */
    where?: v_cajas_rechazadasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_cajas_rechazadas to fetch.
     */
    orderBy?: v_cajas_rechazadasOrderByWithRelationInput | v_cajas_rechazadasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing v_cajas_rechazadas.
     */
    cursor?: v_cajas_rechazadasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_cajas_rechazadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_cajas_rechazadas.
     */
    skip?: number
    distinct?: V_cajas_rechazadasScalarFieldEnum | V_cajas_rechazadasScalarFieldEnum[]
  }

  /**
   * v_cajas_rechazadas create
   */
  export type v_cajas_rechazadasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * The data needed to create a v_cajas_rechazadas.
     */
    data: XOR<v_cajas_rechazadasCreateInput, v_cajas_rechazadasUncheckedCreateInput>
  }

  /**
   * v_cajas_rechazadas createMany
   */
  export type v_cajas_rechazadasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many v_cajas_rechazadas.
     */
    data: v_cajas_rechazadasCreateManyInput | v_cajas_rechazadasCreateManyInput[]
  }

  /**
   * v_cajas_rechazadas update
   */
  export type v_cajas_rechazadasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * The data needed to update a v_cajas_rechazadas.
     */
    data: XOR<v_cajas_rechazadasUpdateInput, v_cajas_rechazadasUncheckedUpdateInput>
    /**
     * Choose, which v_cajas_rechazadas to update.
     */
    where: v_cajas_rechazadasWhereUniqueInput
  }

  /**
   * v_cajas_rechazadas updateMany
   */
  export type v_cajas_rechazadasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update v_cajas_rechazadas.
     */
    data: XOR<v_cajas_rechazadasUpdateManyMutationInput, v_cajas_rechazadasUncheckedUpdateManyInput>
    /**
     * Filter which v_cajas_rechazadas to update
     */
    where?: v_cajas_rechazadasWhereInput
  }

  /**
   * v_cajas_rechazadas upsert
   */
  export type v_cajas_rechazadasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * The filter to search for the v_cajas_rechazadas to update in case it exists.
     */
    where: v_cajas_rechazadasWhereUniqueInput
    /**
     * In case the v_cajas_rechazadas found by the `where` argument doesn't exist, create a new v_cajas_rechazadas with this data.
     */
    create: XOR<v_cajas_rechazadasCreateInput, v_cajas_rechazadasUncheckedCreateInput>
    /**
     * In case the v_cajas_rechazadas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<v_cajas_rechazadasUpdateInput, v_cajas_rechazadasUncheckedUpdateInput>
  }

  /**
   * v_cajas_rechazadas delete
   */
  export type v_cajas_rechazadasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
    /**
     * Filter which v_cajas_rechazadas to delete.
     */
    where: v_cajas_rechazadasWhereUniqueInput
  }

  /**
   * v_cajas_rechazadas deleteMany
   */
  export type v_cajas_rechazadasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_cajas_rechazadas to delete
     */
    where?: v_cajas_rechazadasWhereInput
  }

  /**
   * v_cajas_rechazadas without action
   */
  export type v_cajas_rechazadasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_cajas_rechazadas
     */
    select?: v_cajas_rechazadasSelect<ExtArgs> | null
  }


  /**
   * Model v_informe_diario
   */

  export type AggregateV_informe_diario = {
    _count: V_informe_diarioCountAggregateOutputType | null
    _avg: V_informe_diarioAvgAggregateOutputType | null
    _sum: V_informe_diarioSumAggregateOutputType | null
    _min: V_informe_diarioMinAggregateOutputType | null
    _max: V_informe_diarioMaxAggregateOutputType | null
  }

  export type V_informe_diarioAvgAggregateOutputType = {
    Cajas: number | null
  }

  export type V_informe_diarioSumAggregateOutputType = {
    Cajas: number | null
  }

  export type V_informe_diarioMinAggregateOutputType = {
    Folio: string | null
    Especie: string | null
    Fecha_packing: string | null
    Cajas: number | null
    LINEA: string | null
    Camara: string | null
    Estado: string | null
  }

  export type V_informe_diarioMaxAggregateOutputType = {
    Folio: string | null
    Especie: string | null
    Fecha_packing: string | null
    Cajas: number | null
    LINEA: string | null
    Camara: string | null
    Estado: string | null
  }

  export type V_informe_diarioCountAggregateOutputType = {
    Folio: number
    Especie: number
    Fecha_packing: number
    Cajas: number
    LINEA: number
    Camara: number
    Estado: number
    _all: number
  }


  export type V_informe_diarioAvgAggregateInputType = {
    Cajas?: true
  }

  export type V_informe_diarioSumAggregateInputType = {
    Cajas?: true
  }

  export type V_informe_diarioMinAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
    Camara?: true
    Estado?: true
  }

  export type V_informe_diarioMaxAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
    Camara?: true
    Estado?: true
  }

  export type V_informe_diarioCountAggregateInputType = {
    Folio?: true
    Especie?: true
    Fecha_packing?: true
    Cajas?: true
    LINEA?: true
    Camara?: true
    Estado?: true
    _all?: true
  }

  export type V_informe_diarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_informe_diario to aggregate.
     */
    where?: v_informe_diarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_informe_diarios to fetch.
     */
    orderBy?: v_informe_diarioOrderByWithRelationInput | v_informe_diarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: v_informe_diarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_informe_diarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_informe_diarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned v_informe_diarios
    **/
    _count?: true | V_informe_diarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_informe_diarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_informe_diarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_informe_diarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_informe_diarioMaxAggregateInputType
  }

  export type GetV_informe_diarioAggregateType<T extends V_informe_diarioAggregateArgs> = {
        [P in keyof T & keyof AggregateV_informe_diario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_informe_diario[P]>
      : GetScalarType<T[P], AggregateV_informe_diario[P]>
  }




  export type v_informe_diarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: v_informe_diarioWhereInput
    orderBy?: v_informe_diarioOrderByWithAggregationInput | v_informe_diarioOrderByWithAggregationInput[]
    by: V_informe_diarioScalarFieldEnum[] | V_informe_diarioScalarFieldEnum
    having?: v_informe_diarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_informe_diarioCountAggregateInputType | true
    _avg?: V_informe_diarioAvgAggregateInputType
    _sum?: V_informe_diarioSumAggregateInputType
    _min?: V_informe_diarioMinAggregateInputType
    _max?: V_informe_diarioMaxAggregateInputType
  }

  export type V_informe_diarioGroupByOutputType = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA: string | null
    Camara: string | null
    Estado: string
    _count: V_informe_diarioCountAggregateOutputType | null
    _avg: V_informe_diarioAvgAggregateOutputType | null
    _sum: V_informe_diarioSumAggregateOutputType | null
    _min: V_informe_diarioMinAggregateOutputType | null
    _max: V_informe_diarioMaxAggregateOutputType | null
  }

  type GetV_informe_diarioGroupByPayload<T extends v_informe_diarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_informe_diarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_informe_diarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_informe_diarioGroupByOutputType[P]>
            : GetScalarType<T[P], V_informe_diarioGroupByOutputType[P]>
        }
      >
    >


  export type v_informe_diarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Folio?: boolean
    Especie?: boolean
    Fecha_packing?: boolean
    Cajas?: boolean
    LINEA?: boolean
    Camara?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["v_informe_diario"]>


  export type v_informe_diarioSelectScalar = {
    Folio?: boolean
    Especie?: boolean
    Fecha_packing?: boolean
    Cajas?: boolean
    LINEA?: boolean
    Camara?: boolean
    Estado?: boolean
  }


  export type $v_informe_diarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "v_informe_diario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Folio: string
      Especie: string
      Fecha_packing: string
      Cajas: number
      LINEA: string | null
      Camara: string | null
      Estado: string
    }, ExtArgs["result"]["v_informe_diario"]>
    composites: {}
  }

  type v_informe_diarioGetPayload<S extends boolean | null | undefined | v_informe_diarioDefaultArgs> = $Result.GetResult<Prisma.$v_informe_diarioPayload, S>

  type v_informe_diarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<v_informe_diarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_informe_diarioCountAggregateInputType | true
    }

  export interface v_informe_diarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['v_informe_diario'], meta: { name: 'v_informe_diario' } }
    /**
     * Find zero or one V_informe_diario that matches the filter.
     * @param {v_informe_diarioFindUniqueArgs} args - Arguments to find a V_informe_diario
     * @example
     * // Get one V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends v_informe_diarioFindUniqueArgs>(args: SelectSubset<T, v_informe_diarioFindUniqueArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one V_informe_diario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {v_informe_diarioFindUniqueOrThrowArgs} args - Arguments to find a V_informe_diario
     * @example
     * // Get one V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends v_informe_diarioFindUniqueOrThrowArgs>(args: SelectSubset<T, v_informe_diarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first V_informe_diario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioFindFirstArgs} args - Arguments to find a V_informe_diario
     * @example
     * // Get one V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends v_informe_diarioFindFirstArgs>(args?: SelectSubset<T, v_informe_diarioFindFirstArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first V_informe_diario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioFindFirstOrThrowArgs} args - Arguments to find a V_informe_diario
     * @example
     * // Get one V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends v_informe_diarioFindFirstOrThrowArgs>(args?: SelectSubset<T, v_informe_diarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more V_informe_diarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_informe_diarios
     * const v_informe_diarios = await prisma.v_informe_diario.findMany()
     * 
     * // Get first 10 V_informe_diarios
     * const v_informe_diarios = await prisma.v_informe_diario.findMany({ take: 10 })
     * 
     * // Only select the `Folio`
     * const v_informe_diarioWithFolioOnly = await prisma.v_informe_diario.findMany({ select: { Folio: true } })
     * 
     */
    findMany<T extends v_informe_diarioFindManyArgs>(args?: SelectSubset<T, v_informe_diarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a V_informe_diario.
     * @param {v_informe_diarioCreateArgs} args - Arguments to create a V_informe_diario.
     * @example
     * // Create one V_informe_diario
     * const V_informe_diario = await prisma.v_informe_diario.create({
     *   data: {
     *     // ... data to create a V_informe_diario
     *   }
     * })
     * 
     */
    create<T extends v_informe_diarioCreateArgs>(args: SelectSubset<T, v_informe_diarioCreateArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many V_informe_diarios.
     * @param {v_informe_diarioCreateManyArgs} args - Arguments to create many V_informe_diarios.
     * @example
     * // Create many V_informe_diarios
     * const v_informe_diario = await prisma.v_informe_diario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends v_informe_diarioCreateManyArgs>(args?: SelectSubset<T, v_informe_diarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_informe_diario.
     * @param {v_informe_diarioDeleteArgs} args - Arguments to delete one V_informe_diario.
     * @example
     * // Delete one V_informe_diario
     * const V_informe_diario = await prisma.v_informe_diario.delete({
     *   where: {
     *     // ... filter to delete one V_informe_diario
     *   }
     * })
     * 
     */
    delete<T extends v_informe_diarioDeleteArgs>(args: SelectSubset<T, v_informe_diarioDeleteArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one V_informe_diario.
     * @param {v_informe_diarioUpdateArgs} args - Arguments to update one V_informe_diario.
     * @example
     * // Update one V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends v_informe_diarioUpdateArgs>(args: SelectSubset<T, v_informe_diarioUpdateArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more V_informe_diarios.
     * @param {v_informe_diarioDeleteManyArgs} args - Arguments to filter V_informe_diarios to delete.
     * @example
     * // Delete a few V_informe_diarios
     * const { count } = await prisma.v_informe_diario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends v_informe_diarioDeleteManyArgs>(args?: SelectSubset<T, v_informe_diarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_informe_diarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_informe_diarios
     * const v_informe_diario = await prisma.v_informe_diario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends v_informe_diarioUpdateManyArgs>(args: SelectSubset<T, v_informe_diarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_informe_diario.
     * @param {v_informe_diarioUpsertArgs} args - Arguments to update or create a V_informe_diario.
     * @example
     * // Update or create a V_informe_diario
     * const v_informe_diario = await prisma.v_informe_diario.upsert({
     *   create: {
     *     // ... data to create a V_informe_diario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_informe_diario we want to update
     *   }
     * })
     */
    upsert<T extends v_informe_diarioUpsertArgs>(args: SelectSubset<T, v_informe_diarioUpsertArgs<ExtArgs>>): Prisma__v_informe_diarioClient<$Result.GetResult<Prisma.$v_informe_diarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of V_informe_diarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioCountArgs} args - Arguments to filter V_informe_diarios to count.
     * @example
     * // Count the number of V_informe_diarios
     * const count = await prisma.v_informe_diario.count({
     *   where: {
     *     // ... the filter for the V_informe_diarios we want to count
     *   }
     * })
    **/
    count<T extends v_informe_diarioCountArgs>(
      args?: Subset<T, v_informe_diarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_informe_diarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_informe_diario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_informe_diarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_informe_diarioAggregateArgs>(args: Subset<T, V_informe_diarioAggregateArgs>): Prisma.PrismaPromise<GetV_informe_diarioAggregateType<T>>

    /**
     * Group by V_informe_diario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v_informe_diarioGroupByArgs} args - Group by arguments.
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
      T extends v_informe_diarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: v_informe_diarioGroupByArgs['orderBy'] }
        : { orderBy?: v_informe_diarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, v_informe_diarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_informe_diarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the v_informe_diario model
   */
  readonly fields: v_informe_diarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for v_informe_diario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__v_informe_diarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the v_informe_diario model
   */ 
  interface v_informe_diarioFieldRefs {
    readonly Folio: FieldRef<"v_informe_diario", 'String'>
    readonly Especie: FieldRef<"v_informe_diario", 'String'>
    readonly Fecha_packing: FieldRef<"v_informe_diario", 'String'>
    readonly Cajas: FieldRef<"v_informe_diario", 'Int'>
    readonly LINEA: FieldRef<"v_informe_diario", 'String'>
    readonly Camara: FieldRef<"v_informe_diario", 'String'>
    readonly Estado: FieldRef<"v_informe_diario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * v_informe_diario findUnique
   */
  export type v_informe_diarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter, which v_informe_diario to fetch.
     */
    where: v_informe_diarioWhereUniqueInput
  }

  /**
   * v_informe_diario findUniqueOrThrow
   */
  export type v_informe_diarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter, which v_informe_diario to fetch.
     */
    where: v_informe_diarioWhereUniqueInput
  }

  /**
   * v_informe_diario findFirst
   */
  export type v_informe_diarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter, which v_informe_diario to fetch.
     */
    where?: v_informe_diarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_informe_diarios to fetch.
     */
    orderBy?: v_informe_diarioOrderByWithRelationInput | v_informe_diarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_informe_diarios.
     */
    cursor?: v_informe_diarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_informe_diarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_informe_diarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_informe_diarios.
     */
    distinct?: V_informe_diarioScalarFieldEnum | V_informe_diarioScalarFieldEnum[]
  }

  /**
   * v_informe_diario findFirstOrThrow
   */
  export type v_informe_diarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter, which v_informe_diario to fetch.
     */
    where?: v_informe_diarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_informe_diarios to fetch.
     */
    orderBy?: v_informe_diarioOrderByWithRelationInput | v_informe_diarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v_informe_diarios.
     */
    cursor?: v_informe_diarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_informe_diarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_informe_diarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v_informe_diarios.
     */
    distinct?: V_informe_diarioScalarFieldEnum | V_informe_diarioScalarFieldEnum[]
  }

  /**
   * v_informe_diario findMany
   */
  export type v_informe_diarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter, which v_informe_diarios to fetch.
     */
    where?: v_informe_diarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v_informe_diarios to fetch.
     */
    orderBy?: v_informe_diarioOrderByWithRelationInput | v_informe_diarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing v_informe_diarios.
     */
    cursor?: v_informe_diarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v_informe_diarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v_informe_diarios.
     */
    skip?: number
    distinct?: V_informe_diarioScalarFieldEnum | V_informe_diarioScalarFieldEnum[]
  }

  /**
   * v_informe_diario create
   */
  export type v_informe_diarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * The data needed to create a v_informe_diario.
     */
    data: XOR<v_informe_diarioCreateInput, v_informe_diarioUncheckedCreateInput>
  }

  /**
   * v_informe_diario createMany
   */
  export type v_informe_diarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many v_informe_diarios.
     */
    data: v_informe_diarioCreateManyInput | v_informe_diarioCreateManyInput[]
  }

  /**
   * v_informe_diario update
   */
  export type v_informe_diarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * The data needed to update a v_informe_diario.
     */
    data: XOR<v_informe_diarioUpdateInput, v_informe_diarioUncheckedUpdateInput>
    /**
     * Choose, which v_informe_diario to update.
     */
    where: v_informe_diarioWhereUniqueInput
  }

  /**
   * v_informe_diario updateMany
   */
  export type v_informe_diarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update v_informe_diarios.
     */
    data: XOR<v_informe_diarioUpdateManyMutationInput, v_informe_diarioUncheckedUpdateManyInput>
    /**
     * Filter which v_informe_diarios to update
     */
    where?: v_informe_diarioWhereInput
  }

  /**
   * v_informe_diario upsert
   */
  export type v_informe_diarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * The filter to search for the v_informe_diario to update in case it exists.
     */
    where: v_informe_diarioWhereUniqueInput
    /**
     * In case the v_informe_diario found by the `where` argument doesn't exist, create a new v_informe_diario with this data.
     */
    create: XOR<v_informe_diarioCreateInput, v_informe_diarioUncheckedCreateInput>
    /**
     * In case the v_informe_diario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<v_informe_diarioUpdateInput, v_informe_diarioUncheckedUpdateInput>
  }

  /**
   * v_informe_diario delete
   */
  export type v_informe_diarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
    /**
     * Filter which v_informe_diario to delete.
     */
    where: v_informe_diarioWhereUniqueInput
  }

  /**
   * v_informe_diario deleteMany
   */
  export type v_informe_diarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v_informe_diarios to delete
     */
    where?: v_informe_diarioWhereInput
  }

  /**
   * v_informe_diario without action
   */
  export type v_informe_diarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v_informe_diario
     */
    select?: v_informe_diarioSelect<ExtArgs> | null
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


  export const ValidacionesScalarFieldEnum: {
    id: 'id',
    Folio: 'Folio',
    Cajas: 'Cajas',
    Especie: 'Especie',
    Estado: 'Estado',
    Camara: 'Camara',
    Usuario: 'Usuario',
    Packing: 'Packing',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ValidacionesScalarFieldEnum = (typeof ValidacionesScalarFieldEnum)[keyof typeof ValidacionesScalarFieldEnum]


  export const Dm_motivo_rechazoScalarFieldEnum: {
    id_motivo: 'id_motivo',
    nombre_motivo: 'nombre_motivo',
    estado_motivo: 'estado_motivo'
  };

  export type Dm_motivo_rechazoScalarFieldEnum = (typeof Dm_motivo_rechazoScalarFieldEnum)[keyof typeof Dm_motivo_rechazoScalarFieldEnum]


  export const RechazadosScalarFieldEnum: {
    id_rechazado: 'id_rechazado',
    folio_rechazado: 'folio_rechazado',
    id_motivo_rechazo_fk: 'id_motivo_rechazo_fk',
    fecha_rechazado: 'fecha_rechazado',
    usuario: 'usuario',
    cajas: 'cajas',
    camara: 'camara',
    nombre_estado: 'nombre_estado',
    estado: 'estado',
    packing: 'packing',
    especie: 'especie'
  };

  export type RechazadosScalarFieldEnum = (typeof RechazadosScalarFieldEnum)[keyof typeof RechazadosScalarFieldEnum]


  export const V_cajas_packingScalarFieldEnum: {
    Folio: 'Folio',
    Especie: 'Especie',
    Fecha_packing: 'Fecha_packing',
    Cajas: 'Cajas',
    LINEA: 'LINEA'
  };

  export type V_cajas_packingScalarFieldEnum = (typeof V_cajas_packingScalarFieldEnum)[keyof typeof V_cajas_packingScalarFieldEnum]


  export const V_cajas_validadasScalarFieldEnum: {
    Especie: 'Especie',
    Fecha_packing: 'Fecha_packing',
    Folio: 'Folio',
    Cajas: 'Cajas',
    Camara: 'Camara'
  };

  export type V_cajas_validadasScalarFieldEnum = (typeof V_cajas_validadasScalarFieldEnum)[keyof typeof V_cajas_validadasScalarFieldEnum]


  export const V_cajas_rechazadasScalarFieldEnum: {
    folio_rechazado: 'folio_rechazado',
    especie: 'especie',
    Fecha_packing: 'Fecha_packing',
    cajas: 'cajas',
    camara: 'camara'
  };

  export type V_cajas_rechazadasScalarFieldEnum = (typeof V_cajas_rechazadasScalarFieldEnum)[keyof typeof V_cajas_rechazadasScalarFieldEnum]


  export const V_informe_diarioScalarFieldEnum: {
    Folio: 'Folio',
    Especie: 'Especie',
    Fecha_packing: 'Fecha_packing',
    Cajas: 'Cajas',
    LINEA: 'LINEA',
    Camara: 'Camara',
    Estado: 'Estado'
  };

  export type V_informe_diarioScalarFieldEnum = (typeof V_informe_diarioScalarFieldEnum)[keyof typeof V_informe_diarioScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type validacionesWhereInput = {
    AND?: validacionesWhereInput | validacionesWhereInput[]
    OR?: validacionesWhereInput[]
    NOT?: validacionesWhereInput | validacionesWhereInput[]
    id?: IntFilter<"validaciones"> | number
    Folio?: StringFilter<"validaciones"> | string
    Cajas?: IntFilter<"validaciones"> | number
    Especie?: StringFilter<"validaciones"> | string
    Estado?: BoolFilter<"validaciones"> | boolean
    Camara?: StringFilter<"validaciones"> | string
    Usuario?: StringFilter<"validaciones"> | string
    Packing?: StringFilter<"validaciones"> | string
    createdAt?: DateTimeFilter<"validaciones"> | Date | string
    updatedAt?: DateTimeFilter<"validaciones"> | Date | string
  }

  export type validacionesOrderByWithRelationInput = {
    id?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Especie?: SortOrder
    Estado?: SortOrder
    Camara?: SortOrder
    Usuario?: SortOrder
    Packing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type validacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Folio?: string
    AND?: validacionesWhereInput | validacionesWhereInput[]
    OR?: validacionesWhereInput[]
    NOT?: validacionesWhereInput | validacionesWhereInput[]
    Cajas?: IntFilter<"validaciones"> | number
    Especie?: StringFilter<"validaciones"> | string
    Estado?: BoolFilter<"validaciones"> | boolean
    Camara?: StringFilter<"validaciones"> | string
    Usuario?: StringFilter<"validaciones"> | string
    Packing?: StringFilter<"validaciones"> | string
    createdAt?: DateTimeFilter<"validaciones"> | Date | string
    updatedAt?: DateTimeFilter<"validaciones"> | Date | string
  }, "id" | "Folio">

  export type validacionesOrderByWithAggregationInput = {
    id?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Especie?: SortOrder
    Estado?: SortOrder
    Camara?: SortOrder
    Usuario?: SortOrder
    Packing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: validacionesCountOrderByAggregateInput
    _avg?: validacionesAvgOrderByAggregateInput
    _max?: validacionesMaxOrderByAggregateInput
    _min?: validacionesMinOrderByAggregateInput
    _sum?: validacionesSumOrderByAggregateInput
  }

  export type validacionesScalarWhereWithAggregatesInput = {
    AND?: validacionesScalarWhereWithAggregatesInput | validacionesScalarWhereWithAggregatesInput[]
    OR?: validacionesScalarWhereWithAggregatesInput[]
    NOT?: validacionesScalarWhereWithAggregatesInput | validacionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"validaciones"> | number
    Folio?: StringWithAggregatesFilter<"validaciones"> | string
    Cajas?: IntWithAggregatesFilter<"validaciones"> | number
    Especie?: StringWithAggregatesFilter<"validaciones"> | string
    Estado?: BoolWithAggregatesFilter<"validaciones"> | boolean
    Camara?: StringWithAggregatesFilter<"validaciones"> | string
    Usuario?: StringWithAggregatesFilter<"validaciones"> | string
    Packing?: StringWithAggregatesFilter<"validaciones"> | string
    createdAt?: DateTimeWithAggregatesFilter<"validaciones"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"validaciones"> | Date | string
  }

  export type dm_motivo_rechazoWhereInput = {
    AND?: dm_motivo_rechazoWhereInput | dm_motivo_rechazoWhereInput[]
    OR?: dm_motivo_rechazoWhereInput[]
    NOT?: dm_motivo_rechazoWhereInput | dm_motivo_rechazoWhereInput[]
    id_motivo?: IntFilter<"dm_motivo_rechazo"> | number
    nombre_motivo?: StringNullableFilter<"dm_motivo_rechazo"> | string | null
    estado_motivo?: BoolNullableFilter<"dm_motivo_rechazo"> | boolean | null
    rechazados?: RechazadosListRelationFilter
  }

  export type dm_motivo_rechazoOrderByWithRelationInput = {
    id_motivo?: SortOrder
    nombre_motivo?: SortOrderInput | SortOrder
    estado_motivo?: SortOrderInput | SortOrder
    rechazados?: rechazadosOrderByRelationAggregateInput
  }

  export type dm_motivo_rechazoWhereUniqueInput = Prisma.AtLeast<{
    id_motivo?: number
    AND?: dm_motivo_rechazoWhereInput | dm_motivo_rechazoWhereInput[]
    OR?: dm_motivo_rechazoWhereInput[]
    NOT?: dm_motivo_rechazoWhereInput | dm_motivo_rechazoWhereInput[]
    nombre_motivo?: StringNullableFilter<"dm_motivo_rechazo"> | string | null
    estado_motivo?: BoolNullableFilter<"dm_motivo_rechazo"> | boolean | null
    rechazados?: RechazadosListRelationFilter
  }, "id_motivo">

  export type dm_motivo_rechazoOrderByWithAggregationInput = {
    id_motivo?: SortOrder
    nombre_motivo?: SortOrderInput | SortOrder
    estado_motivo?: SortOrderInput | SortOrder
    _count?: dm_motivo_rechazoCountOrderByAggregateInput
    _avg?: dm_motivo_rechazoAvgOrderByAggregateInput
    _max?: dm_motivo_rechazoMaxOrderByAggregateInput
    _min?: dm_motivo_rechazoMinOrderByAggregateInput
    _sum?: dm_motivo_rechazoSumOrderByAggregateInput
  }

  export type dm_motivo_rechazoScalarWhereWithAggregatesInput = {
    AND?: dm_motivo_rechazoScalarWhereWithAggregatesInput | dm_motivo_rechazoScalarWhereWithAggregatesInput[]
    OR?: dm_motivo_rechazoScalarWhereWithAggregatesInput[]
    NOT?: dm_motivo_rechazoScalarWhereWithAggregatesInput | dm_motivo_rechazoScalarWhereWithAggregatesInput[]
    id_motivo?: IntWithAggregatesFilter<"dm_motivo_rechazo"> | number
    nombre_motivo?: StringNullableWithAggregatesFilter<"dm_motivo_rechazo"> | string | null
    estado_motivo?: BoolNullableWithAggregatesFilter<"dm_motivo_rechazo"> | boolean | null
  }

  export type rechazadosWhereInput = {
    AND?: rechazadosWhereInput | rechazadosWhereInput[]
    OR?: rechazadosWhereInput[]
    NOT?: rechazadosWhereInput | rechazadosWhereInput[]
    id_rechazado?: IntFilter<"rechazados"> | number
    folio_rechazado?: StringNullableFilter<"rechazados"> | string | null
    id_motivo_rechazo_fk?: IntNullableFilter<"rechazados"> | number | null
    fecha_rechazado?: DateTimeNullableFilter<"rechazados"> | Date | string | null
    usuario?: StringNullableFilter<"rechazados"> | string | null
    cajas?: IntNullableFilter<"rechazados"> | number | null
    camara?: StringNullableFilter<"rechazados"> | string | null
    nombre_estado?: StringNullableFilter<"rechazados"> | string | null
    estado?: BoolNullableFilter<"rechazados"> | boolean | null
    packing?: StringNullableFilter<"rechazados"> | string | null
    especie?: StringNullableFilter<"rechazados"> | string | null
    dm_motivo_rechazo?: XOR<Dm_motivo_rechazoNullableRelationFilter, dm_motivo_rechazoWhereInput> | null
  }

  export type rechazadosOrderByWithRelationInput = {
    id_rechazado?: SortOrder
    folio_rechazado?: SortOrderInput | SortOrder
    id_motivo_rechazo_fk?: SortOrderInput | SortOrder
    fecha_rechazado?: SortOrderInput | SortOrder
    usuario?: SortOrderInput | SortOrder
    cajas?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
    nombre_estado?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    packing?: SortOrderInput | SortOrder
    especie?: SortOrderInput | SortOrder
    dm_motivo_rechazo?: dm_motivo_rechazoOrderByWithRelationInput
  }

  export type rechazadosWhereUniqueInput = Prisma.AtLeast<{
    id_rechazado?: number
    AND?: rechazadosWhereInput | rechazadosWhereInput[]
    OR?: rechazadosWhereInput[]
    NOT?: rechazadosWhereInput | rechazadosWhereInput[]
    folio_rechazado?: StringNullableFilter<"rechazados"> | string | null
    id_motivo_rechazo_fk?: IntNullableFilter<"rechazados"> | number | null
    fecha_rechazado?: DateTimeNullableFilter<"rechazados"> | Date | string | null
    usuario?: StringNullableFilter<"rechazados"> | string | null
    cajas?: IntNullableFilter<"rechazados"> | number | null
    camara?: StringNullableFilter<"rechazados"> | string | null
    nombre_estado?: StringNullableFilter<"rechazados"> | string | null
    estado?: BoolNullableFilter<"rechazados"> | boolean | null
    packing?: StringNullableFilter<"rechazados"> | string | null
    especie?: StringNullableFilter<"rechazados"> | string | null
    dm_motivo_rechazo?: XOR<Dm_motivo_rechazoNullableRelationFilter, dm_motivo_rechazoWhereInput> | null
  }, "id_rechazado">

  export type rechazadosOrderByWithAggregationInput = {
    id_rechazado?: SortOrder
    folio_rechazado?: SortOrderInput | SortOrder
    id_motivo_rechazo_fk?: SortOrderInput | SortOrder
    fecha_rechazado?: SortOrderInput | SortOrder
    usuario?: SortOrderInput | SortOrder
    cajas?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
    nombre_estado?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    packing?: SortOrderInput | SortOrder
    especie?: SortOrderInput | SortOrder
    _count?: rechazadosCountOrderByAggregateInput
    _avg?: rechazadosAvgOrderByAggregateInput
    _max?: rechazadosMaxOrderByAggregateInput
    _min?: rechazadosMinOrderByAggregateInput
    _sum?: rechazadosSumOrderByAggregateInput
  }

  export type rechazadosScalarWhereWithAggregatesInput = {
    AND?: rechazadosScalarWhereWithAggregatesInput | rechazadosScalarWhereWithAggregatesInput[]
    OR?: rechazadosScalarWhereWithAggregatesInput[]
    NOT?: rechazadosScalarWhereWithAggregatesInput | rechazadosScalarWhereWithAggregatesInput[]
    id_rechazado?: IntWithAggregatesFilter<"rechazados"> | number
    folio_rechazado?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
    id_motivo_rechazo_fk?: IntNullableWithAggregatesFilter<"rechazados"> | number | null
    fecha_rechazado?: DateTimeNullableWithAggregatesFilter<"rechazados"> | Date | string | null
    usuario?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
    cajas?: IntNullableWithAggregatesFilter<"rechazados"> | number | null
    camara?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
    nombre_estado?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
    estado?: BoolNullableWithAggregatesFilter<"rechazados"> | boolean | null
    packing?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
    especie?: StringNullableWithAggregatesFilter<"rechazados"> | string | null
  }

  export type v_cajas_packingWhereInput = {
    AND?: v_cajas_packingWhereInput | v_cajas_packingWhereInput[]
    OR?: v_cajas_packingWhereInput[]
    NOT?: v_cajas_packingWhereInput | v_cajas_packingWhereInput[]
    Folio?: StringFilter<"v_cajas_packing"> | string
    Especie?: StringFilter<"v_cajas_packing"> | string
    Fecha_packing?: StringFilter<"v_cajas_packing"> | string
    Cajas?: IntFilter<"v_cajas_packing"> | number
    LINEA?: StringNullableFilter<"v_cajas_packing"> | string | null
  }

  export type v_cajas_packingOrderByWithRelationInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrderInput | SortOrder
  }

  export type v_cajas_packingWhereUniqueInput = Prisma.AtLeast<{
    Folio_Especie_Fecha_packing?: v_cajas_packingFolioEspecieFecha_packingCompoundUniqueInput
    AND?: v_cajas_packingWhereInput | v_cajas_packingWhereInput[]
    OR?: v_cajas_packingWhereInput[]
    NOT?: v_cajas_packingWhereInput | v_cajas_packingWhereInput[]
    Folio?: StringFilter<"v_cajas_packing"> | string
    Especie?: StringFilter<"v_cajas_packing"> | string
    Fecha_packing?: StringFilter<"v_cajas_packing"> | string
    Cajas?: IntFilter<"v_cajas_packing"> | number
    LINEA?: StringNullableFilter<"v_cajas_packing"> | string | null
  }, "Folio_Especie_Fecha_packing">

  export type v_cajas_packingOrderByWithAggregationInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrderInput | SortOrder
    _count?: v_cajas_packingCountOrderByAggregateInput
    _avg?: v_cajas_packingAvgOrderByAggregateInput
    _max?: v_cajas_packingMaxOrderByAggregateInput
    _min?: v_cajas_packingMinOrderByAggregateInput
    _sum?: v_cajas_packingSumOrderByAggregateInput
  }

  export type v_cajas_packingScalarWhereWithAggregatesInput = {
    AND?: v_cajas_packingScalarWhereWithAggregatesInput | v_cajas_packingScalarWhereWithAggregatesInput[]
    OR?: v_cajas_packingScalarWhereWithAggregatesInput[]
    NOT?: v_cajas_packingScalarWhereWithAggregatesInput | v_cajas_packingScalarWhereWithAggregatesInput[]
    Folio?: StringWithAggregatesFilter<"v_cajas_packing"> | string
    Especie?: StringWithAggregatesFilter<"v_cajas_packing"> | string
    Fecha_packing?: StringWithAggregatesFilter<"v_cajas_packing"> | string
    Cajas?: IntWithAggregatesFilter<"v_cajas_packing"> | number
    LINEA?: StringNullableWithAggregatesFilter<"v_cajas_packing"> | string | null
  }

  export type v_cajas_validadasWhereInput = {
    AND?: v_cajas_validadasWhereInput | v_cajas_validadasWhereInput[]
    OR?: v_cajas_validadasWhereInput[]
    NOT?: v_cajas_validadasWhereInput | v_cajas_validadasWhereInput[]
    Especie?: StringFilter<"v_cajas_validadas"> | string
    Fecha_packing?: StringFilter<"v_cajas_validadas"> | string
    Folio?: StringFilter<"v_cajas_validadas"> | string
    Cajas?: IntFilter<"v_cajas_validadas"> | number
    Camara?: StringFilter<"v_cajas_validadas"> | string
  }

  export type v_cajas_validadasOrderByWithRelationInput = {
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Camara?: SortOrder
  }

  export type v_cajas_validadasWhereUniqueInput = Prisma.AtLeast<{
    Folio_Especie_Fecha_packing?: v_cajas_validadasFolioEspecieFecha_packingCompoundUniqueInput
    AND?: v_cajas_validadasWhereInput | v_cajas_validadasWhereInput[]
    OR?: v_cajas_validadasWhereInput[]
    NOT?: v_cajas_validadasWhereInput | v_cajas_validadasWhereInput[]
    Especie?: StringFilter<"v_cajas_validadas"> | string
    Fecha_packing?: StringFilter<"v_cajas_validadas"> | string
    Folio?: StringFilter<"v_cajas_validadas"> | string
    Cajas?: IntFilter<"v_cajas_validadas"> | number
    Camara?: StringFilter<"v_cajas_validadas"> | string
  }, "Folio_Especie_Fecha_packing">

  export type v_cajas_validadasOrderByWithAggregationInput = {
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Camara?: SortOrder
    _count?: v_cajas_validadasCountOrderByAggregateInput
    _avg?: v_cajas_validadasAvgOrderByAggregateInput
    _max?: v_cajas_validadasMaxOrderByAggregateInput
    _min?: v_cajas_validadasMinOrderByAggregateInput
    _sum?: v_cajas_validadasSumOrderByAggregateInput
  }

  export type v_cajas_validadasScalarWhereWithAggregatesInput = {
    AND?: v_cajas_validadasScalarWhereWithAggregatesInput | v_cajas_validadasScalarWhereWithAggregatesInput[]
    OR?: v_cajas_validadasScalarWhereWithAggregatesInput[]
    NOT?: v_cajas_validadasScalarWhereWithAggregatesInput | v_cajas_validadasScalarWhereWithAggregatesInput[]
    Especie?: StringWithAggregatesFilter<"v_cajas_validadas"> | string
    Fecha_packing?: StringWithAggregatesFilter<"v_cajas_validadas"> | string
    Folio?: StringWithAggregatesFilter<"v_cajas_validadas"> | string
    Cajas?: IntWithAggregatesFilter<"v_cajas_validadas"> | number
    Camara?: StringWithAggregatesFilter<"v_cajas_validadas"> | string
  }

  export type v_cajas_rechazadasWhereInput = {
    AND?: v_cajas_rechazadasWhereInput | v_cajas_rechazadasWhereInput[]
    OR?: v_cajas_rechazadasWhereInput[]
    NOT?: v_cajas_rechazadasWhereInput | v_cajas_rechazadasWhereInput[]
    folio_rechazado?: StringFilter<"v_cajas_rechazadas"> | string
    especie?: StringFilter<"v_cajas_rechazadas"> | string
    Fecha_packing?: StringFilter<"v_cajas_rechazadas"> | string
    cajas?: IntNullableFilter<"v_cajas_rechazadas"> | number | null
    camara?: StringNullableFilter<"v_cajas_rechazadas"> | string | null
  }

  export type v_cajas_rechazadasOrderByWithRelationInput = {
    folio_rechazado?: SortOrder
    especie?: SortOrder
    Fecha_packing?: SortOrder
    cajas?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
  }

  export type v_cajas_rechazadasWhereUniqueInput = Prisma.AtLeast<{
    folio_rechazado_especie_Fecha_packing?: v_cajas_rechazadasFolio_rechazadoEspecieFecha_packingCompoundUniqueInput
    AND?: v_cajas_rechazadasWhereInput | v_cajas_rechazadasWhereInput[]
    OR?: v_cajas_rechazadasWhereInput[]
    NOT?: v_cajas_rechazadasWhereInput | v_cajas_rechazadasWhereInput[]
    folio_rechazado?: StringFilter<"v_cajas_rechazadas"> | string
    especie?: StringFilter<"v_cajas_rechazadas"> | string
    Fecha_packing?: StringFilter<"v_cajas_rechazadas"> | string
    cajas?: IntNullableFilter<"v_cajas_rechazadas"> | number | null
    camara?: StringNullableFilter<"v_cajas_rechazadas"> | string | null
  }, "folio_rechazado_especie_Fecha_packing">

  export type v_cajas_rechazadasOrderByWithAggregationInput = {
    folio_rechazado?: SortOrder
    especie?: SortOrder
    Fecha_packing?: SortOrder
    cajas?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
    _count?: v_cajas_rechazadasCountOrderByAggregateInput
    _avg?: v_cajas_rechazadasAvgOrderByAggregateInput
    _max?: v_cajas_rechazadasMaxOrderByAggregateInput
    _min?: v_cajas_rechazadasMinOrderByAggregateInput
    _sum?: v_cajas_rechazadasSumOrderByAggregateInput
  }

  export type v_cajas_rechazadasScalarWhereWithAggregatesInput = {
    AND?: v_cajas_rechazadasScalarWhereWithAggregatesInput | v_cajas_rechazadasScalarWhereWithAggregatesInput[]
    OR?: v_cajas_rechazadasScalarWhereWithAggregatesInput[]
    NOT?: v_cajas_rechazadasScalarWhereWithAggregatesInput | v_cajas_rechazadasScalarWhereWithAggregatesInput[]
    folio_rechazado?: StringWithAggregatesFilter<"v_cajas_rechazadas"> | string
    especie?: StringWithAggregatesFilter<"v_cajas_rechazadas"> | string
    Fecha_packing?: StringWithAggregatesFilter<"v_cajas_rechazadas"> | string
    cajas?: IntNullableWithAggregatesFilter<"v_cajas_rechazadas"> | number | null
    camara?: StringNullableWithAggregatesFilter<"v_cajas_rechazadas"> | string | null
  }

  export type v_informe_diarioWhereInput = {
    AND?: v_informe_diarioWhereInput | v_informe_diarioWhereInput[]
    OR?: v_informe_diarioWhereInput[]
    NOT?: v_informe_diarioWhereInput | v_informe_diarioWhereInput[]
    Folio?: StringFilter<"v_informe_diario"> | string
    Especie?: StringFilter<"v_informe_diario"> | string
    Fecha_packing?: StringFilter<"v_informe_diario"> | string
    Cajas?: IntFilter<"v_informe_diario"> | number
    LINEA?: StringNullableFilter<"v_informe_diario"> | string | null
    Camara?: StringNullableFilter<"v_informe_diario"> | string | null
    Estado?: StringFilter<"v_informe_diario"> | string
  }

  export type v_informe_diarioOrderByWithRelationInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrderInput | SortOrder
    Camara?: SortOrderInput | SortOrder
    Estado?: SortOrder
  }

  export type v_informe_diarioWhereUniqueInput = Prisma.AtLeast<{
    Folio_Especie_Fecha_packing?: v_informe_diarioFolioEspecieFecha_packingCompoundUniqueInput
    AND?: v_informe_diarioWhereInput | v_informe_diarioWhereInput[]
    OR?: v_informe_diarioWhereInput[]
    NOT?: v_informe_diarioWhereInput | v_informe_diarioWhereInput[]
    Folio?: StringFilter<"v_informe_diario"> | string
    Especie?: StringFilter<"v_informe_diario"> | string
    Fecha_packing?: StringFilter<"v_informe_diario"> | string
    Cajas?: IntFilter<"v_informe_diario"> | number
    LINEA?: StringNullableFilter<"v_informe_diario"> | string | null
    Camara?: StringNullableFilter<"v_informe_diario"> | string | null
    Estado?: StringFilter<"v_informe_diario"> | string
  }, "Folio_Especie_Fecha_packing">

  export type v_informe_diarioOrderByWithAggregationInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrderInput | SortOrder
    Camara?: SortOrderInput | SortOrder
    Estado?: SortOrder
    _count?: v_informe_diarioCountOrderByAggregateInput
    _avg?: v_informe_diarioAvgOrderByAggregateInput
    _max?: v_informe_diarioMaxOrderByAggregateInput
    _min?: v_informe_diarioMinOrderByAggregateInput
    _sum?: v_informe_diarioSumOrderByAggregateInput
  }

  export type v_informe_diarioScalarWhereWithAggregatesInput = {
    AND?: v_informe_diarioScalarWhereWithAggregatesInput | v_informe_diarioScalarWhereWithAggregatesInput[]
    OR?: v_informe_diarioScalarWhereWithAggregatesInput[]
    NOT?: v_informe_diarioScalarWhereWithAggregatesInput | v_informe_diarioScalarWhereWithAggregatesInput[]
    Folio?: StringWithAggregatesFilter<"v_informe_diario"> | string
    Especie?: StringWithAggregatesFilter<"v_informe_diario"> | string
    Fecha_packing?: StringWithAggregatesFilter<"v_informe_diario"> | string
    Cajas?: IntWithAggregatesFilter<"v_informe_diario"> | number
    LINEA?: StringNullableWithAggregatesFilter<"v_informe_diario"> | string | null
    Camara?: StringNullableWithAggregatesFilter<"v_informe_diario"> | string | null
    Estado?: StringWithAggregatesFilter<"v_informe_diario"> | string
  }

  export type validacionesCreateInput = {
    Folio: string
    Cajas: number
    Especie: string
    Estado?: boolean
    Camara: string
    Usuario: string
    Packing: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type validacionesUncheckedCreateInput = {
    id?: number
    Folio: string
    Cajas: number
    Especie: string
    Estado?: boolean
    Camara: string
    Usuario: string
    Packing: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type validacionesUpdateInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Especie?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
    Camara?: StringFieldUpdateOperationsInput | string
    Usuario?: StringFieldUpdateOperationsInput | string
    Packing?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type validacionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Especie?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
    Camara?: StringFieldUpdateOperationsInput | string
    Usuario?: StringFieldUpdateOperationsInput | string
    Packing?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type validacionesCreateManyInput = {
    Folio: string
    Cajas: number
    Especie: string
    Estado?: boolean
    Camara: string
    Usuario: string
    Packing: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type validacionesUpdateManyMutationInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Especie?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
    Camara?: StringFieldUpdateOperationsInput | string
    Usuario?: StringFieldUpdateOperationsInput | string
    Packing?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type validacionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Especie?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
    Camara?: StringFieldUpdateOperationsInput | string
    Usuario?: StringFieldUpdateOperationsInput | string
    Packing?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dm_motivo_rechazoCreateInput = {
    nombre_motivo?: string | null
    estado_motivo?: boolean | null
    rechazados?: rechazadosCreateNestedManyWithoutDm_motivo_rechazoInput
  }

  export type dm_motivo_rechazoUncheckedCreateInput = {
    id_motivo?: number
    nombre_motivo?: string | null
    estado_motivo?: boolean | null
    rechazados?: rechazadosUncheckedCreateNestedManyWithoutDm_motivo_rechazoInput
  }

  export type dm_motivo_rechazoUpdateInput = {
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rechazados?: rechazadosUpdateManyWithoutDm_motivo_rechazoNestedInput
  }

  export type dm_motivo_rechazoUncheckedUpdateInput = {
    id_motivo?: IntFieldUpdateOperationsInput | number
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rechazados?: rechazadosUncheckedUpdateManyWithoutDm_motivo_rechazoNestedInput
  }

  export type dm_motivo_rechazoCreateManyInput = {
    nombre_motivo?: string | null
    estado_motivo?: boolean | null
  }

  export type dm_motivo_rechazoUpdateManyMutationInput = {
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type dm_motivo_rechazoUncheckedUpdateManyInput = {
    id_motivo?: IntFieldUpdateOperationsInput | number
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rechazadosCreateInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
    dm_motivo_rechazo?: dm_motivo_rechazoCreateNestedOneWithoutRechazadosInput
  }

  export type rechazadosUncheckedCreateInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    id_motivo_rechazo_fk?: number | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
  }

  export type rechazadosUpdateInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    dm_motivo_rechazo?: dm_motivo_rechazoUpdateOneWithoutRechazadosNestedInput
  }

  export type rechazadosUncheckedUpdateInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    id_motivo_rechazo_fk?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rechazadosCreateManyInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    id_motivo_rechazo_fk?: number | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
  }

  export type rechazadosUpdateManyMutationInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rechazadosUncheckedUpdateManyInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    id_motivo_rechazo_fk?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_packingCreateInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
  }

  export type v_cajas_packingUncheckedCreateInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
  }

  export type v_cajas_packingUpdateInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_packingUncheckedUpdateInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_packingCreateManyInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
  }

  export type v_cajas_packingUpdateManyMutationInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_packingUncheckedUpdateManyInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_validadasCreateInput = {
    Especie: string
    Fecha_packing: string
    Folio: string
    Cajas: number
    Camara: string
  }

  export type v_cajas_validadasUncheckedCreateInput = {
    Especie: string
    Fecha_packing: string
    Folio: string
    Cajas: number
    Camara: string
  }

  export type v_cajas_validadasUpdateInput = {
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Camara?: StringFieldUpdateOperationsInput | string
  }

  export type v_cajas_validadasUncheckedUpdateInput = {
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Camara?: StringFieldUpdateOperationsInput | string
  }

  export type v_cajas_validadasCreateManyInput = {
    Especie: string
    Fecha_packing: string
    Folio: string
    Cajas: number
    Camara: string
  }

  export type v_cajas_validadasUpdateManyMutationInput = {
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Camara?: StringFieldUpdateOperationsInput | string
  }

  export type v_cajas_validadasUncheckedUpdateManyInput = {
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Folio?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    Camara?: StringFieldUpdateOperationsInput | string
  }

  export type v_cajas_rechazadasCreateInput = {
    folio_rechazado: string
    especie: string
    Fecha_packing: string
    cajas?: number | null
    camara?: string | null
  }

  export type v_cajas_rechazadasUncheckedCreateInput = {
    folio_rechazado: string
    especie: string
    Fecha_packing: string
    cajas?: number | null
    camara?: string | null
  }

  export type v_cajas_rechazadasUpdateInput = {
    folio_rechazado?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_rechazadasUncheckedUpdateInput = {
    folio_rechazado?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_rechazadasCreateManyInput = {
    folio_rechazado: string
    especie: string
    Fecha_packing: string
    cajas?: number | null
    camara?: string | null
  }

  export type v_cajas_rechazadasUpdateManyMutationInput = {
    folio_rechazado?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_cajas_rechazadasUncheckedUpdateManyInput = {
    folio_rechazado?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type v_informe_diarioCreateInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
    Camara?: string | null
    Estado: string
  }

  export type v_informe_diarioUncheckedCreateInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
    Camara?: string | null
    Estado: string
  }

  export type v_informe_diarioUpdateInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
    Camara?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type v_informe_diarioUncheckedUpdateInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
    Camara?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type v_informe_diarioCreateManyInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
    Cajas: number
    LINEA?: string | null
    Camara?: string | null
    Estado: string
  }

  export type v_informe_diarioUpdateManyMutationInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
    Camara?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type v_informe_diarioUncheckedUpdateManyInput = {
    Folio?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Fecha_packing?: StringFieldUpdateOperationsInput | string
    Cajas?: IntFieldUpdateOperationsInput | number
    LINEA?: NullableStringFieldUpdateOperationsInput | string | null
    Camara?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type validacionesCountOrderByAggregateInput = {
    id?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Especie?: SortOrder
    Estado?: SortOrder
    Camara?: SortOrder
    Usuario?: SortOrder
    Packing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type validacionesAvgOrderByAggregateInput = {
    id?: SortOrder
    Cajas?: SortOrder
  }

  export type validacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Especie?: SortOrder
    Estado?: SortOrder
    Camara?: SortOrder
    Usuario?: SortOrder
    Packing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type validacionesMinOrderByAggregateInput = {
    id?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Especie?: SortOrder
    Estado?: SortOrder
    Camara?: SortOrder
    Usuario?: SortOrder
    Packing?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type validacionesSumOrderByAggregateInput = {
    id?: SortOrder
    Cajas?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RechazadosListRelationFilter = {
    every?: rechazadosWhereInput
    some?: rechazadosWhereInput
    none?: rechazadosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rechazadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dm_motivo_rechazoCountOrderByAggregateInput = {
    id_motivo?: SortOrder
    nombre_motivo?: SortOrder
    estado_motivo?: SortOrder
  }

  export type dm_motivo_rechazoAvgOrderByAggregateInput = {
    id_motivo?: SortOrder
  }

  export type dm_motivo_rechazoMaxOrderByAggregateInput = {
    id_motivo?: SortOrder
    nombre_motivo?: SortOrder
    estado_motivo?: SortOrder
  }

  export type dm_motivo_rechazoMinOrderByAggregateInput = {
    id_motivo?: SortOrder
    nombre_motivo?: SortOrder
    estado_motivo?: SortOrder
  }

  export type dm_motivo_rechazoSumOrderByAggregateInput = {
    id_motivo?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type Dm_motivo_rechazoNullableRelationFilter = {
    is?: dm_motivo_rechazoWhereInput | null
    isNot?: dm_motivo_rechazoWhereInput | null
  }

  export type rechazadosCountOrderByAggregateInput = {
    id_rechazado?: SortOrder
    folio_rechazado?: SortOrder
    id_motivo_rechazo_fk?: SortOrder
    fecha_rechazado?: SortOrder
    usuario?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
    nombre_estado?: SortOrder
    estado?: SortOrder
    packing?: SortOrder
    especie?: SortOrder
  }

  export type rechazadosAvgOrderByAggregateInput = {
    id_rechazado?: SortOrder
    id_motivo_rechazo_fk?: SortOrder
    cajas?: SortOrder
  }

  export type rechazadosMaxOrderByAggregateInput = {
    id_rechazado?: SortOrder
    folio_rechazado?: SortOrder
    id_motivo_rechazo_fk?: SortOrder
    fecha_rechazado?: SortOrder
    usuario?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
    nombre_estado?: SortOrder
    estado?: SortOrder
    packing?: SortOrder
    especie?: SortOrder
  }

  export type rechazadosMinOrderByAggregateInput = {
    id_rechazado?: SortOrder
    folio_rechazado?: SortOrder
    id_motivo_rechazo_fk?: SortOrder
    fecha_rechazado?: SortOrder
    usuario?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
    nombre_estado?: SortOrder
    estado?: SortOrder
    packing?: SortOrder
    especie?: SortOrder
  }

  export type rechazadosSumOrderByAggregateInput = {
    id_rechazado?: SortOrder
    id_motivo_rechazo_fk?: SortOrder
    cajas?: SortOrder
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

  export type v_cajas_packingFolioEspecieFecha_packingCompoundUniqueInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
  }

  export type v_cajas_packingCountOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
  }

  export type v_cajas_packingAvgOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type v_cajas_packingMaxOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
  }

  export type v_cajas_packingMinOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
  }

  export type v_cajas_packingSumOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type v_cajas_validadasFolioEspecieFecha_packingCompoundUniqueInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
  }

  export type v_cajas_validadasCountOrderByAggregateInput = {
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Camara?: SortOrder
  }

  export type v_cajas_validadasAvgOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type v_cajas_validadasMaxOrderByAggregateInput = {
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Camara?: SortOrder
  }

  export type v_cajas_validadasMinOrderByAggregateInput = {
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Folio?: SortOrder
    Cajas?: SortOrder
    Camara?: SortOrder
  }

  export type v_cajas_validadasSumOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type v_cajas_rechazadasFolio_rechazadoEspecieFecha_packingCompoundUniqueInput = {
    folio_rechazado: string
    especie: string
    Fecha_packing: string
  }

  export type v_cajas_rechazadasCountOrderByAggregateInput = {
    folio_rechazado?: SortOrder
    especie?: SortOrder
    Fecha_packing?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
  }

  export type v_cajas_rechazadasAvgOrderByAggregateInput = {
    cajas?: SortOrder
  }

  export type v_cajas_rechazadasMaxOrderByAggregateInput = {
    folio_rechazado?: SortOrder
    especie?: SortOrder
    Fecha_packing?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
  }

  export type v_cajas_rechazadasMinOrderByAggregateInput = {
    folio_rechazado?: SortOrder
    especie?: SortOrder
    Fecha_packing?: SortOrder
    cajas?: SortOrder
    camara?: SortOrder
  }

  export type v_cajas_rechazadasSumOrderByAggregateInput = {
    cajas?: SortOrder
  }

  export type v_informe_diarioFolioEspecieFecha_packingCompoundUniqueInput = {
    Folio: string
    Especie: string
    Fecha_packing: string
  }

  export type v_informe_diarioCountOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
    Camara?: SortOrder
    Estado?: SortOrder
  }

  export type v_informe_diarioAvgOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type v_informe_diarioMaxOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
    Camara?: SortOrder
    Estado?: SortOrder
  }

  export type v_informe_diarioMinOrderByAggregateInput = {
    Folio?: SortOrder
    Especie?: SortOrder
    Fecha_packing?: SortOrder
    Cajas?: SortOrder
    LINEA?: SortOrder
    Camara?: SortOrder
    Estado?: SortOrder
  }

  export type v_informe_diarioSumOrderByAggregateInput = {
    Cajas?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rechazadosCreateNestedManyWithoutDm_motivo_rechazoInput = {
    create?: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput> | rechazadosCreateWithoutDm_motivo_rechazoInput[] | rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput[]
    connectOrCreate?: rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput | rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput[]
    createMany?: rechazadosCreateManyDm_motivo_rechazoInputEnvelope
    connect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
  }

  export type rechazadosUncheckedCreateNestedManyWithoutDm_motivo_rechazoInput = {
    create?: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput> | rechazadosCreateWithoutDm_motivo_rechazoInput[] | rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput[]
    connectOrCreate?: rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput | rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput[]
    createMany?: rechazadosCreateManyDm_motivo_rechazoInputEnvelope
    connect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type rechazadosUpdateManyWithoutDm_motivo_rechazoNestedInput = {
    create?: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput> | rechazadosCreateWithoutDm_motivo_rechazoInput[] | rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput[]
    connectOrCreate?: rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput | rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput[]
    upsert?: rechazadosUpsertWithWhereUniqueWithoutDm_motivo_rechazoInput | rechazadosUpsertWithWhereUniqueWithoutDm_motivo_rechazoInput[]
    createMany?: rechazadosCreateManyDm_motivo_rechazoInputEnvelope
    set?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    disconnect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    delete?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    connect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    update?: rechazadosUpdateWithWhereUniqueWithoutDm_motivo_rechazoInput | rechazadosUpdateWithWhereUniqueWithoutDm_motivo_rechazoInput[]
    updateMany?: rechazadosUpdateManyWithWhereWithoutDm_motivo_rechazoInput | rechazadosUpdateManyWithWhereWithoutDm_motivo_rechazoInput[]
    deleteMany?: rechazadosScalarWhereInput | rechazadosScalarWhereInput[]
  }

  export type rechazadosUncheckedUpdateManyWithoutDm_motivo_rechazoNestedInput = {
    create?: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput> | rechazadosCreateWithoutDm_motivo_rechazoInput[] | rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput[]
    connectOrCreate?: rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput | rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput[]
    upsert?: rechazadosUpsertWithWhereUniqueWithoutDm_motivo_rechazoInput | rechazadosUpsertWithWhereUniqueWithoutDm_motivo_rechazoInput[]
    createMany?: rechazadosCreateManyDm_motivo_rechazoInputEnvelope
    set?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    disconnect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    delete?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    connect?: rechazadosWhereUniqueInput | rechazadosWhereUniqueInput[]
    update?: rechazadosUpdateWithWhereUniqueWithoutDm_motivo_rechazoInput | rechazadosUpdateWithWhereUniqueWithoutDm_motivo_rechazoInput[]
    updateMany?: rechazadosUpdateManyWithWhereWithoutDm_motivo_rechazoInput | rechazadosUpdateManyWithWhereWithoutDm_motivo_rechazoInput[]
    deleteMany?: rechazadosScalarWhereInput | rechazadosScalarWhereInput[]
  }

  export type dm_motivo_rechazoCreateNestedOneWithoutRechazadosInput = {
    create?: XOR<dm_motivo_rechazoCreateWithoutRechazadosInput, dm_motivo_rechazoUncheckedCreateWithoutRechazadosInput>
    connectOrCreate?: dm_motivo_rechazoCreateOrConnectWithoutRechazadosInput
    connect?: dm_motivo_rechazoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dm_motivo_rechazoUpdateOneWithoutRechazadosNestedInput = {
    create?: XOR<dm_motivo_rechazoCreateWithoutRechazadosInput, dm_motivo_rechazoUncheckedCreateWithoutRechazadosInput>
    connectOrCreate?: dm_motivo_rechazoCreateOrConnectWithoutRechazadosInput
    upsert?: dm_motivo_rechazoUpsertWithoutRechazadosInput
    disconnect?: dm_motivo_rechazoWhereInput | boolean
    delete?: dm_motivo_rechazoWhereInput | boolean
    connect?: dm_motivo_rechazoWhereUniqueInput
    update?: XOR<XOR<dm_motivo_rechazoUpdateToOneWithWhereWithoutRechazadosInput, dm_motivo_rechazoUpdateWithoutRechazadosInput>, dm_motivo_rechazoUncheckedUpdateWithoutRechazadosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type rechazadosCreateWithoutDm_motivo_rechazoInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
  }

  export type rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
  }

  export type rechazadosCreateOrConnectWithoutDm_motivo_rechazoInput = {
    where: rechazadosWhereUniqueInput
    create: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput>
  }

  export type rechazadosCreateManyDm_motivo_rechazoInputEnvelope = {
    data: rechazadosCreateManyDm_motivo_rechazoInput | rechazadosCreateManyDm_motivo_rechazoInput[]
  }

  export type rechazadosUpsertWithWhereUniqueWithoutDm_motivo_rechazoInput = {
    where: rechazadosWhereUniqueInput
    update: XOR<rechazadosUpdateWithoutDm_motivo_rechazoInput, rechazadosUncheckedUpdateWithoutDm_motivo_rechazoInput>
    create: XOR<rechazadosCreateWithoutDm_motivo_rechazoInput, rechazadosUncheckedCreateWithoutDm_motivo_rechazoInput>
  }

  export type rechazadosUpdateWithWhereUniqueWithoutDm_motivo_rechazoInput = {
    where: rechazadosWhereUniqueInput
    data: XOR<rechazadosUpdateWithoutDm_motivo_rechazoInput, rechazadosUncheckedUpdateWithoutDm_motivo_rechazoInput>
  }

  export type rechazadosUpdateManyWithWhereWithoutDm_motivo_rechazoInput = {
    where: rechazadosScalarWhereInput
    data: XOR<rechazadosUpdateManyMutationInput, rechazadosUncheckedUpdateManyWithoutDm_motivo_rechazoInput>
  }

  export type rechazadosScalarWhereInput = {
    AND?: rechazadosScalarWhereInput | rechazadosScalarWhereInput[]
    OR?: rechazadosScalarWhereInput[]
    NOT?: rechazadosScalarWhereInput | rechazadosScalarWhereInput[]
    id_rechazado?: IntFilter<"rechazados"> | number
    folio_rechazado?: StringNullableFilter<"rechazados"> | string | null
    id_motivo_rechazo_fk?: IntNullableFilter<"rechazados"> | number | null
    fecha_rechazado?: DateTimeNullableFilter<"rechazados"> | Date | string | null
    usuario?: StringNullableFilter<"rechazados"> | string | null
    cajas?: IntNullableFilter<"rechazados"> | number | null
    camara?: StringNullableFilter<"rechazados"> | string | null
    nombre_estado?: StringNullableFilter<"rechazados"> | string | null
    estado?: BoolNullableFilter<"rechazados"> | boolean | null
    packing?: StringNullableFilter<"rechazados"> | string | null
    especie?: StringNullableFilter<"rechazados"> | string | null
  }

  export type dm_motivo_rechazoCreateWithoutRechazadosInput = {
    nombre_motivo?: string | null
    estado_motivo?: boolean | null
  }

  export type dm_motivo_rechazoUncheckedCreateWithoutRechazadosInput = {
    id_motivo?: number
    nombre_motivo?: string | null
    estado_motivo?: boolean | null
  }

  export type dm_motivo_rechazoCreateOrConnectWithoutRechazadosInput = {
    where: dm_motivo_rechazoWhereUniqueInput
    create: XOR<dm_motivo_rechazoCreateWithoutRechazadosInput, dm_motivo_rechazoUncheckedCreateWithoutRechazadosInput>
  }

  export type dm_motivo_rechazoUpsertWithoutRechazadosInput = {
    update: XOR<dm_motivo_rechazoUpdateWithoutRechazadosInput, dm_motivo_rechazoUncheckedUpdateWithoutRechazadosInput>
    create: XOR<dm_motivo_rechazoCreateWithoutRechazadosInput, dm_motivo_rechazoUncheckedCreateWithoutRechazadosInput>
    where?: dm_motivo_rechazoWhereInput
  }

  export type dm_motivo_rechazoUpdateToOneWithWhereWithoutRechazadosInput = {
    where?: dm_motivo_rechazoWhereInput
    data: XOR<dm_motivo_rechazoUpdateWithoutRechazadosInput, dm_motivo_rechazoUncheckedUpdateWithoutRechazadosInput>
  }

  export type dm_motivo_rechazoUpdateWithoutRechazadosInput = {
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type dm_motivo_rechazoUncheckedUpdateWithoutRechazadosInput = {
    id_motivo?: IntFieldUpdateOperationsInput | number
    nombre_motivo?: NullableStringFieldUpdateOperationsInput | string | null
    estado_motivo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rechazadosCreateManyDm_motivo_rechazoInput = {
    id_rechazado: number
    folio_rechazado?: string | null
    fecha_rechazado?: Date | string | null
    usuario?: string | null
    cajas?: number | null
    camara?: string | null
    nombre_estado?: string | null
    estado?: boolean | null
    packing?: string | null
    especie?: string | null
  }

  export type rechazadosUpdateWithoutDm_motivo_rechazoInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rechazadosUncheckedUpdateWithoutDm_motivo_rechazoInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rechazadosUncheckedUpdateManyWithoutDm_motivo_rechazoInput = {
    id_rechazado?: IntFieldUpdateOperationsInput | number
    folio_rechazado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_rechazado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    cajas?: NullableIntFieldUpdateOperationsInput | number | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_estado?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    packing?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Dm_motivo_rechazoCountOutputTypeDefaultArgs instead
     */
    export type Dm_motivo_rechazoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Dm_motivo_rechazoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use validacionesDefaultArgs instead
     */
    export type validacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = validacionesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dm_motivo_rechazoDefaultArgs instead
     */
    export type dm_motivo_rechazoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dm_motivo_rechazoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rechazadosDefaultArgs instead
     */
    export type rechazadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rechazadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use v_cajas_packingDefaultArgs instead
     */
    export type v_cajas_packingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = v_cajas_packingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use v_cajas_validadasDefaultArgs instead
     */
    export type v_cajas_validadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = v_cajas_validadasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use v_cajas_rechazadasDefaultArgs instead
     */
    export type v_cajas_rechazadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = v_cajas_rechazadasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use v_informe_diarioDefaultArgs instead
     */
    export type v_informe_diarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = v_informe_diarioDefaultArgs<ExtArgs>

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