Vue.component('my-component', {
  template: '<div class="my-conponent">\
    <p>名前.{{ name }} HP.{{ hp }}</p>\
    <p>名前 <input v-model="localName"></p>\
    <p>HP <input size="5" v-model.number="localHp"></p>\
  </div>',
  props: {
    name: String,
    hp: Number
  },
  computed: {
    localName: {
      get: function() { return this.name},
      set: function(val) {this.$emit('update:name', val)}
    },
    localHp: {
      get: function() { return this.hp},
      set: function(val) {this.$emit('update:hp', val)}
    }
  }
});
new Vue({
  el: '#app',
  data: {
    name: 'スライム',
    hp: 100
  }
})
