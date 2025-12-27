package com.nomoreforgot.controller;

import com.nomoreforgot.model.Credential;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api")
public class CredentialController {

    private final List<Credential> credentials = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong();

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");
    }

    @GetMapping("/credentials")
    public ResponseEntity<List<Credential>> getCredentials() {
        return ResponseEntity.ok(new ArrayList<>(credentials));
    }

    @PostMapping("/credentials")
    public ResponseEntity<Credential> createCredential(@RequestBody Credential credential) {
        credential.setId(idCounter.incrementAndGet());
        credentials.add(credential);
        return ResponseEntity.status(HttpStatus.CREATED).body(credential);
    }
}

