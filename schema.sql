CREATE DATABASE explore_products;

CREATE TABLE IF NOT EXISTS generator (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  productId INT NOT NULL
);

CREATE TABLE IF NOT EXISTS explorer (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product INT REFERENCES generator(productId) NOT NULL,
  product_brand VARCHAR(100),
  user VARCHAR(100),
  explorer_date VARCHAR(30),
  explorer_comments VARCHAR(150),
  header_comments VARCHAR(150),
  explorer_image VARCHAR(150),
);

CREATE TABLE IF NOT EXISTS articles (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product INT REFERENCES generator(productId) NOT NULL,
  article_img VARCHAR(100),
  article_title VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS videos (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product INT REFERENCES generator(productId) NOT NULL,
  video_title VARCHAR(100),
  videos_list VARCHAR(100),
  videos_thumbnail VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS inner_carousel (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product INT REFERENCES generator(productId) NOT NULL,
  product_description VARCHAR(100),
  product_price DECIMAL,
  product_image VARCHAR(100),
  product_names VARCHAR(100),
);


-- SELECT * FROM products WHERE products.id IN (select * from similars where id = 3) AND products.id = (select * from likes where id = 3);
-- SELECT * FROM products WHERE products.i