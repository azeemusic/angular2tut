import { start } from 'repl';
import{Component} from '@angular/core';

import {InMemoryDataService} from './shared/data.service';
import { Todo } from './shared/todo';

@Component({
    moduleId: module.id,
    selector:'app',
    templateUrl:'app.component.html',
    styleUrls:['app.component.css','../styles.css']
})

export class AppComponent{
    title:string ='Angular 2Do';
}