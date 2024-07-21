package com.sgt.booking.service;

import com.sgt.booking.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");
        String email = (String) body.get("email");
        String fullname = (String) body.get("fullname");
        String mobile = (String) body.get("mobile");

        int noOfRows = userRepository.registerUser(username, password, email, fullname, mobile);

        if (noOfRows > 0) {
            return ResponseEntity.ok(Map.of("status", "Successful"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status", "Failed"));
        }
    }

    public Map<String, Object> loginUser(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");
        return userRepository.LoginUser(username, password);
    }

    public ResponseEntity<String> insertBooking(Map<String, Object> body) {
        int userId = (int) body.get("userId");
        int categoryId = (int) body.get("category_id");
        String timeSelected = (String) body.get("time_selected");

        int noOfRows = userRepository.insertBooking(userId, categoryId, timeSelected);

        if (noOfRows > 0) {
            String userEmail = userRepository.getUserEmailById(userId);
            sendBookingConfirmationEmail(userEmail, categoryId, timeSelected);
            return ResponseEntity.ok("Successfully inserted and booking confirmation email sent");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Insertion failed");
        }
    }

    public ResponseEntity<Map<String, String>> registerWorker(@RequestBody Map<String, Object> body) {
        String name = (String) body.get("name");
        String email = (String) body.get("email");
        String password = (String) body.get("password");
        String contactNumber = (String) body.get("contact_number");
        String category = (String) body.get("category");
        String document = (String) body.get("document");

        int noOfRows = userRepository.registerWorker(name, email, password, contactNumber, category, document);

        if (noOfRows > 0) {
            sendRegistrationConfirmationEmail(email);
            return ResponseEntity.ok(Map.of("status", "Successful"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status", "Failed"));
        }
    }

    private void sendBookingConfirmationEmail(String userEmail, int categoryId, String timeSelected) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

        try {
            mimeMessageHelper.setSubject("Booking Confirmation");
            mimeMessageHelper.setTo(userEmail);
            mimeMessageHelper.setText("Your booking has been confirmed.\n\nCategory ID: " + categoryId + "\nTime Selected: " + timeSelected);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to create MimeMessage", e);
        }

        javaMailSender.send(mimeMessage);
    }

    private void sendRegistrationConfirmationEmail(String userEmail) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

        try {
            mimeMessageHelper.setSubject("Booking Request");
            mimeMessageHelper.setTo(userEmail);
            mimeMessageHelper.setText("You have been booked for s service of appliance repair by user_id=5!");
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to create MimeMessage", e);
        }

        javaMailSender.send(mimeMessage);
    }
}
