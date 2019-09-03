import { Component } from '@angular/core';
import { organisations_exmaple, Item } from './organisations.example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  organisations: any[] = organisations_exmaple;

  saveChanges() {
    /*
     * here is your code
     */
  }

  sendChanges(organisation_id, item: Item) {
    /* example
    * this.exampleService.updateOrganisation(organisation_id, item).subscribe((result) => console.log(result) )
    */

    /*
     * here is your code
     */
  }
}
