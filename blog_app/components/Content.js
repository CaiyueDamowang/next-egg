import React, { Fragment } from 'react';
import Router from 'next/router';
export default function Content(params) {
    const { dataList } = params
    return (
        <Fragment>
            <div className="content-list-wrap">
                <div className="content-list">
                    {dataList.map(item => (
                            <a  onClick={ ()=>{ Router.push(`/blog/${item.route}`) } }>
                                {item.title}
                            </a>
                    ))}
                </div>
            </div>
        </Fragment>
    )
};
