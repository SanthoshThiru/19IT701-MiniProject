# NoMoreForgot Backend

Minimal Spring Boot backend skeleton for the NoMoreForgot password manager.

## Requirements

- Java 17
- Maven 3.6+

## Running the Application

1. Install dependencies:
   ```bash
   mvn clean install
   ```

2. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start on `http://localhost:8080`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/credentials` - Get all credentials (returns encrypted blobs)
- `POST /api/credentials` - Create a new credential (expects encrypted blob)

## Example Request

```bash
# Health check
curl http://localhost:8080/api/health

# Get credentials
curl http://localhost:8080/api/credentials

# Create credential
curl -X POST http://localhost:8080/api/credentials \
  -H "Content-Type: application/json" \
  -d '{"encryptedBlob": "encrypted_data_here"}'
```

## Notes

- All credential data is treated as encrypted blobs (String)
- No encryption/decryption logic in the backend
- In-memory storage (no database yet)
- No authentication implemented yet

