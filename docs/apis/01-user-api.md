CURL for login:
curl -X 'POST' \
  'http://localhost:8000/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "jane.doe@doe.com",
  "password": "password"
}'

Login reponse:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzcwMjEwMDgyLCJpYXQiOjE3NzAyMDkxODJ9.5oj6VPyCV8zTwIRBvvpSTRj7PXmG4b0KMVYpO20WfyY",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzcwODEzOTgyLCJpYXQiOjE3NzAyMDkxODJ9.VLLlRB47QU1DJZvzFkGnW_4aG3EuebLaSM4ouIzLf64",
  "token_type": "bearer"
}

CURL for me:
curl -X 'GET' \
  'http://localhost:8000/auth/me' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzcwMjEwMDgyLCJpYXQiOjE3NzAyMDkxODJ9.5oj6VPyCV8zTwIRBvvpSTRj7PXmG4b0KMVYpO20WfyY'

Me response:
{
  "id": 2,
  "name": "Jane Doe",
  "phone_number": "email-jane.doe@doe.com",
  "email": "jane.doe@doe.com",
  "is_active": true,
  "created_at": "2026-02-01T07:17:37",
  "updated_at": "2026-02-01T07:17:37"
}
