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
auth_provider
user_role
email
avatar
password_hash
last_login
created_at
updated_at


# auth_requests
auth_request_uid
user_uid
device_uid
anonymous_uid
request_type
contact_method
contact_value
otp_code
magic_link_token
expires_at
used_at
created_at


# anonymous user (if cookies accepted)
anonymous_uid
device_uid
last_active_at
created_at


# user_metrics
user_uid
last_login
total_logins
devices_used
sessions_created
first_seen_at
last_active_at


# login events
event_uid
user_uid
device_uid
anonymous_uid
event_type
login_method
status
reason
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
is_active
created_at
updated_at


# states
state_uid
name
country_uid
is_active
created_at
updated_at


# cities
city_uid
name
state_uid
is_active
latitude
longitude
created_at
updated_at


# articles
articles_uid
title
content
featured_image
published_at
created_at
updated_at


# article_tags
tags_uid
name
created_at
updated_at


# tagged_articles
tagged_articles_uid
articles_uid
tags_uid
created_at
updated_at


# article_views
article_views_uid
articles_uid
user_uid
viewed_at


# article_likes
article_likes_uid
articles_uid
user_uid
liked_at


# article_reads
article_reads_uid
articles_uid
user_uid
scroll_percentage
read_at


# banners
banners_uid
banner_image
button_text
button_link
is_active
created_at
updated_at


# banner_clicks
banner_clicks_uid
banners_uid
user_uid
clicked_at



# subscribers
subscribers_uid
email
is_active
subscribed_at

# categories
category_uid
name
description
is_active
created_at
updated_at

# product_categories
product_category_uid
product_uid
category_uid
is_active
created_at

# cart_items
cart_item_uid
user_uid
product_uid
product_color_uid
product_size_uid
quantity
price
created_at
updated_at

# colors
colors_uid
name
hex_code
is_active
created_at
updated_at

# sizes
sizes_uid
name
is_active
created_at
updated_at

# products
product_uid
name
price
price_override
description
is_active
created_at
is_deleted
updated_at

# product_colors
product_color_uid
product_uid
colors_uid
is_active
created_at
updated_at

# product_color_images
image_uid
product_color_uid
image_url
alt_text
is_primary
created_at

# product_sizes
product_size_uid
product_color_uid
sizes_uid
stock
is_active
created_at
updated_at

# collections
collection_uid
name
description
is_active
created_at
updated_at

# product_collections
product_collection_uid
product_uid
collection_uid
created_at

# lookbooks
lookbook_uid
name
description
cover_image_url
created_at

# lookbook_products
lookbook_product_uid
lookbook_uid
product_uid

# wishlists
wishlist_uid
user_uid
created_at

# wishlist_items
wishlist_item_uid
wishlist_uid
product_uid

# product_reviews
review_uid
product_uid
user_uid
rating
comment
created_at








# cases
only added country start and city order avaliable
one device multi user login after one logout
one user login multi device
for seccutity reason add failed attempts for any not valid activity for device lock for 5 minutes not lock user device are locked


ay issues and any more cases for e-commerce web app 


1. user enter website ask for cookie if accpted start api else not 
  11.  first device api with return id and anonymous api with reutn id
  12.  with login cart save and and order all reqired filed and enter mobile send otp and vefired after anonymous to user redict and payment process
  13.  with out login ask login and if login sucess all anonymous data are convert in user and delete anonymous data
  14.  sign-up/sign-in google login,facebook login,email or phone number




# left 
Order
payment
CMS
coupon code



src/
├── main.ts
├── app.module.ts
├── config/
│   └── config.module.ts
│   └── config.service.ts
│   └── *.config.ts  # e.g. database.config.ts, auth.config.ts
├── common/
│   ├── decorators/
│   ├── exceptions/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── utils/
├── core/  # Global providers/services
│   └── logger/
│   └── http/
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   └── strategies/
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   └── dto/
│   │   └── entities/
│   └── posts/
│       ├── posts.module.ts
│       ├── posts.service.ts
│       ├── posts.controller.ts
│       └── dto/
│       └── entities/
├── database/
│   ├── database.module.ts
│   ├── prisma.service.ts (or typeorm/mongoose depending)
│   └── migrations/
├── interfaces/
│   └── global interfaces or enums
├── tests/
│   └── unit/
│   └── e2e/


docker run --name my-postgres -e POSTGRES_USER=johndoe -e POSTGRES_PASSWORD=randompassword -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
docker exec -it my-postgres psql -U johndoe -d mydb

Blaupunkt BH61
https://amzn.in/d/c5lM1od