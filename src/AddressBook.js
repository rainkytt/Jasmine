// loome konstruktor-funktsiooni
function AddressBook() {
  // lisan uue property klassile, mis on massiv
  this.contacts = [];
  // asünkroonse testimise jaoks
  this.initialComplete = false;
}

// loome meetodi getInitialContacts
AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  // setTomeout-ga muudame meetodi asünkroonseks
  setTimeout(function() {
    // võltsitud APi jaoks kui asünkroonne funktsioon on valmis
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
};

// loome uue funktsioon addContact, mille parameetriks on contact ja lükkab contact-i massiivi, mis on AddressBook klassis
AddressBook.prototype.addContact = function(contact) {
  // siit läheb contact AddressBook-i
  this.contacts.push(contact);
};

// loon getContact funktsiooni, mis aktsepteerib index-t ja tagastab masiivi index-iga
AddressBook.prototype.getContact = function(index) {
  //s iit läheb contact AddressBook-i
  return this.contacts[index];
};

// splice meetod on elemendi eemaldamiseks
AddressBook.prototype.deleteContact = function(index) {
  // siit läheb contact AddressBook-i
  return this.splice(index, 1);
};
