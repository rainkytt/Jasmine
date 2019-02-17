describe('Address Book', function() {
  // uus AadressBook-i objekt
  var addressBook,
    // thisContact objekt antakse edasi
    thisContact;

  // Jasmine jaoks funktsioon, mis jookseb enne meie igat testi
  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  // millist funktsiooni täidab
  it('should be able to add contact', function() {
    // kontakti lisamiseks on tarvis uut objekt
    addressBook.addContact(thisContact);

    // kontrollin, kas kontakt antakse edasi ja ootab integer arve
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  // defineerin uue spek-i it meetodiga
  it('should be able to deleta a contact', function() {
    // lisan kontakti oma addressBook-le
    addressBook.addContact(thisContact);

    // nüüd saan seda ka kustutada
    addressBook.deleteContact(0);

    // testimaks oma onbekti
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

// kirjutame uue testi nimega Async Address Book
describe('Async Address Book', function() {
  var addressBook = new AddressBook();

  // lisame jälle beforeEach funktsiooni ja anname callback-i väärtuseks done
  beforeEach(function(done) {
    // kutsume välja done funktsiooni, ehk asünkroonne meetod on nüüd omadega valmis
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  // anname raamistikule signaali, milline meie testidest jooksis asünkroonse meetodi abil
  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
