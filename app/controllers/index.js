import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@avengers.com',
    actions: {
      addSubscriber() {
        let person = this.get('store').createRecord('member', {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email')
        });

        person.save();
      }
    }
});
