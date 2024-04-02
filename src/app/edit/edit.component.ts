import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router' 
import { Contact } from '../model/contact'
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactForm!: FormGroup
  contact: Contact | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      const contact = this.contactService.getContactById(parseInt(id, 10))
      if (contact) {
        this.contact = contact
        this.createForm()
      }
    }
  }

  createForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    })
  }

  editContact(): void {
    if (this.contactForm.valid && this.contact) {
      const editedContact: Contact = { ...this.contactForm.value, id: this.contact.id }
      this.contactService.editContact(editedContact)
      this.router.navigate(['/contacts', this.contact.id])
    }
  }
}
