package com.mitchellbosecke.users;

import com.mitchellbosecke.feeding.Feeding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {


}
