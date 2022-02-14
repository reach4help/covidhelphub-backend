-- Creation of product table
CREATE TABLE IF NOT EXISTS organization (
  id SERIAL NOT NULL,
  org_name varchar(250) NOT NULL,
  PRIMARY KEY (id)
);