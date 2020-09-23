# Migration `20200923205853`

This migration has been generated at 9/23/2020, 3:58:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `seven_dev`.`STB_FORM` (
`id` int  NOT NULL  AUTO_INCREMENT,
`created_at` datetime(3)  ,
`updated_at` datetime(3)  ,
`deleted_at` datetime(3)  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `seven_dev`.`STB_QUESTIONS` (
`id` int  NOT NULL  AUTO_INCREMENT,
`created_at` datetime(3)  ,
`updated_at` datetime(3)  ,
`deleted_at` datetime(3)  ,
`id_form` int  ,
`title` varchar(191)  ,
`type` int  ,
`qst1` varchar(191)  ,
`qst2` varchar(191)  ,
`qst3` varchar(191)  ,
`qst4` varchar(191)  ,
`subqst1` varchar(191)  ,
`subqst2` varchar(191)  ,
`subqst3` varchar(191)  ,
`subqst4` varchar(191)  ,
`formId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `seven_dev`.`STB_RESPONSES` (
`id` int  NOT NULL  AUTO_INCREMENT,
`created_at` datetime(3)  ,
`updated_at` datetime(3)  ,
`deleted_at` datetime(3)  ,
`id_question` int  ,
`response1` varchar(191)  ,
`response2` varchar(191)  ,
`response3` varchar(191)  ,
`response4` varchar(191)  ,
`responseSub` varchar(191)  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `seven_dev`.`STB_QUESTIONS` ADD FOREIGN KEY (`formId`) REFERENCES `seven_dev`.`STB_FORM`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200923205853
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,52 @@
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Form {
+  id          Int       @default(autoincrement()) @id
+  created_at  DateTime? @default(dbgenerated())
+  updated_at  DateTime? @default(dbgenerated())
+  deleted_at  DateTime?
+  questions Questions[]
+  @@map("STB_FORM")
+}
+
+
+model Questions {
+  id          Int       @default(autoincrement()) @id
+  created_at  DateTime? @default(dbgenerated())
+  updated_at  DateTime? @default(dbgenerated())
+  deleted_at  DateTime?
+  id_form  Int?
+  title  String?
+  type  Int?
+  qst1  String?
+  qst2  String?
+  qst3  String?
+  qst4  String?
+  subqst1  String?
+  subqst2  String?
+  subqst3  String?
+  subqst4  String?
+  @@map("STB_QUESTIONS")
+}
+
+
+model Responses {
+  id          Int       @default(autoincrement()) @id
+  created_at  DateTime? @default(dbgenerated())
+  updated_at  DateTime? @default(dbgenerated())
+  deleted_at  DateTime?
+  id_question  Int?
+  response1 String?
+  response2 String?
+  response3 String?
+  response4 String?
+  responseSub String?
+  @@map("STB_RESPONSES")
+}
```


