create database student1;
CREATE TABLE studentdetails(
    Id int NOT Null auto_increment,
    txtstudentname varchar(10),
    district varchar(10),
    txtstatus varchar(10),
	PRIMARY KEY (Id)
    );

 CREATE TABLE tblsubjects(
    Id int NOT Null auto_increment,
    txtsubjectN varchar(10),
	PRIMARY KEY (Id)
    );
    
 CREATE TABLE Marks(
    Id int NOT Null auto_increment,
    refstudentid int,
    refsubjectid int,
    marks int,
	PRIMARY KEY (Id),
    foreign key (refstudentid) references studentdetails (Id),
    foreign key (refsubjectid) references tblsubjects (Id)
);
INSERT INTO studentdetails (txtstudentname,district,txtstatus)
VALUES ('Anil','TVM',''),('Ajay','KLM',''),('Hari','TCR',''),('Arun','CLT',''),('Babu','EKM','');

INSERT INTO tblsubjects(txtsubjectN)
VALUES ('English'),('Maths'),('Science'),('History'),('Chemistry');

INSERT INTO marks (refstudentid,refsubjectid,marks)
VALUES (1,1,20),(1,2,30),(1,3,10),(1,4,44),(1,5,32);

INSERT INTO marks (refstudentid,refsubjectid,marks)
VALUES (2,1,28),(2,2,26),(2,3,35),(2,4,44),(2,5,29);

INSERT INTO marks (refstudentid,refsubjectid,marks)
VALUES (3,1,28),(3,2,29),(3,3,44),(3,4,36),(3,5,28);

INSERT INTO marks (refstudentid,refsubjectid,marks)
VALUES (4,1,29),(4,2,44),(4,3,46),(4,4,41),(4,5,28);

INSERT INTO marks (refstudentid,refsubjectid,marks)
VALUES (5,1,18),(5,2,25),(5,3,26),(5,4,19),(5,5,29);

update studentdetails
set txtstudentname='Ajaykumar'
where txtstudentname='Ajay';

update studentdetails
set district='WYND'
where id=3;

update Marks
set marks=20
where marks<20;

set sql_safe_updates=0;

SELECT marks,('english'+'maths'+'Chemistry'+'Science'+'history') AS 'totalmarks'
From marks;






