import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@Input('serverElements')  serverElements = [{type:'server',name:'jsutserver',content:'text'}];

onCreatedServer(serverData:{serverName:string,serverContent:string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onCreatedBlueprint(serverData:{serverName:string,serverContent:string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

}
