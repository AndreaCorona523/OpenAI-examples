import { Component } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {

  constructor (private moderations: ModerationsService) {}

  ngOnInit(): void {}
  result : string = ""; 
  userPrompt : string = "";

  postEdit(){
    let myprompt = `${this.userPrompt}`
    
    var payload =
    {
      input: myprompt
    }
    this.moderations.postModeration(payload).subscribe((data: any) =>{
      //alert(JSON.stringify(data));
      console.log(data);
      this.result = data.results[0].categories;
      console.log(data.results[0]);
    })
  }

  
}
