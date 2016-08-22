

FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {  
      content: 'carousel'
    } ); 
  },
  name: 'carousel'
});
FlowRouter.route( '/blog', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {  
      content: 'blog'
    } ); 
  },
  name: 'blog'
});
FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {  
      content: 'about'
    } ); 
  },
  name: 'about'
});
FlowRouter.route( '/contact', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {  
      content: 'contact'
    } ); 
  },
  name: 'contact'
});
FlowRouter.route( '/products', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {  
      content: 'products'
    } ); 
  },
  name: 'products'
});