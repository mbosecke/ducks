create table ducks.users
(
    username text not null primary key,
    password text not null,
    enabled  boolean not null
);

create table ducks.authorities
(
    username  text not null,
    authority text not null,
    constraint fk_authorities_users foreign key (username) references users (username)
);
create unique index ix_auth_username on authorities (username, authority);

-- test user
insert into ducks.users (username, password, enabled) values ('mitchell', '$2a$10$V1Y76H3RS6V/O2IQznDXKuRGlN5Y0oeHo3ekt75gQZBFvVyHG1lSm', true);

