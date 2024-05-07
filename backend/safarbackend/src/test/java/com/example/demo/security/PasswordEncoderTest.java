package com.example.demo.security;

import com.example.demo.models.NewUserDTO;
import com.example.demo.models.User;
import com.example.demo.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PasswordEncoderTest {

    @Autowired
    UserService userService;

    private static final String NAME = "John";
    private static final String EMAIL = "john@example.com";
    private static final String PASSWORD = "password";

    private long userId;

    @BeforeEach
    public void setUp() {
        NewUserDTO newUser = new NewUserDTO(NAME, EMAIL, PASSWORD);
        userService.saveUser(newUser);
    }

    @Test
    public void testPasswordHasBeenCorrectlyHashed() {
        User user = userService.getUserByEmail(EMAIL);
        assertThat(user.getPassword()).isNotEqualTo(PASSWORD);
    }
}