// loome konstruktor-funktsiooni
function AddressBook() {
  // lisan uue property klassile, mis on massiv
  this.contacts = [];
}

// loome uue funktsioon addContact, mille parameetriks on contact ja lükkab contact-i massiivi, mis on AddressBook klassis
AddressBook.prototpe.addContact = function(contact) {
  // siit läheb contact AddressBook-i
  this.contacts.push(contact);
};

// loon getContact funktsiooni, mis aktsepteerib index-t ja tagastab masiivi index-iga
AddressBook.prototpe.getContact = function(index) {
  //s iit läheb contact AddressBook-i
  return this.contacts[index];
};

// splice meetod on elemendi eemaldamiseks
AddressBook.prototpe.deleteContact = function(index) {
  // siit läheb contact AddressBook-i
  return this.splice(index, 1);
};
