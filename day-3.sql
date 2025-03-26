--  Difficile

-- 8 

select * from employee ORDER BY salaire DESC

-- 9 

select nom, departement from employee where salaire>2500 and departement='IT'

--10

select * from employee where nom like '%e%' and departement='Finance'