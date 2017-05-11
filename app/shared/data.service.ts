import {InMemoryDbService} from 'angular-in-memory-web-api';
import { TodoService } from './todo.service';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const todos=[
                {
                    title: 'Изучить Js',
                    completed:true
                },
                {
                    title: 'Изучить Angular2',
                    completed:false
                },
                {
                    title:'Написать приложение',
                    completed:false
                }
        ];
        return {todos};
    }
}
