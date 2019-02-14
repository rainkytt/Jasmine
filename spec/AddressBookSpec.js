describe('Address Book', function() {
  // millist funktsiooni täidab
  it('should be able to add contact', function() {
    // uus AadressBook-i objekt
    var addressBook = new AddressBook(),
      // thisContact objekt antakse edasi
      thisContact = new Contact();

    // kontakti lisamiseks on tarvis uut objekt
    addressBook.addContact(thisContact);

    // kontrollin, kas kontakt antakse edasi ja ootab integer arve
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
