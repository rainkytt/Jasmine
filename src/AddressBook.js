// loome konstruktor-funktsiooni
function AddressBook() {
  //lisan uue property klassile, mis on massiv
  this.contacts = [];
}

//loome uue funktsioon addContact, mille parameetriks on contact ja lükkab contact-i massiivi, mis on AddressBook klassis
AddressBook.prototpe.addContact = function(contact) {
  //siit läheb contact AddressBooki
  this.contacts.push(contact);
};

//loon getContact funktsiooni, mis aktsepteerib index-t ja tagastab masiivi index-iga
AddressBook.prototpe.getContact = function(index) {
  //siit läheb contact AddressBooki
  return this.contacts[index];
};
