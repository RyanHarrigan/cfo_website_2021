/** @jsxImportSource @emotion/react */
import React, {Dispatch, useEffect, useContext, useRef, useReducer, RefObject} from "react";
import {Nav} from "react-bootstrap";
import {ScrollAction, scrollRegisterReducer, ScrollRegisterState} from "./scroll.reducer";
import _ from 'lodash';
import {css, SerializedStyles} from "@emotion/react";

export type ScrollAnchorContext = {
    anchorDispatch: Dispatch<ScrollAction>,
    anchorRefs: ScrollRegisterState,
}

export const ScrollRegisterContext = React.createContext({} as ScrollAnchorContext);

export const ScrollingAnchor = ({anchorId = '', children}: {anchorId: string, children?: any}) => {
    const ref = useRef(null);

    useScrollingAnchor(anchorId, ref);

    return <div ref={ref}>
        {children}
    </div>
};

export function useScrollingAnchor(anchorId:string, ref: RefObject<any>) {
    const {anchorDispatch: dispatch} = useContext(ScrollRegisterContext);

    useEffect(() => {
        const anchorRef = ref?.current;

        if (anchorRef) {
            dispatch({type: "REGISTER_REF", anchorId, anchorRef});
        }

        return () =>  dispatch({type: "DEREGISTER_REF", anchorId});
    }, [ref, anchorId]);
}

export const ScrollingLink = ({toAnchor, children, cssStyles}: {toAnchor: string, children: any, cssStyles?: SerializedStyles}) => {
    const {anchorRefs} = useContext(ScrollRegisterContext);

    return <Nav.Link css={cssStyles} eventKey={toAnchor} onClick={() => {
        const anchorRef: any = _.get(anchorRefs, toAnchor, null)

        try {
            window.location.href = `${window.location.protocol}//${window.location.host}#${toAnchor}`
            anchorRef?.scrollIntoView({
                behavior: "smooth",
            });
        } catch {
            // do nothing
        }
    }}>
        {children}
    </Nav.Link>
}

export const ScrollingProvider = ({children}: {children: any}) => {
    const [anchorRefs, anchorDispatch] = useReducer(scrollRegisterReducer, {});

    return <ScrollRegisterContext.Provider value={{anchorRefs, anchorDispatch}}>
        {children}
    </ScrollRegisterContext.Provider>
}
