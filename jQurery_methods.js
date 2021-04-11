
$(document).ready(function(){
    const Url = 'https://jsonplaceholder.typicode.com/posts'
    $("button").click(function(){
    //   $("p").hide();
    
    });
  });



  

  $(document).ready(function(){
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    $("button").click(function(){
        $.get(Url,function(data,status){
            console.log(`${data}`)
        })
    })
  });

// $(document).ready(function(){
//     const Url = 'https://jsonplaceholder.typicode.com/posts';
//     $('.btn').click(function(){
//         $.ajax({
//             url: Url,
//             type: "GET",
//             success: function(result){
//                 console.log(result)
//             },
//             error: function(error){
//                 console.log(`ERORR ${error}`)
//             } 
//         })
//     });
// });