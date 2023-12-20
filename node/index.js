const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express()
const port = 3000
const config = {
    host: 'db', 
    user: 'root', 
    password: 'admin', 
    database: 'nodedb'
}

app.get('/', (req, res) => {

    try {
        let htmlLista = ''

        const mysql = require('mysql2')
        const connection = mysql.createConnection(config)
    
        let sql = `DROP TABLE IF EXISTS people;`
        connection.query(sql)
        
        sql = `create table people (id int not null AUTO_INCREMENT PRIMARY KEY, name varchar(255) not null);`
        connection.query(sql)
        
        sql = `insert into people (name) values ('Edgar Lima');`
        connection.query(sql)
        
        
        // insere nomes fictícios 
        for (let i = 1; i <= 10; i++) {
            let randomName = faker.person.fullName()
            randomName = randomName.split("'").join( " ")
            sql = "insert into people (name) values ('" + randomName + "');"
            connection.query(sql)
            
        }
    
    
        connection.query('SELECT * FROM people', function (err, result, field) {
            if (err) {
                res.send('<h1>Erro ao executar a consulta</h1>' + err)
            } else {
                
                htmlLista += '<h2>- Lista de nomes cadastrada no banco de dados. </h2>'
                htmlLista += '<h3>Foram encontrados ' + result.length + ' registros. </h3>'
    
                htmlLista += "<ul>"
                for (var i in result) {
                    htmlLista += "<li>" + result[i].id + " - " + result[i].name + "</li>";
                }
                htmlLista += "</ul>"
                res.send('<h1>Full Cycle Rocks!</h1>' + htmlLista)
                connection.end()
            }
        }); 
    } catch (error) {
        res.send('<p>Erro ao carregar a lista, por favor, tente novamente; ' + error + '</p>')
    }
    

    
})

app.listen(port, ()=> {
    console.log('Rodando na porta' + port)
})
