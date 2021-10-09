alter table ducks.feeding drop column user_id;
truncate table ducks.feeding;

alter table ducks.feeding add column username text references users(username) not null;