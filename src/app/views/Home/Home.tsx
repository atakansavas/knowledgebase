import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import { Container, Typography } from "@material-ui/core";
import HeaderNotice from "../../partials/content/HeaderNotice";
import { SearchResponse } from "../../models/SearchResponse";
import RequestDto from "../../models/system/RequestDto";
import { ApiUrl } from "../../common/enums/ApiUrl";
import { MethodName } from "../../common/enums/MethodName";
import RequestHelper from "../../services/RequestHelper";
import PerfectScrollbar from "react-perfect-scrollbar";
import CompanySearchResult from "./components/CompanySearchResult";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Dropdown } from "react-bootstrap";
import HeaderDropdownToggle from "../../partials/content/CustomDropdowns/HeaderDropdownToggle";
import { AppContext } from "../../contexts/Layout/Index";

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

export default (props: any) => {
    // const dispatch = useLayoutDispatch()
    // dispatch(ActionTypes.SHOW_SEARCH_BAR);

    const context = useContext(AppContext);

    const { isLoggedIn, userName, setLogin, setAlertStatus, setAlertContent } = context;
    // setLogin(false);
    setAlertContent("test content");


    const backgroundImage = 'media/bg/bg-9.jpg';
    const [isLoading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<SearchResponse[]>([]);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        // setLoading(true);

    });


    function handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
        setData([]);
        setQuery(event.currentTarget.value);
    };

    useEffect(() => {
    setAlertStatus(true);

        const fetchData = async () => {

            if (query.length > 2) {
                setLoading(true);

                const requestDto = new RequestDto();
                requestDto.apiUrl = ApiUrl.BaseApi;
                requestDto.methodName = MethodName.Elastic_Search;
                requestDto.requestObject = "name=" + query;

                const searchResult = await RequestHelper.Get<SearchResponse[]>(requestDto);
                console.log(searchResult);
                setData(searchResult.response);
                setLoading(false);
            }


        };
        fetchData();
    }, [query]);

    return (
        <>
            {/* <!-- begin:: Hero --> */}
            <div className="kt-sc">
                {/* <div className="kt-sc"> */}

                <div className="kt-container ">
                    <div className="kt-sc__top">
                        <h3 className="kt-sc__title">
                            Search Center
										</h3>
                        <div className="kt-sc__nav">
                            <a href="#" className="kt-link kt-font-bold">Community</a>
                            <a href="#" className="kt-link kt-font-bold">Visit Blog</a>
                        </div>
                    </div>
                    <div className="kt-sc__bottom">
                        <h3 className="kt-heading kt-heading--center kt-heading--xxl kt-heading--medium">
                            Çalışacak harika yerler bul
                        </h3>

                        <h5 className="kt-heading kt-heading--center kt-heading--l kt-heading--medium">
                            200 milyon şirket yorumunu ve değerlendirmeyi keşfedin
                        </h5>

                        <Dropdown
                            // className="kt-header__topbar-item kt-header__topbar-item--search"
                            drop="down"
                        // onToggle={() => {
                        //   this.setState({
                        //     data: null,
                        //     loading: false,
                        //     searchValue: ""
                        //   });
                        // }}
                        >
                            <Dropdown.Toggle as={HeaderDropdownToggle} id="dropdown-toggle-search">
                                <form className="kt-sc__form">
                                    <div
                                        className={clsx("input-group", {
                                            "kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right": isLoading
                                        })}
                                    >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon"> */}
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                                    <g stroke="none" fill="none" >
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" opacity="0.3" />
                                                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Firma adi girin."
                                            aria-describedby="basic-addon1"
                                            value={query}
                                            onChange={e => handleSearchChange(e)}
                                        />

                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i
                                                    style={{ display: "flex" }}
                                                    hidden={!data || (data && !data.length)}
                                                    className="la la-close kt-quick-search__close"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </form>

                            </Dropdown.Toggle>



                            <Dropdown.Menu style={{ width: '100%' }} className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">

                                <PerfectScrollbar
                                    className="kt-quick-search__wrapper kt-scroll"
                                    data-height="325"
                                    data-mobile-height="200"
                                    data-scroll="true"
                                    options={perfectScrollbarOptions}
                                    style={{ maxHeight: "40vh" }}
                                >
                                    <CompanySearchResult data={data} />
                                </PerfectScrollbar>

                                {/* <div
                                    id="kt_quick_search_dropdown"
                                    className={clsx(
                                        "kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact",
                                        {
                                            "kt-quick-search--has-result": data && data.length
                                        }
                                    )}
                                >
                                  
                                </div> */}
                            </Dropdown.Menu>
                        </Dropdown>




                    </div>
                </div>
            </div>

            {/* <!-- end:: Hero --> */}

            {/* <!-- begin:: Section --> */}
            <div className="kt-container ">
                <div className="row">
                    <div className="col-lg-4">
                        <a href="#" className="kt-portlet kt-iconbox kt-iconbox--animate-slow">
                            <div className="kt-portlet__body">
                                <div className="kt-iconbox__body">
                                    <div className="kt-iconbox__icon">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" fill="none" >
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
                                                <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
                                            </g>
                                        </svg> </div>
                                    <div className="kt-iconbox__desc">
                                        <h3 className="kt-iconbox__title">
                                            Get Started
														</h3>
                                        <div className="kt-iconbox__content">
                                            Base FAQ Questions
														</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="#" className="kt-portlet kt-iconbox kt-iconbox--animate">
                            <div className="kt-portlet__body">
                                <div className="kt-iconbox__body">
                                    <div className="kt-iconbox__icon">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" fill="none" >
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z" fill="#000000" opacity="0.3" />
                                                <path d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z" fill="#000000" />
                                                <path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z" fill="#000000" />
                                            </g>
                                        </svg> </div>
                                    <div className="kt-iconbox__desc">
                                        <h3 className="kt-iconbox__title">
                                            Tutorials
														</h3>
                                        <div className="kt-iconbox__content">
                                            Books & Articles
														</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="#" className="kt-portlet kt-iconbox kt-iconbox--animate-fast">
                            <div className="kt-portlet__body">
                                <div className="kt-iconbox__body">
                                    <div className="kt-iconbox__icon">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" fill="none" >
                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" opacity="0.3" />
                                                <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" />
                                            </g>
                                        </svg> </div>
                                    <div className="kt-iconbox__desc">
                                        <h3 className="kt-iconbox__title">
                                            User Guide
														</h3>
                                        <div className="kt-iconbox__content">
                                            Complete Knowledgebase
														</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- end:: iconbox --> */}
        </>
    );

    // return (
    //     <>
    //         <HeaderNotice className="" icon="flaticon-warning kt-font-primary">
    //             <button onClick={() => dispatch(ActionTypes.HIDE_SEARCH_BAR)}>
    //                 Hide
    // </button>
    //             <button onClick={() => dispatch(ActionTypes.SHOW_SEARCH_BAR)}>
    //                 Show
    // </button>
    //             <p>
    //                 The container centers your content horizontally. It's the most basic
    //                 layout element.
    //       </p>
    //             <p>
    //                 For more info please check the components's official{" "}
    //                 <a
    //                     target="_blank"
    //                     className="kt-link"
    //                     rel="noopener noreferrer"
    //                     href="https://material-ui.com/components/container/"
    //                 >
    //                     demos & documentation
    //         </a>
    //             </p>
    //         </HeaderNotice>

    //         <CodeExample jsCode={jsCode1} beforeCodeTitle="Fluid">
    //             <div className="kt-section">
    //                 <span className="kt-section__sub">
    //                     A fluid container width is bounded by that maxWidth property value.
    //         </span>
    //                 <div className="kt-separator kt-separator--dashed"></div>
    //                 <div className="kt-section__content">
    //                     <Container maxWidth="sm">
    //                         <Typography
    //                             component="div"
    //                             style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    //                         />
    //                     </Container>
    //                 </div>
    //             </div>
    //         </CodeExample>

    //         <CodeExample jsCode={jsCode2} beforeCodeTitle="Fixed">
    //             <div className="kt-section">
    //                 <span className="kt-section__sub">
    //                     If you prefer to design for a fixed set of sizes instead of trying
    //                     to accommodate a fully fluid viewport, you can set the fixed
    //                     property. The max-width matches the min-width of the current
    //                     breakpoint.
    //         </span>
    //                 <div className="kt-separator kt-separator--dashed"></div>
    //                 <div className="kt-section__content">
    //                     <Container fixed>
    //                         <Typography
    //                             component="div"
    //                             style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    //                         />
    //                     </Container>
    //                 </div>
    //             </div>
    //         </CodeExample>
    //     </>
    // );
}
