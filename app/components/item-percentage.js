import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetails() {
      this.toggleProperty('ShowDetails');
    }
  },

  isImportant: Ember.computed.gte('percentage', 50),

  percentage: Ember.computed('itemPrice', 'orderPrice', function() {
    return this.get('itemPrice') / this.get('orderPrice') * 100;
  })
});
