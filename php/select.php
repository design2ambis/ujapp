<?php
include '../../include/connection.php';
include '../../include/function.php';

if(isset($_POST['get_sub_category'])){
    $cat = safe($con,$_POST['a']);
    $data = array();
    $web1=mysqli_query($con,"select category_id,sub_cat_id,sub_cat_name from sub_category_tbl where category_id='$cat'");
    if(mysqli_num_rows($web1)>0){
    $row['count'] = mysqli_num_rows($web1);
        while($lists=mysqli_fetch_assoc($web1)){
            $result = array(
                "sid"=>$lists['sub_cat_id'],
                "cid"=>$lists['category_id'],
                "name"=>$lists['sub_cat_name']
                );
                array_push($data,$result);
        }    
        $row['Data'] = $data;
    }else{
        $row['count'] = mysqli_num_rows($web1);
    }
    echo json_encode($row);
}

if(isset($_POST['remove_from_cart'])){
    
    $cId=safe($con,$_POST['id']);
        
    mysqli_query($con,"delete from cart where cart_id='$cId' ");
    
    echo "1";
}


if(isset($_GET['str'])){
    
    $customerid=$_SESSION['USER_SHOPPING_ID'];
    
    $res1=mysqli_query($con,"select cart.*, design_tbl.design_no, design_tbl.design_weight, design_tbl.design_id, design_tbl.design_sub_cat, design_tbl.design_image, design_tbl.design_cat  from cart,design_tbl
    where cart.cart_uid='$customerid' && cart.cart_pid=design_tbl.design_id  ");
    
    if(mysqli_num_rows($res1)>0){
    
    ?>
    
    <div class="bg-white shadow-sm my-3 p-3">
            
            <?php
                    $totalWeight=0;
                    $totalQty=0;
                    while($lis=mysqli_fetch_assoc($res1)){
                        $totalWeight=$totalWeight+$lis['cart_weight']*$lis['cart_qty'];
                        $totalQty=$totalQty+$lis['cart_qty'];
                ?>
            
            <div class="card od-card border-0 mb-2">
                <div class="d-flex bag-item">
                    <div class="bag-item-left">
                        <div class="border rounded-3 mx-1 mb-1">
                            <a href="product?pId=<?php echo base64_encode($lis['design_id']) ?>" class="product1">
                                <img src="<?php echo DESIGN_SITE.$lis['design_image'] ?>" class="img-fluid rounded-3" alt="">
                            </a>
                        </div>
                        
                    </div>
                    <div class="bag-item-right w-100">
                        <div class="card-body pe-0 py-0">
                            <p class="card-text mb-0 mt-1 text-black"><?php echo $lis['design_no'] ?></p>
                            <small class="text-muted"><i class="bi bi-shop me-1"></i> <?php echo getsingleData('category_tbl','category_name','category_id',$lis['design_cat']) ?> - <?php echo getsingleData('sub_category_tbl','sub_cat_name','sub_cat_id',$lis['design_sub_cat']) ?></small>
                            <h6 class="card-title mt-2 text-black fw-bold">Weight : <?php echo $lis['cart_weight']*$lis['cart_qty'] ?> &nbsp;&nbsp;&nbsp; Size : <?php echo $lis['cart_size'] ?> </h6>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="quantity-btn">
                                    <div class="text-muted small mb-1">Quantity</div>
                                    <div class="input-group input-group-sm border rounded overflow-hiddem">
                                        <div class="btn btn-light text-success minus border-0 bg-white" onclick="removeqtycart('<?php echo $lis['cart_id'] ?>')"><i class="bi bi-dash"></i></div>
                                        <input type="text" class="form-control text-center box border-0" id="qty_<?php echo $lis['cart_id'] ?>" value="<?php echo $lis['cart_qty'] ?>" placeholder="" aria-label="Example text with button addon">
                                        <div class="btn btn-light text-success plus border-0 bg-white" onclick="addqtycart('<?php echo $lis['cart_id'] ?>')" ><i class="bi bi-plus"></i></div>
                                    </div>
                                </div>
                                <div class="btn btn-light text-danger plus border-0 bg-white" onclick="removeCart('<?php echo $lis['cart_id'] ?>','2'); " data-bs-toggle="tooltip" title="" data-original-title="Remove" style="font-size:20px"><i class="bi bi-trash"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    
        <div class="bg-white shadow-sm mb-4 p-3">
            <h6 class="mb-3 text-black fw-bold">Order Summary</h6>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="text-muted">Total Weight</div>
                <div class="price"><?php echo number_format($totalWeight,2) ?></div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="text-muted">Total Items</div>
                <div class="text-success"><?php echo mysqli_num_rows($res1)." Nos" ?></div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="text-muted">Total Quantity</div>
                <div class="text-success"><?php echo $totalQty." Nos" ?></div>
            </div>
            <!--<hr class="my-3">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="mb-0 text-dark">Order Total</h6>
                    <small class="text-muted">inclusive of all taxes</small>
                </div>
                <div class="text-success h5">Rs.750</div>
            </div>-->
        </div>
        
        <div class="osahan-footer fixed-bottom p-3">
            <a href="#!" onclick="confirmorder()" class="btn btn-success btn-lg w-100 shadow">Confirm & Place Order</a>
        </div>
    
    
    <?php
    
    }else{
        
        ?>
        <div class="p-3 d-flex align-items-center justify-content-center vh-100 flex-column">
            <div class="text-center mb-4"><img src="img/empty.svg" alt="#" class="col-12 img-fluid px-5"></div>
            <div class="text-center">
                <h4>Your Cart is Empty</h4>
                <p class="text-muted">Looks like haven't made your choice yet.</p>
            </div>
            <div class="osahan-footer p-3">
                <a href="home.php" class="btn btn-success btn-lg w-100 shadow px-5">Back to Homepage</a>
            </div>
        </div>
        
        
        <?php
        
    }
    
}


?>