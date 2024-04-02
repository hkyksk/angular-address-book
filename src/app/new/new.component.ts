import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ContactService } from '../contact.service'
import { Contact } from '../model/contact'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  contactForm!: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const newContact: Contact = { ...this.contactForm.value, id: this.generateUniqueId() }
      console.log('New Contact:', newContact)
      this.contactService.addContact(newContact)
      this.router.navigate(['/contacts'])
    }
  }

  private generateUniqueId(): number {
    const contactsLength = this.contactService.getAllContacts().length
    return contactsLength + 1
  }
}
