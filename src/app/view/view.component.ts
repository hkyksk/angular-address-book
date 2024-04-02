import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ContactService } from '../contact.service'
import { Contact } from '../model/contact'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.contact = this.contactService.getContactById(id)
  }
}
