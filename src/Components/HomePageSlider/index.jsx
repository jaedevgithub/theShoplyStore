import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ShoppingCartContext } from "../../Context";
import leftArrowIcon from "/left-arrow.svg";
import rightArrowIcon from "/right-arrow.svg";

function HomePageSlider() {
  const context = useContext(ShoppingCartContext);
  const [productDetails, setProductDetails] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const productIdsToShow = [17, 10, 7, 14];

  useEffect(() => {
    // This useEffect fetches product details from an API when the component mounts.
    if (!hasFetched) {
      const fetchProductDetails = async () => {
        try {
          const productsData = await Promise.all(
            productIdsToShow.map(async (productId) => {
              const response = await fetch(
                `https://testing-api-cghc.onrender.com/products/${productId}`
              );
              const productData = await response.json();
              return productData;
            })
          );
          setProductDetails(productsData);
          setHasFetched(true);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetails();
    }
  }, [hasFetched]);

  const showProduct = (productDetail) => {
    // This function is called when a product is clicked to show its details.
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  return (
    <>
      <section className="md:hidden xl:block font-[Whyte] font-bold hidden sm:block relative -top-40 border-b-2 border-black bg-customYellow w-screen overflow-hidden">
        <div className="scale-150 w-screen overflow-hidden hd:h-[593px] fullhd:h-[993px] 4k:h-[1713px] relative top-[-90px] hd:top-[-40px] fullhd:top-[110px] 4k:top-[160px]">
          <div className="w-screen overflow-hidden">
            <Carousel
              swipeable={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              centerMode={false}
              infiniteLoop={true}
              transitionTime={15000}
              stopOnHover={true}
              showArrows={true}
              className="scale-125 h-[800px] relative top-[150px] 4k:h-[1513px] 4k:top-[330px]"
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title="Previous"
                    className="hd:w-[20px] relative hd:top-[230px] hd:right-[-900px] fullhd:right-[-1550px] qhd:right-[-1480px] fullhd:top-[315px] z-10 4k:right-[-2813px] 4k:top-[480px]"
                  >
                    <img src={leftArrowIcon} alt="Next" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title="Next"
                    className="relative hd:w-[20px] hd:right-[-310px] hd:top-[-140px] fullhd:right-[-570px] fullhd:top-[-230px] z-10 4k:right-[-1013px] 4k:top-[-380px]"
                  >
                    <img src={rightArrowIcon} alt="Previous" />
                  </button>
                )
              }
            >
              <div>
                <div>
                  <img
                    src="/carousel-image.png"
                    alt="Image for the Carousel"
                    className="w-full h-full inline-block cursor-pointer mt-20"
                  />
                  {productDetails.map((product) => (
                    <button
                      key={product.id}
                      className={`absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] fullhd:left-[15%] hd:left-[13%] flex items-center justify-center opacity-0 transition-opacity  hover:opacity-100`}
                    >
                      <Link
                        to={`/product-detail/${product.id}`}
                        className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                          product.id === 14 ? "special-style" : ""
                        }`}
                        onClick={() => showProduct(product)}
                      >
                        {hasFetched ? product.title : "Loading..."}
                      </Link>
                    </button>
                  ))}
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[40%] fullhd:left-[42%] 4k:left-[44%] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 ">
                    <Link
                      to={`/product-detail/${17}`}
                      className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(17) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 17)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 17)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[60%] fullhd:left-[62%] 4k:left-[65%] flex items-center justify-center opacity-0 transition-opacity left-[62%] hover:opacity-100">
                    <Link
                      to={`/product-detail/${10}`}
                      className={`text-black  hd:text-xl  bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(10) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 10)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 10)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[81.1%] fullhd:left-[84%]  4k:left-[86%] flex items-center justify-center opacity-0 transition-opacity hd:left-[84%] hover:opacity-100">
                    <Link
                      to={`/product-detail/${7}`}
                      className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(7) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 7)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 7)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/carousel-image.png"
                    alt="Image for the Carousel"
                    className="w-full h-full inline-block cursor-pointer mt-20"
                  />
                  {productDetails.map((product) => (
                    <button
                      key={product.id}
                      className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[150px] fullhd:left-[270px] 4k:left-[550px] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100"
                    >
                      <Link
                        to={`/product-detail/${product.id}`}
                        className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                          product.id === 14 ? "special-style" : ""
                        }`}
                        onClick={() => showProduct(product)}
                      >
                        {hasFetched ? product.title : "Loading..."}
                      </Link>
                    </button>
                  ))}
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[40%] fullhd:left-[42%] 4k:left-[44%] flex items-center justify-center opacity-0 transition-opacity left-[42%] hover:opacity-100">
                    <Link
                      to={`/product-detail/${17}`}
                      className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(17) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 17)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 17)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[60%] fullhd:left-[63%] 4k:left-[65%] flex items-center justify-center opacity-0 transition-opacity left-[62%] hover:opacity-100">
                    <Link
                      to={`/product-detail/${10}`}
                      className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(10) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 10)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 10)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                  <button className="absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[81%] fullhd:left-[84%] 4k:left-[86%] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                    <Link
                      to={`/product-detail/${7}`}
                      className={`text-black hd:text-xl bg-zinc-50 px-4 py-2 rounded-full ${
                        productIdsToShow.includes(7) ? "special-style" : ""
                      }`}
                      onClick={() =>
                        showProduct(
                          productDetails.find((product) => product.id === 7)
                        )
                      }
                    >
                      {hasFetched
                        ? productDetails.find((product) => product.id === 7)
                            .title
                        : "Loading..."}
                    </Link>
                  </button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="md:block relative border-b-2 xl:hidden border-black cursor-pointer -top-40 bg-customYellow h-[430px] md:h-[788px]">
        <div className="w-screen overflow-hidden max-w-screen relative top-20">
          <Carousel
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            centerMode={false}
            infiniteLoop={true}
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title="Previous"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <img src={leftArrowIcon} alt="Previous" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title="Next"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <img src={rightArrowIcon} alt="Next" />
                </button>
              )
            }
          >
            <div>
              <div className="relative group">
                <img
                  src="mobile-slider-1.png"
                  alt="Image for the Carousel"
                  className="w-full h-auto inline-block cursor-pointer"
                />
                <button className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity left-[-40px]">
                  <Link
                    to={`/product-detail/${10}`}
                    className={`text-black text-sm bg-zinc-50 px-4 py-2 rounded-full md:text-lg ${
                      productIdsToShow.includes(10) ? "special-style" : ""
                    }`}
                    onClick={() =>
                      showProduct(
                        productDetails.find((product) => product.id === 10)
                      )
                    }
                  >
                    {hasFetched
                      ? productDetails.find((product) => product.id === 10)
                          .title
                      : "Loading..."}
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <div className="relative group">
                <img
                  src="mobile-slider-2.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity left-[-160px] md:left-[-360px] z-10">
                  <Link
                    to={`/product-detail/${7}`}
                    className={`text-black text-sm bg-zinc-50 px-4 py-2 rounded-full md:text-lg  ${
                      productIdsToShow.includes(7) ? "special-style" : ""
                    }`}
                    onClick={() =>
                      showProduct(
                        productDetails.find((product) => product.id === 7)
                      )
                    }
                  >
                    {hasFetched
                      ? productDetails.find((product) => product.id === 7).title
                      : "Loading..."}
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <div className="relative group">
                <img
                  src="mobile-slider-3.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                {productDetails.map((product) => (
                  <button
                    key={product.id}
                    className={`absolute hd:top-[190px] fullhd:top-[260px] 4k:top-[450px] hd:left-[15%] hd:left-[13%] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100`}
                  >
                    {/* ... */}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="relative group">
                <img
                  src="mobile-slider-4.png"
                  alt="Image for the Carousel"
                  className="w-screen h-auto inline-block cursor-pointer object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity left-[90px] md:left-[150px] z-10">
                  <Link
                    to={`/product-detail/${7}`}
                    className={`text-black text-sm bg-zinc-50 px-4 py-2 rounded-full md:text-lg  ${
                      productIdsToShow.includes(7) ? "special-style" : ""
                    }`}
                    onClick={() =>
                      showProduct(
                        productDetails.find((product) => product.id === 7)
                      )
                    }
                  >
                    {hasFetched
                      ? productDetails.find((product) => product.id === 7).title
                      : "Loading..."}
                  </Link>
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default HomePageSlider;
