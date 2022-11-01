//Backbone model
var Blog = Backbone.Model.extend({
  default: {
    author: '',
    title: '',
    url: '',
  }
})

//Backbone Collection
var Blogs = Backbone.Collection.extend({

})


//Instance two blog
var blog1 = new Blog({
  author: "Nick",
  title: "first blook",
  url: "https://123123"
})
var blog2 = new Blog({
  author: "King",
  title: "second blook",
  url: "https://123123"
})

//Instance a collection

var blogs = new Blogs([blog1, blog2])