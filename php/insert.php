<?php
include '../../include/connection.php';
include '../../include/function.php';

if(isset($_POST['insert_cart'])){
    
    $uId=$_SESSION['USER_SHOPPING_ID'];
    if (function_exists('date_default_timezone_set'))
    {
        date_default_timezone_set('Asia/Kolkata');
    }
    $date=date('Y-m-d');
    
    $usrwgt=safe($con,$_POST['usrwgt']);
    $usrsize=safe($con,$_POST['usrsize']);
    $qty=safe($con,$_POST['qty']);
    $designid=safe($con,$_POST['designid']);
    
    $fromwgt=safe($con,$_POST['fromwgt']);
    $towgt=safe($con,$_POST['towgt']);
    $fromsize=safe($con,$_POST['fromsize']);
    $tosize=safe($con,$_POST['tosize']);
    
    $res = mysqli_query($con,"select cart_id, cart_qty from cart where cart_uid = '$uId' && cart_pid = '$designid' ");
    if(mysqli_num_rows($res)==0){
        
        mysqli_query($con,"insert into cart values (NULL,'$uId','$designid','$qty',NULL,'$usrwgt','$usrsize','$fromwgt','$towgt','$fromsize','$tosize','$date',
        NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL) ");
        
        echo "1";
            
    }else{
        
        $row = mysqli_fetch_assoc($res);
        
        $qty = $row['cart_qty']+1;
        $id = $row['cart_id'];
        
        mysqli_query($con,"update cart set cart_qty='$qty' where cart_id='$id' ");
        
        echo "2";
        
    }
    
    
    
}  

if(isset($_POST['insert_cart_home'])){
    
    $uId=$_SESSION['USER_SHOPPING_ID'];
    if (function_exists('date_default_timezone_set'))
    {
        date_default_timezone_set('Asia/Kolkata');
    }
    $date=date('Y-m-d');
    
    $designid=safe($con,$_POST['a']);
    
    $res = mysqli_query($con,"SELECT * FROM design_tbl where design_id = '$designid' ");
    $row = mysqli_fetch_assoc($res);
    
    $usrwgt=safe($con,$row['design_weight']);
    $usrsize=safe($con,$row['design_act']);
    $qty=1;
    
    
    $fromwgt=safe($con,$row['design_weightfrom']);
    $towgt=safe($con,$row['design_weightto']);
    $fromsize=safe($con,$row['design_from']);
    $tosize=safe($con,$row['design_to']);
    
    $res = mysqli_query($con,"select cart_id, cart_qty from cart where cart_uid = '$uId' && cart_pid = '$designid' ");
    if(mysqli_num_rows($res)==0){
        
        mysqli_query($con,"insert into cart values (NULL,'$uId','$designid','$qty',NULL,'$usrwgt','$usrsize','$fromwgt','$towgt','$fromsize','$tosize','$date',
        NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL) ");
        
        $res = mysqli_query($con,"select cart_id, cart_qty from cart where cart_uid = '$uId' ");
        
        $data = array(
            "status"=>true,
            "type"=>"1",
            "count"=>mysqli_num_rows($res)
            );
            
    }else{
        
        $row = mysqli_fetch_assoc($res);
        
        $qty = $row['cart_qty']+1;
        $id = $row['cart_id'];
        
        mysqli_query($con,"update cart set cart_qty='$qty' where cart_id='$id' ");
        
        $res = mysqli_query($con,"select cart_id, cart_qty from cart where cart_uid = '$uId' ");
        
        $data = array(
            "status"=>true,
            "type"=>"2",
            "count"=>mysqli_num_rows($res)
            );
        
    }
    
    
    die(json_encode($data));
   
    
}  

if(isset($_POST['update_from_cart'])){
    
    $id=safe($con,$_POST['id']);
    $qty=safe($con,$_POST['qty']);
    
    $uId=$_SESSION['USER_SHOPPING_ID'];
    
    if (function_exists('date_default_timezone_set'))
    {
        date_default_timezone_set('Asia/Kolkata');
    }
    $date=date('Y-m-d');
    
    mysqli_query($con,"update cart set cart_qty='$qty' where cart_id='$id' ");
    
    echo "1";
    
}

?>