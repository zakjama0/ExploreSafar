package com.example.demo.repositories;

import com.example.demo.models.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {

    @Query(value = """
            SELECT t from Token t INNER JOIN User u\s
            ON t.user.id = u.id\s
            WHERE u.id = :id AND (t.expired = false OR t.revoked = false)\s
            """)
    List<Token> findAllValidTokenByUser(Long id);

    Optional<Token> findByToken(String token);
}
