CREATE TABLE IF NOT EXISTS
aricle(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    headLine VARCHAR(50) NOT NULL
    subhead VARCHAR(50) NOT NULL
    content VARCHAR(500) NOT NULL
    cover VARCHAR(100) NOT NULL
)

/*
      {
            "_id": "string", // server generated
            "headLine": "string",
            "subHead": "string",
            "content": "string",
            "category": "string",
            "author": {
                "name": "string",
                "img": "string"
            },
            "cover": "string",
            "createdAt": Date, // server generated
            "updatedAt": Date // server generated
        }
*/

CREATE TABLE IF NOT EXISTS
category(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    category VARCHAR(50) NOT NULL
)
/*
"category": "string",
*/


CREATE TABLE IF NOT EXISTS
authors(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    name VARCHAR(50) NOT NULL 
    lastname VARCHAR(50) NOT NULL
    img VARCHAR(500) NOT NULL
)
/*

 "author": {
                "name": "string",
                "img": "string"
            },


*/

