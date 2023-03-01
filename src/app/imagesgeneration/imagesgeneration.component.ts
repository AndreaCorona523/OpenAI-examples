import { Component } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent {

  constructor (private imagesgeneration: ImagesgenerationService) {}

  ngOnInit(): void {}
  result : string = ""; 
  imgPrompt : string = "";

  postEdit(){
    let myprompt = `${this.imgPrompt}`
    
    var payload =
    {
      prompt: myprompt,
      n: 2,
      size: "1024x1024"
    }

    this.imagesgeneration.postImagePrompt(payload).subscribe((data: any) =>{
      //alert(JSON.stringify(data));
      console.log(data);
      this.result = data.url;
      console.log(data.data);
    })
  }

  
}