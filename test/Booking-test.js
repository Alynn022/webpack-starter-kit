import chai from 'chai';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';

const expect = chai.expect;

describe('Booking', function() {
  let booking;
  let customer1;
  let customer2;

  this.beforeEach(() => {
    booking = new Booking({"id":"5fwrgu4i7k55hl6t8","userID":1,"date":"2022/02/05","roomNumber":12,"roomServiceCharges":[]})

    customer1 = new Customer([{"id":1,"name":"Leatha Ullrich"}])
    customer2 = new Customer([{"id":2,"name":"Rocio Schuster"}])
  });

  it('Should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('Should be an instance of Bookings', function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('Should sortDate', function() {
    booking.sortDate();
    expect(booking.date).to.deep.equal("02/05/2022");
  });
});