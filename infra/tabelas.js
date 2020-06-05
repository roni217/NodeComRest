class Tabelas {
    init(conexao) {
        console.log('Tableas foram chamadas')
        this.conexao = conexao
    }

    criarAtendimentos(){
        const sql ='CREATE TABLE atendimento ('+
        'id int NOT NULL AUTO_INCREMENT, '+
        'cliente varchar(50) NOT NULL, '+
        'pet varchar(20), '+
        'servico varchar(20) NOT NULL, '+
        'status varchar(20) NOT NULL, '+
        'observacoes text, '+
        'PRIMARY KEY(id)'

        this.conexao.query(sql, (erro) =>{
            if(erro) {
                console.log(erro)
            }
            
        })
    }
}

module.exports = new Tabelas