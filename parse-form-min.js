// Parse Form - https://github.com/AdamBrodzinski/parse-form
ParseForm=function(a){var b=this;return a?(this.$el=$(a),this.el=this.$el[0],this.inputs=this.$el.serializeArray(),$.each(this.inputs,function(a){var d=b.inputs[a].name;b[d]=b.inputs[a].value,b["$"+d]=b.$el.find("input:nth-child("+(a+1)+")")}),void 0):console.error("You must provide an element or selector")},ParseForm.prototype.reset=function(){this.el.reset()};