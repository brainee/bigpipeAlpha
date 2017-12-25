function j(selector) {
	if(selector instanceof J){
		return selector;
	}else{
		return wrap(selector);
	}
}

function J(selector){
	this.doms=[];
	if(typeof selector==='string'){
		this.doms=document.querySelectorAll(selector);
	}else if(selector&&'string'===typeof selector.innerHTML){
		this.doms=[selector];
	}
	this[0]=this.doms;
}
J.prototype.each = function(fn) {
	this.doms.forEach(function(v,k){
		// fn.call(wrap(v),v,k);
		fn.call(v,v,k);
	});
};
J.prototype.html=function(html){
	if(!arguments.length){
		html='';
		this.each(function(dom){
			if(dom){
				html+=dom.innerHTML;
			}
			
		});
		return html;
	}else if('string'===typeof html){
		this.each(function(dom){
			if(dom){
				dom.innerHTML=html;
			}
			
		});
		return this;
	}
}
J.prototype.attr = function(attrName,attrValue) {
	if(!arguments.length){
		return attrValue;
	}else if(arguments.length===1){
		if(this.doms[0]){
			attrValue=this.doms[0].getAttribute(attrName);
		}
		return attrValue;
	}else if('string'===typeof attrValue){
		if(this.doms[0]){
			this.doms[0].setAttribute(attrName,attrValue);
		}
		return this;
	}else if('object'===typeof attrName){
		var dom=this.doms[0];
		if(dom){
			object.keys(attrName).forEach(function (name) {
				dom.setAttribute(name,attrName[name]);
			});
		}
		return this;
	}
};

function wrap(selector) {
	return new J(selector);
}
window.$=j;
