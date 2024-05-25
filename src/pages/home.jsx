import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RandomProducts from "../components/randomProducts";
import SideNavbar from "../components/sideNavbar";
import BottomNavbar from "../components/bottomNavbar";

const Home = () => {
  const openSidebar = () => {
    document.documentElement.classList.add('hc-nav-yscroll');
    document.body.classList.add('hc-nav-open');
    var navbar = document.getElementById("leftsideNav");
    
    navbar.classList.add('nav-open');
    navbar.style.visibility = 'visible';
  };

  

  const [categories, setCategories] = useState([]); 
  const [activeCategory, setActiveCategory] = useState(null);



 

  useEffect(() => {
    const token = localStorage.getItem("token");
    //console.log(token);

   

    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(`https://utsarvajewels.com/api/crud?all_category_list&&token=${token}`);
        const categoryData = await categoryResponse.json();
        if (categoryData.option.status === 200) {
          setCategories(categoryData.data);
          localStorage.setItem("cartCount",categoryData.cartcount.CartCount);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    

    
  }, []);

  const getSubcat = async (a,b) => {

    setActiveCategory(a);

    try {
      const subcatResponse = await fetch(
        `https://utsarvajewels.com/api/crud?getSubcategory&&catId=${a}`
      );
      const subcatData = await subcatResponse.json();
      if (subcatData.count >= 0) {          
          var html = "";

          for (let i = 0; i < subcatData.Data.length; i++) {
            // console.log(subcatData.Data[i].name);

            html += `<div class="home-productc">
                      <a href="/shop/${b.toLowerCase()}/${subcatData.Data[i].sname}/1">${subcatData.Data[i].name}</a>
                    </div>`;

          }

          document.getElementById("fetch-subcategory").innerHTML = html;

          // console.log(subcatData.Data[1].name);
          
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
  
    getSubcat(1,"Mens");

  }, []);

  return (
    <>
      <SideNavbar />
      <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top" style={{ backgroundColor: "#ffffff !important" }}>
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <h4 className="m-0 fw-bold text-black">
            Utsarva
            <span className="text-success" style={{ color: "#ebb314 !important" }}>
              Jewels
            </span>
          </h4>
          <div className="ms-auto d-flex align-items-center">
            {/*<a href="cart.php" class="me-3 text-dark fs-5"><i class="bi bi-basket"></i></a>*/}
            <a href="#!" data-bs-toggle="modal" data-bs-target="#barcodeModal" className="me-3 text-dark fs-5">
              <i className="bi bi-qr-code-scan" />
            </a>
            <a className="toggle osahan-toggle fs-4 text-dark ms-auto" href="#" onClick={openSidebar}>
              <i className="bi bi-list" />
            </a>
          </div>
        </div>
        <div className="input-group input-group-lg bg-white border-0 shadow-sm rounded overflow-hiddem mt-3">
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search text-muted" />
          </span>
          <input type="text" className="form-control border-0 ps-0" placeholder="Search for Products.." />
        </div>
      </div>
      <div className="py-3">
        <div className="px-3 d-flex justify-content-between">
          <h6 className="mb-2 text-black fw-bold">Shop By Category</h6>
        </div>
        <div style={{ display: "flex", textAlign: "center", borderBottom: "#aba7a7 3px solid" }}>
          {categories.map((category) => (
            <div className="home-productc" key={category.id}>
              <a href="#!" className={activeCategory === category.id ? 'link-active' : ''} onClick={() => getSubcat(category.id,category.cname)}>
                {category.name}
              </a>
            </div>
          ))}
        </div>
        <div className="fetch-subcategory" id="fetch-subcategory" style={{ display: "flex", overflowY: "scroll" }}></div>
      </div>
      <div className="border-bottom border-top px-3 d-flex align-items-center justify-content-between">
        <ul className="nav home-tabs" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Latest Design
            </button>
          </li>          
        </ul>
      </div>
      <div>
        <div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="osahan-listing">
                <div className="osahan-listing p-0 m-0 row">
                  <RandomProducts />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              {/* Content for Profile Tab */}
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default Home;
