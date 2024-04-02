import { Component, Input, inject } from '@angular/core'
import { ContactService } from '../contact.service'
import { Contact } from '../model/contact'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contactService = inject(ContactService) 
  contacts: Contact[] = this.contactService.getAllContacts()
}
