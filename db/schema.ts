import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const ledger=sqliteTable('ledger',{id:text('id').primaryKey(),date:text('date').notNull(),description:text('description').notNull(),cause:text('cause').notNull(),amountCents:integer('amount_cents').notNull(),createdBy:text('created_by').notNull(),createdAt:text('created_at').notNull()});
