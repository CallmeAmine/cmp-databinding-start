import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None , ShadowDom
})
export class ServerElementComponent implements OnInit,AfterContentInit {
   @ContentChild('pargarefRef') para : ElementRef;

  constructor() { }
  @Input('srvElement') element : {type:string,content:string,name:string};
  ngOnInit(): void {
    
  }
  ngAfterContentInit(){
    console.log( this.para.nativeElement.textContent);
  }

}
