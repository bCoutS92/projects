var App = new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      title: "Creative",
      cards: [
        {
          name: "Standard",
          cardColor: "dark",
          items: [
            "winter is coming",
            "the kingsroad",
            "lord snow",
            "cripples, bastards and broken things",
            "the wolf and the lion",
            "a golden crown"
          ]
        },
        {
          name: "Video",
          cardColor: "danger",
          items: [
            "the north remembers",
            "the night lands",
            "what is dead may never die",
            "garden of bones",
            "the ghost of harrenhal"
          ]
        },
        {
          name: "Native",
          cardColor: "silver",
          items: [
            "valar dohaeris ",
            "dark wings, dark words",
            "walk of punishment",
            "and now his watch is ended"
          ]
        }
      ]
    }
    },


  computed: {
    filteredCards() {
      var _this = this
      if(this.search.length === 0) return this.cards
      return this.cards.map(function(card) {
        return {
          name: card.name,
          cardColor: card.cardColor,
          items: card.items.filter(function (item) {
            return item.includes(_this.search)
          })
        }
      })
    }
  },

  methods: {
    removeCard (card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    clearSearchField () {
      this.search = ''
    }
  }
});
