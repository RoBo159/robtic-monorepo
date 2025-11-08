
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
 * Model Guild
 * 
 */
export type Guild = $Result.DefaultSelection<Prisma.$GuildPayload>
/**
 * Model Panel
 * 
 */
export type Panel = $Result.DefaultSelection<Prisma.$PanelPayload>
/**
 * Model PanelTemplate
 * 
 */
export type PanelTemplate = $Result.DefaultSelection<Prisma.$PanelTemplatePayload>
/**
 * Model TicketPanel
 * 
 */
export type TicketPanel = $Result.DefaultSelection<Prisma.$TicketPanelPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model FormData
 * 
 */
export type FormData = $Result.DefaultSelection<Prisma.$FormDataPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model ButtonData
 * 
 */
export type ButtonData = $Result.DefaultSelection<Prisma.$ButtonDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PanelType: {
  BUTTON: 'BUTTON',
  MENU: 'MENU'
};

export type PanelType = (typeof PanelType)[keyof typeof PanelType]


export const TicketStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type PanelType = $Enums.PanelType

export const PanelType: typeof $Enums.PanelType

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Guilds
 * const guilds = await prisma.guild.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Guilds
   * const guilds = await prisma.guild.findMany()
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
   * `prisma.guild`: Exposes CRUD operations for the **Guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.GuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panel`: Exposes CRUD operations for the **Panel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Panels
    * const panels = await prisma.panel.findMany()
    * ```
    */
  get panel(): Prisma.PanelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panelTemplate`: Exposes CRUD operations for the **PanelTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanelTemplates
    * const panelTemplates = await prisma.panelTemplate.findMany()
    * ```
    */
  get panelTemplate(): Prisma.PanelTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketPanel`: Exposes CRUD operations for the **TicketPanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketPanels
    * const ticketPanels = await prisma.ticketPanel.findMany()
    * ```
    */
  get ticketPanel(): Prisma.TicketPanelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formData`: Exposes CRUD operations for the **FormData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormData
    * const formData = await prisma.formData.findMany()
    * ```
    */
  get formData(): Prisma.FormDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buttonData`: Exposes CRUD operations for the **ButtonData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ButtonData
    * const buttonData = await prisma.buttonData.findMany()
    * ```
    */
  get buttonData(): Prisma.ButtonDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Guild: 'Guild',
    Panel: 'Panel',
    PanelTemplate: 'PanelTemplate',
    TicketPanel: 'TicketPanel',
    Ticket: 'Ticket',
    FormData: 'FormData',
    Question: 'Question',
    ButtonData: 'ButtonData'
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
      modelProps: "guild" | "panel" | "panelTemplate" | "ticketPanel" | "ticket" | "formData" | "question" | "buttonData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Guild: {
        payload: Prisma.$GuildPayload<ExtArgs>
        fields: Prisma.GuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findFirst: {
            args: Prisma.GuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findMany: {
            args: Prisma.GuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          create: {
            args: Prisma.GuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          createMany: {
            args: Prisma.GuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          delete: {
            args: Prisma.GuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          update: {
            args: Prisma.GuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          deleteMany: {
            args: Prisma.GuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          upsert: {
            args: Prisma.GuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.GuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      Panel: {
        payload: Prisma.$PanelPayload<ExtArgs>
        fields: Prisma.PanelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          findFirst: {
            args: Prisma.PanelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          findMany: {
            args: Prisma.PanelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>[]
          }
          create: {
            args: Prisma.PanelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          createMany: {
            args: Prisma.PanelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>[]
          }
          delete: {
            args: Prisma.PanelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          update: {
            args: Prisma.PanelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          deleteMany: {
            args: Prisma.PanelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>[]
          }
          upsert: {
            args: Prisma.PanelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          aggregate: {
            args: Prisma.PanelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanel>
          }
          groupBy: {
            args: Prisma.PanelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanelCountArgs<ExtArgs>
            result: $Utils.Optional<PanelCountAggregateOutputType> | number
          }
        }
      }
      PanelTemplate: {
        payload: Prisma.$PanelTemplatePayload<ExtArgs>
        fields: Prisma.PanelTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanelTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanelTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          findFirst: {
            args: Prisma.PanelTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanelTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          findMany: {
            args: Prisma.PanelTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>[]
          }
          create: {
            args: Prisma.PanelTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          createMany: {
            args: Prisma.PanelTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanelTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>[]
          }
          delete: {
            args: Prisma.PanelTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          update: {
            args: Prisma.PanelTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PanelTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanelTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanelTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>[]
          }
          upsert: {
            args: Prisma.PanelTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelTemplatePayload>
          }
          aggregate: {
            args: Prisma.PanelTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanelTemplate>
          }
          groupBy: {
            args: Prisma.PanelTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanelTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanelTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PanelTemplateCountAggregateOutputType> | number
          }
        }
      }
      TicketPanel: {
        payload: Prisma.$TicketPanelPayload<ExtArgs>
        fields: Prisma.TicketPanelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketPanelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketPanelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          findFirst: {
            args: Prisma.TicketPanelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketPanelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          findMany: {
            args: Prisma.TicketPanelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>[]
          }
          create: {
            args: Prisma.TicketPanelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          createMany: {
            args: Prisma.TicketPanelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketPanelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>[]
          }
          delete: {
            args: Prisma.TicketPanelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          update: {
            args: Prisma.TicketPanelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          deleteMany: {
            args: Prisma.TicketPanelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketPanelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketPanelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>[]
          }
          upsert: {
            args: Prisma.TicketPanelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPanelPayload>
          }
          aggregate: {
            args: Prisma.TicketPanelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketPanel>
          }
          groupBy: {
            args: Prisma.TicketPanelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketPanelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketPanelCountArgs<ExtArgs>
            result: $Utils.Optional<TicketPanelCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      FormData: {
        payload: Prisma.$FormDataPayload<ExtArgs>
        fields: Prisma.FormDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          findFirst: {
            args: Prisma.FormDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          findMany: {
            args: Prisma.FormDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>[]
          }
          create: {
            args: Prisma.FormDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          createMany: {
            args: Prisma.FormDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>[]
          }
          delete: {
            args: Prisma.FormDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          update: {
            args: Prisma.FormDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          deleteMany: {
            args: Prisma.FormDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>[]
          }
          upsert: {
            args: Prisma.FormDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDataPayload>
          }
          aggregate: {
            args: Prisma.FormDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormData>
          }
          groupBy: {
            args: Prisma.FormDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormDataCountArgs<ExtArgs>
            result: $Utils.Optional<FormDataCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      ButtonData: {
        payload: Prisma.$ButtonDataPayload<ExtArgs>
        fields: Prisma.ButtonDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ButtonDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ButtonDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          findFirst: {
            args: Prisma.ButtonDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ButtonDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          findMany: {
            args: Prisma.ButtonDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>[]
          }
          create: {
            args: Prisma.ButtonDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          createMany: {
            args: Prisma.ButtonDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ButtonDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>[]
          }
          delete: {
            args: Prisma.ButtonDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          update: {
            args: Prisma.ButtonDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          deleteMany: {
            args: Prisma.ButtonDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ButtonDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ButtonDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>[]
          }
          upsert: {
            args: Prisma.ButtonDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ButtonDataPayload>
          }
          aggregate: {
            args: Prisma.ButtonDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateButtonData>
          }
          groupBy: {
            args: Prisma.ButtonDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ButtonDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ButtonDataCountArgs<ExtArgs>
            result: $Utils.Optional<ButtonDataCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    guild?: GuildOmit
    panel?: PanelOmit
    panelTemplate?: PanelTemplateOmit
    ticketPanel?: TicketPanelOmit
    ticket?: TicketOmit
    formData?: FormDataOmit
    question?: QuestionOmit
    buttonData?: ButtonDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    panels: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | GuildCountOutputTypeCountPanelsArgs
  }

  // Custom InputTypes
  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildCountOutputType
     */
    select?: GuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelWhereInput
  }


  /**
   * Count Type PanelCountOutputType
   */

  export type PanelCountOutputType = {
    ticketPanels: number
  }

  export type PanelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketPanels?: boolean | PanelCountOutputTypeCountTicketPanelsArgs
  }

  // Custom InputTypes
  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelCountOutputType
     */
    select?: PanelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeCountTicketPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPanelWhereInput
  }


  /**
   * Count Type PanelTemplateCountOutputType
   */

  export type PanelTemplateCountOutputType = {
    panels: number
  }

  export type PanelTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | PanelTemplateCountOutputTypeCountPanelsArgs
  }

  // Custom InputTypes
  /**
   * PanelTemplateCountOutputType without action
   */
  export type PanelTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplateCountOutputType
     */
    select?: PanelTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanelTemplateCountOutputType without action
   */
  export type PanelTemplateCountOutputTypeCountPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelWhereInput
  }


  /**
   * Count Type TicketPanelCountOutputType
   */

  export type TicketPanelCountOutputType = {
    buttons: number
    tickets: number
  }

  export type TicketPanelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buttons?: boolean | TicketPanelCountOutputTypeCountButtonsArgs
    tickets?: boolean | TicketPanelCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketPanelCountOutputType without action
   */
  export type TicketPanelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanelCountOutputType
     */
    select?: TicketPanelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketPanelCountOutputType without action
   */
  export type TicketPanelCountOutputTypeCountButtonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ButtonDataWhereInput
  }

  /**
   * TicketPanelCountOutputType without action
   */
  export type TicketPanelCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type FormDataCountOutputType
   */

  export type FormDataCountOutputType = {
    questions: number
    ticketPanels: number
  }

  export type FormDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | FormDataCountOutputTypeCountQuestionsArgs
    ticketPanels?: boolean | FormDataCountOutputTypeCountTicketPanelsArgs
  }

  // Custom InputTypes
  /**
   * FormDataCountOutputType without action
   */
  export type FormDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDataCountOutputType
     */
    select?: FormDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormDataCountOutputType without action
   */
  export type FormDataCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * FormDataCountOutputType without action
   */
  export type FormDataCountOutputTypeCountTicketPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPanelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type GuildMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type GuildCountAggregateOutputType = {
    id: number
    config: number
    createdAt: number
    _all: number
  }


  export type GuildMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type GuildMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type GuildCountAggregateInputType = {
    id?: true
    config?: true
    createdAt?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guild to aggregate.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type GuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithAggregationInput | GuildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: GuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    id: string
    config: JsonValue | null
    createdAt: Date
    _count: GuildCountAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends GuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type GuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config?: boolean
    createdAt?: boolean
    panels?: boolean | Guild$panelsArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    config?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectScalar = {
    id?: boolean
    config?: boolean
    createdAt?: boolean
  }

  export type GuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "config" | "createdAt", ExtArgs["result"]["guild"]>
  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | Guild$panelsArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      panels: Prisma.$PanelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      config: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type GuildGetPayload<S extends boolean | null | undefined | GuildDefaultArgs> = $Result.GetResult<Prisma.$GuildPayload, S>

  type GuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface GuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guild'], meta: { name: 'Guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {GuildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildFindUniqueArgs>(args: SelectSubset<T, GuildFindUniqueArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildFindFirstArgs>(args?: SelectSubset<T, GuildFindFirstArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildWithIdOnly = await prisma.guild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildFindManyArgs>(args?: SelectSubset<T, GuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guild.
     * @param {GuildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends GuildCreateArgs>(args: SelectSubset<T, GuildCreateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guilds.
     * @param {GuildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildCreateManyArgs>(args?: SelectSubset<T, GuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guilds and returns the data saved in the database.
     * @param {GuildCreateManyAndReturnArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guild.
     * @param {GuildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends GuildDeleteArgs>(args: SelectSubset<T, GuildDeleteArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guild.
     * @param {GuildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUpdateArgs>(args: SelectSubset<T, GuildUpdateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guilds.
     * @param {GuildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildDeleteManyArgs>(args?: SelectSubset<T, GuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUpdateManyArgs>(args: SelectSubset<T, GuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds and returns the data updated in the database.
     * @param {GuildUpdateManyAndReturnArgs} args - Arguments to update many Guilds.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guild.
     * @param {GuildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends GuildUpsertArgs>(args: SelectSubset<T, GuildUpsertArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildCountArgs>(
      args?: Subset<T, GuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildGroupByArgs} args - Group by arguments.
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
      T extends GuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildGroupByArgs['orderBy'] }
        : { orderBy?: GuildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guild model
   */
  readonly fields: GuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panels<T extends Guild$panelsArgs<ExtArgs> = {}>(args?: Subset<T, Guild$panelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guild model
   */
  interface GuildFieldRefs {
    readonly id: FieldRef<"Guild", 'String'>
    readonly config: FieldRef<"Guild", 'Json'>
    readonly createdAt: FieldRef<"Guild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guild findUnique
   */
  export type GuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findUniqueOrThrow
   */
  export type GuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findFirst
   */
  export type GuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findFirstOrThrow
   */
  export type GuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findMany
   */
  export type GuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild create
   */
  export type GuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Guild.
     */
    data?: XOR<GuildCreateInput, GuildUncheckedCreateInput>
  }

  /**
   * Guild createMany
   */
  export type GuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild createManyAndReturn
   */
  export type GuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guild update
   */
  export type GuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Guild.
     */
    data: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
    /**
     * Choose, which Guild to update.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild updateMany
   */
  export type GuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guild updateManyAndReturn
   */
  export type GuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guild upsert
   */
  export type GuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Guild to update in case it exists.
     */
    where: GuildWhereUniqueInput
    /**
     * In case the Guild found by the `where` argument doesn't exist, create a new Guild with this data.
     */
    create: XOR<GuildCreateInput, GuildUncheckedCreateInput>
    /**
     * In case the Guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
  }

  /**
   * Guild delete
   */
  export type GuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter which Guild to delete.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild deleteMany
   */
  export type GuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildWhereInput
    /**
     * Limit how many Guilds to delete.
     */
    limit?: number
  }

  /**
   * Guild.panels
   */
  export type Guild$panelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    where?: PanelWhereInput
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    cursor?: PanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Guild without action
   */
  export type GuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guild
     */
    omit?: GuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
  }


  /**
   * Model Panel
   */

  export type AggregatePanel = {
    _count: PanelCountAggregateOutputType | null
    _min: PanelMinAggregateOutputType | null
    _max: PanelMaxAggregateOutputType | null
  }

  export type PanelMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    type: $Enums.PanelType | null
    placeholder: string | null
    templateId: string | null
    createdAt: Date | null
  }

  export type PanelMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    type: $Enums.PanelType | null
    placeholder: string | null
    templateId: string | null
    createdAt: Date | null
  }

  export type PanelCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    type: number
    placeholder: number
    templateId: number
    embed: number
    createdAt: number
    _all: number
  }


  export type PanelMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    type?: true
    placeholder?: true
    templateId?: true
    createdAt?: true
  }

  export type PanelMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    type?: true
    placeholder?: true
    templateId?: true
    createdAt?: true
  }

  export type PanelCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    type?: true
    placeholder?: true
    templateId?: true
    embed?: true
    createdAt?: true
    _all?: true
  }

  export type PanelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panel to aggregate.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Panels
    **/
    _count?: true | PanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelMaxAggregateInputType
  }

  export type GetPanelAggregateType<T extends PanelAggregateArgs> = {
        [P in keyof T & keyof AggregatePanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanel[P]>
      : GetScalarType<T[P], AggregatePanel[P]>
  }




  export type PanelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelWhereInput
    orderBy?: PanelOrderByWithAggregationInput | PanelOrderByWithAggregationInput[]
    by: PanelScalarFieldEnum[] | PanelScalarFieldEnum
    having?: PanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelCountAggregateInputType | true
    _min?: PanelMinAggregateInputType
    _max?: PanelMaxAggregateInputType
  }

  export type PanelGroupByOutputType = {
    id: string
    guildId: string
    name: string
    type: $Enums.PanelType
    placeholder: string | null
    templateId: string | null
    embed: JsonValue | null
    createdAt: Date
    _count: PanelCountAggregateOutputType | null
    _min: PanelMinAggregateOutputType | null
    _max: PanelMaxAggregateOutputType | null
  }

  type GetPanelGroupByPayload<T extends PanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelGroupByOutputType[P]>
            : GetScalarType<T[P], PanelGroupByOutputType[P]>
        }
      >
    >


  export type PanelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    type?: boolean
    placeholder?: boolean
    templateId?: boolean
    embed?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
    ticketPanels?: boolean | Panel$ticketPanelsArgs<ExtArgs>
    _count?: boolean | PanelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panel"]>

  export type PanelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    type?: boolean
    placeholder?: boolean
    templateId?: boolean
    embed?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
  }, ExtArgs["result"]["panel"]>

  export type PanelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    type?: boolean
    placeholder?: boolean
    templateId?: boolean
    embed?: boolean
    createdAt?: boolean
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
  }, ExtArgs["result"]["panel"]>

  export type PanelSelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    type?: boolean
    placeholder?: boolean
    templateId?: boolean
    embed?: boolean
    createdAt?: boolean
  }

  export type PanelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "name" | "type" | "placeholder" | "templateId" | "embed" | "createdAt", ExtArgs["result"]["panel"]>
  export type PanelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
    ticketPanels?: boolean | Panel$ticketPanelsArgs<ExtArgs>
    _count?: boolean | PanelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PanelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
  }
  export type PanelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    template?: boolean | Panel$templateArgs<ExtArgs>
  }

  export type $PanelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Panel"
    objects: {
      guild: Prisma.$GuildPayload<ExtArgs>
      template: Prisma.$PanelTemplatePayload<ExtArgs> | null
      ticketPanels: Prisma.$TicketPanelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      name: string
      type: $Enums.PanelType
      placeholder: string | null
      templateId: string | null
      embed: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["panel"]>
    composites: {}
  }

  type PanelGetPayload<S extends boolean | null | undefined | PanelDefaultArgs> = $Result.GetResult<Prisma.$PanelPayload, S>

  type PanelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanelCountAggregateInputType | true
    }

  export interface PanelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Panel'], meta: { name: 'Panel' } }
    /**
     * Find zero or one Panel that matches the filter.
     * @param {PanelFindUniqueArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanelFindUniqueArgs>(args: SelectSubset<T, PanelFindUniqueArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Panel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanelFindUniqueOrThrowArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanelFindUniqueOrThrowArgs>(args: SelectSubset<T, PanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindFirstArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanelFindFirstArgs>(args?: SelectSubset<T, PanelFindFirstArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindFirstOrThrowArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanelFindFirstOrThrowArgs>(args?: SelectSubset<T, PanelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Panels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Panels
     * const panels = await prisma.panel.findMany()
     * 
     * // Get first 10 Panels
     * const panels = await prisma.panel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelWithIdOnly = await prisma.panel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanelFindManyArgs>(args?: SelectSubset<T, PanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Panel.
     * @param {PanelCreateArgs} args - Arguments to create a Panel.
     * @example
     * // Create one Panel
     * const Panel = await prisma.panel.create({
     *   data: {
     *     // ... data to create a Panel
     *   }
     * })
     * 
     */
    create<T extends PanelCreateArgs>(args: SelectSubset<T, PanelCreateArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Panels.
     * @param {PanelCreateManyArgs} args - Arguments to create many Panels.
     * @example
     * // Create many Panels
     * const panel = await prisma.panel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanelCreateManyArgs>(args?: SelectSubset<T, PanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Panels and returns the data saved in the database.
     * @param {PanelCreateManyAndReturnArgs} args - Arguments to create many Panels.
     * @example
     * // Create many Panels
     * const panel = await prisma.panel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Panels and only return the `id`
     * const panelWithIdOnly = await prisma.panel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanelCreateManyAndReturnArgs>(args?: SelectSubset<T, PanelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Panel.
     * @param {PanelDeleteArgs} args - Arguments to delete one Panel.
     * @example
     * // Delete one Panel
     * const Panel = await prisma.panel.delete({
     *   where: {
     *     // ... filter to delete one Panel
     *   }
     * })
     * 
     */
    delete<T extends PanelDeleteArgs>(args: SelectSubset<T, PanelDeleteArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Panel.
     * @param {PanelUpdateArgs} args - Arguments to update one Panel.
     * @example
     * // Update one Panel
     * const panel = await prisma.panel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanelUpdateArgs>(args: SelectSubset<T, PanelUpdateArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Panels.
     * @param {PanelDeleteManyArgs} args - Arguments to filter Panels to delete.
     * @example
     * // Delete a few Panels
     * const { count } = await prisma.panel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanelDeleteManyArgs>(args?: SelectSubset<T, PanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Panels
     * const panel = await prisma.panel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanelUpdateManyArgs>(args: SelectSubset<T, PanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panels and returns the data updated in the database.
     * @param {PanelUpdateManyAndReturnArgs} args - Arguments to update many Panels.
     * @example
     * // Update many Panels
     * const panel = await prisma.panel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Panels and only return the `id`
     * const panelWithIdOnly = await prisma.panel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PanelUpdateManyAndReturnArgs>(args: SelectSubset<T, PanelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Panel.
     * @param {PanelUpsertArgs} args - Arguments to update or create a Panel.
     * @example
     * // Update or create a Panel
     * const panel = await prisma.panel.upsert({
     *   create: {
     *     // ... data to create a Panel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Panel we want to update
     *   }
     * })
     */
    upsert<T extends PanelUpsertArgs>(args: SelectSubset<T, PanelUpsertArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Panels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelCountArgs} args - Arguments to filter Panels to count.
     * @example
     * // Count the number of Panels
     * const count = await prisma.panel.count({
     *   where: {
     *     // ... the filter for the Panels we want to count
     *   }
     * })
    **/
    count<T extends PanelCountArgs>(
      args?: Subset<T, PanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Panel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanelAggregateArgs>(args: Subset<T, PanelAggregateArgs>): Prisma.PrismaPromise<GetPanelAggregateType<T>>

    /**
     * Group by Panel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelGroupByArgs} args - Group by arguments.
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
      T extends PanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelGroupByArgs['orderBy'] }
        : { orderBy?: PanelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Panel model
   */
  readonly fields: PanelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Panel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Panel$templateArgs<ExtArgs> = {}>(args?: Subset<T, Panel$templateArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticketPanels<T extends Panel$ticketPanelsArgs<ExtArgs> = {}>(args?: Subset<T, Panel$ticketPanelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Panel model
   */
  interface PanelFieldRefs {
    readonly id: FieldRef<"Panel", 'String'>
    readonly guildId: FieldRef<"Panel", 'String'>
    readonly name: FieldRef<"Panel", 'String'>
    readonly type: FieldRef<"Panel", 'PanelType'>
    readonly placeholder: FieldRef<"Panel", 'String'>
    readonly templateId: FieldRef<"Panel", 'String'>
    readonly embed: FieldRef<"Panel", 'Json'>
    readonly createdAt: FieldRef<"Panel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Panel findUnique
   */
  export type PanelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel findUniqueOrThrow
   */
  export type PanelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel findFirst
   */
  export type PanelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panels.
     */
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel findFirstOrThrow
   */
  export type PanelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panels.
     */
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel findMany
   */
  export type PanelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panels to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel create
   */
  export type PanelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The data needed to create a Panel.
     */
    data: XOR<PanelCreateInput, PanelUncheckedCreateInput>
  }

  /**
   * Panel createMany
   */
  export type PanelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Panels.
     */
    data: PanelCreateManyInput | PanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Panel createManyAndReturn
   */
  export type PanelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * The data used to create many Panels.
     */
    data: PanelCreateManyInput | PanelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Panel update
   */
  export type PanelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The data needed to update a Panel.
     */
    data: XOR<PanelUpdateInput, PanelUncheckedUpdateInput>
    /**
     * Choose, which Panel to update.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel updateMany
   */
  export type PanelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Panels.
     */
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyInput>
    /**
     * Filter which Panels to update
     */
    where?: PanelWhereInput
    /**
     * Limit how many Panels to update.
     */
    limit?: number
  }

  /**
   * Panel updateManyAndReturn
   */
  export type PanelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * The data used to update Panels.
     */
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyInput>
    /**
     * Filter which Panels to update
     */
    where?: PanelWhereInput
    /**
     * Limit how many Panels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Panel upsert
   */
  export type PanelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The filter to search for the Panel to update in case it exists.
     */
    where: PanelWhereUniqueInput
    /**
     * In case the Panel found by the `where` argument doesn't exist, create a new Panel with this data.
     */
    create: XOR<PanelCreateInput, PanelUncheckedCreateInput>
    /**
     * In case the Panel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelUpdateInput, PanelUncheckedUpdateInput>
  }

  /**
   * Panel delete
   */
  export type PanelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter which Panel to delete.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel deleteMany
   */
  export type PanelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panels to delete
     */
    where?: PanelWhereInput
    /**
     * Limit how many Panels to delete.
     */
    limit?: number
  }

  /**
   * Panel.template
   */
  export type Panel$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    where?: PanelTemplateWhereInput
  }

  /**
   * Panel.ticketPanels
   */
  export type Panel$ticketPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    where?: TicketPanelWhereInput
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    cursor?: TicketPanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPanelScalarFieldEnum | TicketPanelScalarFieldEnum[]
  }

  /**
   * Panel without action
   */
  export type PanelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
  }


  /**
   * Model PanelTemplate
   */

  export type AggregatePanelTemplate = {
    _count: PanelTemplateCountAggregateOutputType | null
    _min: PanelTemplateMinAggregateOutputType | null
    _max: PanelTemplateMaxAggregateOutputType | null
  }

  export type PanelTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PanelTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PanelTemplateCountAggregateOutputType = {
    id: number
    name: number
    data: number
    createdAt: number
    _all: number
  }


  export type PanelTemplateMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PanelTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PanelTemplateCountAggregateInputType = {
    id?: true
    name?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type PanelTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelTemplate to aggregate.
     */
    where?: PanelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelTemplates to fetch.
     */
    orderBy?: PanelTemplateOrderByWithRelationInput | PanelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanelTemplates
    **/
    _count?: true | PanelTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelTemplateMaxAggregateInputType
  }

  export type GetPanelTemplateAggregateType<T extends PanelTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePanelTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanelTemplate[P]>
      : GetScalarType<T[P], AggregatePanelTemplate[P]>
  }




  export type PanelTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelTemplateWhereInput
    orderBy?: PanelTemplateOrderByWithAggregationInput | PanelTemplateOrderByWithAggregationInput[]
    by: PanelTemplateScalarFieldEnum[] | PanelTemplateScalarFieldEnum
    having?: PanelTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelTemplateCountAggregateInputType | true
    _min?: PanelTemplateMinAggregateInputType
    _max?: PanelTemplateMaxAggregateInputType
  }

  export type PanelTemplateGroupByOutputType = {
    id: string
    name: string
    data: JsonValue | null
    createdAt: Date
    _count: PanelTemplateCountAggregateOutputType | null
    _min: PanelTemplateMinAggregateOutputType | null
    _max: PanelTemplateMaxAggregateOutputType | null
  }

  type GetPanelTemplateGroupByPayload<T extends PanelTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanelTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PanelTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PanelTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    panels?: boolean | PanelTemplate$panelsArgs<ExtArgs>
    _count?: boolean | PanelTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panelTemplate"]>

  export type PanelTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["panelTemplate"]>

  export type PanelTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["panelTemplate"]>

  export type PanelTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type PanelTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "data" | "createdAt", ExtArgs["result"]["panelTemplate"]>
  export type PanelTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | PanelTemplate$panelsArgs<ExtArgs>
    _count?: boolean | PanelTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PanelTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PanelTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PanelTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PanelTemplate"
    objects: {
      panels: Prisma.$PanelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["panelTemplate"]>
    composites: {}
  }

  type PanelTemplateGetPayload<S extends boolean | null | undefined | PanelTemplateDefaultArgs> = $Result.GetResult<Prisma.$PanelTemplatePayload, S>

  type PanelTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanelTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanelTemplateCountAggregateInputType | true
    }

  export interface PanelTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PanelTemplate'], meta: { name: 'PanelTemplate' } }
    /**
     * Find zero or one PanelTemplate that matches the filter.
     * @param {PanelTemplateFindUniqueArgs} args - Arguments to find a PanelTemplate
     * @example
     * // Get one PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanelTemplateFindUniqueArgs>(args: SelectSubset<T, PanelTemplateFindUniqueArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PanelTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanelTemplateFindUniqueOrThrowArgs} args - Arguments to find a PanelTemplate
     * @example
     * // Get one PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanelTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PanelTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanelTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateFindFirstArgs} args - Arguments to find a PanelTemplate
     * @example
     * // Get one PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanelTemplateFindFirstArgs>(args?: SelectSubset<T, PanelTemplateFindFirstArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanelTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateFindFirstOrThrowArgs} args - Arguments to find a PanelTemplate
     * @example
     * // Get one PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanelTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PanelTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PanelTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanelTemplates
     * const panelTemplates = await prisma.panelTemplate.findMany()
     * 
     * // Get first 10 PanelTemplates
     * const panelTemplates = await prisma.panelTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelTemplateWithIdOnly = await prisma.panelTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanelTemplateFindManyArgs>(args?: SelectSubset<T, PanelTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PanelTemplate.
     * @param {PanelTemplateCreateArgs} args - Arguments to create a PanelTemplate.
     * @example
     * // Create one PanelTemplate
     * const PanelTemplate = await prisma.panelTemplate.create({
     *   data: {
     *     // ... data to create a PanelTemplate
     *   }
     * })
     * 
     */
    create<T extends PanelTemplateCreateArgs>(args: SelectSubset<T, PanelTemplateCreateArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PanelTemplates.
     * @param {PanelTemplateCreateManyArgs} args - Arguments to create many PanelTemplates.
     * @example
     * // Create many PanelTemplates
     * const panelTemplate = await prisma.panelTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanelTemplateCreateManyArgs>(args?: SelectSubset<T, PanelTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PanelTemplates and returns the data saved in the database.
     * @param {PanelTemplateCreateManyAndReturnArgs} args - Arguments to create many PanelTemplates.
     * @example
     * // Create many PanelTemplates
     * const panelTemplate = await prisma.panelTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PanelTemplates and only return the `id`
     * const panelTemplateWithIdOnly = await prisma.panelTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanelTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PanelTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PanelTemplate.
     * @param {PanelTemplateDeleteArgs} args - Arguments to delete one PanelTemplate.
     * @example
     * // Delete one PanelTemplate
     * const PanelTemplate = await prisma.panelTemplate.delete({
     *   where: {
     *     // ... filter to delete one PanelTemplate
     *   }
     * })
     * 
     */
    delete<T extends PanelTemplateDeleteArgs>(args: SelectSubset<T, PanelTemplateDeleteArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PanelTemplate.
     * @param {PanelTemplateUpdateArgs} args - Arguments to update one PanelTemplate.
     * @example
     * // Update one PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanelTemplateUpdateArgs>(args: SelectSubset<T, PanelTemplateUpdateArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PanelTemplates.
     * @param {PanelTemplateDeleteManyArgs} args - Arguments to filter PanelTemplates to delete.
     * @example
     * // Delete a few PanelTemplates
     * const { count } = await prisma.panelTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanelTemplateDeleteManyArgs>(args?: SelectSubset<T, PanelTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanelTemplates
     * const panelTemplate = await prisma.panelTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanelTemplateUpdateManyArgs>(args: SelectSubset<T, PanelTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelTemplates and returns the data updated in the database.
     * @param {PanelTemplateUpdateManyAndReturnArgs} args - Arguments to update many PanelTemplates.
     * @example
     * // Update many PanelTemplates
     * const panelTemplate = await prisma.panelTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PanelTemplates and only return the `id`
     * const panelTemplateWithIdOnly = await prisma.panelTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PanelTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, PanelTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PanelTemplate.
     * @param {PanelTemplateUpsertArgs} args - Arguments to update or create a PanelTemplate.
     * @example
     * // Update or create a PanelTemplate
     * const panelTemplate = await prisma.panelTemplate.upsert({
     *   create: {
     *     // ... data to create a PanelTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanelTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PanelTemplateUpsertArgs>(args: SelectSubset<T, PanelTemplateUpsertArgs<ExtArgs>>): Prisma__PanelTemplateClient<$Result.GetResult<Prisma.$PanelTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PanelTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateCountArgs} args - Arguments to filter PanelTemplates to count.
     * @example
     * // Count the number of PanelTemplates
     * const count = await prisma.panelTemplate.count({
     *   where: {
     *     // ... the filter for the PanelTemplates we want to count
     *   }
     * })
    **/
    count<T extends PanelTemplateCountArgs>(
      args?: Subset<T, PanelTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanelTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanelTemplateAggregateArgs>(args: Subset<T, PanelTemplateAggregateArgs>): Prisma.PrismaPromise<GetPanelTemplateAggregateType<T>>

    /**
     * Group by PanelTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelTemplateGroupByArgs} args - Group by arguments.
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
      T extends PanelTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PanelTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PanelTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PanelTemplate model
   */
  readonly fields: PanelTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PanelTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanelTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panels<T extends PanelTemplate$panelsArgs<ExtArgs> = {}>(args?: Subset<T, PanelTemplate$panelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PanelTemplate model
   */
  interface PanelTemplateFieldRefs {
    readonly id: FieldRef<"PanelTemplate", 'String'>
    readonly name: FieldRef<"PanelTemplate", 'String'>
    readonly data: FieldRef<"PanelTemplate", 'Json'>
    readonly createdAt: FieldRef<"PanelTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PanelTemplate findUnique
   */
  export type PanelTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PanelTemplate to fetch.
     */
    where: PanelTemplateWhereUniqueInput
  }

  /**
   * PanelTemplate findUniqueOrThrow
   */
  export type PanelTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PanelTemplate to fetch.
     */
    where: PanelTemplateWhereUniqueInput
  }

  /**
   * PanelTemplate findFirst
   */
  export type PanelTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PanelTemplate to fetch.
     */
    where?: PanelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelTemplates to fetch.
     */
    orderBy?: PanelTemplateOrderByWithRelationInput | PanelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelTemplates.
     */
    cursor?: PanelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelTemplates.
     */
    distinct?: PanelTemplateScalarFieldEnum | PanelTemplateScalarFieldEnum[]
  }

  /**
   * PanelTemplate findFirstOrThrow
   */
  export type PanelTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PanelTemplate to fetch.
     */
    where?: PanelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelTemplates to fetch.
     */
    orderBy?: PanelTemplateOrderByWithRelationInput | PanelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelTemplates.
     */
    cursor?: PanelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelTemplates.
     */
    distinct?: PanelTemplateScalarFieldEnum | PanelTemplateScalarFieldEnum[]
  }

  /**
   * PanelTemplate findMany
   */
  export type PanelTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PanelTemplates to fetch.
     */
    where?: PanelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelTemplates to fetch.
     */
    orderBy?: PanelTemplateOrderByWithRelationInput | PanelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanelTemplates.
     */
    cursor?: PanelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelTemplates.
     */
    skip?: number
    distinct?: PanelTemplateScalarFieldEnum | PanelTemplateScalarFieldEnum[]
  }

  /**
   * PanelTemplate create
   */
  export type PanelTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PanelTemplate.
     */
    data: XOR<PanelTemplateCreateInput, PanelTemplateUncheckedCreateInput>
  }

  /**
   * PanelTemplate createMany
   */
  export type PanelTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PanelTemplates.
     */
    data: PanelTemplateCreateManyInput | PanelTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PanelTemplate createManyAndReturn
   */
  export type PanelTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many PanelTemplates.
     */
    data: PanelTemplateCreateManyInput | PanelTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PanelTemplate update
   */
  export type PanelTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PanelTemplate.
     */
    data: XOR<PanelTemplateUpdateInput, PanelTemplateUncheckedUpdateInput>
    /**
     * Choose, which PanelTemplate to update.
     */
    where: PanelTemplateWhereUniqueInput
  }

  /**
   * PanelTemplate updateMany
   */
  export type PanelTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PanelTemplates.
     */
    data: XOR<PanelTemplateUpdateManyMutationInput, PanelTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PanelTemplates to update
     */
    where?: PanelTemplateWhereInput
    /**
     * Limit how many PanelTemplates to update.
     */
    limit?: number
  }

  /**
   * PanelTemplate updateManyAndReturn
   */
  export type PanelTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * The data used to update PanelTemplates.
     */
    data: XOR<PanelTemplateUpdateManyMutationInput, PanelTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PanelTemplates to update
     */
    where?: PanelTemplateWhereInput
    /**
     * Limit how many PanelTemplates to update.
     */
    limit?: number
  }

  /**
   * PanelTemplate upsert
   */
  export type PanelTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PanelTemplate to update in case it exists.
     */
    where: PanelTemplateWhereUniqueInput
    /**
     * In case the PanelTemplate found by the `where` argument doesn't exist, create a new PanelTemplate with this data.
     */
    create: XOR<PanelTemplateCreateInput, PanelTemplateUncheckedCreateInput>
    /**
     * In case the PanelTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelTemplateUpdateInput, PanelTemplateUncheckedUpdateInput>
  }

  /**
   * PanelTemplate delete
   */
  export type PanelTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
    /**
     * Filter which PanelTemplate to delete.
     */
    where: PanelTemplateWhereUniqueInput
  }

  /**
   * PanelTemplate deleteMany
   */
  export type PanelTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelTemplates to delete
     */
    where?: PanelTemplateWhereInput
    /**
     * Limit how many PanelTemplates to delete.
     */
    limit?: number
  }

  /**
   * PanelTemplate.panels
   */
  export type PanelTemplate$panelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panel
     */
    omit?: PanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    where?: PanelWhereInput
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    cursor?: PanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * PanelTemplate without action
   */
  export type PanelTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelTemplate
     */
    select?: PanelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelTemplate
     */
    omit?: PanelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelTemplateInclude<ExtArgs> | null
  }


  /**
   * Model TicketPanel
   */

  export type AggregateTicketPanel = {
    _count: TicketPanelCountAggregateOutputType | null
    _min: TicketPanelMinAggregateOutputType | null
    _max: TicketPanelMaxAggregateOutputType | null
  }

  export type TicketPanelMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    name: string | null
    description: string | null
    emoji: string | null
    style: string | null
    hasForm: boolean | null
    maintenance: boolean | null
    status: boolean | null
    formId: string | null
    createdAt: Date | null
  }

  export type TicketPanelMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    name: string | null
    description: string | null
    emoji: string | null
    style: string | null
    hasForm: boolean | null
    maintenance: boolean | null
    status: boolean | null
    formId: string | null
    createdAt: Date | null
  }

  export type TicketPanelCountAggregateOutputType = {
    id: number
    panelId: number
    name: number
    description: number
    emoji: number
    style: number
    hasForm: number
    maintenance: number
    status: number
    formId: number
    data: number
    createdAt: number
    _all: number
  }


  export type TicketPanelMinAggregateInputType = {
    id?: true
    panelId?: true
    name?: true
    description?: true
    emoji?: true
    style?: true
    hasForm?: true
    maintenance?: true
    status?: true
    formId?: true
    createdAt?: true
  }

  export type TicketPanelMaxAggregateInputType = {
    id?: true
    panelId?: true
    name?: true
    description?: true
    emoji?: true
    style?: true
    hasForm?: true
    maintenance?: true
    status?: true
    formId?: true
    createdAt?: true
  }

  export type TicketPanelCountAggregateInputType = {
    id?: true
    panelId?: true
    name?: true
    description?: true
    emoji?: true
    style?: true
    hasForm?: true
    maintenance?: true
    status?: true
    formId?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type TicketPanelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPanel to aggregate.
     */
    where?: TicketPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPanels to fetch.
     */
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketPanels
    **/
    _count?: true | TicketPanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketPanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketPanelMaxAggregateInputType
  }

  export type GetTicketPanelAggregateType<T extends TicketPanelAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketPanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketPanel[P]>
      : GetScalarType<T[P], AggregateTicketPanel[P]>
  }




  export type TicketPanelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPanelWhereInput
    orderBy?: TicketPanelOrderByWithAggregationInput | TicketPanelOrderByWithAggregationInput[]
    by: TicketPanelScalarFieldEnum[] | TicketPanelScalarFieldEnum
    having?: TicketPanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketPanelCountAggregateInputType | true
    _min?: TicketPanelMinAggregateInputType
    _max?: TicketPanelMaxAggregateInputType
  }

  export type TicketPanelGroupByOutputType = {
    id: string
    panelId: string
    name: string
    description: string | null
    emoji: string | null
    style: string
    hasForm: boolean
    maintenance: boolean
    status: boolean
    formId: string | null
    data: JsonValue | null
    createdAt: Date
    _count: TicketPanelCountAggregateOutputType | null
    _min: TicketPanelMinAggregateOutputType | null
    _max: TicketPanelMaxAggregateOutputType | null
  }

  type GetTicketPanelGroupByPayload<T extends TicketPanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketPanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketPanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketPanelGroupByOutputType[P]>
            : GetScalarType<T[P], TicketPanelGroupByOutputType[P]>
        }
      >
    >


  export type TicketPanelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    name?: boolean
    description?: boolean
    emoji?: boolean
    style?: boolean
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
    buttons?: boolean | TicketPanel$buttonsArgs<ExtArgs>
    tickets?: boolean | TicketPanel$ticketsArgs<ExtArgs>
    _count?: boolean | TicketPanelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPanel"]>

  export type TicketPanelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    name?: boolean
    description?: boolean
    emoji?: boolean
    style?: boolean
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPanel"]>

  export type TicketPanelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    name?: boolean
    description?: boolean
    emoji?: boolean
    style?: boolean
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPanel"]>

  export type TicketPanelSelectScalar = {
    id?: boolean
    panelId?: boolean
    name?: boolean
    description?: boolean
    emoji?: boolean
    style?: boolean
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type TicketPanelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "panelId" | "name" | "description" | "emoji" | "style" | "hasForm" | "maintenance" | "status" | "formId" | "data" | "createdAt", ExtArgs["result"]["ticketPanel"]>
  export type TicketPanelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
    buttons?: boolean | TicketPanel$buttonsArgs<ExtArgs>
    tickets?: boolean | TicketPanel$ticketsArgs<ExtArgs>
    _count?: boolean | TicketPanelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketPanelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
  }
  export type TicketPanelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
    form?: boolean | TicketPanel$formArgs<ExtArgs>
  }

  export type $TicketPanelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketPanel"
    objects: {
      panel: Prisma.$PanelPayload<ExtArgs>
      form: Prisma.$FormDataPayload<ExtArgs> | null
      buttons: Prisma.$ButtonDataPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      name: string
      description: string | null
      emoji: string | null
      style: string
      hasForm: boolean
      maintenance: boolean
      status: boolean
      formId: string | null
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["ticketPanel"]>
    composites: {}
  }

  type TicketPanelGetPayload<S extends boolean | null | undefined | TicketPanelDefaultArgs> = $Result.GetResult<Prisma.$TicketPanelPayload, S>

  type TicketPanelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketPanelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketPanelCountAggregateInputType | true
    }

  export interface TicketPanelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketPanel'], meta: { name: 'TicketPanel' } }
    /**
     * Find zero or one TicketPanel that matches the filter.
     * @param {TicketPanelFindUniqueArgs} args - Arguments to find a TicketPanel
     * @example
     * // Get one TicketPanel
     * const ticketPanel = await prisma.ticketPanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketPanelFindUniqueArgs>(args: SelectSubset<T, TicketPanelFindUniqueArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketPanel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketPanelFindUniqueOrThrowArgs} args - Arguments to find a TicketPanel
     * @example
     * // Get one TicketPanel
     * const ticketPanel = await prisma.ticketPanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketPanelFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketPanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelFindFirstArgs} args - Arguments to find a TicketPanel
     * @example
     * // Get one TicketPanel
     * const ticketPanel = await prisma.ticketPanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketPanelFindFirstArgs>(args?: SelectSubset<T, TicketPanelFindFirstArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPanel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelFindFirstOrThrowArgs} args - Arguments to find a TicketPanel
     * @example
     * // Get one TicketPanel
     * const ticketPanel = await prisma.ticketPanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketPanelFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketPanelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketPanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketPanels
     * const ticketPanels = await prisma.ticketPanel.findMany()
     * 
     * // Get first 10 TicketPanels
     * const ticketPanels = await prisma.ticketPanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketPanelWithIdOnly = await prisma.ticketPanel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketPanelFindManyArgs>(args?: SelectSubset<T, TicketPanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketPanel.
     * @param {TicketPanelCreateArgs} args - Arguments to create a TicketPanel.
     * @example
     * // Create one TicketPanel
     * const TicketPanel = await prisma.ticketPanel.create({
     *   data: {
     *     // ... data to create a TicketPanel
     *   }
     * })
     * 
     */
    create<T extends TicketPanelCreateArgs>(args: SelectSubset<T, TicketPanelCreateArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketPanels.
     * @param {TicketPanelCreateManyArgs} args - Arguments to create many TicketPanels.
     * @example
     * // Create many TicketPanels
     * const ticketPanel = await prisma.ticketPanel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketPanelCreateManyArgs>(args?: SelectSubset<T, TicketPanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketPanels and returns the data saved in the database.
     * @param {TicketPanelCreateManyAndReturnArgs} args - Arguments to create many TicketPanels.
     * @example
     * // Create many TicketPanels
     * const ticketPanel = await prisma.ticketPanel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketPanels and only return the `id`
     * const ticketPanelWithIdOnly = await prisma.ticketPanel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketPanelCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketPanelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketPanel.
     * @param {TicketPanelDeleteArgs} args - Arguments to delete one TicketPanel.
     * @example
     * // Delete one TicketPanel
     * const TicketPanel = await prisma.ticketPanel.delete({
     *   where: {
     *     // ... filter to delete one TicketPanel
     *   }
     * })
     * 
     */
    delete<T extends TicketPanelDeleteArgs>(args: SelectSubset<T, TicketPanelDeleteArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketPanel.
     * @param {TicketPanelUpdateArgs} args - Arguments to update one TicketPanel.
     * @example
     * // Update one TicketPanel
     * const ticketPanel = await prisma.ticketPanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketPanelUpdateArgs>(args: SelectSubset<T, TicketPanelUpdateArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketPanels.
     * @param {TicketPanelDeleteManyArgs} args - Arguments to filter TicketPanels to delete.
     * @example
     * // Delete a few TicketPanels
     * const { count } = await prisma.ticketPanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketPanelDeleteManyArgs>(args?: SelectSubset<T, TicketPanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketPanels
     * const ticketPanel = await prisma.ticketPanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketPanelUpdateManyArgs>(args: SelectSubset<T, TicketPanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPanels and returns the data updated in the database.
     * @param {TicketPanelUpdateManyAndReturnArgs} args - Arguments to update many TicketPanels.
     * @example
     * // Update many TicketPanels
     * const ticketPanel = await prisma.ticketPanel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketPanels and only return the `id`
     * const ticketPanelWithIdOnly = await prisma.ticketPanel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketPanelUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketPanelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketPanel.
     * @param {TicketPanelUpsertArgs} args - Arguments to update or create a TicketPanel.
     * @example
     * // Update or create a TicketPanel
     * const ticketPanel = await prisma.ticketPanel.upsert({
     *   create: {
     *     // ... data to create a TicketPanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketPanel we want to update
     *   }
     * })
     */
    upsert<T extends TicketPanelUpsertArgs>(args: SelectSubset<T, TicketPanelUpsertArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelCountArgs} args - Arguments to filter TicketPanels to count.
     * @example
     * // Count the number of TicketPanels
     * const count = await prisma.ticketPanel.count({
     *   where: {
     *     // ... the filter for the TicketPanels we want to count
     *   }
     * })
    **/
    count<T extends TicketPanelCountArgs>(
      args?: Subset<T, TicketPanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketPanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketPanelAggregateArgs>(args: Subset<T, TicketPanelAggregateArgs>): Prisma.PrismaPromise<GetTicketPanelAggregateType<T>>

    /**
     * Group by TicketPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPanelGroupByArgs} args - Group by arguments.
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
      T extends TicketPanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketPanelGroupByArgs['orderBy'] }
        : { orderBy?: TicketPanelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketPanel model
   */
  readonly fields: TicketPanelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketPanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketPanelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends PanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanelDefaultArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    form<T extends TicketPanel$formArgs<ExtArgs> = {}>(args?: Subset<T, TicketPanel$formArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    buttons<T extends TicketPanel$buttonsArgs<ExtArgs> = {}>(args?: Subset<T, TicketPanel$buttonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends TicketPanel$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketPanel$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketPanel model
   */
  interface TicketPanelFieldRefs {
    readonly id: FieldRef<"TicketPanel", 'String'>
    readonly panelId: FieldRef<"TicketPanel", 'String'>
    readonly name: FieldRef<"TicketPanel", 'String'>
    readonly description: FieldRef<"TicketPanel", 'String'>
    readonly emoji: FieldRef<"TicketPanel", 'String'>
    readonly style: FieldRef<"TicketPanel", 'String'>
    readonly hasForm: FieldRef<"TicketPanel", 'Boolean'>
    readonly maintenance: FieldRef<"TicketPanel", 'Boolean'>
    readonly status: FieldRef<"TicketPanel", 'Boolean'>
    readonly formId: FieldRef<"TicketPanel", 'String'>
    readonly data: FieldRef<"TicketPanel", 'Json'>
    readonly createdAt: FieldRef<"TicketPanel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketPanel findUnique
   */
  export type TicketPanelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter, which TicketPanel to fetch.
     */
    where: TicketPanelWhereUniqueInput
  }

  /**
   * TicketPanel findUniqueOrThrow
   */
  export type TicketPanelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter, which TicketPanel to fetch.
     */
    where: TicketPanelWhereUniqueInput
  }

  /**
   * TicketPanel findFirst
   */
  export type TicketPanelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter, which TicketPanel to fetch.
     */
    where?: TicketPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPanels to fetch.
     */
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPanels.
     */
    cursor?: TicketPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPanels.
     */
    distinct?: TicketPanelScalarFieldEnum | TicketPanelScalarFieldEnum[]
  }

  /**
   * TicketPanel findFirstOrThrow
   */
  export type TicketPanelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter, which TicketPanel to fetch.
     */
    where?: TicketPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPanels to fetch.
     */
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPanels.
     */
    cursor?: TicketPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPanels.
     */
    distinct?: TicketPanelScalarFieldEnum | TicketPanelScalarFieldEnum[]
  }

  /**
   * TicketPanel findMany
   */
  export type TicketPanelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter, which TicketPanels to fetch.
     */
    where?: TicketPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPanels to fetch.
     */
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketPanels.
     */
    cursor?: TicketPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPanels.
     */
    skip?: number
    distinct?: TicketPanelScalarFieldEnum | TicketPanelScalarFieldEnum[]
  }

  /**
   * TicketPanel create
   */
  export type TicketPanelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketPanel.
     */
    data: XOR<TicketPanelCreateInput, TicketPanelUncheckedCreateInput>
  }

  /**
   * TicketPanel createMany
   */
  export type TicketPanelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketPanels.
     */
    data: TicketPanelCreateManyInput | TicketPanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketPanel createManyAndReturn
   */
  export type TicketPanelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * The data used to create many TicketPanels.
     */
    data: TicketPanelCreateManyInput | TicketPanelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPanel update
   */
  export type TicketPanelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketPanel.
     */
    data: XOR<TicketPanelUpdateInput, TicketPanelUncheckedUpdateInput>
    /**
     * Choose, which TicketPanel to update.
     */
    where: TicketPanelWhereUniqueInput
  }

  /**
   * TicketPanel updateMany
   */
  export type TicketPanelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketPanels.
     */
    data: XOR<TicketPanelUpdateManyMutationInput, TicketPanelUncheckedUpdateManyInput>
    /**
     * Filter which TicketPanels to update
     */
    where?: TicketPanelWhereInput
    /**
     * Limit how many TicketPanels to update.
     */
    limit?: number
  }

  /**
   * TicketPanel updateManyAndReturn
   */
  export type TicketPanelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * The data used to update TicketPanels.
     */
    data: XOR<TicketPanelUpdateManyMutationInput, TicketPanelUncheckedUpdateManyInput>
    /**
     * Filter which TicketPanels to update
     */
    where?: TicketPanelWhereInput
    /**
     * Limit how many TicketPanels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPanel upsert
   */
  export type TicketPanelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketPanel to update in case it exists.
     */
    where: TicketPanelWhereUniqueInput
    /**
     * In case the TicketPanel found by the `where` argument doesn't exist, create a new TicketPanel with this data.
     */
    create: XOR<TicketPanelCreateInput, TicketPanelUncheckedCreateInput>
    /**
     * In case the TicketPanel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketPanelUpdateInput, TicketPanelUncheckedUpdateInput>
  }

  /**
   * TicketPanel delete
   */
  export type TicketPanelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    /**
     * Filter which TicketPanel to delete.
     */
    where: TicketPanelWhereUniqueInput
  }

  /**
   * TicketPanel deleteMany
   */
  export type TicketPanelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPanels to delete
     */
    where?: TicketPanelWhereInput
    /**
     * Limit how many TicketPanels to delete.
     */
    limit?: number
  }

  /**
   * TicketPanel.form
   */
  export type TicketPanel$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    where?: FormDataWhereInput
  }

  /**
   * TicketPanel.buttons
   */
  export type TicketPanel$buttonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    where?: ButtonDataWhereInput
    orderBy?: ButtonDataOrderByWithRelationInput | ButtonDataOrderByWithRelationInput[]
    cursor?: ButtonDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ButtonDataScalarFieldEnum | ButtonDataScalarFieldEnum[]
  }

  /**
   * TicketPanel.tickets
   */
  export type TicketPanel$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketPanel without action
   */
  export type TicketPanelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    claimer: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    claimer: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    panelId: number
    claimer: number
    status: number
    embed: number
    data: number
    createdAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    panelId?: true
    claimer?: true
    status?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    panelId?: true
    claimer?: true
    status?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    panelId?: true
    claimer?: true
    status?: true
    embed?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    panelId: string
    claimer: string | null
    status: $Enums.TicketStatus
    embed: JsonValue | null
    data: JsonValue | null
    createdAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    claimer?: boolean
    status?: boolean
    embed?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    claimer?: boolean
    status?: boolean
    embed?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    claimer?: boolean
    status?: boolean
    embed?: boolean
    data?: boolean
    createdAt?: boolean
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    panelId?: boolean
    claimer?: boolean
    status?: boolean
    embed?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "panelId" | "claimer" | "status" | "embed" | "data" | "createdAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      panel: Prisma.$TicketPanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      claimer: string | null
      status: $Enums.TicketStatus
      embed: Prisma.JsonValue | null
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends TicketPanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketPanelDefaultArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly panelId: FieldRef<"Ticket", 'String'>
    readonly claimer: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly embed: FieldRef<"Ticket", 'Json'>
    readonly data: FieldRef<"Ticket", 'Json'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model FormData
   */

  export type AggregateFormData = {
    _count: FormDataCountAggregateOutputType | null
    _min: FormDataMinAggregateOutputType | null
    _max: FormDataMaxAggregateOutputType | null
  }

  export type FormDataMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FormDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FormDataCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FormDataMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FormDataMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FormDataCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FormDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormData to aggregate.
     */
    where?: FormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormData to fetch.
     */
    orderBy?: FormDataOrderByWithRelationInput | FormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormData
    **/
    _count?: true | FormDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormDataMaxAggregateInputType
  }

  export type GetFormDataAggregateType<T extends FormDataAggregateArgs> = {
        [P in keyof T & keyof AggregateFormData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormData[P]>
      : GetScalarType<T[P], AggregateFormData[P]>
  }




  export type FormDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormDataWhereInput
    orderBy?: FormDataOrderByWithAggregationInput | FormDataOrderByWithAggregationInput[]
    by: FormDataScalarFieldEnum[] | FormDataScalarFieldEnum
    having?: FormDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormDataCountAggregateInputType | true
    _min?: FormDataMinAggregateInputType
    _max?: FormDataMaxAggregateInputType
  }

  export type FormDataGroupByOutputType = {
    id: string
    name: string
    _count: FormDataCountAggregateOutputType | null
    _min: FormDataMinAggregateOutputType | null
    _max: FormDataMaxAggregateOutputType | null
  }

  type GetFormDataGroupByPayload<T extends FormDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormDataGroupByOutputType[P]>
            : GetScalarType<T[P], FormDataGroupByOutputType[P]>
        }
      >
    >


  export type FormDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    questions?: boolean | FormData$questionsArgs<ExtArgs>
    ticketPanels?: boolean | FormData$ticketPanelsArgs<ExtArgs>
    _count?: boolean | FormDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formData"]>

  export type FormDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["formData"]>

  export type FormDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["formData"]>

  export type FormDataSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FormDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["formData"]>
  export type FormDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | FormData$questionsArgs<ExtArgs>
    ticketPanels?: boolean | FormData$ticketPanelsArgs<ExtArgs>
    _count?: boolean | FormDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormData"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      ticketPanels: Prisma.$TicketPanelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["formData"]>
    composites: {}
  }

  type FormDataGetPayload<S extends boolean | null | undefined | FormDataDefaultArgs> = $Result.GetResult<Prisma.$FormDataPayload, S>

  type FormDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormDataCountAggregateInputType | true
    }

  export interface FormDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormData'], meta: { name: 'FormData' } }
    /**
     * Find zero or one FormData that matches the filter.
     * @param {FormDataFindUniqueArgs} args - Arguments to find a FormData
     * @example
     * // Get one FormData
     * const formData = await prisma.formData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormDataFindUniqueArgs>(args: SelectSubset<T, FormDataFindUniqueArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormDataFindUniqueOrThrowArgs} args - Arguments to find a FormData
     * @example
     * // Get one FormData
     * const formData = await prisma.formData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormDataFindUniqueOrThrowArgs>(args: SelectSubset<T, FormDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataFindFirstArgs} args - Arguments to find a FormData
     * @example
     * // Get one FormData
     * const formData = await prisma.formData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormDataFindFirstArgs>(args?: SelectSubset<T, FormDataFindFirstArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataFindFirstOrThrowArgs} args - Arguments to find a FormData
     * @example
     * // Get one FormData
     * const formData = await prisma.formData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormDataFindFirstOrThrowArgs>(args?: SelectSubset<T, FormDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormData
     * const formData = await prisma.formData.findMany()
     * 
     * // Get first 10 FormData
     * const formData = await prisma.formData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formDataWithIdOnly = await prisma.formData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormDataFindManyArgs>(args?: SelectSubset<T, FormDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormData.
     * @param {FormDataCreateArgs} args - Arguments to create a FormData.
     * @example
     * // Create one FormData
     * const FormData = await prisma.formData.create({
     *   data: {
     *     // ... data to create a FormData
     *   }
     * })
     * 
     */
    create<T extends FormDataCreateArgs>(args: SelectSubset<T, FormDataCreateArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormData.
     * @param {FormDataCreateManyArgs} args - Arguments to create many FormData.
     * @example
     * // Create many FormData
     * const formData = await prisma.formData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormDataCreateManyArgs>(args?: SelectSubset<T, FormDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormData and returns the data saved in the database.
     * @param {FormDataCreateManyAndReturnArgs} args - Arguments to create many FormData.
     * @example
     * // Create many FormData
     * const formData = await prisma.formData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormData and only return the `id`
     * const formDataWithIdOnly = await prisma.formData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormDataCreateManyAndReturnArgs>(args?: SelectSubset<T, FormDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormData.
     * @param {FormDataDeleteArgs} args - Arguments to delete one FormData.
     * @example
     * // Delete one FormData
     * const FormData = await prisma.formData.delete({
     *   where: {
     *     // ... filter to delete one FormData
     *   }
     * })
     * 
     */
    delete<T extends FormDataDeleteArgs>(args: SelectSubset<T, FormDataDeleteArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormData.
     * @param {FormDataUpdateArgs} args - Arguments to update one FormData.
     * @example
     * // Update one FormData
     * const formData = await prisma.formData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormDataUpdateArgs>(args: SelectSubset<T, FormDataUpdateArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormData.
     * @param {FormDataDeleteManyArgs} args - Arguments to filter FormData to delete.
     * @example
     * // Delete a few FormData
     * const { count } = await prisma.formData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDataDeleteManyArgs>(args?: SelectSubset<T, FormDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormData
     * const formData = await prisma.formData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormDataUpdateManyArgs>(args: SelectSubset<T, FormDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormData and returns the data updated in the database.
     * @param {FormDataUpdateManyAndReturnArgs} args - Arguments to update many FormData.
     * @example
     * // Update many FormData
     * const formData = await prisma.formData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormData and only return the `id`
     * const formDataWithIdOnly = await prisma.formData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormDataUpdateManyAndReturnArgs>(args: SelectSubset<T, FormDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormData.
     * @param {FormDataUpsertArgs} args - Arguments to update or create a FormData.
     * @example
     * // Update or create a FormData
     * const formData = await prisma.formData.upsert({
     *   create: {
     *     // ... data to create a FormData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormData we want to update
     *   }
     * })
     */
    upsert<T extends FormDataUpsertArgs>(args: SelectSubset<T, FormDataUpsertArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataCountArgs} args - Arguments to filter FormData to count.
     * @example
     * // Count the number of FormData
     * const count = await prisma.formData.count({
     *   where: {
     *     // ... the filter for the FormData we want to count
     *   }
     * })
    **/
    count<T extends FormDataCountArgs>(
      args?: Subset<T, FormDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormDataAggregateArgs>(args: Subset<T, FormDataAggregateArgs>): Prisma.PrismaPromise<GetFormDataAggregateType<T>>

    /**
     * Group by FormData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDataGroupByArgs} args - Group by arguments.
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
      T extends FormDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormDataGroupByArgs['orderBy'] }
        : { orderBy?: FormDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormData model
   */
  readonly fields: FormDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends FormData$questionsArgs<ExtArgs> = {}>(args?: Subset<T, FormData$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketPanels<T extends FormData$ticketPanelsArgs<ExtArgs> = {}>(args?: Subset<T, FormData$ticketPanelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormData model
   */
  interface FormDataFieldRefs {
    readonly id: FieldRef<"FormData", 'String'>
    readonly name: FieldRef<"FormData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FormData findUnique
   */
  export type FormDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter, which FormData to fetch.
     */
    where: FormDataWhereUniqueInput
  }

  /**
   * FormData findUniqueOrThrow
   */
  export type FormDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter, which FormData to fetch.
     */
    where: FormDataWhereUniqueInput
  }

  /**
   * FormData findFirst
   */
  export type FormDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter, which FormData to fetch.
     */
    where?: FormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormData to fetch.
     */
    orderBy?: FormDataOrderByWithRelationInput | FormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormData.
     */
    cursor?: FormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormData.
     */
    distinct?: FormDataScalarFieldEnum | FormDataScalarFieldEnum[]
  }

  /**
   * FormData findFirstOrThrow
   */
  export type FormDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter, which FormData to fetch.
     */
    where?: FormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormData to fetch.
     */
    orderBy?: FormDataOrderByWithRelationInput | FormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormData.
     */
    cursor?: FormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormData.
     */
    distinct?: FormDataScalarFieldEnum | FormDataScalarFieldEnum[]
  }

  /**
   * FormData findMany
   */
  export type FormDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter, which FormData to fetch.
     */
    where?: FormDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormData to fetch.
     */
    orderBy?: FormDataOrderByWithRelationInput | FormDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormData.
     */
    cursor?: FormDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormData.
     */
    skip?: number
    distinct?: FormDataScalarFieldEnum | FormDataScalarFieldEnum[]
  }

  /**
   * FormData create
   */
  export type FormDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * The data needed to create a FormData.
     */
    data: XOR<FormDataCreateInput, FormDataUncheckedCreateInput>
  }

  /**
   * FormData createMany
   */
  export type FormDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormData.
     */
    data: FormDataCreateManyInput | FormDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormData createManyAndReturn
   */
  export type FormDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * The data used to create many FormData.
     */
    data: FormDataCreateManyInput | FormDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormData update
   */
  export type FormDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * The data needed to update a FormData.
     */
    data: XOR<FormDataUpdateInput, FormDataUncheckedUpdateInput>
    /**
     * Choose, which FormData to update.
     */
    where: FormDataWhereUniqueInput
  }

  /**
   * FormData updateMany
   */
  export type FormDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormData.
     */
    data: XOR<FormDataUpdateManyMutationInput, FormDataUncheckedUpdateManyInput>
    /**
     * Filter which FormData to update
     */
    where?: FormDataWhereInput
    /**
     * Limit how many FormData to update.
     */
    limit?: number
  }

  /**
   * FormData updateManyAndReturn
   */
  export type FormDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * The data used to update FormData.
     */
    data: XOR<FormDataUpdateManyMutationInput, FormDataUncheckedUpdateManyInput>
    /**
     * Filter which FormData to update
     */
    where?: FormDataWhereInput
    /**
     * Limit how many FormData to update.
     */
    limit?: number
  }

  /**
   * FormData upsert
   */
  export type FormDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * The filter to search for the FormData to update in case it exists.
     */
    where: FormDataWhereUniqueInput
    /**
     * In case the FormData found by the `where` argument doesn't exist, create a new FormData with this data.
     */
    create: XOR<FormDataCreateInput, FormDataUncheckedCreateInput>
    /**
     * In case the FormData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormDataUpdateInput, FormDataUncheckedUpdateInput>
  }

  /**
   * FormData delete
   */
  export type FormDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
    /**
     * Filter which FormData to delete.
     */
    where: FormDataWhereUniqueInput
  }

  /**
   * FormData deleteMany
   */
  export type FormDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormData to delete
     */
    where?: FormDataWhereInput
    /**
     * Limit how many FormData to delete.
     */
    limit?: number
  }

  /**
   * FormData.questions
   */
  export type FormData$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * FormData.ticketPanels
   */
  export type FormData$ticketPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPanel
     */
    select?: TicketPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPanel
     */
    omit?: TicketPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPanelInclude<ExtArgs> | null
    where?: TicketPanelWhereInput
    orderBy?: TicketPanelOrderByWithRelationInput | TicketPanelOrderByWithRelationInput[]
    cursor?: TicketPanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPanelScalarFieldEnum | TicketPanelScalarFieldEnum[]
  }

  /**
   * FormData without action
   */
  export type FormDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormData
     */
    select?: FormDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormData
     */
    omit?: FormDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormDataInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    minLength: number | null
    maxLength: number | null
  }

  export type QuestionSumAggregateOutputType = {
    minLength: number | null
    maxLength: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    formId: string | null
    name: string | null
    placeholder: string | null
    required: boolean | null
    style: string | null
    minLength: number | null
    maxLength: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    name: string | null
    placeholder: string | null
    required: boolean | null
    style: string | null
    minLength: number | null
    maxLength: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    formId: number
    name: number
    placeholder: number
    required: number
    style: number
    minLength: number
    maxLength: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    minLength?: true
    maxLength?: true
  }

  export type QuestionSumAggregateInputType = {
    minLength?: true
    maxLength?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    formId?: true
    name?: true
    placeholder?: true
    required?: true
    style?: true
    minLength?: true
    maxLength?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    formId?: true
    name?: true
    placeholder?: true
    required?: true
    style?: true
    minLength?: true
    maxLength?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    formId?: true
    name?: true
    placeholder?: true
    required?: true
    style?: true
    minLength?: true
    maxLength?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    formId: string
    name: string
    placeholder: string | null
    required: boolean
    style: string
    minLength: number | null
    maxLength: number | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    name?: boolean
    placeholder?: boolean
    required?: boolean
    style?: boolean
    minLength?: boolean
    maxLength?: boolean
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    name?: boolean
    placeholder?: boolean
    required?: boolean
    style?: boolean
    minLength?: boolean
    maxLength?: boolean
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    name?: boolean
    placeholder?: boolean
    required?: boolean
    style?: boolean
    minLength?: boolean
    maxLength?: boolean
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    formId?: boolean
    name?: boolean
    placeholder?: boolean
    required?: boolean
    style?: boolean
    minLength?: boolean
    maxLength?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "name" | "placeholder" | "required" | "style" | "minLength" | "maxLength", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDataDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      form: Prisma.$FormDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      name: string
      placeholder: string | null
      required: boolean
      style: string
      minLength: number | null
      maxLength: number | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDataDefaultArgs<ExtArgs>>): Prisma__FormDataClient<$Result.GetResult<Prisma.$FormDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly formId: FieldRef<"Question", 'String'>
    readonly name: FieldRef<"Question", 'String'>
    readonly placeholder: FieldRef<"Question", 'String'>
    readonly required: FieldRef<"Question", 'Boolean'>
    readonly style: FieldRef<"Question", 'String'>
    readonly minLength: FieldRef<"Question", 'Int'>
    readonly maxLength: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model ButtonData
   */

  export type AggregateButtonData = {
    _count: ButtonDataCountAggregateOutputType | null
    _min: ButtonDataMinAggregateOutputType | null
    _max: ButtonDataMaxAggregateOutputType | null
  }

  export type ButtonDataMinAggregateOutputType = {
    id: string | null
    ticketPanelId: string | null
    name: string | null
    style: string | null
    emoji: string | null
  }

  export type ButtonDataMaxAggregateOutputType = {
    id: string | null
    ticketPanelId: string | null
    name: string | null
    style: string | null
    emoji: string | null
  }

  export type ButtonDataCountAggregateOutputType = {
    id: number
    ticketPanelId: number
    name: number
    style: number
    emoji: number
    config: number
    _all: number
  }


  export type ButtonDataMinAggregateInputType = {
    id?: true
    ticketPanelId?: true
    name?: true
    style?: true
    emoji?: true
  }

  export type ButtonDataMaxAggregateInputType = {
    id?: true
    ticketPanelId?: true
    name?: true
    style?: true
    emoji?: true
  }

  export type ButtonDataCountAggregateInputType = {
    id?: true
    ticketPanelId?: true
    name?: true
    style?: true
    emoji?: true
    config?: true
    _all?: true
  }

  export type ButtonDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonData to aggregate.
     */
    where?: ButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonData to fetch.
     */
    orderBy?: ButtonDataOrderByWithRelationInput | ButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ButtonData
    **/
    _count?: true | ButtonDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ButtonDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ButtonDataMaxAggregateInputType
  }

  export type GetButtonDataAggregateType<T extends ButtonDataAggregateArgs> = {
        [P in keyof T & keyof AggregateButtonData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateButtonData[P]>
      : GetScalarType<T[P], AggregateButtonData[P]>
  }




  export type ButtonDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ButtonDataWhereInput
    orderBy?: ButtonDataOrderByWithAggregationInput | ButtonDataOrderByWithAggregationInput[]
    by: ButtonDataScalarFieldEnum[] | ButtonDataScalarFieldEnum
    having?: ButtonDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ButtonDataCountAggregateInputType | true
    _min?: ButtonDataMinAggregateInputType
    _max?: ButtonDataMaxAggregateInputType
  }

  export type ButtonDataGroupByOutputType = {
    id: string
    ticketPanelId: string
    name: string
    style: string
    emoji: string | null
    config: JsonValue | null
    _count: ButtonDataCountAggregateOutputType | null
    _min: ButtonDataMinAggregateOutputType | null
    _max: ButtonDataMaxAggregateOutputType | null
  }

  type GetButtonDataGroupByPayload<T extends ButtonDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ButtonDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ButtonDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ButtonDataGroupByOutputType[P]>
            : GetScalarType<T[P], ButtonDataGroupByOutputType[P]>
        }
      >
    >


  export type ButtonDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketPanelId?: boolean
    name?: boolean
    style?: boolean
    emoji?: boolean
    config?: boolean
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buttonData"]>

  export type ButtonDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketPanelId?: boolean
    name?: boolean
    style?: boolean
    emoji?: boolean
    config?: boolean
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buttonData"]>

  export type ButtonDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketPanelId?: boolean
    name?: boolean
    style?: boolean
    emoji?: boolean
    config?: boolean
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buttonData"]>

  export type ButtonDataSelectScalar = {
    id?: boolean
    ticketPanelId?: boolean
    name?: boolean
    style?: boolean
    emoji?: boolean
    config?: boolean
  }

  export type ButtonDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketPanelId" | "name" | "style" | "emoji" | "config", ExtArgs["result"]["buttonData"]>
  export type ButtonDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }
  export type ButtonDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }
  export type ButtonDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketPanel?: boolean | TicketPanelDefaultArgs<ExtArgs>
  }

  export type $ButtonDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ButtonData"
    objects: {
      ticketPanel: Prisma.$TicketPanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketPanelId: string
      name: string
      style: string
      emoji: string | null
      config: Prisma.JsonValue | null
    }, ExtArgs["result"]["buttonData"]>
    composites: {}
  }

  type ButtonDataGetPayload<S extends boolean | null | undefined | ButtonDataDefaultArgs> = $Result.GetResult<Prisma.$ButtonDataPayload, S>

  type ButtonDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ButtonDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ButtonDataCountAggregateInputType | true
    }

  export interface ButtonDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ButtonData'], meta: { name: 'ButtonData' } }
    /**
     * Find zero or one ButtonData that matches the filter.
     * @param {ButtonDataFindUniqueArgs} args - Arguments to find a ButtonData
     * @example
     * // Get one ButtonData
     * const buttonData = await prisma.buttonData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ButtonDataFindUniqueArgs>(args: SelectSubset<T, ButtonDataFindUniqueArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ButtonData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ButtonDataFindUniqueOrThrowArgs} args - Arguments to find a ButtonData
     * @example
     * // Get one ButtonData
     * const buttonData = await prisma.buttonData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ButtonDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ButtonDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ButtonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataFindFirstArgs} args - Arguments to find a ButtonData
     * @example
     * // Get one ButtonData
     * const buttonData = await prisma.buttonData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ButtonDataFindFirstArgs>(args?: SelectSubset<T, ButtonDataFindFirstArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ButtonData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataFindFirstOrThrowArgs} args - Arguments to find a ButtonData
     * @example
     * // Get one ButtonData
     * const buttonData = await prisma.buttonData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ButtonDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ButtonDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ButtonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ButtonData
     * const buttonData = await prisma.buttonData.findMany()
     * 
     * // Get first 10 ButtonData
     * const buttonData = await prisma.buttonData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buttonDataWithIdOnly = await prisma.buttonData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ButtonDataFindManyArgs>(args?: SelectSubset<T, ButtonDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ButtonData.
     * @param {ButtonDataCreateArgs} args - Arguments to create a ButtonData.
     * @example
     * // Create one ButtonData
     * const ButtonData = await prisma.buttonData.create({
     *   data: {
     *     // ... data to create a ButtonData
     *   }
     * })
     * 
     */
    create<T extends ButtonDataCreateArgs>(args: SelectSubset<T, ButtonDataCreateArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ButtonData.
     * @param {ButtonDataCreateManyArgs} args - Arguments to create many ButtonData.
     * @example
     * // Create many ButtonData
     * const buttonData = await prisma.buttonData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ButtonDataCreateManyArgs>(args?: SelectSubset<T, ButtonDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ButtonData and returns the data saved in the database.
     * @param {ButtonDataCreateManyAndReturnArgs} args - Arguments to create many ButtonData.
     * @example
     * // Create many ButtonData
     * const buttonData = await prisma.buttonData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ButtonData and only return the `id`
     * const buttonDataWithIdOnly = await prisma.buttonData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ButtonDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ButtonDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ButtonData.
     * @param {ButtonDataDeleteArgs} args - Arguments to delete one ButtonData.
     * @example
     * // Delete one ButtonData
     * const ButtonData = await prisma.buttonData.delete({
     *   where: {
     *     // ... filter to delete one ButtonData
     *   }
     * })
     * 
     */
    delete<T extends ButtonDataDeleteArgs>(args: SelectSubset<T, ButtonDataDeleteArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ButtonData.
     * @param {ButtonDataUpdateArgs} args - Arguments to update one ButtonData.
     * @example
     * // Update one ButtonData
     * const buttonData = await prisma.buttonData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ButtonDataUpdateArgs>(args: SelectSubset<T, ButtonDataUpdateArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ButtonData.
     * @param {ButtonDataDeleteManyArgs} args - Arguments to filter ButtonData to delete.
     * @example
     * // Delete a few ButtonData
     * const { count } = await prisma.buttonData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ButtonDataDeleteManyArgs>(args?: SelectSubset<T, ButtonDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ButtonData
     * const buttonData = await prisma.buttonData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ButtonDataUpdateManyArgs>(args: SelectSubset<T, ButtonDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ButtonData and returns the data updated in the database.
     * @param {ButtonDataUpdateManyAndReturnArgs} args - Arguments to update many ButtonData.
     * @example
     * // Update many ButtonData
     * const buttonData = await prisma.buttonData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ButtonData and only return the `id`
     * const buttonDataWithIdOnly = await prisma.buttonData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ButtonDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ButtonDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ButtonData.
     * @param {ButtonDataUpsertArgs} args - Arguments to update or create a ButtonData.
     * @example
     * // Update or create a ButtonData
     * const buttonData = await prisma.buttonData.upsert({
     *   create: {
     *     // ... data to create a ButtonData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ButtonData we want to update
     *   }
     * })
     */
    upsert<T extends ButtonDataUpsertArgs>(args: SelectSubset<T, ButtonDataUpsertArgs<ExtArgs>>): Prisma__ButtonDataClient<$Result.GetResult<Prisma.$ButtonDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataCountArgs} args - Arguments to filter ButtonData to count.
     * @example
     * // Count the number of ButtonData
     * const count = await prisma.buttonData.count({
     *   where: {
     *     // ... the filter for the ButtonData we want to count
     *   }
     * })
    **/
    count<T extends ButtonDataCountArgs>(
      args?: Subset<T, ButtonDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ButtonDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ButtonDataAggregateArgs>(args: Subset<T, ButtonDataAggregateArgs>): Prisma.PrismaPromise<GetButtonDataAggregateType<T>>

    /**
     * Group by ButtonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonDataGroupByArgs} args - Group by arguments.
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
      T extends ButtonDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ButtonDataGroupByArgs['orderBy'] }
        : { orderBy?: ButtonDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ButtonDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetButtonDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ButtonData model
   */
  readonly fields: ButtonDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ButtonData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ButtonDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketPanel<T extends TicketPanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketPanelDefaultArgs<ExtArgs>>): Prisma__TicketPanelClient<$Result.GetResult<Prisma.$TicketPanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ButtonData model
   */
  interface ButtonDataFieldRefs {
    readonly id: FieldRef<"ButtonData", 'String'>
    readonly ticketPanelId: FieldRef<"ButtonData", 'String'>
    readonly name: FieldRef<"ButtonData", 'String'>
    readonly style: FieldRef<"ButtonData", 'String'>
    readonly emoji: FieldRef<"ButtonData", 'String'>
    readonly config: FieldRef<"ButtonData", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ButtonData findUnique
   */
  export type ButtonDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter, which ButtonData to fetch.
     */
    where: ButtonDataWhereUniqueInput
  }

  /**
   * ButtonData findUniqueOrThrow
   */
  export type ButtonDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter, which ButtonData to fetch.
     */
    where: ButtonDataWhereUniqueInput
  }

  /**
   * ButtonData findFirst
   */
  export type ButtonDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter, which ButtonData to fetch.
     */
    where?: ButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonData to fetch.
     */
    orderBy?: ButtonDataOrderByWithRelationInput | ButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonData.
     */
    cursor?: ButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonData.
     */
    distinct?: ButtonDataScalarFieldEnum | ButtonDataScalarFieldEnum[]
  }

  /**
   * ButtonData findFirstOrThrow
   */
  export type ButtonDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter, which ButtonData to fetch.
     */
    where?: ButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonData to fetch.
     */
    orderBy?: ButtonDataOrderByWithRelationInput | ButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonData.
     */
    cursor?: ButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonData.
     */
    distinct?: ButtonDataScalarFieldEnum | ButtonDataScalarFieldEnum[]
  }

  /**
   * ButtonData findMany
   */
  export type ButtonDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter, which ButtonData to fetch.
     */
    where?: ButtonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonData to fetch.
     */
    orderBy?: ButtonDataOrderByWithRelationInput | ButtonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ButtonData.
     */
    cursor?: ButtonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonData.
     */
    skip?: number
    distinct?: ButtonDataScalarFieldEnum | ButtonDataScalarFieldEnum[]
  }

  /**
   * ButtonData create
   */
  export type ButtonDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ButtonData.
     */
    data: XOR<ButtonDataCreateInput, ButtonDataUncheckedCreateInput>
  }

  /**
   * ButtonData createMany
   */
  export type ButtonDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ButtonData.
     */
    data: ButtonDataCreateManyInput | ButtonDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ButtonData createManyAndReturn
   */
  export type ButtonDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * The data used to create many ButtonData.
     */
    data: ButtonDataCreateManyInput | ButtonDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ButtonData update
   */
  export type ButtonDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ButtonData.
     */
    data: XOR<ButtonDataUpdateInput, ButtonDataUncheckedUpdateInput>
    /**
     * Choose, which ButtonData to update.
     */
    where: ButtonDataWhereUniqueInput
  }

  /**
   * ButtonData updateMany
   */
  export type ButtonDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ButtonData.
     */
    data: XOR<ButtonDataUpdateManyMutationInput, ButtonDataUncheckedUpdateManyInput>
    /**
     * Filter which ButtonData to update
     */
    where?: ButtonDataWhereInput
    /**
     * Limit how many ButtonData to update.
     */
    limit?: number
  }

  /**
   * ButtonData updateManyAndReturn
   */
  export type ButtonDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * The data used to update ButtonData.
     */
    data: XOR<ButtonDataUpdateManyMutationInput, ButtonDataUncheckedUpdateManyInput>
    /**
     * Filter which ButtonData to update
     */
    where?: ButtonDataWhereInput
    /**
     * Limit how many ButtonData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ButtonData upsert
   */
  export type ButtonDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ButtonData to update in case it exists.
     */
    where: ButtonDataWhereUniqueInput
    /**
     * In case the ButtonData found by the `where` argument doesn't exist, create a new ButtonData with this data.
     */
    create: XOR<ButtonDataCreateInput, ButtonDataUncheckedCreateInput>
    /**
     * In case the ButtonData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ButtonDataUpdateInput, ButtonDataUncheckedUpdateInput>
  }

  /**
   * ButtonData delete
   */
  export type ButtonDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
    /**
     * Filter which ButtonData to delete.
     */
    where: ButtonDataWhereUniqueInput
  }

  /**
   * ButtonData deleteMany
   */
  export type ButtonDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonData to delete
     */
    where?: ButtonDataWhereInput
    /**
     * Limit how many ButtonData to delete.
     */
    limit?: number
  }

  /**
   * ButtonData without action
   */
  export type ButtonDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonData
     */
    select?: ButtonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ButtonData
     */
    omit?: ButtonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ButtonDataInclude<ExtArgs> | null
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


  export const GuildScalarFieldEnum: {
    id: 'id',
    config: 'config',
    createdAt: 'createdAt'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const PanelScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    type: 'type',
    placeholder: 'placeholder',
    templateId: 'templateId',
    embed: 'embed',
    createdAt: 'createdAt'
  };

  export type PanelScalarFieldEnum = (typeof PanelScalarFieldEnum)[keyof typeof PanelScalarFieldEnum]


  export const PanelTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type PanelTemplateScalarFieldEnum = (typeof PanelTemplateScalarFieldEnum)[keyof typeof PanelTemplateScalarFieldEnum]


  export const TicketPanelScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    name: 'name',
    description: 'description',
    emoji: 'emoji',
    style: 'style',
    hasForm: 'hasForm',
    maintenance: 'maintenance',
    status: 'status',
    formId: 'formId',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type TicketPanelScalarFieldEnum = (typeof TicketPanelScalarFieldEnum)[keyof typeof TicketPanelScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    claimer: 'claimer',
    status: 'status',
    embed: 'embed',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const FormDataScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FormDataScalarFieldEnum = (typeof FormDataScalarFieldEnum)[keyof typeof FormDataScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    name: 'name',
    placeholder: 'placeholder',
    required: 'required',
    style: 'style',
    minLength: 'minLength',
    maxLength: 'maxLength'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ButtonDataScalarFieldEnum: {
    id: 'id',
    ticketPanelId: 'ticketPanelId',
    name: 'name',
    style: 'style',
    emoji: 'emoji',
    config: 'config'
  };

  export type ButtonDataScalarFieldEnum = (typeof ButtonDataScalarFieldEnum)[keyof typeof ButtonDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PanelType'
   */
  export type EnumPanelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PanelType'>
    


  /**
   * Reference to a field of type 'PanelType[]'
   */
  export type ListEnumPanelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PanelType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    id?: StringFilter<"Guild"> | string
    config?: JsonNullableFilter<"Guild">
    createdAt?: DateTimeFilter<"Guild"> | Date | string
    panels?: PanelListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    id?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    panels?: PanelOrderByRelationAggregateInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    config?: JsonNullableFilter<"Guild">
    createdAt?: DateTimeFilter<"Guild"> | Date | string
    panels?: PanelListRelationFilter
  }, "id">

  export type GuildOrderByWithAggregationInput = {
    id?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guild"> | string
    config?: JsonNullableWithAggregatesFilter<"Guild">
    createdAt?: DateTimeWithAggregatesFilter<"Guild"> | Date | string
  }

  export type PanelWhereInput = {
    AND?: PanelWhereInput | PanelWhereInput[]
    OR?: PanelWhereInput[]
    NOT?: PanelWhereInput | PanelWhereInput[]
    id?: StringFilter<"Panel"> | string
    guildId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    type?: EnumPanelTypeFilter<"Panel"> | $Enums.PanelType
    placeholder?: StringNullableFilter<"Panel"> | string | null
    templateId?: StringNullableFilter<"Panel"> | string | null
    embed?: JsonNullableFilter<"Panel">
    createdAt?: DateTimeFilter<"Panel"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    template?: XOR<PanelTemplateNullableScalarRelationFilter, PanelTemplateWhereInput> | null
    ticketPanels?: TicketPanelListRelationFilter
  }

  export type PanelOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    embed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guild?: GuildOrderByWithRelationInput
    template?: PanelTemplateOrderByWithRelationInput
    ticketPanels?: TicketPanelOrderByRelationAggregateInput
  }

  export type PanelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PanelWhereInput | PanelWhereInput[]
    OR?: PanelWhereInput[]
    NOT?: PanelWhereInput | PanelWhereInput[]
    guildId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    type?: EnumPanelTypeFilter<"Panel"> | $Enums.PanelType
    placeholder?: StringNullableFilter<"Panel"> | string | null
    templateId?: StringNullableFilter<"Panel"> | string | null
    embed?: JsonNullableFilter<"Panel">
    createdAt?: DateTimeFilter<"Panel"> | Date | string
    guild?: XOR<GuildScalarRelationFilter, GuildWhereInput>
    template?: XOR<PanelTemplateNullableScalarRelationFilter, PanelTemplateWhereInput> | null
    ticketPanels?: TicketPanelListRelationFilter
  }, "id">

  export type PanelOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    embed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PanelCountOrderByAggregateInput
    _max?: PanelMaxOrderByAggregateInput
    _min?: PanelMinOrderByAggregateInput
  }

  export type PanelScalarWhereWithAggregatesInput = {
    AND?: PanelScalarWhereWithAggregatesInput | PanelScalarWhereWithAggregatesInput[]
    OR?: PanelScalarWhereWithAggregatesInput[]
    NOT?: PanelScalarWhereWithAggregatesInput | PanelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Panel"> | string
    guildId?: StringWithAggregatesFilter<"Panel"> | string
    name?: StringWithAggregatesFilter<"Panel"> | string
    type?: EnumPanelTypeWithAggregatesFilter<"Panel"> | $Enums.PanelType
    placeholder?: StringNullableWithAggregatesFilter<"Panel"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"Panel"> | string | null
    embed?: JsonNullableWithAggregatesFilter<"Panel">
    createdAt?: DateTimeWithAggregatesFilter<"Panel"> | Date | string
  }

  export type PanelTemplateWhereInput = {
    AND?: PanelTemplateWhereInput | PanelTemplateWhereInput[]
    OR?: PanelTemplateWhereInput[]
    NOT?: PanelTemplateWhereInput | PanelTemplateWhereInput[]
    id?: StringFilter<"PanelTemplate"> | string
    name?: StringFilter<"PanelTemplate"> | string
    data?: JsonNullableFilter<"PanelTemplate">
    createdAt?: DateTimeFilter<"PanelTemplate"> | Date | string
    panels?: PanelListRelationFilter
  }

  export type PanelTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    panels?: PanelOrderByRelationAggregateInput
  }

  export type PanelTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PanelTemplateWhereInput | PanelTemplateWhereInput[]
    OR?: PanelTemplateWhereInput[]
    NOT?: PanelTemplateWhereInput | PanelTemplateWhereInput[]
    name?: StringFilter<"PanelTemplate"> | string
    data?: JsonNullableFilter<"PanelTemplate">
    createdAt?: DateTimeFilter<"PanelTemplate"> | Date | string
    panels?: PanelListRelationFilter
  }, "id">

  export type PanelTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PanelTemplateCountOrderByAggregateInput
    _max?: PanelTemplateMaxOrderByAggregateInput
    _min?: PanelTemplateMinOrderByAggregateInput
  }

  export type PanelTemplateScalarWhereWithAggregatesInput = {
    AND?: PanelTemplateScalarWhereWithAggregatesInput | PanelTemplateScalarWhereWithAggregatesInput[]
    OR?: PanelTemplateScalarWhereWithAggregatesInput[]
    NOT?: PanelTemplateScalarWhereWithAggregatesInput | PanelTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PanelTemplate"> | string
    name?: StringWithAggregatesFilter<"PanelTemplate"> | string
    data?: JsonNullableWithAggregatesFilter<"PanelTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"PanelTemplate"> | Date | string
  }

  export type TicketPanelWhereInput = {
    AND?: TicketPanelWhereInput | TicketPanelWhereInput[]
    OR?: TicketPanelWhereInput[]
    NOT?: TicketPanelWhereInput | TicketPanelWhereInput[]
    id?: StringFilter<"TicketPanel"> | string
    panelId?: StringFilter<"TicketPanel"> | string
    name?: StringFilter<"TicketPanel"> | string
    description?: StringNullableFilter<"TicketPanel"> | string | null
    emoji?: StringNullableFilter<"TicketPanel"> | string | null
    style?: StringFilter<"TicketPanel"> | string
    hasForm?: BoolFilter<"TicketPanel"> | boolean
    maintenance?: BoolFilter<"TicketPanel"> | boolean
    status?: BoolFilter<"TicketPanel"> | boolean
    formId?: StringNullableFilter<"TicketPanel"> | string | null
    data?: JsonNullableFilter<"TicketPanel">
    createdAt?: DateTimeFilter<"TicketPanel"> | Date | string
    panel?: XOR<PanelScalarRelationFilter, PanelWhereInput>
    form?: XOR<FormDataNullableScalarRelationFilter, FormDataWhereInput> | null
    buttons?: ButtonDataListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type TicketPanelOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    emoji?: SortOrderInput | SortOrder
    style?: SortOrder
    hasForm?: SortOrder
    maintenance?: SortOrder
    status?: SortOrder
    formId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    panel?: PanelOrderByWithRelationInput
    form?: FormDataOrderByWithRelationInput
    buttons?: ButtonDataOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type TicketPanelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketPanelWhereInput | TicketPanelWhereInput[]
    OR?: TicketPanelWhereInput[]
    NOT?: TicketPanelWhereInput | TicketPanelWhereInput[]
    panelId?: StringFilter<"TicketPanel"> | string
    name?: StringFilter<"TicketPanel"> | string
    description?: StringNullableFilter<"TicketPanel"> | string | null
    emoji?: StringNullableFilter<"TicketPanel"> | string | null
    style?: StringFilter<"TicketPanel"> | string
    hasForm?: BoolFilter<"TicketPanel"> | boolean
    maintenance?: BoolFilter<"TicketPanel"> | boolean
    status?: BoolFilter<"TicketPanel"> | boolean
    formId?: StringNullableFilter<"TicketPanel"> | string | null
    data?: JsonNullableFilter<"TicketPanel">
    createdAt?: DateTimeFilter<"TicketPanel"> | Date | string
    panel?: XOR<PanelScalarRelationFilter, PanelWhereInput>
    form?: XOR<FormDataNullableScalarRelationFilter, FormDataWhereInput> | null
    buttons?: ButtonDataListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type TicketPanelOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    emoji?: SortOrderInput | SortOrder
    style?: SortOrder
    hasForm?: SortOrder
    maintenance?: SortOrder
    status?: SortOrder
    formId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketPanelCountOrderByAggregateInput
    _max?: TicketPanelMaxOrderByAggregateInput
    _min?: TicketPanelMinOrderByAggregateInput
  }

  export type TicketPanelScalarWhereWithAggregatesInput = {
    AND?: TicketPanelScalarWhereWithAggregatesInput | TicketPanelScalarWhereWithAggregatesInput[]
    OR?: TicketPanelScalarWhereWithAggregatesInput[]
    NOT?: TicketPanelScalarWhereWithAggregatesInput | TicketPanelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketPanel"> | string
    panelId?: StringWithAggregatesFilter<"TicketPanel"> | string
    name?: StringWithAggregatesFilter<"TicketPanel"> | string
    description?: StringNullableWithAggregatesFilter<"TicketPanel"> | string | null
    emoji?: StringNullableWithAggregatesFilter<"TicketPanel"> | string | null
    style?: StringWithAggregatesFilter<"TicketPanel"> | string
    hasForm?: BoolWithAggregatesFilter<"TicketPanel"> | boolean
    maintenance?: BoolWithAggregatesFilter<"TicketPanel"> | boolean
    status?: BoolWithAggregatesFilter<"TicketPanel"> | boolean
    formId?: StringNullableWithAggregatesFilter<"TicketPanel"> | string | null
    data?: JsonNullableWithAggregatesFilter<"TicketPanel">
    createdAt?: DateTimeWithAggregatesFilter<"TicketPanel"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    panelId?: StringFilter<"Ticket"> | string
    claimer?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    embed?: JsonNullableFilter<"Ticket">
    data?: JsonNullableFilter<"Ticket">
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    panel?: XOR<TicketPanelScalarRelationFilter, TicketPanelWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    claimer?: SortOrderInput | SortOrder
    status?: SortOrder
    embed?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    panel?: TicketPanelOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    panelId?: StringFilter<"Ticket"> | string
    claimer?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    embed?: JsonNullableFilter<"Ticket">
    data?: JsonNullableFilter<"Ticket">
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    panel?: XOR<TicketPanelScalarRelationFilter, TicketPanelWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    claimer?: SortOrderInput | SortOrder
    status?: SortOrder
    embed?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    panelId?: StringWithAggregatesFilter<"Ticket"> | string
    claimer?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    embed?: JsonNullableWithAggregatesFilter<"Ticket">
    data?: JsonNullableWithAggregatesFilter<"Ticket">
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type FormDataWhereInput = {
    AND?: FormDataWhereInput | FormDataWhereInput[]
    OR?: FormDataWhereInput[]
    NOT?: FormDataWhereInput | FormDataWhereInput[]
    id?: StringFilter<"FormData"> | string
    name?: StringFilter<"FormData"> | string
    questions?: QuestionListRelationFilter
    ticketPanels?: TicketPanelListRelationFilter
  }

  export type FormDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    ticketPanels?: TicketPanelOrderByRelationAggregateInput
  }

  export type FormDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormDataWhereInput | FormDataWhereInput[]
    OR?: FormDataWhereInput[]
    NOT?: FormDataWhereInput | FormDataWhereInput[]
    name?: StringFilter<"FormData"> | string
    questions?: QuestionListRelationFilter
    ticketPanels?: TicketPanelListRelationFilter
  }, "id">

  export type FormDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FormDataCountOrderByAggregateInput
    _max?: FormDataMaxOrderByAggregateInput
    _min?: FormDataMinOrderByAggregateInput
  }

  export type FormDataScalarWhereWithAggregatesInput = {
    AND?: FormDataScalarWhereWithAggregatesInput | FormDataScalarWhereWithAggregatesInput[]
    OR?: FormDataScalarWhereWithAggregatesInput[]
    NOT?: FormDataScalarWhereWithAggregatesInput | FormDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormData"> | string
    name?: StringWithAggregatesFilter<"FormData"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    formId?: StringFilter<"Question"> | string
    name?: StringFilter<"Question"> | string
    placeholder?: StringNullableFilter<"Question"> | string | null
    required?: BoolFilter<"Question"> | boolean
    style?: StringFilter<"Question"> | string
    minLength?: IntNullableFilter<"Question"> | number | null
    maxLength?: IntNullableFilter<"Question"> | number | null
    form?: XOR<FormDataScalarRelationFilter, FormDataWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    name?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    style?: SortOrder
    minLength?: SortOrderInput | SortOrder
    maxLength?: SortOrderInput | SortOrder
    form?: FormDataOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    formId?: StringFilter<"Question"> | string
    name?: StringFilter<"Question"> | string
    placeholder?: StringNullableFilter<"Question"> | string | null
    required?: BoolFilter<"Question"> | boolean
    style?: StringFilter<"Question"> | string
    minLength?: IntNullableFilter<"Question"> | number | null
    maxLength?: IntNullableFilter<"Question"> | number | null
    form?: XOR<FormDataScalarRelationFilter, FormDataWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    name?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    style?: SortOrder
    minLength?: SortOrderInput | SortOrder
    maxLength?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    formId?: StringWithAggregatesFilter<"Question"> | string
    name?: StringWithAggregatesFilter<"Question"> | string
    placeholder?: StringNullableWithAggregatesFilter<"Question"> | string | null
    required?: BoolWithAggregatesFilter<"Question"> | boolean
    style?: StringWithAggregatesFilter<"Question"> | string
    minLength?: IntNullableWithAggregatesFilter<"Question"> | number | null
    maxLength?: IntNullableWithAggregatesFilter<"Question"> | number | null
  }

  export type ButtonDataWhereInput = {
    AND?: ButtonDataWhereInput | ButtonDataWhereInput[]
    OR?: ButtonDataWhereInput[]
    NOT?: ButtonDataWhereInput | ButtonDataWhereInput[]
    id?: StringFilter<"ButtonData"> | string
    ticketPanelId?: StringFilter<"ButtonData"> | string
    name?: StringFilter<"ButtonData"> | string
    style?: StringFilter<"ButtonData"> | string
    emoji?: StringNullableFilter<"ButtonData"> | string | null
    config?: JsonNullableFilter<"ButtonData">
    ticketPanel?: XOR<TicketPanelScalarRelationFilter, TicketPanelWhereInput>
  }

  export type ButtonDataOrderByWithRelationInput = {
    id?: SortOrder
    ticketPanelId?: SortOrder
    name?: SortOrder
    style?: SortOrder
    emoji?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    ticketPanel?: TicketPanelOrderByWithRelationInput
  }

  export type ButtonDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ButtonDataWhereInput | ButtonDataWhereInput[]
    OR?: ButtonDataWhereInput[]
    NOT?: ButtonDataWhereInput | ButtonDataWhereInput[]
    ticketPanelId?: StringFilter<"ButtonData"> | string
    name?: StringFilter<"ButtonData"> | string
    style?: StringFilter<"ButtonData"> | string
    emoji?: StringNullableFilter<"ButtonData"> | string | null
    config?: JsonNullableFilter<"ButtonData">
    ticketPanel?: XOR<TicketPanelScalarRelationFilter, TicketPanelWhereInput>
  }, "id">

  export type ButtonDataOrderByWithAggregationInput = {
    id?: SortOrder
    ticketPanelId?: SortOrder
    name?: SortOrder
    style?: SortOrder
    emoji?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    _count?: ButtonDataCountOrderByAggregateInput
    _max?: ButtonDataMaxOrderByAggregateInput
    _min?: ButtonDataMinOrderByAggregateInput
  }

  export type ButtonDataScalarWhereWithAggregatesInput = {
    AND?: ButtonDataScalarWhereWithAggregatesInput | ButtonDataScalarWhereWithAggregatesInput[]
    OR?: ButtonDataScalarWhereWithAggregatesInput[]
    NOT?: ButtonDataScalarWhereWithAggregatesInput | ButtonDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ButtonData"> | string
    ticketPanelId?: StringWithAggregatesFilter<"ButtonData"> | string
    name?: StringWithAggregatesFilter<"ButtonData"> | string
    style?: StringWithAggregatesFilter<"ButtonData"> | string
    emoji?: StringNullableWithAggregatesFilter<"ButtonData"> | string | null
    config?: JsonNullableWithAggregatesFilter<"ButtonData">
  }

  export type GuildCreateInput = {
    id?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panels?: PanelCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    id?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    id?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelCreateInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutPanelsInput
    template?: PanelTemplateCreateNestedOneWithoutPanelsInput
    ticketPanels?: TicketPanelCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateInput = {
    id?: string
    guildId: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    templateId?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    ticketPanels?: TicketPanelUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPanelsNestedInput
    template?: PanelTemplateUpdateOneWithoutPanelsNestedInput
    ticketPanels?: TicketPanelUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPanels?: TicketPanelUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelCreateManyInput = {
    id?: string
    guildId: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    templateId?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelTemplateCreateInput = {
    id?: string
    name: string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panels?: PanelCreateNestedManyWithoutTemplateInput
  }

  export type PanelTemplateUncheckedCreateInput = {
    id?: string
    name: string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type PanelTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutTemplateNestedInput
  }

  export type PanelTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type PanelTemplateCreateManyInput = {
    id?: string
    name: string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPanelCreateInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panel: PanelCreateNestedOneWithoutTicketPanelsInput
    form?: FormDataCreateNestedOneWithoutTicketPanelsInput
    buttons?: ButtonDataCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelUncheckedCreateInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    buttons?: ButtonDataUncheckedCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutTicketPanelsNestedInput
    form?: FormDataUpdateOneWithoutTicketPanelsNestedInput
    buttons?: ButtonDataUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buttons?: ButtonDataUncheckedUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelCreateManyInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketPanelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPanelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panel: TicketPanelCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id: string
    panelId: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: TicketPanelUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id: string
    panelId: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormDataCreateInput = {
    id?: string
    name: string
    questions?: QuestionCreateNestedManyWithoutFormInput
    ticketPanels?: TicketPanelCreateNestedManyWithoutFormInput
  }

  export type FormDataUncheckedCreateInput = {
    id?: string
    name: string
    questions?: QuestionUncheckedCreateNestedManyWithoutFormInput
    ticketPanels?: TicketPanelUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutFormNestedInput
    ticketPanels?: TicketPanelUpdateManyWithoutFormNestedInput
  }

  export type FormDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutFormNestedInput
    ticketPanels?: TicketPanelUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormDataCreateManyInput = {
    id?: string
    name: string
  }

  export type FormDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FormDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
    form: FormDataCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    formId: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
    form?: FormDataUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionCreateManyInput = {
    id?: string
    formId: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ButtonDataCreateInput = {
    id?: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    ticketPanel: TicketPanelCreateNestedOneWithoutButtonsInput
  }

  export type ButtonDataUncheckedCreateInput = {
    id?: string
    ticketPanelId: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    ticketPanel?: TicketPanelUpdateOneRequiredWithoutButtonsNestedInput
  }

  export type ButtonDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataCreateManyInput = {
    id?: string
    ticketPanelId: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PanelListRelationFilter = {
    every?: PanelWhereInput
    some?: PanelWhereInput
    none?: PanelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildCountOrderByAggregateInput = {
    id?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPanelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PanelType | EnumPanelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPanelTypeFilter<$PrismaModel> | $Enums.PanelType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GuildScalarRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type PanelTemplateNullableScalarRelationFilter = {
    is?: PanelTemplateWhereInput | null
    isNot?: PanelTemplateWhereInput | null
  }

  export type TicketPanelListRelationFilter = {
    every?: TicketPanelWhereInput
    some?: TicketPanelWhereInput
    none?: TicketPanelWhereInput
  }

  export type TicketPanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanelCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    templateId?: SortOrder
    embed?: SortOrder
    createdAt?: SortOrder
  }

  export type PanelMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
  }

  export type PanelMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPanelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PanelType | EnumPanelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPanelTypeWithAggregatesFilter<$PrismaModel> | $Enums.PanelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPanelTypeFilter<$PrismaModel>
    _max?: NestedEnumPanelTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PanelTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PanelTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PanelTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PanelScalarRelationFilter = {
    is?: PanelWhereInput
    isNot?: PanelWhereInput
  }

  export type FormDataNullableScalarRelationFilter = {
    is?: FormDataWhereInput | null
    isNot?: FormDataWhereInput | null
  }

  export type ButtonDataListRelationFilter = {
    every?: ButtonDataWhereInput
    some?: ButtonDataWhereInput
    none?: ButtonDataWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type ButtonDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketPanelCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    emoji?: SortOrder
    style?: SortOrder
    hasForm?: SortOrder
    maintenance?: SortOrder
    status?: SortOrder
    formId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketPanelMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    emoji?: SortOrder
    style?: SortOrder
    hasForm?: SortOrder
    maintenance?: SortOrder
    status?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketPanelMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    emoji?: SortOrder
    style?: SortOrder
    hasForm?: SortOrder
    maintenance?: SortOrder
    status?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type TicketPanelScalarRelationFilter = {
    is?: TicketPanelWhereInput
    isNot?: TicketPanelWhereInput
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    claimer?: SortOrder
    status?: SortOrder
    embed?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    claimer?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    claimer?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FormDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FormDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FormDataScalarRelationFilter = {
    is?: FormDataWhereInput
    isNot?: FormDataWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    name?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    style?: SortOrder
    minLength?: SortOrder
    maxLength?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    minLength?: SortOrder
    maxLength?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    name?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    style?: SortOrder
    minLength?: SortOrder
    maxLength?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    name?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    style?: SortOrder
    minLength?: SortOrder
    maxLength?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    minLength?: SortOrder
    maxLength?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ButtonDataCountOrderByAggregateInput = {
    id?: SortOrder
    ticketPanelId?: SortOrder
    name?: SortOrder
    style?: SortOrder
    emoji?: SortOrder
    config?: SortOrder
  }

  export type ButtonDataMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketPanelId?: SortOrder
    name?: SortOrder
    style?: SortOrder
    emoji?: SortOrder
  }

  export type ButtonDataMinOrderByAggregateInput = {
    id?: SortOrder
    ticketPanelId?: SortOrder
    name?: SortOrder
    style?: SortOrder
    emoji?: SortOrder
  }

  export type PanelCreateNestedManyWithoutGuildInput = {
    create?: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput> | PanelCreateWithoutGuildInput[] | PanelUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutGuildInput | PanelCreateOrConnectWithoutGuildInput[]
    createMany?: PanelCreateManyGuildInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type PanelUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput> | PanelCreateWithoutGuildInput[] | PanelUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutGuildInput | PanelCreateOrConnectWithoutGuildInput[]
    createMany?: PanelCreateManyGuildInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PanelUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput> | PanelCreateWithoutGuildInput[] | PanelUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutGuildInput | PanelCreateOrConnectWithoutGuildInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutGuildInput | PanelUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PanelCreateManyGuildInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutGuildInput | PanelUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutGuildInput | PanelUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type PanelUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput> | PanelCreateWithoutGuildInput[] | PanelUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutGuildInput | PanelCreateOrConnectWithoutGuildInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutGuildInput | PanelUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PanelCreateManyGuildInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutGuildInput | PanelUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutGuildInput | PanelUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type GuildCreateNestedOneWithoutPanelsInput = {
    create?: XOR<GuildCreateWithoutPanelsInput, GuildUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPanelsInput
    connect?: GuildWhereUniqueInput
  }

  export type PanelTemplateCreateNestedOneWithoutPanelsInput = {
    create?: XOR<PanelTemplateCreateWithoutPanelsInput, PanelTemplateUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: PanelTemplateCreateOrConnectWithoutPanelsInput
    connect?: PanelTemplateWhereUniqueInput
  }

  export type TicketPanelCreateNestedManyWithoutPanelInput = {
    create?: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput> | TicketPanelCreateWithoutPanelInput[] | TicketPanelUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutPanelInput | TicketPanelCreateOrConnectWithoutPanelInput[]
    createMany?: TicketPanelCreateManyPanelInputEnvelope
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
  }

  export type TicketPanelUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput> | TicketPanelCreateWithoutPanelInput[] | TicketPanelUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutPanelInput | TicketPanelCreateOrConnectWithoutPanelInput[]
    createMany?: TicketPanelCreateManyPanelInputEnvelope
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
  }

  export type EnumPanelTypeFieldUpdateOperationsInput = {
    set?: $Enums.PanelType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GuildUpdateOneRequiredWithoutPanelsNestedInput = {
    create?: XOR<GuildCreateWithoutPanelsInput, GuildUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPanelsInput
    upsert?: GuildUpsertWithoutPanelsInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutPanelsInput, GuildUpdateWithoutPanelsInput>, GuildUncheckedUpdateWithoutPanelsInput>
  }

  export type PanelTemplateUpdateOneWithoutPanelsNestedInput = {
    create?: XOR<PanelTemplateCreateWithoutPanelsInput, PanelTemplateUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: PanelTemplateCreateOrConnectWithoutPanelsInput
    upsert?: PanelTemplateUpsertWithoutPanelsInput
    disconnect?: PanelTemplateWhereInput | boolean
    delete?: PanelTemplateWhereInput | boolean
    connect?: PanelTemplateWhereUniqueInput
    update?: XOR<XOR<PanelTemplateUpdateToOneWithWhereWithoutPanelsInput, PanelTemplateUpdateWithoutPanelsInput>, PanelTemplateUncheckedUpdateWithoutPanelsInput>
  }

  export type TicketPanelUpdateManyWithoutPanelNestedInput = {
    create?: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput> | TicketPanelCreateWithoutPanelInput[] | TicketPanelUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutPanelInput | TicketPanelCreateOrConnectWithoutPanelInput[]
    upsert?: TicketPanelUpsertWithWhereUniqueWithoutPanelInput | TicketPanelUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: TicketPanelCreateManyPanelInputEnvelope
    set?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    disconnect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    delete?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    update?: TicketPanelUpdateWithWhereUniqueWithoutPanelInput | TicketPanelUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: TicketPanelUpdateManyWithWhereWithoutPanelInput | TicketPanelUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
  }

  export type TicketPanelUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput> | TicketPanelCreateWithoutPanelInput[] | TicketPanelUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutPanelInput | TicketPanelCreateOrConnectWithoutPanelInput[]
    upsert?: TicketPanelUpsertWithWhereUniqueWithoutPanelInput | TicketPanelUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: TicketPanelCreateManyPanelInputEnvelope
    set?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    disconnect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    delete?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    update?: TicketPanelUpdateWithWhereUniqueWithoutPanelInput | TicketPanelUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: TicketPanelUpdateManyWithWhereWithoutPanelInput | TicketPanelUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
  }

  export type PanelCreateNestedManyWithoutTemplateInput = {
    create?: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput> | PanelCreateWithoutTemplateInput[] | PanelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutTemplateInput | PanelCreateOrConnectWithoutTemplateInput[]
    createMany?: PanelCreateManyTemplateInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type PanelUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput> | PanelCreateWithoutTemplateInput[] | PanelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutTemplateInput | PanelCreateOrConnectWithoutTemplateInput[]
    createMany?: PanelCreateManyTemplateInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type PanelUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput> | PanelCreateWithoutTemplateInput[] | PanelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutTemplateInput | PanelCreateOrConnectWithoutTemplateInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutTemplateInput | PanelUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: PanelCreateManyTemplateInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutTemplateInput | PanelUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutTemplateInput | PanelUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type PanelUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput> | PanelCreateWithoutTemplateInput[] | PanelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutTemplateInput | PanelCreateOrConnectWithoutTemplateInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutTemplateInput | PanelUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: PanelCreateManyTemplateInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutTemplateInput | PanelUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutTemplateInput | PanelUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type PanelCreateNestedOneWithoutTicketPanelsInput = {
    create?: XOR<PanelCreateWithoutTicketPanelsInput, PanelUncheckedCreateWithoutTicketPanelsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutTicketPanelsInput
    connect?: PanelWhereUniqueInput
  }

  export type FormDataCreateNestedOneWithoutTicketPanelsInput = {
    create?: XOR<FormDataCreateWithoutTicketPanelsInput, FormDataUncheckedCreateWithoutTicketPanelsInput>
    connectOrCreate?: FormDataCreateOrConnectWithoutTicketPanelsInput
    connect?: FormDataWhereUniqueInput
  }

  export type ButtonDataCreateNestedManyWithoutTicketPanelInput = {
    create?: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput> | ButtonDataCreateWithoutTicketPanelInput[] | ButtonDataUncheckedCreateWithoutTicketPanelInput[]
    connectOrCreate?: ButtonDataCreateOrConnectWithoutTicketPanelInput | ButtonDataCreateOrConnectWithoutTicketPanelInput[]
    createMany?: ButtonDataCreateManyTicketPanelInputEnvelope
    connect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutPanelInput = {
    create?: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput> | TicketCreateWithoutPanelInput[] | TicketUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPanelInput | TicketCreateOrConnectWithoutPanelInput[]
    createMany?: TicketCreateManyPanelInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ButtonDataUncheckedCreateNestedManyWithoutTicketPanelInput = {
    create?: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput> | ButtonDataCreateWithoutTicketPanelInput[] | ButtonDataUncheckedCreateWithoutTicketPanelInput[]
    connectOrCreate?: ButtonDataCreateOrConnectWithoutTicketPanelInput | ButtonDataCreateOrConnectWithoutTicketPanelInput[]
    createMany?: ButtonDataCreateManyTicketPanelInputEnvelope
    connect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput> | TicketCreateWithoutPanelInput[] | TicketUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPanelInput | TicketCreateOrConnectWithoutPanelInput[]
    createMany?: TicketCreateManyPanelInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PanelUpdateOneRequiredWithoutTicketPanelsNestedInput = {
    create?: XOR<PanelCreateWithoutTicketPanelsInput, PanelUncheckedCreateWithoutTicketPanelsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutTicketPanelsInput
    upsert?: PanelUpsertWithoutTicketPanelsInput
    connect?: PanelWhereUniqueInput
    update?: XOR<XOR<PanelUpdateToOneWithWhereWithoutTicketPanelsInput, PanelUpdateWithoutTicketPanelsInput>, PanelUncheckedUpdateWithoutTicketPanelsInput>
  }

  export type FormDataUpdateOneWithoutTicketPanelsNestedInput = {
    create?: XOR<FormDataCreateWithoutTicketPanelsInput, FormDataUncheckedCreateWithoutTicketPanelsInput>
    connectOrCreate?: FormDataCreateOrConnectWithoutTicketPanelsInput
    upsert?: FormDataUpsertWithoutTicketPanelsInput
    disconnect?: FormDataWhereInput | boolean
    delete?: FormDataWhereInput | boolean
    connect?: FormDataWhereUniqueInput
    update?: XOR<XOR<FormDataUpdateToOneWithWhereWithoutTicketPanelsInput, FormDataUpdateWithoutTicketPanelsInput>, FormDataUncheckedUpdateWithoutTicketPanelsInput>
  }

  export type ButtonDataUpdateManyWithoutTicketPanelNestedInput = {
    create?: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput> | ButtonDataCreateWithoutTicketPanelInput[] | ButtonDataUncheckedCreateWithoutTicketPanelInput[]
    connectOrCreate?: ButtonDataCreateOrConnectWithoutTicketPanelInput | ButtonDataCreateOrConnectWithoutTicketPanelInput[]
    upsert?: ButtonDataUpsertWithWhereUniqueWithoutTicketPanelInput | ButtonDataUpsertWithWhereUniqueWithoutTicketPanelInput[]
    createMany?: ButtonDataCreateManyTicketPanelInputEnvelope
    set?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    disconnect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    delete?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    connect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    update?: ButtonDataUpdateWithWhereUniqueWithoutTicketPanelInput | ButtonDataUpdateWithWhereUniqueWithoutTicketPanelInput[]
    updateMany?: ButtonDataUpdateManyWithWhereWithoutTicketPanelInput | ButtonDataUpdateManyWithWhereWithoutTicketPanelInput[]
    deleteMany?: ButtonDataScalarWhereInput | ButtonDataScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutPanelNestedInput = {
    create?: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput> | TicketCreateWithoutPanelInput[] | TicketUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPanelInput | TicketCreateOrConnectWithoutPanelInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPanelInput | TicketUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: TicketCreateManyPanelInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPanelInput | TicketUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPanelInput | TicketUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ButtonDataUncheckedUpdateManyWithoutTicketPanelNestedInput = {
    create?: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput> | ButtonDataCreateWithoutTicketPanelInput[] | ButtonDataUncheckedCreateWithoutTicketPanelInput[]
    connectOrCreate?: ButtonDataCreateOrConnectWithoutTicketPanelInput | ButtonDataCreateOrConnectWithoutTicketPanelInput[]
    upsert?: ButtonDataUpsertWithWhereUniqueWithoutTicketPanelInput | ButtonDataUpsertWithWhereUniqueWithoutTicketPanelInput[]
    createMany?: ButtonDataCreateManyTicketPanelInputEnvelope
    set?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    disconnect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    delete?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    connect?: ButtonDataWhereUniqueInput | ButtonDataWhereUniqueInput[]
    update?: ButtonDataUpdateWithWhereUniqueWithoutTicketPanelInput | ButtonDataUpdateWithWhereUniqueWithoutTicketPanelInput[]
    updateMany?: ButtonDataUpdateManyWithWhereWithoutTicketPanelInput | ButtonDataUpdateManyWithWhereWithoutTicketPanelInput[]
    deleteMany?: ButtonDataScalarWhereInput | ButtonDataScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput> | TicketCreateWithoutPanelInput[] | TicketUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPanelInput | TicketCreateOrConnectWithoutPanelInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPanelInput | TicketUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: TicketCreateManyPanelInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPanelInput | TicketUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPanelInput | TicketUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketPanelCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketPanelCreateWithoutTicketsInput, TicketPanelUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketPanelCreateOrConnectWithoutTicketsInput
    connect?: TicketPanelWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type TicketPanelUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketPanelCreateWithoutTicketsInput, TicketPanelUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketPanelCreateOrConnectWithoutTicketsInput
    upsert?: TicketPanelUpsertWithoutTicketsInput
    connect?: TicketPanelWhereUniqueInput
    update?: XOR<XOR<TicketPanelUpdateToOneWithWhereWithoutTicketsInput, TicketPanelUpdateWithoutTicketsInput>, TicketPanelUncheckedUpdateWithoutTicketsInput>
  }

  export type QuestionCreateNestedManyWithoutFormInput = {
    create?: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput> | QuestionCreateWithoutFormInput[] | QuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutFormInput | QuestionCreateOrConnectWithoutFormInput[]
    createMany?: QuestionCreateManyFormInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TicketPanelCreateNestedManyWithoutFormInput = {
    create?: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput> | TicketPanelCreateWithoutFormInput[] | TicketPanelUncheckedCreateWithoutFormInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutFormInput | TicketPanelCreateOrConnectWithoutFormInput[]
    createMany?: TicketPanelCreateManyFormInputEnvelope
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput> | QuestionCreateWithoutFormInput[] | QuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutFormInput | QuestionCreateOrConnectWithoutFormInput[]
    createMany?: QuestionCreateManyFormInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TicketPanelUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput> | TicketPanelCreateWithoutFormInput[] | TicketPanelUncheckedCreateWithoutFormInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutFormInput | TicketPanelCreateOrConnectWithoutFormInput[]
    createMany?: TicketPanelCreateManyFormInputEnvelope
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutFormNestedInput = {
    create?: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput> | QuestionCreateWithoutFormInput[] | QuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutFormInput | QuestionCreateOrConnectWithoutFormInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutFormInput | QuestionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: QuestionCreateManyFormInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutFormInput | QuestionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutFormInput | QuestionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TicketPanelUpdateManyWithoutFormNestedInput = {
    create?: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput> | TicketPanelCreateWithoutFormInput[] | TicketPanelUncheckedCreateWithoutFormInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutFormInput | TicketPanelCreateOrConnectWithoutFormInput[]
    upsert?: TicketPanelUpsertWithWhereUniqueWithoutFormInput | TicketPanelUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: TicketPanelCreateManyFormInputEnvelope
    set?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    disconnect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    delete?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    update?: TicketPanelUpdateWithWhereUniqueWithoutFormInput | TicketPanelUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: TicketPanelUpdateManyWithWhereWithoutFormInput | TicketPanelUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput> | QuestionCreateWithoutFormInput[] | QuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutFormInput | QuestionCreateOrConnectWithoutFormInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutFormInput | QuestionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: QuestionCreateManyFormInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutFormInput | QuestionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutFormInput | QuestionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TicketPanelUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput> | TicketPanelCreateWithoutFormInput[] | TicketPanelUncheckedCreateWithoutFormInput[]
    connectOrCreate?: TicketPanelCreateOrConnectWithoutFormInput | TicketPanelCreateOrConnectWithoutFormInput[]
    upsert?: TicketPanelUpsertWithWhereUniqueWithoutFormInput | TicketPanelUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: TicketPanelCreateManyFormInputEnvelope
    set?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    disconnect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    delete?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    connect?: TicketPanelWhereUniqueInput | TicketPanelWhereUniqueInput[]
    update?: TicketPanelUpdateWithWhereUniqueWithoutFormInput | TicketPanelUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: TicketPanelUpdateManyWithWhereWithoutFormInput | TicketPanelUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
  }

  export type FormDataCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<FormDataCreateWithoutQuestionsInput, FormDataUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormDataCreateOrConnectWithoutQuestionsInput
    connect?: FormDataWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormDataUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<FormDataCreateWithoutQuestionsInput, FormDataUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormDataCreateOrConnectWithoutQuestionsInput
    upsert?: FormDataUpsertWithoutQuestionsInput
    connect?: FormDataWhereUniqueInput
    update?: XOR<XOR<FormDataUpdateToOneWithWhereWithoutQuestionsInput, FormDataUpdateWithoutQuestionsInput>, FormDataUncheckedUpdateWithoutQuestionsInput>
  }

  export type TicketPanelCreateNestedOneWithoutButtonsInput = {
    create?: XOR<TicketPanelCreateWithoutButtonsInput, TicketPanelUncheckedCreateWithoutButtonsInput>
    connectOrCreate?: TicketPanelCreateOrConnectWithoutButtonsInput
    connect?: TicketPanelWhereUniqueInput
  }

  export type TicketPanelUpdateOneRequiredWithoutButtonsNestedInput = {
    create?: XOR<TicketPanelCreateWithoutButtonsInput, TicketPanelUncheckedCreateWithoutButtonsInput>
    connectOrCreate?: TicketPanelCreateOrConnectWithoutButtonsInput
    upsert?: TicketPanelUpsertWithoutButtonsInput
    connect?: TicketPanelWhereUniqueInput
    update?: XOR<XOR<TicketPanelUpdateToOneWithWhereWithoutButtonsInput, TicketPanelUpdateWithoutButtonsInput>, TicketPanelUncheckedUpdateWithoutButtonsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPanelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PanelType | EnumPanelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPanelTypeFilter<$PrismaModel> | $Enums.PanelType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPanelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PanelType | EnumPanelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PanelType[] | ListEnumPanelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPanelTypeWithAggregatesFilter<$PrismaModel> | $Enums.PanelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPanelTypeFilter<$PrismaModel>
    _max?: NestedEnumPanelTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PanelCreateWithoutGuildInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    template?: PanelTemplateCreateNestedOneWithoutPanelsInput
    ticketPanels?: TicketPanelCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutGuildInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    templateId?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    ticketPanels?: TicketPanelUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutGuildInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput>
  }

  export type PanelCreateManyGuildInputEnvelope = {
    data: PanelCreateManyGuildInput | PanelCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type PanelUpsertWithWhereUniqueWithoutGuildInput = {
    where: PanelWhereUniqueInput
    update: XOR<PanelUpdateWithoutGuildInput, PanelUncheckedUpdateWithoutGuildInput>
    create: XOR<PanelCreateWithoutGuildInput, PanelUncheckedCreateWithoutGuildInput>
  }

  export type PanelUpdateWithWhereUniqueWithoutGuildInput = {
    where: PanelWhereUniqueInput
    data: XOR<PanelUpdateWithoutGuildInput, PanelUncheckedUpdateWithoutGuildInput>
  }

  export type PanelUpdateManyWithWhereWithoutGuildInput = {
    where: PanelScalarWhereInput
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyWithoutGuildInput>
  }

  export type PanelScalarWhereInput = {
    AND?: PanelScalarWhereInput | PanelScalarWhereInput[]
    OR?: PanelScalarWhereInput[]
    NOT?: PanelScalarWhereInput | PanelScalarWhereInput[]
    id?: StringFilter<"Panel"> | string
    guildId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    type?: EnumPanelTypeFilter<"Panel"> | $Enums.PanelType
    placeholder?: StringNullableFilter<"Panel"> | string | null
    templateId?: StringNullableFilter<"Panel"> | string | null
    embed?: JsonNullableFilter<"Panel">
    createdAt?: DateTimeFilter<"Panel"> | Date | string
  }

  export type GuildCreateWithoutPanelsInput = {
    id?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GuildUncheckedCreateWithoutPanelsInput = {
    id?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GuildCreateOrConnectWithoutPanelsInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutPanelsInput, GuildUncheckedCreateWithoutPanelsInput>
  }

  export type PanelTemplateCreateWithoutPanelsInput = {
    id?: string
    name: string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelTemplateUncheckedCreateWithoutPanelsInput = {
    id?: string
    name: string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelTemplateCreateOrConnectWithoutPanelsInput = {
    where: PanelTemplateWhereUniqueInput
    create: XOR<PanelTemplateCreateWithoutPanelsInput, PanelTemplateUncheckedCreateWithoutPanelsInput>
  }

  export type TicketPanelCreateWithoutPanelInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    form?: FormDataCreateNestedOneWithoutTicketPanelsInput
    buttons?: ButtonDataCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelUncheckedCreateWithoutPanelInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    buttons?: ButtonDataUncheckedCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelCreateOrConnectWithoutPanelInput = {
    where: TicketPanelWhereUniqueInput
    create: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput>
  }

  export type TicketPanelCreateManyPanelInputEnvelope = {
    data: TicketPanelCreateManyPanelInput | TicketPanelCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type GuildUpsertWithoutPanelsInput = {
    update: XOR<GuildUpdateWithoutPanelsInput, GuildUncheckedUpdateWithoutPanelsInput>
    create: XOR<GuildCreateWithoutPanelsInput, GuildUncheckedCreateWithoutPanelsInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutPanelsInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutPanelsInput, GuildUncheckedUpdateWithoutPanelsInput>
  }

  export type GuildUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildUncheckedUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelTemplateUpsertWithoutPanelsInput = {
    update: XOR<PanelTemplateUpdateWithoutPanelsInput, PanelTemplateUncheckedUpdateWithoutPanelsInput>
    create: XOR<PanelTemplateCreateWithoutPanelsInput, PanelTemplateUncheckedCreateWithoutPanelsInput>
    where?: PanelTemplateWhereInput
  }

  export type PanelTemplateUpdateToOneWithWhereWithoutPanelsInput = {
    where?: PanelTemplateWhereInput
    data: XOR<PanelTemplateUpdateWithoutPanelsInput, PanelTemplateUncheckedUpdateWithoutPanelsInput>
  }

  export type PanelTemplateUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelTemplateUncheckedUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPanelUpsertWithWhereUniqueWithoutPanelInput = {
    where: TicketPanelWhereUniqueInput
    update: XOR<TicketPanelUpdateWithoutPanelInput, TicketPanelUncheckedUpdateWithoutPanelInput>
    create: XOR<TicketPanelCreateWithoutPanelInput, TicketPanelUncheckedCreateWithoutPanelInput>
  }

  export type TicketPanelUpdateWithWhereUniqueWithoutPanelInput = {
    where: TicketPanelWhereUniqueInput
    data: XOR<TicketPanelUpdateWithoutPanelInput, TicketPanelUncheckedUpdateWithoutPanelInput>
  }

  export type TicketPanelUpdateManyWithWhereWithoutPanelInput = {
    where: TicketPanelScalarWhereInput
    data: XOR<TicketPanelUpdateManyMutationInput, TicketPanelUncheckedUpdateManyWithoutPanelInput>
  }

  export type TicketPanelScalarWhereInput = {
    AND?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
    OR?: TicketPanelScalarWhereInput[]
    NOT?: TicketPanelScalarWhereInput | TicketPanelScalarWhereInput[]
    id?: StringFilter<"TicketPanel"> | string
    panelId?: StringFilter<"TicketPanel"> | string
    name?: StringFilter<"TicketPanel"> | string
    description?: StringNullableFilter<"TicketPanel"> | string | null
    emoji?: StringNullableFilter<"TicketPanel"> | string | null
    style?: StringFilter<"TicketPanel"> | string
    hasForm?: BoolFilter<"TicketPanel"> | boolean
    maintenance?: BoolFilter<"TicketPanel"> | boolean
    status?: BoolFilter<"TicketPanel"> | boolean
    formId?: StringNullableFilter<"TicketPanel"> | string | null
    data?: JsonNullableFilter<"TicketPanel">
    createdAt?: DateTimeFilter<"TicketPanel"> | Date | string
  }

  export type PanelCreateWithoutTemplateInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutPanelsInput
    ticketPanels?: TicketPanelCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutTemplateInput = {
    id?: string
    guildId: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    ticketPanels?: TicketPanelUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutTemplateInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput>
  }

  export type PanelCreateManyTemplateInputEnvelope = {
    data: PanelCreateManyTemplateInput | PanelCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type PanelUpsertWithWhereUniqueWithoutTemplateInput = {
    where: PanelWhereUniqueInput
    update: XOR<PanelUpdateWithoutTemplateInput, PanelUncheckedUpdateWithoutTemplateInput>
    create: XOR<PanelCreateWithoutTemplateInput, PanelUncheckedCreateWithoutTemplateInput>
  }

  export type PanelUpdateWithWhereUniqueWithoutTemplateInput = {
    where: PanelWhereUniqueInput
    data: XOR<PanelUpdateWithoutTemplateInput, PanelUncheckedUpdateWithoutTemplateInput>
  }

  export type PanelUpdateManyWithWhereWithoutTemplateInput = {
    where: PanelScalarWhereInput
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyWithoutTemplateInput>
  }

  export type PanelCreateWithoutTicketPanelsInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    guild: GuildCreateNestedOneWithoutPanelsInput
    template?: PanelTemplateCreateNestedOneWithoutPanelsInput
  }

  export type PanelUncheckedCreateWithoutTicketPanelsInput = {
    id?: string
    guildId: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    templateId?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelCreateOrConnectWithoutTicketPanelsInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutTicketPanelsInput, PanelUncheckedCreateWithoutTicketPanelsInput>
  }

  export type FormDataCreateWithoutTicketPanelsInput = {
    id?: string
    name: string
    questions?: QuestionCreateNestedManyWithoutFormInput
  }

  export type FormDataUncheckedCreateWithoutTicketPanelsInput = {
    id?: string
    name: string
    questions?: QuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormDataCreateOrConnectWithoutTicketPanelsInput = {
    where: FormDataWhereUniqueInput
    create: XOR<FormDataCreateWithoutTicketPanelsInput, FormDataUncheckedCreateWithoutTicketPanelsInput>
  }

  export type ButtonDataCreateWithoutTicketPanelInput = {
    id?: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUncheckedCreateWithoutTicketPanelInput = {
    id?: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataCreateOrConnectWithoutTicketPanelInput = {
    where: ButtonDataWhereUniqueInput
    create: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput>
  }

  export type ButtonDataCreateManyTicketPanelInputEnvelope = {
    data: ButtonDataCreateManyTicketPanelInput | ButtonDataCreateManyTicketPanelInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutPanelInput = {
    id: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketUncheckedCreateWithoutPanelInput = {
    id: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutPanelInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput>
  }

  export type TicketCreateManyPanelInputEnvelope = {
    data: TicketCreateManyPanelInput | TicketCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type PanelUpsertWithoutTicketPanelsInput = {
    update: XOR<PanelUpdateWithoutTicketPanelsInput, PanelUncheckedUpdateWithoutTicketPanelsInput>
    create: XOR<PanelCreateWithoutTicketPanelsInput, PanelUncheckedCreateWithoutTicketPanelsInput>
    where?: PanelWhereInput
  }

  export type PanelUpdateToOneWithWhereWithoutTicketPanelsInput = {
    where?: PanelWhereInput
    data: XOR<PanelUpdateWithoutTicketPanelsInput, PanelUncheckedUpdateWithoutTicketPanelsInput>
  }

  export type PanelUpdateWithoutTicketPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPanelsNestedInput
    template?: PanelTemplateUpdateOneWithoutPanelsNestedInput
  }

  export type PanelUncheckedUpdateWithoutTicketPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormDataUpsertWithoutTicketPanelsInput = {
    update: XOR<FormDataUpdateWithoutTicketPanelsInput, FormDataUncheckedUpdateWithoutTicketPanelsInput>
    create: XOR<FormDataCreateWithoutTicketPanelsInput, FormDataUncheckedCreateWithoutTicketPanelsInput>
    where?: FormDataWhereInput
  }

  export type FormDataUpdateToOneWithWhereWithoutTicketPanelsInput = {
    where?: FormDataWhereInput
    data: XOR<FormDataUpdateWithoutTicketPanelsInput, FormDataUncheckedUpdateWithoutTicketPanelsInput>
  }

  export type FormDataUpdateWithoutTicketPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutFormNestedInput
  }

  export type FormDataUncheckedUpdateWithoutTicketPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type ButtonDataUpsertWithWhereUniqueWithoutTicketPanelInput = {
    where: ButtonDataWhereUniqueInput
    update: XOR<ButtonDataUpdateWithoutTicketPanelInput, ButtonDataUncheckedUpdateWithoutTicketPanelInput>
    create: XOR<ButtonDataCreateWithoutTicketPanelInput, ButtonDataUncheckedCreateWithoutTicketPanelInput>
  }

  export type ButtonDataUpdateWithWhereUniqueWithoutTicketPanelInput = {
    where: ButtonDataWhereUniqueInput
    data: XOR<ButtonDataUpdateWithoutTicketPanelInput, ButtonDataUncheckedUpdateWithoutTicketPanelInput>
  }

  export type ButtonDataUpdateManyWithWhereWithoutTicketPanelInput = {
    where: ButtonDataScalarWhereInput
    data: XOR<ButtonDataUpdateManyMutationInput, ButtonDataUncheckedUpdateManyWithoutTicketPanelInput>
  }

  export type ButtonDataScalarWhereInput = {
    AND?: ButtonDataScalarWhereInput | ButtonDataScalarWhereInput[]
    OR?: ButtonDataScalarWhereInput[]
    NOT?: ButtonDataScalarWhereInput | ButtonDataScalarWhereInput[]
    id?: StringFilter<"ButtonData"> | string
    ticketPanelId?: StringFilter<"ButtonData"> | string
    name?: StringFilter<"ButtonData"> | string
    style?: StringFilter<"ButtonData"> | string
    emoji?: StringNullableFilter<"ButtonData"> | string | null
    config?: JsonNullableFilter<"ButtonData">
  }

  export type TicketUpsertWithWhereUniqueWithoutPanelInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPanelInput, TicketUncheckedUpdateWithoutPanelInput>
    create: XOR<TicketCreateWithoutPanelInput, TicketUncheckedCreateWithoutPanelInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPanelInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPanelInput, TicketUncheckedUpdateWithoutPanelInput>
  }

  export type TicketUpdateManyWithWhereWithoutPanelInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPanelInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    panelId?: StringFilter<"Ticket"> | string
    claimer?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    embed?: JsonNullableFilter<"Ticket">
    data?: JsonNullableFilter<"Ticket">
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketPanelCreateWithoutTicketsInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panel: PanelCreateNestedOneWithoutTicketPanelsInput
    form?: FormDataCreateNestedOneWithoutTicketPanelsInput
    buttons?: ButtonDataCreateNestedManyWithoutTicketPanelInput
  }

  export type TicketPanelUncheckedCreateWithoutTicketsInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    buttons?: ButtonDataUncheckedCreateNestedManyWithoutTicketPanelInput
  }

  export type TicketPanelCreateOrConnectWithoutTicketsInput = {
    where: TicketPanelWhereUniqueInput
    create: XOR<TicketPanelCreateWithoutTicketsInput, TicketPanelUncheckedCreateWithoutTicketsInput>
  }

  export type TicketPanelUpsertWithoutTicketsInput = {
    update: XOR<TicketPanelUpdateWithoutTicketsInput, TicketPanelUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketPanelCreateWithoutTicketsInput, TicketPanelUncheckedCreateWithoutTicketsInput>
    where?: TicketPanelWhereInput
  }

  export type TicketPanelUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketPanelWhereInput
    data: XOR<TicketPanelUpdateWithoutTicketsInput, TicketPanelUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketPanelUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutTicketPanelsNestedInput
    form?: FormDataUpdateOneWithoutTicketPanelsNestedInput
    buttons?: ButtonDataUpdateManyWithoutTicketPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buttons?: ButtonDataUncheckedUpdateManyWithoutTicketPanelNestedInput
  }

  export type QuestionCreateWithoutFormInput = {
    id?: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
  }

  export type QuestionUncheckedCreateWithoutFormInput = {
    id?: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
  }

  export type QuestionCreateOrConnectWithoutFormInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput>
  }

  export type QuestionCreateManyFormInputEnvelope = {
    data: QuestionCreateManyFormInput | QuestionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type TicketPanelCreateWithoutFormInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panel: PanelCreateNestedOneWithoutTicketPanelsInput
    buttons?: ButtonDataCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelUncheckedCreateWithoutFormInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    buttons?: ButtonDataUncheckedCreateNestedManyWithoutTicketPanelInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelCreateOrConnectWithoutFormInput = {
    where: TicketPanelWhereUniqueInput
    create: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput>
  }

  export type TicketPanelCreateManyFormInputEnvelope = {
    data: TicketPanelCreateManyFormInput | TicketPanelCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutFormInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutFormInput, QuestionUncheckedUpdateWithoutFormInput>
    create: XOR<QuestionCreateWithoutFormInput, QuestionUncheckedCreateWithoutFormInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutFormInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutFormInput, QuestionUncheckedUpdateWithoutFormInput>
  }

  export type QuestionUpdateManyWithWhereWithoutFormInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutFormInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    formId?: StringFilter<"Question"> | string
    name?: StringFilter<"Question"> | string
    placeholder?: StringNullableFilter<"Question"> | string | null
    required?: BoolFilter<"Question"> | boolean
    style?: StringFilter<"Question"> | string
    minLength?: IntNullableFilter<"Question"> | number | null
    maxLength?: IntNullableFilter<"Question"> | number | null
  }

  export type TicketPanelUpsertWithWhereUniqueWithoutFormInput = {
    where: TicketPanelWhereUniqueInput
    update: XOR<TicketPanelUpdateWithoutFormInput, TicketPanelUncheckedUpdateWithoutFormInput>
    create: XOR<TicketPanelCreateWithoutFormInput, TicketPanelUncheckedCreateWithoutFormInput>
  }

  export type TicketPanelUpdateWithWhereUniqueWithoutFormInput = {
    where: TicketPanelWhereUniqueInput
    data: XOR<TicketPanelUpdateWithoutFormInput, TicketPanelUncheckedUpdateWithoutFormInput>
  }

  export type TicketPanelUpdateManyWithWhereWithoutFormInput = {
    where: TicketPanelScalarWhereInput
    data: XOR<TicketPanelUpdateManyMutationInput, TicketPanelUncheckedUpdateManyWithoutFormInput>
  }

  export type FormDataCreateWithoutQuestionsInput = {
    id?: string
    name: string
    ticketPanels?: TicketPanelCreateNestedManyWithoutFormInput
  }

  export type FormDataUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    ticketPanels?: TicketPanelUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormDataCreateOrConnectWithoutQuestionsInput = {
    where: FormDataWhereUniqueInput
    create: XOR<FormDataCreateWithoutQuestionsInput, FormDataUncheckedCreateWithoutQuestionsInput>
  }

  export type FormDataUpsertWithoutQuestionsInput = {
    update: XOR<FormDataUpdateWithoutQuestionsInput, FormDataUncheckedUpdateWithoutQuestionsInput>
    create: XOR<FormDataCreateWithoutQuestionsInput, FormDataUncheckedCreateWithoutQuestionsInput>
    where?: FormDataWhereInput
  }

  export type FormDataUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: FormDataWhereInput
    data: XOR<FormDataUpdateWithoutQuestionsInput, FormDataUncheckedUpdateWithoutQuestionsInput>
  }

  export type FormDataUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ticketPanels?: TicketPanelUpdateManyWithoutFormNestedInput
  }

  export type FormDataUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ticketPanels?: TicketPanelUncheckedUpdateManyWithoutFormNestedInput
  }

  export type TicketPanelCreateWithoutButtonsInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    panel: PanelCreateNestedOneWithoutTicketPanelsInput
    form?: FormDataCreateNestedOneWithoutTicketPanelsInput
    tickets?: TicketCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelUncheckedCreateWithoutButtonsInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutPanelInput
  }

  export type TicketPanelCreateOrConnectWithoutButtonsInput = {
    where: TicketPanelWhereUniqueInput
    create: XOR<TicketPanelCreateWithoutButtonsInput, TicketPanelUncheckedCreateWithoutButtonsInput>
  }

  export type TicketPanelUpsertWithoutButtonsInput = {
    update: XOR<TicketPanelUpdateWithoutButtonsInput, TicketPanelUncheckedUpdateWithoutButtonsInput>
    create: XOR<TicketPanelCreateWithoutButtonsInput, TicketPanelUncheckedCreateWithoutButtonsInput>
    where?: TicketPanelWhereInput
  }

  export type TicketPanelUpdateToOneWithWhereWithoutButtonsInput = {
    where?: TicketPanelWhereInput
    data: XOR<TicketPanelUpdateWithoutButtonsInput, TicketPanelUncheckedUpdateWithoutButtonsInput>
  }

  export type TicketPanelUpdateWithoutButtonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutTicketPanelsNestedInput
    form?: FormDataUpdateOneWithoutTicketPanelsNestedInput
    tickets?: TicketUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateWithoutButtonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelCreateManyGuildInput = {
    id?: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    templateId?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: PanelTemplateUpdateOneWithoutPanelsNestedInput
    ticketPanels?: TicketPanelUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPanels?: TicketPanelUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPanelCreateManyPanelInput = {
    id?: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    formId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TicketPanelUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormDataUpdateOneWithoutTicketPanelsNestedInput
    buttons?: ButtonDataUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buttons?: ButtonDataUncheckedUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelCreateManyTemplateInput = {
    id?: string
    guildId: string
    name: string
    type?: $Enums.PanelType
    placeholder?: string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PanelUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildUpdateOneRequiredWithoutPanelsNestedInput
    ticketPanels?: TicketPanelUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPanels?: TicketPanelUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPanelTypeFieldUpdateOperationsInput | $Enums.PanelType
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ButtonDataCreateManyTicketPanelInput = {
    id?: string
    name: string
    style: string
    emoji?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketCreateManyPanelInput = {
    id: string
    claimer?: string | null
    status?: $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ButtonDataUpdateWithoutTicketPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUncheckedUpdateWithoutTicketPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ButtonDataUncheckedUpdateManyWithoutTicketPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    embed?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyFormInput = {
    id?: string
    name: string
    placeholder?: string | null
    required?: boolean
    style?: string
    minLength?: number | null
    maxLength?: number | null
  }

  export type TicketPanelCreateManyFormInput = {
    id?: string
    panelId: string
    name: string
    description?: string | null
    emoji?: string | null
    style: string
    hasForm?: boolean
    maintenance?: boolean
    status?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestionUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    style?: StringFieldUpdateOperationsInput | string
    minLength?: NullableIntFieldUpdateOperationsInput | number | null
    maxLength?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketPanelUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutTicketPanelsNestedInput
    buttons?: ButtonDataUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buttons?: ButtonDataUncheckedUpdateManyWithoutTicketPanelNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type TicketPanelUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    style?: StringFieldUpdateOperationsInput | string
    hasForm?: BoolFieldUpdateOperationsInput | boolean
    maintenance?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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