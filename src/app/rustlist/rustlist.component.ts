import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ServerInfo} from 'src/app/server-info';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FilterPipe} from 'src/app/filter.pipe';
@Component({
  selector: 'app-rustlist',
  templateUrl: './rustlist.component.html',
  styleUrls: ['./rustlist.component.css']
})
export class RustlistComponent implements OnInit {
  filter: FilterPipe;
  search: string;
  serverdata:ServerInfo[];
  
  http:HttpClient;
  testserver: ServerInfo;
  tags= [];
  urlString = "https://api.battlemetrics.com/servers?filter[game]=rust&filter[countries][]=US&page[size]=100";
  test = [];

  ngOnInit() {
  fetch(this.urlString).then(resp => {return resp.json()}).then(data =>{
    this.serverdata = [];
    for (let i =0;i<data.data.length;i++){

      let wipe = data.data[i].attributes.details.rust_lastwipe;
      
      
      let currentplayers = data.data[i].attributes.players;
      let descrip = data.data[i].attributes.details.rust_description;
      let name = data.data[i].attributes.name;
      let img = data.data[i].attributes.details.rust_headerimage;
      if(img ===""){
        img = 'https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg?t=1562144597';
      }
      let tag_search = data.data[i].attributes.details.rust_description;
      let tags =[];
      if(data.data[i].attributes.details.rust_modded === false){
        tags.push("Vanilla")
      }else{
        tags.push("Modded")
      }
        if(tag_search.split(" ").includes("2x") ) {
      tags.push("2X")
      
        }
     
      this.testserver = new ServerInfo(name,img,currentplayers,descrip,tags);
      console.log();
      this.serverdata.push(this.testserver);


    }
    console.log(this.serverdata);



  });
  console.log(this.test);
 
  
  console.log(this.urlString);



}
  
}
