import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit-server',
  templateUrl: './cockpit-server.component.html',
  styleUrls: ['./cockpit-server.component.css']
})
export class CockpitServerComponent implements OnInit {
  @Output('servCreated') createdServer= new EventEmitter <{serverName:string,serverContent:string}>();
  @Output('bpCreated') createdBlueprint= new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(server:HTMLInputElement) {
    this.createdServer.emit({
      serverName:server.value,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint(server:HTMLDataElement) {
    this.createdBlueprint.emit({serverName:server.value,serverContent:this.newServerContent});

  }
}
