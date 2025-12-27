package com.nomoreforgot.model;

public class Credential {
    private Long id;
    private String encryptedBlob;

    public Credential() {
    }

    public Credential(Long id, String encryptedBlob) {
        this.id = id;
        this.encryptedBlob = encryptedBlob;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEncryptedBlob() {
        return encryptedBlob;
    }

    public void setEncryptedBlob(String encryptedBlob) {
        this.encryptedBlob = encryptedBlob;
    }
}

