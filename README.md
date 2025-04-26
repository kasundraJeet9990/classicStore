# device table
device_uid
device_ip
status
device_type
operating_system
locked_reason
failed_attempts
location
is_locked
locked_at
last_seen
created_at


# session table 
session_uid
user_uid
device_uid
session_token
type
user_agent
last_active_at
login_method
is_authenticated
is_active
expired_at
created_at


# user table
user_uid
username
phone_number
email_verified
auth_provider
google_id
facebook_id,
email
password_hash
last_login
created_at
updated_at


# anonymous user (if cookies accepted)
anonymous_uid
device_uid
last_active_at
created_at


# addresses
address_uid
user_uid
anonymous_uid
street_address
city_uid
state_uid
country_uid
is_default
postal_code
created_at
updated_at


# countries
country_uid
name
code
created_at
updated_at


# states
state_uid
name
country_uid
created_at
updated_at


# cities
city_uid
name
state_uid
created_at
updated_at


# cases
only added country start and city order avaliable
one device multi user login after one logout
one user login multi device
for seccutity reason add failed attempts for any not valid activity for device lock for 5 minutes not lock user device are locked


ay issues and any more cases for e-commerce web app 


