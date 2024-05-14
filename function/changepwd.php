<?php
include "../../include/connection.php";

if(isset($_POST['prepass'])){
    
    $prepass = mysqli_real_escape_string($con,$_POST['prepass']);
    $newpass = mysqli_real_escape_string($con,$_POST['newpass']);
    $encrypt = md5(md5($newpass));
    $uId = $_SESSION['USER_SHOPPING_ID'];
    
    $res=mysqli_query($con,"SELECT * from cust_otp  where co_mas='$uId' && co_hint='$prepass' ");
    
    if(mysqli_num_rows($res) > 0){
        
        mysqli_query($con,"UPDATE cust_otp set co_pass='$encrypt', co_hint='$newpass' where co_mas='$uId' ");
        
        $data = array(
            "status"=>true,
            "msg"=>"Password Changed..."
            );
        
    }else{
        
        $data = array(
            "status"=>false,
            "msg"=>"Wrong Old Password..."
            );
        
    }
    
    
    
    echo json_encode($data);
}

?>