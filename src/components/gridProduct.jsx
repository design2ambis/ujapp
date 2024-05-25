import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AjaxLoader from "./ajaxLoader";
import Swal from 'sweetalert2';

const GridProduct = (props) => {
   
    const [products, setProducts] = useState([]);
    const [isCount, setCount] = useState(false);
    const [pages, setPage] = useState([]);
    const [Loader, setLoad] = useState([true]);


    useEffect(() => {

        const fetchData = async () => {
            setLoad(true);
            try {
                const proRes = await fetch(
                    `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&&subcat=${props.subcat}&&page=${props.page}`
                );
                const proData = await proRes.json();

                if (proData.status.status == 200) {
                    setCount(false);
                    setProducts(proData.data);
                    setPage(proData.status.page);
                } else {
                    setCount(true);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoad(false)
        };

        fetchData();
    }, [props]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props])

    var minuspage, addpage = "";
    var currentpage = props.page;


    if (currentpage == 1) {
        minuspage   = 1;
    } else {
        minuspage   = parseInt(currentpage) - 1;
    }
        addpage     = parseInt(currentpage) + 1;

    if(Loader){
        return <AjaxLoader />
    }

    if(isCount){
        return <h5 className="text-center margin-5 mt-5">No data</h5>
    }

    const  addToCart =  (async (pid,jcat,wei,siz)=>{

        var body = {"pid":pid,
                    "jewellcat":jcat,
                    "weight":wei,
                    "size":siz,
                    "qty":'1',
                    "token":localStorage.getItem("token"),
                    "add_cart":"add",
                    };

        var req = await fetch(`https://utsarvajewels.com/api/crud`,{
                    method: "POST",body: JSON.stringify(body)});
        var res   = await req.json();
        
            if(res.status==true){
                Swal.fire({
                    icon: "success",
                    title: "Welcome",
                    text: "Added to Cart"
                  })
            }
        
    })

    return (
        <>
            <div className="row pb-6">
                
        
            {products.map((pro, index) => (
               
                <div className="text-dark col-6 px-0 border-bottom border-end position-relative" key={index}>
                    <Link to={`/product/${pro.no}`}  style={{textDecoration: 'none'}}  >
                    <div className="list_item_gird m-0 bg-white listing-item">
                        <div className="list-item-img p-2" style={{ cursor: "pointer" }}>
                            <img src={pro.image} alt={pro.no} title={pro.no} className="img-fluid p-3" />
                        </div>

                        <div style={{ cursor: "pointer" }} className="tic-div px-3 pb-1 text-center">
                            <p className="mb-1 text-black">{pro.no}</p>
                            <h6 className="card-title mt-2 mb-2 text-success fw-bold">Weight : {pro.weight}</h6>
                           
                        </div>
                    </div>
                    </Link>

                    <div className="text-center mb-3">
                        <button type="button"  className="btn btn-success shadow" 
                            onClick={() =>
                                  addToCart(
                                    pro.id,
                                    pro.jewelcat,
                                    pro.weight,
                                    pro.size
                            )}>Add To Cart
                        </button>
                    </div>
                </div>
           
            ))}

            <div className="col-12 mt-2" style={{marginBottom: '80px',justifyContent: 'center',display:'flex'}}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {/* <li className="page-item"><a className="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">«</span></a></li> */}

                        {pages.map((page, index) => (    
                        <li className="page-item" key={index}>
                            {
                                page.i == props.page ? (                            
                                    <Link className="page-link pg-active" to={`/shop/${(props.cat.toLowerCase())}/${(props.subcat.toLowerCase())}/${page.i}`} >{page.i}</Link>                            
                                ):(                            
                                    <Link className="page-link text-dark" to={`/shop/${(props.cat.toLowerCase())}/${(props.subcat.toLowerCase())}/${page.i}`} >{page.i}</Link>
                                )
                            }                  
                            </li>
                        ))}
                        {/* <li className="page-item"><a className="page-link" href="#!" aria-label="Next"><span aria-hidden="true">»</span></a></li> */}
                    </ul>
                </nav>
            </div>

            </div>
        </>
    )
}

export default GridProduct