package com.iamneo.security.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.service.ContactService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    @GetMapping("/{contactId}")
    public Contact getContactById(@PathVariable int contactId) {
        return contactService.getContactById(contactId).orElse(null);
    }

    @PostMapping
    public String addContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    @PutMapping("/{contactId}")
    public Contact updateContact(@PathVariable int contactId, @RequestBody Contact contact) {
        return contactService.updateContact(contactId, contact);
    }

    @DeleteMapping("/{contactId}")
    public void deleteContact(@PathVariable int contactId) {
        contactService.deleteContact(contactId);
    }
}

