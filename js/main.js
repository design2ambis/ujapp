function getSubcat(a){
    
    $(".fetch-subcategory").html("");
    
    $.ajax({
            type: "POST",
            dataType: 'json',
            url: "php/select",
            data: {get_sub_category:"1",a:a},
            success: function(res) {
                if(res.count!=='0'){
                    for(var i=0;i<res.count;i++){
                        $(".fetch-subcategory").append('<div class="home-productc"><a href="category.php?sId='+res.Data[i].sid+'&&cId='+res.Data[i].cid+'&&name='+res.Data[i].name+'" >'+res.Data[i].name+'</a></div>');
                    }
                }
            }
        });
    
}