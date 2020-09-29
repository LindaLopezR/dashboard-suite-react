import React from 'react';

export const NotDataCards = (props) => {
    return (
        <h3 className="text-noData">
            <span className="fa-stack fa-lg">
                <i className="fa fa-list-alt fa-stack-1x"></i>
                <i className="fa fa-ban fa-stack-2x text-danger"></i>
            </span>{' '}
            No hay datos por mostrar
        </h3>
    );
}