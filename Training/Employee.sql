CREATE TABLE tblempname(
    empid int NOT Null auto_increment,
    txtempname varchar(50),
    empph int not null,
    emplocationpin int not null,
    empaddress varchar(50),
    PRIMARY KEY (empid)
);

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('A',99,6820,'AAA');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('B',98,6821,'BB');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('C',96,6820,'CCC');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('D',93,6822,'DDD');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('E',92,6820,'EEE');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('F',91,6820,'FFF');

INSERT INTO tblempname (txtempname,empph,emplocationpin,empaddress)
VALUES ('G',90,6820,'GGG');

SELECT empaddress
FROM tblempname;

SELECT empid
FROM tblempname
WHERE empid>4;

SELECT empid,txtempname
FROM tblempname
WHERE empid=4 or empid=5;

SELECT empid,txtempname,empaddress,emplocationpin,empph
FROM tblempname
WHERE emplocationpin=6820;

UPDATE tblempname
SET empph = 100
WHERE txtempname = 'G';

SELECT txtempname,empid
FROM tblempname
ORDER BY empid ASC;

SELECT txtempname,empid
FROM tblempname
ORDER BY empid DESC;
