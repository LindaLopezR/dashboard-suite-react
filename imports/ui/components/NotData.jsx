import React from 'react';

export const NotDataCards = (props) => {
    return (
        <h3 className="text-noData">
            <span className="fa-stack fa-2x">
                <i className="fa fa-list-alt fa-stack-1x"></i>
                <i className="fa fa-ban fa-stack-2x"></i>
            </span><br />
            No hay datos por mostrar
        </h3>
    );
}