$(document).ready(function () {
  app.initialized().then(function (_client) {
    var client = _client;
    client.events.on('app.activated', function () {
      var eventCallback = function (event) {
        // console.log("event",event);
        console.log("Event :",event.data.cf_date);
          client.iparams.get().then(function (iparam) {
                  console.log({ iparam });
                  

                  
                
      var object ={
                      "status": 2,
                      "priority": 1,
                      "custom_fields":{
                      "cf_eta": "ETA-Changed"
                      },
                  };
                  let server = JSON.stringify(object);
                  var headers = { "Authorization": "Basic <%= encode(iparam.apiKey) %>",
                  "Content-Type": "application/json; charset=utf-8" };
                  var options = { headers: headers,body:server};
                  client.data.get("ticket").then(function(data){
                    console.log(data.ticket.id);
                  var url = `https://${iparam.domain}/api/v2/tickets/${data.ticket.id}`;
                  if(event.data.cf_date){

                    client.request.put(url, options)
                      .then(
                          function (data) {
                              console.log(data);
                          },
                          function (error) {
                              console.log(error);
                          });
                        }
                        });
                      });
          }
      
      client.events.on("ticket.customFieldChanged", eventCallback);

        
      });
    });
      });           
         
        // const data=event.data;
        // if(data.cf_date in data!=null){
        //   const new_data=event.data.cf_date.new;
        //   console.log(new_data);
        // }
        // else{
        //   console.log("hhhhhh")
        // }
      
      
  
    //     client.iparams.get().then(function (iparam) {
    //       console.log({ iparam });
    //       var object = {
    //           "status": 2,
    //           "source":2,
    //           "priority": 1,
    //           "description": "ETA-Changed."
    //       };
    //       let server = JSON.stringify(object);
    //       var headers = { "Authorization": "Basic <%= encode(iparam.apiKey) %>",
    //       "Content-Type": "application/json; charset=utf-8" };
    //       var options = { headers: headers, body:server };
    //       var url = "https://arunkarthick0012assist.freshdesk.com/api/v2/tickets/654";

    //       client.request.put(url, options)
    //           .then(
    //               function (data) {
    //                   console.log(data);
    //               },
    //               function (error) {
    //                   console.log(error);
    //               });
    //   });


        
    // }
    //   
    //   });
    //   });
      
  
       
      
        // client.events.on("ticket.customFieldChanged", customEvent);
        // return false
        // console.log('event',event);
        // if(Date in event.data!=null){
          
        //   const new_data=event.data.cf_date.new;
        //   console.log(new_data);
        // }
        
        // just update the custom field statically

        // var event_data = event.helper.getData();
        // console.log({ event_data });
        // event.helper.done()
      

