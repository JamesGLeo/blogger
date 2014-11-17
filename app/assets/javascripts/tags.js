

// Tag constructor
var Tag = function Tag(text){
    this.text = text;
    this.CreatedAt = new Date();
};


// TagViews constructor
var TagView = function TagView(model) {
    this.model = model;
};

TagView.prototype.render = function render(){
    this.$el = this.tagTemplate(this.model.text);
    var that = this;
    this.$el.find("button").on("click", function() {
        $(that.model).trigger("destroy");
    });
    return this;
};

TagView.prototype.tagTemplate = function tagTemplate(text) {
    var $span = $(" <span class='tag clearfix'> " + text + " </span> ");
    var $button = $("<button>[X]</button>");
    $span.prepend($button);
    return $span;
};


// Taglists constructor
var TagList = function TagList() {
    this.models = [];
};

TagList.prototype.add = function add(tag) {
    this.models.push(tag);
    this.listenTo(tag, 'destroy');
    $(this).trigger('change');
};

TagList.prototype.remove = function remove(tag) {
    this.models.splice(this.models.indexOf(tag),1);
    $(this).trigger('change');
};

TagList.prototype.listenTo = function (model, event) {
    var that = this;
    $(model).on("destroy", function() {
        console.log("destroyed!");
        that.remove(model);
    });
};


// TaglistViews constructor
function TagListView($el, collection) {
    this.$el = $el;
    this.collection = collection;
    $(this.collection).on('change', $.proxy(this.render, this));
}

TagListView.prototype.render = function render() {
    this.$el.empty();
    var that = this;
    $(this.collection.models).each(function(idx, tag) {
        var view = new TagView(tag);
        that.$el.append(view.render().$el);
    });
};


// JQuery Document Ready
$(function() {



});