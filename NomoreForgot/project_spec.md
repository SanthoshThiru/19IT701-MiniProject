# NoMoreForgot — Project Specification

## Purpose
A secure password manager implementing:
- Zero-Knowledge Architecture
- Defense Click Policy against DOM-based clickjacking (2025 attack class)
- Risk-aware credential access

## Architecture
Three-tier:
- Client: React (security-critical)
- Server: Spring Boot (cryptographically blind)
- Data: PostgreSQL (encrypted blobs only)

## Non-Negotiable Rules
- Master password never leaves client
- Encryption/decryption only in browser
- Server never performs crypto
- Credential decryption only after DOM safety checks
- UI trust is not assumed

## Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES2022)
- Web Crypto API
- CSS: Tailwind (or equivalent utility CSS)

### Backend
- Java 17
- Spring Boot 3.x
- JWT authentication

### Database
- PostgreSQL
- Encrypted blobs only

## Core Client Modules
- EncryptionService (PBKDF2 + AES-256-GCM)
- DefenseClickPolicy (DOM inspection, iframe detection)
- RiskPolicy (HIGH / MEDIUM / LOW access enforcement)
- AuditLogger (encrypted events)

## Pages (React)
- Login
- Dashboard
- Vault
- Secure Notes
- Activity / Audit

## Backend Responsibilities
- User authentication (JWT)
- Encrypted CRUD APIs
- No knowledge of plaintext data

## Threat Model Addressed
- DOM-based clickjacking
- UI overlay attacks
- Credential exfiltration via autofill abuse

## Outcome
Even with full server or DB compromise:
- Credentials remain unrecoverable
- UI-based attacks are blocked before decryption
