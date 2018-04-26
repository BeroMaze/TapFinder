(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breweryTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <article id=\"selectedBreweryBeers\">\n      <div class=\"tappedBeerInfo\">\n        <h2>"
    + alias4(((helper = (helper = helpers.beerName || (depth0 != null ? depth0.beerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beerName","hash":{},"data":data}) : helper)))
    + "</h2>\n        <div class=\"beerUpperInfo\">\n          <h4>Status : <span>"
    + alias4(((helper = (helper = helpers.stats || (depth0 != null ? depth0.stats : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stats","hash":{},"data":data}) : helper)))
    + "</span></h4>\n          <h4>ABV : <span>"
    + alias4(((helper = (helper = helpers.ABV || (depth0 != null ? depth0.ABV : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ABV","hash":{},"data":data}) : helper)))
    + "</span></h4>\n          <h4>IBU : <span>"
    + alias4(((helper = (helper = helpers.IBU || (depth0 != null ? depth0.IBU : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IBU","hash":{},"data":data}) : helper)))
    + "</span></h4>\n        </div>\n        <div class=\"beerMidInfo\">\n          <!-- "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hops : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\n          <!-- "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.malts : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\n        </div>\n        <!-- "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.desc : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\n  </article>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " -->\n            <h4>Hops : <span>"
    + container.escapeExpression(((helper = (helper = helpers.hops || (depth0 != null ? depth0.hops : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"hops","hash":{},"data":data}) : helper)))
    + "</span></h4>\n          <!-- ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " -->\n            <h4>Malts : <span>"
    + container.escapeExpression(((helper = (helper = helpers.malts || (depth0 != null ? depth0.malts : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"malts","hash":{},"data":data}) : helper)))
    + "</span></h4>\n          <!-- ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return " -->\n          <p>"
    + container.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"desc","hash":{},"data":data}) : helper)))
    + "</p>\n          <!-- ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article id=\""
    + alias4(((helper = (helper = helpers.breweryID || (depth0 != null ? depth0.breweryID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"breweryID","hash":{},"data":data}) : helper)))
    + "\" class=\"breweryInfo\">\n  <div id=\"BITop\">\n    <img id=\"selectedBreweryLogo\" src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n    <h1 id=\"selectedBreweryName\">"
    + alias4(((helper = (helper = helpers.breweryName || (depth0 != null ? depth0.breweryName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"breweryName","hash":{},"data":data}) : helper)))
    + "</h1>\n  </div>\n  <div id=\"BIBottom\">\n    <a href=\"tel:"
    + alias4(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "</a>\n    <a href=\"http://maps.google.com/maps?q="
    + alias4(((helper = (helper = helpers.locationMap || (depth0 != null ? depth0.locationMap : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"locationMap","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</a>\n    <a href=\""
    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"website","hash":{},"data":data}) : helper)))
    + "\">Website</a>\n  </div>\n</article>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tapList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();