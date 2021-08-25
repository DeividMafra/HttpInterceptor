import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'httpInterceptor';

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get("http://localhost:3000/products").subscribe(
      data => {
        console.log(data)
      }
    )
  }
}

