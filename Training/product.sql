create database Productdetails;
CREATE TABLE tblproduct(
  id int NOT NULL AUTO_INCREMENT,
  txtProdName varchar(50),
  PRIMARY KEY (id)
) ;

CREATE TABLE tblproductstock(
  id int NOT NULL AUTO_INCREMENT,
  refprodid int,
  Stockqty int,
  variation varchar(15),
  PRIMARY KEY (id),
  foreign key (refprodid) references tblproduct(id)
) ;

INSERT INTO tblproduct (txtProdName)
VALUES ('Casual Shirt'),('Formal Shirt'),('TShirt'),('Pants'),('Suit');

INSERT INTO tblproductstock (refprodid,variation,Stockqty)
VALUES (1,'Small',55),(1,'Medium',45),(1,'Large',60),(2,'Small',56),(2,'Medium',80),(2,'Large',55),(3,'Small',46),(3,'Medium',48),(3,'Large',47),(4,'Large',60);

SELECT SUM(Stockqty) AS TotalStockqty FROM tblproduct t join tblproductstock p on t.id = p.refprodid;


SELECT 
    t.txtProdName, p.Stockqty,p.variation
FROM
    tblproduct t
        JOIN
    tblproductstock p ON t.id = p.refprodid
WHERE
    t.txtProdName = 'Tshirt'
    and
    p.variation='small';


UPDATE tblproductstock 
SET 
    Stockqty = 60
WHERE
    refprodid=3
    and
    variation= 'Medium';

SELECT 
    t.txtProdName, p.Stockqty
FROM
    tblproduct t
        JOIN
    tblproductstock p ON t.id = p.refprodid
WHERE
    t.txtProdName = 'Formal shirt';
