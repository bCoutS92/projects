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
            "a golden crown",
            "you win or you die",
            "the pointy end",
            "baelor",
            "fire and blood"
          ]
        },
        {
          name: "Video",
          cardColor: "red",
          items: [
            "the north remembers",
            "the night lands",
            "what is dead may never die",
            "garden of bones",
            "the ghost of harrenhal",
            "the old gods and the new",
            "a man without honor",
            "the prince of winterfell",
            "blackwater",
            "valar morghulis"
          ]
        },
        {
          name: "Native",
          cardColor: "gray",
          items: [
            "valar dohaeris ",
            "dark wings, dark words",
            "walk of punishment",
            "and now his watch is ended",
            "kissed by fire",
            "the climb",
            "the bear and the maiden fair",
            "second sons",
            "the rains of castamere",
            "mhysa"
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
