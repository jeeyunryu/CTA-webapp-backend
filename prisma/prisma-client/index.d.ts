
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model equipment
 * 
 */
export type equipment = $Result.DefaultSelection<Prisma.$equipmentPayload>
/**
 * Model repairment
 * 
 */
export type repairment = $Result.DefaultSelection<Prisma.$repairmentPayload>
/**
 * Model inspection
 * 
 */
export type inspection = $Result.DefaultSelection<Prisma.$inspectionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipment
 * const equipment = await prisma.equipment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipment
   * const equipment = await prisma.equipment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.equipment`: Exposes CRUD operations for the **equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.equipmentDelegate<ExtArgs>;

  /**
   * `prisma.repairment`: Exposes CRUD operations for the **repairment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repairments
    * const repairments = await prisma.repairment.findMany()
    * ```
    */
  get repairment(): Prisma.repairmentDelegate<ExtArgs>;

  /**
   * `prisma.inspection`: Exposes CRUD operations for the **inspection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspections
    * const inspections = await prisma.inspection.findMany()
    * ```
    */
  get inspection(): Prisma.inspectionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
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
    equipment: 'equipment',
    repairment: 'repairment',
    inspection: 'inspection',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'equipment' | 'repairment' | 'inspection' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      equipment: {
        payload: Prisma.$equipmentPayload<ExtArgs>
        fields: Prisma.equipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          findFirst: {
            args: Prisma.equipmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          findMany: {
            args: Prisma.equipmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>[]
          }
          create: {
            args: Prisma.equipmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          createMany: {
            args: Prisma.equipmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.equipmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          update: {
            args: Prisma.equipmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          deleteMany: {
            args: Prisma.equipmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.equipmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.equipmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.equipmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipmentCountArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      repairment: {
        payload: Prisma.$repairmentPayload<ExtArgs>
        fields: Prisma.repairmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repairmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repairmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          findFirst: {
            args: Prisma.repairmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repairmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          findMany: {
            args: Prisma.repairmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>[]
          }
          create: {
            args: Prisma.repairmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          createMany: {
            args: Prisma.repairmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.repairmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          update: {
            args: Prisma.repairmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          deleteMany: {
            args: Prisma.repairmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.repairmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.repairmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repairmentPayload>
          }
          aggregate: {
            args: Prisma.RepairmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRepairment>
          }
          groupBy: {
            args: Prisma.repairmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RepairmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.repairmentCountArgs<ExtArgs>,
            result: $Utils.Optional<RepairmentCountAggregateOutputType> | number
          }
        }
      }
      inspection: {
        payload: Prisma.$inspectionPayload<ExtArgs>
        fields: Prisma.inspectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inspectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inspectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          findFirst: {
            args: Prisma.inspectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inspectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          findMany: {
            args: Prisma.inspectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>[]
          }
          create: {
            args: Prisma.inspectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          createMany: {
            args: Prisma.inspectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inspectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          update: {
            args: Prisma.inspectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          deleteMany: {
            args: Prisma.inspectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inspectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inspectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectionPayload>
          }
          aggregate: {
            args: Prisma.InspectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInspection>
          }
          groupBy: {
            args: Prisma.inspectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InspectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.inspectionCountArgs<ExtArgs>,
            result: $Utils.Optional<InspectionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
   * Model equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    installationDate: Date | null
    location: string | null
    currentState: string | null
    latestInspectionDate: Date | null
    isDefective: boolean | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    installationDate: Date | null
    location: string | null
    currentState: string | null
    latestInspectionDate: Date | null
    isDefective: boolean | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    code: number
    name: number
    installationDate: number
    location: number
    currentState: number
    latestInspectionDate: number
    isDefective: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    installationDate?: true
    location?: true
    currentState?: true
    latestInspectionDate?: true
    isDefective?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    installationDate?: true
    location?: true
    currentState?: true
    latestInspectionDate?: true
    isDefective?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    installationDate?: true
    location?: true
    currentState?: true
    latestInspectionDate?: true
    isDefective?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment to aggregate.
     */
    where?: equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type equipmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: equipmentWhereInput
    orderBy?: equipmentOrderByWithAggregationInput | equipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: equipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    code: string
    name: string
    installationDate: Date
    location: string
    currentState: string | null
    latestInspectionDate: Date | null
    isDefective: boolean | null
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends equipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type equipmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    installationDate?: boolean
    location?: boolean
    currentState?: boolean
    latestInspectionDate?: boolean
    isDefective?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type equipmentSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    installationDate?: boolean
    location?: boolean
    currentState?: boolean
    latestInspectionDate?: boolean
    isDefective?: boolean
  }


  export type $equipmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "equipment"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      code: string
      name: string
      installationDate: Date
      location: string
      currentState: string | null
      latestInspectionDate: Date | null
      isDefective: boolean | null
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }


  type equipmentGetPayload<S extends boolean | null | undefined | equipmentDefaultArgs> = $Result.GetResult<Prisma.$equipmentPayload, S>

  type equipmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<equipmentFindManyArgs, 'select' | 'include'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface equipmentDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipment'], meta: { name: 'equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {equipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends equipmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentFindUniqueArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Equipment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {equipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends equipmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends equipmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindFirstArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends equipmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends equipmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Equipment.
     * @param {equipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
    **/
    create<T extends equipmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentCreateArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Equipment.
     *     @param {equipmentCreateManyArgs} args - Arguments to create many Equipment.
     *     @example
     *     // Create many Equipment
     *     const equipment = await prisma.equipment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends equipmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipment.
     * @param {equipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
    **/
    delete<T extends equipmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentDeleteArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Equipment.
     * @param {equipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends equipmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpdateArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Equipment.
     * @param {equipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends equipmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends equipmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipment.
     * @param {equipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
    **/
    upsert<T extends equipmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpsertArgs<ExtArgs>>
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends equipmentCountArgs>(
      args?: Subset<T, equipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentGroupByArgs} args - Group by arguments.
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
      T extends equipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipmentGroupByArgs['orderBy'] }
        : { orderBy?: equipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, equipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipment model
   */
  readonly fields: equipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the equipment model
   */ 
  interface equipmentFieldRefs {
    readonly id: FieldRef<"equipment", 'Int'>
    readonly code: FieldRef<"equipment", 'String'>
    readonly name: FieldRef<"equipment", 'String'>
    readonly installationDate: FieldRef<"equipment", 'DateTime'>
    readonly location: FieldRef<"equipment", 'String'>
    readonly currentState: FieldRef<"equipment", 'String'>
    readonly latestInspectionDate: FieldRef<"equipment", 'DateTime'>
    readonly isDefective: FieldRef<"equipment", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * equipment findUnique
   */
  export type equipmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter, which equipment to fetch.
     */
    where: equipmentWhereUniqueInput
  }


  /**
   * equipment findUniqueOrThrow
   */
  export type equipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter, which equipment to fetch.
     */
    where: equipmentWhereUniqueInput
  }


  /**
   * equipment findFirst
   */
  export type equipmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipment.
     */
    cursor?: equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * equipment findFirstOrThrow
   */
  export type equipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipment.
     */
    cursor?: equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * equipment findMany
   */
  export type equipmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipment.
     */
    cursor?: equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * equipment create
   */
  export type equipmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * The data needed to create a equipment.
     */
    data: XOR<equipmentCreateInput, equipmentUncheckedCreateInput>
  }


  /**
   * equipment createMany
   */
  export type equipmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipment.
     */
    data: equipmentCreateManyInput | equipmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * equipment update
   */
  export type equipmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * The data needed to update a equipment.
     */
    data: XOR<equipmentUpdateInput, equipmentUncheckedUpdateInput>
    /**
     * Choose, which equipment to update.
     */
    where: equipmentWhereUniqueInput
  }


  /**
   * equipment updateMany
   */
  export type equipmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipment.
     */
    data: XOR<equipmentUpdateManyMutationInput, equipmentUncheckedUpdateManyInput>
    /**
     * Filter which equipment to update
     */
    where?: equipmentWhereInput
  }


  /**
   * equipment upsert
   */
  export type equipmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * The filter to search for the equipment to update in case it exists.
     */
    where: equipmentWhereUniqueInput
    /**
     * In case the equipment found by the `where` argument doesn't exist, create a new equipment with this data.
     */
    create: XOR<equipmentCreateInput, equipmentUncheckedCreateInput>
    /**
     * In case the equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipmentUpdateInput, equipmentUncheckedUpdateInput>
  }


  /**
   * equipment delete
   */
  export type equipmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
    /**
     * Filter which equipment to delete.
     */
    where: equipmentWhereUniqueInput
  }


  /**
   * equipment deleteMany
   */
  export type equipmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment to delete
     */
    where?: equipmentWhereInput
  }


  /**
   * equipment without action
   */
  export type equipmentDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null
  }



  /**
   * Model repairment
   */

  export type AggregateRepairment = {
    _count: RepairmentCountAggregateOutputType | null
    _avg: RepairmentAvgAggregateOutputType | null
    _sum: RepairmentSumAggregateOutputType | null
    _min: RepairmentMinAggregateOutputType | null
    _max: RepairmentMaxAggregateOutputType | null
  }

  export type RepairmentAvgAggregateOutputType = {
    id: number | null
  }

  export type RepairmentSumAggregateOutputType = {
    id: number | null
  }

  export type RepairmentMinAggregateOutputType = {
    id: number | null
    code: string | null
    repairmentDate: Date | null
    repairmentNote: string | null
    repairmentPhoto: Buffer | null
    repairerInCharge: string | null
  }

  export type RepairmentMaxAggregateOutputType = {
    id: number | null
    code: string | null
    repairmentDate: Date | null
    repairmentNote: string | null
    repairmentPhoto: Buffer | null
    repairerInCharge: string | null
  }

  export type RepairmentCountAggregateOutputType = {
    id: number
    code: number
    repairmentDate: number
    repairmentNote: number
    repairmentPhoto: number
    repairerInCharge: number
    _all: number
  }


  export type RepairmentAvgAggregateInputType = {
    id?: true
  }

  export type RepairmentSumAggregateInputType = {
    id?: true
  }

  export type RepairmentMinAggregateInputType = {
    id?: true
    code?: true
    repairmentDate?: true
    repairmentNote?: true
    repairmentPhoto?: true
    repairerInCharge?: true
  }

  export type RepairmentMaxAggregateInputType = {
    id?: true
    code?: true
    repairmentDate?: true
    repairmentNote?: true
    repairmentPhoto?: true
    repairerInCharge?: true
  }

  export type RepairmentCountAggregateInputType = {
    id?: true
    code?: true
    repairmentDate?: true
    repairmentNote?: true
    repairmentPhoto?: true
    repairerInCharge?: true
    _all?: true
  }

  export type RepairmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which repairment to aggregate.
     */
    where?: repairmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairments to fetch.
     */
    orderBy?: repairmentOrderByWithRelationInput | repairmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repairmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repairments
    **/
    _count?: true | RepairmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairmentMaxAggregateInputType
  }

  export type GetRepairmentAggregateType<T extends RepairmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairment[P]>
      : GetScalarType<T[P], AggregateRepairment[P]>
  }




  export type repairmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: repairmentWhereInput
    orderBy?: repairmentOrderByWithAggregationInput | repairmentOrderByWithAggregationInput[]
    by: RepairmentScalarFieldEnum[] | RepairmentScalarFieldEnum
    having?: repairmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairmentCountAggregateInputType | true
    _avg?: RepairmentAvgAggregateInputType
    _sum?: RepairmentSumAggregateInputType
    _min?: RepairmentMinAggregateInputType
    _max?: RepairmentMaxAggregateInputType
  }

  export type RepairmentGroupByOutputType = {
    id: number
    code: string
    repairmentDate: Date
    repairmentNote: string | null
    repairmentPhoto: Buffer
    repairerInCharge: string
    _count: RepairmentCountAggregateOutputType | null
    _avg: RepairmentAvgAggregateOutputType | null
    _sum: RepairmentSumAggregateOutputType | null
    _min: RepairmentMinAggregateOutputType | null
    _max: RepairmentMaxAggregateOutputType | null
  }

  type GetRepairmentGroupByPayload<T extends repairmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairmentGroupByOutputType[P]>
            : GetScalarType<T[P], RepairmentGroupByOutputType[P]>
        }
      >
    >


  export type repairmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    repairmentDate?: boolean
    repairmentNote?: boolean
    repairmentPhoto?: boolean
    repairerInCharge?: boolean
  }, ExtArgs["result"]["repairment"]>

  export type repairmentSelectScalar = {
    id?: boolean
    code?: boolean
    repairmentDate?: boolean
    repairmentNote?: boolean
    repairmentPhoto?: boolean
    repairerInCharge?: boolean
  }


  export type $repairmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "repairment"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      code: string
      repairmentDate: Date
      repairmentNote: string | null
      repairmentPhoto: Buffer
      repairerInCharge: string
    }, ExtArgs["result"]["repairment"]>
    composites: {}
  }


  type repairmentGetPayload<S extends boolean | null | undefined | repairmentDefaultArgs> = $Result.GetResult<Prisma.$repairmentPayload, S>

  type repairmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<repairmentFindManyArgs, 'select' | 'include'> & {
      select?: RepairmentCountAggregateInputType | true
    }

  export interface repairmentDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repairment'], meta: { name: 'repairment' } }
    /**
     * Find zero or one Repairment that matches the filter.
     * @param {repairmentFindUniqueArgs} args - Arguments to find a Repairment
     * @example
     * // Get one Repairment
     * const repairment = await prisma.repairment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends repairmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentFindUniqueArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Repairment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {repairmentFindUniqueOrThrowArgs} args - Arguments to find a Repairment
     * @example
     * // Get one Repairment
     * const repairment = await prisma.repairment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends repairmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Repairment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentFindFirstArgs} args - Arguments to find a Repairment
     * @example
     * // Get one Repairment
     * const repairment = await prisma.repairment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends repairmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentFindFirstArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Repairment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentFindFirstOrThrowArgs} args - Arguments to find a Repairment
     * @example
     * // Get one Repairment
     * const repairment = await prisma.repairment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends repairmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Repairments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repairments
     * const repairments = await prisma.repairment.findMany()
     * 
     * // Get first 10 Repairments
     * const repairments = await prisma.repairment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairmentWithIdOnly = await prisma.repairment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends repairmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Repairment.
     * @param {repairmentCreateArgs} args - Arguments to create a Repairment.
     * @example
     * // Create one Repairment
     * const Repairment = await prisma.repairment.create({
     *   data: {
     *     // ... data to create a Repairment
     *   }
     * })
     * 
    **/
    create<T extends repairmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentCreateArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Repairments.
     *     @param {repairmentCreateManyArgs} args - Arguments to create many Repairments.
     *     @example
     *     // Create many Repairments
     *     const repairment = await prisma.repairment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends repairmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Repairment.
     * @param {repairmentDeleteArgs} args - Arguments to delete one Repairment.
     * @example
     * // Delete one Repairment
     * const Repairment = await prisma.repairment.delete({
     *   where: {
     *     // ... filter to delete one Repairment
     *   }
     * })
     * 
    **/
    delete<T extends repairmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentDeleteArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Repairment.
     * @param {repairmentUpdateArgs} args - Arguments to update one Repairment.
     * @example
     * // Update one Repairment
     * const repairment = await prisma.repairment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends repairmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentUpdateArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Repairments.
     * @param {repairmentDeleteManyArgs} args - Arguments to filter Repairments to delete.
     * @example
     * // Delete a few Repairments
     * const { count } = await prisma.repairment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends repairmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repairmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repairments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repairments
     * const repairment = await prisma.repairment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends repairmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repairment.
     * @param {repairmentUpsertArgs} args - Arguments to update or create a Repairment.
     * @example
     * // Update or create a Repairment
     * const repairment = await prisma.repairment.upsert({
     *   create: {
     *     // ... data to create a Repairment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repairment we want to update
     *   }
     * })
    **/
    upsert<T extends repairmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, repairmentUpsertArgs<ExtArgs>>
    ): Prisma__repairmentClient<$Result.GetResult<Prisma.$repairmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Repairments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentCountArgs} args - Arguments to filter Repairments to count.
     * @example
     * // Count the number of Repairments
     * const count = await prisma.repairment.count({
     *   where: {
     *     // ... the filter for the Repairments we want to count
     *   }
     * })
    **/
    count<T extends repairmentCountArgs>(
      args?: Subset<T, repairmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repairment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepairmentAggregateArgs>(args: Subset<T, RepairmentAggregateArgs>): Prisma.PrismaPromise<GetRepairmentAggregateType<T>>

    /**
     * Group by Repairment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repairmentGroupByArgs} args - Group by arguments.
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
      T extends repairmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repairmentGroupByArgs['orderBy'] }
        : { orderBy?: repairmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, repairmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repairment model
   */
  readonly fields: repairmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repairment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repairmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the repairment model
   */ 
  interface repairmentFieldRefs {
    readonly id: FieldRef<"repairment", 'Int'>
    readonly code: FieldRef<"repairment", 'String'>
    readonly repairmentDate: FieldRef<"repairment", 'DateTime'>
    readonly repairmentNote: FieldRef<"repairment", 'String'>
    readonly repairmentPhoto: FieldRef<"repairment", 'Bytes'>
    readonly repairerInCharge: FieldRef<"repairment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * repairment findUnique
   */
  export type repairmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter, which repairment to fetch.
     */
    where: repairmentWhereUniqueInput
  }


  /**
   * repairment findUniqueOrThrow
   */
  export type repairmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter, which repairment to fetch.
     */
    where: repairmentWhereUniqueInput
  }


  /**
   * repairment findFirst
   */
  export type repairmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter, which repairment to fetch.
     */
    where?: repairmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairments to fetch.
     */
    orderBy?: repairmentOrderByWithRelationInput | repairmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repairments.
     */
    cursor?: repairmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repairments.
     */
    distinct?: RepairmentScalarFieldEnum | RepairmentScalarFieldEnum[]
  }


  /**
   * repairment findFirstOrThrow
   */
  export type repairmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter, which repairment to fetch.
     */
    where?: repairmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairments to fetch.
     */
    orderBy?: repairmentOrderByWithRelationInput | repairmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repairments.
     */
    cursor?: repairmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repairments.
     */
    distinct?: RepairmentScalarFieldEnum | RepairmentScalarFieldEnum[]
  }


  /**
   * repairment findMany
   */
  export type repairmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter, which repairments to fetch.
     */
    where?: repairmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repairments to fetch.
     */
    orderBy?: repairmentOrderByWithRelationInput | repairmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repairments.
     */
    cursor?: repairmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repairments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repairments.
     */
    skip?: number
    distinct?: RepairmentScalarFieldEnum | RepairmentScalarFieldEnum[]
  }


  /**
   * repairment create
   */
  export type repairmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * The data needed to create a repairment.
     */
    data: XOR<repairmentCreateInput, repairmentUncheckedCreateInput>
  }


  /**
   * repairment createMany
   */
  export type repairmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repairments.
     */
    data: repairmentCreateManyInput | repairmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * repairment update
   */
  export type repairmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * The data needed to update a repairment.
     */
    data: XOR<repairmentUpdateInput, repairmentUncheckedUpdateInput>
    /**
     * Choose, which repairment to update.
     */
    where: repairmentWhereUniqueInput
  }


  /**
   * repairment updateMany
   */
  export type repairmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repairments.
     */
    data: XOR<repairmentUpdateManyMutationInput, repairmentUncheckedUpdateManyInput>
    /**
     * Filter which repairments to update
     */
    where?: repairmentWhereInput
  }


  /**
   * repairment upsert
   */
  export type repairmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * The filter to search for the repairment to update in case it exists.
     */
    where: repairmentWhereUniqueInput
    /**
     * In case the repairment found by the `where` argument doesn't exist, create a new repairment with this data.
     */
    create: XOR<repairmentCreateInput, repairmentUncheckedCreateInput>
    /**
     * In case the repairment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repairmentUpdateInput, repairmentUncheckedUpdateInput>
  }


  /**
   * repairment delete
   */
  export type repairmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
    /**
     * Filter which repairment to delete.
     */
    where: repairmentWhereUniqueInput
  }


  /**
   * repairment deleteMany
   */
  export type repairmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which repairments to delete
     */
    where?: repairmentWhereInput
  }


  /**
   * repairment without action
   */
  export type repairmentDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repairment
     */
    select?: repairmentSelect<ExtArgs> | null
  }



  /**
   * Model inspection
   */

  export type AggregateInspection = {
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  export type InspectionAvgAggregateOutputType = {
    id: number | null
  }

  export type InspectionSumAggregateOutputType = {
    id: number | null
  }

  export type InspectionMinAggregateOutputType = {
    id: number | null
    code: string | null
    inspectionDateTime: Date | null
    color: string | null
    state: string | null
  }

  export type InspectionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    inspectionDateTime: Date | null
    color: string | null
    state: string | null
  }

  export type InspectionCountAggregateOutputType = {
    id: number
    code: number
    inspectionDateTime: number
    color: number
    state: number
    _all: number
  }


  export type InspectionAvgAggregateInputType = {
    id?: true
  }

  export type InspectionSumAggregateInputType = {
    id?: true
  }

  export type InspectionMinAggregateInputType = {
    id?: true
    code?: true
    inspectionDateTime?: true
    color?: true
    state?: true
  }

  export type InspectionMaxAggregateInputType = {
    id?: true
    code?: true
    inspectionDateTime?: true
    color?: true
    state?: true
  }

  export type InspectionCountAggregateInputType = {
    id?: true
    code?: true
    inspectionDateTime?: true
    color?: true
    state?: true
    _all?: true
  }

  export type InspectionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspection to aggregate.
     */
    where?: inspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspections to fetch.
     */
    orderBy?: inspectionOrderByWithRelationInput | inspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inspections
    **/
    _count?: true | InspectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionMaxAggregateInputType
  }

  export type GetInspectionAggregateType<T extends InspectionAggregateArgs> = {
        [P in keyof T & keyof AggregateInspection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspection[P]>
      : GetScalarType<T[P], AggregateInspection[P]>
  }




  export type inspectionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: inspectionWhereInput
    orderBy?: inspectionOrderByWithAggregationInput | inspectionOrderByWithAggregationInput[]
    by: InspectionScalarFieldEnum[] | InspectionScalarFieldEnum
    having?: inspectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionCountAggregateInputType | true
    _avg?: InspectionAvgAggregateInputType
    _sum?: InspectionSumAggregateInputType
    _min?: InspectionMinAggregateInputType
    _max?: InspectionMaxAggregateInputType
  }

  export type InspectionGroupByOutputType = {
    id: number
    code: string
    inspectionDateTime: Date | null
    color: string | null
    state: string | null
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  type GetInspectionGroupByPayload<T extends inspectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionGroupByOutputType[P]>
        }
      >
    >


  export type inspectionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    inspectionDateTime?: boolean
    color?: boolean
    state?: boolean
  }, ExtArgs["result"]["inspection"]>

  export type inspectionSelectScalar = {
    id?: boolean
    code?: boolean
    inspectionDateTime?: boolean
    color?: boolean
    state?: boolean
  }


  export type $inspectionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "inspection"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      code: string
      inspectionDateTime: Date | null
      color: string | null
      state: string | null
    }, ExtArgs["result"]["inspection"]>
    composites: {}
  }


  type inspectionGetPayload<S extends boolean | null | undefined | inspectionDefaultArgs> = $Result.GetResult<Prisma.$inspectionPayload, S>

  type inspectionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<inspectionFindManyArgs, 'select' | 'include'> & {
      select?: InspectionCountAggregateInputType | true
    }

  export interface inspectionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inspection'], meta: { name: 'inspection' } }
    /**
     * Find zero or one Inspection that matches the filter.
     * @param {inspectionFindUniqueArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inspectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionFindUniqueArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inspection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inspectionFindUniqueOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inspectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inspection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionFindFirstArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inspectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionFindFirstArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inspection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionFindFirstOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inspectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inspections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspections
     * const inspections = await prisma.inspection.findMany()
     * 
     * // Get first 10 Inspections
     * const inspections = await prisma.inspection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionWithIdOnly = await prisma.inspection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inspectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inspection.
     * @param {inspectionCreateArgs} args - Arguments to create a Inspection.
     * @example
     * // Create one Inspection
     * const Inspection = await prisma.inspection.create({
     *   data: {
     *     // ... data to create a Inspection
     *   }
     * })
     * 
    **/
    create<T extends inspectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionCreateArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inspections.
     *     @param {inspectionCreateManyArgs} args - Arguments to create many Inspections.
     *     @example
     *     // Create many Inspections
     *     const inspection = await prisma.inspection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inspectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inspection.
     * @param {inspectionDeleteArgs} args - Arguments to delete one Inspection.
     * @example
     * // Delete one Inspection
     * const Inspection = await prisma.inspection.delete({
     *   where: {
     *     // ... filter to delete one Inspection
     *   }
     * })
     * 
    **/
    delete<T extends inspectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionDeleteArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inspection.
     * @param {inspectionUpdateArgs} args - Arguments to update one Inspection.
     * @example
     * // Update one Inspection
     * const inspection = await prisma.inspection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inspectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionUpdateArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inspections.
     * @param {inspectionDeleteManyArgs} args - Arguments to filter Inspections to delete.
     * @example
     * // Delete a few Inspections
     * const { count } = await prisma.inspection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inspectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspections
     * const inspection = await prisma.inspection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inspectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inspection.
     * @param {inspectionUpsertArgs} args - Arguments to update or create a Inspection.
     * @example
     * // Update or create a Inspection
     * const inspection = await prisma.inspection.upsert({
     *   create: {
     *     // ... data to create a Inspection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspection we want to update
     *   }
     * })
    **/
    upsert<T extends inspectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inspectionUpsertArgs<ExtArgs>>
    ): Prisma__inspectionClient<$Result.GetResult<Prisma.$inspectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionCountArgs} args - Arguments to filter Inspections to count.
     * @example
     * // Count the number of Inspections
     * const count = await prisma.inspection.count({
     *   where: {
     *     // ... the filter for the Inspections we want to count
     *   }
     * })
    **/
    count<T extends inspectionCountArgs>(
      args?: Subset<T, inspectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InspectionAggregateArgs>(args: Subset<T, InspectionAggregateArgs>): Prisma.PrismaPromise<GetInspectionAggregateType<T>>

    /**
     * Group by Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectionGroupByArgs} args - Group by arguments.
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
      T extends inspectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inspectionGroupByArgs['orderBy'] }
        : { orderBy?: inspectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inspectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inspection model
   */
  readonly fields: inspectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inspection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inspectionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inspection model
   */ 
  interface inspectionFieldRefs {
    readonly id: FieldRef<"inspection", 'Int'>
    readonly code: FieldRef<"inspection", 'String'>
    readonly inspectionDateTime: FieldRef<"inspection", 'DateTime'>
    readonly color: FieldRef<"inspection", 'String'>
    readonly state: FieldRef<"inspection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * inspection findUnique
   */
  export type inspectionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter, which inspection to fetch.
     */
    where: inspectionWhereUniqueInput
  }


  /**
   * inspection findUniqueOrThrow
   */
  export type inspectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter, which inspection to fetch.
     */
    where: inspectionWhereUniqueInput
  }


  /**
   * inspection findFirst
   */
  export type inspectionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter, which inspection to fetch.
     */
    where?: inspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspections to fetch.
     */
    orderBy?: inspectionOrderByWithRelationInput | inspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspections.
     */
    cursor?: inspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }


  /**
   * inspection findFirstOrThrow
   */
  export type inspectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter, which inspection to fetch.
     */
    where?: inspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspections to fetch.
     */
    orderBy?: inspectionOrderByWithRelationInput | inspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspections.
     */
    cursor?: inspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }


  /**
   * inspection findMany
   */
  export type inspectionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter, which inspections to fetch.
     */
    where?: inspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspections to fetch.
     */
    orderBy?: inspectionOrderByWithRelationInput | inspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inspections.
     */
    cursor?: inspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspections.
     */
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }


  /**
   * inspection create
   */
  export type inspectionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * The data needed to create a inspection.
     */
    data: XOR<inspectionCreateInput, inspectionUncheckedCreateInput>
  }


  /**
   * inspection createMany
   */
  export type inspectionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inspections.
     */
    data: inspectionCreateManyInput | inspectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * inspection update
   */
  export type inspectionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * The data needed to update a inspection.
     */
    data: XOR<inspectionUpdateInput, inspectionUncheckedUpdateInput>
    /**
     * Choose, which inspection to update.
     */
    where: inspectionWhereUniqueInput
  }


  /**
   * inspection updateMany
   */
  export type inspectionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inspections.
     */
    data: XOR<inspectionUpdateManyMutationInput, inspectionUncheckedUpdateManyInput>
    /**
     * Filter which inspections to update
     */
    where?: inspectionWhereInput
  }


  /**
   * inspection upsert
   */
  export type inspectionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * The filter to search for the inspection to update in case it exists.
     */
    where: inspectionWhereUniqueInput
    /**
     * In case the inspection found by the `where` argument doesn't exist, create a new inspection with this data.
     */
    create: XOR<inspectionCreateInput, inspectionUncheckedCreateInput>
    /**
     * In case the inspection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inspectionUpdateInput, inspectionUncheckedUpdateInput>
  }


  /**
   * inspection delete
   */
  export type inspectionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
    /**
     * Filter which inspection to delete.
     */
    where: inspectionWhereUniqueInput
  }


  /**
   * inspection deleteMany
   */
  export type inspectionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspections to delete
     */
    where?: inspectionWhereInput
  }


  /**
   * inspection without action
   */
  export type inspectionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection
     */
    select?: inspectionSelect<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    isAdmin?: boolean
  }


  export type $userPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      username: string
      password: string
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly isAdmin: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
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


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    installationDate: 'installationDate',
    location: 'location',
    currentState: 'currentState',
    latestInspectionDate: 'latestInspectionDate',
    isDefective: 'isDefective'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const RepairmentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    repairmentDate: 'repairmentDate',
    repairmentNote: 'repairmentNote',
    repairmentPhoto: 'repairmentPhoto',
    repairerInCharge: 'repairerInCharge'
  };

  export type RepairmentScalarFieldEnum = (typeof RepairmentScalarFieldEnum)[keyof typeof RepairmentScalarFieldEnum]


  export const InspectionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    inspectionDateTime: 'inspectionDateTime',
    color: 'color',
    state: 'state'
  };

  export type InspectionScalarFieldEnum = (typeof InspectionScalarFieldEnum)[keyof typeof InspectionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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


  export type equipmentWhereInput = {
    AND?: equipmentWhereInput | equipmentWhereInput[]
    OR?: equipmentWhereInput[]
    NOT?: equipmentWhereInput | equipmentWhereInput[]
    id?: IntFilter<"equipment"> | number
    code?: StringFilter<"equipment"> | string
    name?: StringFilter<"equipment"> | string
    installationDate?: DateTimeFilter<"equipment"> | Date | string
    location?: StringFilter<"equipment"> | string
    currentState?: StringNullableFilter<"equipment"> | string | null
    latestInspectionDate?: DateTimeNullableFilter<"equipment"> | Date | string | null
    isDefective?: BoolNullableFilter<"equipment"> | boolean | null
  }

  export type equipmentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    installationDate?: SortOrder
    location?: SortOrder
    currentState?: SortOrderInput | SortOrder
    latestInspectionDate?: SortOrderInput | SortOrder
    isDefective?: SortOrderInput | SortOrder
  }

  export type equipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: equipmentWhereInput | equipmentWhereInput[]
    OR?: equipmentWhereInput[]
    NOT?: equipmentWhereInput | equipmentWhereInput[]
    code?: StringFilter<"equipment"> | string
    name?: StringFilter<"equipment"> | string
    installationDate?: DateTimeFilter<"equipment"> | Date | string
    location?: StringFilter<"equipment"> | string
    currentState?: StringNullableFilter<"equipment"> | string | null
    latestInspectionDate?: DateTimeNullableFilter<"equipment"> | Date | string | null
    isDefective?: BoolNullableFilter<"equipment"> | boolean | null
  }, "id">

  export type equipmentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    installationDate?: SortOrder
    location?: SortOrder
    currentState?: SortOrderInput | SortOrder
    latestInspectionDate?: SortOrderInput | SortOrder
    isDefective?: SortOrderInput | SortOrder
    _count?: equipmentCountOrderByAggregateInput
    _avg?: equipmentAvgOrderByAggregateInput
    _max?: equipmentMaxOrderByAggregateInput
    _min?: equipmentMinOrderByAggregateInput
    _sum?: equipmentSumOrderByAggregateInput
  }

  export type equipmentScalarWhereWithAggregatesInput = {
    AND?: equipmentScalarWhereWithAggregatesInput | equipmentScalarWhereWithAggregatesInput[]
    OR?: equipmentScalarWhereWithAggregatesInput[]
    NOT?: equipmentScalarWhereWithAggregatesInput | equipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"equipment"> | number
    code?: StringWithAggregatesFilter<"equipment"> | string
    name?: StringWithAggregatesFilter<"equipment"> | string
    installationDate?: DateTimeWithAggregatesFilter<"equipment"> | Date | string
    location?: StringWithAggregatesFilter<"equipment"> | string
    currentState?: StringNullableWithAggregatesFilter<"equipment"> | string | null
    latestInspectionDate?: DateTimeNullableWithAggregatesFilter<"equipment"> | Date | string | null
    isDefective?: BoolNullableWithAggregatesFilter<"equipment"> | boolean | null
  }

  export type repairmentWhereInput = {
    AND?: repairmentWhereInput | repairmentWhereInput[]
    OR?: repairmentWhereInput[]
    NOT?: repairmentWhereInput | repairmentWhereInput[]
    id?: IntFilter<"repairment"> | number
    code?: StringFilter<"repairment"> | string
    repairmentDate?: DateTimeFilter<"repairment"> | Date | string
    repairmentNote?: StringNullableFilter<"repairment"> | string | null
    repairmentPhoto?: BytesFilter<"repairment"> | Buffer
    repairerInCharge?: StringFilter<"repairment"> | string
  }

  export type repairmentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    repairmentDate?: SortOrder
    repairmentNote?: SortOrderInput | SortOrder
    repairmentPhoto?: SortOrder
    repairerInCharge?: SortOrder
  }

  export type repairmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: repairmentWhereInput | repairmentWhereInput[]
    OR?: repairmentWhereInput[]
    NOT?: repairmentWhereInput | repairmentWhereInput[]
    code?: StringFilter<"repairment"> | string
    repairmentDate?: DateTimeFilter<"repairment"> | Date | string
    repairmentNote?: StringNullableFilter<"repairment"> | string | null
    repairmentPhoto?: BytesFilter<"repairment"> | Buffer
    repairerInCharge?: StringFilter<"repairment"> | string
  }, "id">

  export type repairmentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    repairmentDate?: SortOrder
    repairmentNote?: SortOrderInput | SortOrder
    repairmentPhoto?: SortOrder
    repairerInCharge?: SortOrder
    _count?: repairmentCountOrderByAggregateInput
    _avg?: repairmentAvgOrderByAggregateInput
    _max?: repairmentMaxOrderByAggregateInput
    _min?: repairmentMinOrderByAggregateInput
    _sum?: repairmentSumOrderByAggregateInput
  }

  export type repairmentScalarWhereWithAggregatesInput = {
    AND?: repairmentScalarWhereWithAggregatesInput | repairmentScalarWhereWithAggregatesInput[]
    OR?: repairmentScalarWhereWithAggregatesInput[]
    NOT?: repairmentScalarWhereWithAggregatesInput | repairmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"repairment"> | number
    code?: StringWithAggregatesFilter<"repairment"> | string
    repairmentDate?: DateTimeWithAggregatesFilter<"repairment"> | Date | string
    repairmentNote?: StringNullableWithAggregatesFilter<"repairment"> | string | null
    repairmentPhoto?: BytesWithAggregatesFilter<"repairment"> | Buffer
    repairerInCharge?: StringWithAggregatesFilter<"repairment"> | string
  }

  export type inspectionWhereInput = {
    AND?: inspectionWhereInput | inspectionWhereInput[]
    OR?: inspectionWhereInput[]
    NOT?: inspectionWhereInput | inspectionWhereInput[]
    id?: IntFilter<"inspection"> | number
    code?: StringFilter<"inspection"> | string
    inspectionDateTime?: DateTimeNullableFilter<"inspection"> | Date | string | null
    color?: StringNullableFilter<"inspection"> | string | null
    state?: StringNullableFilter<"inspection"> | string | null
  }

  export type inspectionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    inspectionDateTime?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
  }

  export type inspectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inspectionWhereInput | inspectionWhereInput[]
    OR?: inspectionWhereInput[]
    NOT?: inspectionWhereInput | inspectionWhereInput[]
    code?: StringFilter<"inspection"> | string
    inspectionDateTime?: DateTimeNullableFilter<"inspection"> | Date | string | null
    color?: StringNullableFilter<"inspection"> | string | null
    state?: StringNullableFilter<"inspection"> | string | null
  }, "id">

  export type inspectionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    inspectionDateTime?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    _count?: inspectionCountOrderByAggregateInput
    _avg?: inspectionAvgOrderByAggregateInput
    _max?: inspectionMaxOrderByAggregateInput
    _min?: inspectionMinOrderByAggregateInput
    _sum?: inspectionSumOrderByAggregateInput
  }

  export type inspectionScalarWhereWithAggregatesInput = {
    AND?: inspectionScalarWhereWithAggregatesInput | inspectionScalarWhereWithAggregatesInput[]
    OR?: inspectionScalarWhereWithAggregatesInput[]
    NOT?: inspectionScalarWhereWithAggregatesInput | inspectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inspection"> | number
    code?: StringWithAggregatesFilter<"inspection"> | string
    inspectionDateTime?: DateTimeNullableWithAggregatesFilter<"inspection"> | Date | string | null
    color?: StringNullableWithAggregatesFilter<"inspection"> | string | null
    state?: StringNullableWithAggregatesFilter<"inspection"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    isAdmin?: BoolFilter<"user"> | boolean
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    isAdmin?: BoolFilter<"user"> | boolean
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    isAdmin?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type equipmentCreateInput = {
    code: string
    name: string
    installationDate: Date | string
    location: string
    currentState?: string | null
    latestInspectionDate?: Date | string | null
    isDefective?: boolean | null
  }

  export type equipmentUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    installationDate: Date | string
    location: string
    currentState?: string | null
    latestInspectionDate?: Date | string | null
    isDefective?: boolean | null
  }

  export type equipmentUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    installationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    latestInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDefective?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type equipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    installationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    latestInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDefective?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type equipmentCreateManyInput = {
    id?: number
    code: string
    name: string
    installationDate: Date | string
    location: string
    currentState?: string | null
    latestInspectionDate?: Date | string | null
    isDefective?: boolean | null
  }

  export type equipmentUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    installationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    latestInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDefective?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type equipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    installationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    currentState?: NullableStringFieldUpdateOperationsInput | string | null
    latestInspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDefective?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type repairmentCreateInput = {
    code: string
    repairmentDate: Date | string
    repairmentNote?: string | null
    repairmentPhoto: Buffer
    repairerInCharge: string
  }

  export type repairmentUncheckedCreateInput = {
    id?: number
    code: string
    repairmentDate: Date | string
    repairmentNote?: string | null
    repairmentPhoto: Buffer
    repairerInCharge: string
  }

  export type repairmentUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    repairmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repairmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    repairmentPhoto?: BytesFieldUpdateOperationsInput | Buffer
    repairerInCharge?: StringFieldUpdateOperationsInput | string
  }

  export type repairmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    repairmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repairmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    repairmentPhoto?: BytesFieldUpdateOperationsInput | Buffer
    repairerInCharge?: StringFieldUpdateOperationsInput | string
  }

  export type repairmentCreateManyInput = {
    id?: number
    code: string
    repairmentDate: Date | string
    repairmentNote?: string | null
    repairmentPhoto: Buffer
    repairerInCharge: string
  }

  export type repairmentUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    repairmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repairmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    repairmentPhoto?: BytesFieldUpdateOperationsInput | Buffer
    repairerInCharge?: StringFieldUpdateOperationsInput | string
  }

  export type repairmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    repairmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repairmentNote?: NullableStringFieldUpdateOperationsInput | string | null
    repairmentPhoto?: BytesFieldUpdateOperationsInput | Buffer
    repairerInCharge?: StringFieldUpdateOperationsInput | string
  }

  export type inspectionCreateInput = {
    code: string
    inspectionDateTime?: Date | string | null
    color?: string | null
    state?: string | null
  }

  export type inspectionUncheckedCreateInput = {
    id?: number
    code: string
    inspectionDateTime?: Date | string | null
    color?: string | null
    state?: string | null
  }

  export type inspectionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    inspectionDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inspectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    inspectionDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inspectionCreateManyInput = {
    id?: number
    code: string
    inspectionDateTime?: Date | string | null
    color?: string | null
    state?: string | null
  }

  export type inspectionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    inspectionDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inspectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    inspectionDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    username: string
    password: string
    isAdmin?: boolean
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    isAdmin?: boolean
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    password: string
    isAdmin?: boolean
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type equipmentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    installationDate?: SortOrder
    location?: SortOrder
    currentState?: SortOrder
    latestInspectionDate?: SortOrder
    isDefective?: SortOrder
  }

  export type equipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type equipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    installationDate?: SortOrder
    location?: SortOrder
    currentState?: SortOrder
    latestInspectionDate?: SortOrder
    isDefective?: SortOrder
  }

  export type equipmentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    installationDate?: SortOrder
    location?: SortOrder
    currentState?: SortOrder
    latestInspectionDate?: SortOrder
    isDefective?: SortOrder
  }

  export type equipmentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type repairmentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    repairmentDate?: SortOrder
    repairmentNote?: SortOrder
    repairmentPhoto?: SortOrder
    repairerInCharge?: SortOrder
  }

  export type repairmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type repairmentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    repairmentDate?: SortOrder
    repairmentNote?: SortOrder
    repairmentPhoto?: SortOrder
    repairerInCharge?: SortOrder
  }

  export type repairmentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    repairmentDate?: SortOrder
    repairmentNote?: SortOrder
    repairmentPhoto?: SortOrder
    repairerInCharge?: SortOrder
  }

  export type repairmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type inspectionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    inspectionDateTime?: SortOrder
    color?: SortOrder
    state?: SortOrder
  }

  export type inspectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inspectionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    inspectionDateTime?: SortOrder
    color?: SortOrder
    state?: SortOrder
  }

  export type inspectionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    inspectionDateTime?: SortOrder
    color?: SortOrder
    state?: SortOrder
  }

  export type inspectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use equipmentDefaultArgs instead
     */
    export type equipmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = equipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use repairmentDefaultArgs instead
     */
    export type repairmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = repairmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inspectionDefaultArgs instead
     */
    export type inspectionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = inspectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>

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