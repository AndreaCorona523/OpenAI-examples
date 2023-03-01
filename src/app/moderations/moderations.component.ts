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
  
  userPrompt : string = "";
  result_hate : string = ""; 
  result_hate_score : string = ""; 
  result_hate_threatening : string = ""; 
  result_hate_threatening_score : string = ""; 
  result_self_harm : string = "";
  result_self_harm_score : string = "";
  result_sexual : string = "";
  result_sexual_score : string = "";
  result_sexual_minors : string = "";
  result_sexual_minors_score : string = "";
  result_violence : string = "";
  result_violence_score : string = "";
  result_violence_graphic : string = "";
  result_violence_graphic_score : string = "";
  result_flagged : string = "";

  postEdit(){
    let myprompt = `${this.userPrompt}`
    
    var payload =
    {
      input: myprompt
    }
    this.moderations.postModeration(payload).subscribe((data: any) =>{
      //alert(JSON.stringify(data));
      console.log(data);
      this.result_hate = data.results[0].categories;
      console.log(data.results[0]);
    })
  }

  
}
