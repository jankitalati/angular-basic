import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';
interface dataType{

  name:string,
  id:number,
  indian:boolean

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'talati';
  data="dakor";
  name="janki"; 
  show=false;
  
  color="red";
  bgColor="green";

  update(){
    this.color="blue";
    this.bgColor="red";
  }

  user=['janki','dax','nipa'];
  userDeatails=
  [
    {name:'janki',id:'j@g.com',nub:'1234',social:['fb','insta']},
    {name:'dax',id:'j@g.com',nub:'1234',social:['yahoo','ld']},
    {name:'nipa',id:'j@g.com',nub:'1234',social:['fb','indeed']}
    

  ];
  getdata(){
    return "function";
  }
  getName(name:string){
    alert(name);
  }
  getData(val:string){
    console.warn(val);
  }

  displayVal:string='';
  getVal(val:string){
    console.warn(val);
    this.displayVal=val;

  }
  count=0;
  counter(type:string){
    type==='add' ?  this.count++ : this.count--

  }
 //model

 getData1()
    {
      const data1:dataType={name:'janki',id:1,indian:true}
       return data1;       
    }

}