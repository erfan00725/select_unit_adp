
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StudentScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  UserName: 'UserName',
  Password: 'Password',
  Type: 'Type',
  Created_at: 'Created_at'
};

exports.Prisma.LessonScalarFieldEnum = {
  id: 'id',
  TeacherId: 'TeacherId',
  LessonName: 'LessonName',
  Unit: 'Unit',
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

exports.Prisma.SelectUnitScalarFieldEnum = {
  StudentId: 'StudentId',
  LessonId: 'LessonId',
  Year: 'Year',
  Period: 'Period',
  ExtraFee: 'ExtraFee',
  Created_at: 'Created_at',
  Updated_at: 'Updated_at'
};

exports.Prisma.FieldScalarFieldEnum = {
  id: 'id',
  Name: 'Name',
  FixedFee: 'FixedFee',
  Created_at: 'Created_at'
};

exports.Prisma.GeneralScalarFieldEnum = {
  Key: 'Key',
  Value: 'Value',
  Updated_at: 'Updated_at',
  Created_at: 'Created_at'
};

exports.Prisma.TeacherScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.StudentOrderByRelevanceFieldEnum = {
  FirstName: 'FirstName',
  LastName: 'LastName',
  NationalCode: 'NationalCode',
  Father: 'Father',
  Address: 'Address',
  HomeNumber: 'HomeNumber',
  PhoneNumber: 'PhoneNumber'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  UserName: 'UserName',
  Password: 'Password'
};

exports.Prisma.LessonOrderByRelevanceFieldEnum = {
  LessonName: 'LessonName'
};

exports.Prisma.FieldOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.GeneralOrderByRelevanceFieldEnum = {
  Key: 'Key',
  Value: 'Value'
};

exports.Prisma.TeacherOrderByRelevanceFieldEnum = {
  NationalCode: 'NationalCode',
  FirstName: 'FirstName',
  LastName: 'LastName',
  PhoneNumber: 'PhoneNumber'
};
exports.Grade = exports.$Enums.Grade = {
  GRADE_7: 'GRADE_7',
  GRADE_8: 'GRADE_8',
  GRADE_9: 'GRADE_9',
  GRADE_10: 'GRADE_10',
  GRADE_11: 'GRADE_11',
  GRADE_12: 'GRADE_12'
};

exports.LessonGrade = exports.$Enums.LessonGrade = {
  GENERAL: 'GENERAL',
  GRADE_7: 'GRADE_7',
  GRADE_8: 'GRADE_8',
  GRADE_9: 'GRADE_9',
  GRADE_10: 'GRADE_10',
  GRADE_11: 'GRADE_11',
  GRADE_12: 'GRADE_12'
};

exports.UserType = exports.$Enums.UserType = {
  admin: 'admin',
  user: 'user'
};

exports.Period = exports.$Enums.Period = {
  first: 'first',
  second: 'second',
  summer: 'summer'
};

exports.Prisma.ModelName = {
  Student: 'Student',
  User: 'User',
  Lesson: 'Lesson',
  SelectUnit: 'SelectUnit',
  Field: 'Field',
  General: 'General',
  Teacher: 'Teacher'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\programming\\select_unit_adp\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\programming\\select_unit_adp\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Student {\n  id           BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  FirstName    String    @db.VarChar(255)\n  LastName     String    @db.VarChar(255)\n  NationalCode String    @unique @db.VarChar(255)\n  Father       String?   @db.VarChar(255)\n  Birth        DateTime? @db.Date\n  Address      String?   @db.VarChar(255)\n  HomeNumber   String?   @db.VarChar(255)\n  PhoneNumber  String?   @db.VarChar(255)\n  fieldId      BigInt    @map(\"Field\") @db.UnsignedBigInt\n  Grade        Grade     @default(GRADE_7)\n  Gender       Boolean   @default(true) @db.Bit(1)\n  Updated_at   DateTime  @default(now()) @db.Timestamp()\n  Created_at   DateTime  @default(now()) @db.Timestamp()\n\n  field       Field        @relation(fields: [fieldId], references: [id])\n  selectUnits SelectUnit[]\n}\n\nmodel User {\n  id         BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  UserName   String    @db.VarChar(255)\n  Password   String    @db.VarChar(255)\n  Type       UserType? @default(user)\n  Created_at DateTime  @default(now()) @db.Timestamp()\n}\n\nmodel Lesson {\n  id             BigInt       @id @default(autoincrement()) @db.UnsignedBigInt\n  TeacherId      BigInt?      @db.UnsignedBigInt\n  LessonName     String       @db.VarChar(255)\n  Unit           Int\n  Grade          LessonGrade? @default(GENERAL)\n  fieldId        BigInt?      @map(\"Field\") @db.UnsignedBigInt\n  PassCondition  Int?\n  TheoriHours    Int?\n  PracticalHours Int?\n  RequireLesson  BigInt?      @db.UnsignedBigInt\n  RequireUnit    Int?\n  NotifCode      BigInt?      @db.UnsignedBigInt\n  ValidFrom      DateTime?    @default(now()) @db.Date\n  ValidTill      DateTime?    @db.Date\n  PricePerUnit   BigInt?      @db.BigInt\n  Created_at     DateTime     @default(now()) @db.Timestamp()\n  Updated_at     DateTime     @default(now()) @db.Timestamp()\n\n  field             Field?       @relation(fields: [fieldId], references: [id])\n  teacher           Teacher?     @relation(fields: [TeacherId], references: [id])\n  requiredForLesson Lesson[]     @relation(\"LessonRequirement\")\n  requiresLesson    Lesson?      @relation(\"LessonRequirement\", fields: [RequireLesson], references: [id])\n  selectUnits       SelectUnit[]\n}\n\nmodel SelectUnit {\n  StudentId  BigInt   @db.UnsignedBigInt\n  LessonId   BigInt   @db.UnsignedBigInt\n  Year       Int\n  Period     Period\n  ExtraFee   BigInt?  @default(0) @db.UnsignedBigInt\n  Created_at DateTime @default(now()) @db.Timestamp()\n  Updated_at DateTime @default(now()) @db.Timestamp()\n\n  student Student @relation(fields: [StudentId], references: [id])\n  lesson  Lesson  @relation(fields: [LessonId], references: [id])\n\n  @@id([StudentId, LessonId, Year, Period])\n}\n\nmodel Field {\n  id         BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  Name       String   @db.VarChar(255)\n  FixedFee   BigInt?  @default(0) @db.BigInt\n  Created_at DateTime @default(now()) @db.Timestamp()\n\n  students Student[]\n  lessons  Lesson[]\n  teachers Teacher[]\n}\n\nmodel General {\n  Key        String   @id @db.VarChar(255)\n  Value      String   @db.VarChar(255)\n  Updated_at DateTime @default(now()) @db.Timestamp()\n  Created_at DateTime @default(now()) @db.Timestamp()\n}\n\nmodel Teacher {\n  id           BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  NationalCode String    @unique @db.VarChar(255)\n  FirstName    String    @db.VarChar(255)\n  LastName     String    @db.VarChar(255)\n  PhoneNumber  String    @db.VarChar(255)\n  fieldId      BigInt?   @map(\"Field\") @db.UnsignedBigInt\n  Birth        DateTime? @db.Date\n  Gender       Boolean   @default(true) @db.Bit(1)\n  Updated_at   DateTime  @default(now()) @db.Timestamp()\n  Created_at   DateTime  @default(now()) @db.Timestamp()\n\n  field   Field?   @relation(fields: [fieldId], references: [id])\n  lessons Lesson[]\n}\n\nenum Grade {\n  GRADE_7  @map(\"7\")\n  GRADE_8  @map(\"8\")\n  GRADE_9  @map(\"9\")\n  GRADE_10 @map(\"10\")\n  GRADE_11 @map(\"11\")\n  GRADE_12 @map(\"12\")\n}\n\nenum LessonGrade {\n  GENERAL  @map(\"0\")\n  GRADE_7  @map(\"7\")\n  GRADE_8  @map(\"8\")\n  GRADE_9  @map(\"9\")\n  GRADE_10 @map(\"10\")\n  GRADE_11 @map(\"11\")\n  GRADE_12 @map(\"12\")\n}\n\nenum UserType {\n  admin\n  user\n}\n\nenum Period {\n  first\n  second\n  summer\n}\n",
  "inlineSchemaHash": "fb08f68b5dc5e9c91a97b1d0b957023a372647278f11ed0e25d683815a07e84c",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Student\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NationalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Father\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HomeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldId\",\"dbName\":\"Field\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grade\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Grade\",\"nativeType\":null,\"default\":\"GRADE_7\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":[\"Bit\",[\"1\"]],\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Field\",\"nativeType\":null,\"relationName\":\"FieldToStudent\",\"relationFromFields\":[\"fieldId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectUnits\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SelectUnit\",\"nativeType\":null,\"relationName\":\"SelectUnitToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserType\",\"nativeType\":null,\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lesson\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TeacherId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LessonName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grade\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"LessonGrade\",\"nativeType\":null,\"default\":\"GENERAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldId\",\"dbName\":\"Field\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PassCondition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TheoriHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PracticalHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RequireLesson\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RequireUnit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NotifCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ValidFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ValidTill\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PricePerUnit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"BigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Field\",\"nativeType\":null,\"relationName\":\"FieldToLesson\",\"relationFromFields\":[\"fieldId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Teacher\",\"nativeType\":null,\"relationName\":\"LessonToTeacher\",\"relationFromFields\":[\"TeacherId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredForLesson\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"nativeType\":null,\"relationName\":\"LessonRequirement\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiresLesson\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"nativeType\":null,\"relationName\":\"LessonRequirement\",\"relationFromFields\":[\"RequireLesson\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectUnits\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SelectUnit\",\"nativeType\":null,\"relationName\":\"LessonToSelectUnit\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SelectUnit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"StudentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LessonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Period\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Period\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtraFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"SelectUnitToStudent\",\"relationFromFields\":[\"StudentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesson\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"nativeType\":null,\"relationName\":\"LessonToSelectUnit\",\"relationFromFields\":[\"LessonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"StudentId\",\"LessonId\",\"Year\",\"Period\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Field\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FixedFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"BigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"FieldToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lessons\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"nativeType\":null,\"relationName\":\"FieldToLesson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teachers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Teacher\",\"nativeType\":null,\"relationName\":\"FieldToTeacher\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"General\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Teacher\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NationalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fieldId\",\"dbName\":\"Field\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":[\"Bit\",[\"1\"]],\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Field\",\"nativeType\":null,\"relationName\":\"FieldToTeacher\",\"relationFromFields\":[\"fieldId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lessons\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"nativeType\":null,\"relationName\":\"LessonToTeacher\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Grade\":{\"values\":[{\"name\":\"GRADE_7\",\"dbName\":\"7\"},{\"name\":\"GRADE_8\",\"dbName\":\"8\"},{\"name\":\"GRADE_9\",\"dbName\":\"9\"},{\"name\":\"GRADE_10\",\"dbName\":\"10\"},{\"name\":\"GRADE_11\",\"dbName\":\"11\"},{\"name\":\"GRADE_12\",\"dbName\":\"12\"}],\"dbName\":null},\"LessonGrade\":{\"values\":[{\"name\":\"GENERAL\",\"dbName\":\"0\"},{\"name\":\"GRADE_7\",\"dbName\":\"7\"},{\"name\":\"GRADE_8\",\"dbName\":\"8\"},{\"name\":\"GRADE_9\",\"dbName\":\"9\"},{\"name\":\"GRADE_10\",\"dbName\":\"10\"},{\"name\":\"GRADE_11\",\"dbName\":\"11\"},{\"name\":\"GRADE_12\",\"dbName\":\"12\"}],\"dbName\":null},\"UserType\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null}],\"dbName\":null},\"Period\":{\"values\":[{\"name\":\"first\",\"dbName\":null},{\"name\":\"second\",\"dbName\":null},{\"name\":\"summer\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
