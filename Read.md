nosql database is a key value pair database.the nosql database provides a mechanism for storing and retrieval of data.it is not modeled in a tabular format.it is a non tabular database.
the different types apart from mongoDB includes reddis,dynamoDB.

MONGODB as a nosql data base.
it is an open source database and uses a json like document with schemas.
MongoDB consists of 3 things.It consist of database,document and collection.

{
    field:value1,
    field2:value2
}
we have data types like json,array,integers,booleans,date.
mongodb is comparible with so many programming languages.

mongoDB command lines
-show databases; this is used to show you a list of all data bases available
-db.createCollection("") is used to create a new database
-use and name of the file :this is used to choose the database you want to work with i.e you can enter a file by simply writing use and the filename.
-db.createCollection("")..is used to create a collection
db.dropDatabased
db.movie.insert({"name":"javapoint"}) this is used 


pipeline

var pipeline =[
{$sort:{"price":-1}},{$limit:1}
]
db.shop.aggregate(pipeline);