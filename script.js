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

//View one blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.blogs-list-template').html())
  },
  render: function() {
    this.$el.html(this.template({model: this.model.toJSON()}))
    // return this

  }
})
//View all blog

var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function() {
    this.model.on('add', this.render, this)
  },
  render: function() {
    var self = this
    this.$el.html('');
    _.each(this.model.toArray(), function(blog){
      self.$el.append((new BlogView({model: blog})).render().$el)
    })
    // return this

  }
})

var blogsView = new BlogsView()

$(document).ready(function() {
  $('.add-blog').on('click', function() {
    var blog = new Blog({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      url: $('.url-input').val(),
    })
    console.log(blog.toJSON())
    blogs.add(blog)
  })
})