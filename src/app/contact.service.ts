import { Injectable } from "@angular/core"
import { Contact } from "./model/contact"
import { Contacts } from "./data/contacts"
import { zip } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private currentId: number = 1
    public contacts: Contact[] = Contacts

    public getContactById(id: number): Contact | undefined {
        return this.contacts.find(contact => contact.id === id)
    }
    
    public getAllContacts(): Contact[] {
        return this.contacts 
    }

    public addContact(contact: Contact) {
        this.contacts.push(contact)
    }

    public editContact(editedContact: Contact) {
        this.contacts = this.contacts.map((contact) =>
            contact.id == editedContact.id ? editedContact : contact
        )
    }
}