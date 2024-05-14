import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const GridProduct = (props) => {
    const [products, setProducts] = useState([]);
    const [isCount, setCount] = useState(false);
    const [pages, setPage] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const proRes = await fetch(
                    `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&&subcat=${props.subcat}&&page=${props.page}`
                );
                const proData = await proRes.json();

                if (proData.status.status == 200) {
                    setCount(true);
                    setProducts(proData.data);
                    setPage(proData.status.page);
                } else {
                    setCount(false);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [props]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props])

    var minuspage, addpage = "";
  var currentpage = props.page;


  if (currentpage == 1) {
    minuspage = 1
  } else {
    minuspage = parseInt(currentpage) - 1;
  }
  addpage = parseInt(currentpage) + 1;

    //   document.title = `Nivsjewels - ${props.cat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | ${props.subcat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;

    return (
        <>
            <div className="row">
                
        
            {products.map((pro, index) => (
                <div className="text-dark col-6 px-0 border-bottom border-end position-relative" key={index}>
                    <div className="list_item_gird m-0 bg-white listing-item">
                        <div className="list-item-img p-4" style={{ cursor: "pointer" }}>
                            <img src={pro.image} alt={pro.no} title={pro.no} className="img-fluid p-3" />
                        </div>

                        <div style={{ cursor: "pointer" }} className="tic-div px-3 pb-3">
                            <p className="mb-1 text-black">{pro.no}</p>
                            <h6 className="card-title mt-2 mb-3 text-success fw-bold">Weight : {pro.weight}</h6>
                            <div className="d-flex align-items-center justify-content-between gap-1">
                                <div className="size-btn">
                                    <div className="input-group">
                                        <a href="#" className="btn btn-light btn-sm border d-flex" data-bs-toggle="modal" data-bs-target="#exampleModala">500g <span><i className="bi bi-chevron-down small ms-2"></i></span></a>
                                    </div>
                                </div>
                                <div className="quantity-btn">
                                    <div className="input-group input-group-sm border rounded overflow-hiddem">
                                        <div className="btn btn-light text-success minus border-0 bg-white"><i className="bi bi-dash"></i></div>
                                        <input type="text" className="form-control text-center box border-0" value="1" placeholder="" aria-label="Example text with button addon" />
                                        <div className="btn btn-light text-success plus border-0 bg-white"><i className="bi bi-plus"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="text-center mb-3">
                        <a href="#!" className="btn btn-success shadow">Add To Cart</a>
                    </div>
                </div>
           
            ))}

            <center className="col-12 mt-2">
                <nav aria-label="Page navigation example" style={{ marginLeft: "25%" }}>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">«</span></a></li>

                        {pages.map((page, index) => (                            
                            <li className="page-item active" key={index}>
                                <Link className="page-link " to={`/shop/${props.cat}/${props.subcat}/${page.i}`} >{page.i}</Link>
                            </li>                       

                        ))}
                        <li className="page-item"><a className="page-link" href="#!" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                    </ul>
                </nav>
            </center>

            </div>
        </>
    )
}

export default GridProduct