import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@avengers.com',
    showMessage: false,
    actions: {
      addSubscriber() {
        let self = this;
        let person = this.get('store').createRecord('member', {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email')
        });

        person.save().then(() => {
          self.set('showMessage', true)
        }).catch((err) => {
          Ember.Logger.info(err);
        });;
      }
    }
});
