CREATE TABLE `ledger` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`description` text NOT NULL,
	`cause` text NOT NULL,
	`amount_cents` integer NOT NULL,
	`created_by` text NOT NULL,
	`created_at` text NOT NULL
);
