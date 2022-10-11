import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-allphoto',
  templateUrl: './allphoto.component.html',
  styleUrls: ['./allphoto.component.css']
})
export class AllphotoComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewallphoto().subscribe(
      (data)=>{
        this.photoadd=data
      }
    )
   }
  photoadd:any=[ ]

  ngOnInit(): void {
  }

}
