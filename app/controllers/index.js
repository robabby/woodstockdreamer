import Controller from '@ember/controller';

export default Controller.extend({
    firstName: 'Ned',
    lastName: 'Stark',
    email: 'ned@winterfell.com',
    actions: {
      addSubscriber() {
        let person = this.get('store').createRecord('member', {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email')
        });

        person.save();
        // var self = this;
        // thing.save().then(function() {
        //   self.transitionTo('things');
        // }).catch(function(reason) {
        // });
      }
    }
});
