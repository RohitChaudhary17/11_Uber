# Uber Backend - User Registration

This is part of the Uber backend API focused on **user registration**. It allows new users to sign up by providing their details, which are then validated, saved in the database, and a **JWT token** is generated for authentication.

## API Documentation

### 1. **POST** `/auth/register`
   - **Endpoint** to register a new user.

#### **Request Body**:
   - **fullname** (Object):
     - **firstname** (String): First name of the user (required, min 3 characters).
     - **lastname** (String): Last name of the user (optional).
   - **email** (String): Email address (required, must be valid).
   - **password** (String): Password (required, between 4 to 20 characters).

Example Request:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
