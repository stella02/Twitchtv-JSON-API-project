

// client ID: okv22tdhxw535ucgofi8cohldb75y3

$(document).ready(function(){
  var logo, name, status, api;
  
  // get FCC stream info
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
    headers: {
    'Client-ID': 'okv22tdhxw535ucgofi8cohldb75y3',
  },
    success: function(result1){
    // console.log(result1);
      
     status= (result1.stream==null)? 'offline': 'online' ;
    // alert(status);
     //$('#fcc').find('#name').after("<div class='col-md-6' id='status'>"+status+"</div>");
      $('#fcc').find("#status").html(status);
      $('#fcc').attr('id', status);
    },
  });
  
  // get FCC followers' streams info
  $.ajax({
    url:'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels',
   headers: {
    'Client-ID': 'okv22tdhxw535ucgofi8cohldb75y3',
  },

    success: function(result2){
     // console.log(result2);
      for(var i=0; i<result2.follows.length;i++){
        logo = (result2.follows[i].channel.logo==null)?'http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png':result2.follows[i].channel.logo;
        
        name =result2.follows[i].channel.display_name;
        api = result2.follows[i].channel.url;
        status = ( result2.follows[i].channel.status == null)? 'offline':'online';
        
       // console.log(logo);
        //console.log(name);
        //console.log(status);
        //console.log(api);
        
        $('.tvs').append("<div class='row' id= '"+status +"'><div class='col-md-3' id='logo'><img src='"+logo+"'/></div><div class='col-md-3' id='name'><a href="+api+" target='_blank'>"+name+"</a></div><div class='col-md-6' id='status'>"+status+"</div></div>");
        
        
      }
      
    },
    
    error: function(err){
      console.log('error: '+err);
    }
    
  });

  // listen to all-btn/online-btn/offline-btn
  
  $('#all-btn').click(function(){
    
      $('.tvs #online,.tvs #offline').css('color','green').show();
  });
  
  $('#online-btn').click( function(){
     //alert('online-btn');
    $('.tvs #online').css('color','blue');
   // $('.tvs').find('#offline').addClass("hidden");
     $('.tvs #offline').hide();
     $('.tvs #online').show();
    
  });
  
  $('#offline-btn').click(function(){
   // alert('offline-btn');
      $('.tvs #offline').css('color','grey');
      $('.tvs #online').hide();
       $('.tvs #offline').show();
  });
  
});