import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor() {}
ngOnInit()
{
  let numero=10;
  numero=20;
  
  numero=numero+10;
 debugger;
  //console.log('hola edwin');
  console.log(numero);
}
}
