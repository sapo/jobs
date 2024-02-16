CREATE TABLE users (
    id          INT             NOT NULL AUTO_INCREMENT,
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (birth_date, first_name, last_name)
VALUES
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'John', 'Doe'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Jane', 'Doe'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Alice', 'Smith'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Bob', 'Johnson'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Emily', 'Brown'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Michael', 'Davis'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Olivia', 'Miller'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'William', 'Wilson'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Sophia', 'Anderson'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'James', 'Taylor'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Ava', 'Clark'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Benjamin', 'Lewis'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Mia', 'Harris'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Henry', 'Martin'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Charlotte', 'Anderson'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Alexander', 'Brown'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Amelia', 'Johnson'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Daniel', 'Miller'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Sophia', 'Davis'),
    (DATE_SUB(CURRENT_DATE(), INTERVAL FLOOR(RAND() * 365*50) DAY), 'Joseph', 'Wilson');
