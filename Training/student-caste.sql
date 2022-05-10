create database studentreligion;
CREATE TABLE studentprofile (
    Id INT NOT NULL AUTO_INCREMENT,
    profilename VARCHAR(10),
    gender VARCHAR(10),
    religion VARCHAR(10),
    castedivision VARCHAR(10),
    city VARCHAR(20),
    mobileno int not null,
    emailid VARCHAR(30),
    loginpassword VARCHAR(10),
    PRIMARY KEY (Id)
);

INSERT INTO studentprofile (profilename,gender,religion,castedivision,city,mobileno,emailid,loginpassword)
VALUES ('A','Male','qwe','in','kochi',12345,'AAA','aaa111'),
('B','Female','ahj','bb','trivandrum',12347,'BB','bbb111'),
('C','Female','qwe','ccc','calicut',12349,'ccc','ccc222'),
('D','Male','zrk','ddd','kannur',12351,'ddd','ddd333'),
('E','Male','ahj','in','kochi',12353,'eee','eee444'),
('F','Female','qwe','fff','trivandrum',12355,'fff','fff555'),
('G','Female','zrk','in','kochi',12357,'ggg','ggg666');

select profilename,gender,studentprofile.castedivision
from studentprofile
join(select castedivision from studentprofile
group by castedivision 
having count(id) > 1)dup on studentprofile.castedivision=dup.castedivision ;

select Id,profilename,castedivision,
count(castedivision)
from
studentprofile
group by castedivision
having count(castedivision)>1;

UPDATE studentprofile
SET 
    city='kollam'
WHERE
    Id=5;
    
select
Id,profilename,gender,city
from studentprofile where 
city='kochi';

UPDATE studentprofile
SET 
    city='Kannur'
WHERE
    city='calicut';

Select profilename,gender,religion
from studentprofile;

Select profilename,gender,religion,city
from studentprofile
where
city='kochi';

INSERT INTO studentprofile (profilename,gender,religion,castedivision,city,mobileno,emailid,loginpassword)
VALUES ('ww','Male','qwe','in','kochi',12345,'xxx','llla111');
INSERT INTO studentprofile (profilename,gender,religion,castedivision,city,mobileno,emailid,loginpassword)
VALUES ('mm','Male','qwe','in','kochi',12345,'yyA','yyy111');
INSERT INTO studentprofile (profilename,gender,religion,castedivision,city,mobileno,emailid,loginpassword)
VALUES ('gg','female','cvf','in','kochi',12345,'AAA','ppp111');




