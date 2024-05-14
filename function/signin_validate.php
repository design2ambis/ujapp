<?php
include "../../include/connection.php";




if(isset($_POST['login'])){
    $email=mysqli_real_escape_string($con,$_POST['email']);
    $password=mysqli_real_escape_string($con,$_POST['password']);
    $encrypt=md5(md5($password));
    $res=mysqli_query($con,"select cust_otp.co_pass,customer.cus_id,customer.company_name,customer.cus_name from cust_otp,customer 
    where cust_otp.co_mas=customer.cus_id && customer.cus_email='$email' && cust_otp.co_pass='$encrypt' && customer.cus_sta='1' ");
    
    $count=mysqli_num_rows($res);
    
    if($count>0){
       
       $row=mysqli_fetch_assoc($res);
       $_SESSION['UJ_SHOPPING_LOGIN']="YES";
       $_SESSION['USER_SHOPPING_ID']=$row['cus_id'];
       $_SESSION['USER_SHOPPING_NAME']=$row['cus_name'];
       $_SESSION['USER_SHOPPING_COMPANY']=$row['company_name'];
       
       $data = array(
            "status"=>true,
            "msg"=>"Successfully Login"
            );
        
        
    }else{
        
       $data = array(
            "status"=>false,
            "msg"=>"Invalid Password ..."
            );
       
    }
    
    echo json_encode($data);
}

?>