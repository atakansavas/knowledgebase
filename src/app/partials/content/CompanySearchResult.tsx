import React from "react";
import clsx from "clsx";
import { SearchResponse } from "../../models/SearchResponse";

interface Props {
    data: SearchResponse[]
}

export default (props: Props) => {

    const data = props.data;

    if (data.length === 0) {
        return (
            <div className="kt-quick-search__result">
                <div className="kt-quick-search__message kt-hidden">
                    No record found
            </div>
            </div>
        );
    }

    return (
        <div className="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact kt-quick-search--has-result">
            <div className="kt-quick-search__result">
                <div className="kt-quick-search__category">Companies</div>

                {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="kt-quick-search__item">
                            <div className="kt-quick-search__item-img">
                                <img src="" alt="" />
                            </div>

                            <div className="kt-quick-search__item-wrapper">
                                <a href={"/company?id=" + item.id} className="kt-quick-search__item-title">
                                    {item.name}
                                </a>
                                <div className="kt-quick-search__item-desc">
                                    {item.description}
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                ))}
            </div>

        </div>
    );
}