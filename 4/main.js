new Vue({
  el: '#app',
  data: {
    name: 'モンスター',
    hp: 0,
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    doAdd: function(){
      var max = this.list.reduce(function(a, b){
        return a > b.id ? a : b.id
      }, 0)

      this.list.push({
        id: max + 1,
        name: this.name,
        hp: this.hp
      })
    },

    doRemove: function(index){
      this.list.splice(index, 1)
    },

    doAttack: function(index){
      this.list[index].hp -= 50
    }
  }
})
