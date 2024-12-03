import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Local from '../models/Local';

class LocalController{

    async find(req: Request, res: Response){
        const repository = getRepository(Local);

        const id = req.params.id;

        const j = await repository.findOne({where : {id}});

        if(j){     
            console.log(j);      
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    }

    async list(req: Request, res: Response){
        const repository = getRepository(Local);
        const lista = await repository.find();
        return res.json(lista);
    }

    //metodos para a insercao, alteracao e remoçao de Endereco.

    async store(req: Request, res: Response){

        const repository = getRepository(Local);//recupera o repositorio de Endereço
        //console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }    
    
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Local);
            const {id} = req.body;
            const end = await repository.findOne({where : {"id" : id }});
            if(end){
                await repository.remove(end);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Local);//recupera o repositorio do PAtente.
    
        const {id} = req.body;//extrai os atributos id do corpo da mensagem
    
        const idExists = await repository.findOne({where :{id}});//consulta na tabela se existe um registro com o mesmo id.
        
        if(!id){
            return res.sendStatus(404);
        }
        
        const p = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(p); //persiste (update) a entidade na tabela.
        
        return res.json(p);
}



}

export default new LocalController();