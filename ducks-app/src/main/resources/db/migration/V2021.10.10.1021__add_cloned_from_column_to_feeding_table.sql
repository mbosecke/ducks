alter table ducks.feeding add column if not exists cloned_from_feeding_id integer references feeding(id);