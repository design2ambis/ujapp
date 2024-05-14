<?php
include "../../include/connection.php";
include "../../include/function.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST['register_submit'])){
    
$companyName=safe($con,$_POST['Companyname']);
$customerName=safe($con,$_POST['Customername']);
$customerType=safe($con,$_POST['customerType']);
$address=safe($con,$_POST['address']);
$customerCity=safe($con,$_POST['customerCity']);
$customerPhone=safe($con,$_POST['customerPhone']);
$customerMobile=safe($con,$_POST['customerMobile']);
$customerWebsite=safe($con,$_POST['customerWebsite']);
$customerEmail=safe($con,$_POST['customerEmail']);
$customerPan=safe($con,$_POST['customerPan']);
$customerGst=safe($con,$_POST['customerGst']);
$custpassword=safe($con,$_POST['password']);

$encrypt=md5(md5($custpassword));

if(isset($_FILES['panAttach']['name']) && $_FILES['panAttach']['name']!==''){
    
    $filename = $_FILES['panAttach']['name'];
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    
    if($ext=='png' || $ext=='jpg' || $ext=='jpeg' || $ext=='pdf'){
    
    $panAttach=rand(111111111,999999999).'_'.$_FILES['panAttach']['name'];
    move_uploaded_file($_FILES['panAttach']['tmp_name'],DOCUMENT_PATH.$panAttach);
    
    }else{
        
        $panAttach=null;
    }
    
}else{
    $panAttach=null;
}

if(isset($_FILES['gstAttach']['name']) && $_FILES['gstAttach']['name']!==''){
    $filename1 = $_FILES['gstAttach']['name'];
    $ext1 = pathinfo($filename1, PATHINFO_EXTENSION);
    
    if($ext1=='png' || $ext1=='jpg' || $ext1=='jpeg' || $ext1=='pdf'){
        
    $gstAttach=rand(111111111,999999999).'_'.$_FILES['gstAttach']['name'];
    move_uploaded_file($_FILES['gstAttach']['tmp_name'],DOCUMENT_PATH.$gstAttach);
    
        
    }else{
        
        $panAttach=null;
    }
    
}else{
    $gstAttach=null;
}

  
$short=substr($companyName, 0, 3);

    $res=mysqli_query($con,"select company_name from customer where cus_email='$customerEmail' && company_name='$companyName' ");
    
    $VerificationSub="Email Verification from Utsarva Jewels";
    
    if(mysqli_num_rows($res)>0){
        
       $data = array(
           "status"=>false,
           "msg"=>"Already email is used.."
           );
        
    }else{
        
    $verification_id=rand(1111,9999);
    
    $md5file = md5($verification_id);
     
    mysqli_query($con,"insert into customer(company_name, cus_code, cus_name, cus_type, cus_address, cus_city, cus_phone, cus_mobile, cus_website, cus_email, cus_pan, cus_gst, cus_panattach, cus_gstattach, cus_sta, entire_type)
    values ('$companyName','$short','$customerName','$customerType','$address','$customerCity','$customerPhone','$customerMobile','$customerWebsite','$customerEmail','$customerPan','$customerGst','$panAttach','$gstAttach','0','2')");
    
    $uId=mysqli_insert_id($con);
    
    mysqli_query($con,"insert into cust_otp(co_mas, co_no, co_pass, co_hint)values('$uId','$md5file','$encrypt','$custpassword')");
    
    $message='<div class="ii gt"><div class="a3s aiL msg-6204254553627197348"><u></u><div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff"><table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-6204254553627197348email_table" style="border-collapse:collapse"><tbody><tr><td id="m_-6204254553627197348email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px"><span style="color:#ffffff;font-size:1px">Thank you '.$customerName.' for Being a member in Utsarva Jewels.</span></td></tr><tr><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="15" style="line-height:15px">&nbsp;</td></tr><tr><td width="32" align="left" valign="middle" style="height:32px;line-height:0px"><img src="https://utsarvajewels.com/utu.png" width="100px" align="center" alt="Utsarva Jewels" style="border:0;font-size:19px;font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#1877f2" class="CToWUd"></td></tr><tr style="border-bottom:solid 1px #e5e5e5"><td height="15" style="line-height:15px">&nbsp;</td></tr></tbody></table></td><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="4" style="line-height:4px">&nbsp;</td></tr><tr><td><span class="m_-6204254553627197348mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823"><span style="font-size:15px"><p></p><div style="margin-top:16px;margin-bottom:20px">Hi '.$customerName.',</div><div>Thank you '.$customerName.' for Being a member in Utsarva Jewels.</div>Please click the following link:<p></p><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:max-content;margin-top:20px;margin-bottom:20px"><tbody><tr></tr></tbody></table><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="20" style="line-height:20px">&nbsp;</td></tr><tr><td align="middle"><a href="#!" style="color:#3b5998;text-decoration:none" target="_blank" data-saferedirecturl="#!"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">';
    
    $message .='<tbody><tr><td style="border-collapse:collapse;border-radius:6px;text-align:center;display:block;border:none;background:#1877f2;padding:6px 20px 10px 20px"><a href="#!" style="color:#3b5998;text-decoration:none;display:block" target="_blank" data-saferedirecturl="#"><center><font size="3"><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#ffffff;font-weight:500;font-family:Roboto-Medium,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:17px">'.$verification_id.'</span></font></center></a></td></tr></tbody></table></a></td></tr><tr><td height="8" style="line-height:8px">&nbsp;</td></tr><tr><td height="20" style="line-height:20px">&nbsp;</td></tr></tbody></table><br><div><span style="color:#333333;font-weight:bold">Didnt request this change?</span></div>If you didnt request a new password, <a href="#" style="color:#0a7cff;text-decoration:none" target="_blank" data-saferedirecturl="#">let us know</a>.</span></span></td></tr><tr><td height="50" style="line-height:50px">&nbsp;</td></tr></tbody></table></td><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td><td><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse"><tbody><tr style="border-top:solid 1px #e5e5e5"><td height="19" style="line-height:19px">&nbsp;</td></tr><tr><td style="font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:12px;color:#8a8d91;line-height:16px;font-weight:400">This message was sent to <a href="mailto:'.$customerEmail.'" style="color:#216fdb;text-decoration:none" target="_blank">'.$customerEmail.'</a> at your request.<br></td></tr></tbody></table></td><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td></tr><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr></tbody></table><span><img src="" style="border:0;width:1px;height:1px" class="CToWUd"></span></td></tr></tbody></table></div><div class="yj6qo"></div><div class="adL"></div></div></div>';
    
    $_SESSION['verify_uid'] = $uId;    
    }
    
    
    $mail = new PHPMailer(true);
    try {
    //Server settings
   

    $mail->isSMTP();  
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "ssl";
    $mail->Port     = 465;  
    $mail->Username = "no-reply@utsarvajewels.com";
    $mail->Password = "utsarvaJewels";
    $mail->Host     = "mail.utsarvajewels.com";
    $mail->Mailer   = "smtp";
    $mail->SetFrom("no-reply@utsarvajewels.com");
    $mail->AddReplyTo("no-reply@utsarvajewels.com");
    $mail->AddAddress($customerEmail); 
    $mail->Subject = ($VerificationSub);
    $mail->WordWrap = 80;
    $mail->MsgHTML($message);
    
    $mail->IsHTML(true);
    
    $mail->send();
        $data = array(
           "status"=>true,
           "msg"=>"Successfully Completed"
           );
    } catch (Exception $e) {
    
        $data = array(
           "status"=>false,
           "msg"=>$mail->ErrorInfo
           );
    
    }
    
    echo json_encode($data);

}
?>