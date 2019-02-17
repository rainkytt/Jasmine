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

  // defineerin uue spek-i it meetodiga
  it('should be able to deleta a contact', function() {
    // lisan uue AadressBook objekti siia spek-i
    var addressBook = new AddressBook(),
      // see on uus objekt, mis antakse edasi
      thisContact = new Contact();

    // lisan kontakti oma addressBook-le
    addressBook.addContact(thisContact);

    // nüüd saan seda ka kustutada
    addressBook.deleteContact(0);

    // testimaks oma onbekti
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
