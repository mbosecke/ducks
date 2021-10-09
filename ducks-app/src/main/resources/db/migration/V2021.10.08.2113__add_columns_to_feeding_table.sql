alter table ducks.feeding add column if not exists user_id text not null;
alter table ducks.feeding add column if not exists date_entered timestamp with time zone not null;
alter table ducks.feeding add column if not exists feeding_time timestamp with time zone not null;
alter table ducks.feeding add column if not exists food text not null;
alter table ducks.feeding add column if not exists location text not null;
alter table ducks.feeding add column if not exists number_of_ducks integer not null;
alter table ducks.feeding add column if not exists quantity_cups integer not null;
