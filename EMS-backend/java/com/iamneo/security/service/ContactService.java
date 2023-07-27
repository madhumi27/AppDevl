package com.iamneo.security.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public String saveContact(Contact contact) {
        contactRepository.save(contact);
        return "true";
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Optional<Contact> getContactById(int contactId) {
        return contactRepository.findById(contactId);
    }

    public Contact updateContact(int contactId, Contact contact) {
        Optional<Contact> existingContact = contactRepository.findById(contactId);
        if (existingContact.isPresent()) {
            Contact updatedContact = existingContact.get();
            updatedContact.setCity(contact.getCity());
            updatedContact.setState(contact.getState());
            
            updatedContact.setEmail(contact.getEmail());
            updatedContact.setPhoneNumber(contact.getPhoneNumber());
            updatedContact.setGitHub(contact.getGitHub());
            updatedContact.setLinkedIn(contact.getLinkedIn());
            return contactRepository.save(updatedContact);
        }
        return null;
    }

    public void deleteContact(int contactId) {
        contactRepository.deleteById(contactId);
    }
}
